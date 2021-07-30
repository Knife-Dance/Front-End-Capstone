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
  allReviews: [],
  metaReviews: {},
  setAllReviews: () => {},
  setProductFeature: () => {},
  outfits: [],
  selectedStyle: [],
  setSelectedStyle: () => {},
  addOutfit:() => {},
  removeOutfit:() => {}



})

export default MainContext;