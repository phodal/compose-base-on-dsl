package consumer

import (
	"testing"
)

func TestNewCompose(t *testing.T) {
	compose := NewCompose()
	compose.Source("12").Target("12.0")
	got := compose.Build()
	want := "Book.source(12).target(12.0)"

	if got != want {
		t.Errorf("got %q, wanted %q", got, want)
	}
}
