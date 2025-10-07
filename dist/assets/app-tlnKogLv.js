const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-sHk9Weim.js","assets/_commonjsHelpers-CyphlAKp.js","assets/index-C5mZ2f1n.js","assets/index-6JJOnoOU.css"])))=>i.map(i=>d[i]);
var e,t,a,__typeError=e=>{throw TypeError(e)},__accessCheck=(e,t,a)=>t.has(e)||__typeError("Cannot "+a),__privateGet=(e,t,a)=>(__accessCheck(e,t,"read from private field"),a?a.call(e):t.get(e)),__privateAdd=(e,t,a)=>t.has(e)?__typeError("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),__privateSet=(e,t,a,r)=>(__accessCheck(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a);import{h as r,u as i,p as o,_ as s,e as n,s as d,r as c,d as m,f as l,c as u}from"./index-C5mZ2f1n.js";import{w as p}from"./willPaint-B74CwLKT.js";import{v as h}from"./detail-D5hbE-Va.js";let f=(t=class{constructor(t){__privateAdd(this,e),__privateSet(this,e,t)}get id(){return __privateGet(this,e).id}get paused(){var t;return(t=__privateGet(this,e)).paused??(t.paused=!1)}async delete(){const{default:t}=await s((async()=>{const{default:e}=await import("./index-sHk9Weim.js");return{default:e}}),__vite__mapDeps([0,1,2,3]));return await t.from("deck").delete().eq("id",this.id),__privateSet(this,e,{}),this}async pause(){const{default:t}=await s((async()=>{const{default:e}=await import("./index-sHk9Weim.js");return{default:e}}),__vite__mapDeps([0,1,2,3])),{data:a}=await t.from("deck").update({paused:!0}).eq("id",this.id).select().single();return __privateSet(this,e,a),this}async play(){const{default:t}=await s((async()=>{const{default:e}=await import("./index-sHk9Weim.js");return{default:e}}),__vite__mapDeps([0,1,2,3])),{data:a}=await t.from("deck").update({paused:!1}).eq("id",this.id).select().single();return __privateSet(this,e,a),this}static async current(){const{default:e}=await s((async()=>{const{default:e}=await import("./index-sHk9Weim.js");return{default:e}}),__vite__mapDeps([0,1,2,3])),{data:a}=await e.from("deck").select("id, paused").eq("id",o.deck).single();return new t(a)}},e=new WeakMap,t);const w=Symbol("hydrate"),y={goToDashboard(){return history.pushState({},"",i("dashboard")),this}};var g,k,v=Object.defineProperty,x=Object.getOwnPropertyDescriptor,__typeError$1=e=>{throw TypeError(e)},__decorateClass$1=(e,t,a,r)=>{for(var i,o=r>1?void 0:r?x(t,a):t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=(r?i(t,a,o):i(o))||o);return r&&o&&v(t,a,o),o},__accessCheck$1=(e,t,a)=>t.has(e)||__typeError$1("Cannot "+a),__privateSet$1=(e,t,a,r)=>(__accessCheck$1(e,t,"write to private field"),t.set(e,a),a);let _=class extends HTMLElement{constructor(){var e,t,a;super(),e=this,(t=k).has(e)?__typeError$1("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),this.attachShadow({mode:"open"})}get deck(){return __accessCheck$1(e=this,t=k,"read from private field"),(a?a.call(e):t.get(e))??__privateSet$1(this,k,{});var e,t,a}async delete(){return await this.deck.delete(),y.goToDashboard(),this}async pause(){return await this.deck.pause(),this}async play(){return await this.deck.play(),this}async[g=w](){return __privateSet$1(this,k,await f.current()),this}};k=new WeakMap,__decorateClass$1([n.click("#delete",d)],_.prototype,"delete",1),__decorateClass$1([n.click("#pause",d),c],_.prototype,"pause",1),__decorateClass$1([n.click("#play",d),c],_.prototype,"play",1),__decorateClass$1([p],_.prototype,g,1),_=__decorateClass$1([m("m-edit-deck-header"),l((function component$1(e){return r`
    <m-header>
      <m-button slot="leading" id="backToDeck" variant="icon">
        <m-icon use="arrowBack"></m-icon>
        <m-redirect href="${i("deck",o)}" on="backToDeck/click:method/go"></m-redirect>
      </m-button>
      <m-show when="${e.deck.paused}" slot="trailing">
        <m-stack align="center">
          <m-tag color="danger">Pausado para estudo</m-tag>
          <m-button id="play" color="danger" variant="icon">
            <m-icon use="play"></m-icon>
          </m-button>
        </m-stack>
      </m-show>
      <m-hide when="${e.deck.paused}" slot="trailing">
        <m-button id="pause" color="danger" variant="icon">
          <m-icon use="pause"></m-icon>
        </m-button>
      </m-hide>
      <m-button slot="trailing" id="delete" color="danger" variant="icon">
        <m-icon use="delete"></m-icon>
      </m-button>
    </m-header>
  `}))],_);a=new WeakMap;let b=class _Deck{constructor(e){__privateAdd(this,a),__privateSet(this,a,e)}get cover(){return __privateGet(this,a).cover}get description(){return __privateGet(this,a).description}get id(){return __privateGet(this,a).id}get name(){return __privateGet(this,a).name}async update(e){const{default:t}=await s((async()=>{const{default:e}=await import("./index-sHk9Weim.js");return{default:e}}),__vite__mapDeps([0,1,2,3])),{data:r}=await t.from("deck").update(e).eq("id",this.id).select().single();return __privateSet(this,a,r),this}static async current(){const{default:e}=await s((async()=>{const{default:e}=await import("./index-sHk9Weim.js");return{default:e}}),__vite__mapDeps([0,1,2,3])),{data:t}=await e.from("deck").select("id, cover, description, name, user_id").eq("id",o.deck).single();return new _Deck(t)}};const E=Symbol("hydrate"),D={goToDeck(){return history.pushState({},"",i("deck",o)),this}};var T,j,O=Object.defineProperty,P=Object.getOwnPropertyDescriptor,__typeError2=e=>{throw TypeError(e)},__decorateClass=(e,t,a,r)=>{for(var i,o=r>1?void 0:r?P(t,a):t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=(r?i(t,a,o):i(o))||o);return r&&o&&O(t,a,o),o},__accessCheck2=(e,t,a)=>t.has(e)||__typeError2("Cannot "+a),__privateSet2=(e,t,a,r)=>(__accessCheck2(e,t,"write to private field"),t.set(e,a),a);let L=class extends HTMLElement{constructor(){var e,t,a;super(),e=this,(t=j).has(e)?__typeError2("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),this.attachShadow({mode:"open"})}get deck(){return __accessCheck2(e=this,t=j,"read from private field"),(a?a.call(e):t.get(e))??__privateSet2(this,j,{});var e,t,a}async update(e){return await this.deck.update(e),D.goToDeck(),this}async[T=E](){return __privateSet2(this,j,await b.current()),this}};j=new WeakMap,__decorateClass([n.submit("m-form",d,h)],L.prototype,"update",1),__decorateClass([p],L.prototype,T,1),L=__decorateClass([m("m-edit-deck"),l((function component(e){return r`
    <m-edit-deck-header></m-edit-deck-header>
    <m-main>
      <app>
        <m-text color="master-darker" size="md" weight="bold" family="highlight">
          Atualizar coleção
        </m-text>
        <m-form>
          <template>
            <m-input id="cover" label="Imagem de capa (URL)" name="cover" type="url" maxlength="256" value="${e.deck.cover}">
              <m-cover slot="preview" aspect="wide" src="${e.deck.cover}" on="cover/change:attribute/src"></m-cover>
              <m-validity state="typeMismatch">URL inválida</m-validity>
              <m-text size="xxxs" color="info">Insira o link de uma imagem para representar a coleção.</m-text>
            </m-input>
            <m-input label="Nome" name="name" maxlength="64" value="${e.deck.name}" required>
              <m-validity state="valueMissing">Nome é obrigatório</m-validity>
              <m-text size="xxxs" color="info">Escolha um nome curto e descritivo para sua coleção.</m-text>
            </m-input>
            <m-area label="Descrição" name="description" maxlength="256" value="${e.deck.description}">
              <m-text size="xxxs" color="info">Adicione uma breve descrição sobre o conteúdo desta coleção.</m-text>
            </m-area>
            <m-button width="100%">
              Atualizar coleção
            </m-button>
          </template>
        </m-form>
      </app>
    </m-main>
    <m-footer></m-footer>
  `}),(function style(){return u`
    app {
      align-items: start;
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-lg);
      justify-content: start;
      margin: 0 auto;
      max-width: 768px;
      min-height: calc(100svh - (144px + 32px));
      width: 100%;
    }
  `}))],L);const A=L;export{A as default};
