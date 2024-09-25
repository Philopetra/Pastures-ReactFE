import OrderTable from '../components/OrderTable';

const Orders = () => {
  return (
    <>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-full">
          <OrderTable />
        </div>
      </div>
    </>
  );
};

export default Orders;
