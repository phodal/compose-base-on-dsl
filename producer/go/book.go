package _go

type Book struct {
	id    string
	title string
	name  string
}

func NewBook() *Book {
	return &Book{}
}

func (b *Book) Source(id string) *Book {
	return &Book{
		id:    id,
		title: "demo",
		name:  "hello",
	}
}

func (b *Book) Target(id string) string {
	return b.title
}
