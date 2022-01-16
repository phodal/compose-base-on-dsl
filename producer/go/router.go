package producer

import (
	parser "dsl-compose/libs/go"
	"fmt"
	"github.com/antlr/antlr4/runtime/Go/antlr"
)

type EntityFlow struct {
	Entity string
	Calls  []CodeCall
}

type CodeCall struct {
	FunctionName string
	Parameters   []ParamType
}

type ParamType struct {
	TypeName  string
	TypeValue string
}

type EntityListener struct {
	*parser.BaseComposeParserListener
	flow       EntityFlow
	ruleNames  []string
	tokenNames []string
}

func NewTreeShapeListener(ruleNames []string, tokenNames []string) *EntityListener {
	return &EntityListener{
		ruleNames:  ruleNames,
		tokenNames: tokenNames,
		flow:       EntityFlow{},
	}
}

func (t *EntityListener) EnterEntityModifier(ctx *parser.EntityModifierContext) {
	t.flow.Entity = ctx.GetText()
	// todo: handle entity
}

func (t *EntityListener) EnterEntityCall(ctx *parser.EntityCallContext) {
	call := CodeCall{
		FunctionName: ctx.Identifier().GetText(),
	}

	paramList := ctx.ParameterList().(*parser.ParameterListContext)
	for _, lit := range paramList.AllLiteral() {
		context := lit.(*parser.LiteralContext)

		payload := context.GetChildren()[0].GetPayload()
		fmt.Println(payload.(*antlr.CommonToken))

		fmt.Println(t.tokenNames)

		paramType := ParamType{
			TypeName:  t.ruleNames[context.GetRuleIndex()],
			TypeValue: context.GetText(),
		}
		call.Parameters = append(call.Parameters, paramType)
	}

	t.flow.Calls = append(t.flow.Calls, call)
}

func (t *EntityListener) Entity() EntityFlow {
	return t.flow
}

func Compile(str string) EntityFlow {
	input := antlr.NewInputStream(str)
	lexer := parser.NewComposeLexer(input)
	stream := antlr.NewCommonTokenStream(lexer, 0)

	p := parser.NewComposeParser(stream)
	p.AddErrorListener(antlr.NewDiagnosticErrorListener(true))

	p.BuildParseTrees = true
	tree := p.CompilationUnit()

	listener := NewTreeShapeListener(p.GetRuleNames(), p.GetLiteralNames())
	antlr.ParseTreeWalkerDefault.Walk(listener, tree)

	return listener.Entity()
}
