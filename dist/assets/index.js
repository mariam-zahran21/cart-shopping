(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const v="shopping-cart-items";let a=S();const m=new Set;function S(){const e=localStorage.getItem(v);if(e==null)return[];try{const t=JSON.parse(e);return Array.isArray(t)?t.filter(C):[]}catch{return[]}}function C(e){if(typeof e!="object"||e===null)return!1;const t=e;return typeof t.id=="number"&&Number.isInteger(t.id)&&typeof t.quantity=="number"&&Number.isInteger(t.quantity)&&t.quantity>0}function b(){localStorage.setItem(v,JSON.stringify(a)),m.forEach(e=>e())}function w(){return a.map(e=>({...e}))}function f(){return a.reduce((e,t)=>e+t.quantity,0)}function k(e){const t=a.find(n=>n.id===e);t==null?a=[...a,{id:e,quantity:1}]:t.quantity+=1,b()}function L(e){a=a.filter(t=>t.id!==e),b()}function y(e,t){if(t<=0){L(e);return}const n=a.find(s=>s.id===e);n!=null&&(n.quantity=Math.floor(t),b())}function N(e){return m.add(e),()=>m.delete(e)}function I(){const e=document.createElement("nav");return e.className="border-b border-stone-200 bg-white",e.innerHTML=`
    <div class="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 text-xs text-stone-500">
      <a href="#/" aria-label="DIOR home" class="font-serif text-2xl font-black tracking-[0.18em] text-black">DIOR</a>
      <div class="flex items-center gap-5">
        <a href="#/" class="hover:text-stone-900">Home</a>
        <a href="#/store" class="hover:text-stone-900">Shop</a>
        <a href="#/about" class="hover:text-stone-900">About</a>
        <a href="#/store" class="font-medium text-stone-900">
          Cart <span data-cart-count>(${f()})</span>
        </a>
      </div>
    </div>
  `,N(()=>{const t=e.querySelector("[data-cart-count]");t!=null&&(t.textContent=String(f()))}),e}function O(){const e=document.createElement("section");return e.className="py-8",e.innerHTML=`
    <h1 class="text-3xl font-bold">About</h1>
    <p class="mt-4 max-w-2xl text-gray-600">DIOR is a luxury shopping experience built with TypeScript, browser APIs, and a lightweight pub/sub cart store.</p>
  `,e}function j(){const e=document.createElement("section");return e.className="py-16 text-center",e.innerHTML=`
    <h1 class="text-4xl font-bold text-black">Welcome to DIOR</h1>
    <p class="mx-auto mt-4 max-w-xl text-gray-600">Find useful everyday products at simple prices.</p>
    <a href="#/store" class="mt-6 inline-block rounded bg-blue-600 px-5 py-3 text-white hover:bg-blue-700">Shop now</a>
  `,e}const x=[{id:1,name:"Lady Dior Medium",price:5600,imgUrl:"images/dior1.jpg"},{id:2,name:"Lady Dior Small",price:5200,imgUrl:"images/dior2.jpg"},{id:3,name:"Lady Dior Black",price:6100,imgUrl:"images/dior3.jpg"},{id:4,name:"Lady Dior Navy",price:5900,imgUrl:"images/dior4.jpg"}],$=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});function c(e){return $.format(e)}function M(e){const t=document.createElement("article");return t.className="group rounded border border-stone-200 bg-[#faf9f6] p-2",t.innerHTML=`
    <div class="relative mb-2 flex h-32 items-center justify-center overflow-hidden bg-[#f0eee9]">
      <img src="${e.imgUrl}" alt="${e.name}" class="h-full w-full object-cover" onerror="this.style.display='none'" />
      <span class="absolute text-[10px] uppercase tracking-widest text-stone-400">Image</span>
    </div>
    <div class="px-1">
      <div class="flex items-center justify-between gap-2">
        <h2 class="text-xs font-medium text-stone-800">${e.name}</h2>
        <span class="text-xs text-stone-500">${c(e.price)}</span>
      </div>
      <button data-action="add" class="mt-2 w-full border border-stone-300 px-2 py-1 text-[10px] uppercase tracking-wider text-stone-600 transition hover:bg-stone-800 hover:text-white">
        Add
      </button>
    </div>
  `,t.querySelector('[data-action="add"]')?.addEventListener("click",()=>{k(e.id)}),t}function D(e){const t=document.createElement("div"),n=x.find(s=>s.id===e.id);return n==null||(t.className="grid grid-cols-[52px_1fr_auto] items-center gap-3 border-b border-stone-200 py-3 last:border-0",t.innerHTML=`
    <div class="relative flex h-12 w-12 items-center justify-center overflow-hidden bg-[#f0eee9]">
      <img src="${n.imgUrl}" alt="${n.name}" class="h-full w-full object-cover" onerror="this.style.display='none'" />
      <span class="absolute text-[8px] uppercase text-stone-400">Image</span>
    </div>
    <div>
      <div class="text-xs text-stone-800">${n.name}</div>
      <div class="mt-1 text-[.65rem] text-stone-400">${c(n.price)}</div>
      <div class="mt-2 inline-flex items-center border border-stone-300">
        <button data-action="decrease" aria-label="Decrease ${n.name} quantity" class="h-5 w-5 text-stone-500 hover:bg-stone-200">-</button>
        <span class="min-w-6 text-center text-[.65rem] text-stone-700">${e.quantity}</span>
        <button data-action="increase" aria-label="Increase ${n.name} quantity" class="h-5 w-5 text-stone-500 hover:bg-stone-200">+</button>
      </div>
    </div>
    <div class="text-right text-xs text-stone-700">${c(n.price*e.quantity)}
    <button
      data-action="remove"
      class="ml-2 text-stone-400 hover:text-stone-900"
    >&times;</button></div>
  `,t.querySelector('[data-action="remove"]')?.addEventListener("click",()=>L(n.id)),t.querySelector('[data-action="decrease"]')?.addEventListener("click",()=>y(n.id,e.quantity-1)),t.querySelector('[data-action="increase"]')?.addEventListener("click",()=>y(n.id,e.quantity+1))),t}function T(){const e=document.createElement("aside");e.className="border border-stone-200 bg-[#faf9f6] p-4";const t=w();if(e.innerHTML='<h2 class="mb-2 text-2xl font-semibold tracking-tight text-stone-800">Shopping Cart</h2>',t.length===0)return e.insertAdjacentHTML("beforeend",'<p class="py-5 text-xs text-stone-500">Your cart is empty.</p>'),e;const n=document.createElement("div");return n.className="space-y-3",t.forEach(s=>n.appendChild(D(s))),e.appendChild(n),e}function A(){const e=document.createElement("div"),t=document.createElement("h1");t.className="mb-4 text-[10px] uppercase tracking-[0.25em] text-stone-400",t.textContent="DIOR / CART",e.appendChild(t);const n=document.createElement("div");n.className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_240px]",n.appendChild(T());const s=document.createElement("aside"),r=w().reduce((u,h)=>{const E=x.find(q=>q.id===h.id);return u+(E?.price??0)*h.quantity},0);s.className="border border-stone-200 bg-[#faf9f6] p-4",s.innerHTML=`<h2 class="mb-4 text-xs font-semibold uppercase tracking-wider text-stone-800">Order summary</h2><div class="space-y-2 text-xs text-stone-500"><div class="flex justify-between"><span>Items</span><span>${f()}</span></div><div class="flex justify-between"><span>Shipping</span><span>Free</span></div><div class="mt-3 flex justify-between border-t border-stone-200 pt-3 font-semibold text-stone-800"><span>Total</span><span>${c(r)}</span></div></div><button class="mt-5 w-full bg-stone-800 px-3 py-2 text-[10px] uppercase tracking-widest text-white hover:bg-stone-700">Checkout</button>`,n.appendChild(s),e.appendChild(n);const o=document.createElement("h2");o.className="mt-7 mb-3 text-xs font-semibold uppercase tracking-widest text-stone-800",o.textContent="You may also like",e.appendChild(o);const i=document.createElement("div");i.className="grid grid-cols-2 gap-3 sm:grid-cols-4",x.slice(0,4).forEach(u=>i.appendChild(M(u))),e.appendChild(i);const d=document.createElement("section");return d.className="mt-8 border border-stone-200 bg-[#faf9f6] p-5",d.innerHTML='<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><h2 class="text-2xl font-semibold text-stone-800">Subscribe</h2><p class="mt-1 text-xs text-stone-500">Get updates on new arrivals and offers.</p></div><form class="flex"><input type="email" required placeholder="Your email address" class="w-full border border-stone-300 bg-transparent px-3 py-2 text-xs outline-none sm:w-56" /><button class="bg-stone-800 px-4 py-2 text-[10px] uppercase tracking-widest text-white">Join</button></form></div><div class="mt-6 border-t border-stone-200 pt-4 text-[10px] font-bold uppercase tracking-widest text-black">DIOR</div>',e.appendChild(d),e}function p(e){const t=window.location.hash.slice(1)||"/store";e.replaceChildren(t==="/store"?A():t==="/about"?O():j())}function H(e){window.addEventListener("hashchange",()=>p(e)),N(()=>p(e)),p(e)}const l=document.querySelector("#app");if(l==null)throw new Error("Application root was not found.");l.className="min-h-screen bg-[#e9e8e6] text-gray-900";l.appendChild(I());const g=document.createElement("main");g.className="mx-auto max-w-5xl px-4 py-4";l.appendChild(g);H(g);
