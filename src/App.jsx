import { useState } from "react";

import { Helmet } from "react-helmet";
import ReactPaginate from "react-paginate";
import MainLayout from "./components/layouts/MainLayout";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import { useSelector } from "react-redux";

const PaginateItems = ({ productsPerPage, products, status }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + productsPerPage;

  const currentProducts = products.slice(itemOffset, endOffset);
  console.log(`currentProducts: ${currentProducts}`);

  const pageCount = Math.ceil(products.length / productsPerPage);

  const handlePageClick = (e) => {
    const newOffset = e.selected * productsPerPage;

    setItemOffset(newOffset);
  };

  return (
    <>
      <ProductListing currentProducts={currentProducts} status={status} />
      <ReactPaginate
        containerClassName="flex justify-center items-center mt-8 mb-4"
        pageClassName="block border border-solid border-lightgray w-10 h-10 flex items-center justify-center rounded-md mr-2"
        activeClassName="bg-palette-primary text-palette-light hover:bg-palette-dark"
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={null}
        nextLabel={null}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

const App = () => {
  const { items: products, status } = useSelector((state) => state.products);

  return (
    <MainLayout>
      <Helmet>
        <title>فروشگاه لوازم خانگی</title>
      </Helmet>

      <div className="mx-auto max-w-6xl">
        <Header />
        <PaginateItems
          productsPerPage={9}
          products={products}
          status={status}
        />
      </div>
    </MainLayout>
  );
};

export default App;
