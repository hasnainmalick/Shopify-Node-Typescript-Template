import React, { useState, useCallback } from 'react';
import {
    FilterIcon,
    SearchIcon
} from '@shopify/polaris-icons';
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
    TextField,
    Button,
    Icon,
} from '@shopify/polaris';

const Table = ({ data }) => {

    const resourceName = {
        singular: 'customer',
        plural: 'data',
    };

    const { selectedResources, allResourcesSelected, handleSelectionChange } =
        useIndexResourceState(data);

    const rowMarkup = data.map(
        ({ id, url, name, location, orders, amountSpent }, index) => (
            <IndexTable.Row
                id={id}
                key={id}
                selected={selectedResources.includes(id)}
                position={index}
            >
                <IndexTable.Cell>
                    <Link
                        // dataPrimaryLink
                        url={url}
                        onClick={() => console.log(`Clicked ${name}`)}
                    >
                        <Text fontWeight="bold" as="span">
                            {name}
                        </Text>
                    </Link>
                </IndexTable.Cell>
                <IndexTable.Cell>{location}</IndexTable.Cell>
                <IndexTable.Cell>
                    <Text as="span" alignment="end" numeric>
                        {orders}
                    </Text>
                </IndexTable.Cell>
                <IndexTable.Cell>
                    <Text as="span" alignment="end" numeric>
                        {amountSpent}
                    </Text>
                </IndexTable.Cell>
            </IndexTable.Row>
        ),
    );

    return (
        <div>
            <TextField
                // value={queryValue}
                // onChange={setQueryValue}
                prefix={<Icon source={SearchIcon} />}
                connectedRight={ <Button icon={FilterIcon} accessibilityLabel="Add theme" />}
                placeholder="Search..."
                clearButton
                // onClearButtonClick={() => setQueryValue('')}
                autoComplete="off"
            />
            {/* <Button icon={SearchIcon}  /> */}
            <IndexTable
                condensed={useBreakpoints().smDown}
                resourceName={resourceName}
                itemCount={data.length}
                selectedItemsCount={
                    allResourcesSelected ? 'All' : selectedResources.length
                }
                onSelectionChange={handleSelectionChange}
                headings={[
                    { title: 'Name' },
                    { title: 'Location' },
                    {
                        id: 'order-count',
                        title: (
                            <Text as="span" alignment="end">
                                Order count
                            </Text>
                        ),
                    },
                    {
                        id: 'amount-spent',
                        hidden: false,
                        title: (
                            <Text as="span" alignment="end">
                                Amount spent
                            </Text>
                        ),
                    },
                ]}
            >
                {rowMarkup}
            </IndexTable>
        </div>
    )
};

export default Table;
