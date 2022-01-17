import {ANTLRInputStream, CommonToken, CommonTokenStream} from 'antlr4ts';
import {ComposeLexer} from "./ts/ComposeLexer";
import {
    CompilationUnitContext,
    ComposeParser,
    EntityCallContext,
    EntityModifierContext,
    ParameterListContext
} from "./ts/ComposeParser";
import {ParseTreeWalker} from "antlr4ts/tree";
import {ComposeParserListener} from "./ts/ComposeParserListener";
import {Vocabulary} from "antlr4ts/Vocabulary";

interface IEntityFlow {
    Entity: String
    Calls: ICodeCall[]
}

class EntityFlow implements IEntityFlow {
    Calls: ICodeCall[] = [];
    Entity: String;
}

interface ICodeCall {
    FunctionName: string
    Parameters: IParamType[]
}

class CodeCall implements ICodeCall {
    FunctionName: string;
    Parameters: IParamType[];
}

interface IParamType {
    TypeName: string
    TypeValue: string
}

class ParamType implements IParamType {
    TypeName: string;
    TypeValue: string;
}

class ComposeListener implements ComposeParserListener {
    public entity: EntityFlow;
    private vocabulary: Vocabulary;

    constructor(vocabulary: Vocabulary) {
        this.vocabulary = vocabulary;
        this.entity = new EntityFlow();
    }

    enterEntityModifier(ctx: EntityModifierContext): void {
        this.entity.Entity = ctx.text;
    }

    enterEntityCall(ctx: EntityCallContext): void {
        let codeCall = new CodeCall();
        codeCall.FunctionName = ctx.identifier().text;
        codeCall.Parameters = [];

        for (let literal of (ctx.parameterList() as ParameterListContext).literal()) {
            let tokenIndex = (literal.children[0].payload as CommonToken).type;
            let symbolicName = this.vocabulary.getSymbolicName(tokenIndex);

            let typeName = "";
            switch (symbolicName) {
                case "IntegerLiteral":
                    typeName = "int"
                    break;
                case "FloatingPointLiteral":
                    typeName = "float";
                    break;
                case "BooleanLiteral":
                    typeName = "bool";
                    break;
                case "CharacterLiteral":
                    typeName = "char";
                    break;
                case "StringLiteral":
                    typeName = "string";
                    break;
                case "NullLiteral":
                    typeName = "null";
                    break;
                default:

            }

            let paramType = new ParamType();
            paramType.TypeName = typeName;
            paramType.TypeValue = literal.text;
            codeCall.Parameters.push(paramType)
        }

        this.entity.Calls.push(codeCall)
    }
}

export function Compile(str: string) {
    let inputStream = new ANTLRInputStream(str);
    let lexer = new ComposeLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new ComposeParser(tokenStream);
    let tree = parser.compilationUnit();

    const listener = new ComposeListener(parser.vocabulary);
    ParseTreeWalker.DEFAULT.walk(listener as any, tree)

    return listener.entity
}
