import Breadcrumb from '../components/Breadcrumb';
import TableOne from '../components/TableOne';

const Finances = () => {
  return (
    <>
      <Breadcrumb pageName="Finances" />

      <div className="flex flex-col gap-10">
        <TableOne />
      </div>
    </>
  );
};

export default Finances;
