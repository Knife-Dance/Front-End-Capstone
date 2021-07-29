import {createContext} from 'react';

const MainContext = createContext({
  products: [],
  handleGetStyleById: () => {},
  selectedProduct: {},
  setSelectedProduct: () => {},
  styles: {},
  related: [],
  productFeature: [],
  handleGetStyleById: () => {},
  handleGetProductById: () => {},
  handleGetRateById: () => {},



})

export default MainContext;