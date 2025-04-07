import{S as m,i as u}from"./assets/vendor-CmNzSyLB.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const d={key:"49668141-9e36e21ab64203f58b46c2204",image_type:"photo",orientation:"horizontal",safesearch:!0};function p(a){const s=new URLSearchParams(d);s.append("q",a);const e=`https://pixabay.com/api/?${s}`;return console.log("Request url is",e),fetch(e).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()}).then(i=>i.hits)}function f(a){const s=document.querySelector(".gallery");s.innerHTML="",a.forEach(e=>{const i=document.createElement("li");i.classList.add("gallery-item"),i.innerHTML=`
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
    `,s.appendChild(i)})}const g=document.querySelector("#search-form"),h=document.querySelector("#search-input"),c=document.querySelector(".gallery"),l=document.querySelector(".js-loader"),y=new m(".gallery a");g.addEventListener("submit",async a=>{a.preventDefault();const s=h.value.trim();if(s){l.classList.remove("hidden");try{const e=await p(s);if(c.innerHTML="",e.length===0){n("Sorry, there are no images matching your search query. Please try again!");return}f(e),y.refresh()}catch(e){c.innerHTML="",n("Oops! Something went wrong."),console.error(e)}finally{l.classList.add("hidden")}}});function n(a){u.show({message:a,messageColor:"white",position:"topRight",backgroundColor:"#ef4040"})}
//# sourceMappingURL=index.js.map
