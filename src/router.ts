import { renderAbout } from "./pages/about.js"
import { renderHome } from "./pages/home.js"
import { renderStore } from "./pages/store.js"
import * as cartStore from "./store/cartStore.js"

export function renderRoute(outlet: HTMLElement): void {
  const route = window.location.hash.slice(1) || "/store"
  outlet.replaceChildren(route === "/store" ? renderStore() : route === "/about" ? renderAbout() : renderHome())
}

export function startRouter(outlet: HTMLElement): void {
  window.addEventListener("hashchange", () => renderRoute(outlet))
  cartStore.subscribe(() => renderRoute(outlet))
  renderRoute(outlet)
}