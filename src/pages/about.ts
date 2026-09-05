export function renderAbout(): HTMLElement {
  const wrapper = document.createElement("section")
  wrapper.className = "py-8"
  wrapper.innerHTML = `
    <h1 class="text-3xl font-bold">About</h1>
    <p class="mt-4 max-w-2xl text-gray-600">DIOR is a luxury shopping experience built with TypeScript, browser APIs, and a lightweight pub/sub cart store.</p>
  `
  return wrapper
}
