// refs by: https://github.com/antlr/grammars-v4/blob/master/java/java9/Java9Parser.g4
parser grammar ComposeParser;

options
{
   tokenVocab = ComposeLexer;
}

compilationUnit
    : entityDecl
    ;

entityDecl
    : entityModifier '.' entityCall
    ;

entityModifier
    : 'Book'
    | 'Note'
    | 'Paper'
    ;

entityCall
    : identifier ('.' identifier)*
    ;

identifier : Identifier;