package main

import (
	"administrator/controllers"
	"github.com/aurora-go/aurora"
	"log"
)

func main() {
	a := aurora.New()

	controllers.Control(a)

	err := a.Guide(nil)
	if err != nil {
		log.Println(err.Error())
		return
	}
}
