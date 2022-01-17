package main

import (
	"dsl-compose/consumer"
	producer "dsl-compose/producer/go"
	"fmt"
)

func main() {
	compose := consumer.NewCompose()
	compose.Source("12").Target("12.0")
	contract := compose.Build()

	fmt.Println(contract)

	flow := producer.Dispatcher(contract)
	fmt.Println(flow)
}
