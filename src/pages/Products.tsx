import Breadcrumb from '../components/Breadcrumb';
import ProductTable from '../components/ProductTable.js';

const Products = () => {
  return (
    <>
      <Breadcrumb pageName="Products" />

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-full">
          <ProductTable />
        </div>
      </div>
    </>
  );
};

export default Products;
