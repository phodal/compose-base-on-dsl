package producer

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func Test_int(t *testing.T) {
	flow := Compile("Book.Target(12)")

	assert.Equal(t, flow.Calls[0].Parameters[0].TypeName, "int")
	assert.Equal(t, flow.Calls[0].Parameters[0].TypeValue, "12")
}

func Test_float(t *testing.T) {
	flow := Compile("Book.Target(12.0)")

	assert.Equal(t, flow.Calls[0].Parameters[0].TypeName, "float")
	assert.Equal(t, flow.Calls[0].Parameters[0].TypeValue, "12.0")
}

func Test_string(t *testing.T) {
	flow := Compile("Book.Target(12, \"demo\")")

	assert.Equal(t, flow.Calls[0].Parameters[0].TypeName, "int")
	assert.Equal(t, flow.Calls[0].Parameters[0].TypeValue, "12")

	assert.Equal(t, flow.Calls[0].Parameters[1].TypeName, "string")
	assert.Equal(t, flow.Calls[0].Parameters[1].TypeValue, "\"demo\"")
}
