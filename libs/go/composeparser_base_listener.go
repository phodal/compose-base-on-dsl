// Code generated from ComposeParser.g4 by ANTLR 4.9.3. DO NOT EDIT.

package parser // ComposeParser

import "github.com/antlr/antlr4/runtime/Go/antlr"

// BaseComposeParserListener is a complete listener for a parse tree produced by ComposeParser.
type BaseComposeParserListener struct{}

var _ ComposeParserListener = &BaseComposeParserListener{}

// VisitTerminal is called when a terminal node is visited.
func (s *BaseComposeParserListener) VisitTerminal(node antlr.TerminalNode) {}

// VisitErrorNode is called when an error node is visited.
func (s *BaseComposeParserListener) VisitErrorNode(node antlr.ErrorNode) {}

// EnterEveryRule is called when any rule is entered.
func (s *BaseComposeParserListener) EnterEveryRule(ctx antlr.ParserRuleContext) {}

// ExitEveryRule is called when any rule is exited.
func (s *BaseComposeParserListener) ExitEveryRule(ctx antlr.ParserRuleContext) {}

// EnterCompilationUnit is called when production compilationUnit is entered.
func (s *BaseComposeParserListener) EnterCompilationUnit(ctx *CompilationUnitContext) {}

// ExitCompilationUnit is called when production compilationUnit is exited.
func (s *BaseComposeParserListener) ExitCompilationUnit(ctx *CompilationUnitContext) {}

// EnterEntityDecl is called when production entityDecl is entered.
func (s *BaseComposeParserListener) EnterEntityDecl(ctx *EntityDeclContext) {}

// ExitEntityDecl is called when production entityDecl is exited.
func (s *BaseComposeParserListener) ExitEntityDecl(ctx *EntityDeclContext) {}

// EnterEntityModifier is called when production entityModifier is entered.
func (s *BaseComposeParserListener) EnterEntityModifier(ctx *EntityModifierContext) {}

// ExitEntityModifier is called when production entityModifier is exited.
func (s *BaseComposeParserListener) ExitEntityModifier(ctx *EntityModifierContext) {}

// EnterEntityCall is called when production entityCall is entered.
func (s *BaseComposeParserListener) EnterEntityCall(ctx *EntityCallContext) {}

// ExitEntityCall is called when production entityCall is exited.
func (s *BaseComposeParserListener) ExitEntityCall(ctx *EntityCallContext) {}

// EnterParameterList is called when production parameterList is entered.
func (s *BaseComposeParserListener) EnterParameterList(ctx *ParameterListContext) {}

// ExitParameterList is called when production parameterList is exited.
func (s *BaseComposeParserListener) ExitParameterList(ctx *ParameterListContext) {}

// EnterLiteral is called when production literal is entered.
func (s *BaseComposeParserListener) EnterLiteral(ctx *LiteralContext) {}

// ExitLiteral is called when production literal is exited.
func (s *BaseComposeParserListener) ExitLiteral(ctx *LiteralContext) {}

// EnterIdentifier is called when production identifier is entered.
func (s *BaseComposeParserListener) EnterIdentifier(ctx *IdentifierContext) {}

// ExitIdentifier is called when production identifier is exited.
func (s *BaseComposeParserListener) ExitIdentifier(ctx *IdentifierContext) {}
