if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,d)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let f={};const n=e=>r(e,a),c={module:{uri:a},exports:f,require:n};i[a]=Promise.all(s.map((e=>c[e]||n(e)))).then((e=>(d(...e),f)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/09/23/博客的建立/index.html",revision:"4b3c92fe10b56e4cc1baf69f2174b920"},{url:"about/index.html",revision:"0897b1140ad0ae19c205535d76fedf36"},{url:"archives/2022/09/index.html",revision:"bba7fbad716558b9afdc67fa2d769539"},{url:"archives/2022/index.html",revision:"365e49c9bc731869a69f578568d1434f"},{url:"archives/index.html",revision:"4f13edc33af55e158e1043ffd39205ae"},{url:"categories/code/index.html",revision:"f9835ee42d960a07b6abd19221059ad1"},{url:"categories/index.html",revision:"fb2605a4ab9fb780584e1350c9b6c225"},{url:"css/index.css",revision:"87d8789fb38e7349d924ae428a211b12"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/2.png",revision:"cfdd2ded53986c0cdc898913b3595303"},{url:"img/4.jpg",revision:"4d4f503e10eb5276801aa9f04a672aad"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.png",revision:"6bd5a67c43cb5415686c989e7781200f"},{url:"img/favicon.png",revision:"f4f54b7e363ba3c21221c608dfe33db9"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"474f201aaa5d2ad3975c48198f70310b"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"26aa5b29728a1a803286f6c23b5108a9"},{url:"tags/index.html",revision:"e9efb3074b462fc771c0314935f6436f"},{url:"tags/博客/index.html",revision:"e6d370a8aa35e44660aee8907371943d"}],{})}));
//# sourceMappingURL=service-worker.js.map
