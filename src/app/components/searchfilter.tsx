import React from "react";
import { Form, Range } from "react-bootstrap";

interface SearchFilterProps {
   onSearch: (filters: SearchFilters) => void;
}

interface SearchFilters {
  brand?: string;
  model?: string;
  productionYearFrom?: number;
  productionYearTo?: number;
  bodyType?: string;
  mileageFrom?: number;
  mileageTo?: number;
  priceFrom?: number;
  priceTo?: number;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ onSearch }) => {
  const [filters, setFilters] = React.useState<SearchFilters>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  const handlePriceRangeChange = (values: [number, number]) => {
    setFilters({ ...filters, priceFrom: values[0], priceTo: values[1] });
  };

  const handleMileageRangeChange = (values: [number, number]) => {
    setFilters({ ...filters, mileageFrom: values[0], mileageTo: values[1] });
  };

  const handleSearch = () => {
    onSearch(filters);
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Brand</Form.Label>
        <Form.Control type="text" name="brand" onChange={handleInputChange} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Model</Form.Label>
        <Form.Control type="text" name="model" onChange={handleInputChange} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Year of Manufacture</Form.Label>
        <Form.Row>
          <Form.Control type="number" name="productionYearFrom" onChange={handleInputChange} placeholder="From" />
          <Form.Control type="number" name="productionYearTo" onChange={handleInputChange} placeholder="To" />
        </Form.Row>
      </Form.Group>
      <Form.Group>
        <Form.Label>Body Type</Form.Label>
        <Form.Control type="text" name="bodyType" onChange={handleInputChange} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Mileage</Form.Label>
        <Form.Row>
          <Form.Control type="number" name="mileageFrom" onChange={handleInputChange} placeholder="From" />
          <Form.Control type="number" name="mileageTo" onChange={handleInputChange} placeholder="To" />
        </Form.Row>
      </Form.Group>
      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Row>
          <Form.Control type="number" name="priceFrom" onChange={handleInputChange} placeholder="From" />
          <Form.Control type="number" name="priceTo" onChange={handleInputChange} placeholder="To" />
        </Form.Row>
      </Form.Group>
      <Button variant="primary" onClick={handleSearch}>
        Search
      </Button>
    </Form>
  );
};

export default SearchFilter;