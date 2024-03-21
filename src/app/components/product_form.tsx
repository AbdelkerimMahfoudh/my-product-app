import React from "react";
import { useForm } from "react-hook-form";
import { Product, technical} from "../types/Product";
import Input from "./input";
import { Form, Button } from "react-bootstrap";

const ProductForm: React.FC<{ initialData?: Product }> = ({ initialData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({
    defaultValues: initialData || {},
  });

  const [showTechnicalCharacteristics, setShowTechnicalCharacteristics] = React.useState(false);
  const [options, setOptions] = React.useState<Option[]>([]);

  const handleAddOption = () => {
    setOptions([...options, { optionName: "" }]);
  };

  const onSubmit = (data: Product) => {
    // Handle form submission (dispatch action to create product)
  };

  return (
    <Form className="product-form" onSubmit={handleSubmit(onSubmit)}>
      <Input label="Title" {...register("name", { required: true })} error={errors.name} />
      <Input
        label="Description"
        {...register("description", { required: true })}
        error={errors.description}
        as="textarea"
      />
      {/* ... other basic fields */}
      <Form.Check
        type="checkbox"
        label="Add technical specifications"
        checked={showTechnicalCharacteristics}
        onChange={() => setShowTechnicalCharacteristics(!showTechnicalCharacteristics)}
      />
      {showTechnicalCharacteristics && <TechnicalCharacteristicsForm register={register} />}
      <Button variant="primary" onClick={handleAddOption}>
        Add Option
      </Button>
      {options.map((option, index) => (
        <Input key={index} label={`Option ${index + 1}`} {...register(`options[${index}].optionName`)} />
      ))}
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default ProductForm;