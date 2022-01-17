// refs by: https://github.com/antlr/grammars-v4/blob/master/java/java9/Java9Parser.g4
parser grammar ComposeParser;

options
{
   tokenVocab = ComposeLexer;
}

compilationUnit
    : entityDecl?
    ;

entityDecl
    : entityModifier ('.' entityCall)*
    ;

entityModifier
    : StringLiteral
    ;

entityCall
    : identifier '(' parameterList ')'
    ;

// parameter => string, int, float
// or JSON string
parameterList
    : literal (',' literal)*
    ;

literal
	:	IntegerLiteral
	|	FloatingPointLiteral
	|	BooleanLiteral
	|	CharacterLiteral
	|	StringLiteral
	|	NullLiteral
	;

identifier : Identifier;
