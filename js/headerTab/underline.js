!function(){var e=document.getElementById("topTabWhee"),t=document.querySelector(".header-nav .ul>div"),o=document.querySelector(".header-nav .ul>div>span"),l=document.querySelectorAll(".nav-show-box>.box-2>.flex-2>ul>li"),n=document.querySelector("#topTabWhee>.header-nav-current"),r=document.querySelector(".index-header"),c=document.querySelectorAll(".header-nav .ul>div>a"),i=document.querySelector(".nav-show-box"),s=document.currentScript.getAttribute("data-param"),a={homePage:!0},u=0;e.addEventListener("wheel",(function(t){t.preventDefault(),t.deltaY>0&&!(e.scrollLeft+e.clientWidth>=e.scrollWidth)&&(u+=50),t.deltaY<0&&u>0&&(u-=50),e.scrollTo({top:0,left:u,behavior:"smooth"})}));let d=null;function m(){t.scrollWidth>t.clientWidth&&(t.title="左右滑动：shift+鼠标滚动")}window.onresize=function(e){clearTimeout(d),d=setTimeout((()=>{m.call(this)}),800)},m();let f=null;function h(){document.querySelectorAll(".lazy-bg").forEach((function(e){if(function(e){let t=e.getBoundingClientRect();return t.top<=window.innerHeight&&t.bottom>=0&&"none"!==getComputedStyle(e).display}(e)){let t=e.getAttribute("data-src");e.style.backgroundImage="url("+t+")",e.classList.remove("lazy-bg"),e.removeAttribute("data-src")}}))}function y(){document.querySelectorAll(".lazy-load").forEach(((e,t)=>{let o=e.getBoundingClientRect();o.top<=window.innerHeight&&o.bottom>0&&"none"!==getComputedStyle(e).display&&(e.src=e.dataset.src,e.classList.remove("lazy-load"),e.removeAttribute("data-src"))}))}function p(l,n){l.stopImmediatePropagation(),c.forEach(((e,t)=>{e.classList.remove("header-nav-current");let o=document.querySelector(".box-"+t);o&&o.classList.remove("flex")})),this.classList.add("header-nav-current");let d=document.querySelector(".box-"+n);d?(i.style.display="flex",r.classList.add("topsCurrent"),d.classList.add("flex")):(i.style.display="none",i.style.padding="",a[s]&&r.classList.remove("topsCurrent"),function(e){let t=document.querySelector(".index-content .index_huasaiyun"),o=document.querySelector(".return-to-top");t.getBoundingClientRect().bottom<=150&&"none"!==getComputedStyle(t).display&&(r.classList.add("topsCurrent"),o.classList.remove("fadeOutUp"),o.classList.add("opacityToBottom"));if(t.getBoundingClientRect().bottom>=151&&"none"!==getComputedStyle(t).display&&"none"===getComputedStyle(i).display){Array.from(o.classList).indexOf("opacityToBottom")>-1&&(o.classList.remove("opacityToBottom"),o.classList.add("fadeOutUp"))}}());let m=l.target.offsetLeft;if(t.style.setProperty("--w",this.innerText.length+"em"),o.style.left=m+"px",5===n){v(document.querySelector(".nav-show-box>.cooperate>.cooperateContent>.recommend-mask>ul"),document.querySelectorAll(".nav-show-box>.cooperate>.cooperateContent>.recommend-mask>ul>li"))}if(7===n){v(document.querySelector(".nav-show-box>.box-7>.cooperateContent>.recommend-mask>ul"),document.querySelectorAll(".nav-show-box>.box-7>.cooperateContent>.recommend-mask>ul>li"))}if(6===n){v(document.querySelector(".nav-show-box>.box-6>.cooperateContent>.recommend-mask>ul"),document.querySelectorAll(".nav-show-box>.box-6>.cooperateContent>.recommend-mask>ul>li"))}u=m;let f=l.target.offsetLeft-e.clientWidth/2+l.target.clientWidth/2;e.scrollTo({top:0,left:f,behavior:"smooth"})}function v(e,t){if(e&&t&&t.length<=3)return e.style.height="100%",void e.classList.remove("flex-y");if(e){let t=20,o=e.style.height;if(""!==o)try{o=o.slice(0,-1),o=Number(o),isNaN(o)||(t=o)}catch(e){console.log(e,"获取高度的值")}b(t,e)}}function b(e,t){(t.scrollWidth>t.offsetWidth||t.scrollHeight>t.clientHeight)&&function(e,t){e+=2,setTimeout((()=>{t.style.height=e+"%",b(e,t)}),0)}(e,t)}c.forEach(((e,t)=>{e.addEventListener("mouseover",(function(e){clearTimeout(f),f=setTimeout((()=>{p.call(this,e,t);for(let e=10;e>5;e--)setTimeout((()=>{y(),h()}),100*e)}),260)})),e.addEventListener("click",(function(e){p.call(this,e,t)}))})),e.addEventListener("mouseleave",(function(e){clearTimeout(f)})),r.addEventListener("mouseleave",(function(e){clearTimeout(f)})),i.addEventListener("click",(function(e){e.stopImmediatePropagation()})),l.forEach(((e,t)=>{e.addEventListener("click",(function(e){l.forEach(((e,t)=>{e.classList.remove("tab-li-target")})),document.querySelector(".nav-show-box>.box-2>.flex-2>ul>.tab-li-"+t).classList.add("tab-li-target"),document.querySelectorAll(".topsCurrent .nav-show-box>.box-2>.flex-7>.recommend-mask").forEach(((e,t)=>{e.classList.remove("flex")}));let o=document.querySelector(".topsCurrent .flex-7>.recommend-mask-"+t);o&&o.classList.add("flex"),v(document.querySelector(".topsCurrent .flex-7>.recommend-mask-"+t+">.tab-content"),document.querySelectorAll(".topsCurrent .flex-7>.recommend-mask-"+t+">.tab-content>li"))}))})),setTimeout((()=>{!function(){o.style.transition="none";let l=n.offsetLeft;setTimeout((()=>{t.style.setProperty("--w",n.innerText.length+"em"),o.style.left=l+"px"}),0),setTimeout((()=>{o.style.transition="all .8s cubic-bezier(0, 0, 0.24, 1.18)",o.style.opacity="1"}),200);let r=n.offsetLeft-e.clientWidth/2+n.clientWidth/2;e.scrollTo({top:0,left:r,behavior:"smooth"})}()}),0)}();