!function(){let t=document.querySelector("body"),e=document.querySelectorAll(".tab-to"),o=document.querySelectorAll(".index-content .h-cloud-product>.product-box>.product-list>.product-content>.product-content-select>.select-box>.select");var n=document.querySelector(".index-header"),l=document.querySelectorAll(".header-nav .ul>div>a"),r=document.querySelector(".nav-show-box");let c=null,i=null,s=null;function a(){c&&(c.style.transform="rotate(0deg)",i.classList.add("fadeOutUpOption"),s.classList.add("fadeOutUpPointer"),i.classList.remove("fadeInDownOption"),s.classList.remove("fadeInDownPointer"))}o.forEach((t=>{t.addEventListener("click",(function(t){t.stopImmediatePropagation(),a(),c=this.children[1];let e=function(t){const e=Array.from(t.parentNode.children),o=e.filter((function(e){return e!==t}));return o}(this);i=e[0],s=e[1],i.classList.remove("fadeOutUpOption"),i.classList.add("fadeInDownOption"),s.classList.remove("fadeOutUpPointer"),s.classList.add("fadeInDownPointer"),c.style.transform="rotate(90deg)"}))})),document.querySelectorAll(".index-content .h-cloud-product>.product-box>.product-list>.product-content>.product-content-select>.select-box>.option-box>.option").forEach((t=>{t.addEventListener("click",(function(t){t.stopImmediatePropagation();let e=this.parentNode?.parentNode?.children[0]?.children[0];e.innerText=this.innerText,a()}))}));let d=document.querySelectorAll(".index-content .main-tab>.tab-span"),u=document.querySelector(".index-content .main-tab>.underline");function m(t){let o=document.querySelector(".index-content .index_huasaiyun"),l=document.querySelectorAll(".lazy-w"),c=[],i=[];if(e.forEach((function(t,e){let o=t.getBoundingClientRect();o.top<=window.innerHeight&&o.bottom-300>=0&&"none"!==getComputedStyle(t).display&&(c.push(e),i.push(t))})),c.length>0){let t=function(t){let e=0,o=t[0];for(let n=1;n<t.length;n++)t[n]<o&&(o=t[n],e=n);return e}(i.map((t=>t.offsetTop)));u.style.setProperty("--w",d[c[t]].innerText.length+"em"),u.style.left=d[c[t]].offsetLeft+"px",d.forEach((t=>{t.classList.remove("text")})),d[c[t]].classList.add("text")}let s=document.querySelector(".return-to-top");if(o.getBoundingClientRect().bottom<=150&&"none"!==getComputedStyle(o).display&&(n.classList.add("tops_current"),s.classList.remove("fadeOutUp"),s.classList.add("opacityToBottom")),o.getBoundingClientRect().bottom>=151&&"none"!==getComputedStyle(o).display&&"none"===getComputedStyle(r).display){Array.from(s.classList).indexOf("opacityToBottom")>-1&&(s.classList.remove("opacityToBottom"),s.classList.add("fadeOutUp"))}document.querySelectorAll(".lazy-dom").forEach((function(t){p(t)&&(t.classList.add("animationToRight"),t.classList.remove("lazy-dom"))})),l.forEach((function(t){p(t)&&t.classList.remove("lazy-w")})),document.querySelectorAll(".lazy-load").forEach(((t,e)=>{let o=t.getBoundingClientRect();o.top<=window.innerHeight&&o.bottom>0&&"none"!==getComputedStyle(t).display&&(t.src=t.dataset.src,t.classList.remove("lazy-load"),t.removeAttribute("data-src"))})),document.querySelectorAll(".lazy-bg").forEach((function(t){if(p(t)){let e=t.getAttribute("data-src");t.style.backgroundImage="url("+e+")",t.classList.remove("lazy-bg"),t.removeAttribute("data-src")}}))}function p(t){let e=t.getBoundingClientRect();return e.top<=window.innerHeight&&e.bottom>=0&&"none"!==getComputedStyle(t).display}d.forEach(((t,o)=>{t.addEventListener("click",(function(t){let n=t.target.offsetLeft;u.style.setProperty("--w",this.innerText.length+"em"),u.style.left=n+"px",d.forEach((t=>{t.classList.remove("text")})),this.classList.add("text"),window.scrollTo({top:e[o].offsetTop-100,left:0,behavior:"smooth"})}))})),t.addEventListener("click",(function(t){l.forEach(((t,e)=>{let o=document.querySelector(".box-"+e);o&&o.classList.remove("flex")})),r.style.display="none",m(),a()})),window.addEventListener("scroll",m),m()}();