import React from 'react'
import { Page } from '@shopify/polaris'
import { useNavigate } from 'react-router-dom'
import Table from '../../components/Table'

const ExportVideosIndex = () => {
    const navigate = useNavigate()
    const data = [
        {
            id: '3411',
            url: '#',
            name: 'Mae Jemison',
            location: 'Decatur, USA',
            orders: 20,
            amountSpent: '$2,400',
        },
        {
            id: '2561',
            url: '#',
            name: 'Ellen Ochoa',
            location: 'Los Angeles, USA',
            orders: 30,
            amountSpent: '$140',
        },
    ];
    return (
        <Page title='Export videos' primaryAction={{ content: 'Export' }} backAction={{ onAction: () => navigate("/") }}>
            <Table data={data} />
        </Page>
    )
}

export default ExportVideosIndex