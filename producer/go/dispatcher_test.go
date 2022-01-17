package producer

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func Test_dispatcher(t *testing.T) {
	res := Dispatcher("Book.Source(12).Target(12)")
	assert.Equal(t, res, "{\"Id\":\"12\",\"Title\":\"title\",\"Name\":\"hello\"}")
}
