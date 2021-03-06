import React from 'react'
import { connect } from 'react-redux'
import { Layout, Row, Col, Menu, Dropdown, Button } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import styles from './Header.module.css'
import RegisterModal from '~/components/Global/Modal/Auth/Register'
import LoginModal from '~/components/Global/Modal/Auth/Login'
import { isLogin, removeCookie } from '~/utils/auth'
import Router from 'next/router'
import { logoutUser } from "~/store/actions/user"

const HeaderComponent = ({dispatch}) => {
  const showModalRegister = () => {
    dispatch({ type: 'SET_IS_MODAL_LOGIN_VISIBLE', payload: false })
    dispatch({ type: 'SET_IS_MODAL_REGISTER_VISIBLE', payload: true })
  }

  const showModalLogin = () => {
    dispatch({ type: 'SET_IS_MODAL_LOGIN_VISIBLE', payload: true })
    dispatch({ type: 'SET_IS_MODAL_REGISTER_VISIBLE', payload: false })
  }

  const handleLogoutUser = async () => {
    try {
      await logoutUser()
      removeCookie()
    } catch (err) {
      console.log(err)
    }
  }

  const menuUser = (
    isLogin() ? (
      <Menu>
        <Menu.Item key="2">
          <Button htmlType="button" type="primary" onClick={handleLogoutUser}>Logout</Button>
        </Menu.Item>
      </Menu>
    ) : (
      <Menu>
        <Menu.Item key="1">
          <Button htmlType="button" type="primary" onClick={() => Router.push('/news')}>News</Button>
        </Menu.Item>
        <Menu.Item key="2">
          <Button htmlType="button" type="primary" onClick={showModalRegister}>Register</Button>
        </Menu.Item>
        <Menu.Item key="3">
          <Button htmlType="button" onClick={showModalLogin}>Login</Button>
        </Menu.Item>
      </Menu>
    )
  )

  return (
    <>
      <Layout.Header className={styles['box-header-static']}>
        <Row gutter={[24, 0]} align="middle">
          <Col span={12}>
            Codedoct
          </Col>
          <Col span={12} align="right">
            <Dropdown overlay={menuUser} arrow trigger={['click']}>
              <MenuOutlined />
            </Dropdown>
          </Col>
        </Row>
      </Layout.Header>

      <RegisterModal />
      <LoginModal />
    </>
  )
}

export default connect(state => state)(HeaderComponent)
