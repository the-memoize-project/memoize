const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-sHk9Weim.js","assets/_commonjsHelpers-CyphlAKp.js","assets/app-DSg1mRnU.js","assets/willPaint-B74CwLKT.js","assets/app-Dld1f9Ik.js","assets/detail-D5hbE-Va.js","assets/app-CTN3_M3o.js","assets/app-Ch29VOXz.js","assets/hydrate-DEJGKsT8.js","assets/app-CR9hjj_I.js","assets/app-CBNQMjbv.js","assets/app-tlnKogLv.js","assets/oauth-Di6jSFgw.js","assets/user-BFRpVqjb.js","assets/style-BW8_7pMu.js","assets/goToDashboard-C8AM9ihF.js","assets/oauth-DyxxHEPl.js","assets/oauth-DpeVctl7.js","assets/oauth-Bv4yUxPM.js","assets/oauth-p5BjelZW.js","assets/oauth-DBCUK8i1.js","assets/oauth-HgYRd-dV.js","assets/site-D8bdLeqk.js"])))=>i.map(i=>d[i]);
var t,e=Object.defineProperty,__typeError=t=>{throw TypeError(t)},__publicField=(t,r,o)=>((t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o)(t,"symbol"!=typeof r?r+"":r,o),__accessCheck=(t,e,r)=>e.has(t)||__typeError("Cannot "+r),__privateGet=(t,e,r)=>(__accessCheck(t,e,"read from private field"),r?r.call(t):e.get(t)),__privateAdd=(t,e,r)=>e.has(t)?__typeError("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r);!function polyfill(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))processPreload(t);new MutationObserver((t=>{for(const e of t)if("childList"===e.type)for(const t of e.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&processPreload(t)})).observe(document,{childList:!0,subtree:!0})}function processPreload(t){if(t.ep)return;t.ep=!0;const e=function getFetchOpts(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),"use-credentials"===t.crossOrigin?e.credentials="include":"anonymous"===t.crossOrigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}(),Reflect.defineProperty(Array.prototype,"group",{value(t,e){return this.reduce(((r,o)=>{var a;return(r[a=t.call(e,o)]??(r[a]=[])).push(o),r}),{})}});const r=history.pushState;Reflect.defineProperty(history,"pushState",{value(t,e,o){const a=r.apply(this,arguments);return window.dispatchEvent(new CustomEvent("pushstate",{detail:{state:t,title:e,url:o}})),a}}),!("requestAnimationFrame"in window)&&Reflect.defineProperty(window,"requestAnimationFrame",{value(t){setTimeout(t,0)}}),Reflect.defineProperty(window,"setImmediate",{value:t=>setTimeout(t,0)});const o={};const a={};const i=[];function router(t,e){return i.push({path:t,page:e}),router}function urlFor(t,e){const{path:r}=i.find((({page:e})=>e.name===t))??{path:"#"};return location.origin+r.replace(/:(?<key>\w+)/g,((t,r)=>e[r]))}function goToSignIn(){history.pushState({},"",urlFor("signIn"))}Object.assign(router,{handle:function handle$1(){const{page:t,path:e}=function findMatchingRoute(){return i.find((({path:t})=>{const e=t.replace(/:\w+/g,"([a-z0-9-_]+)");return new RegExp(`^${e}$`,"i").test(location.pathname)}))}();!function extractArgs(){const t=new URLSearchParams(location.search);Array.from(t.entries()).forEach((([t,e])=>Reflect.set(o,t,e)))}(),function extractParams(t){const e=null==t?void 0:t.split("/"),r=location.pathname.split("/");Object.keys(a).forEach((t=>delete a[t])),null==e||e.forEach(((t,e)=>/^:/.test(t)&&Reflect.set(a,t.slice(1),r[e])))}(e),null==t||t()}});const n={get isPublic(){return!/^\/(app)\//.test(location.pathname)}},s={},l=function preload(t,e,r){let o=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const t=document.querySelector("meta[property=csp-nonce]"),r=(null==t?void 0:t.nonce)||(null==t?void 0:t.getAttribute("nonce"));o=Promise.allSettled(e.map((t=>{if((t=function(t){return"/"+t}(t))in s)return;s[t]=!0;const e=t.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${o}`))return;const a=document.createElement("link");return a.rel=e?"stylesheet":"modulepreload",e||(a.as="script"),a.crossOrigin="",a.href=t,r&&a.setAttribute("nonce",r),document.head.appendChild(a),e?new Promise(((e,r)=>{a.addEventListener("load",e),a.addEventListener("error",(()=>r(new Error(`Unable to preload CSS for ${t}`))))})):void 0})))}function handlePreloadError(t){const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=t,window.dispatchEvent(e),!e.defaultPrevented)throw t}return o.then((e=>{for(const t of e||[])"rejected"===t.status&&handlePreloadError(t.reason);return t().catch(handlePreloadError)}))},h={get expired(){return(async()=>{var t;const{getSession:e}=await l((async()=>{const{getSession:t}=await import("./index-sHk9Weim.js");return{getSession:t}}),__vite__mapDeps([0,1])),{data:r}=await e();return!(null==(t=null==r?void 0:r.session)?void 0:t.user)})()}};async function handle(){n.isPublic||await h.expired&&goToSignIn()}window.addEventListener("popstate",handle),window.addEventListener("pushstate",handle),handle();const c=new Proxy({},{get:(t,e)=>"production"===e});window.addEventListener("load",(()=>{c.production&&navigator.serviceWorker.register("/sw.js",{scope:"/"})}));const intercept=t=>({in:e=>({then:r=>{const o=e[t]??(()=>{});Reflect.defineProperty(e,t,{async value(...t){return await Reflect.apply(o,this,t),await Reflect.apply(r,this,t),this},writable:!0})}})}),exec=t=>async function(...e){await this[t](...e)},d="attributeChangedCallback",p="connectedCallback",u="disconnectedCallback",m="observedAttributes",attributeChanged=(t,...e)=>(r,o,a)=>{const i=r.constructor[m]??[];Object.assign(r.constructor,{[m]:[...i,t]}),intercept(d).in(r).then((function(r,i,n){if(r===t&&i!==n){const t=e.reduce(((t,e)=>e(t)),n);a.set&&(this[o]=t),a.value&&this[o](t,i)}}))},booleanAttribute=t=>"false"!==t&&("0"!==t&&null!==t),define=(t,e)=>r=>{customElements.get(t)??customElements.define(t,r,e)},disconnected=(t,e)=>intercept(u).in(t).then(exec(e)),formAssociated=(t,e)=>intercept("formAssociatedCallback").in(t).then(exec(e)),formReset=(t,e)=>intercept("formResetCallback").in(t).then(exec(e)),css=(t,...e)=>{const r=new CSSStyleSheet,o=String.raw({raw:t},...e);return r.replaceSync(o),r},g=Symbol("didPaintCallback"),f=Symbol("paintCallback"),v=Symbol("willPaintCallback"),didPaint=(t,e)=>intercept(g).in(t).then(exec(e)),html=(t,...e)=>{const r=e.map((t=>[].concat(t).join("")));return String.raw({raw:t},...r)},paint=(t,...e)=>r=>{intercept(f).in(r.prototype).then((async function(){var r,o;await(null==(r=this[v])?void 0:r.call(this)),await new Promise((r=>{requestAnimationFrame((async()=>{const o=e.map((t=>t(this)));(this.shadowRoot??document).adoptedStyleSheets=await Promise.all(o),(this.shadowRoot??this).innerHTML=await t(this),this.isPainted=!0,r()}))})),await(null==(o=this[g])?void 0:o.call(this))})),intercept(p).in(r.prototype).then(exec(f))},repaint=(t,e,r)=>{if(r.set){const t=r.set;Object.assign(r,{async set(e){var r;await Reflect.apply(t,this,[e]),this.isPainted&&await(null==(r=this[f])?void 0:r.call(this))}})}if(r.value){const t=r.value;Object.assign(r,{async value(...e){var r;return await Reflect.apply(t,this,e),this.isPainted&&await(null==(r=this[f])?void 0:r.call(this)),this}})}};var y=Object.getOwnPropertyDescriptor;let w=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}};w=((t,e,r,o)=>{for(var a,i=o>1?void 0:o?y(e,r):e,n=t.length-1;n>=0;n--)(a=t[n])&&(i=a(i)||i);return i})([define("m-answer"),paint((function component$n(){return html`
    <slot></slot>
  `}),(function style$o(){return css`
    :host {
      display: grid;
      gap: var(--spacing_inset-xs);
      grid-template-columns: repeat(2, 1fr);
      width: 100%;

      @media (width > 768px) {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  `}))],w);const b={equals:(t,e)=>t==e,different:(t,e)=>t!=e,gt:(t,e)=>t>e,gte:(t,e)=>t>=e,len:t=>{var e;return null==(e=Object.keys(t))?void 0:e.length},lt:(t,e)=>t<e,lte:(t,e)=>t<=e,not:t=>!t,prop:(t,e)=>{try{return new Function("target",`return target${/^\[/.test(e)?"":"."}${e}`)(t)}catch(r){return}}},k="dispatchEvent",x="on",_=Symbol.for("echoConnectedCallback"),E=Symbol.for("echoDisconnectedCallback"),j=new EventTarget,Echo=t=>{var e,r,o;return o=class extends t{constructor(){super(...arguments),__privateAdd(this,r,{})}[(e=m,d)](t,e,r){var o;return null==(o=super[d])||o.call(this,t,e,r),t===x&&(this[E](e),this[_](r)),this}[u](){var t;return null==(t=super[u])||t.call(this),Object.keys(__privateGet(this,r)).forEach((t=>this[E](t))),this}[k](t){var e;null==(e=super[k])||e.call(this,t);const r=this.getAttribute("id")??this.localName;j.dispatchEvent(new CustomEvent(`${r}/${t.type}`,{detail:t.detail}))}[_](t){__privateGet(this,r)[t]=new AbortController;const[,e,o,a,i]=t.match(/^([a-z0-9-_]+\/[a-z0-9-_]+):([a-z]+)\/([a-z0-9-_]+)(\|.*)?$/i)||[],n=(i||"").split("|").filter(Boolean).map((t=>{const[e,r]=t.split("=");return[b[e],r]}));return j.addEventListener(e,(t=>{const e=n.reduce(((t,[e,r])=>e(t,r)),t.detail);return/^method$/.test(o)&&this[a](e),/^attribute$/.test(o)&&this.setAttribute(a,e),/^setter$/.test(o)&&(this[a]=e),this}),{signal:__privateGet(this,r)[t].signal}),this}[E](t){var e;return null==(e=__privateGet(this,r)[t])||e.abort(),this}},r=new WeakMap,__publicField(o,e,[...t[m]??[],x]),o},dispatchEvent=t=>(e,r,o)=>{if(o.set){const e=o.set??(()=>{});Object.assign(o,{async set(r){await Reflect.apply(e,this,[r]),this.isConnected&&this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,cancelable:!0,detail:r}))}})}if(o.value){const e=o.value??(()=>{});Object.assign(o,{async value(...r){const o=await Reflect.apply(e,this,r);return this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,cancelable:!0,detail:o})),o}})}},$=Symbol("abortController"),attachEventListener$1=(t,e,...r)=>(o,a)=>{intercept(p).in(o).then((function(){var o;const i={signal:(this[$]??(this[$]=new AbortController)).signal};null==(o=this.shadowRoot)||o.addEventListener(t,(t=>{t.target.matches(e)&&this[a](r.reduce(((t,e)=>e(t)),t))}),i)})),intercept(u).in(o).then((function(){this[$].abort()}))},P=new Proxy({},{get:(t,e)=>(t,...r)=>attachEventListener$1(e,t,...r)});function prevent(t){return t.preventDefault(),t}function stop(t){return t.stopPropagation(),t}function value(t){return t.target.value}const joinCut=t=>(e,r,o)=>{const a=o.set?"set":"value",i=o[a]??(()=>{});Object.assign(o,{async[a](...e){var r;const o=await Reflect.apply(i,this,e);return await(null==(r=this[t])?void 0:r.call(this,...e)),o}})};const O=Symbol("change"),M=Symbol("remove"),S=Symbol("resize"),T=Symbol("setFormValue"),W=Symbol("setValidity");var C,L,z,D,R,A,q,V,I,H,F,N,B,Z,U=Object.defineProperty,K=Object.getOwnPropertyDescriptor,__typeError$l=t=>{throw TypeError(t)},__decorateClass$o=(t,e,r,o)=>{for(var a,i=o>1?void 0:o?K(e,r):e,n=t.length-1;n>=0;n--)(a=t[n])&&(i=(o?a(e,r,i):a(i))||i);return o&&i&&U(e,r,i),i},__accessCheck$l=(t,e,r)=>e.has(t)||__typeError$l("Cannot "+r),__privateGet$l=(t,e,r)=>(__accessCheck$l(t,e,"read from private field"),r?r.call(t):e.get(t)),__privateAdd$l=(t,e,r)=>e.has(t)?__typeError$l("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),__privateSet$k=(t,e,r,o)=>(__accessCheck$l(t,e,"write to private field"),e.set(t,r),r);let G=class extends(Echo(HTMLElement)){constructor(){super(),__privateAdd$l(this,A),__privateAdd$l(this,q),__privateAdd$l(this,V),__privateAdd$l(this,I),__privateAdd$l(this,H),__privateAdd$l(this,F),__privateAdd$l(this,N),__privateAdd$l(this,B),__privateAdd$l(this,Z),this.attachShadow({mode:"open",delegatesFocus:!0}),__privateSet$k(this,q,new AbortController),__privateSet$k(this,V,this.attachInternals())}get autocomplete(){return __privateGet$l(this,A)??__privateSet$k(this,A,"")}set autocomplete(t){__privateSet$k(this,A,t)}get form(){return __privateGet$l(this,V).form}get label(){return __privateGet$l(this,I)??__privateSet$k(this,I,"")}set label(t){__privateSet$k(this,I,t)}get maxlength(){return __privateGet$l(this,H)}set maxlength(t){__privateSet$k(this,H,t)}get name(){return __privateGet$l(this,F)??__privateSet$k(this,F,"")}set name(t){__privateSet$k(this,F,t)}get placeholder(){return __privateGet$l(this,N)}set placeholder(t){__privateSet$k(this,N,t)}get required(){return __privateGet$l(this,B)??__privateSet$k(this,B,!1)}set required(t){__privateSet$k(this,B,t)}get validationMessage(){return __privateGet$l(this,V).validationMessage}get validity(){return __privateGet$l(this,V).validity}get value(){var t;return __privateGet$l(this,Z)??__privateSet$k(this,Z,(null==(t=this.querySelector("template"))?void 0:t.innerHTML)??"")}set value(t){__privateSet$k(this,Z,t)}get willValidate(){return __privateGet$l(this,V).willValidate}static get formAssociated(){return!0}[R=O](t){return __privateSet$k(this,Z,t),t}[D=S](t){return t.target.style.setProperty("height","auto"),t.target.style.setProperty("height",`${t.target.scrollHeight}px`),this}checkValidity(){return __privateGet$l(this,V).checkValidity()}[z=M](){return __privateGet$l(this,q).abort(),this}reportValidity(){return __privateGet$l(this,V).reportValidity()}reset(){return __privateSet$k(this,Z,""),__privateGet$l(this,V).states.delete("invalid"),this.value}[L=T](t){const e={signal:__privateGet$l(this,q).signal};return t.addEventListener("formdata",(t=>t.formData.set(this.name,this.value)),e),this}[C=W](){const{validationMessage:t,validity:e}=this.shadowRoot.querySelector("textarea")??{};return __privateGet$l(this,V).setValidity(e,t),e}};A=new WeakMap,q=new WeakMap,V=new WeakMap,I=new WeakMap,H=new WeakMap,F=new WeakMap,N=new WeakMap,B=new WeakMap,Z=new WeakMap,__decorateClass$o([attributeChanged("autocomplete"),repaint],G.prototype,"autocomplete",1),__decorateClass$o([attributeChanged("label"),repaint],G.prototype,"label",1),__decorateClass$o([attributeChanged("maxlength"),repaint],G.prototype,"maxlength",1),__decorateClass$o([attributeChanged("name"),repaint],G.prototype,"name",1),__decorateClass$o([attributeChanged("placeholder"),repaint],G.prototype,"placeholder",1),__decorateClass$o([attributeChanged("required",booleanAttribute),repaint],G.prototype,"required",1),__decorateClass$o([attributeChanged("value"),repaint],G.prototype,"value",1),__decorateClass$o([P.input("*",value),dispatchEvent("change"),joinCut(W)],G.prototype,R,1),__decorateClass$o([P.input("*")],G.prototype,D,1),__decorateClass$o([disconnected],G.prototype,z,1),__decorateClass$o([formReset,dispatchEvent("reset"),repaint],G.prototype,"reset",1),__decorateClass$o([formAssociated],G.prototype,L,1),__decorateClass$o([didPaint],G.prototype,C,1),G=__decorateClass$o([define("m-area"),paint((function component$m(t){return html`
    <label for="${t.name}">
      ${t.label}
    </label>
    <textarea
      autocomplete="${t.autocomplete}"
      id="${t.name}"
      name="${t.name}"
      placeholder="${t.placeholder}"
      ${t.maxlength?`maxlength="${t.maxlength}"`:""}
      ${t.required?"required":""}
    >${t.value}</textarea>
    <slot></slot>
  `}),(function style$n(){return css`
    :host {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-nano);
      transition: all 0.2s ease-out;
      width: 100%;
    }

    label {
      color: var(--color-master-dark);
      font-family: var(--font-family-base);
      font-size: var(--font-size-xxs);
      font-weight: var(--font-weight-medium);
      letter-spacing: 0.38px;
      line-height: var(--line-height-default);
    }

    textarea {
      appearance: none;
      background-color: transparent;
      border: var(--border-width-hairline) solid var(--color-master-light);
      border-radius: var(--border-radius-sm);
      box-sizing: border-box;
      color: var(--color-master-dark);
      font-family: var(--font-family-base);
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-regular);
      height: auto;
      letter-spacing: 0.38px;
      line-height: var(--line-height-default);
      min-height: 120px;
      padding: var(--spacing_inset-xs);
      resize: none;
      width: 100%;
    }

    textarea:active,
    textarea:focus,
    textarea:hover {
      outline: 0;
    }

    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover, 
    textarea:-webkit-autofill:focus, 
    textarea:-webkit-autofill:active {
      transition: background-color 9999999999s ease-in-out 0s
    }

    textarea::placeholder {
      color: var(--color-master);
    }
  `}))],G);var J,Q,X,Y,tt,et,rt=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,__typeError$k=t=>{throw TypeError(t)},__decorateClass$n=(t,e,r,o)=>{for(var a,i=o>1?void 0:o?ot(e,r):e,n=t.length-1;n>=0;n--)(a=t[n])&&(i=(o?a(e,r,i):a(i))||i);return o&&i&&rt(e,r,i),i},__accessCheck$k=(t,e,r)=>e.has(t)||__typeError$k("Cannot "+r),__privateGet$k=(t,e,r)=>(__accessCheck$k(t,e,"read from private field"),r?r.call(t):e.get(t)),__privateAdd$k=(t,e,r)=>e.has(t)?__typeError$k("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),__privateSet$j=(t,e,r,o)=>(__accessCheck$k(t,e,"write to private field"),e.set(t,r),r);let at=class extends HTMLElement{constructor(){super(),__privateAdd$k(this,J),__privateAdd$k(this,Q),__privateAdd$k(this,X),__privateAdd$k(this,Y),__privateAdd$k(this,tt),__privateAdd$k(this,et),this.attachShadow({mode:"open"})}get alt(){return __privateGet$k(this,J)??__privateSet$j(this,J,"")}set alt(t){__privateSet$j(this,J,t)}get learn(){return __privateGet$k(this,Q)??__privateSet$j(this,Q,0)}set learn(t){__privateSet$j(this,Q,t)}get loading(){return __privateGet$k(this,X)??__privateSet$j(this,X,"lazy")}set loading(t){__privateSet$j(this,X,t)}get src(){return __privateGet$k(this,Y)??__privateSet$j(this,Y,"")}set src(t){__privateSet$j(this,Y,t)}get relearn(){return __privateGet$k(this,tt)??__privateSet$j(this,tt,0)}set relearn(t){__privateSet$j(this,tt,t)}get review(){return __privateGet$k(this,et)??__privateSet$j(this,et,0)}set review(t){__privateSet$j(this,et,t)}get total(){return Number(this.learn+this.relearn+this.review)}};J=new WeakMap,Q=new WeakMap,X=new WeakMap,Y=new WeakMap,tt=new WeakMap,et=new WeakMap,__decorateClass$n([attributeChanged("alt"),repaint],at.prototype,"alt",1),__decorateClass$n([attributeChanged("learn")],at.prototype,"learn",1),__decorateClass$n([attributeChanged("loading"),repaint],at.prototype,"loading",1),__decorateClass$n([attributeChanged("src"),repaint],at.prototype,"src",1),__decorateClass$n([attributeChanged("relearn")],at.prototype,"relearn",1),__decorateClass$n([attributeChanged("review")],at.prototype,"review",1),at=__decorateClass$n([define("m-avatar"),paint((function component$l(t){return html`
    <img
      alt="${t.alt}"
      src="${t.src}"
      onerror="this.remove()"
      loading="${t.loading}" />
  `}),(function style$m(t){return css`
    :host {
      --relearn: ${t.relearn};
      --learn: ${t.learn};
      --review: ${t.review};

      align-items: center;
      aspect-ratio: 1 / 1;
      background: ${t.total?"conic-gradient(\n              var(--color-danger) 0% calc(var(--relearn) * 1%),\n              var(--color-warning) calc(var(--relearn) * 1%) calc((var(--relearn) + var(--learn)) * 1%),\n              var(--color-success) calc((var(--relearn) + var(--learn)) * 1%) 100%\n            )":"conic-gradient(var(--color-master-light) 0% 100%)"};
      border-radius: var(--border-radius-circular);
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      height: auto;
      max-height: 76px;
      max-width: 76px;
      min-height: 76px;
      min-width: 76px;
      width: auto;

      &:before {
        content: "";
        background-color: var(--color-master-lighter);
        border: var(--border-width-thick) solid var(--color-master-lightest);
        border-radius: inherit;
        box-sizing: border-box;
        display: block;
        height: 70px;
        width: 70px;
      }

      img {
        aspect-ratio: 1 / 1;
        background-color: transparent;
        border-radius: inherit;
        box-sizing: border-box;
        color: transparent;
        height: 64px;
        position: absolute;
        width: 64px;
      }
    }
  `}))],at);var it,nt,st=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,__typeError$j=t=>{throw TypeError(t)},__decorateClass$m=(t,e,r,o)=>{for(var a,i=o>1?void 0:o?lt(e,r):e,n=t.length-1;n>=0;n--)(a=t[n])&&(i=(o?a(e,r,i):a(i))||i);return o&&i&&st(e,r,i),i},__accessCheck$j=(t,e,r)=>e.has(t)||__typeError$j("Cannot "+r),__privateGet$j=(t,e,r)=>(__accessCheck$j(t,e,"read from private field"),r?r.call(t):e.get(t)),__privateAdd$j=(t,e,r)=>e.has(t)?__typeError$j("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),__privateSet$i=(t,e,r,o)=>(__accessCheck$j(t,e,"write to private field"),e.set(t,r),r);let ht=class extends HTMLElement{constructor(){super(),__privateAdd$j(this,it),__privateAdd$j(this,nt),this.attachShadow({mode:"open"})}get background(){return __privateGet$j(this,it)??__privateSet$i(this,it,"master-lighter")}set background(t){__privateSet$i(this,it,t)}get spacing(){return __privateGet$j(this,nt)??__privateSet$i(this,nt,"xs")}set spacing(t){__privateSet$i(this,nt,t)}};it=new WeakMap,nt=new WeakMap,__decorateClass$m([attributeChanged("background"),repaint],ht.prototype,"background",1),__decorateClass$m([attributeChanged("spacing"),repaint],ht.prototype,"spacing",1),ht=__decorateClass$m([define("m-box"),paint((function component$k(){return html`
    <slot></slot>
  `}),(function style$l(t){return css`
    :host {
      align-items: start;
      background-color: var(--color-${t.background});
      border-radius: var(--border-radius-sm);
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: start;
      padding: var(--spacing_inset-${t.spacing});
      width: 100%;
    }
  `}))],ht);const ct=Symbol("setState");var dt,pt,ut,mt,gt,ft,vt=Object.defineProperty,yt=Object.getOwnPropertyDescriptor,__typeError$i=t=>{throw TypeError(t)},__decorateClass$l=(t,e,r,o)=>{for(var a,i=o>1?void 0:o?yt(e,r):e,n=t.length-1;n>=0;n--)(a=t[n])&&(i=(o?a(e,r,i):a(i))||i);return o&&i&&vt(e,r,i),i},__accessCheck$i=(t,e,r)=>e.has(t)||__typeError$i("Cannot "+r),__privateGet$i=(t,e,r)=>(__accessCheck$i(t,e,"read from private field"),r?r.call(t):e.get(t)),__privateAdd$i=(t,e,r)=>e.has(t)?__typeError$i("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),__privateSet$h=(t,e,r,o)=>(__accessCheck$i(t,e,"write to private field"),e.set(t,r),r);let wt=class extends(Echo(HTMLElement)){constructor(){super(),__privateAdd$i(this,dt),__privateAdd$i(this,pt),__privateAdd$i(this,ut),__privateAdd$i(this,mt),__privateAdd$i(this,gt),__privateAdd$i(this,ft),this.attachShadow({mode:"open"}),__privateSet$h(this,pt,this.attachInternals())}get color(){return __privateGet$i(this,dt)??__privateSet$h(this,dt,"primary")}set color(t){__privateSet$h(this,dt,t)}get type(){return __privateGet$i(this,ut)??__privateSet$h(this,ut,"submit")}set type(t){__privateSet$h(this,ut,t)}get value(){return __privateGet$i(this,mt)}set value(t){__privateSet$h(this,mt,t)}get variant(){return __privateGet$i(this,gt)??__privateSet$h(this,gt,"solid")}set variant(t){__privateSet$h(this,gt,t)}get width(){return __privateGet$i(this,ft)??__privateSet$h(this,ft,"auto")}set width(t){__privateSet$h(this,ft,t)}static get formAssociated(){return!0}click(){var t,e;switch(this.type){case"submit":null==(t=__privateGet$i(this,pt).form)||t.requestSubmit();break;case"reset":null==(e=__privateGet$i(this,pt).form)||e.reset()}return this.value}[ct](t){return __privateGet$i(this,pt).states.delete(t),__privateGet$i(this,pt).states.add(t),this}};dt=new WeakMap,pt=new WeakMap,ut=new WeakMap,mt=new WeakMap,gt=new WeakMap,ft=new WeakMap,__decorateClass$l([attributeChanged("color"),repaint],wt.prototype,"color",1),__decorateClass$l([attributeChanged("type"),repaint],wt.prototype,"type",1),__decorateClass$l([attributeChanged("value"),repaint],wt.prototype,"value",1),__decorateClass$l([attributeChanged("variant"),joinCut(ct)],wt.prototype,"variant",1),__decorateClass$l([attributeChanged("width"),repaint],wt.prototype,"width",1),__decorateClass$l([P.click("*",stop),dispatchEvent("click")],wt.prototype,"click",1),wt=__decorateClass$l([define("m-button"),paint((function component$j(){return html`
    <button>
      <slot></slot>
    </button>
  `}),(function style$k(t){return css`
    :host {
      width: ${t.width};

      button {
        align-items: center;
        background-color: var(--color-${t.color});
        border: var(--border-width-hairline) solid transparent;
        border-radius: var(--border-radius-sm);
        box-sizing: border-box;
        color: var(--color-pure-white);
        cursor: pointer;
        display: flex;
        font-family: var(--font-family-base);
        font-size: var(--font-size-xxs);
        font-weight: var(--font-weight-medium);
        gap: var(--spacing_inset-nano);
        height: 42px;
        justify-content: center;
        letter-spacing: 0.38px;
        line-height: var(--line-height-default);
        min-width: 42px;
        padding: 0 var(--spacing_inset-xs);
        position: relative;
        transition: all 0.2s ease-out;
        width: 100%;

        &:after {
          content: "";
          display: block;
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          z-index: 1;
          width: 100%;
        }
      }
    }

    :host(:state(naked)) {
      button {
        background-color: transparent;
        border: var(--border-width-hairline) solid var(--color-${t.color});
        color: var(--color-${t.color});
      }
    }

    :host(:state(ghost)) {
      button {
        background-color: var(--color-master-lighter);
        border: var(--border-width-hairline) solid transparent;
        color: var(--color-${t.color});
      }
    }

    :host(:state(link)) {
      button {
        background-color: transparent;
        border: var(--border-width-hairline) solid transparent;
        color: var(--color-${t.color});
      }
    }

    :host(:state(icon)) {
      button {
        background-color: transparent;
        border: var(--border-width-hairline) solid transparent;
        color: var(--color-${t.color});
        padding: 0;
        width: 42px;
      }
    }
  `}))],wt);var bt,kt,xt,_t=Object.defineProperty,Et=Object.getOwnPropertyDescriptor,__typeError$h=t=>{throw TypeError(t)},__decorateClass$k=(t,e,r,o)=>{for(var a,i=o>1?void 0:o?Et(e,r):e,n=t.length-1;n>=0;n--)(a=t[n])&&(i=(o?a(e,r,i):a(i))||i);return o&&i&&_t(e,r,i),i},__accessCheck$h=(t,e,r)=>e.has(t)||__typeError$h("Cannot "+r),__privateGet$h=(t,e,r)=>(__accessCheck$h(t,e,"read from private field"),r?r.call(t):e.get(t)),__privateAdd$h=(t,e,r)=>e.has(t)?__typeError$h("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),__privateSet$g=(t,e,r,o)=>(__accessCheck$h(t,e,"write to private field"),e.set(t,r),r);let jt=class extends HTMLElement{constructor(){super(),__privateAdd$h(this,bt),__privateAdd$h(this,kt),__privateAdd$h(this,xt),this.attachShadow({mode:"open"})}get learn(){return __privateGet$h(this,bt)??__privateSet$g(this,bt,0)}set learn(t){__privateSet$g(this,bt,t)}get relearn(){return __privateGet$h(this,kt)??__privateSet$g(this,kt,0)}set relearn(t){__privateSet$g(this,kt,t)}get review(){return __privateGet$h(this,xt)??__privateSet$g(this,xt,0)}set review(t){__privateSet$g(this,xt,t)}};bt=new WeakMap,kt=new WeakMap,xt=new WeakMap,__decorateClass$k([attributeChanged("learn")],jt.prototype,"learn",1),__decorateClass$k([attributeChanged("relearn")],jt.prototype,"relearn",1),__decorateClass$k([attributeChanged("review")],jt.prototype,"review",1),jt=__decorateClass$k([define("m-chart"),paint((function component$i(t){return html`
    <div></div>
    <div></div>
    <div></div>
  `}),(function style$j(t){return css`
    :host {
      background-color: var(--color-master-lighter);
      border-radius: var(--border-radius-pill);
      display: flex;
      overflow: hidden;
      height: 6px;
      width: 100%;

      div:first-child {
        background-color: var(--color-success);
        height: 6px;
        width: ${t.review}%;
      }

      div:nth-child(2) {
        background-color: var(--color-warning);
        height: 6px;
        width: ${t.learn}%;
      }

      div:last-child {
        background-color: var(--color-danger);
        height: 6px;
        width: ${t.relearn}%;
      }
    }
  `}))],jt);var $t,Pt,Ot,Mt=Object.defineProperty,St=Object.getOwnPropertyDescriptor,__typeError$g=t=>{throw TypeError(t)},__decorateClass$j=(t,e,r,o)=>{for(var a,i=o>1?void 0:o?St(e,r):e,n=t.length-1;n>=0;n--)(a=t[n])&&(i=(o?a(e,r,i):a(i))||i);return o&&i&&Mt(e,r,i),i},__accessCheck$g=(t,e,r)=>e.has(t)||__typeError$g("Cannot "+r),__privateGet$g=(t,e,r)=>(__accessCheck$g(t,e,"read from private field"),r?r.call(t):e.get(t)),__privateAdd$g=(t,e,r)=>e.has(t)?__typeError$g("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),__privateSet$f=(t,e,r,o)=>(__accessCheck$g(t,e,"write to private field"),e.set(t,r),r);let Tt=class extends(Echo(HTMLElement)){constructor(){super(),__privateAdd$g(this,$t),__privateAdd$g(this,Pt),__privateAdd$g(this,Ot),this.attachShadow({mode:"open"})}get alt(){return __privateGet$g(this,$t)??__privateSet$f(this,$t,"Memoize")}set alt(t){__privateSet$f(this,$t,t)}get aspect(){return __privateGet$g(this,Pt)??__privateSet$f(this,Pt,"square")}set aspect(t){__privateSet$f(this,Pt,t)}get src(){return __privateGet$g(this,Ot)??__privateSet$f(this,Ot,"")}set src(t){__privateSet$f(this,Ot,t)}};$t=new WeakMap,Pt=new WeakMap,Ot=new WeakMap,__decorateClass$j([attributeChanged("alt"),repaint],Tt.prototype,"alt",1),__decorateClass$j([attributeChanged("aspect"),repaint],Tt.prototype,"aspect",1),__decorateClass$j([attributeChanged("src"),repaint],Tt.prototype,"src",1),Tt=__decorateClass$j([define("m-cover"),paint((function component$h(t){return html`
    <img
      alt="${t.alt}"
      src="${t.src}"
      onerror="this.remove()"
      loading="auto" />
  `}),(function style$i(t){return css`
    :host {
      --aspect-ratio-portrait: 3/4;;
      --aspect-ratio-square: 1/1;;
      --aspect-ratio-wide: 16/9;

      aspect-ratio: var(--aspect-ratio-${t.aspect});
      background-color: var(--color-master-lighter);
      border-radius: var(--border-radius-sm);
      display: block;
      width: 100%;

      img {
        aspect-ratio: inherit;
        border-radius: inherit;
        color: transparent;
        display: block;
        object-fit: cover;
        width: inherit;
      }
    }
  `}))],Tt);var Wt,Ct=Object.defineProperty,Lt=Object.getOwnPropertyDescriptor,__typeError$f=t=>{throw TypeError(t)},__decorateClass$i=(t,e,r,o)=>{for(var a,i=o>1?void 0:o?Lt(e,r):e,n=t.length-1;n>=0;n--)(a=t[n])&&(i=(o?a(e,r,i):a(i))||i);return o&&i&&Ct(e,r,i),i},__accessCheck$f=(t,e,r)=>e.has(t)||__typeError$f("Cannot "+r),__privateSet$e=(t,e,r,o)=>(__accessCheck$f(t,e,"write to private field"),e.set(t,r),r);let zt=class extends HTMLElement{constructor(){var t,e,r;super(),t=this,(e=Wt).has(t)?__typeError$f("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),this.attachShadow({mode:"open"})}get color(){return __accessCheck$f(t=this,e=Wt,"read from private field"),(r?r.call(t):e.get(t))??__privateSet$e(this,Wt,"master-lightest");var t,e,r}set color(t){__privateSet$e(this,Wt,t)}};Wt=new WeakMap,__decorateClass$i([attributeChanged("color"),repaint],zt.prototype,"color",1),zt=__decorateClass$i([define("m-footer"),paint((function component$g(){return html`
    <footer>
      <container>
        <leading>
          <slot name="leading">
            <m-text slot="leading" color="info-light" size="xxxs">© 2025 Memoize. Todos os direitos reservados.</m-text>
          </slot>
        </leading>
        <trailing>
          <slot name="trailing"></slot>
        </trailing>
      </container>
    </footer>
  `}),(function style$h(t){return css`
    :host {
      display: flex;
      height: 72px;

      footer {
        background-color: var(--color-${t.color});
        box-sizing: border-box;
        width: 100svw;

        container {
          align-items: center;
          box-sizing: border-box;
          display: flex;
          height: 72px;
          justify-content: space-between;
          margin: 0 auto;
          max-width: 1024px;
          padding: var(--spacing_inset-xs);
        }
      }
    }
  `}))],zt);const Dt=Symbol("reset"),Rt=Symbol("submit");t=new WeakMap;let At=class _Template{constructor(e){var r,o,a,i;__privateAdd(this,t),a=e,__accessCheck(r=this,o=t,"write to private field"),i?i.call(r,a):o.set(r,a)}get content(){var e;return(null==(e=__privateGet(this,t).querySelector("template"))?void 0:e.innerHTML)??""}static from(t){return new _Template(t)}};var qt,Vt,It,Ht=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,__typeError$e=t=>{throw TypeError(t)},__decorateClass$h=(t,e,r,o)=>{for(var a,i=o>1?void 0:o?Ft(e,r):e,n=t.length-1;n>=0;n--)(a=t[n])&&(i=(o?a(e,r,i):a(i))||i);return o&&i&&Ht(e,r,i),i},__privateGet$e=(t,e,r)=>(((t,e,r)=>{e.has(t)||__typeError$e("Cannot "+r)})(t,e,"read from private field"),r?r.call(t):e.get(t));let Nt=class extends(Echo(HTMLElement)){constructor(){var t,e,r;super(),t=this,e=It,r=At.from(this),e.has(t)?__typeError$e("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),this.attachShadow({mode:"open"})}get content(){return __privateGet$e(this,It).content}reset(){const t=new Event("reset",{bubbles:!0,cancelable:!0});return this.shadowRoot.querySelector("form").dispatchEvent(t),this}[Vt=Dt](){return{}}submit(){const t=new Event("submit",{bubbles:!0,cancelable:!0});return this.shadowRoot.querySelector("form").dispatchEvent(t),this}[qt=Rt](t){return t}};It=new WeakMap,__decorateClass$h([P.reset("form",stop),dispatchEvent("reset")],Nt.prototype,Vt,1),__decorateClass$h([P.submit("form",prevent,stop,(t=>Object.fromEntries(new FormData(t.target,t.submitter)))),dispatchEvent("submit")],Nt.prototype,qt,1),Nt=__decorateClass$h([define("m-form"),paint((function component$f(t){return html`
    <form>
      ${t.content}
    </form>
  `}),(function style$g(){return css`
    :host {
      width: 100%;

      form {
        align-items: start;
        display: flex;
        flex-direction: column;
        gap: var(--spacing_inset-md);
        width: 100%;
      }
    }
  `}))],Nt);var Bt,Zt=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,__typeError$d=t=>{throw TypeError(t)},__decorateClass$g=(t,e,r,o)=>{for(var a,i=o>1?void 0:o?Ut(e,r):e,n=t.length-1;n>=0;n--)(a=t[n])&&(i=(o?a(e,r,i):a(i))||i);return o&&i&&Zt(e,r,i),i},__accessCheck$d=(t,e,r)=>e.has(t)||__typeError$d("Cannot "+r),__privateSet$d=(t,e,r,o)=>(__accessCheck$d(t,e,"write to private field"),e.set(t,r),r);let Kt=class extends HTMLElement{constructor(){var t,e,r;super(),t=this,(e=Bt).has(t)?__typeError$d("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),this.attachShadow({mode:"open"})}get color(){return __accessCheck$d(t=this,e=Bt,"read from private field"),(r?r.call(t):e.get(t))??__privateSet$d(this,Bt,"master-lightest");var t,e,r}set color(t){__privateSet$d(this,Bt,t)}};Bt=new WeakMap,__decorateClass$g([attributeChanged("color"),dispatchEvent("color"),repaint],Kt.prototype,"color",1),Kt=__decorateClass$g([define("m-header"),paint((function component$e(){return html`
    <header>
      <container>
        <leading>
          <slot name="leading"></slot>
        </leading>
        <trailing>
          <slot name="trailing"></slot>
        </trailing>
      </container>
    </header>
  `}),(function style$f(t){return css`
    :host {
      display: flex;
      height: 72px;

      header {
        background-color: var(--color-${t.color});
        box-sizing: border-box;
        width: 100svw;

        container {
          align-items: center;
          box-sizing: border-box;
          display: flex;
          height: 72px;
          justify-content: space-between;
          margin: 0 auto;
          max-width: 1024px;
          padding: var(--spacing_inset-xs);

          leading {
            align-items: center;
            display: flex;
            gap: var(--spacing_inset-xs);
            justify-content: start;
          }

          trailing {
            align-items: center;
            display: flex;
            gap: var(--spacing_inset-xs);
            justify-content: end;
          }
        }
      }
    }
  `}))],Kt);var Gt,Jt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,__typeError$c=t=>{throw TypeError(t)},__decorateClass$f=(t,e,r,o)=>{for(var a,i=o>1?void 0:o?Qt(e,r):e,n=t.length-1;n>=0;n--)(a=t[n])&&(i=(o?a(e,r,i):a(i))||i);return o&&i&&Jt(e,r,i),i},__accessCheck$c=(t,e,r)=>e.has(t)||__typeError$c("Cannot "+r),__privateSet$c=(t,e,r,o)=>(__accessCheck$c(t,e,"write to private field"),e.set(t,r),r);let Xt=class extends HTMLElement{constructor(){var t,e,r;super(),t=this,(e=Gt).has(t)?__typeError$c("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),this.attachShadow({mode:"open"})}get when(){return __accessCheck$c(t=this,e=Gt,"read from private field"),(r?r.call(t):e.get(t))??__privateSet$c(this,Gt,!1);var t,e,r}set when(t){__privateSet$c(this,Gt,t)}};Gt=new WeakMap,__decorateClass$f([attributeChanged("when",booleanAttribute),repaint],Xt.prototype,"when",1),Xt=__decorateClass$f([define("m-hide"),paint((function component$d(){return html`
    <slot></slot>
  `}),(function style$e(t){return css`
    :host {
      display: ${t.when?"none":"block"};
      width: 100%;
    }
  `}))],Xt);const Yt={add:()=>l((()=>import("./add-DCKMxHQo.js")),[]),arrowBack:()=>l((()=>import("./arrowBack-BGeWi0SY.js")),[]),check:()=>l((()=>import("./check-Cj5J6yLM.js")),[]),cognition:()=>l((()=>import("./cognition-mNuL1NxN.js")),[]),delete:()=>l((()=>import("./delete-C_xWyrvF.js")),[]),language:()=>l((()=>import("./language-BfAnZtYh.js")),[]),pause:()=>l((()=>import("./pause-LbGoyupw.js")),[]),play:()=>l((()=>import("./play-BTP0Inba.js")),[]),settings:()=>l((()=>import("./settings-CUuaLibr.js")),[]),textToSpeech:()=>l((()=>import("./textToSpeech-DMCJSDCd.js")),[]),timer:()=>l((()=>import("./timer-DVbDucsK.js")),[])};var te,ee,re,oe=Object.defineProperty,ae=Object.getOwnPropertyDescriptor,__typeError$b=t=>{throw TypeError(t)},__decorateClass$e=(t,e,r,o)=>{for(var a,i=o>1?void 0:o?ae(e,r):e,n=t.length-1;n>=0;n--)(a=t[n])&&(i=(o?a(e,r,i):a(i))||i);return o&&i&&oe(e,r,i),i},__accessCheck$b=(t,e,r)=>e.has(t)||__typeError$b("Cannot "+r),__privateGet$b=(t,e,r)=>(__accessCheck$b(t,e,"read from private field"),r?r.call(t):e.get(t)),__privateAdd$b=(t,e,r)=>e.has(t)?__typeError$b("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),__privateSet$b=(t,e,r,o)=>(__accessCheck$b(t,e,"write to private field"),e.set(t,r),r);let ie=class extends HTMLElement{constructor(){super(),__privateAdd$b(this,te),__privateAdd$b(this,ee),__privateAdd$b(this,re),this.attachShadow({mode:"open"})}get color(){return __privateGet$b(this,te)??__privateSet$b(this,te,"primary")}set color(t){__privateSet$b(this,te,t)}get size(){return __privateGet$b(this,ee)??__privateSet$b(this,ee,"md")}set size(t){__privateSet$b(this,ee,t)}get use(){return __privateGet$b(this,re)??__privateSet$b(this,re,"")}set use(t){__privateSet$b(this,re,t)}};te=new WeakMap,ee=new WeakMap,re=new WeakMap,__decorateClass$e([attributeChanged("color"),repaint],ie.prototype,"color",1),__decorateClass$e([attributeChanged("size"),repaint],ie.prototype,"size",1),__decorateClass$e([attributeChanged("use"),repaint],ie.prototype,"use",1),ie=__decorateClass$e([define("m-icon"),paint((async function component$c(t){return(await Yt[t.use]()).default}),(function style$d(t){return css`
    :host {
      color: var(--color-${t.color});
      display: block;
      height: var(--font-size-${t.size});
      width: var(--font-size-${t.size});

      svg {
        height: inherit;
        width: inherit;
      }
    }
  `}))],ie);const ne=html`
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
    <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
  </svg>
`;var se=Object.getOwnPropertyDescriptor;let le=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}};le=((t,e,r,o)=>{for(var a,i=o>1?void 0:o?se(e,r):e,n=t.length-1;n>=0;n--)(a=t[n])&&(i=a(i)||i);return i})([define("m-info"),paint((function component$b(){return html`
    ${ne} <slot></slot>
  `}),(function style$c(){return css`
    :host {
      align-items: start;
      color: var(--color-master);
      display: flex;
      font-family: var(--font-family-base);
      font-size: var(--font-size-xxxs);
      font-weight: var(--font-weight-regular);
      gap: var(--spacing_inset-quarck);
      letter-spacing: 0.5px;
      line-height: var(--line-height-lg);

      svg {
        height: 18px;
      }
    }
  `}))],le);const he=Symbol("change"),ce=Symbol("remove"),de=Symbol("setFormValue"),pe=Symbol("setValidity");var ue,me,ge,fe,ve,ye,we,be,ke,xe,_e,Ee,je,$e,Pe,Oe=Object.defineProperty,Me=Object.getOwnPropertyDescriptor,__typeError$a=t=>{throw TypeError(t)},__decorateClass$c=(t,e,r,o)=>{for(var a,i=o>1?void 0:o?Me(e,r):e,n=t.length-1;n>=0;n--)(a=t[n])&&(i=(o?a(e,r,i):a(i))||i);return o&&i&&Oe(e,r,i),i},__accessCheck$a=(t,e,r)=>e.has(t)||__typeError$a("Cannot "+r),__privateGet$a=(t,e,r)=>(__accessCheck$a(t,e,"read from private field"),r?r.call(t):e.get(t)),__privateAdd$a=(t,e,r)=>e.has(t)?__typeError$a("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),__privateSet$a=(t,e,r,o)=>(__accessCheck$a(t,e,"write to private field"),e.set(t,r),r);let Se=class extends(Echo(HTMLElement)){constructor(){super(),__privateAdd$a(this,ve),__privateAdd$a(this,ye),__privateAdd$a(this,we),__privateAdd$a(this,be),__privateAdd$a(this,ke),__privateAdd$a(this,xe),__privateAdd$a(this,_e),__privateAdd$a(this,Ee),__privateAdd$a(this,je),__privateAdd$a(this,$e),__privateAdd$a(this,Pe),this.attachShadow({mode:"open",delegatesFocus:!0}),__privateSet$a(this,ye,new AbortController),__privateSet$a(this,be,this.attachInternals())}get autocomplete(){return __privateGet$a(this,ve)??__privateSet$a(this,ve,"")}set autocomplete(t){__privateSet$a(this,ve,t)}get form(){return __privateGet$a(this,be).form}get inputMode(){return __privateGet$a(this,we)??this.type}set inputMode(t){__privateSet$a(this,we,t)}get label(){return __privateGet$a(this,ke)??__privateSet$a(this,ke,"")}set label(t){__privateSet$a(this,ke,t)}get maxlength(){return __privateGet$a(this,xe)}set maxlength(t){__privateSet$a(this,xe,t)}get name(){return __privateGet$a(this,_e)??__privateSet$a(this,_e,"")}set name(t){__privateSet$a(this,_e,t)}get placeholder(){return __privateGet$a(this,Ee)}set placeholder(t){__privateSet$a(this,Ee,t)}get required(){return __privateGet$a(this,je)??__privateSet$a(this,je,!1)}set required(t){__privateSet$a(this,je,t)}get type(){return __privateGet$a(this,$e)??__privateSet$a(this,$e,"text")}set type(t){__privateSet$a(this,$e,t)}get validationMessage(){return __privateGet$a(this,be).validationMessage}get validity(){return __privateGet$a(this,be).validity}get value(){return __privateGet$a(this,Pe)??__privateSet$a(this,Pe,"")}set value(t){__privateSet$a(this,Pe,t)}get willValidate(){return __privateGet$a(this,be).willValidate}static get formAssociated(){return!0}[fe=he](t){return __privateSet$a(this,Pe,t),t}checkValidity(){return __privateGet$a(this,be).checkValidity()}[ge=ce](){return __privateGet$a(this,ye).abort(),this}reportValidity(){return __privateGet$a(this,be).reportValidity()}reset(){return __privateSet$a(this,Pe,""),__privateGet$a(this,be).states.delete("invalid"),this.value}[me=de](t){const e={signal:__privateGet$a(this,ye).signal};return t.addEventListener("formdata",(t=>t.formData.set(this.name,this.value)),e),this}[ue=pe](){const{validationMessage:t,validity:e}=this.shadowRoot.querySelector("input")??{};return __privateGet$a(this,be).setValidity(e,t),e}};ve=new WeakMap,ye=new WeakMap,we=new WeakMap,be=new WeakMap,ke=new WeakMap,xe=new WeakMap,_e=new WeakMap,Ee=new WeakMap,je=new WeakMap,$e=new WeakMap,Pe=new WeakMap,__decorateClass$c([attributeChanged("autocomplete"),repaint],Se.prototype,"autocomplete",1),__decorateClass$c([attributeChanged("inputmode"),repaint],Se.prototype,"inputMode",1),__decorateClass$c([attributeChanged("label"),repaint],Se.prototype,"label",1),__decorateClass$c([attributeChanged("maxlength"),repaint],Se.prototype,"maxlength",1),__decorateClass$c([attributeChanged("name"),repaint],Se.prototype,"name",1),__decorateClass$c([attributeChanged("placeholder"),repaint],Se.prototype,"placeholder",1),__decorateClass$c([attributeChanged("required",booleanAttribute),repaint],Se.prototype,"required",1),__decorateClass$c([attributeChanged("type"),repaint],Se.prototype,"type",1),__decorateClass$c([attributeChanged("value"),repaint],Se.prototype,"value",1),__decorateClass$c([P.input("*",value),dispatchEvent("change"),joinCut(pe)],Se.prototype,fe,1),__decorateClass$c([disconnected],Se.prototype,ge,1),__decorateClass$c([formReset,dispatchEvent("reset"),repaint],Se.prototype,"reset",1),__decorateClass$c([formAssociated],Se.prototype,me,1),__decorateClass$c([didPaint],Se.prototype,ue,1),Se=__decorateClass$c([define("m-input"),paint((function component$a(t){return html`
    <label for="${t.name}">
      ${t.label}
    </label>
    <slot name="preview"></slot>
    <input
      autocomplete="${t.autocomplete}"
      id="${t.name}"
      inputmode="${t.inputMode}"
      name="${t.name}"
      placeholder="${t.placeholder}"
      type="${t.type}"
      value="${t.value}"
      ${t.maxlength?`maxlength="${t.maxlength}"`:""}
      ${t.required?"required":""}
    />
    <slot name="hint"></slot>
    <slot></slot>
  `}),(function style$b(){return css`
    :host {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-nano);
      transition: all 0.2s ease-out;
      width: 100%;
    }

    label {
      color: var(--color-master-dark);
      font-family: var(--font-family-base);
      font-size: var(--font-size-xxs);
      font-weight: var(--font-weight-medium);
      letter-spacing: 0.38px;
      line-height: var(--line-height-default);
    }

    input {
      appearance: none;
      background-color: transparent;
      border: var(--border-width-hairline) solid var(--color-master-light);
      border-radius: var(--border-radius-sm);
      box-sizing: border-box;
      color: var(--color-master-dark);
      font-family: var(--font-family-base);
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-regular);
      height: 42px;
      letter-spacing: 0.38px;
      line-height: var(--line-height-default);
      padding: 0 var(--spacing_inset-xs);
      width: 100%;
    }

    input:active,
    input:focus,
    input:hover {
      outline: 0;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active {
      transition: background-color 9999999999s ease-in-out 0s
    }

    input::placeholder {
      color: var(--color-master);
    }
  `}))],Se);const Te=Symbol("setDisplay");var We,Ce,Le=Object.defineProperty,ze=Object.getOwnPropertyDescriptor,__typeError$9=t=>{throw TypeError(t)},__decorateClass$b=(t,e,r,o)=>{for(var a,i=o>1?void 0:o?ze(e,r):e,n=t.length-1;n>=0;n--)(a=t[n])&&(i=(o?a(e,r,i):a(i))||i);return o&&i&&Le(e,r,i),i},__accessCheck$9=(t,e,r)=>e.has(t)||__typeError$9("Cannot "+r),__privateGet$9=(t,e,r)=>(__accessCheck$9(t,e,"read from private field"),r?r.call(t):e.get(t)),__privateSet$9=(t,e,r,o)=>(__accessCheck$9(t,e,"write to private field"),e.set(t,r),r);let De=class extends HTMLElement{constructor(){var t,e,r;super(),t=this,(e=Ce).has(t)?__typeError$9("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),this.attachShadow({mode:"open"})}get visible(){return!!__privateGet$9(this,Ce)}click(){var t;return null==(t=__privateGet$9(this,Ce))||t.prompt(),this}hide(){return __privateSet$9(this,Ce,void 0),this}show(t){return __privateSet$9(this,Ce,t),this}[We=Te](){return this.visible?this.style.removeProperty("display"):this.style.setProperty("display","none"),this}};Ce=new WeakMap,__decorateClass$b([P.click(":host m-button")],De.prototype,"click",1),__decorateClass$b([function appInstalled(t,e){const r=t.connectedCallback??(()=>{}),o=t.disconnectedCallback??(()=>{}),a=new AbortController;Reflect.defineProperty(t,"connectedCallback",{value(...t){return window.addEventListener("appinstalled",(()=>this[e]()),{signal:a.signal}),Reflect.apply(r,this,t)}}),Reflect.defineProperty(t,"disconnectedCallback",{value(...t){return a.abort(),Reflect.apply(o,this,t)}})},repaint],De.prototype,"hide",1),__decorateClass$b([function beforeInstallPrompt(t,e){const r=t.connectedCallback??(()=>{}),o=t.disconnectedCallback??(()=>{}),a=new AbortController;Reflect.defineProperty(t,"connectedCallback",{value(...t){return window.addEventListener("beforeinstallprompt",(t=>{t.preventDefault(),this[e](t)}),{signal:a.signal}),Reflect.apply(r,this,t)}}),Reflect.defineProperty(t,"disconnectedCallback",{value(...t){return a.abort(),Reflect.apply(o,this,t)}})},repaint],De.prototype,"show",1),__decorateClass$b([didPaint],De.prototype,We,1),De=__decorateClass$b([define("m-install"),paint((function component$9(){return html`
    <m-button variant="naked" width="100%">Instalar aplicativo</m-button>
  `}),(function style$a(){return css`
    :host {
      width: 100%;
    }
  `}))],De);var Re,Ae,qe,Ve,Ie,He,Fe,Ne=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,__typeError$8=t=>{throw TypeError(t)},__decorateClass$a=(t,e,r,o)=>{for(var a,i=o>1?void 0:o?Be(e,r):e,n=t.length-1;n>=0;n--)(a=t[n])&&(i=(o?a(e,r,i):a(i))||i);return o&&i&&Ne(e,r,i),i},__accessCheck$8=(t,e,r)=>e.has(t)||__typeError$8("Cannot "+r),__privateGet$8=(t,e,r)=>(__accessCheck$8(t,e,"read from private field"),r?r.call(t):e.get(t)),__privateAdd$8=(t,e,r)=>e.has(t)?__typeError$8("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),__privateSet$8=(t,e,r,o)=>(__accessCheck$8(t,e,"write to private field"),e.set(t,r),r);let Ze=class Text extends(Echo(HTMLElement)){constructor(){super(),__privateAdd$8(this,Re),__privateAdd$8(this,Ae),__privateAdd$8(this,qe),__privateAdd$8(this,Ve),__privateAdd$8(this,Ie),__privateAdd$8(this,He),__privateAdd$8(this,Fe),this.attachShadow({mode:"open"})}get color(){return __privateGet$8(this,Re)??__privateSet$8(this,Re,"primary-dark")}set color(t){__privateSet$8(this,Re,t)}get family(){return __privateGet$8(this,Ae)??__privateSet$8(this,Ae,"base")}set family(t){__privateSet$8(this,Ae,t)}get href(){return __privateGet$8(this,qe)}set href(t){__privateSet$8(this,qe,t)}get lineHeight(){return __privateGet$8(this,Ve)??__privateSet$8(this,Ve,"lg")}set lineHeight(t){__privateSet$8(this,Ve,t)}get size(){return __privateGet$8(this,Ie)??__privateSet$8(this,Ie,"xxs")}set size(t){__privateSet$8(this,Ie,t)}get value(){return __privateGet$8(this,He)}set value(t){__privateSet$8(this,He,t)}get weight(){return __privateGet$8(this,Fe)??__privateSet$8(this,Fe,"medium")}set weight(t){__privateSet$8(this,Fe,t)}click(){return this.href&&history.pushState({},"",this.href),this.value}};Re=new WeakMap,Ae=new WeakMap,qe=new WeakMap,Ve=new WeakMap,Ie=new WeakMap,He=new WeakMap,Fe=new WeakMap,__decorateClass$a([attributeChanged("color"),repaint],Ze.prototype,"color",1),__decorateClass$a([attributeChanged("family"),repaint],Ze.prototype,"family",1),__decorateClass$a([attributeChanged("href")],Ze.prototype,"href",1),__decorateClass$a([attributeChanged("line-height"),repaint],Ze.prototype,"lineHeight",1),__decorateClass$a([attributeChanged("size"),repaint],Ze.prototype,"size",1),__decorateClass$a([attributeChanged("value")],Ze.prototype,"value",1),__decorateClass$a([attributeChanged("weight"),repaint],Ze.prototype,"weight",1),__decorateClass$a([P.click("*",stop),dispatchEvent("click")],Ze.prototype,"click",1),Ze=__decorateClass$a([define("m-link"),paint((function component$8(){return html`
    <slot></slot>
  `}),(function style$9(t){return css`
    :host {
      color: var(--color-${t.color});
      cursor: pointer;
      font-family: var(--font-family-${t.family});
      font-size: var(--font-size-${t.size});
      font-weight: var(--font-weight-${t.weight});
      letter-spacing: 0.38px;
      line-height: var(--line-height-${t.lineHeight});
      text-align: ${t.align};
    }
  `}))],Ze);const Ue=Symbol("setState");var Ke,Ge,Je=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,__typeError$7=t=>{throw TypeError(t)},__decorateClass$9=(t,e,r,o)=>{for(var a,i=o>1?void 0:o?Qe(e,r):e,n=t.length-1;n>=0;n--)(a=t[n])&&(i=(o?a(e,r,i):a(i))||i);return o&&i&&Je(e,r,i),i},__accessCheck$7=(t,e,r)=>e.has(t)||__typeError$7("Cannot "+r),__privateGet$7=(t,e,r)=>(__accessCheck$7(t,e,"read from private field"),r?r.call(t):e.get(t)),__privateAdd$7=(t,e,r)=>e.has(t)?__typeError$7("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),__privateSet$7=(t,e,r,o)=>(__accessCheck$7(t,e,"write to private field"),e.set(t,r),r);let Xe=class extends HTMLElement{constructor(){super(),__privateAdd$7(this,Ke),__privateAdd$7(this,Ge),this.attachShadow({mode:"open"}),__privateSet$7(this,Ke,this.attachInternals())}get onColor(){return __privateGet$7(this,Ge)??__privateSet$7(this,Ge,!1)}set onColor(t){__privateSet$7(this,Ge,t)}[Ue](){return this.onColor?__privateGet$7(this,Ke).states.add("oncolor"):__privateGet$7(this,Ke).states.delete("oncolor"),this}};Ke=new WeakMap,Ge=new WeakMap,__decorateClass$9([attributeChanged("on-color",booleanAttribute),joinCut(Ue)],Xe.prototype,"onColor",1),Xe=__decorateClass$9([define("m-logo"),paint((function component$7(){return html`
    <svg width="363" height="363" viewBox="0 0 363 363" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14.1421" y="181.019" width="236" height="236" transform="rotate(-45 14.1421 181.019)" stroke="currentColor" stroke-width="20"/>
      <line x1="181" y1="12" x2="181" y2="181" stroke="currentColor" stroke-width="20"/>
    </svg>
  `}),(function style$8(){return css`
    :host {
      color: var(--color-primary);
      height: 42px;
      width: 42px;

      svg {
        height: inherit;
        width: inherit;
      }
    }

    :host(:state(oncolor)) {
      color: var(--color-master-lightest);
    }
  `}))],Xe);var Ye,tr=Object.defineProperty,er=Object.getOwnPropertyDescriptor,__typeError$6=t=>{throw TypeError(t)},__decorateClass$8=(t,e,r,o)=>{for(var a,i=o>1?void 0:o?er(e,r):e,n=t.length-1;n>=0;n--)(a=t[n])&&(i=(o?a(e,r,i):a(i))||i);return o&&i&&tr(e,r,i),i},__accessCheck$6=(t,e,r)=>e.has(t)||__typeError$6("Cannot "+r),__privateSet$6=(t,e,r,o)=>(__accessCheck$6(t,e,"write to private field"),e.set(t,r),r);let rr=class extends HTMLElement{constructor(){var t,e,r;super(),t=this,(e=Ye).has(t)?__typeError$6("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),this.attachShadow({mode:"open"})}get color(){return __accessCheck$6(t=this,e=Ye,"read from private field"),(r?r.call(t):e.get(t))??__privateSet$6(this,Ye,"master-lightest");var t,e,r}set color(t){__privateSet$6(this,Ye,t)}};Ye=new WeakMap,__decorateClass$8([attributeChanged("color"),repaint],rr.prototype,"color",1),rr=__decorateClass$8([define("m-main"),paint((function component$6(){return html`
    <main>
      <container>
        <slot></slot>
      </container>
    </main>
  `}),(function style$7(t){return css`
    main {
      background-color: var(--color-${t.color});

      container {
        align-items: start;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: var(--spacing_inset-md);
        justify-content: start;
        margin: 0 auto;
        max-width: 1024px;
        min-height: calc(100svh - 144px);
        padding: var(--spacing_inset-xs);
      }
    }
  `}))],rr);var or=Object.getOwnPropertyDescriptor;let ar=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}};ar=((t,e,r,o)=>{for(var a,i=o>1?void 0:o?or(e,r):e,n=t.length-1;n>=0;n--)(a=t[n])&&(i=a(i)||i);return i})([define("m-markdown"),paint((function component$5(t){return html`
    ${t.querySelector("template").innerHTML}
  `}),(function style$5(){return css`
    :host {
      box-sizing: border-box;
      color: var(--color-master-dark);
      display: flex;
      font-family: var(--font-family-base);
      font-size: var(--font-size-xxs);
      font-weight: var(--font-weight-regular);
      flex-direction: column;
      letter-spacing: 0.38px;
      line-height: var(--line-height-xl);
      margin: 0;
      overflow-x: hidden;
      padding: 0;
      width: 100%;

      :where(h1, h2, h3, h4, h5, h6) {
        color: var(--color-master-darker);
        font-family: var(--font-family-highlight);
        font-weight: var(--font-weight-bold);
      }

      h1 { font-size: var(--font-size-lg); }
      h2 { font-size: var(--font-size-md); }
      h3 { font-size: var(--font-size-sm); }
      h4 { font-size: var(--font-size-xs); }
      h5 { font-size: var(--font-size-xxs); }
      h6 { font-size: var(--font-size-xxxs); }

      code:not(pre code) {
        background-color: var(--color-info-lighter);
        border-radius: 3px;
        padding: 1.5px 3px;
      }

      code {
        border-radius: var(--border-radius-sm);
      }

      blockquote {
        background-color: var(--color-info-lighter);
        border-left: var(--border-width-thick) solid var(--color-info-light);
        padding: var(--spacing_inset-xs);
      }

      img {
        border-radius: var(--border-radius-sm);
        max-width: 100%;
        object-fit: contain;
      }

      ul {
        padding-left: var(--spacing-xxs);
      }
    }
  `}),(function style$6(){return css`
    ${"pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#abb2bf;background:#282c34}.hljs-comment,.hljs-quote{color:#5c6370;font-style:italic}.hljs-doctag,.hljs-keyword,.hljs-formula{color:#c678dd}.hljs-section,.hljs-name,.hljs-selector-tag,.hljs-deletion,.hljs-subst{color:#e06c75}.hljs-literal{color:#56b6c2}.hljs-string,.hljs-regexp,.hljs-addition,.hljs-attribute,.hljs-meta .hljs-string{color:#98c379}.hljs-attr,.hljs-variable,.hljs-template-variable,.hljs-type,.hljs-selector-class,.hljs-selector-attr,.hljs-selector-pseudo,.hljs-number{color:#d19a66}.hljs-symbol,.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-title{color:#61aeee}.hljs-built_in,.hljs-title.class_,.hljs-class .hljs-title{color:#e6c07b}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-link{text-decoration:underline}"}
  `}))],ar);var ir,nr=Object.defineProperty,sr=Object.getOwnPropertyDescriptor,__typeError$5=t=>{throw TypeError(t)},__decorateClass$6=(t,e,r,o)=>{for(var a,i=o>1?void 0:o?sr(e,r):e,n=t.length-1;n>=0;n--)(a=t[n])&&(i=(o?a(e,r,i):a(i))||i);return o&&i&&nr(e,r,i),i},__accessCheck$5=(t,e,r)=>e.has(t)||__typeError$5("Cannot "+r),__privateSet$5=(t,e,r,o)=>(__accessCheck$5(t,e,"write to private field"),e.set(t,r),r);let lr=class extends(Echo(HTMLElement)){constructor(){var t,e,r;super(),t=this,(e=ir).has(t)?__typeError$5("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),this.style.setProperty("display","none")}get href(){return __accessCheck$5(t=this,e=ir,"read from private field"),(r?r.call(t):e.get(t))??__privateSet$5(this,ir,"#");var t,e,r}set href(t){__privateSet$5(this,ir,t)}go(){return history.pushState({},"",this.href),this}};ir=new WeakMap,__decorateClass$6([attributeChanged("href"),dispatchEvent("href")],lr.prototype,"href",1),lr=__decorateClass$6([define("m-redirect")],lr);var hr,cr,dr,pr=Object.defineProperty,ur=Object.getOwnPropertyDescriptor,__typeError$4=t=>{throw TypeError(t)},__decorateClass$5=(t,e,r,o)=>{for(var a,i=o>1?void 0:o?ur(e,r):e,n=t.length-1;n>=0;n--)(a=t[n])&&(i=(o?a(e,r,i):a(i))||i);return o&&i&&pr(e,r,i),i},__accessCheck$4=(t,e,r)=>e.has(t)||__typeError$4("Cannot "+r),__privateGet$4=(t,e,r)=>(__accessCheck$4(t,e,"read from private field"),r?r.call(t):e.get(t)),__privateAdd$4=(t,e,r)=>e.has(t)?__typeError$4("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),__privateSet$4=(t,e,r,o)=>(__accessCheck$4(t,e,"write to private field"),e.set(t,r),r);let mr=class extends HTMLElement{constructor(){super(),__privateAdd$4(this,hr),__privateAdd$4(this,cr),__privateAdd$4(this,dr),this.attachShadow({mode:"open"})}get align(){return __privateGet$4(this,hr)??__privateSet$4(this,hr,"start")}set align(t){__privateSet$4(this,hr,t)}get display(){return this.when?"flex":"none"}get justify(){return __privateGet$4(this,cr)??__privateSet$4(this,cr,"flex-start")}set justify(t){__privateSet$4(this,cr,t)}get when(){return __privateGet$4(this,dr)??__privateSet$4(this,dr,!1)}set when(t){__privateSet$4(this,dr,t)}};hr=new WeakMap,cr=new WeakMap,dr=new WeakMap,__decorateClass$5([attributeChanged("align"),repaint],mr.prototype,"align",1),__decorateClass$5([attributeChanged("justify"),repaint],mr.prototype,"justify",1),__decorateClass$5([attributeChanged("when",booleanAttribute),repaint],mr.prototype,"when",1),mr=__decorateClass$5([define("m-show"),paint((function component$4(){return html`
    <slot></slot>
  `}),(function style$4(t){return css`
    :host {
      align-items: ${t.align};
      display: ${t.display};
      justify-content: ${t.justify};
      width: 100%;
    }
  `}))],mr);const gr=Symbol("setOn");var fr,vr=Object.defineProperty,yr=Object.getOwnPropertyDescriptor,__decorateClass$4=(t,e,r,o)=>{for(var a,i=o>1?void 0:o?yr(e,r):e,n=t.length-1;n>=0;n--)(a=t[n])&&(i=(o?a(e,r,i):a(i))||i);return o&&i&&vr(e,r,i),i};let wr=class extends HTMLElement{async[fr=gr](t,e){var r,o,a,i;return await customElements.whenDefined(this.parentElement.localName),null==(o=null==(r=this.parentElement)?void 0:r[E])||o.call(r,e),null==(i=null==(a=this.parentElement)?void 0:a[_])||i.call(a,t),this}};__decorateClass$4([attributeChanged(x)],wr.prototype,fr,1),wr=__decorateClass$4([define("m-echo-source")],wr);const br=Symbol("setDisplay");var kr,xr,_r,Er,jr,$r,Pr=Object.defineProperty,Or=Object.getOwnPropertyDescriptor,__typeError$3=t=>{throw TypeError(t)},__decorateClass$3=(t,e,r,o)=>{for(var a,i=o>1?void 0:o?Or(e,r):e,n=t.length-1;n>=0;n--)(a=t[n])&&(i=(o?a(e,r,i):a(i))||i);return o&&i&&Pr(e,r,i),i},__accessCheck$3=(t,e,r)=>e.has(t)||__typeError$3("Cannot "+r),__privateGet$3=(t,e,r)=>(__accessCheck$3(t,e,"read from private field"),r?r.call(t):e.get(t)),__privateAdd$3=(t,e,r)=>e.has(t)?__typeError$3("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),__privateSet$3=(t,e,r,o)=>(__accessCheck$3(t,e,"write to private field"),e.set(t,r),r);let Mr=class extends(Echo(HTMLElement)){constructor(){super(),__privateAdd$3(this,xr),__privateAdd$3(this,_r),__privateAdd$3(this,Er),__privateAdd$3(this,jr),__privateAdd$3(this,$r),this.attachShadow({mode:"open"})}get align(){return __privateGet$3(this,xr)??__privateSet$3(this,xr,"start")}set align(t){__privateSet$3(this,xr,t)}get direction(){return __privateGet$3(this,_r)??__privateSet$3(this,_r,"row")}set direction(t){__privateSet$3(this,_r,t)}get hidden(){return __privateGet$3(this,Er)??__privateSet$3(this,Er,!1)}set hidden(t){__privateSet$3(this,Er,t)}get justify(){return __privateGet$3(this,jr)??__privateSet$3(this,jr,"flex-start")}set justify(t){__privateSet$3(this,jr,t)}get spacing(){return __privateGet$3(this,$r)??__privateSet$3(this,$r,"xs")}set spacing(t){__privateSet$3(this,$r,t)}click(){return this}[kr=br](){return this.hidden?this.style.setProperty("display","none"):this.style.removeProperty("display"),this}};xr=new WeakMap,_r=new WeakMap,Er=new WeakMap,jr=new WeakMap,$r=new WeakMap,__decorateClass$3([attributeChanged("align"),repaint],Mr.prototype,"align",1),__decorateClass$3([attributeChanged("direction"),repaint],Mr.prototype,"direction",1),__decorateClass$3([attributeChanged("hidden",booleanAttribute),repaint],Mr.prototype,"hidden",1),__decorateClass$3([attributeChanged("justify"),repaint],Mr.prototype,"justify",1),__decorateClass$3([attributeChanged("spacing"),repaint],Mr.prototype,"spacing",1),__decorateClass$3([P.click("*"),dispatchEvent("click")],Mr.prototype,"click",1),__decorateClass$3([didPaint],Mr.prototype,kr,1),Mr=__decorateClass$3([define("m-stack"),paint((function component$3(){return html`
    <slot></slot>
  `}),(function style$3(t){return css`
    :host {
      align-items: ${t.align};
      display: flex;
      flex-direction: ${t.direction};
      gap: var(--spacing_inset-${t.spacing});
      justify-content: ${t.justify};
      width: 100%;
    }
  `}))],Mr);var Sr,Tr=Object.defineProperty,Wr=Object.getOwnPropertyDescriptor,__typeError$2=t=>{throw TypeError(t)},__decorateClass$2=(t,e,r,o)=>{for(var a,i=o>1?void 0:o?Wr(e,r):e,n=t.length-1;n>=0;n--)(a=t[n])&&(i=(o?a(e,r,i):a(i))||i);return o&&i&&Tr(e,r,i),i},__accessCheck$2=(t,e,r)=>e.has(t)||__typeError$2("Cannot "+r),__privateSet$2=(t,e,r,o)=>(__accessCheck$2(t,e,"write to private field"),e.set(t,r),r);let Cr=class extends HTMLElement{constructor(){var t,e,r;super(),t=this,(e=Sr).has(t)?__typeError$2("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),this.attachShadow({mode:"open"})}get color(){return __accessCheck$2(t=this,e=Sr,"read from private field"),(r?r.call(t):e.get(t))??__privateSet$2(this,Sr,"primary");var t,e,r}set color(t){__privateSet$2(this,Sr,t)}};Sr=new WeakMap,__decorateClass$2([attributeChanged("color"),repaint],Cr.prototype,"color",1),Cr=__decorateClass$2([define("m-tag"),paint((function component$2(){return html`
    <span>
      <slot></slot>
    </span>
  `}),(function style$2(t){return css`
    :host {
      span {
        align-items: center;
        background-color: var(--color-${t.color}-lighter);
        border: var(--border-width-hairline) solid transparent;
        border-radius: var(--border-radius-xs);
        box-sizing: border-box;
        color: var(--color-${t.color}-darker);
        cursor: pointer;
        display: flex;
        font-family: var(--font-family-base);
        font-size: var(--font-size-xxxs);
        font-weight: var(--font-weight-medium);
        gap: var(--spacing_inset-nano);
        justify-content: center;
        letter-spacing: 0.38px;
        line-height: var(--line-height-default);
        padding: var(--spacing_inset-quarck) var(--spacing_inset-nano);
        position: relative;
        transition: all 0.2s ease-out;
      }
    }
  `}))],Cr);var Lr,zr,Dr,Rr,Ar,qr,Vr=Object.defineProperty,Ir=Object.getOwnPropertyDescriptor,__typeError$1=t=>{throw TypeError(t)},__decorateClass$1=(t,e,r,o)=>{for(var a,i=o>1?void 0:o?Ir(e,r):e,n=t.length-1;n>=0;n--)(a=t[n])&&(i=(o?a(e,r,i):a(i))||i);return o&&i&&Vr(e,r,i),i},__accessCheck$1=(t,e,r)=>e.has(t)||__typeError$1("Cannot "+r),__privateGet$1=(t,e,r)=>(__accessCheck$1(t,e,"read from private field"),r?r.call(t):e.get(t)),__privateAdd$1=(t,e,r)=>e.has(t)?__typeError$1("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),__privateSet$1=(t,e,r,o)=>(__accessCheck$1(t,e,"write to private field"),e.set(t,r),r);let Hr=class extends HTMLElement{constructor(){super(),__privateAdd$1(this,Lr),__privateAdd$1(this,zr),__privateAdd$1(this,Dr),__privateAdd$1(this,Rr),__privateAdd$1(this,Ar),__privateAdd$1(this,qr),this.attachShadow({mode:"open"})}get align(){return __privateGet$1(this,Lr)??__privateSet$1(this,Lr,"left")}set align(t){__privateSet$1(this,Lr,t)}get color(){return __privateGet$1(this,zr)??__privateSet$1(this,zr,"master-dark")}set color(t){__privateSet$1(this,zr,t)}get family(){return __privateGet$1(this,Dr)??__privateSet$1(this,Dr,"base")}set family(t){__privateSet$1(this,Dr,t)}get lineHeight(){return __privateGet$1(this,Rr)??__privateSet$1(this,Rr,"lg")}set lineHeight(t){__privateSet$1(this,Rr,t)}get size(){return __privateGet$1(this,Ar)??__privateSet$1(this,Ar,"xxs")}set size(t){__privateSet$1(this,Ar,t)}get weight(){return __privateGet$1(this,qr)??__privateSet$1(this,qr,"regular")}set weight(t){__privateSet$1(this,qr,t)}};Lr=new WeakMap,zr=new WeakMap,Dr=new WeakMap,Rr=new WeakMap,Ar=new WeakMap,qr=new WeakMap,__decorateClass$1([attributeChanged("align"),repaint],Hr.prototype,"align",1),__decorateClass$1([attributeChanged("color"),repaint],Hr.prototype,"color",1),__decorateClass$1([attributeChanged("family"),repaint],Hr.prototype,"family",1),__decorateClass$1([attributeChanged("line-height"),repaint],Hr.prototype,"lineHeight",1),__decorateClass$1([attributeChanged("size"),repaint],Hr.prototype,"size",1),__decorateClass$1([attributeChanged("weight"),repaint],Hr.prototype,"weight",1),Hr=__decorateClass$1([define("m-text"),paint((function component$1(){return html`
    <slot></slot>
  `}),(function style$1(t){return css`
    :host {
      color: var(--color-${t.color});
      font-family: var(--font-family-${t.family});
      font-size: var(--font-size-${t.size});
      font-weight: var(--font-weight-${t.weight});
      letter-spacing: 0.38px;
      line-height: var(--line-height-${t.lineHeight});
      text-align: ${t.align};
    }
  `}))],Hr);const attachEventListener=(t,...e)=>(r,o)=>{intercept(p).in(r).then((function(){const r={signal:(this[$]??(this[$]=new AbortController)).signal};this.parentElement.addEventListener(t,(t=>{this[o](e.reduce(((t,e)=>e(t)),t))}),r)})),intercept(u).in(r).then((function(){this[$].abort()}))},Fr=new Proxy({},{get:(t,e)=>(...t)=>attachEventListener(e,...t)});const Nr=Symbol("setState");var Br,Zr,Ur,Kr=Object.defineProperty,Gr=Object.getOwnPropertyDescriptor,__typeError2=t=>{throw TypeError(t)},__decorateClass=(t,e,r,o)=>{for(var a,i=o>1?void 0:o?Gr(e,r):e,n=t.length-1;n>=0;n--)(a=t[n])&&(i=(o?a(e,r,i):a(i))||i);return o&&i&&Kr(e,r,i),i},__accessCheck2=(t,e,r)=>e.has(t)||__typeError2("Cannot "+r),__privateGet2=(t,e,r)=>(__accessCheck2(t,e,"read from private field"),r?r.call(t):e.get(t)),__privateAdd2=(t,e,r)=>e.has(t)?__typeError2("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),__privateSet2=(t,e,r,o)=>(__accessCheck2(t,e,"write to private field"),e.set(t,r),r);let Jr=class extends HTMLElement{constructor(){super(),__privateAdd2(this,Zr),__privateAdd2(this,Ur),this.attachShadow({mode:"open"}),__privateSet2(this,Zr,this.attachInternals())}get state(){return __privateGet2(this,Ur)}set state(t){__privateSet2(this,Ur,t)}[Br=Nr](){return this.parentElement.validity[this.state]?__privateGet2(this,Zr).states.add("invalid"):__privateGet2(this,Zr).states.delete("invalid"),this}};Zr=new WeakMap,Ur=new WeakMap,__decorateClass([attributeChanged("state")],Jr.prototype,"state",1),__decorateClass([Fr.change(),Fr.invalid(prevent)],Jr.prototype,Br,1),Jr=__decorateClass([define("m-validity"),paint((function component(){return html`
    <slot></slot>
  `}),(function style(){return css`
    :host {
      color: var(--color-danger-dark);
      display: none;
      font-family: var(--font-family-base);
      font-size: var(--font-size-xxs);
      font-weight: var(--font-weight-regular);
      letter-spacing: 0.38px;
      line-height: var(--line-height-lg);
      transition: all 0.2s ease-out;
    }

    :host(:state(invalid)) {
      display: inline;
    }
  `}))],Jr);const Qr=document.querySelector("app");function renderer(t){Qr.innerHTML=t}router("/app/deck/:deck/card",(function cardOfDeck(){l((()=>import("./app-DSg1mRnU.js")),__vite__mapDeps([2,3])),renderer("<m-card></m-card>")})),router("/app/card",(function card(){l((()=>import("./app-DSg1mRnU.js")),__vite__mapDeps([2,3])),renderer("<m-card></m-card>")})),router("/app/deck/:deck/card/create",(function createCard(){l((()=>import("./app-Dld1f9Ik.js")),__vite__mapDeps([4,5])),renderer("<m-create-card></m-create-card>")})),router("/app/deck/create",(function createDeck(){l((()=>import("./app-CTN3_M3o.js")),__vite__mapDeps([6,5])),renderer("<m-create-deck></m-create-deck>")})),router("/app/dashboard",(function dashboard(){l((()=>import("./app-Ch29VOXz.js")),__vite__mapDeps([7,3,8])),renderer("<m-dashboard></m-dashboard>")})),router("/app/deck/:deck",(function deck(){l((()=>import("./app-CR9hjj_I.js")),__vite__mapDeps([9,3])),renderer("<m-deck></m-deck>")})),router("/app/deck/:deck/card/:card/edit",(function editCard(){l((()=>import("./app-CBNQMjbv.js")),__vite__mapDeps([10,3,5])),renderer("<m-edit-card></m-edit-card>")})),router("/app/deck/:deck/edit",(function editDeck(){l((()=>import("./app-tlnKogLv.js")),__vite__mapDeps([11,3,5])),renderer("<m-edit-deck></m-edit-deck>")})),router("/app/how-works",(function howWorks(){l((()=>import("./app-Covy-aOZ.js")),[]),renderer("<m-how-works></m-how-works>")})),router("/app/study-completed",(function studyCompleted(){l((()=>import("./app-C_HQrxYQ.js")),[]),renderer("<m-study-completed></m-study-completed>")})),router("/app/study-completed/deck/:deck",(function studyCompletedOfDeck(){l((()=>import("./app-C_HQrxYQ.js")),[]),renderer("<m-study-completed></m-study-completed>")})),router("/oauth/email-verification",(function emailVerification(){l((()=>import("./oauth-Di6jSFgw.js")),__vite__mapDeps([12,13,14,3,8,15])),renderer("<m-email-verification></m-email-verification>")})),router("/oauth/forgot-password",(function forgotPassword(){l((()=>import("./oauth-DyxxHEPl.js")),__vite__mapDeps([16,14,3,5,15,13])),renderer("<m-forgot-password></m-forgot-password>")})),router("/oauth/email-verification",(function emailVerification2(){l((()=>import("./oauth-DpeVctl7.js")),__vite__mapDeps([17,13,14,3,8,15])),renderer("<m-email-verification></m-email-verification>")})),router("/oauth/set-new-password",(function forgotPassword2(){l((()=>import("./oauth-Bv4yUxPM.js")),__vite__mapDeps([18,14,3,5,8,15])),renderer("<m-set-new-password></m-set-new-password>")})),router("/oauth/sign-in",(function signIn(){l((()=>import("./oauth-p5BjelZW.js")),__vite__mapDeps([19,3,5,8,15,14])),renderer("<m-sign-in></m-sign-in>")})),router("/oauth/sign-out",(function signOut(){l((()=>import("./oauth-DBCUK8i1.js")),__vite__mapDeps([20,14])),renderer("<m-sign-out></m-sign-out>")})),router("/oauth/sign-up",(function signUp(){l((()=>import("./oauth-HgYRd-dV.js")),__vite__mapDeps([21,14,3,5,8,15])),renderer("<m-sign-up></m-sign-up>")})),router("/",(function site(){l((()=>import("./site-D8bdLeqk.js")),__vite__mapDeps([22,3,8,15])),renderer("<m-site></m-site>")})),window.addEventListener("popstate",router.handle),window.addEventListener("pushstate",router.handle),router.handle();export{Echo as E,l as _,attributeChanged as a,booleanAttribute as b,css as c,define as d,P as e,paint as f,dispatchEvent as g,html as h,o as i,prevent as j,goToSignIn as k,intercept as l,exec as m,a as p,repaint as r,stop as s,urlFor as u,v as w};
