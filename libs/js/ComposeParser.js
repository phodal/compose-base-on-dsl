// Generated from ComposeParser.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import ComposeParserListener from './ComposeParserListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0018/\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0003\u0002\u0005\u0002\u0012\n\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0007\u0003\u0017\n\u0003\f\u0003\u000e\u0003\u001a",
    "\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006",
    "&\n\u0006\f\u0006\u000e\u0006)\u000b\u0006\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\b\u0002\u0002\t\u0002\u0004\u0006\b\n\f\u000e\u0002",
    "\u0004\u0003\u0002\f\u000e\u0003\u0002\u0010\u0015\u0002*\u0002\u0011",
    "\u0003\u0002\u0002\u0002\u0004\u0013\u0003\u0002\u0002\u0002\u0006\u001b",
    "\u0003\u0002\u0002\u0002\b\u001d\u0003\u0002\u0002\u0002\n\"\u0003\u0002",
    "\u0002\u0002\f*\u0003\u0002\u0002\u0002\u000e,\u0003\u0002\u0002\u0002",
    "\u0010\u0012\u0005\u0004\u0003\u0002\u0011\u0010\u0003\u0002\u0002\u0002",
    "\u0011\u0012\u0003\u0002\u0002\u0002\u0012\u0003\u0003\u0002\u0002\u0002",
    "\u0013\u0018\u0005\u0006\u0004\u0002\u0014\u0015\u0007\u000b\u0002\u0002",
    "\u0015\u0017\u0005\b\u0005\u0002\u0016\u0014\u0003\u0002\u0002\u0002",
    "\u0017\u001a\u0003\u0002\u0002\u0002\u0018\u0016\u0003\u0002\u0002\u0002",
    "\u0018\u0019\u0003\u0002\u0002\u0002\u0019\u0005\u0003\u0002\u0002\u0002",
    "\u001a\u0018\u0003\u0002\u0002\u0002\u001b\u001c\t\u0002\u0002\u0002",
    "\u001c\u0007\u0003\u0002\u0002\u0002\u001d\u001e\u0005\u000e\b\u0002",
    "\u001e\u001f\u0007\u0003\u0002\u0002\u001f \u0005\n\u0006\u0002 !\u0007",
    "\u0004\u0002\u0002!\t\u0003\u0002\u0002\u0002\"\'\u0005\f\u0007\u0002",
    "#$\u0007\n\u0002\u0002$&\u0005\f\u0007\u0002%#\u0003\u0002\u0002\u0002",
    "&)\u0003\u0002\u0002\u0002\'%\u0003\u0002\u0002\u0002\'(\u0003\u0002",
    "\u0002\u0002(\u000b\u0003\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002",
    "*+\t\u0003\u0002\u0002+\r\u0003\u0002\u0002\u0002,-\u0007\u000f\u0002",
    "\u0002-\u000f\u0003\u0002\u0002\u0002\u0005\u0011\u0018\'"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class ComposeParser extends antlr4.Parser {

    static grammarFileName = "ComposeParser.g4";
    static literalNames = [ null, "'('", "')'", "'{'", "'}'", "'['", "']'", 
                            "';'", "','", "'.'", "'Book'", "'Note'", "'Paper'", 
                            null, null, null, null, null, null, "'null'" ];
    static symbolicNames = [ null, "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
                             "LBRACK", "RBRACK", "SEMI", "COMMA", "DOT", 
                             "Book", "Note", "Paser", "Identifier", "IntegerLiteral", 
                             "FloatingPointLiteral", "BooleanLiteral", "CharacterLiteral", 
                             "StringLiteral", "NullLiteral", "WS", "COMMENT", 
                             "LINE_COMMENT" ];
    static ruleNames = [ "compilationUnit", "entityDecl", "entityModifier", 
                         "entityCall", "parameterList", "literal", "identifier" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ComposeParser.ruleNames;
        this.literalNames = ComposeParser.literalNames;
        this.symbolicNames = ComposeParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	compilationUnit() {
	    let localctx = new CompilationUnitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ComposeParser.RULE_compilationUnit);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ComposeParser.Book) | (1 << ComposeParser.Note) | (1 << ComposeParser.Paser))) !== 0)) {
	            this.state = 14;
	            this.entityDecl();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	entityDecl() {
	    let localctx = new EntityDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ComposeParser.RULE_entityDecl);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this.entityModifier();
	        this.state = 22;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ComposeParser.DOT) {
	            this.state = 18;
	            this.match(ComposeParser.DOT);
	            this.state = 19;
	            this.entityCall();
	            this.state = 24;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	entityModifier() {
	    let localctx = new EntityModifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ComposeParser.RULE_entityModifier);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ComposeParser.Book) | (1 << ComposeParser.Note) | (1 << ComposeParser.Paser))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	entityCall() {
	    let localctx = new EntityCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ComposeParser.RULE_entityCall);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.identifier();
	        this.state = 28;
	        this.match(ComposeParser.LPAREN);
	        this.state = 29;
	        this.parameterList();
	        this.state = 30;
	        this.match(ComposeParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameterList() {
	    let localctx = new ParameterListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ComposeParser.RULE_parameterList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.literal();
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ComposeParser.COMMA) {
	            this.state = 33;
	            this.match(ComposeParser.COMMA);
	            this.state = 34;
	            this.literal();
	            this.state = 39;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ComposeParser.RULE_literal);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ComposeParser.IntegerLiteral) | (1 << ComposeParser.FloatingPointLiteral) | (1 << ComposeParser.BooleanLiteral) | (1 << ComposeParser.CharacterLiteral) | (1 << ComposeParser.StringLiteral) | (1 << ComposeParser.NullLiteral))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ComposeParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(ComposeParser.Identifier);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ComposeParser.EOF = antlr4.Token.EOF;
ComposeParser.LPAREN = 1;
ComposeParser.RPAREN = 2;
ComposeParser.LBRACE = 3;
ComposeParser.RBRACE = 4;
ComposeParser.LBRACK = 5;
ComposeParser.RBRACK = 6;
ComposeParser.SEMI = 7;
ComposeParser.COMMA = 8;
ComposeParser.DOT = 9;
ComposeParser.Book = 10;
ComposeParser.Note = 11;
ComposeParser.Paser = 12;
ComposeParser.Identifier = 13;
ComposeParser.IntegerLiteral = 14;
ComposeParser.FloatingPointLiteral = 15;
ComposeParser.BooleanLiteral = 16;
ComposeParser.CharacterLiteral = 17;
ComposeParser.StringLiteral = 18;
ComposeParser.NullLiteral = 19;
ComposeParser.WS = 20;
ComposeParser.COMMENT = 21;
ComposeParser.LINE_COMMENT = 22;

ComposeParser.RULE_compilationUnit = 0;
ComposeParser.RULE_entityDecl = 1;
ComposeParser.RULE_entityModifier = 2;
ComposeParser.RULE_entityCall = 3;
ComposeParser.RULE_parameterList = 4;
ComposeParser.RULE_literal = 5;
ComposeParser.RULE_identifier = 6;

class CompilationUnitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComposeParser.RULE_compilationUnit;
    }

	entityDecl() {
	    return this.getTypedRuleContext(EntityDeclContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ComposeParserListener ) {
	        listener.enterCompilationUnit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComposeParserListener ) {
	        listener.exitCompilationUnit(this);
		}
	}


}



class EntityDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComposeParser.RULE_entityDecl;
    }

	entityModifier() {
	    return this.getTypedRuleContext(EntityModifierContext,0);
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ComposeParser.DOT);
	    } else {
	        return this.getToken(ComposeParser.DOT, i);
	    }
	};


	entityCall = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EntityCallContext);
	    } else {
	        return this.getTypedRuleContext(EntityCallContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ComposeParserListener ) {
	        listener.enterEntityDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComposeParserListener ) {
	        listener.exitEntityDecl(this);
		}
	}


}



class EntityModifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComposeParser.RULE_entityModifier;
    }

	Book() {
	    return this.getToken(ComposeParser.Book, 0);
	};

	Note() {
	    return this.getToken(ComposeParser.Note, 0);
	};

	Paser() {
	    return this.getToken(ComposeParser.Paser, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ComposeParserListener ) {
	        listener.enterEntityModifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComposeParserListener ) {
	        listener.exitEntityModifier(this);
		}
	}


}



class EntityCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComposeParser.RULE_entityCall;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	LPAREN() {
	    return this.getToken(ComposeParser.LPAREN, 0);
	};

	parameterList() {
	    return this.getTypedRuleContext(ParameterListContext,0);
	};

	RPAREN() {
	    return this.getToken(ComposeParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ComposeParserListener ) {
	        listener.enterEntityCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComposeParserListener ) {
	        listener.exitEntityCall(this);
		}
	}


}



class ParameterListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComposeParser.RULE_parameterList;
    }

	literal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LiteralContext);
	    } else {
	        return this.getTypedRuleContext(LiteralContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ComposeParser.COMMA);
	    } else {
	        return this.getToken(ComposeParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ComposeParserListener ) {
	        listener.enterParameterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComposeParserListener ) {
	        listener.exitParameterList(this);
		}
	}


}



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComposeParser.RULE_literal;
    }

	IntegerLiteral() {
	    return this.getToken(ComposeParser.IntegerLiteral, 0);
	};

	FloatingPointLiteral() {
	    return this.getToken(ComposeParser.FloatingPointLiteral, 0);
	};

	BooleanLiteral() {
	    return this.getToken(ComposeParser.BooleanLiteral, 0);
	};

	CharacterLiteral() {
	    return this.getToken(ComposeParser.CharacterLiteral, 0);
	};

	StringLiteral() {
	    return this.getToken(ComposeParser.StringLiteral, 0);
	};

	NullLiteral() {
	    return this.getToken(ComposeParser.NullLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ComposeParserListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComposeParserListener ) {
	        listener.exitLiteral(this);
		}
	}


}



class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComposeParser.RULE_identifier;
    }

	Identifier() {
	    return this.getToken(ComposeParser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ComposeParserListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComposeParserListener ) {
	        listener.exitIdentifier(this);
		}
	}


}




ComposeParser.CompilationUnitContext = CompilationUnitContext; 
ComposeParser.EntityDeclContext = EntityDeclContext; 
ComposeParser.EntityModifierContext = EntityModifierContext; 
ComposeParser.EntityCallContext = EntityCallContext; 
ComposeParser.ParameterListContext = ParameterListContext; 
ComposeParser.LiteralContext = LiteralContext; 
ComposeParser.IdentifierContext = IdentifierContext; 
