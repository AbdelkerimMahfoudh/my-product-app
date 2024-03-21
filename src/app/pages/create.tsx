import React from "react";
import ProductForm from "../components/product_form";

export async function getStaticProps() {
  // Fetch initial data (optional)
  return { props: {} };
}

const CreatePage: React.FC = () => {
  return <ProductForm />;
};

export default CreatePage;