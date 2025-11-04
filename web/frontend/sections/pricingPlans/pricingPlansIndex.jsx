import React from 'react'
import { Page } from '@shopify/polaris'
import { useNavigate } from 'react-router-dom'

const PricingPlanIndex = () => {
    const navigate = useNavigate()
  return (
    <Page title='Pricing plans'  backAction={{onAction:() => navigate("/")}}>
        PricingPlanIndex
    </Page>
  )
}

export default PricingPlanIndex