package consumer

import (
	"testing"
)

func TestNewCompose(t *testing.T) {
	compose := NewCompose()
	compose.Source("hello").Target("component")
	got := compose.Build()
	want := "source(hello).target(component)"

	if got != want {
		t.Errorf("got %q, wanted %q", got, want)
	}
}
