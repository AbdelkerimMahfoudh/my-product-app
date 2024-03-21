import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../slice";
import SearchFilter from "../components/searchfilter";
import Product from "../types/Product";

const SearchPage: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const handleSearch = (filters: SearchFilters) => {
    
    dispatch(fetchProducts({ filters })); 
  };

 