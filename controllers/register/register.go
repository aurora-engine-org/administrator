package register

import (
	"administrator/controllers/index"
	"gitee.com/aurora-engine/aurora"
)

func Register(a *aurora.Aurora) {

	{
		a.Get("/", index.Vue)
	}
}
