// Code generated from ComposeParser.g4 by ANTLR 4.9.3. DO NOT EDIT.

package parser // ComposeParser

import "github.com/antlr/antlr4/runtime/Go/antlr"

// ComposeParserListener is a complete listener for a parse tree produced by ComposeParser.
type ComposeParserListener interface {
	antlr.ParseTreeListener

	// EnterCompilationUnit is called when entering the compilationUnit production.
	EnterCompilationUnit(c *CompilationUnitContext)

	// EnterEntityDecl is called when entering the entityDecl production.
	EnterEntityDecl(c *EntityDeclContext)

	// EnterEntityModifier is called when entering the entityModifier production.
	EnterEntityModifier(c *EntityModifierContext)

	// EnterEntityCall is called when entering the entityCall production.
	EnterEntityCall(c *EntityCallContext)

	// EnterParameterList is called when entering the parameterList production.
	EnterParameterList(c *ParameterListContext)

	// EnterLiteral is called when entering the literal production.
	EnterLiteral(c *LiteralContext)

	// EnterIdentifier is called when entering the identifier production.
	EnterIdentifier(c *IdentifierContext)

	// ExitCompilationUnit is called when exiting the compilationUnit production.
	ExitCompilationUnit(c *CompilationUnitContext)

	// ExitEntityDecl is called when exiting the entityDecl production.
	ExitEntityDecl(c *EntityDeclContext)

	// ExitEntityModifier is called when exiting the entityModifier production.
	ExitEntityModifier(c *EntityModifierContext)

	// ExitEntityCall is called when exiting the entityCall production.
	ExitEntityCall(c *EntityCallContext)

	// ExitParameterList is called when exiting the parameterList production.
	ExitParameterList(c *ParameterListContext)

	// ExitLiteral is called when exiting the literal production.
	ExitLiteral(c *LiteralContext)

	// ExitIdentifier is called when exiting the identifier production.
	ExitIdentifier(c *IdentifierContext)
}
