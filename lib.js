'use strict'

const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

/**
 * Curried functions that match items to their prices and return their price
 */
const listedPrice =
  listing =>
    name => {
      let matchedItem = listing.find(currentObject => currentObject.name === name)

      if(matchedItem !== undefined) {
        return matchedItem.price
      } else {
        return 0
      }
    }

/**
 * Curried functions that process the carts using the listings
 * and returns an array of objects with customers and totals
 */
const calculateTotals =
  listings =>
    carts => 
      carts.map(
        cart => ({
          customer : cart.customer,
          total : cart.items.reduce(((cartTotal, item) => cartTotal += listedPrice(listings)(item)),0)
        })
      )
    

module.exports = {
  listing,
  cart,
  calculateTotals
}

// const calculateTotals =
// listings =>
//   carts => {
//     let resultArray = []

//     carts.forEach(cart => {
//       let cartTotal = 0

//       cart.items.forEach(item => {
//         cartTotal += listedPrice(listings)(item)
//       })
//       resultArray.push({
//         customer : cart.customer,
//         total : cartTotal
//       })
//     })

//     return resultArray
//   }

// module.exports = {
// listing,
// cart,
// calculateTotals
// }
