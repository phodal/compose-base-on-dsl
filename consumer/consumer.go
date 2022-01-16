package consumer

import "strings"

type Compose struct {
	builder strings.Builder
}

func NewCompose() *Compose {
	return &Compose{
		builder: strings.Builder{},
	}
}

func (b *Compose) Source(id string) *Compose {
	source := "source(" + id + ")"
	b.builder.WriteString(source)
	return b
}

func (b *Compose) Target(id string) *Compose {
	source := ".target(" + id + ")"
	b.builder.WriteString(source)
	return b
}

func (b *Compose) Build() string {
	return b.builder.String()
}
