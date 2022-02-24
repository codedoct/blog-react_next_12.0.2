/* eslint-disable no-undef */
import React from 'react'
import { connect } from 'react-redux'
import { Button, Modal, Input, Form, message } from 'antd'

const LoginModal = ({dispatch, user}) => {
  const [isLoading, setIsLoading] = React.useState(false)

  const showModalRegister = () => {
    dispatch({ type: 'SET_IS_MODAL_LOGIN_VISIBLE', payload: false })
    dispatch({ type: 'SET_IS_MODAL_REGISTER_VISIBLE', payload: true })
  }

  const closeModal = () => {
    dispatch({ type: 'SET_IS_MODAL_LOGIN_VISIBLE', payload: false })
  }

  const handleLogin = async (values) => {
    setIsLoading(true)
    try {
      const requestData = {
        email: values.email,
        password: values.password
      }
      console.log(requestData)
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      message.error(`API error: ${error.response}`)
    }
  }

  return (
    <Modal visible={user.isModalLoginVisible} footer={false} onCancel={closeModal}>
      <div>
        <Form name="basic" onFinish={handleLogin}>
          <h2>Log In</h2>
          <div className="mt-3 mb-2">
            <div>Email</div>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Silakan masukan email'
                }
              ]}
            >
              <Input placeholder="Masukkan email" />
            </Form.Item>

            <div style={{marginTop:"20px"}}>Password</div>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Silakan masukan password anda'
                }
              ]}
            >
              <Input.Password placeholder="Masukkan password" />
            </Form.Item>
          </div>
          <Form.Item>
            <Button key="register" htmlType="submit" type="primary" loading={isLoading} style={{width:"100%"}}>
              Log In
            </Button>
          </Form.Item>
        </Form>
        <div className="text-center font-link" onClick={showModalRegister}>Register</div>
      </div>
    </Modal>
  )
}

export default connect(state => state)(LoginModal)
