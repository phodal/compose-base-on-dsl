package main

import (
	producer "dsl-compose/producer/go"
	"fmt"
)

func main() {
	flow := producer.Compile("Book.Target(123).Sample(12)")
	fmt.Println(flow)
}
