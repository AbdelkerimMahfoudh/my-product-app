
import ProductForm from "../components/product_form";

export async function getStaticProps() {
 
  return { props: {} };
}

const CreatePage: React.FC = () => {
  return <ProductForm />;
};

export default CreatePage;