
import { useForm } from "react-hook-form";
import Product from "../types/product";

const ProductForm: React.FC = ({ initialData }: { initialData?: Product }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Product>({
    defaultValues: initialData || {},
  });

  const onSubmit = (data: Product) => {
    // Handle form submission (dispatch action to create product)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form fields using register and errors */}
      <button type="submit">submit</button>
    </form>
  );
};

export default ProductForm;