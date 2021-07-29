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
  selectedStyle: [],
  setSelectedStyle: () => {},
  addOutfit:() => {},
  removeOutfit:() => {}



})

export default MainContext;