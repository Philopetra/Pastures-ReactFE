import Breadcrumb from '../../components/Breadcrumb';
import SalesReportTable from '../../components/SalesReportTable';

const SalesReport = () => {
  return (
    <>
      <Breadcrumb pageName="SalesReport" />

      <div className="flex flex-col gap-10">
        <SalesReportTable />
      </div>
    </>
  );
};

export default SalesReport;
