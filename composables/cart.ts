import { Products, ProductCart } from '~/utils/types/Products'

export const getCart = () => {
  const cartJSON = localStorage.getItem('ClothingCart')
  if (!cartJSON) { return [] }
  const cart: Array<ProductCart> = JSON.parse(cartJSON)
  return cart
}

export const updateCartQty = (qty : number) => {
  const cartLengthSpan = document.querySelector('.header__nav-ul-cart-span')
  if (cartLengthSpan) {
    cartLengthSpan.textContent = qty.toString()
  }
}

export const setCart = (product : Products) => {
  let cartify = []
  cartify.push({
    data: product,
    quantity: 1
  })

  const localCart = getCart()
  if (localCart) {
    const updateQty = localCart.filter((item) => {
      return item.data.id === product.id
    })

    if (updateQty[0]) {
      cartify = []
      updateQty[0].quantity += 1
    }

    cartify = cartify.concat(localCart)
    updateCartQty(cartify.length)
  }

  localStorage.setItem('ClothingCart', JSON.stringify(cartify))
}
