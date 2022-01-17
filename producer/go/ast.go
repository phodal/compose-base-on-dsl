package producer

import (
	parser "dsl-compose/libs/go"
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
	flow          EntityFlow
	ruleNames     []string
	symbolicNames []string
}

func NewTreeShapeListener(ruleNames []string, symbolicNames []string) *EntityListener {
	return &EntityListener{
		ruleNames:     ruleNames,
		symbolicNames: symbolicNames,
		flow:          EntityFlow{},
	}
}

func (t *EntityListener) EnterEntityModifier(ctx *parser.EntityModifierContext) {
	t.flow.Entity = ctx.GetText()
}

func (t *EntityListener) EnterEntityCall(ctx *parser.EntityCallContext) {
	call := CodeCall{
		FunctionName: ctx.Identifier().GetText(),
	}

	paramList := ctx.ParameterList().(*parser.ParameterListContext)
	for _, lit := range paramList.AllLiteral() {
		literal := lit.(*parser.LiteralContext)

		payload := literal.GetChildren()[0].GetPayload()
		index := payload.(*antlr.CommonToken).GetTokenType()

		typeName := t.ruleNames[literal.GetRuleIndex()]

		switch t.symbolicNames[index] {
		case "IntegerLiteral":
			typeName = "int"
		case "FloatingPointLiteral":
			typeName = "float"
		case "BooleanLiteral":
			typeName = "bool"
		case "CharacterLiteral":
			typeName = "char"
		case "StringLiteral":
			typeName = "string"
		case "NullLiteral":
			typeName = "null"
		default:

		}

		paramType := ParamType{
			TypeName:  typeName,
			TypeValue: literal.GetText(),
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

	listener := NewTreeShapeListener(p.GetRuleNames(), p.GetSymbolicNames())
	antlr.ParseTreeWalkerDefault.Walk(listener, tree)

	return listener.Entity()
}
