const storageKey = "shopping-cart-items";
let cartItems = loadCart();
const subscribers = new Set();
function loadCart() {
    const saved = localStorage.getItem(storageKey);
    if (saved == null)
        return [];
    try {
        const parsed = JSON.parse(saved);
        if (!Array.isArray(parsed))
            return [];
        return parsed.filter(isCartItem);
    }
    catch {
        return [];
    }
}
function isCartItem(value) {
    if (typeof value !== "object" || value === null)
        return false;
    const item = value;
    return (typeof item.id === "number" &&
        Number.isInteger(item.id) &&
        typeof item.quantity === "number" &&
        Number.isInteger(item.quantity) &&
        item.quantity > 0);
}
function saveCart() {
    localStorage.setItem(storageKey, JSON.stringify(cartItems));
    subscribers.forEach((subscriber) => subscriber());
}
export function getCartItems() {
    return cartItems.map((item) => ({ ...item }));
}
export function getCartQuantity() {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
}
export function addToCart(id) {
    const existing = cartItems.find((item) => item.id === id);
    if (existing == null)
        cartItems = [...cartItems, { id, quantity: 1 }];
    else
        existing.quantity += 1;
    saveCart();
}
export function removeFromCart(id) {
    cartItems = cartItems.filter((item) => item.id !== id);
    saveCart();
}
export function updateQuantity(id, quantity) {
    if (quantity <= 0) {
        removeFromCart(id);
        return;
    }
    const item = cartItems.find((cartItem) => cartItem.id === id);
    if (item == null)
        return;
    item.quantity = Math.floor(quantity);
    saveCart();
}
export function subscribe(subscriber) {
    subscribers.add(subscriber);
    return () => subscribers.delete(subscriber);
}
//# sourceMappingURL=cartStore.js.map