// Code generated from ComposeParser.g4 by ANTLR 4.9.3. DO NOT EDIT.

package parser // ComposeParser

import (
	"fmt"
	"reflect"
	"strconv"

	"github.com/antlr/antlr4/runtime/Go/antlr"
)

// Suppress unused import errors
var _ = fmt.Printf
var _ = reflect.Copy
var _ = strconv.Itoa

var parserATN = []uint16{
	3, 24715, 42794, 33075, 47597, 16764, 15335, 30598, 22884, 3, 24, 47, 4,
	2, 9, 2, 4, 3, 9, 3, 4, 4, 9, 4, 4, 5, 9, 5, 4, 6, 9, 6, 4, 7, 9, 7, 4,
	8, 9, 8, 3, 2, 5, 2, 18, 10, 2, 3, 3, 3, 3, 3, 3, 7, 3, 23, 10, 3, 12,
	3, 14, 3, 26, 11, 3, 3, 4, 3, 4, 3, 5, 3, 5, 3, 5, 3, 5, 3, 5, 3, 6, 3,
	6, 3, 6, 7, 6, 38, 10, 6, 12, 6, 14, 6, 41, 11, 6, 3, 7, 3, 7, 3, 8, 3,
	8, 3, 8, 2, 2, 9, 2, 4, 6, 8, 10, 12, 14, 2, 4, 3, 2, 12, 14, 3, 2, 16,
	21, 2, 42, 2, 17, 3, 2, 2, 2, 4, 19, 3, 2, 2, 2, 6, 27, 3, 2, 2, 2, 8,
	29, 3, 2, 2, 2, 10, 34, 3, 2, 2, 2, 12, 42, 3, 2, 2, 2, 14, 44, 3, 2, 2,
	2, 16, 18, 5, 4, 3, 2, 17, 16, 3, 2, 2, 2, 17, 18, 3, 2, 2, 2, 18, 3, 3,
	2, 2, 2, 19, 24, 5, 6, 4, 2, 20, 21, 7, 11, 2, 2, 21, 23, 5, 8, 5, 2, 22,
	20, 3, 2, 2, 2, 23, 26, 3, 2, 2, 2, 24, 22, 3, 2, 2, 2, 24, 25, 3, 2, 2,
	2, 25, 5, 3, 2, 2, 2, 26, 24, 3, 2, 2, 2, 27, 28, 9, 2, 2, 2, 28, 7, 3,
	2, 2, 2, 29, 30, 5, 14, 8, 2, 30, 31, 7, 3, 2, 2, 31, 32, 5, 10, 6, 2,
	32, 33, 7, 4, 2, 2, 33, 9, 3, 2, 2, 2, 34, 39, 5, 12, 7, 2, 35, 36, 7,
	10, 2, 2, 36, 38, 5, 12, 7, 2, 37, 35, 3, 2, 2, 2, 38, 41, 3, 2, 2, 2,
	39, 37, 3, 2, 2, 2, 39, 40, 3, 2, 2, 2, 40, 11, 3, 2, 2, 2, 41, 39, 3,
	2, 2, 2, 42, 43, 9, 3, 2, 2, 43, 13, 3, 2, 2, 2, 44, 45, 7, 15, 2, 2, 45,
	15, 3, 2, 2, 2, 5, 17, 24, 39,
}
var literalNames = []string{
	"", "'('", "')'", "'{'", "'}'", "'['", "']'", "';'", "','", "'.'", "'Book'",
	"'Note'", "'Paper'", "", "", "", "", "", "", "'null'",
}
var symbolicNames = []string{
	"", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", "SEMI",
	"COMMA", "DOT", "Book", "Note", "Paser", "Identifier", "IntegerLiteral",
	"FloatingPointLiteral", "BooleanLiteral", "CharacterLiteral", "StringLiteral",
	"NullLiteral", "WS", "COMMENT", "LINE_COMMENT",
}

var ruleNames = []string{
	"compilationUnit", "entityDecl", "entityModifier", "entityCall", "parameterList",
	"literal", "identifier",
}

type ComposeParser struct {
	*antlr.BaseParser
}

// NewComposeParser produces a new parser instance for the optional input antlr.TokenStream.
//
// The *ComposeParser instance produced may be reused by calling the SetInputStream method.
// The initial parser configuration is expensive to construct, and the object is not thread-safe;
// however, if used within a Golang sync.Pool, the construction cost amortizes well and the
// objects can be used in a thread-safe manner.
func NewComposeParser(input antlr.TokenStream) *ComposeParser {
	this := new(ComposeParser)
	deserializer := antlr.NewATNDeserializer(nil)
	deserializedATN := deserializer.DeserializeFromUInt16(parserATN)
	decisionToDFA := make([]*antlr.DFA, len(deserializedATN.DecisionToState))
	for index, ds := range deserializedATN.DecisionToState {
		decisionToDFA[index] = antlr.NewDFA(ds, index)
	}
	this.BaseParser = antlr.NewBaseParser(input)

	this.Interpreter = antlr.NewParserATNSimulator(this, deserializedATN, decisionToDFA, antlr.NewPredictionContextCache())
	this.RuleNames = ruleNames
	this.LiteralNames = literalNames
	this.SymbolicNames = symbolicNames
	this.GrammarFileName = "ComposeParser.g4"

	return this
}

// ComposeParser tokens.
const (
	ComposeParserEOF                  = antlr.TokenEOF
	ComposeParserLPAREN               = 1
	ComposeParserRPAREN               = 2
	ComposeParserLBRACE               = 3
	ComposeParserRBRACE               = 4
	ComposeParserLBRACK               = 5
	ComposeParserRBRACK               = 6
	ComposeParserSEMI                 = 7
	ComposeParserCOMMA                = 8
	ComposeParserDOT                  = 9
	ComposeParserBook                 = 10
	ComposeParserNote                 = 11
	ComposeParserPaser                = 12
	ComposeParserIdentifier           = 13
	ComposeParserIntegerLiteral       = 14
	ComposeParserFloatingPointLiteral = 15
	ComposeParserBooleanLiteral       = 16
	ComposeParserCharacterLiteral     = 17
	ComposeParserStringLiteral        = 18
	ComposeParserNullLiteral          = 19
	ComposeParserWS                   = 20
	ComposeParserCOMMENT              = 21
	ComposeParserLINE_COMMENT         = 22
)

// ComposeParser rules.
const (
	ComposeParserRULE_compilationUnit = 0
	ComposeParserRULE_entityDecl      = 1
	ComposeParserRULE_entityModifier  = 2
	ComposeParserRULE_entityCall      = 3
	ComposeParserRULE_parameterList   = 4
	ComposeParserRULE_literal         = 5
	ComposeParserRULE_identifier      = 6
)

// ICompilationUnitContext is an interface to support dynamic dispatch.
type ICompilationUnitContext interface {
	antlr.ParserRuleContext

	// GetParser returns the parser.
	GetParser() antlr.Parser

	// IsCompilationUnitContext differentiates from other interfaces.
	IsCompilationUnitContext()
}

type CompilationUnitContext struct {
	*antlr.BaseParserRuleContext
	parser antlr.Parser
}

func NewEmptyCompilationUnitContext() *CompilationUnitContext {
	var p = new(CompilationUnitContext)
	p.BaseParserRuleContext = antlr.NewBaseParserRuleContext(nil, -1)
	p.RuleIndex = ComposeParserRULE_compilationUnit
	return p
}

func (*CompilationUnitContext) IsCompilationUnitContext() {}

func NewCompilationUnitContext(parser antlr.Parser, parent antlr.ParserRuleContext, invokingState int) *CompilationUnitContext {
	var p = new(CompilationUnitContext)

	p.BaseParserRuleContext = antlr.NewBaseParserRuleContext(parent, invokingState)

	p.parser = parser
	p.RuleIndex = ComposeParserRULE_compilationUnit

	return p
}

func (s *CompilationUnitContext) GetParser() antlr.Parser { return s.parser }

func (s *CompilationUnitContext) EntityDecl() IEntityDeclContext {
	var t = s.GetTypedRuleContext(reflect.TypeOf((*IEntityDeclContext)(nil)).Elem(), 0)

	if t == nil {
		return nil
	}

	return t.(IEntityDeclContext)
}

func (s *CompilationUnitContext) GetRuleContext() antlr.RuleContext {
	return s
}

func (s *CompilationUnitContext) ToStringTree(ruleNames []string, recog antlr.Recognizer) string {
	return antlr.TreesStringTree(s, ruleNames, recog)
}

func (s *CompilationUnitContext) EnterRule(listener antlr.ParseTreeListener) {
	if listenerT, ok := listener.(ComposeParserListener); ok {
		listenerT.EnterCompilationUnit(s)
	}
}

func (s *CompilationUnitContext) ExitRule(listener antlr.ParseTreeListener) {
	if listenerT, ok := listener.(ComposeParserListener); ok {
		listenerT.ExitCompilationUnit(s)
	}
}

func (p *ComposeParser) CompilationUnit() (localctx ICompilationUnitContext) {
	this := p
	_ = this

	localctx = NewCompilationUnitContext(p, p.GetParserRuleContext(), p.GetState())
	p.EnterRule(localctx, 0, ComposeParserRULE_compilationUnit)
	var _la int

	defer func() {
		p.ExitRule()
	}()

	defer func() {
		if err := recover(); err != nil {
			if v, ok := err.(antlr.RecognitionException); ok {
				localctx.SetException(v)
				p.GetErrorHandler().ReportError(p, v)
				p.GetErrorHandler().Recover(p, v)
			} else {
				panic(err)
			}
		}
	}()

	p.EnterOuterAlt(localctx, 1)
	p.SetState(15)
	p.GetErrorHandler().Sync(p)
	_la = p.GetTokenStream().LA(1)

	if ((_la)&-(0x1f+1)) == 0 && ((1<<uint(_la))&((1<<ComposeParserBook)|(1<<ComposeParserNote)|(1<<ComposeParserPaser))) != 0 {
		{
			p.SetState(14)
			p.EntityDecl()
		}

	}

	return localctx
}

// IEntityDeclContext is an interface to support dynamic dispatch.
type IEntityDeclContext interface {
	antlr.ParserRuleContext

	// GetParser returns the parser.
	GetParser() antlr.Parser

	// IsEntityDeclContext differentiates from other interfaces.
	IsEntityDeclContext()
}

type EntityDeclContext struct {
	*antlr.BaseParserRuleContext
	parser antlr.Parser
}

func NewEmptyEntityDeclContext() *EntityDeclContext {
	var p = new(EntityDeclContext)
	p.BaseParserRuleContext = antlr.NewBaseParserRuleContext(nil, -1)
	p.RuleIndex = ComposeParserRULE_entityDecl
	return p
}

func (*EntityDeclContext) IsEntityDeclContext() {}

func NewEntityDeclContext(parser antlr.Parser, parent antlr.ParserRuleContext, invokingState int) *EntityDeclContext {
	var p = new(EntityDeclContext)

	p.BaseParserRuleContext = antlr.NewBaseParserRuleContext(parent, invokingState)

	p.parser = parser
	p.RuleIndex = ComposeParserRULE_entityDecl

	return p
}

func (s *EntityDeclContext) GetParser() antlr.Parser { return s.parser }

func (s *EntityDeclContext) EntityModifier() IEntityModifierContext {
	var t = s.GetTypedRuleContext(reflect.TypeOf((*IEntityModifierContext)(nil)).Elem(), 0)

	if t == nil {
		return nil
	}

	return t.(IEntityModifierContext)
}

func (s *EntityDeclContext) AllDOT() []antlr.TerminalNode {
	return s.GetTokens(ComposeParserDOT)
}

func (s *EntityDeclContext) DOT(i int) antlr.TerminalNode {
	return s.GetToken(ComposeParserDOT, i)
}

func (s *EntityDeclContext) AllEntityCall() []IEntityCallContext {
	var ts = s.GetTypedRuleContexts(reflect.TypeOf((*IEntityCallContext)(nil)).Elem())
	var tst = make([]IEntityCallContext, len(ts))

	for i, t := range ts {
		if t != nil {
			tst[i] = t.(IEntityCallContext)
		}
	}

	return tst
}

func (s *EntityDeclContext) EntityCall(i int) IEntityCallContext {
	var t = s.GetTypedRuleContext(reflect.TypeOf((*IEntityCallContext)(nil)).Elem(), i)

	if t == nil {
		return nil
	}

	return t.(IEntityCallContext)
}

func (s *EntityDeclContext) GetRuleContext() antlr.RuleContext {
	return s
}

func (s *EntityDeclContext) ToStringTree(ruleNames []string, recog antlr.Recognizer) string {
	return antlr.TreesStringTree(s, ruleNames, recog)
}

func (s *EntityDeclContext) EnterRule(listener antlr.ParseTreeListener) {
	if listenerT, ok := listener.(ComposeParserListener); ok {
		listenerT.EnterEntityDecl(s)
	}
}

func (s *EntityDeclContext) ExitRule(listener antlr.ParseTreeListener) {
	if listenerT, ok := listener.(ComposeParserListener); ok {
		listenerT.ExitEntityDecl(s)
	}
}

func (p *ComposeParser) EntityDecl() (localctx IEntityDeclContext) {
	this := p
	_ = this

	localctx = NewEntityDeclContext(p, p.GetParserRuleContext(), p.GetState())
	p.EnterRule(localctx, 2, ComposeParserRULE_entityDecl)
	var _la int

	defer func() {
		p.ExitRule()
	}()

	defer func() {
		if err := recover(); err != nil {
			if v, ok := err.(antlr.RecognitionException); ok {
				localctx.SetException(v)
				p.GetErrorHandler().ReportError(p, v)
				p.GetErrorHandler().Recover(p, v)
			} else {
				panic(err)
			}
		}
	}()

	p.EnterOuterAlt(localctx, 1)
	{
		p.SetState(17)
		p.EntityModifier()
	}
	p.SetState(22)
	p.GetErrorHandler().Sync(p)
	_la = p.GetTokenStream().LA(1)

	for _la == ComposeParserDOT {
		{
			p.SetState(18)
			p.Match(ComposeParserDOT)
		}
		{
			p.SetState(19)
			p.EntityCall()
		}

		p.SetState(24)
		p.GetErrorHandler().Sync(p)
		_la = p.GetTokenStream().LA(1)
	}

	return localctx
}

// IEntityModifierContext is an interface to support dynamic dispatch.
type IEntityModifierContext interface {
	antlr.ParserRuleContext

	// GetParser returns the parser.
	GetParser() antlr.Parser

	// IsEntityModifierContext differentiates from other interfaces.
	IsEntityModifierContext()
}

type EntityModifierContext struct {
	*antlr.BaseParserRuleContext
	parser antlr.Parser
}

func NewEmptyEntityModifierContext() *EntityModifierContext {
	var p = new(EntityModifierContext)
	p.BaseParserRuleContext = antlr.NewBaseParserRuleContext(nil, -1)
	p.RuleIndex = ComposeParserRULE_entityModifier
	return p
}

func (*EntityModifierContext) IsEntityModifierContext() {}

func NewEntityModifierContext(parser antlr.Parser, parent antlr.ParserRuleContext, invokingState int) *EntityModifierContext {
	var p = new(EntityModifierContext)

	p.BaseParserRuleContext = antlr.NewBaseParserRuleContext(parent, invokingState)

	p.parser = parser
	p.RuleIndex = ComposeParserRULE_entityModifier

	return p
}

func (s *EntityModifierContext) GetParser() antlr.Parser { return s.parser }

func (s *EntityModifierContext) Book() antlr.TerminalNode {
	return s.GetToken(ComposeParserBook, 0)
}

func (s *EntityModifierContext) Note() antlr.TerminalNode {
	return s.GetToken(ComposeParserNote, 0)
}

func (s *EntityModifierContext) Paser() antlr.TerminalNode {
	return s.GetToken(ComposeParserPaser, 0)
}

func (s *EntityModifierContext) GetRuleContext() antlr.RuleContext {
	return s
}

func (s *EntityModifierContext) ToStringTree(ruleNames []string, recog antlr.Recognizer) string {
	return antlr.TreesStringTree(s, ruleNames, recog)
}

func (s *EntityModifierContext) EnterRule(listener antlr.ParseTreeListener) {
	if listenerT, ok := listener.(ComposeParserListener); ok {
		listenerT.EnterEntityModifier(s)
	}
}

func (s *EntityModifierContext) ExitRule(listener antlr.ParseTreeListener) {
	if listenerT, ok := listener.(ComposeParserListener); ok {
		listenerT.ExitEntityModifier(s)
	}
}

func (p *ComposeParser) EntityModifier() (localctx IEntityModifierContext) {
	this := p
	_ = this

	localctx = NewEntityModifierContext(p, p.GetParserRuleContext(), p.GetState())
	p.EnterRule(localctx, 4, ComposeParserRULE_entityModifier)
	var _la int

	defer func() {
		p.ExitRule()
	}()

	defer func() {
		if err := recover(); err != nil {
			if v, ok := err.(antlr.RecognitionException); ok {
				localctx.SetException(v)
				p.GetErrorHandler().ReportError(p, v)
				p.GetErrorHandler().Recover(p, v)
			} else {
				panic(err)
			}
		}
	}()

	p.EnterOuterAlt(localctx, 1)
	{
		p.SetState(25)
		_la = p.GetTokenStream().LA(1)

		if !(((_la)&-(0x1f+1)) == 0 && ((1<<uint(_la))&((1<<ComposeParserBook)|(1<<ComposeParserNote)|(1<<ComposeParserPaser))) != 0) {
			p.GetErrorHandler().RecoverInline(p)
		} else {
			p.GetErrorHandler().ReportMatch(p)
			p.Consume()
		}
	}

	return localctx
}

// IEntityCallContext is an interface to support dynamic dispatch.
type IEntityCallContext interface {
	antlr.ParserRuleContext

	// GetParser returns the parser.
	GetParser() antlr.Parser

	// IsEntityCallContext differentiates from other interfaces.
	IsEntityCallContext()
}

type EntityCallContext struct {
	*antlr.BaseParserRuleContext
	parser antlr.Parser
}

func NewEmptyEntityCallContext() *EntityCallContext {
	var p = new(EntityCallContext)
	p.BaseParserRuleContext = antlr.NewBaseParserRuleContext(nil, -1)
	p.RuleIndex = ComposeParserRULE_entityCall
	return p
}

func (*EntityCallContext) IsEntityCallContext() {}

func NewEntityCallContext(parser antlr.Parser, parent antlr.ParserRuleContext, invokingState int) *EntityCallContext {
	var p = new(EntityCallContext)

	p.BaseParserRuleContext = antlr.NewBaseParserRuleContext(parent, invokingState)

	p.parser = parser
	p.RuleIndex = ComposeParserRULE_entityCall

	return p
}

func (s *EntityCallContext) GetParser() antlr.Parser { return s.parser }

func (s *EntityCallContext) Identifier() IIdentifierContext {
	var t = s.GetTypedRuleContext(reflect.TypeOf((*IIdentifierContext)(nil)).Elem(), 0)

	if t == nil {
		return nil
	}

	return t.(IIdentifierContext)
}

func (s *EntityCallContext) LPAREN() antlr.TerminalNode {
	return s.GetToken(ComposeParserLPAREN, 0)
}

func (s *EntityCallContext) ParameterList() IParameterListContext {
	var t = s.GetTypedRuleContext(reflect.TypeOf((*IParameterListContext)(nil)).Elem(), 0)

	if t == nil {
		return nil
	}

	return t.(IParameterListContext)
}

func (s *EntityCallContext) RPAREN() antlr.TerminalNode {
	return s.GetToken(ComposeParserRPAREN, 0)
}

func (s *EntityCallContext) GetRuleContext() antlr.RuleContext {
	return s
}

func (s *EntityCallContext) ToStringTree(ruleNames []string, recog antlr.Recognizer) string {
	return antlr.TreesStringTree(s, ruleNames, recog)
}

func (s *EntityCallContext) EnterRule(listener antlr.ParseTreeListener) {
	if listenerT, ok := listener.(ComposeParserListener); ok {
		listenerT.EnterEntityCall(s)
	}
}

func (s *EntityCallContext) ExitRule(listener antlr.ParseTreeListener) {
	if listenerT, ok := listener.(ComposeParserListener); ok {
		listenerT.ExitEntityCall(s)
	}
}

func (p *ComposeParser) EntityCall() (localctx IEntityCallContext) {
	this := p
	_ = this

	localctx = NewEntityCallContext(p, p.GetParserRuleContext(), p.GetState())
	p.EnterRule(localctx, 6, ComposeParserRULE_entityCall)

	defer func() {
		p.ExitRule()
	}()

	defer func() {
		if err := recover(); err != nil {
			if v, ok := err.(antlr.RecognitionException); ok {
				localctx.SetException(v)
				p.GetErrorHandler().ReportError(p, v)
				p.GetErrorHandler().Recover(p, v)
			} else {
				panic(err)
			}
		}
	}()

	p.EnterOuterAlt(localctx, 1)
	{
		p.SetState(27)
		p.Identifier()
	}
	{
		p.SetState(28)
		p.Match(ComposeParserLPAREN)
	}
	{
		p.SetState(29)
		p.ParameterList()
	}
	{
		p.SetState(30)
		p.Match(ComposeParserRPAREN)
	}

	return localctx
}

// IParameterListContext is an interface to support dynamic dispatch.
type IParameterListContext interface {
	antlr.ParserRuleContext

	// GetParser returns the parser.
	GetParser() antlr.Parser

	// IsParameterListContext differentiates from other interfaces.
	IsParameterListContext()
}

type ParameterListContext struct {
	*antlr.BaseParserRuleContext
	parser antlr.Parser
}

func NewEmptyParameterListContext() *ParameterListContext {
	var p = new(ParameterListContext)
	p.BaseParserRuleContext = antlr.NewBaseParserRuleContext(nil, -1)
	p.RuleIndex = ComposeParserRULE_parameterList
	return p
}

func (*ParameterListContext) IsParameterListContext() {}

func NewParameterListContext(parser antlr.Parser, parent antlr.ParserRuleContext, invokingState int) *ParameterListContext {
	var p = new(ParameterListContext)

	p.BaseParserRuleContext = antlr.NewBaseParserRuleContext(parent, invokingState)

	p.parser = parser
	p.RuleIndex = ComposeParserRULE_parameterList

	return p
}

func (s *ParameterListContext) GetParser() antlr.Parser { return s.parser }

func (s *ParameterListContext) AllLiteral() []ILiteralContext {
	var ts = s.GetTypedRuleContexts(reflect.TypeOf((*ILiteralContext)(nil)).Elem())
	var tst = make([]ILiteralContext, len(ts))

	for i, t := range ts {
		if t != nil {
			tst[i] = t.(ILiteralContext)
		}
	}

	return tst
}

func (s *ParameterListContext) Literal(i int) ILiteralContext {
	var t = s.GetTypedRuleContext(reflect.TypeOf((*ILiteralContext)(nil)).Elem(), i)

	if t == nil {
		return nil
	}

	return t.(ILiteralContext)
}

func (s *ParameterListContext) AllCOMMA() []antlr.TerminalNode {
	return s.GetTokens(ComposeParserCOMMA)
}

func (s *ParameterListContext) COMMA(i int) antlr.TerminalNode {
	return s.GetToken(ComposeParserCOMMA, i)
}

func (s *ParameterListContext) GetRuleContext() antlr.RuleContext {
	return s
}

func (s *ParameterListContext) ToStringTree(ruleNames []string, recog antlr.Recognizer) string {
	return antlr.TreesStringTree(s, ruleNames, recog)
}

func (s *ParameterListContext) EnterRule(listener antlr.ParseTreeListener) {
	if listenerT, ok := listener.(ComposeParserListener); ok {
		listenerT.EnterParameterList(s)
	}
}

func (s *ParameterListContext) ExitRule(listener antlr.ParseTreeListener) {
	if listenerT, ok := listener.(ComposeParserListener); ok {
		listenerT.ExitParameterList(s)
	}
}

func (p *ComposeParser) ParameterList() (localctx IParameterListContext) {
	this := p
	_ = this

	localctx = NewParameterListContext(p, p.GetParserRuleContext(), p.GetState())
	p.EnterRule(localctx, 8, ComposeParserRULE_parameterList)
	var _la int

	defer func() {
		p.ExitRule()
	}()

	defer func() {
		if err := recover(); err != nil {
			if v, ok := err.(antlr.RecognitionException); ok {
				localctx.SetException(v)
				p.GetErrorHandler().ReportError(p, v)
				p.GetErrorHandler().Recover(p, v)
			} else {
				panic(err)
			}
		}
	}()

	p.EnterOuterAlt(localctx, 1)
	{
		p.SetState(32)
		p.Literal()
	}
	p.SetState(37)
	p.GetErrorHandler().Sync(p)
	_la = p.GetTokenStream().LA(1)

	for _la == ComposeParserCOMMA {
		{
			p.SetState(33)
			p.Match(ComposeParserCOMMA)
		}
		{
			p.SetState(34)
			p.Literal()
		}

		p.SetState(39)
		p.GetErrorHandler().Sync(p)
		_la = p.GetTokenStream().LA(1)
	}

	return localctx
}

// ILiteralContext is an interface to support dynamic dispatch.
type ILiteralContext interface {
	antlr.ParserRuleContext

	// GetParser returns the parser.
	GetParser() antlr.Parser

	// IsLiteralContext differentiates from other interfaces.
	IsLiteralContext()
}

type LiteralContext struct {
	*antlr.BaseParserRuleContext
	parser antlr.Parser
}

func NewEmptyLiteralContext() *LiteralContext {
	var p = new(LiteralContext)
	p.BaseParserRuleContext = antlr.NewBaseParserRuleContext(nil, -1)
	p.RuleIndex = ComposeParserRULE_literal
	return p
}

func (*LiteralContext) IsLiteralContext() {}

func NewLiteralContext(parser antlr.Parser, parent antlr.ParserRuleContext, invokingState int) *LiteralContext {
	var p = new(LiteralContext)

	p.BaseParserRuleContext = antlr.NewBaseParserRuleContext(parent, invokingState)

	p.parser = parser
	p.RuleIndex = ComposeParserRULE_literal

	return p
}

func (s *LiteralContext) GetParser() antlr.Parser { return s.parser }

func (s *LiteralContext) IntegerLiteral() antlr.TerminalNode {
	return s.GetToken(ComposeParserIntegerLiteral, 0)
}

func (s *LiteralContext) FloatingPointLiteral() antlr.TerminalNode {
	return s.GetToken(ComposeParserFloatingPointLiteral, 0)
}

func (s *LiteralContext) BooleanLiteral() antlr.TerminalNode {
	return s.GetToken(ComposeParserBooleanLiteral, 0)
}

func (s *LiteralContext) CharacterLiteral() antlr.TerminalNode {
	return s.GetToken(ComposeParserCharacterLiteral, 0)
}

func (s *LiteralContext) StringLiteral() antlr.TerminalNode {
	return s.GetToken(ComposeParserStringLiteral, 0)
}

func (s *LiteralContext) NullLiteral() antlr.TerminalNode {
	return s.GetToken(ComposeParserNullLiteral, 0)
}

func (s *LiteralContext) GetRuleContext() antlr.RuleContext {
	return s
}

func (s *LiteralContext) ToStringTree(ruleNames []string, recog antlr.Recognizer) string {
	return antlr.TreesStringTree(s, ruleNames, recog)
}

func (s *LiteralContext) EnterRule(listener antlr.ParseTreeListener) {
	if listenerT, ok := listener.(ComposeParserListener); ok {
		listenerT.EnterLiteral(s)
	}
}

func (s *LiteralContext) ExitRule(listener antlr.ParseTreeListener) {
	if listenerT, ok := listener.(ComposeParserListener); ok {
		listenerT.ExitLiteral(s)
	}
}

func (p *ComposeParser) Literal() (localctx ILiteralContext) {
	this := p
	_ = this

	localctx = NewLiteralContext(p, p.GetParserRuleContext(), p.GetState())
	p.EnterRule(localctx, 10, ComposeParserRULE_literal)
	var _la int

	defer func() {
		p.ExitRule()
	}()

	defer func() {
		if err := recover(); err != nil {
			if v, ok := err.(antlr.RecognitionException); ok {
				localctx.SetException(v)
				p.GetErrorHandler().ReportError(p, v)
				p.GetErrorHandler().Recover(p, v)
			} else {
				panic(err)
			}
		}
	}()

	p.EnterOuterAlt(localctx, 1)
	{
		p.SetState(40)
		_la = p.GetTokenStream().LA(1)

		if !(((_la)&-(0x1f+1)) == 0 && ((1<<uint(_la))&((1<<ComposeParserIntegerLiteral)|(1<<ComposeParserFloatingPointLiteral)|(1<<ComposeParserBooleanLiteral)|(1<<ComposeParserCharacterLiteral)|(1<<ComposeParserStringLiteral)|(1<<ComposeParserNullLiteral))) != 0) {
			p.GetErrorHandler().RecoverInline(p)
		} else {
			p.GetErrorHandler().ReportMatch(p)
			p.Consume()
		}
	}

	return localctx
}

// IIdentifierContext is an interface to support dynamic dispatch.
type IIdentifierContext interface {
	antlr.ParserRuleContext

	// GetParser returns the parser.
	GetParser() antlr.Parser

	// IsIdentifierContext differentiates from other interfaces.
	IsIdentifierContext()
}

type IdentifierContext struct {
	*antlr.BaseParserRuleContext
	parser antlr.Parser
}

func NewEmptyIdentifierContext() *IdentifierContext {
	var p = new(IdentifierContext)
	p.BaseParserRuleContext = antlr.NewBaseParserRuleContext(nil, -1)
	p.RuleIndex = ComposeParserRULE_identifier
	return p
}

func (*IdentifierContext) IsIdentifierContext() {}

func NewIdentifierContext(parser antlr.Parser, parent antlr.ParserRuleContext, invokingState int) *IdentifierContext {
	var p = new(IdentifierContext)

	p.BaseParserRuleContext = antlr.NewBaseParserRuleContext(parent, invokingState)

	p.parser = parser
	p.RuleIndex = ComposeParserRULE_identifier

	return p
}

func (s *IdentifierContext) GetParser() antlr.Parser { return s.parser }

func (s *IdentifierContext) Identifier() antlr.TerminalNode {
	return s.GetToken(ComposeParserIdentifier, 0)
}

func (s *IdentifierContext) GetRuleContext() antlr.RuleContext {
	return s
}

func (s *IdentifierContext) ToStringTree(ruleNames []string, recog antlr.Recognizer) string {
	return antlr.TreesStringTree(s, ruleNames, recog)
}

func (s *IdentifierContext) EnterRule(listener antlr.ParseTreeListener) {
	if listenerT, ok := listener.(ComposeParserListener); ok {
		listenerT.EnterIdentifier(s)
	}
}

func (s *IdentifierContext) ExitRule(listener antlr.ParseTreeListener) {
	if listenerT, ok := listener.(ComposeParserListener); ok {
		listenerT.ExitIdentifier(s)
	}
}

func (p *ComposeParser) Identifier() (localctx IIdentifierContext) {
	this := p
	_ = this

	localctx = NewIdentifierContext(p, p.GetParserRuleContext(), p.GetState())
	p.EnterRule(localctx, 12, ComposeParserRULE_identifier)

	defer func() {
		p.ExitRule()
	}()

	defer func() {
		if err := recover(); err != nil {
			if v, ok := err.(antlr.RecognitionException); ok {
				localctx.SetException(v)
				p.GetErrorHandler().ReportError(p, v)
				p.GetErrorHandler().Recover(p, v)
			} else {
				panic(err)
			}
		}
	}()

	p.EnterOuterAlt(localctx, 1)
	{
		p.SetState(42)
		p.Match(ComposeParserIdentifier)
	}

	return localctx
}
