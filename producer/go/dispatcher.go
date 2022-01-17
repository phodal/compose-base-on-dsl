package producer

import (
	"encoding/json"
)

func Dispatcher(str string) string {
	flow := Compile(str)
	switch flow.Entity {
	case "Book":
		book := NewBook()
		for _, call := range flow.Calls {
			switch call.FunctionName {
			case "target":
				book.Target()
			case "source":
				book.Source(call.Parameters[0].TypeValue)
			}
		}

		out, _ := json.Marshal(book)
		return string(out)
	default:
		return ""
	}
}
