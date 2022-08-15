function ellipsis(string = '', maxLenght = 30) {
    if (string.length > maxLenght) {
      return string.substring(0, maxLenght) + '...'
    }
    return string
  }
  
  class HTMLService {
    paintProduct(product) {
      return `
        <li data-id="${product.id}">
          <img src="${product.image}" title="${product.title}" /> 
          <small>${ellipsis(product.title)}</small>
          <small><strong>$${product.price}</strong></small>
        </li>
      `
    }
  
    paintProducts(products = []) {
      return products.map(this.paintProduct).join('')
    }
  
    paintCartItem(item) {
      return `
        <li>
          <div>
           ${item.title}
            <strong>$${item.price}</strong>
          </div>
          <div class="mi">
            <button data-type="minimize" data-id="${item.id}" class="minus">-</button>
            <p class="amount">${item.amount}</p>
            <button data-type="increase" data-id="${item.id}" class="plus">+</button>
          </div>
        </li>
      `
    }
  
    paintCart({ items, totalPrice }) {
      if (items.length === 0) {
        return `<p>Cart is empty</p>`
      }
  
      return `
        <ul class="cart-list">
          ${items.map(this.paintCartItem).join('')}
        </ul>
        <hr />
        <p class="info">
          <span>Total price: <strong>$${totalPrice.toFixed(2)}</strong></span>
          <button class="clear" data-type="clear">Clear</button>
        </p>
      `
    }
  
  }