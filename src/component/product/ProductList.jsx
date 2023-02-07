import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../context/ProductContextProvider";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { getProducts, products, pages } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  function getPagesCount() {
    let pagesCountArr = [];

    for (let i = 1; i <= pages; i++) {
      pagesCountArr.push(i);
    }
    return pagesCountArr;
  }

  useEffect(() => {
    getProducts();
  }, [searchParams]); 

  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-center flex-wrap">
        {products.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
      <Pagination>
        <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} />
        {getPagesCount().map((item) =>
          item === currentPage ? (
            <Pagination.Item
              onClick={() => setCurrentPage(item)}
              active
              key={item}
            >
              {item}
            </Pagination.Item>
          ) : (
            <Pagination.Item onClick={() => setCurrentPage(item)} key={item}>
              {item}
            </Pagination.Item>
          )
        )}

        <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} />
      </Pagination>
    </div>
  );
};

export default ProductList;
