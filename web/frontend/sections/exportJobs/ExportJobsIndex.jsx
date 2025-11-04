import React from 'react'
import { Page } from '@shopify/polaris'
import { useNavigate } from 'react-router-dom'

const ExportJobsIndex = () => {
    const navigate = useNavigate()
  return (
    <Page title='Export jobs'  backAction={{onAction:() => navigate("/")}}>
        ExportJobsIndex
    </Page>
  )
}

export default ExportJobsIndex