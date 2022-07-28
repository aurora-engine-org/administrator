package main

import (
	"administrator/controllers/register"
	"administrator/load"
	"gitee.com/aurora-engine/aurora"
)

func main() {
	a := load.Server()
	register.Register(a)
	aurora.Run(a)
}
