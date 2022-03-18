package controllers

import (
	"administrator/services/views"
	"github.com/aurora-go/aurora"
)

func Control(a *aurora.Aurora) {

	vue := a.Group("/")
	{
		vue.GET("/", views.Vue)
	}

}
