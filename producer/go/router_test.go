package producer

import (
	"fmt"
	"testing"
)

func Test_compile(t *testing.T) {
	flow := Compile("Book.Target(12)")
	fmt.Println(flow)
}
