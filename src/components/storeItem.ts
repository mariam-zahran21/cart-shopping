import type { StoreItem } from "../types.js"
import { formatCurrency } from "../utils/formatCurrency.js"
import * as cartStore from "../store/cartStore.js"

export function renderStoreItem(item: StoreItem): HTMLElement {
  const card = document.createElement("article")
  card.className = "group rounded border border-stone-200 bg-[#faf9f6] p-2"
  card.innerHTML = `
    <div class="relative mb-2 flex h-32 items-center justify-center overflow-hidden bg-[#f0eee9]">
      <img src="${item.imgUrl}" alt="${item.name}" class="h-full w-full object-cover" onerror="this.style.display='none'" />
      <span class="absolute text-[10px] uppercase tracking-widest text-stone-400">Image</span>
    </div>
    <div class="px-1">
      <div class="flex items-center justify-between gap-2">
        <h2 class="text-xs font-medium text-stone-800">${item.name}</h2>
        <span class="text-xs text-stone-500">${formatCurrency(item.price)}</span>
      </div>
      <button data-action="add" class="mt-2 w-full border border-stone-300 px-2 py-1 text-[10px] uppercase tracking-wider text-stone-600 transition hover:bg-stone-800 hover:text-white">
        Add
      </button>
    </div>
  `
  card.querySelector('[data-action="add"]')?.addEventListener("click", () => {
    cartStore.addToCart(item.id)
  })
  return card
}