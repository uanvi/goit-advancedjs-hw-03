import{a as m,S as u,i as d}from"./assets/vendor-jqdos1hf.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function e(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=e(t);fetch(t.href,i)}})();const g="https://pixabay.com/api/",p="49668141-9e36e21ab64203f58b46c2204",f={key:p,image_type:"photo",orientation:"horizontal",safesearch:!0};async function h(r){try{const s={...f,q:r},e=await m.get(g,{params:s});return console.log("Request URL:",e.config.url),e.data.hits}catch(s){throw console.error("Error fetching images:",s),s}}function y(r){const s=document.querySelector(".gallery");s.innerHTML="",r.forEach(e=>{const a=document.createElement("li");a.classList.add("gallery-item"),a.innerHTML=`
      <a href="${e.largeImageURL}" >
        <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
        <ul class="image-statistic">
            <li class="image-statistic-item">
                <p class="image-statistic-item-title">Likes</p>
                <p class="image-statistic-item-value">${e.likes}</p>
            </li>
            <li class="image-statistic-item">
                <p class="image-statistic-item-title">Views</p>
                <p class="image-statistic-item-value">${e.views}</p>
            </li>
            <li class="image-statistic-item">
                <p class="image-statistic-item-title">Comments</p>
                <p class="image-statistic-item-value">${e.comments}</p>
            </li>
            <li class="image-statistic-item">
                <p class="image-statistic-item-title">Downloads</p>
                <p class="image-statistic-item-value">${e.downloads}</p>
            </li>

        </ul>
      </a>
    `,s.appendChild(a)})}const L=document.querySelector(".form"),w=document.querySelector("#search-input"),c=document.querySelector(".gallery"),l=document.querySelector(".js-loader"),b=new u(".gallery a");L.addEventListener("submit",async r=>{r.preventDefault();const s=w.value.trim();if(s){l.classList.remove("hidden");try{const e=await h(s);if(c.innerHTML="",e.length===0){n("Sorry, there are no images matching your search query. Please try again!");return}y(e),b.refresh()}catch(e){c.innerHTML="",n("Oops! Something went wrong."),console.error(e)}finally{l.classList.add("hidden")}}});function n(r){d.show({message:r,messageColor:"white",position:"topRight",backgroundColor:"#ef4040"})}
//# sourceMappingURL=index.js.map
