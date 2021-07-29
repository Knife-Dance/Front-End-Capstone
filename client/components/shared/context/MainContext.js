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
  setProductFeature: () => {},
  outfits: [],
  setSelectedStyle: () => {},
  addOutfit:() => {},
  removeOutfit:() => {}



})

export default MainContext;