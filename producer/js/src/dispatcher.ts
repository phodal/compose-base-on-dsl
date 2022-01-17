import {Compile} from "./ast";
import {Book} from "./book";

export function Dispatcher(str: string) {
    let flow = Compile(str)
    switch (flow.Entity) {
        case "Book":
            let book = new Book();
            for (let call of flow.Calls) {
                switch (call.FunctionName) {
                    case "Target":
                        book.target()
                        break;
                    case "Source":
                        book.source(call.Parameters[0].TypeValue)
                        break;
                }
            }

            return JSON.stringify(book)
        default:
            return ""
    }
}
