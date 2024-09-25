import CardFour from '../../components/CardFour.tsx';
import CardOne from '../../components/CardOne.tsx';
import CardThree from '../../components/CardThree.tsx';
import CardTwo from '../../components/CardTwo.tsx';
import TableFour from '../../components/TableFour.tsx';

const customers = [
  {
    Customer: 'John Doe',
    'Order ID': 'ORD12345',
    Total: '£14.00',
    Date: '04 Oct 2023 | 12:18 pm',
    Status: 'Completed',
  },
  {
    Customer: 'Jane Smith',
    'Order ID': 'ORD12346',
    Total: '£14.00',
    Date: '04 Oct 2023 | 12:18 pm',
    Status: 'Failed',
  },
  {
    Customer: 'Michael Johnson',
    'Order ID': 'ORD12347',
    Total: '£14.00',
    Date: '04 Oct 2023 | 12:18 pm',
    Status: 'Pending',
  },
  {
    Customer: 'Emily Davis',
    'Order ID': 'ORD12348',
    Total: '£14.00',
    Date: '04 Oct 2023 | 12:18 pm',
    Status: 'Completed',
  },
  {
    Customer: 'David Wilson',
    'Order ID': 'ORD12349',
    Total: '£14.00',
    Date: '04 Oct 2023 | 12:18 pm',
    Status: 'Pending',
  },
  {
    Customer: 'Sarah Brown',
    'Order ID': 'ORD12350',
    Total: '£14.00',
    Date: '04 Oct 2023 | 12:18 pm',
    Status: 'Failed',
  },
];

const ECommerce = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-full">
          <TableFour />
        </div>
      </div>
    </>
  );
};

export default ECommerce;
