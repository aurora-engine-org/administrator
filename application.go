package main

import (
	"github.com/aurora-go/aurora"
	"log"
)

var Web = aurora.Instance

func main() {
	err := Web.Guide(nil)
	if err != nil {
		log.Println(err.Error())
		return
	}
}
