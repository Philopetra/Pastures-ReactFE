import Breadcrumb from '../../components/Breadcrumb';
import FinancialReportTable from '../../components/FinanceReportTable';

const DeliveryReport = () => {
  return (
    <>
      <Breadcrumb pageName="FinancialReport" />

      <div className="flex flex-col gap-10">
        <FinancialReportTable />
      </div>
    </>
  );
};

export default DeliveryReport;
