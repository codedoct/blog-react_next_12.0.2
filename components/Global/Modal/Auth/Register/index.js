import React from 'react'
import { connect } from 'react-redux'
import { Button, Modal, Input, Form, message, Select } from 'antd'
import styles from './RegisterModal.module.css'

const RegisterModal = ({dispatch, user}) => {
  const [form] = Form.useForm()
  const [isLoading, setIsLoading ] = React.useState(false)

  const showModalLogin = () => {
    dispatch({ type: 'SET_IS_MODAL_REGISTER_VISIBLE', payload: false })
    dispatch({ type: 'SET_IS_MODAL_LOGIN_VISIBLE', payload: true })
  }

  const closeModal = () => {
    dispatch({ type: 'SET_IS_MODAL_REGISTER_VISIBLE', payload: false })
  }

  const handleRegister = async (values) => {
    setIsLoading(true)
    try {
      const dataRequest = {
        name: values.name,
        address: values.address,
        gender: values.gender,
        email: values.email,
        password: values.password
      }

      console.log(dataRequest)
      setIsLoading(false)
      form.resetFields()
      dispatch({ type: 'SET_IS_MODAL_REGISTER_VISIBLE', payload: false })
    } catch (err) {
      message.error(`API error: ${err ? err.data ? (err.data.attributes ? err.data.attributes[Object.keys(err.data.attributes)[0]] : err.data.message || err.data) : err : 'something went wrong'}`)
      setIsLoading(false)
    }
  }

  return (
    <Modal visible={user.isModalRegisterVisible} footer={false} onCancel={closeModal}>
      <Form form={form} name="basic" initialValues={{gender:"male"}} onFinish={handleRegister}>
        <h2>Register</h2>
        <div className={styles['modal-body']}>
          <div>Nama</div>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: 'Silakan masukan nama anda'
              }
            ]}
          >
            <Input placeholder="Masukkan nama" />
          </Form.Item>

          <div>Alamat</div>
          <Form.Item name="address" rules={[
            {
              required: true,
              message: 'Wajib'
            }
          ]}>
            <Input.TextArea rows="3" />
          </Form.Item>

          <div>Jenis Kelamin</div>
          <Form.Item name="gender">
            <Select>
              <Select.Option value="male">Laki-laki</Select.Option>
              <Select.Option value="female">Perempuan</Select.Option>
            </Select>
          </Form.Item>

          <div>Email</div>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Silakan masukan email anda'
              },
              {
                type: 'email',
                message: 'Email tidak valid'
              }
            ]}
          >
            <Input placeholder="Masukkan email" />
          </Form.Item>

          <div>Password</div>
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

          <div style={{marginTop:"20px"}}>Konfirmasi Password</div>
          <Form.Item
            name="confirm_password"
            rules={[
              {
                required: true,
                message: 'Silakan konfirmasi password anda'
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('Konfirmasi password yang anda masukan tidak sama'))
                }
              })
            ]}
          >
            <Input.Password placeholder="Konfirmasi password..." />
          </Form.Item>
        </div>

        <Form.Item>
          <Button key="register" type="primary" htmlType="submit" loading={isLoading} style={{width:"100%"}}>
            Register
          </Button>
        </Form.Item>
      </Form>
      <div className={styles['font-have-login']}>Sudah Punya Akun? <span className={styles['link-login-modal']} onClick={showModalLogin}>Log In</span></div>
    </Modal>
  )
}

export default connect(state => state)(RegisterModal)
