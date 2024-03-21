import React from "react";
import Input from "../components/input";

const TechnicalCharacteristics: React.FC = ({ register }) => {
  return (
    
    <>
      <Input label="Brand" {...register("technicalCharacteristics.brand")} />
      <Input label="Model" {...register("technicalCharacteristics.model")} />
    </>
  );
};

export default TechnicalCharacteristics;