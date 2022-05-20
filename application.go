package main

import (
	"administrator/controllers"
	"github.com/aurora-go/aurora"
	"log"
)

func main() {
	web := aurora.Web
	controllers.Control(web)
	err := aurora.Run(web)
	if err != nil {
		log.Println(err.Error())
		return
	}
}
