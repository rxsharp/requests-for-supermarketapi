const Store = {
  parent: "ArrayOfStore",
  child: "Store"
}

const Product = {
  parent: "ArrayOfProduct",
  child: "Product"
}

const StringOfItems = {
  parent: "ArrayOfString",
  child: "string"
}

const StoreState = {
  parent: "ArrayOfStoreState",
  child: "StoreState"
}

const StoreCity = {
  parent: "ArrayOfStoreCity",
  child: "StoreCity"
}

// Commercial
const ProductCommercial = {
  parent: "ArrayOfProduct_Commercial",
  child: "Product_Commercial"
}


module.exports = {
  CitiesByState: StoreCity,
  AllUSStates: StoreState,
  GetGroceries: StringOfItems,
  ReturnStoresByName: Store,
  StoresByCityState: Store,
  StoresByZip: Store,
  SearchByProductName: Product,
  SearchByItemID: Product,
  SearchForItem: Product,
  COMMERCIAL_SearchByProductName: ProductCommercial,
  COMMERCIAL_SearchByItemID: ProductCommercial,
  COMMERCIAL_SearchForItem: ProductCommercial,
  COMMERCIAL_GetGroceries: StringOfItems
}
