// ====================
/*
 * 1. Add Product
 * 2. Remove product
 * 3. Clear cart
 * 4. Get All Information
 */
/*
  {
    12: {
      title: 'Apple',
      price: 42,
      amount: 2
    },
    5: {
      title: 'Banana',
      price: 142,
      amount: 1
    },
  }
*/

class CartService {
  constructor() {
    this.cart = {}
  }

  add(product) {
    const key = product.id

    if (!this.cart[key]) {
      this.cart[key] = {
      title: product.title,
      price: product.price,
      amount: 1
    }
    }
  }
  increase(productId){
    this.cart[productId].amount++
  }
  remove(productId) {
    delete this.cart[productId]
  }
  minimize(productId){
    if(this.cart[productId].amount === 1){
      delete this.cart[productId]
      return
    }
    this.cart[productId].amount--
  }

  clear() {
    this.cart = {}
  }
  isProductExists(productId){
    this.cart[productId] ? true : false
  }
  getInfo() {
    const items = Object.keys(this.cart).map(id => {
      // return {
      //   id: id,
      //   title: this.cart[id].title,
      //   amount: this.cart[id].amount,
      //   price: this.cart[id].price
      // }
      return {
        id,
        ...this.cart[id]
      }
    })

    const totalPrice = items.reduce((sum, item) => {
      return sum += item.amount * item.price
    }, 0)

    return { items, totalPrice }
  }
}