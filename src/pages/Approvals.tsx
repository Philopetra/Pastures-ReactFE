import ApprovalTable from '../components/ApprovalTable';

const Approvals = () => {
  return (
    <>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-full">
          <ApprovalTable />
        </div>
      </div>
    </>
  );
};

export default Approvals;
