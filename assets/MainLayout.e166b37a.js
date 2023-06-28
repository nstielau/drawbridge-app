import{c as O,h as I,a as tt,u as qt,b as Ct,v as kt,d as Qe,g as Lt,e as St,f as Tt,i as Re,j as xt,Q as _t,k as We}from"./QBtn.54dc9b30.js";import{c as v,h as k,r as x,i as lt,o as Y,a as N,n as Ee,d as U,g as V,l as D,e as H,w as C,f as Be,j as de,k as Et,s as ze,H as Fe,m as P,p as Bt,q as zt,P as $t,t as Ot,u as oe,v as ye,x as Ae,y as ge,z as xe,A as we,B as Pt,C as ot,D as Dt,E as ne,F as Vt,_ as Mt,G as Ht,I as Qt,J as Rt,K as E,L as S,M as J,N as Wt,O as Ft,Q as At}from"./index.e494d06e.js";var Nt=O({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:l}){const o=v(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>k("div",{class:o.value},I(l.default))}}),It=O({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:l}){const o=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>k("div",{class:o.value,role:"toolbar"},I(l.default))}});function Xt(){const e=x(!lt.value);return e.value===!1&&Y(()=>{e.value=!0}),e}const nt=typeof ResizeObserver!="undefined",Ne=nt===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var _e=O({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:l}){let o=null,i,t={width:-1,height:-1};function n(c){c===!0||e.debounce===0||e.debounce==="0"?s():o===null&&(o=setTimeout(s,e.debounce))}function s(){if(o!==null&&(clearTimeout(o),o=null),i){const{offsetWidth:c,offsetHeight:d}=i;(c!==t.width||d!==t.height)&&(t={width:c,height:d},l("resize",t))}}const{proxy:f}=V();if(nt===!0){let c;const d=a=>{i=f.$el.parentNode,i?(c=new ResizeObserver(n),c.observe(i),s()):a!==!0&&U(()=>{d(!0)})};return Y(()=>{d()}),N(()=>{o!==null&&clearTimeout(o),c!==void 0&&(c.disconnect!==void 0?c.disconnect():i&&c.unobserve(i))}),Ee}else{let a=function(){o!==null&&(clearTimeout(o),o=null),d!==void 0&&(d.removeEventListener!==void 0&&d.removeEventListener("resize",n,D.passive),d=void 0)},w=function(){a(),i&&i.contentDocument&&(d=i.contentDocument.defaultView,d.addEventListener("resize",n,D.passive),s())};const c=Xt();let d;return Y(()=>{U(()=>{i=f.$el,i&&w()})}),N(a),f.trigger=n,()=>{if(c.value===!0)return k("object",{style:Ne.style,tabindex:-1,type:"text/html",data:Ne.url,"aria-hidden":"true",onLoad:w})}}}}),jt=O({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:l,emit:o}){const{proxy:{$q:i}}=V(),t=Be(de,H);if(t===H)return console.error("QHeader needs to be child of QLayout"),H;const n=x(parseInt(e.heightHint,10)),s=x(!0),f=v(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||i.platform.is.ios&&t.isContainer.value===!0),c=v(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return s.value===!0?n.value:0;const u=n.value-t.scroll.value.position;return u>0?u:0}),d=v(()=>e.modelValue!==!0||f.value===!0&&s.value!==!0),a=v(()=>e.modelValue===!0&&d.value===!0&&e.reveal===!0),w=v(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(d.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),q=v(()=>{const u=t.rows.value.top,b={};return u[0]==="l"&&t.left.space===!0&&(b[i.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),u[2]==="r"&&t.right.space===!0&&(b[i.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),b});function m(u,b){t.update("header",u,b)}function h(u,b){u.value!==b&&(u.value=b)}function _({height:u}){h(n,u),m("size",u)}function L(u){a.value===!0&&h(s,!0),o("focusin",u)}C(()=>e.modelValue,u=>{m("space",u),h(s,!0),t.animate()}),C(c,u=>{m("offset",u)}),C(()=>e.reveal,u=>{u===!1&&h(s,e.modelValue)}),C(s,u=>{t.animate(),o("reveal",u)}),C(t.scroll,u=>{e.reveal===!0&&h(s,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const g={};return t.instances.header=g,e.modelValue===!0&&m("size",n.value),m("space",e.modelValue),m("offset",c.value),N(()=>{t.instances.header===g&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const u=tt(l.default,[]);return e.elevated===!0&&u.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(k(_e,{debounce:0,onResize:_})),k("header",{class:w.value,style:q.value,onFocusin:L},u)}}}),ie=O({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:l}){const o=v(()=>parseInt(e.lines,10)),i=v(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(o.value===1?" ellipsis":"")),t=v(()=>e.lines!==void 0&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null);return()=>k("div",{style:t.value,class:i.value},I(l.default))}}),ae=O({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:l}){const o=v(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>k("div",{class:o.value},I(l.default))}});const $e={dark:{type:Boolean,default:null}};function Oe(e,l){return v(()=>e.dark===null?l.dark.isActive:e.dark)}var Ie=O({name:"QItem",props:{...$e,...qt,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:l,emit:o}){const{proxy:{$q:i}}=V(),t=Oe(e,i),{hasLink:n,linkAttrs:s,linkClass:f,linkTag:c,navigateOnClick:d}=Ct(),a=x(null),w=x(null),q=v(()=>e.clickable===!0||n.value===!0||e.tag==="label"),m=v(()=>e.disable!==!0&&q.value===!0),h=v(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(n.value===!0&&e.active===null?f.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(m.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),_=v(()=>{if(e.insetLevel===void 0)return null;const b=i.lang.rtl===!0?"Right":"Left";return{["padding"+b]:16+e.insetLevel*56+"px"}});function L(b){m.value===!0&&(w.value!==null&&(b.qKeyEvent!==!0&&document.activeElement===a.value?w.value.focus():document.activeElement===w.value&&a.value.focus()),d(b))}function g(b){if(m.value===!0&&Et(b,13)===!0){ze(b),b.qKeyEvent=!0;const p=new MouseEvent("click",b);p.qKeyEvent=!0,a.value.dispatchEvent(p)}o("keyup",b)}function u(){const b=tt(l.default,[]);return m.value===!0&&b.unshift(k("div",{class:"q-focus-helper",tabindex:-1,ref:w})),b}return()=>{const b={ref:a,class:h.value,style:_.value,role:"listitem",onClick:L,onKeyup:g};return m.value===!0?(b.tabindex=e.tabindex||"0",Object.assign(b,s.value)):q.value===!0&&(b["aria-disabled"]="true"),k(c.value,b,u())}}}),Yt=O({name:"QList",props:{...$e,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:l}){const o=V(),i=Oe(e,o.proxy.$q),t=v(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>k(e.tag,{class:t.value},I(l.default))}});function Ut(e,l,o){let i;function t(){i!==void 0&&(Fe.remove(i),i=void 0)}return N(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){i={condition:()=>o.value===!0,handler:l},Fe.add(i)}}}const Kt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Gt=["beforeShow","show","beforeHide","hide"];function Jt({showing:e,canShow:l,hideOnRouteChange:o,handleShow:i,handleHide:t,processOnMount:n}){const s=V(),{props:f,emit:c,proxy:d}=s;let a;function w(u){e.value===!0?h(u):q(u)}function q(u){if(f.disable===!0||u!==void 0&&u.qAnchorHandled===!0||l!==void 0&&l(u)!==!0)return;const b=f["onUpdate:modelValue"]!==void 0;b===!0&&(c("update:modelValue",!0),a=u,U(()=>{a===u&&(a=void 0)})),(f.modelValue===null||b===!1)&&m(u)}function m(u){e.value!==!0&&(e.value=!0,c("beforeShow",u),i!==void 0?i(u):c("show",u))}function h(u){if(f.disable===!0)return;const b=f["onUpdate:modelValue"]!==void 0;b===!0&&(c("update:modelValue",!1),a=u,U(()=>{a===u&&(a=void 0)})),(f.modelValue===null||b===!1)&&_(u)}function _(u){e.value!==!1&&(e.value=!1,c("beforeHide",u),t!==void 0?t(u):c("hide",u))}function L(u){f.disable===!0&&u===!0?f["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):u===!0!==e.value&&(u===!0?m:_)(a)}C(()=>f.modelValue,L),o!==void 0&&kt(s)===!0&&C(()=>d.$route.fullPath,()=>{o.value===!0&&e.value===!0&&h()}),n===!0&&Y(()=>{L(f.modelValue)});const g={show:q,hide:h,toggle:w};return Object.assign(d,g),g}const Zt=[null,document,document.body,document.scrollingElement,document.documentElement];function el(e,l){let o=Lt(l);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return Zt.includes(o)?window:o}function it(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function at(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let re;function qe(){if(re!==void 0)return re;const e=document.createElement("p"),l=document.createElement("div");Qe(e,{width:"100%",height:"200px"}),Qe(l,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),l.appendChild(e),document.body.appendChild(l);const o=e.offsetWidth;l.style.overflow="scroll";let i=e.offsetWidth;return o===i&&(i=l.clientWidth),l.remove(),re=o-i,re}function tl(e,l=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:l?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let Z=0,Ce,ke,ee,Le=!1,Xe,je,Ye,A=null;function ll(e){ol(e)&&ze(e)}function ol(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const l=Bt(e),o=e.shiftKey&&!e.deltaX,i=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=o||i?e.deltaY:e.deltaX;for(let n=0;n<l.length;n++){const s=l[n];if(tl(s,i))return i?t<0&&s.scrollTop===0?!0:t>0&&s.scrollTop+s.clientHeight===s.scrollHeight:t<0&&s.scrollLeft===0?!0:t>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function Ue(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function ue(e){Le!==!0&&(Le=!0,requestAnimationFrame(()=>{Le=!1;const{height:l}=e.target,{clientHeight:o,scrollTop:i}=document.scrollingElement;(ee===void 0||l!==window.innerHeight)&&(ee=o-l,document.scrollingElement.scrollTop=i),i>ee&&(document.scrollingElement.scrollTop-=Math.ceil((i-ee)/8))}))}function Ke(e){const l=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:i,overflowX:t}=window.getComputedStyle(l);Ce=at(window),ke=it(window),Xe=l.style.left,je=l.style.top,Ye=window.location.href,l.style.left=`-${Ce}px`,l.style.top=`-${ke}px`,t!=="hidden"&&(t==="scroll"||l.scrollWidth>window.innerWidth)&&l.classList.add("q-body--force-scrollbar-x"),i!=="hidden"&&(i==="scroll"||l.scrollHeight>window.innerHeight)&&l.classList.add("q-body--force-scrollbar-y"),l.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,P.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",ue,D.passiveCapture),window.visualViewport.addEventListener("scroll",ue,D.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ue,D.passiveCapture))}P.is.desktop===!0&&P.is.mac===!0&&window[`${e}EventListener`]("wheel",ll,D.notPassive),e==="remove"&&(P.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",ue,D.passiveCapture),window.visualViewport.removeEventListener("scroll",ue,D.passiveCapture)):window.removeEventListener("scroll",Ue,D.passiveCapture)),l.classList.remove("q-body--prevent-scroll"),l.classList.remove("q-body--force-scrollbar-x"),l.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,l.style.left=Xe,l.style.top=je,window.location.href===Ye&&window.scrollTo(Ce,ke),ee=void 0)}function nl(e){let l="add";if(e===!0){if(Z++,A!==null){clearTimeout(A),A=null;return}if(Z>1)return}else{if(Z===0||(Z--,Z>0))return;if(l="remove",P.is.ios===!0&&P.is.nativeMobile===!0){A!==null&&clearTimeout(A),A=setTimeout(()=>{Ke(l),A=null},100);return}}Ke(l)}function il(){let e;return{preventBodyScroll(l){l!==e&&(e!==void 0||l===!0)&&(e=l,nl(l))}}}function al(){let e=null;const l=V();function o(){e!==null&&(clearTimeout(e),e=null)}return zt(o),N(o),{removeTimeout:o,registerTimeout(i,t){o(),St(l)===!1&&(e=setTimeout(i,t))}}}const Pe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},rl=Object.keys(Pe);Pe.all=!0;function Ge(e){const l={};for(const o of rl)e[o]===!0&&(l[o]=!0);return Object.keys(l).length===0?Pe:(l.horizontal===!0?l.left=l.right=!0:l.left===!0&&l.right===!0&&(l.horizontal=!0),l.vertical===!0?l.up=l.down=!0:l.up===!0&&l.down===!0&&(l.vertical=!0),l.horizontal===!0&&l.vertical===!0&&(l.all=!0),l)}function Je(e,l){return l.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof l.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(l.uid)===-1)}function ul(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),$t.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Se(e,l,o){const i=xe(e);let t,n=i.left-l.event.x,s=i.top-l.event.y,f=Math.abs(n),c=Math.abs(s);const d=l.direction;d.horizontal===!0&&d.vertical!==!0?t=n<0?"left":"right":d.horizontal!==!0&&d.vertical===!0?t=s<0?"up":"down":d.up===!0&&s<0?(t="up",f>c&&(d.left===!0&&n<0?t="left":d.right===!0&&n>0&&(t="right"))):d.down===!0&&s>0?(t="down",f>c&&(d.left===!0&&n<0?t="left":d.right===!0&&n>0&&(t="right"))):d.left===!0&&n<0?(t="left",f<c&&(d.up===!0&&s<0?t="up":d.down===!0&&s>0&&(t="down"))):d.right===!0&&n>0&&(t="right",f<c&&(d.up===!0&&s<0?t="up":d.down===!0&&s>0&&(t="down")));let a=!1;if(t===void 0&&o===!1){if(l.event.isFirst===!0||l.event.lastDir===void 0)return{};t=l.event.lastDir,a=!0,t==="left"||t==="right"?(i.left-=n,f=0,n=0):(i.top-=s,c=0,s=0)}return{synthetic:a,payload:{evt:e,touch:l.event.mouse!==!0,mouse:l.event.mouse===!0,position:i,direction:t,isFirst:l.event.isFirst,isFinal:o===!0,duration:Date.now()-l.event.time,distance:{x:f,y:c},offset:{x:n,y:s},delta:{x:i.left-l.event.lastX,y:i.top-l.event.lastY}}}}let sl=0;var Te=Tt({name:"touch-pan",beforeMount(e,{value:l,modifiers:o}){if(o.mouse!==!0&&P.has.touch!==!0)return;function i(n,s){o.mouse===!0&&s===!0?ze(n):(o.stop===!0&&ge(n),o.prevent===!0&&Ae(n))}const t={uid:"qvtp_"+sl++,handler:l,modifiers:o,direction:Ge(o),noop:Ee,mouseStart(n){Je(n,t)&&Ot(n)&&(oe(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(n,!0))},touchStart(n){if(Je(n,t)){const s=n.target;oe(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(n)}},start(n,s){if(P.is.firefox===!0&&ye(e,!0),t.lastEvt=n,s===!0||o.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const d=n.type.indexOf("mouse")>-1?new MouseEvent(n.type,n):new TouchEvent(n.type,n);n.defaultPrevented===!0&&Ae(d),n.cancelBubble===!0&&ge(d),Object.assign(d,{qKeyEvent:n.qKeyEvent,qClickOutside:n.qClickOutside,qAnchorHandled:n.qAnchorHandled,qClonedBy:n.qClonedBy===void 0?[t.uid]:n.qClonedBy.concat(t.uid)}),t.initialEvent={target:n.target,event:d}}ge(n)}const{left:f,top:c}=xe(n);t.event={x:f,y:c,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:c}},move(n){if(t.event===void 0)return;const s=xe(n),f=s.left-t.event.x,c=s.top-t.event.y;if(f===0&&c===0)return;t.lastEvt=n;const d=t.event.mouse===!0,a=()=>{i(n,d);let m;o.preserveCursor!==!0&&o.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),d===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ul(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),d===!0){const _=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{_(),h()},50):_()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&i(n,t.event.mouse);const{payload:m,synthetic:h}=Se(n,t,!1);m!==void 0&&(t.handler(m)===!1?t.end(n):(t.styleCleanup===void 0&&t.event.isFirst===!0&&a(),t.event.lastX=m.position.left,t.event.lastY=m.position.top,t.event.lastDir=h===!0?void 0:m.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||d===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){a(),t.event.detected=!0,t.move(n);return}const w=Math.abs(f),q=Math.abs(c);w!==q&&(t.direction.horizontal===!0&&w>q||t.direction.vertical===!0&&w<q||t.direction.up===!0&&w<q&&c<0||t.direction.down===!0&&w<q&&c>0||t.direction.left===!0&&w>q&&f<0||t.direction.right===!0&&w>q&&f>0?(t.event.detected=!0,t.move(n)):t.end(n,!0))},end(n,s){if(t.event!==void 0){if(we(t,"temp"),P.is.firefox===!0&&ye(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Se(n===void 0?t.lastEvt:n,t).payload);const{payload:f}=Se(n===void 0?t.lastEvt:n,t,!0),c=()=>{t.handler(f)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,o.mouse===!0){const n=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";oe(t,"main",[[e,"mousedown","mouseStart",`passive${n}`]])}P.has.touch===!0&&oe(t,"main",[[e,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,l){const o=e.__qtouchpan;o!==void 0&&(l.oldValue!==l.value&&(typeof value!="function"&&o.end(),o.handler=l.value),o.direction=Ge(l.modifiers))},beforeUnmount(e){const l=e.__qtouchpan;l!==void 0&&(l.event!==void 0&&l.end(),we(l,"main"),we(l,"temp"),P.is.firefox===!0&&ye(e,!1),l.styleCleanup!==void 0&&l.styleCleanup(),delete e.__qtouchpan)}});function se(e,l,o){return o<=l?l:Math.min(o,Math.max(l,e))}const Ze=150;var dl=O({name:"QDrawer",inheritAttrs:!1,props:{...Kt,...$e,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Gt,"onLayout","miniState"],setup(e,{slots:l,emit:o,attrs:i}){const t=V(),{proxy:{$q:n}}=t,s=Oe(e,n),{preventBodyScroll:f}=il(),{registerTimeout:c,removeTimeout:d}=al(),a=Be(de,H);if(a===H)return console.error("QDrawer needs to be child of QLayout"),H;let w,q=null,m;const h=x(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),_=v(()=>e.mini===!0&&h.value!==!0),L=v(()=>_.value===!0?e.miniWidth:e.width),g=x(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),u=v(()=>e.persistent!==!0&&(h.value===!0||rt.value===!0));function b(r,y){if(W(),r!==!1&&a.animate(),$(0),h.value===!0){const B=a.instances[te.value];B!==void 0&&B.belowBreakpoint===!0&&B.hide(!1),Q(1),a.isContainer.value!==!0&&f(!0)}else Q(0),r!==!1&&he(!1);c(()=>{r!==!1&&he(!0),y!==!0&&o("show",r)},Ze)}function p(r,y){K(),r!==!1&&a.animate(),Q(0),$(X.value*L.value),be(),y!==!0?c(()=>{o("hide",r)},Ze):d()}const{show:T,hide:z}=Jt({showing:g,hideOnRouteChange:u,handleShow:b,handleHide:p}),{addToHistory:W,removeFromHistory:K}=Ut(g,z,u),F={belowBreakpoint:h,hide:z},M=v(()=>e.side==="right"),X=v(()=>(n.lang.rtl===!0?-1:1)*(M.value===!0?1:-1)),De=x(0),j=x(!1),ce=x(!1),Ve=x(L.value*X.value),te=v(()=>M.value===!0?"left":"right"),fe=v(()=>g.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:L.value:0),ve=v(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(M.value?"R":"L")>-1||n.platform.is.ios===!0&&a.isContainer.value===!0),G=v(()=>e.overlay===!1&&g.value===!0&&h.value===!1),rt=v(()=>e.overlay===!0&&g.value===!0&&h.value===!1),ut=v(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&j.value===!1?" hidden":"")),st=v(()=>({backgroundColor:`rgba(0,0,0,${De.value*.4})`})),Me=v(()=>M.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),dt=v(()=>M.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),ct=v(()=>{const r={};return a.header.space===!0&&Me.value===!1&&(ve.value===!0?r.top=`${a.header.offset}px`:a.header.space===!0&&(r.top=`${a.header.size}px`)),a.footer.space===!0&&dt.value===!1&&(ve.value===!0?r.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(r.bottom=`${a.footer.size}px`)),r}),ft=v(()=>{const r={width:`${L.value}px`,transform:`translateX(${Ve.value}px)`};return h.value===!0?r:Object.assign(r,ct.value)}),vt=v(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),mt=v(()=>`q-drawer q-drawer--${e.side}`+(ce.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(j.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${_.value===!0?"mini":"standard"}`+(ve.value===!0||G.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Me.value===!0?" q-drawer--top-padding":""))),ht=v(()=>{const r=n.lang.rtl===!0?e.side:te.value;return[[Te,gt,void 0,{[r]:!0,mouse:!0}]]}),bt=v(()=>{const r=n.lang.rtl===!0?te.value:e.side;return[[Te,He,void 0,{[r]:!0,mouse:!0}]]}),pt=v(()=>{const r=n.lang.rtl===!0?te.value:e.side;return[[Te,He,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function me(){wt(h,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}C(h,r=>{r===!0?(w=g.value,g.value===!0&&z(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(g.value===!0?($(0),Q(0),be()):T(!1))}),C(()=>e.side,(r,y)=>{a.instances[y]===F&&(a.instances[y]=void 0,a[y].space=!1,a[y].offset=0),a.instances[r]=F,a[r].size=L.value,a[r].space=G.value,a[r].offset=fe.value}),C(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&me()}),C(()=>e.behavior+e.breakpoint,me),C(a.isContainer,r=>{g.value===!0&&f(r!==!0),r===!0&&me()}),C(a.scrollbarWidth,()=>{$(g.value===!0?0:void 0)}),C(fe,r=>{R("offset",r)}),C(G,r=>{o("onLayout",r),R("space",r)}),C(M,()=>{$()}),C(L,r=>{$(),pe(e.miniToOverlay,r)}),C(()=>e.miniToOverlay,r=>{pe(r,L.value)}),C(()=>n.lang.rtl,()=>{$()}),C(()=>e.mini,()=>{e.modelValue===!0&&(yt(),a.animate())}),C(_,r=>{o("miniState",r)});function $(r){r===void 0?U(()=>{r=g.value===!0?0:L.value,$(X.value*r)}):(a.isContainer.value===!0&&M.value===!0&&(h.value===!0||Math.abs(r)===L.value)&&(r+=X.value*a.scrollbarWidth.value),Ve.value=r)}function Q(r){De.value=r}function he(r){const y=r===!0?"remove":a.isContainer.value!==!0?"add":"";y!==""&&document.body.classList[y]("q-body--drawer-toggle")}function yt(){q!==null&&clearTimeout(q),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ce.value=!0,q=setTimeout(()=>{q=null,ce.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function gt(r){if(g.value!==!1)return;const y=L.value,B=se(r.distance.x,0,y);if(r.isFinal===!0){B>=Math.min(75,y)===!0?T():(a.animate(),Q(0),$(X.value*y)),j.value=!1;return}$((n.lang.rtl===!0?M.value!==!0:M.value)?Math.max(y-B,0):Math.min(0,B-y)),Q(se(B/y,0,1)),r.isFirst===!0&&(j.value=!0)}function He(r){if(g.value!==!0)return;const y=L.value,B=r.direction===e.side,le=(n.lang.rtl===!0?B!==!0:B)?se(r.distance.x,0,y):0;if(r.isFinal===!0){Math.abs(le)<Math.min(75,y)===!0?(a.animate(),Q(1),$(0)):z(),j.value=!1;return}$(X.value*le),Q(se(1-le/y,0,1)),r.isFirst===!0&&(j.value=!0)}function be(){f(!1),he(!0)}function R(r,y){a.update(e.side,r,y)}function wt(r,y){r.value!==y&&(r.value=y)}function pe(r,y){R("size",r===!0?e.miniWidth:y)}return a.instances[e.side]=F,pe(e.miniToOverlay,L.value),R("space",G.value),R("offset",fe.value),e.showIfAbove===!0&&e.modelValue!==!0&&g.value===!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",!0),Y(()=>{o("onLayout",G.value),o("miniState",_.value),w=e.showIfAbove===!0;const r=()=>{(g.value===!0?b:p)(!1,!0)};if(a.totalWidth.value!==0){U(r);return}m=C(a.totalWidth,()=>{m(),m=void 0,g.value===!1&&e.showIfAbove===!0&&h.value===!1?T(!1):r()})}),N(()=>{m!==void 0&&m(),q!==null&&(clearTimeout(q),q=null),g.value===!0&&be(),a.instances[e.side]===F&&(a.instances[e.side]=void 0,R("size",0),R("offset",0),R("space",!1))}),()=>{const r=[];h.value===!0&&(e.noSwipeOpen===!1&&r.push(Pt(k("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),ht.value)),r.push(Re("div",{ref:"backdrop",class:ut.value,style:st.value,"aria-hidden":"true",onClick:z},void 0,"backdrop",e.noSwipeBackdrop!==!0&&g.value===!0,()=>pt.value)));const y=_.value===!0&&l.mini!==void 0,B=[k("div",{...i,key:""+y,class:[vt.value,i.class]},y===!0?l.mini():I(l.default))];return e.elevated===!0&&g.value===!0&&B.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Re("aside",{ref:"content",class:mt.value,style:ft.value},B,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>bt.value)),k("div",{class:"q-drawer-container"},r)}}}),cl=O({name:"QPageContainer",setup(e,{slots:l}){const{proxy:{$q:o}}=V(),i=Be(de,H);if(i===H)return console.error("QPageContainer needs to be child of QLayout"),H;ot(Dt,!0);const t=v(()=>{const n={};return i.header.space===!0&&(n.paddingTop=`${i.header.size}px`),i.right.space===!0&&(n[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${i.right.size}px`),i.footer.space===!0&&(n.paddingBottom=`${i.footer.size}px`),i.left.space===!0&&(n[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${i.left.size}px`),n});return()=>k("div",{class:"q-page-container",style:t.value},I(l.default))}});const{passive:et}=D,fl=["both","horizontal","vertical"];var vl=O({name:"QScrollObserver",props:{axis:{type:String,validator:e=>fl.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:l}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i=null,t,n;C(()=>e.scrollTarget,()=>{c(),f()});function s(){i!==null&&i();const w=Math.max(0,it(t)),q=at(t),m={top:w-o.position.top,left:q-o.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const h=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";o.position={top:w,left:q},o.directionChanged=o.direction!==h,o.delta=m,o.directionChanged===!0&&(o.direction=h,o.inflectionPoint=o.position),l("scroll",{...o})}function f(){t=el(n,e.scrollTarget),t.addEventListener("scroll",d,et),d(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",d,et),t=void 0)}function d(w){if(w===!0||e.debounce===0||e.debounce==="0")s();else if(i===null){const[q,m]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];i=()=>{m(q),i=null}}}const{proxy:a}=V();return C(()=>a.$q.lang.rtl,s),Y(()=>{n=a.$el.parentNode,f()}),N(()=>{i!==null&&i(),c()}),Object.assign(a,{trigger:d,getPosition:()=>o}),Ee}}),ml=O({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:l,emit:o}){const{proxy:{$q:i}}=V(),t=x(null),n=x(i.screen.height),s=x(e.container===!0?0:i.screen.width),f=x({position:0,direction:"down",inflectionPoint:0}),c=x(0),d=x(lt.value===!0?0:qe()),a=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=v(()=>e.container===!1?{minHeight:i.screen.height+"px"}:null),q=v(()=>d.value!==0?{[i.lang.rtl===!0?"left":"right"]:`${d.value}px`}:null),m=v(()=>d.value!==0?{[i.lang.rtl===!0?"right":"left"]:0,[i.lang.rtl===!0?"left":"right"]:`-${d.value}px`,width:`calc(100% + ${d.value}px)`}:null);function h(p){if(e.container===!0||document.qScrollPrevented!==!0){const T={position:p.position.top,direction:p.direction,directionChanged:p.directionChanged,inflectionPoint:p.inflectionPoint.top,delta:p.delta.top};f.value=T,e.onScroll!==void 0&&o("scroll",T)}}function _(p){const{height:T,width:z}=p;let W=!1;n.value!==T&&(W=!0,n.value=T,e.onScrollHeight!==void 0&&o("scrollHeight",T),g()),s.value!==z&&(W=!0,s.value=z),W===!0&&e.onResize!==void 0&&o("resize",p)}function L({height:p}){c.value!==p&&(c.value=p,g())}function g(){if(e.container===!0){const p=n.value>c.value?qe():0;d.value!==p&&(d.value=p)}}let u=null;const b={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:n,containerHeight:c,scrollbarWidth:d,totalWidth:v(()=>s.value+d.value),rows:v(()=>{const p=e.view.toLowerCase().split(" ");return{top:p[0].split(""),middle:p[1].split(""),bottom:p[2].split("")}}),header:ne({size:0,offset:0,space:!1}),right:ne({size:300,offset:0,space:!1}),footer:ne({size:0,offset:0,space:!1}),left:ne({size:300,offset:0,space:!1}),scroll:f,animate(){u!==null?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{u=null,document.body.classList.remove("q-body--layout-animate")},155)},update(p,T,z){b[p][T]=z}};if(ot(de,b),qe()>0){let z=function(){p=null,T.classList.remove("hide-scrollbar")},W=function(){if(p===null){if(T.scrollHeight>i.screen.height)return;T.classList.add("hide-scrollbar")}else clearTimeout(p);p=setTimeout(z,300)},K=function(F){p!==null&&F==="remove"&&(clearTimeout(p),z()),window[`${F}EventListener`]("resize",W)},p=null;const T=document.body;C(()=>e.container!==!0?"add":"remove",K),e.container!==!0&&K("add"),Vt(()=>{K("remove")})}return()=>{const p=xt(l.default,[k(vl,{onScroll:h}),k(_e,{onResize:_})]),T=k("div",{class:a.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},p);return e.container===!0?k("div",{class:"q-layout-container overflow-hidden",ref:t},[k(_e,{onResize:L}),k("div",{class:"absolute-full",style:q.value},[k("div",{class:"scroll",style:m.value},[T])])]):T}}});const hl=Ht({name:"MainLayout",setup(){const e=x(!1);return{leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}},data(){return{fqdn:localStorage.getItem("fqdn")}},methods:{clearFQDN(){this.fqdn=null,localStorage.removeItem("fqdn")}}}),bl=Ft("div",null,"Drawbridge v0.0.1",-1);function pl(e,l,o,i,t,n){const s=At("router-view");return Qt(),Rt(ml,{view:"lHh Lpr lFf"},{default:E(()=>[S(jt,{elevated:""},{default:E(()=>[S(It,null,{default:E(()=>[S(_t,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),S(Nt,null,{default:E(()=>[J(" Drawbridge ")]),_:1}),bl]),_:1})]),_:1}),S(dl,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":l[0]||(l[0]=f=>e.leftDrawerOpen=f),"show-if-above":"",bordered:""},{default:E(()=>[S(Yt,null,{default:E(()=>[S(ie,{header:""},{default:E(()=>[J(" Settings ")]),_:1}),S(Ie,null,{default:E(()=>[S(ae,{avatar:""},{default:E(()=>[S(We,{name:"public"})]),_:1}),S(ae,null,{default:E(()=>[S(ie,null,{default:E(()=>[J("Domain Name")]),_:1}),S(ie,{caption:""},{default:E(()=>[J(Wt(e.fqdn||"No FQDN set"),1)]),_:1})]),_:1})]),_:1}),S(Ie,{clickable:"",onClick:e.clearFQDN},{default:E(()=>[S(ae,{avatar:""},{default:E(()=>[S(We,{name:"calendar_today"})]),_:1}),S(ae,null,{default:E(()=>[S(ie,null,{default:E(()=>[J("Clear FQDN")]),_:1})]),_:1})]),_:1},8,["onClick"])]),_:1})]),_:1},8,["modelValue"]),S(cl,{key:"fqdn"},{default:E(()=>[S(s)]),_:1})]),_:1})}var ql=Mt(hl,[["render",pl]]);export{ql as default};
