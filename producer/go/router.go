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
	Parameters   []string
}

type EntityListener struct {
	*parser.BaseComposeParserListener
	flow EntityFlow
}

func NewTreeShapeListener() *EntityListener {
	return &EntityListener{
		flow: EntityFlow{},
	}
}

func (t *EntityListener) EnterEntityModifier(ctx antlr.ParserRuleContext) {
	t.flow.Entity = ctx.GetText()
	fmt.Println(ctx.GetText())
}

func (t *EntityListener) EnterEntityCall(ctx antlr.ParserRuleContext) {
	fmt.Println(ctx.GetText())
}

func (t *EntityListener) Entity() EntityFlow {
	return t.flow
}

func compile(str string) EntityFlow {
	input := antlr.NewInputStream(str)
	lexer := parser.NewComposeLexer(input)
	stream := antlr.NewCommonTokenStream(lexer, 0)

	p := parser.NewComposeParser(stream)
	p.AddErrorListener(antlr.NewDiagnosticErrorListener(true))

	p.BuildParseTrees = true
	tree := p.CompilationUnit()

	listener := NewTreeShapeListener()
	antlr.ParseTreeWalkerDefault.Walk(listener, tree)

	return listener.Entity()
}
