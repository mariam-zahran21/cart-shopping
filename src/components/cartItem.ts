import type { CartItemData } from "../types.js"
import { storeItems } from "../data.js"
import { formatCurrency } from "../utils/formatCurrency.js"
import * as cartStore from "../store/cartStore.js"

export function renderCartItem(cartItem: CartItemData): HTMLElement {
  const wrapper = document.createElement("div")
  const item = storeItems.find((i) => i.id === cartItem.id)
  if (item == null) return wrapper

  wrapper.className = "grid grid-cols-[52px_1fr_auto] items-center gap-3 border-b border-stone-200 py-3 last:border-0"
  wrapper.innerHTML = `
    <div class="relative flex h-12 w-12 items-center justify-center overflow-hidden bg-[#f0eee9]">
      <img src="${item.imgUrl}" alt="${item.name}" class="h-full w-full object-cover" onerror="this.style.display='none'" />
      <span class="absolute text-[8px] uppercase text-stone-400">Image</span>
    </div>
    <div>
      <div class="text-xs text-stone-800">${item.name}</div>
      <div class="mt-1 text-[.65rem] text-stone-400">${formatCurrency(item.price)}</div>
      <div class="mt-2 inline-flex items-center border border-stone-300">
        <button data-action="decrease" aria-label="Decrease ${item.name} quantity" class="h-5 w-5 text-stone-500 hover:bg-stone-200">-</button>
        <span class="min-w-6 text-center text-[.65rem] text-stone-700">${cartItem.quantity}</span>
        <button data-action="increase" aria-label="Increase ${item.name} quantity" class="h-5 w-5 text-stone-500 hover:bg-stone-200">+</button>
      </div>
    </div>
    <div class="text-right text-xs text-stone-700">${formatCurrency(item.price * cartItem.quantity)}
    <button
      data-action="remove"
      class="ml-2 text-stone-400 hover:text-stone-900"
    >&times;</button></div>
  `

  wrapper
    .querySelector('[data-action="remove"]')
    ?.addEventListener("click", () => cartStore.removeFromCart(item.id))
  wrapper
    .querySelector('[data-action="decrease"]')
    ?.addEventListener("click", () => cartStore.updateQuantity(item.id, cartItem.quantity - 1))
  wrapper
    .querySelector('[data-action="increase"]')
    ?.addEventListener("click", () => cartStore.updateQuantity(item.id, cartItem.quantity + 1))

  return wrapper
}
