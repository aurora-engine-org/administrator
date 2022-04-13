# view

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
"# administrator"

# Admin

相关组件 view/src/components/admin

相关页面 view/src/views/admin

管理系统侧边菜单项设计

数据结构：

```apache
menus:  [
        {
          //顶层菜单名
          title:"个人中心",
          //菜单选项是否打开,默认false关闭
          isOpen:false,
          //菜单选项
          items:[
            //path 对应 router 路径
            {title:'个人资料',path:'test'},
            {title:'账号安全',path:'账号安全'},
            {title:'黑名单管理',path:'黑名单管理'},
          ],
          //子菜单
          child:[]
        }
      ]
```
