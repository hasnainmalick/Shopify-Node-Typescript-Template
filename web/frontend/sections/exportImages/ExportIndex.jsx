import { Card, Page } from '@shopify/polaris'
import { useNavigate } from 'react-router-dom'
import ExportTable from './ExportTable';
import Table from '../../components/Table';

const ExportIndex = () => {
  const navigate = useNavigate();
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
    <Page title='Export images' primaryAction={{ content: 'Export' }} backAction={{ onAction: () => navigate("/") }}>
      <Card>

        <Table data={data} />
      </Card>
    </Page>
  )
}

export default ExportIndex