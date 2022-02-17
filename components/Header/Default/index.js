import React from 'react'
import { connect } from 'react-redux'
import { Layout, Row, Col, Menu, Dropdown, Button } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import styles from './Header.module.css'

const HeaderComponent = () => {
  const menuUser = (
    <Menu>
      <Menu.Item>
        <div>
          <Button htmlType="button" type="primary" className="font-button">Login</Button>
        </div>
      </Menu.Item>
    </Menu>
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
    </>
  )
}

export default connect(state => state)(HeaderComponent)
