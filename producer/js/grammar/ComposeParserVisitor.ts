// Generated from ../../grammar/ComposeParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { CompilationUnitContext } from "./ComposeParser";
import { EntityDeclContext } from "./ComposeParser";
import { EntityModifierContext } from "./ComposeParser";
import { EntityCallContext } from "./ComposeParser";
import { ParameterListContext } from "./ComposeParser";
import { LiteralContext } from "./ComposeParser";
import { IdentifierContext } from "./ComposeParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ComposeParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ComposeParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ComposeParser.compilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `ComposeParser.entityDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntityDecl?: (ctx: EntityDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `ComposeParser.entityModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntityModifier?: (ctx: EntityModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `ComposeParser.entityCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntityCall?: (ctx: EntityCallContext) => Result;

	/**
	 * Visit a parse tree produced by `ComposeParser.parameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterList?: (ctx: ParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `ComposeParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `ComposeParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;
}

