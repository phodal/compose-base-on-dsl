// Generated from ../../grammar/ComposeParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { CompilationUnitContext } from "./ComposeParser";
import { EntityDeclContext } from "./ComposeParser";
import { EntityModifierContext } from "./ComposeParser";
import { EntityCallContext } from "./ComposeParser";
import { ParameterListContext } from "./ComposeParser";
import { LiteralContext } from "./ComposeParser";
import { IdentifierContext } from "./ComposeParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ComposeParser`.
 */
export interface ComposeParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ComposeParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterCompilationUnit?: (ctx: CompilationUnitContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitCompilationUnit?: (ctx: CompilationUnitContext) => void;

	/**
	 * Enter a parse tree produced by `ComposeParser.entityDecl`.
	 * @param ctx the parse tree
	 */
	enterEntityDecl?: (ctx: EntityDeclContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.entityDecl`.
	 * @param ctx the parse tree
	 */
	exitEntityDecl?: (ctx: EntityDeclContext) => void;

	/**
	 * Enter a parse tree produced by `ComposeParser.entityModifier`.
	 * @param ctx the parse tree
	 */
	enterEntityModifier?: (ctx: EntityModifierContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.entityModifier`.
	 * @param ctx the parse tree
	 */
	exitEntityModifier?: (ctx: EntityModifierContext) => void;

	/**
	 * Enter a parse tree produced by `ComposeParser.entityCall`.
	 * @param ctx the parse tree
	 */
	enterEntityCall?: (ctx: EntityCallContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.entityCall`.
	 * @param ctx the parse tree
	 */
	exitEntityCall?: (ctx: EntityCallContext) => void;

	/**
	 * Enter a parse tree produced by `ComposeParser.parameterList`.
	 * @param ctx the parse tree
	 */
	enterParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.parameterList`.
	 * @param ctx the parse tree
	 */
	exitParameterList?: (ctx: ParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `ComposeParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `ComposeParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
}

