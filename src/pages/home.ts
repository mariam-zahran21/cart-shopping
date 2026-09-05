export function renderHome(): HTMLElement {
  const wrapper = document.createElement("section")
  wrapper.className = "py-16 text-center"
  wrapper.innerHTML = `
    <h1 class="text-4xl font-bold text-black">Welcome to DIOR</h1>
    <p class="mx-auto mt-4 max-w-xl text-gray-600">Find useful everyday products at simple prices.</p>
    <a href="#/store" class="mt-6 inline-block rounded bg-blue-600 px-5 py-3 text-white hover:bg-blue-700">Shop now</a>
  `
  return wrapper
}
