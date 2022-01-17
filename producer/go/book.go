package producer

type Book struct {
	Id    string
	Title string
	Name  string
}

func NewBook() *Book {
	return &Book{}
}

func (b *Book) Source(id string) *Book {
	b.Id = id
	b.Title = "title"
	b.Name = "hello"

	return b
}

func (b *Book) Target() string {
	return b.Title
}
