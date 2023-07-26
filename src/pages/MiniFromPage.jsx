import React from "react"
import { createForm } from "rc-form"

const nameRules = { required: true, message: "请输入姓名！" }
const passwordRules = { required: true, message: "请输入密码！" }

class MiniFromPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { setFieldsValue } = this.props.form
    setFieldsValue({ username: "componentDidMount username" })
  }

  submit = () => {
    console.log("trigger submit")
    const { getFieldsValue, validateFields } = this.props.form
    // 校验
    validateFields((error, value) => {
      console.log("validateFields ", {
        error,
        value,
      })
    })
    // 取值 & 使用
    console.log("submit", getFieldsValue())
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <h3>LoginPage</h3>

        {getFieldDecorator("username", { rules: [nameRules] })(<input placeholder="Username" />)}
        <br />
        {getFieldDecorator("password", { rules: [passwordRules] })(<input placeholder="Password" />)}
        <br />

        <button onClick={this.submit}>submit</button>
      </div>
    )
  }
}

export default createForm(MiniFromPage)
