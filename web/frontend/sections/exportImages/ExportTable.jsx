import React, { useState, useCallback } from 'react';
import {
    IndexTable,
    IndexFilters,
    useSetIndexFiltersMode,
    useIndexResourceState,
    Text,
    useBreakpoints,
    Box,
    Card,
    Link,
} from '@shopify/polaris';
import Table from '../../components/Table';

const ExportTable = () => {
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
        <Card>
            <Table data={data} />
        </Card>
    )
};

export default ExportTable;
