import AdminCardOne from '../components/AdminCardOne.tsx';
import AdminCardTwo from '../components/AdminCardTwo.tsx';
import AdminCardThree from '../components/AdminCardThree.tsx';
import AdminTable from '../components/AdminTable.tsx';

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

const AdminUsers = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        <AdminCardOne />
        <AdminCardTwo />
        <AdminCardThree />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-full">
          <AdminTable />
        </div>
      </div>
    </>
  );
};

export default AdminUsers;
