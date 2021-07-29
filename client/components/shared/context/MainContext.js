import {createContext} from 'react';

const MainContext = createContext({
  products: [],
  handleGetStyleById: () => {},
  selectedProduct: {},
  setSelectedProduct: () => {},
  styles: {},
  related: [],
  productFeature: [],

  handleGetProductById: () => {},
  handleGetRateById: () => {},
  setProductFeature: () => {}



})

export default MainContext;