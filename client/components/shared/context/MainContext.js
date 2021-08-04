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
  setMetaReviews: () => {},
  setProductFeature: () => {},
  outfits: [],
  selectedStyle: [],
  setSelectedStyle: () => {},
  addOutfit:() => {},
  removeOutfit:() => {},
  clickListener: () => {}


})

export default MainContext;