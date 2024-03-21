
interface Product {
    id: number;
    images: string[];
    name: string;
    description: string;
    price: number;
    contacts: string;
    technicalCharacteristics?: TechnicalCharacteristics;
    options: Option[];
  }
  
  interface TechnicalCharacteristics {
    carId: number;
    brand: string;
    model: string;
    productionYear: number;
    body: string;
    mileage: number;
  }
  
  interface Option {
    optionName: string;
  }

  export default Product;