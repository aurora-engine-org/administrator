package controllers

import (
	"administrator/services/views"
	"github.com/aurora-go/aurora"
)

func Control(a aurora.Web) {

	vue := a.Group("/")
	{
		vue.Get("/", views.Vue)
	}

}
