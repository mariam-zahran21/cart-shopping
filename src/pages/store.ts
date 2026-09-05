import { storeItems } from "../data.js"
import { renderStoreItem } from "../components/storeItem.js"
import { renderShoppingCart } from "../components/shoppingCart.js"
import { formatCurrency } from "../utils/formatCurrency.js"
import * as cartStore from "../store/cartStore.js"

export function renderStore(): HTMLElement {
  const wrapper = document.createElement("div")

  const heading = document.createElement("h1")
  heading.className = "mb-4 text-[10px] uppercase tracking-[0.25em] text-stone-400"
  heading.textContent = "DIOR / CART"
  wrapper.appendChild(heading)

  const layout = document.createElement("div")
  layout.className = "grid grid-cols-1 gap-4 lg:grid-cols-[1fr_240px]"
  layout.appendChild(renderShoppingCart())
  const summary = document.createElement("aside")
  const total = cartStore.getCartItems().reduce((sum, cartItem) => {
    const item = storeItems.find((storeItem) => storeItem.id === cartItem.id)
    return sum + (item?.price ?? 0) * cartItem.quantity
  }, 0)
  summary.className = "border border-stone-200 bg-[#faf9f6] p-4"
  summary.innerHTML = `<h2 class="mb-4 text-xs font-semibold uppercase tracking-wider text-stone-800">Order summary</h2><div class="space-y-2 text-xs text-stone-500"><div class="flex justify-between"><span>Items</span><span>${cartStore.getCartQuantity()}</span></div><div class="flex justify-between"><span>Shipping</span><span>Free</span></div><div class="mt-3 flex justify-between border-t border-stone-200 pt-3 font-semibold text-stone-800"><span>Total</span><span>${formatCurrency(total)}</span></div></div><button class="mt-5 w-full bg-stone-800 px-3 py-2 text-[10px] uppercase tracking-widest text-white hover:bg-stone-700">Checkout</button>`
  layout.appendChild(summary)
  wrapper.appendChild(layout)

  const recommendationTitle = document.createElement("h2")
  recommendationTitle.className = "mt-7 mb-3 text-xs font-semibold uppercase tracking-widest text-stone-800"
  recommendationTitle.textContent = "You may also like"
  wrapper.appendChild(recommendationTitle)
  const grid = document.createElement("div")
  grid.className = "grid grid-cols-2 gap-3 sm:grid-cols-4"
  storeItems.slice(0, 4).forEach((item) => grid.appendChild(renderStoreItem(item)))
  wrapper.appendChild(grid)

  const subscribe = document.createElement("section")
  subscribe.className = "mt-8 border border-stone-200 bg-[#faf9f6] p-5"
  subscribe.innerHTML = `<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><h2 class="text-2xl font-semibold text-stone-800">Subscribe</h2><p class="mt-1 text-xs text-stone-500">Get updates on new arrivals and offers.</p></div><form class="flex"><input type="email" required placeholder="Your email address" class="w-full border border-stone-300 bg-transparent px-3 py-2 text-xs outline-none sm:w-56" /><button class="bg-stone-800 px-4 py-2 text-[10px] uppercase tracking-widest text-white">Join</button></form></div><div class="mt-6 border-t border-stone-200 pt-4 text-[10px] font-bold uppercase tracking-widest text-black">DIOR</div>`
  wrapper.appendChild(subscribe)

  return wrapper
}
