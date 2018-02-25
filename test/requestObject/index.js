module.exports = {
  SearchByProductName:
  {
      apiMethod: 'SearchByProductName',
      query: {
        ItemName: 'skittles'
      }
  },
  SearchByItemID:
  {
      apiMethod: 'SearchByItemID',
      query: {
        ItemId: 32709
      }
  },
  CitiesByState:
  {
      apiMethod: 'CitiesByState',
      query: {
        SelectedState: 'CA'
      }
  },
  GetGroceries:
  {
      apiMethod: 'GetGroceries',
      query: {
        SearchText: 'Apple'
      }
  },
  ReturnStoresByName:
  {
      apiMethod: 'ReturnStoresByName',
      query: {
        StoreName: 'Safeway'
      }
  },
  SearchForItem:
  {
      apiMethod: 'SearchForItem',
      query: {
        StoreId: 'deeb43505a',
        ItemName: 'Apple'
      }
  },
  StoresByCityState:
  {
      apiMethod: 'StoresByCityState',
      query: {
        SelectedCity: 'Fresno',
        SelectedState: 'CA'
      }
  },
  StoresByZip:
  {
      apiMethod: 'StoresByZip',
      query: {
        ZipCode: 95130
      }
  }
}
