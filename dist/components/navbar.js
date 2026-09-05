import * as cartStore from "../store/cartStore.js";
export function renderNavbar() {
    const nav = document.createElement("nav");
    nav.className = "border-b border-stone-200 bg-white";
    nav.innerHTML = `
    <div class="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 text-xs text-stone-500">
      <a href="#/" aria-label="DIOR home" class="font-serif text-2xl font-black tracking-[0.18em] text-black">DIOR</a>
      <div class="flex items-center gap-5">
        <a href="#/" class="hover:text-stone-900">Home</a>
        <a href="#/store" class="hover:text-stone-900">Shop</a>
        <a href="#/about" class="hover:text-stone-900">About</a>
        <a href="#/store" class="font-medium text-stone-900">
          Cart <span data-cart-count>(${cartStore.getCartQuantity()})</span>
        </a>
      </div>
    </div>
  `;
    cartStore.subscribe(() => {
        const count = nav.querySelector("[data-cart-count]");
        if (count != null)
            count.textContent = String(cartStore.getCartQuantity());
    });
    return nav;
}
//# sourceMappingURL=navbar.js.map