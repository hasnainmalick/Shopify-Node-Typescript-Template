import React from 'react'
import { Page } from '@shopify/polaris'
import { useNavigate } from 'react-router-dom'

const SettingIndex = () => {
    const navigate = useNavigate()
  return (
    <Page title='Settings'  backAction={{onAction:() => navigate("/")}}>
        SettingIndex
    </Page>
  )
}

export default SettingIndex