// Generated from ../../grammar/ComposeParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ComposeParserListener } from "./ComposeParserListener";
import { ComposeParserVisitor } from "./ComposeParserVisitor";


export class ComposeParser extends Parser {
	public static readonly LPAREN = 1;
	public static readonly RPAREN = 2;
	public static readonly LBRACE = 3;
	public static readonly RBRACE = 4;
	public static readonly LBRACK = 5;
	public static readonly RBRACK = 6;
	public static readonly SEMI = 7;
	public static readonly COMMA = 8;
	public static readonly DOT = 9;
	public static readonly Book = 10;
	public static readonly Note = 11;
	public static readonly Paser = 12;
	public static readonly Identifier = 13;
	public static readonly IntegerLiteral = 14;
	public static readonly FloatingPointLiteral = 15;
	public static readonly BooleanLiteral = 16;
	public static readonly CharacterLiteral = 17;
	public static readonly StringLiteral = 18;
	public static readonly NullLiteral = 19;
	public static readonly WS = 20;
	public static readonly COMMENT = 21;
	public static readonly LINE_COMMENT = 22;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_entityDecl = 1;
	public static readonly RULE_entityModifier = 2;
	public static readonly RULE_entityCall = 3;
	public static readonly RULE_parameterList = 4;
	public static readonly RULE_literal = 5;
	public static readonly RULE_identifier = 6;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "entityDecl", "entityModifier", "entityCall", "parameterList", 
		"literal", "identifier",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'{'", "'}'", "'['", "']'", "';'", "','", "'.'", 
		"'Book'", "'Note'", "'Paper'", undefined, undefined, undefined, undefined, 
		undefined, undefined, "'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", 
		"SEMI", "COMMA", "DOT", "Book", "Note", "Paser", "Identifier", "IntegerLiteral", 
		"FloatingPointLiteral", "BooleanLiteral", "CharacterLiteral", "StringLiteral", 
		"NullLiteral", "WS", "COMMENT", "LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ComposeParser._LITERAL_NAMES, ComposeParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ComposeParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ComposeParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return ComposeParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ComposeParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ComposeParser._ATN, this);
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ComposeParser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 15;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ComposeParser.StringLiteral) {
				{
				this.state = 14;
				this.entityDecl();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public entityDecl(): EntityDeclContext {
		let _localctx: EntityDeclContext = new EntityDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ComposeParser.RULE_entityDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 17;
			this.entityModifier();
			this.state = 22;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ComposeParser.DOT) {
				{
				{
				this.state = 18;
				this.match(ComposeParser.DOT);
				this.state = 19;
				this.entityCall();
				}
				}
				this.state = 24;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public entityModifier(): EntityModifierContext {
		let _localctx: EntityModifierContext = new EntityModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ComposeParser.RULE_entityModifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 25;
			this.match(ComposeParser.StringLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public entityCall(): EntityCallContext {
		let _localctx: EntityCallContext = new EntityCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ComposeParser.RULE_entityCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 27;
			this.identifier();
			this.state = 28;
			this.match(ComposeParser.LPAREN);
			this.state = 29;
			this.parameterList();
			this.state = 30;
			this.match(ComposeParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ComposeParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 32;
			this.literal();
			this.state = 37;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ComposeParser.COMMA) {
				{
				{
				this.state = 33;
				this.match(ComposeParser.COMMA);
				this.state = 34;
				this.literal();
				}
				}
				this.state = 39;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ComposeParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 40;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ComposeParser.IntegerLiteral) | (1 << ComposeParser.FloatingPointLiteral) | (1 << ComposeParser.BooleanLiteral) | (1 << ComposeParser.CharacterLiteral) | (1 << ComposeParser.StringLiteral) | (1 << ComposeParser.NullLiteral))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ComposeParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			this.match(ComposeParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x18/\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x03\x02\x05\x02\x12\n\x02\x03\x03\x03\x03\x03\x03\x07" +
		"\x03\x17\n\x03\f\x03\x0E\x03\x1A\v\x03\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x07\x06&\n\x06\f\x06" +
		"\x0E\x06)\v\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x02\x02\x02\t\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x02\x03\x03\x02\x10\x15\x02" +
		"*\x02\x11\x03\x02\x02\x02\x04\x13\x03\x02\x02\x02\x06\x1B\x03\x02\x02" +
		"\x02\b\x1D\x03\x02\x02\x02\n\"\x03\x02\x02\x02\f*\x03\x02\x02\x02\x0E" +
		",\x03\x02\x02\x02\x10\x12\x05\x04\x03\x02\x11\x10\x03\x02\x02\x02\x11" +
		"\x12\x03\x02\x02\x02\x12\x03\x03\x02\x02\x02\x13\x18\x05\x06\x04\x02\x14" +
		"\x15\x07\v\x02\x02\x15\x17\x05\b\x05\x02\x16\x14\x03\x02\x02\x02\x17\x1A" +
		"\x03\x02\x02\x02\x18\x16\x03\x02\x02\x02\x18\x19\x03\x02\x02\x02\x19\x05" +
		"\x03\x02\x02\x02\x1A\x18\x03\x02\x02\x02\x1B\x1C\x07\x14\x02\x02\x1C\x07" +
		"\x03\x02\x02\x02\x1D\x1E\x05\x0E\b\x02\x1E\x1F\x07\x03\x02\x02\x1F \x05" +
		"\n\x06\x02 !\x07\x04\x02\x02!\t\x03\x02\x02\x02\"\'\x05\f\x07\x02#$\x07" +
		"\n\x02\x02$&\x05\f\x07\x02%#\x03\x02\x02\x02&)\x03\x02\x02\x02\'%\x03" +
		"\x02\x02\x02\'(\x03\x02\x02\x02(\v\x03\x02\x02\x02)\'\x03\x02\x02\x02" +
		"*+\t\x02\x02\x02+\r\x03\x02\x02\x02,-\x07\x0F\x02\x02-\x0F\x03\x02\x02" +
		"\x02\x05\x11\x18\'";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ComposeParser.__ATN) {
			ComposeParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ComposeParser._serializedATN));
		}

		return ComposeParser.__ATN;
	}

}

export class CompilationUnitContext extends ParserRuleContext {
	public entityDecl(): EntityDeclContext | undefined {
		return this.tryGetRuleContext(0, EntityDeclContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ComposeParser.RULE_compilationUnit; }
	// @Override
	public enterRule(listener: ComposeParserListener): void {
		if (listener.enterCompilationUnit) {
			listener.enterCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: ComposeParserListener): void {
		if (listener.exitCompilationUnit) {
			listener.exitCompilationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ComposeParserVisitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EntityDeclContext extends ParserRuleContext {
	public entityModifier(): EntityModifierContext {
		return this.getRuleContext(0, EntityModifierContext);
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ComposeParser.DOT);
		} else {
			return this.getToken(ComposeParser.DOT, i);
		}
	}
	public entityCall(): EntityCallContext[];
	public entityCall(i: number): EntityCallContext;
	public entityCall(i?: number): EntityCallContext | EntityCallContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EntityCallContext);
		} else {
			return this.getRuleContext(i, EntityCallContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ComposeParser.RULE_entityDecl; }
	// @Override
	public enterRule(listener: ComposeParserListener): void {
		if (listener.enterEntityDecl) {
			listener.enterEntityDecl(this);
		}
	}
	// @Override
	public exitRule(listener: ComposeParserListener): void {
		if (listener.exitEntityDecl) {
			listener.exitEntityDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ComposeParserVisitor<Result>): Result {
		if (visitor.visitEntityDecl) {
			return visitor.visitEntityDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EntityModifierContext extends ParserRuleContext {
	public StringLiteral(): TerminalNode { return this.getToken(ComposeParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ComposeParser.RULE_entityModifier; }
	// @Override
	public enterRule(listener: ComposeParserListener): void {
		if (listener.enterEntityModifier) {
			listener.enterEntityModifier(this);
		}
	}
	// @Override
	public exitRule(listener: ComposeParserListener): void {
		if (listener.exitEntityModifier) {
			listener.exitEntityModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ComposeParserVisitor<Result>): Result {
		if (visitor.visitEntityModifier) {
			return visitor.visitEntityModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EntityCallContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(ComposeParser.LPAREN, 0); }
	public parameterList(): ParameterListContext {
		return this.getRuleContext(0, ParameterListContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ComposeParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ComposeParser.RULE_entityCall; }
	// @Override
	public enterRule(listener: ComposeParserListener): void {
		if (listener.enterEntityCall) {
			listener.enterEntityCall(this);
		}
	}
	// @Override
	public exitRule(listener: ComposeParserListener): void {
		if (listener.exitEntityCall) {
			listener.exitEntityCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ComposeParserVisitor<Result>): Result {
		if (visitor.visitEntityCall) {
			return visitor.visitEntityCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public literal(): LiteralContext[];
	public literal(i: number): LiteralContext;
	public literal(i?: number): LiteralContext | LiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LiteralContext);
		} else {
			return this.getRuleContext(i, LiteralContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ComposeParser.COMMA);
		} else {
			return this.getToken(ComposeParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ComposeParser.RULE_parameterList; }
	// @Override
	public enterRule(listener: ComposeParserListener): void {
		if (listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: ComposeParserListener): void {
		if (listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ComposeParserVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(ComposeParser.IntegerLiteral, 0); }
	public FloatingPointLiteral(): TerminalNode | undefined { return this.tryGetToken(ComposeParser.FloatingPointLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(ComposeParser.BooleanLiteral, 0); }
	public CharacterLiteral(): TerminalNode | undefined { return this.tryGetToken(ComposeParser.CharacterLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(ComposeParser.StringLiteral, 0); }
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(ComposeParser.NullLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ComposeParser.RULE_literal; }
	// @Override
	public enterRule(listener: ComposeParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: ComposeParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ComposeParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(ComposeParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ComposeParser.RULE_identifier; }
	// @Override
	public enterRule(listener: ComposeParserListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: ComposeParserListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ComposeParserVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


