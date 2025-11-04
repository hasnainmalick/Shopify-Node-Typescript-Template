import React from 'react';
import { Card, InlineGrid, BlockStack, Text } from '@shopify/polaris';

const Header = () => {
  return (
    <Card padding="400">
      <InlineGrid columns={3} alignItems="center">
        <div style={{ borderRight: '1px solid var(--p-color-border)', paddingRight: '1rem' }}>
          <BlockStack gap="100">
            <Text as="h3" variant="headingSm" fontWeight="bold">
              Image exports processed
            </Text>
            <Text>5</Text>
          </BlockStack>
        </div>

        <div
          style={{
            borderRight: '1px solid var(--p-color-border)',
            padding: '0 1rem',
          }}
        >
          <BlockStack gap="100">
            <Text as="h3" variant="headingSm" fontWeight="bold">
              Video exports processed
            </Text>
            <Text>0</Text>
          </BlockStack>
        </div>

        <div style={{ paddingLeft: '1rem' }}>
          <BlockStack gap="100">
            <Text as="h3" variant="headingSm" fontWeight="bold">
              Current plan
            </Text>
            <Text>Free</Text>
          </BlockStack>
        </div>
      </InlineGrid>
    </Card>
  );
};

export default Header;
