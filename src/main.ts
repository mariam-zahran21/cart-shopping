import { renderNavbar } from "./components/navbar.js"
import { startRouter } from "./router.js"

const app = document.querySelector<HTMLDivElement>("#app")
if (app == null) throw new Error("Application root was not found.")

app.className = "min-h-screen bg-[#e9e8e6] text-gray-900"
app.appendChild(renderNavbar())
const main = document.createElement("main")
main.className = "mx-auto max-w-5xl px-4 py-4"
app.appendChild(main)
startRouter(main)