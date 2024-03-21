import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../slice";
import SearchFilter from "../components/searchfilter";
import Product

const SearchPage: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const handleSearch = (filters: SearchFilters) => {
    // Dispatch action to fetch products based on filters
    dispatch(fetchProducts({ filters })); // Modify based on your actual filtering logic
  };

  return (
    <div>
      <SearchFilter onSearch={handleSearch} />
      <ProductList products={products