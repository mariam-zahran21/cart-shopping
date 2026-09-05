import * as cartStore from "../store/cartStore.js";
import { renderCartItem } from "./cartItem.js";
export function renderShoppingCart() {
    const panel = document.createElement("aside");
    panel.className = "border border-stone-200 bg-[#faf9f6] p-4";
    const items = cartStore.getCartItems();
    panel.innerHTML = `<h2 class="mb-2 text-2xl font-semibold tracking-tight text-stone-800">Shopping Cart</h2>`;
    if (items.length === 0) {
        panel.insertAdjacentHTML("beforeend", '<p class="py-5 text-xs text-stone-500">Your cart is empty.</p>');
        return panel;
    }
    const list = document.createElement("div");
    list.className = "space-y-3";
    items.forEach((item) => list.appendChild(renderCartItem(item)));
    panel.appendChild(list);
    return panel;
}
//# sourceMappingURL=shoppingCart.js.map