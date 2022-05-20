package main

import (
	"administrator/controllers"
	"github.com/aurora-go/aurora"
	"log"
)

var Web = aurora.Instance

func main() {
	controllers.Control(Web)
	err := Web.Guide(nil)
	if err != nil {
		log.Println(err.Error())
		return
	}
}
