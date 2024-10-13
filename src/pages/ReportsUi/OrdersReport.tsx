import Breadcrumb from '../../components/Breadcrumb';
import OrdersReportTable from '../../components/OrdersReportTable';

const OrdersReport = () => {
  return (
    <>
      <Breadcrumb pageName="Report" />

      <div className="flex flex-col gap-10">
        <OrdersReportTable />
      </div>
    </>
  );
};

export default OrdersReport;
