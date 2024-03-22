
import ProductForm from "../components/product_form";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min";
export async function getStaticProps() {
 
  return { props: {} };
}

const CreatePage: React.FC = () => {
  return <ProductForm />;
};

export default CreatePage;