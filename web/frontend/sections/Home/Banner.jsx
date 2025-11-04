import { Button, CalloutCard, Card, Text } from '@shopify/polaris'
import { useNavigate } from 'react-router-dom'
const Banner = () => {
    const navigate = useNavigate();
    return (
        <CalloutCard
            title="Ready to get going on exporting media?"
            illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
            primaryAction={{
                content: "Export",
                onAction: () => navigate("/export-images"),
                variant:"primary"
            }}
        >
            <p>Export images, videos from your products..</p>
        </CalloutCard>
    )
}

export default Banner