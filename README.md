# Requests for Supermarket API
Get requests for [supermarketapi](http://www.supermarketapi.com/).
The requests return an array of JSON.

## Installation
```
npm install requests-for-supermarketapi

```

## Example Get Request
```
Supermarket = require('requests-for-supermarketapi');
supermarket = new Supermarket('ENTER_YOUR_API_CODE');

supermarket.getRequest({
  apiMethod: 'SearchByProductName',
  query: {
    ItemName: 'skittles'
  }
}
)
  .then((response)=>{
    console.log(response);
  })
  .catch((err)=>{
    console.log(err, "error");
  });

```

## List of suported methods
### Standard (non-paid)
 - SearchByProductName
 - SearchByItemID
 - GetGroceries
 - ReturnStoresByName
 - SearchForItem
 - StoresByCityState
 - StoresByZip
### Commercial
 - COMMERCIAL_SearchByProductName
 - COMMERCIAL_SearchByItemID
 - COMMERCIAL_SearchForItem
 - COMMERCIAL_GetGroceries
### ** Geographic (non-paid)
 - \*\* AllUSStates
 - \*\* CitiesByState

#### \*\* Geographic subclass example
```
var Geographic = require('requests-for-supermarketapi').geographic;
var geographic = new Geographic('ENTER_YOUR_API_CODE');

geographic.CitiesByState(
  {
    apiMethod: 'CitiesByState',
    query: {
      SelectedState: 'CA'
    }
  }
  )
  .then(function(response){
    console.log(response);
  })
  .catch((err)=>{
    console.log(err, "error");
  });

Geographic.AllUSStates().then((response)=>{
  console.log(response);
});
```
## Get full response example
Instead of the standard response in JSON format, the originalResponse property (set to ```true```) can be added to the request object and the promise will return the original response.
```
supermarket.getRequest({
  apiMethod: 'SearchByProductName',
  query: {
    ItemName: 'skittles'
  },
  originalResponse: true
}
)
```

## Request object examples
### Regular (non-paid)
```
{
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
```

### Commercial
```
{
  COMMERCIAL_SearchByProductName:
  {
      apiMethod: 'COMMERCIAL_SearchByProductName',
      query: {
        ItemName: 'skittles'
      }
  },
  COMMERCIAL_SearchByItemID:
  {
      apiMethod: 'COMMERCIAL_SearchByItemID',
      query: {
        ItemId: 32709
      }
  },
  COMMERCIAL_SearchForItem:
  {
      apiMethod: 'COMMERCIAL_SearchForItem',
      query: {
        StoreId: 'deeb43505a',
        ItemName: 'Apple'
      }
  },
  COMMERCIAL_GetGroceries:
  {
      apiMethod: 'COMMERCIAL_GetGroceries',
      query: {
        SearchText: 'Apple'
      }
  }
}
```



# Package Contribution
## Installation
 - Install node and npm
 - npm install

## Testing
 - Full test: ```npm test```
 - Standard(non-paid): ```npm run standard```
 - Geographic: ```npm run geographic```
 - Commercial: ```npm run commercial```
 - Original Response ```originalResponse```
