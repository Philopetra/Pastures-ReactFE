import Breadcrumb from '../../components/Breadcrumb';
import DeliveryReportTable from '../../components/DeliveryReportTable';

const DeliveryReport = () => {
  return (
    <>
      <Breadcrumb pageName="DeliveryReport" />

      <div className="flex flex-col gap-10">
        <DeliveryReportTable />
      </div>
    </>
  );
};

export default DeliveryReport;
