要实现的内容

## createForm

- 接受一个组件，返回一个新的组件 「这里的组件含意是函数」
- 会把复用逻辑放到 this.props.form 上

## getFieldDecorator

- getFieldDecorator(fieldName, options)(reactNode)
- 返回 ReactNode，在这里规定了 filedName 和 校验规则

## getFieldsValue

- getFieldsValue()
- 返回一个对象，包含了所有通过 getFieldDecorator 注册的字段的 key/value

## validateFields

- validateFields(callback)

```js
validateFields((error, value) => {
  console.log({
    error,
    value,
  })
})
```

```json
{
  "error": {
    "password": {
      "errors": [
        {
          "message": "请输入密码！",
          "field": "password"
        }
      ]
    }
  },
  "value": {
    "username": "componentDidMount username"
  }
}
```
