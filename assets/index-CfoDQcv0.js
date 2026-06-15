(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function o(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(c){if(c.ep)return;c.ep=!0;const d=o(c);fetch(c.href,d)}})();function $w(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var ad={exports:{}},ro={};var Bg;function Qw(){if(Bg)return ro;Bg=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function o(l,c,d){var h=null;if(d!==void 0&&(h=""+d),c.key!==void 0&&(h=""+c.key),"key"in c){d={};for(var p in c)p!=="key"&&(d[p]=c[p])}else d=c;return c=d.ref,{$$typeof:a,type:l,key:h,ref:c!==void 0?c:null,props:d}}return ro.Fragment=r,ro.jsx=o,ro.jsxs=o,ro}var Yg;function Zw(){return Yg||(Yg=1,ad.exports=Qw()),ad.exports}var ce=Zw();const Iw="0.3.34",uf=`bippy-${Iw}`,Xg=Object.defineProperty,Jw=Object.prototype.hasOwnProperty,ho=()=>{},a0=a=>{try{Function.prototype.toString.call(a).indexOf("^_^")>-1&&setTimeout(()=>{throw new Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build")})}catch{}},r0=(a=si())=>"getFiberRoots"in a;let i0=!1,qg;const Rd=(a=si())=>i0?!0:(typeof a.inject=="function"&&(qg=a.inject.toString()),!!qg?.includes("(injected)")),us=new Set,Ud=new Set,Kw=a=>{const r=new Map;let o=0,l={_instrumentationIsActive:!1,_instrumentationSource:uf,checkDCE:a0,hasUnsupportedRendererAttached:!1,inject(c){const d=++o;return r.set(d,c),Ud.add(c),l._instrumentationIsActive||(l._instrumentationIsActive=!0,us.forEach(h=>h())),d},on:ho,onCommitFiberRoot:ho,onCommitFiberUnmount:ho,onPostCommitFiberRoot:ho,renderers:r,supportsFiber:!0,supportsFlight:!0};try{Xg(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__",{configurable:!0,enumerable:!0,get(){return l},set(h){if(h&&typeof h=="object"){const p=l.renderers;l=h,p.size>0&&(p.forEach((m,g)=>{Ud.add(m),h.renderers.set(g,m)}),Hd(a))}}});const c=window.hasOwnProperty;let d=!1;Xg(window,"hasOwnProperty",{configurable:!0,value:function(...h){try{if(!d&&h[0]==="__REACT_DEVTOOLS_GLOBAL_HOOK__")return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,d=!0,-0}catch{}return c.apply(this,h)},writable:!0})}catch{Hd(a)}return l},Hd=a=>{a&&us.add(a);try{const r=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!r)return;if(!r._instrumentationSource){const o=r0();if(r.checkDCE=a0,r.supportsFiber=!0,r.supportsFlight=!0,r.hasUnsupportedRendererAttached=!1,r._instrumentationSource=uf,r._instrumentationIsActive=!1,o||(r.on=ho),r.renderers.size){r._instrumentationIsActive=!0,us.forEach(c=>c());return}const l=r.inject;Rd(r)&&!o&&(i0=!0,r.inject({scheduleRefresh(){}})&&(r._instrumentationIsActive=!0)),r.inject=c=>{const d=l(c);return Ud.add(c),r._instrumentationIsActive=!0,us.forEach(h=>h()),d}}(r.renderers.size||r._instrumentationIsActive||Rd())&&a?.()}catch{}},Ww=()=>Jw.call(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__"),si=a=>Ww()?(Hd(a),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):Kw(a),Pw=()=>!!(typeof window<"u"&&(window.document?.createElement||window.navigator?.product==="ReactNative")),e1=()=>{try{Pw()&&si()}catch{}},Ms=0,lr=1,o0=3,t1=5,n1=6,a1=7,r1=9,Os=11,Ds=13,Mo=14,Oo=15,i1=18,o1=22,l1=23,s1=26,c1=27,u1=60111,d1="Symbol(react.concurrent_mode)",f1="Symbol(react.async_mode)",Vg=1,h1=2,p1=4096,m1=4,Fg=8,g1=16,v1=32,y1=1024,b1=8192,Gg=h1|m1|g1|v1|p1|b1|y1,wo=a=>{switch(a.tag){case t1:case s1:case c1:return!0;default:return typeof a.type=="string"}},Rs=a=>{switch(a.tag){case lr:case Os:case Ms:case Mo:case Oo:return!0;default:return!1}},w1=(a,r)=>{try{const o=a.dependencies,l=a.alternate?.dependencies;if(!o||!l||typeof o!="object"||!("firstContext"in o)||typeof l!="object"||!("firstContext"in l))return!1;let c=o.firstContext,d=l.firstContext;for(;c&&typeof c=="object"&&"memoizedValue"in c||d&&typeof d=="object"&&"memoizedValue"in d;){if(r(c,d)===!0)return!0;c=c?.next,d=d?.next}}catch{}return!1},df=a=>{const r=a.memoizedProps,o=a.alternate?.memoizedProps||{},l=a.flags??a.effectTag??0;switch(a.tag){case lr:case r1:case Os:case Ms:case Mo:case Oo:return(l&Vg)===Vg;default:return a.alternate?o!==r||a.alternate.memoizedState!==a.memoizedState||a.alternate.ref!==a.ref:!0}},ff=a=>(a.flags&(Gg|Fg))!==0||(a.subtreeFlags&(Gg|Fg))!==0,x1=a=>{const r=[],o=[a];for(;o.length;){const l=o.pop();l&&(wo(l)&&ff(l)&&df(l)&&r.push(l),l.child&&o.push(l.child),l.sibling&&o.push(l.sibling))}return r},hf=a=>{switch(a.tag){case i1:return!0;case a1:case n1:case l1:case o1:return!0;case o0:return!1;default:{const r=typeof a.type=="object"&&a.type!==null?a.type.$$typeof:a.type;switch(typeof r=="symbol"?r.toString():r){case u1:case d1:case f1:return!0;default:return!1}}}},_1=a=>{const r=[],o=[];for(wo(a)?r.push(a):a.child&&o.push(a.child);o.length;){const l=o.pop();if(!l)break;wo(l)?r.push(l):l.child&&o.push(l.child),l.sibling&&o.push(l.sibling)}return r};function l0(a,r,o=!1){return a&&r(a)instanceof Promise?c0(a,r,o):s0(a,r,o)}const s0=(a,r,o=!1)=>{if(!a)return null;if(r(a)===!0)return a;let l=o?a.return:a.child;for(;l;){const c=s0(l,r,o);if(c)return c;l=o?null:l.sibling}return null},c0=async(a,r,o=!1)=>{if(!a)return null;if(await r(a)===!0)return a;let l=o?a.return:a.child;for(;l;){const c=await c0(l,r,o);if(c)return c;l=o?null:l.sibling}return null},tr=a=>{const r=a?.actualDuration??0;let o=r,l=a?.child??null;for(;r>0&&l!=null;)o-=l.actualDuration??0,l=l.sibling;return{selfTime:o,totalTime:r}},xo=a=>!!a.updateQueue?.memoCache,sr=a=>{const r=a;return typeof r=="function"?r:typeof r=="object"&&r?sr(r.type||r.render):null},bt=a=>{const r=a;if(typeof r=="string")return r;if(typeof r!="function"&&!(typeof r=="object"&&r))return null;const o=r.displayName||r.name||null;if(o)return o;const l=sr(r);return l&&(l.displayName||l.name)||null},S1=a=>{try{if(typeof a.version=="string"&&a.bundleType>0)return"development"}catch{}return"production"},T1=()=>!!si()._instrumentationIsActive||r0()||Rd();let u0=0;const oi=new WeakMap,C1=(a,r=u0++)=>{oi.set(a,r)},Aa=a=>{let r=oi.get(a);return!r&&a.alternate&&(r=oi.get(a.alternate)),r||(r=u0++,C1(a,r)),r},za=(a,r,o)=>{let l=r;for(;l!=null;){if(oi.has(l)||Aa(l),!hf(l)&&df(l)&&a(l,"mount"),l.tag===Ds)if(l.memoizedState!==null){const h=l.child,p=h?h.sibling:null;if(p){const m=p.child;m!==null&&za(a,m,!1)}}else{let h=null;l.child!==null&&(h=l.child.child),h!==null&&za(a,h,!1)}else l.child!=null&&za(a,l.child,!0);l=o?l.sibling:null}},jd=(a,r,o,l)=>{if(oi.has(r)||Aa(r),!o)return;oi.has(o)||Aa(o);const c=r.tag===Ds;!hf(r)&&df(r)&&a(r,"update");const h=c&&o.memoizedState!==null,p=c&&r.memoizedState!==null;if(h&&p){const m=r.child?.sibling??null,g=o.child?.sibling??null;m!==null&&g!==null&&jd(a,m,g)}else if(h&&!p){const m=r.child;m!==null&&za(a,m,!0)}else if(!h&&p){d0(a,o);const m=r.child?.sibling??null;m!==null&&za(a,m,!0)}else if(r.child!==o.child){let m=r.child;for(;m;){if(m.alternate){const g=m.alternate;jd(a,m,g)}else za(a,m,!1);m=m.sibling}}},Ld=(a,r)=>{(r.tag===o0||!hf(r))&&a(r,"unmount")},d0=(a,r)=>{const o=r.tag===Ds&&r.memoizedState!==null;let l=r.child;for(o&&(l=(r.child?.sibling??null)?.child??null);l!==null;)l.return!==null&&(Ld(a,l),d0(a,l)),l=l.sibling};let k1=0;const $g=new WeakMap,E1=(a,r)=>{const o="current"in a?a.current:a;let l=$g.get(a);l||(l={id:k1++,prevFiber:null},$g.set(a,l));const{prevFiber:c}=l;if(!o)Ld(r,o);else if(c!==null){const d=c&&c.memoizedState!=null&&c.memoizedState.element!=null&&c.memoizedState.isDehydrated!==!0,h=o.memoizedState!=null&&o.memoizedState.element!=null&&o.memoizedState.isDehydrated!==!0;!d&&h?za(r,o,!1):d&&h?jd(r,o,o.alternate):d&&!h&&Ld(r,o)}else za(r,o,!0);l.prevFiber=o},z1=a=>{const r=si(a.onActive);r._instrumentationSource=a.name??uf;const o=r.onCommitFiberRoot;if(a.onCommitFiberRoot){const d=(h,p,m)=>{r.onCommitFiberRoot===d&&(o?.(h,p,m),a.onCommitFiberRoot?.(h,p,m))};r.onCommitFiberRoot=d}const l=r.onCommitFiberUnmount;if(a.onCommitFiberUnmount){const d=(h,p)=>{r.onCommitFiberUnmount===d&&(l?.(h,p),a.onCommitFiberUnmount?.(h,p))};r.onCommitFiberUnmount=d}const c=r.onPostCommitFiberRoot;if(a.onPostCommitFiberRoot){const d=(h,p)=>{r.onPostCommitFiberRoot===d&&(c?.(h,p),a.onPostCommitFiberRoot?.(h,p))};r.onPostCommitFiberRoot=d}return r};e1();var Us,we,f0,h0,er,Qg,p0,m0,g0,pf,Bd,Yd,v0,_o={},y0=[],N1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Do=Array.isArray;function In(a,r){for(var o in r)a[o]=r[o];return a}function mf(a){a&&a.parentNode&&a.parentNode.removeChild(a)}function ir(a,r,o){var l,c,d,h={};for(d in r)d=="key"?l=r[d]:d=="ref"?c=r[d]:h[d]=r[d];if(arguments.length>2&&(h.children=arguments.length>3?Us.call(arguments,2):o),typeof a=="function"&&a.defaultProps!=null)for(d in a.defaultProps)h[d]===void 0&&(h[d]=a.defaultProps[d]);return ds(a,h,l,c,null)}function ds(a,r,o,l,c){var d={type:a,props:r,key:o,ref:l,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:c??++f0,__i:-1,__u:0};return c==null&&we.vnode!=null&&we.vnode(d),d}function De(a){return a.children}function cn(a,r){this.props=a,this.context=r}function li(a,r){if(r==null)return a.__?li(a.__,a.__i+1):null;for(var o;r<a.__k.length;r++)if((o=a.__k[r])!=null&&o.__e!=null)return o.__e;return typeof a.type=="function"?li(a):null}function b0(a){var r,o;if((a=a.__)!=null&&a.__c!=null){for(a.__e=a.__c.base=null,r=0;r<a.__k.length;r++)if((o=a.__k[r])!=null&&o.__e!=null){a.__e=a.__c.base=o.__e;break}return b0(a)}}function Xd(a){(!a.__d&&(a.__d=!0)&&er.push(a)&&!vs.__r++||Qg!=we.debounceRendering)&&((Qg=we.debounceRendering)||p0)(vs)}function vs(){for(var a,r,o,l,c,d,h,p=1;er.length;)er.length>p&&er.sort(m0),a=er.shift(),p=er.length,a.__d&&(o=void 0,l=void 0,c=(l=(r=a).__v).__e,d=[],h=[],r.__P&&((o=In({},l)).__v=l.__v+1,we.vnode&&we.vnode(o),gf(r.__P,o,l,r.__n,r.__P.namespaceURI,32&l.__u?[c]:null,d,c??li(l),!!(32&l.__u),h),o.__v=l.__v,o.__.__k[o.__i]=o,_0(d,o,h),l.__e=l.__=null,o.__e!=c&&b0(o)));vs.__r=0}function w0(a,r,o,l,c,d,h,p,m,g,w){var y,_,S,k,z,R,C,M=l&&l.__k||y0,q=r.length;for(m=A1(o,r,M,m,q),y=0;y<q;y++)(S=o.__k[y])!=null&&(_=S.__i==-1?_o:M[S.__i]||_o,S.__i=y,R=gf(a,S,_,c,d,h,p,m,g,w),k=S.__e,S.ref&&_.ref!=S.ref&&(_.ref&&vf(_.ref,null,S),w.push(S.ref,S.__c||k,S)),z==null&&k!=null&&(z=k),(C=!!(4&S.__u))||_.__k===S.__k?m=x0(S,m,a,C):typeof S.type=="function"&&R!==void 0?m=R:k&&(m=k.nextSibling),S.__u&=-7);return o.__e=z,m}function A1(a,r,o,l,c){var d,h,p,m,g,w=o.length,y=w,_=0;for(a.__k=new Array(c),d=0;d<c;d++)(h=r[d])!=null&&typeof h!="boolean"&&typeof h!="function"?(typeof h=="string"||typeof h=="number"||typeof h=="bigint"||h.constructor==String?h=a.__k[d]=ds(null,h,null,null,null):Do(h)?h=a.__k[d]=ds(De,{children:h},null,null,null):h.constructor===void 0&&h.__b>0?h=a.__k[d]=ds(h.type,h.props,h.key,h.ref?h.ref:null,h.__v):a.__k[d]=h,m=d+_,h.__=a,h.__b=a.__b+1,p=null,(g=h.__i=M1(h,o,m,y))!=-1&&(y--,(p=o[g])&&(p.__u|=2)),p==null||p.__v==null?(g==-1&&(c>w?_--:c<w&&_++),typeof h.type!="function"&&(h.__u|=4)):g!=m&&(g==m-1?_--:g==m+1?_++:(g>m?_--:_++,h.__u|=4))):a.__k[d]=null;if(y)for(d=0;d<w;d++)(p=o[d])!=null&&(2&p.__u)==0&&(p.__e==l&&(l=li(p)),T0(p,p));return l}function x0(a,r,o,l){var c,d;if(typeof a.type=="function"){for(c=a.__k,d=0;c&&d<c.length;d++)c[d]&&(c[d].__=a,r=x0(c[d],r,o,l));return r}a.__e!=r&&(l&&(r&&a.type&&!r.parentNode&&(r=li(a)),o.insertBefore(a.__e,r||null)),r=a.__e);do r=r&&r.nextSibling;while(r!=null&&r.nodeType==8);return r}function ys(a,r){return r=r||[],a==null||typeof a=="boolean"||(Do(a)?a.some(function(o){ys(o,r)}):r.push(a)),r}function M1(a,r,o,l){var c,d,h,p=a.key,m=a.type,g=r[o],w=g!=null&&(2&g.__u)==0;if(g===null&&p==null||w&&p==g.key&&m==g.type)return o;if(l>(w?1:0)){for(c=o-1,d=o+1;c>=0||d<r.length;)if((g=r[h=c>=0?c--:d++])!=null&&(2&g.__u)==0&&p==g.key&&m==g.type)return h}return-1}function Zg(a,r,o){r[0]=="-"?a.setProperty(r,o??""):a[r]=o==null?"":typeof o!="number"||N1.test(r)?o:o+"px"}function es(a,r,o,l,c){var d,h;e:if(r=="style")if(typeof o=="string")a.style.cssText=o;else{if(typeof l=="string"&&(a.style.cssText=l=""),l)for(r in l)o&&r in o||Zg(a.style,r,"");if(o)for(r in o)l&&o[r]==l[r]||Zg(a.style,r,o[r])}else if(r[0]=="o"&&r[1]=="n")d=r!=(r=r.replace(g0,"$1")),h=r.toLowerCase(),r=h in a||r=="onFocusOut"||r=="onFocusIn"?h.slice(2):r.slice(2),a.l||(a.l={}),a.l[r+d]=o,o?l?o.u=l.u:(o.u=pf,a.addEventListener(r,d?Yd:Bd,d)):a.removeEventListener(r,d?Yd:Bd,d);else{if(c=="http://www.w3.org/2000/svg")r=r.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(r!="width"&&r!="height"&&r!="href"&&r!="list"&&r!="form"&&r!="tabIndex"&&r!="download"&&r!="rowSpan"&&r!="colSpan"&&r!="role"&&r!="popover"&&r in a)try{a[r]=o??"";break e}catch{}typeof o=="function"||(o==null||o===!1&&r[4]!="-"?a.removeAttribute(r):a.setAttribute(r,r=="popover"&&o==1?"":o))}}function Ig(a){return function(r){if(this.l){var o=this.l[r.type+a];if(r.t==null)r.t=pf++;else if(r.t<o.u)return;return o(we.event?we.event(r):r)}}}function gf(a,r,o,l,c,d,h,p,m,g){var w,y,_,S,k,z,R,C,M,q,$,Z,W,K,fe,ie,oe,le=r.type;if(r.constructor!==void 0)return null;128&o.__u&&(m=!!(32&o.__u),d=[p=r.__e=o.__e]),(w=we.__b)&&w(r);e:if(typeof le=="function")try{if(C=r.props,M="prototype"in le&&le.prototype.render,q=(w=le.contextType)&&l[w.__c],$=w?q?q.props.value:w.__:l,o.__c?R=(y=r.__c=o.__c).__=y.__E:(M?r.__c=y=new le(C,$):(r.__c=y=new cn(C,$),y.constructor=le,y.render=D1),q&&q.sub(y),y.state||(y.state={}),y.__n=l,_=y.__d=!0,y.__h=[],y._sb=[]),M&&y.__s==null&&(y.__s=y.state),M&&le.getDerivedStateFromProps!=null&&(y.__s==y.state&&(y.__s=In({},y.__s)),In(y.__s,le.getDerivedStateFromProps(C,y.__s))),S=y.props,k=y.state,y.__v=r,_)M&&le.getDerivedStateFromProps==null&&y.componentWillMount!=null&&y.componentWillMount(),M&&y.componentDidMount!=null&&y.__h.push(y.componentDidMount);else{if(M&&le.getDerivedStateFromProps==null&&C!==S&&y.componentWillReceiveProps!=null&&y.componentWillReceiveProps(C,$),r.__v==o.__v||!y.__e&&y.shouldComponentUpdate!=null&&y.shouldComponentUpdate(C,y.__s,$)===!1){for(r.__v!=o.__v&&(y.props=C,y.state=y.__s,y.__d=!1),r.__e=o.__e,r.__k=o.__k,r.__k.some(function(ee){ee&&(ee.__=r)}),Z=0;Z<y._sb.length;Z++)y.__h.push(y._sb[Z]);y._sb=[],y.__h.length&&h.push(y);break e}y.componentWillUpdate!=null&&y.componentWillUpdate(C,y.__s,$),M&&y.componentDidUpdate!=null&&y.__h.push(function(){y.componentDidUpdate(S,k,z)})}if(y.context=$,y.props=C,y.__P=a,y.__e=!1,W=we.__r,K=0,M){for(y.state=y.__s,y.__d=!1,W&&W(r),w=y.render(y.props,y.state,y.context),fe=0;fe<y._sb.length;fe++)y.__h.push(y._sb[fe]);y._sb=[]}else do y.__d=!1,W&&W(r),w=y.render(y.props,y.state,y.context),y.state=y.__s;while(y.__d&&++K<25);y.state=y.__s,y.getChildContext!=null&&(l=In(In({},l),y.getChildContext())),M&&!_&&y.getSnapshotBeforeUpdate!=null&&(z=y.getSnapshotBeforeUpdate(S,k)),ie=w,w!=null&&w.type===De&&w.key==null&&(ie=S0(w.props.children)),p=w0(a,Do(ie)?ie:[ie],r,o,l,c,d,h,p,m,g),y.base=r.__e,r.__u&=-161,y.__h.length&&h.push(y),R&&(y.__E=y.__=null)}catch(ee){if(r.__v=null,m||d!=null)if(ee.then){for(r.__u|=m?160:128;p&&p.nodeType==8&&p.nextSibling;)p=p.nextSibling;d[d.indexOf(p)]=null,r.__e=p}else{for(oe=d.length;oe--;)mf(d[oe]);qd(r)}else r.__e=o.__e,r.__k=o.__k,ee.then||qd(r);we.__e(ee,r,o)}else d==null&&r.__v==o.__v?(r.__k=o.__k,r.__e=o.__e):p=r.__e=O1(o.__e,r,o,l,c,d,h,m,g);return(w=we.diffed)&&w(r),128&r.__u?void 0:p}function qd(a){a&&a.__c&&(a.__c.__e=!0),a&&a.__k&&a.__k.forEach(qd)}function _0(a,r,o){for(var l=0;l<o.length;l++)vf(o[l],o[++l],o[++l]);we.__c&&we.__c(r,a),a.some(function(c){try{a=c.__h,c.__h=[],a.some(function(d){d.call(c)})}catch(d){we.__e(d,c.__v)}})}function S0(a){return typeof a!="object"||a==null||a.__b&&a.__b>0?a:Do(a)?a.map(S0):In({},a)}function O1(a,r,o,l,c,d,h,p,m){var g,w,y,_,S,k,z,R=o.props||_o,C=r.props,M=r.type;if(M=="svg"?c="http://www.w3.org/2000/svg":M=="math"?c="http://www.w3.org/1998/Math/MathML":c||(c="http://www.w3.org/1999/xhtml"),d!=null){for(g=0;g<d.length;g++)if((S=d[g])&&"setAttribute"in S==!!M&&(M?S.localName==M:S.nodeType==3)){a=S,d[g]=null;break}}if(a==null){if(M==null)return document.createTextNode(C);a=document.createElementNS(c,M,C.is&&C),p&&(we.__m&&we.__m(r,d),p=!1),d=null}if(M==null)R===C||p&&a.data==C||(a.data=C);else{if(d=d&&Us.call(a.childNodes),!p&&d!=null)for(R={},g=0;g<a.attributes.length;g++)R[(S=a.attributes[g]).name]=S.value;for(g in R)if(S=R[g],g!="children"){if(g=="dangerouslySetInnerHTML")y=S;else if(!(g in C)){if(g=="value"&&"defaultValue"in C||g=="checked"&&"defaultChecked"in C)continue;es(a,g,null,S,c)}}for(g in C)S=C[g],g=="children"?_=S:g=="dangerouslySetInnerHTML"?w=S:g=="value"?k=S:g=="checked"?z=S:p&&typeof S!="function"||R[g]===S||es(a,g,S,R[g],c);if(w)p||y&&(w.__html==y.__html||w.__html==a.innerHTML)||(a.innerHTML=w.__html),r.__k=[];else if(y&&(a.innerHTML=""),w0(r.type=="template"?a.content:a,Do(_)?_:[_],r,o,l,M=="foreignObject"?"http://www.w3.org/1999/xhtml":c,d,h,d?d[0]:o.__k&&li(o,0),p,m),d!=null)for(g=d.length;g--;)mf(d[g]);p||(g="value",M=="progress"&&k==null?a.removeAttribute("value"):k!=null&&(k!==a[g]||M=="progress"&&!k||M=="option"&&k!=R[g])&&es(a,g,k,R[g],c),g="checked",z!=null&&z!=a[g]&&es(a,g,z,R[g],c))}return a}function vf(a,r,o){try{if(typeof a=="function"){var l=typeof a.__u=="function";l&&a.__u(),l&&r==null||(a.__u=a(r))}else a.current=r}catch(c){we.__e(c,o)}}function T0(a,r,o){var l,c;if(we.unmount&&we.unmount(a),(l=a.ref)&&(l.current&&l.current!=a.__e||vf(l,null,r)),(l=a.__c)!=null){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(d){we.__e(d,r)}l.base=l.__P=null}if(l=a.__k)for(c=0;c<l.length;c++)l[c]&&T0(l[c],r,o||typeof a.type!="function");o||mf(a.__e),a.__c=a.__=a.__e=void 0}function D1(a,r,o){return this.constructor(a,o)}function mo(a,r,o){var l,c,d,h;r==document&&(r=document.documentElement),we.__&&we.__(a,r),c=(l=!1)?null:r.__k,d=[],h=[],gf(r,a=r.__k=ir(De,null,[a]),c||_o,_o,r.namespaceURI,c?null:r.firstChild?Us.call(r.childNodes):null,d,c?c.__e:r.firstChild,l,h),_0(d,a,h)}function C0(a){function r(o){var l,c;return this.getChildContext||(l=new Set,(c={})[r.__c]=this,this.getChildContext=function(){return c},this.componentWillUnmount=function(){l=null},this.shouldComponentUpdate=function(d){this.props.value!=d.value&&l.forEach(function(h){h.__e=!0,Xd(h)})},this.sub=function(d){l.add(d);var h=d.componentWillUnmount;d.componentWillUnmount=function(){l&&l.delete(d),h&&h.call(d)}}),o.children}return r.__c="__cC"+v0++,r.__=a,r.Provider=r.__l=(r.Consumer=function(o,l){return o.children(l)}).contextType=r,r}Us=y0.slice,we={__e:function(a,r,o,l){for(var c,d,h;r=r.__;)if((c=r.__c)&&!c.__)try{if((d=c.constructor)&&d.getDerivedStateFromError!=null&&(c.setState(d.getDerivedStateFromError(a)),h=c.__d),c.componentDidCatch!=null&&(c.componentDidCatch(a,l||{}),h=c.__d),h)return c.__E=c}catch(p){a=p}throw a}},f0=0,h0=function(a){return a!=null&&a.constructor===void 0},cn.prototype.setState=function(a,r){var o;o=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=In({},this.state),typeof a=="function"&&(a=a(In({},o),this.props)),a&&In(o,a),a!=null&&this.__v&&(r&&this._sb.push(r),Xd(this))},cn.prototype.forceUpdate=function(a){this.__v&&(this.__e=!0,a&&this.__h.push(a),Xd(this))},cn.prototype.render=De,er=[],p0=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,m0=function(a,r){return a.__v.__b-r.__v.__b},vs.__r=0,g0=/(PointerCapture)$|Capture$/i,pf=0,Bd=Ig(!1),Yd=Ig(!0),v0=0;var or,Pe,rd,Jg,So=0,k0=[],lt=we,Kg=lt.__b,Wg=lt.__r,Pg=lt.diffed,ev=lt.__c,tv=lt.unmount,nv=lt.__;function Ro(a,r){lt.__h&&lt.__h(Pe,a,So||r),So=0;var o=Pe.__H||(Pe.__H={__:[],__h:[]});return a>=o.__.length&&o.__.push({}),o.__[a]}function Ee(a){return So=1,R1(E0,a)}function R1(a,r,o){var l=Ro(or++,2);if(l.t=a,!l.__c&&(l.__=[o?o(r):E0(void 0,r),function(p){var m=l.__N?l.__N[0]:l.__[0],g=l.t(m,p);m!==g&&(l.__N=[g,l.__[1]],l.__c.setState({}))}],l.__c=Pe,!Pe.__f)){var c=function(p,m,g){if(!l.__c.__H)return!0;var w=l.__c.__H.__.filter(function(_){return!!_.__c});if(w.every(function(_){return!_.__N}))return!d||d.call(this,p,m,g);var y=l.__c.props!==p;return w.forEach(function(_){if(_.__N){var S=_.__[0];_.__=_.__N,_.__N=void 0,S!==_.__[0]&&(y=!0)}}),d&&d.call(this,p,m,g)||y};Pe.__f=!0;var d=Pe.shouldComponentUpdate,h=Pe.componentWillUpdate;Pe.componentWillUpdate=function(p,m,g){if(this.__e){var w=d;d=void 0,c(p,m,g),d=w}h&&h.call(this,p,m,g)},Pe.shouldComponentUpdate=c}return l.__N||l.__}function Ce(a,r){var o=Ro(or++,3);!lt.__s&&wf(o.__H,r)&&(o.__=a,o.u=r,Pe.__H.__h.push(o))}function yf(a,r){var o=Ro(or++,4);!lt.__s&&wf(o.__H,r)&&(o.__=a,o.u=r,Pe.__h.push(o))}function ue(a){return So=5,yn(function(){return{current:a}},[])}function yn(a,r){var o=Ro(or++,7);return wf(o.__H,r)&&(o.__=a(),o.__H=r,o.__h=a),o.__}function ot(a,r){return So=8,yn(function(){return a},r)}function bf(a){var r=Pe.context[a.__c],o=Ro(or++,9);return o.c=a,r?(o.__==null&&(o.__=!0,r.sub(Pe)),r.props.value):a.__}function U1(){for(var a;a=k0.shift();)if(a.__P&&a.__H)try{a.__H.__h.forEach(fs),a.__H.__h.forEach(Vd),a.__H.__h=[]}catch(r){a.__H.__h=[],lt.__e(r,a.__v)}}lt.__b=function(a){Pe=null,Kg&&Kg(a)},lt.__=function(a,r){a&&r.__k&&r.__k.__m&&(a.__m=r.__k.__m),nv&&nv(a,r)},lt.__r=function(a){Wg&&Wg(a),or=0;var r=(Pe=a.__c).__H;r&&(rd===Pe?(r.__h=[],Pe.__h=[],r.__.forEach(function(o){o.__N&&(o.__=o.__N),o.u=o.__N=void 0})):(r.__h.forEach(fs),r.__h.forEach(Vd),r.__h=[],or=0)),rd=Pe},lt.diffed=function(a){Pg&&Pg(a);var r=a.__c;r&&r.__H&&(r.__H.__h.length&&(k0.push(r)!==1&&Jg===lt.requestAnimationFrame||((Jg=lt.requestAnimationFrame)||H1)(U1)),r.__H.__.forEach(function(o){o.u&&(o.__H=o.u),o.u=void 0})),rd=Pe=null},lt.__c=function(a,r){r.some(function(o){try{o.__h.forEach(fs),o.__h=o.__h.filter(function(l){return!l.__||Vd(l)})}catch(l){r.some(function(c){c.__h&&(c.__h=[])}),r=[],lt.__e(l,o.__v)}}),ev&&ev(a,r)},lt.unmount=function(a){tv&&tv(a);var r,o=a.__c;o&&o.__H&&(o.__H.__.forEach(function(l){try{fs(l)}catch(c){r=c}}),o.__H=void 0,r&&lt.__e(r,o.__v))};var av=typeof requestAnimationFrame=="function";function H1(a){var r,o=function(){clearTimeout(l),av&&cancelAnimationFrame(r),setTimeout(a)},l=setTimeout(o,35);av&&(r=requestAnimationFrame(o))}function fs(a){var r=Pe,o=a.__c;typeof o=="function"&&(a.__c=void 0,o()),Pe=r}function Vd(a){var r=Pe;a.__c=a.__(),Pe=r}function wf(a,r){return!a||a.length!==r.length||r.some(function(o,l){return o!==a[l]})}function E0(a,r){return typeof r=="function"?r(a):r}var j1=Symbol.for("preact-signals");function xf(){if(ti>1)ti--;else{for(var a,r=!1;go!==void 0;){var o=go;for(go=void 0,Fd++;o!==void 0;){var l=o.o;if(o.o=void 0,o.f&=-3,!(8&o.f)&&N0(o))try{o.c()}catch(c){r||(a=c,r=!0)}o=l}}if(Fd=0,ti--,r)throw a}}var Be=void 0;function To(a){var r=Be;Be=void 0;try{return a()}finally{Be=r}}var go=void 0,ti=0,Fd=0,bs=0;function z0(a){if(Be!==void 0){var r=a.n;if(r===void 0||r.t!==Be)return r={i:0,S:a,p:Be.s,n:void 0,t:Be,e:void 0,x:void 0,r},Be.s!==void 0&&(Be.s.n=r),Be.s=r,a.n=r,32&Be.f&&a.S(r),r;if(r.i===-1)return r.i=0,r.n!==void 0&&(r.n.p=r.p,r.p!==void 0&&(r.p.n=r.n),r.p=Be.s,r.n=void 0,Be.s.n=r,Be.s=r),r}}function kt(a,r){this.v=a,this.i=0,this.n=void 0,this.t=void 0,this.W=r?.watched,this.Z=r?.unwatched,this.name=r?.name}kt.prototype.brand=j1;kt.prototype.h=function(){return!0};kt.prototype.S=function(a){var r=this,o=this.t;o!==a&&a.e===void 0&&(a.x=o,this.t=a,o!==void 0?o.e=a:To(function(){var l;(l=r.W)==null||l.call(r)}))};kt.prototype.U=function(a){var r=this;if(this.t!==void 0){var o=a.e,l=a.x;o!==void 0&&(o.x=l,a.e=void 0),l!==void 0&&(l.e=o,a.x=void 0),a===this.t&&(this.t=l,l===void 0&&To(function(){var c;(c=r.Z)==null||c.call(r)}))}};kt.prototype.subscribe=function(a){var r=this;return Hs(function(){var o=r.value,l=Be;Be=void 0;try{a(o)}finally{Be=l}},{name:"sub"})};kt.prototype.valueOf=function(){return this.value};kt.prototype.toString=function(){return this.value+""};kt.prototype.toJSON=function(){return this.value};kt.prototype.peek=function(){var a=Be;Be=void 0;try{return this.value}finally{Be=a}};Object.defineProperty(kt.prototype,"value",{get:function(){var a=z0(this);return a!==void 0&&(a.i=this.i),this.v},set:function(a){if(a!==this.v){if(Fd>100)throw new Error("Cycle detected");this.v=a,this.i++,bs++,ti++;try{for(var r=this.t;r!==void 0;r=r.x)r.t.N()}finally{xf()}}}});function ht(a,r){return new kt(a,r)}function N0(a){for(var r=a.s;r!==void 0;r=r.n)if(r.S.i!==r.i||!r.S.h()||r.S.i!==r.i)return!0;return!1}function A0(a){for(var r=a.s;r!==void 0;r=r.n){var o=r.S.n;if(o!==void 0&&(r.r=o),r.S.n=r,r.i=-1,r.n===void 0){a.s=r;break}}}function M0(a){for(var r=a.s,o=void 0;r!==void 0;){var l=r.p;r.i===-1?(r.S.U(r),l!==void 0&&(l.n=r.n),r.n!==void 0&&(r.n.p=l)):o=r,r.S.n=r.r,r.r!==void 0&&(r.r=void 0),r=l}a.s=o}function cr(a,r){kt.call(this,void 0),this.x=a,this.s=void 0,this.g=bs-1,this.f=4,this.W=r?.watched,this.Z=r?.unwatched,this.name=r?.name}cr.prototype=new kt;cr.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===bs))return!0;if(this.g=bs,this.f|=1,this.i>0&&!N0(this))return this.f&=-2,!0;var a=Be;try{A0(this),Be=this;var r=this.x();(16&this.f||this.v!==r||this.i===0)&&(this.v=r,this.f&=-17,this.i++)}catch(o){this.v=o,this.f|=16,this.i++}return Be=a,M0(this),this.f&=-2,!0};cr.prototype.S=function(a){if(this.t===void 0){this.f|=36;for(var r=this.s;r!==void 0;r=r.n)r.S.S(r)}kt.prototype.S.call(this,a)};cr.prototype.U=function(a){if(this.t!==void 0&&(kt.prototype.U.call(this,a),this.t===void 0)){this.f&=-33;for(var r=this.s;r!==void 0;r=r.n)r.S.U(r)}};cr.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var a=this.t;a!==void 0;a=a.x)a.t.N()}};Object.defineProperty(cr.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var a=z0(this);if(this.h(),a!==void 0&&(a.i=this.i),16&this.f)throw this.v;return this.v}});function ur(a,r){return new cr(a,r)}function O0(a){var r=a.u;if(a.u=void 0,typeof r=="function"){ti++;var o=Be;Be=void 0;try{r()}catch(l){throw a.f&=-2,a.f|=8,_f(a),l}finally{Be=o,xf()}}}function _f(a){for(var r=a.s;r!==void 0;r=r.n)r.S.U(r);a.x=void 0,a.s=void 0,O0(a)}function L1(a){if(Be!==this)throw new Error("Out-of-order effect");M0(this),Be=a,this.f&=-2,8&this.f&&_f(this),xf()}function ci(a,r){this.x=a,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=r?.name}ci.prototype.c=function(){var a=this.S();try{if(8&this.f||this.x===void 0)return;var r=this.x();typeof r=="function"&&(this.u=r)}finally{a()}};ci.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,O0(this),A0(this),ti++;var a=Be;return Be=this,L1.bind(this,a)};ci.prototype.N=function(){2&this.f||(this.f|=2,this.o=go,go=this)};ci.prototype.d=function(){this.f|=8,1&this.f||_f(this)};ci.prototype.dispose=function(){this.d()};function Hs(a,r){var o=new ci(a,r);try{o.c()}catch(c){throw o.d(),c}var l=o.d.bind(o);return l[Symbol.dispose]=l,l}var ts;function ui(a,r){we[a]=r.bind(null,we[a]||function(){})}function ws(a){if(ts){var r=ts;ts=void 0,r()}ts=a&&a.S()}function D0(a){var r=this,o=a.data,l=Y1(o);l.value=o;var c=yn(function(){for(var d=r.__v;d=d.__;)if(d.__c){d.__c.__$f|=4;break}return r.__$u.c=function(){var h,p=r.__$u.S(),m=c.value;p(),h0(m)||((h=r.base)==null?void 0:h.nodeType)!==3?(r.__$f|=1,r.setState({})):r.base.data=m},ur(function(){var h=l.value.value;return h===0?0:h===!0?"":h||""})},[]);return c.value}D0.displayName="_st";Object.defineProperties(kt.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:D0},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});ui("__b",function(a,r){if(typeof r.type=="string"){var o,l=r.props;for(var c in l)if(c!=="children"){var d=l[c];d instanceof kt&&(o||(r.__np=o={}),o[c]=d,l[c]=d.peek())}}a(r)});ui("__r",function(a,r){a(r),ws();var o,l=r.__c;l&&(l.__$f&=-2,(o=l.__$u)===void 0&&(l.__$u=o=(function(c){var d;return Hs(function(){d=this}),d.c=function(){l.__$f|=1,l.setState({})},d})())),ws(o)});ui("__e",function(a,r,o,l){ws(),a(r,o,l)});ui("diffed",function(a,r){ws();var o;if(typeof r.type=="string"&&(o=r.__e)){var l=r.__np,c=r.props;if(l){var d=o.U;if(d)for(var h in d){var p=d[h];p!==void 0&&!(h in l)&&(p.d(),d[h]=void 0)}else o.U=d={};for(var m in l){var g=d[m],w=l[m];g===void 0?(g=B1(o,m,w,c),d[m]=g):g.o(w,c)}}}a(r)});function B1(a,r,o,l){var c=r in a&&a.ownerSVGElement===void 0,d=ht(o);return{o:function(h,p){d.value=h,l=p},d:Hs(function(){var h=d.value.value;l[r]!==h&&(l[r]=h,c?a[r]=h:h?a.setAttribute(r,h):a.removeAttribute(r))})}}ui("unmount",function(a,r){if(typeof r.type=="string"){var o=r.__e;if(o){var l=o.U;if(l){o.U=void 0;for(var c in l){var d=l[c];d&&d.d()}}}}else{var h=r.__c;if(h){var p=h.__$u;p&&(h.__$u=void 0,p.d())}}a(r)});ui("__h",function(a,r,o,l){(l<3||l===9)&&(r.__$f|=2),a(r,o,l)});cn.prototype.shouldComponentUpdate=function(a,r){if(this.__R)return!0;var o=this.__$u,l=o&&o.s!==void 0;for(var c in r)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(l||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(l||4&this.__$f)||3&this.__$f)return!0;for(var d in a)if(d!=="__source"&&a[d]!==this.props[d])return!0;for(var h in this.props)if(!(h in a))return!0;return!1};function Y1(a){return yn(function(){return ht(a)},[])}function Co(a){var r=ue(a);r.current=a,Ce(function(){return Hs(function(){return r.current()})},[])}function R0(a,r){for(var o in r)a[o]=r[o];return a}function Gd(a,r){for(var o in a)if(o!=="__source"&&!(o in r))return!0;for(var l in r)if(l!=="__source"&&a[l]!==r[l])return!0;return!1}function X1(a,r){var o=r(),l=Ee({t:{__:o,u:r}}),c=l[0].t,d=l[1];return yf(function(){c.__=o,c.u=r,id(c)&&d({t:c})},[a,o,r]),Ce(function(){return id(c)&&d({t:c}),a(function(){id(c)&&d({t:c})})},[a]),o}function id(a){var r,o,l=a.u,c=a.__;try{var d=l();return!((r=c)===(o=d)&&(r!==0||1/r==1/o)||r!=r&&o!=o)}catch{return!0}}function rv(a,r){this.props=a,this.context=r}function js(a,r){function o(c){var d=this.props.ref,h=d==c.ref;return!h&&d&&(d.call?d(null):d.current=null),r?!r(this.props,c)||!h:Gd(this.props,c)}function l(c){return this.shouldComponentUpdate=o,ir(a,c)}return l.displayName="Memo("+(a.displayName||a.name)+")",l.prototype.isReactComponent=!0,l.__f=!0,l.type=a,l}(rv.prototype=new cn).isPureReactComponent=!0,rv.prototype.shouldComponentUpdate=function(a,r){return Gd(this.props,a)||Gd(this.state,r)};var iv=we.__b;we.__b=function(a){a.type&&a.type.__f&&a.ref&&(a.props.ref=a.ref,a.ref=null),iv&&iv(a)};var q1=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Sf(a){function r(o){var l=R0({},o);return delete l.ref,a(l,o.ref||null)}return r.$$typeof=q1,r.render=a,r.prototype.isReactComponent=r.__f=!0,r.displayName="ForwardRef("+(a.displayName||a.name)+")",r}var V1=we.__e;we.__e=function(a,r,o,l){if(a.then){for(var c,d=r;d=d.__;)if((c=d.__c)&&c.__c)return r.__e==null&&(r.__e=o.__e,r.__k=o.__k),c.__c(a,r)}V1(a,r,o,l)};var ov=we.unmount;function U0(a,r,o){return a&&(a.__c&&a.__c.__H&&(a.__c.__H.__.forEach(function(l){typeof l.__c=="function"&&l.__c()}),a.__c.__H=null),(a=R0({},a)).__c!=null&&(a.__c.__P===o&&(a.__c.__P=r),a.__c.__e=!0,a.__c=null),a.__k=a.__k&&a.__k.map(function(l){return U0(l,r,o)})),a}function H0(a,r,o){return a&&o&&(a.__v=null,a.__k=a.__k&&a.__k.map(function(l){return H0(l,r,o)}),a.__c&&a.__c.__P===r&&(a.__e&&o.appendChild(a.__e),a.__c.__e=!0,a.__c.__P=o)),a}function od(){this.__u=0,this.o=null,this.__b=null}function j0(a){if(!a.__)return null;var r=a.__.__c;return r&&r.__a&&r.__a(a)}function ns(){this.i=null,this.l=null}we.unmount=function(a){var r=a.__c;r&&(r.__z=!0),r&&r.__R&&r.__R(),r&&32&a.__u&&(a.type=null),ov&&ov(a)},(od.prototype=new cn).__c=function(a,r){var o=r.__c,l=this;l.o==null&&(l.o=[]),l.o.push(o);var c=j0(l.__v),d=!1,h=function(){d||l.__z||(d=!0,o.__R=null,c?c(m):m())};o.__R=h;var p=o.__P;o.__P=null;var m=function(){if(!--l.__u){if(l.state.__a){var g=l.state.__a;l.__v.__k[0]=H0(g,g.__c.__P,g.__c.__O)}var w;for(l.setState({__a:l.__b=null});w=l.o.pop();)w.__P=p,w.forceUpdate()}};l.__u++||32&r.__u||l.setState({__a:l.__b=l.__v.__k[0]}),a.then(h,h)},od.prototype.componentWillUnmount=function(){this.o=[]},od.prototype.render=function(a,r){if(this.__b){if(this.__v.__k){var o=document.createElement("div"),l=this.__v.__k[0].__c;this.__v.__k[0]=U0(this.__b,o,l.__O=l.__P)}this.__b=null}var c=r.__a&&ir(De,null,a.fallback);return c&&(c.__u&=-33),[ir(De,null,r.__a?null:a.children),c]};var lv=function(a,r,o){if(++o[1]===o[0]&&a.l.delete(r),a.props.revealOrder&&(a.props.revealOrder[0]!=="t"||!a.l.size))for(o=a.i;o;){for(;o.length>3;)o.pop()();if(o[1]<o[0])break;a.i=o=o[2]}};function F1(a){return this.getChildContext=function(){return a.context},a.children}function G1(a){var r=this,o=a.h;if(r.componentWillUnmount=function(){mo(null,r.v),r.v=null,r.h=null},r.h&&r.h!==o&&r.componentWillUnmount(),!r.v){for(var l=r.__v;l!==null&&!l.__m&&l.__!==null;)l=l.__;r.h=o,r.v={nodeType:1,parentNode:o,childNodes:[],__k:{__m:l.__m},contains:function(){return!0},namespaceURI:o.namespaceURI,insertBefore:function(c,d){this.childNodes.push(c),r.h.insertBefore(c,d)},removeChild:function(c){this.childNodes.splice(this.childNodes.indexOf(c)>>>1,1),r.h.removeChild(c)}}}mo(ir(F1,{context:r.context},a.__v),r.v)}function $1(a,r){var o=ir(G1,{__v:a,h:r});return o.containerInfo=r,o}(ns.prototype=new cn).__a=function(a){var r=this,o=j0(r.__v),l=r.l.get(a);return l[0]++,function(c){var d=function(){r.props.revealOrder?(l.push(c),lv(r,a,l)):c()};o?o(d):d()}},ns.prototype.render=function(a){this.i=null,this.l=new Map;var r=ys(a.children);a.revealOrder&&a.revealOrder[0]==="b"&&r.reverse();for(var o=r.length;o--;)this.l.set(r[o],this.i=[1,0,this.i]);return a.children},ns.prototype.componentDidUpdate=ns.prototype.componentDidMount=function(){var a=this;this.l.forEach(function(r,o){lv(a,o,r)})};var Q1=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Z1=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,I1=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,J1=/[A-Z0-9]/g,K1=typeof document<"u",W1=function(a){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(a)};cn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(a){Object.defineProperty(cn.prototype,a,{configurable:!0,get:function(){return this["UNSAFE_"+a]},set:function(r){Object.defineProperty(this,a,{configurable:!0,writable:!0,value:r})}})});var sv=we.event;function P1(){}function ex(){return this.cancelBubble}function tx(){return this.defaultPrevented}we.event=function(a){return sv&&(a=sv(a)),a.persist=P1,a.isPropagationStopped=ex,a.isDefaultPrevented=tx,a.nativeEvent=a};var nx={enumerable:!1,configurable:!0,get:function(){return this.class}},cv=we.vnode;we.vnode=function(a){typeof a.type=="string"&&(function(r){var o=r.props,l=r.type,c={},d=l.indexOf("-")===-1;for(var h in o){var p=o[h];if(!(h==="value"&&"defaultValue"in o&&p==null||K1&&h==="children"&&l==="noscript"||h==="class"||h==="className")){var m=h.toLowerCase();h==="defaultValue"&&"value"in o&&o.value==null?h="value":h==="download"&&p===!0?p="":m==="translate"&&p==="no"?p=!1:m[0]==="o"&&m[1]==="n"?m==="ondoubleclick"?h="ondblclick":m!=="onchange"||l!=="input"&&l!=="textarea"||W1(o.type)?m==="onfocus"?h="onfocusin":m==="onblur"?h="onfocusout":I1.test(h)&&(h=m):m=h="oninput":d&&Z1.test(h)?h=h.replace(J1,"-$&").toLowerCase():p===null&&(p=void 0),m==="oninput"&&c[h=m]&&(h="oninputCapture"),c[h]=p}}l=="select"&&c.multiple&&Array.isArray(c.value)&&(c.value=ys(o.children).forEach(function(g){g.props.selected=c.value.indexOf(g.props.value)!=-1})),l=="select"&&c.defaultValue!=null&&(c.value=ys(o.children).forEach(function(g){g.props.selected=c.multiple?c.defaultValue.indexOf(g.props.value)!=-1:c.defaultValue==g.props.value})),o.class&&!o.className?(c.class=o.class,Object.defineProperty(c,"className",nx)):(o.className&&!o.class||o.class&&o.className)&&(c.class=c.className=o.className),r.props=c})(a),a.$$typeof=Q1,cv&&cv(a)};var uv=we.__r;we.__r=function(a){uv&&uv(a),a.__c};var dv=we.diffed;we.diffed=function(a){dv&&dv(a);var r=a.props,o=a.__e;o!=null&&a.type==="textarea"&&"value"in r&&r.value!==o.value&&(o.value=r.value==null?"":r.value)};var ax=0;function f(a,r,o,l,c,d){r||(r={});var h,p,m=r;if("ref"in m)for(p in m={},r)p=="ref"?h=r[p]:m[p]=r[p];var g={type:a,props:m,key:o,ref:h,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--ax,__i:-1,__u:0,__source:c,__self:d};if(typeof a=="function"&&(h=a.defaultProps))for(p in h)m[p]===void 0&&(m[p]=h[p]);return we.vnode&&we.vnode(g),g}var ld={exports:{}},ve={};var fv;function rx(){if(fv)return ve;fv=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),_=Symbol.iterator;function S(T){return T===null||typeof T!="object"?null:(T=_&&T[_]||T["@@iterator"],typeof T=="function"?T:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,R={};function C(T,H,F){this.props=T,this.context=H,this.refs=R,this.updater=F||k}C.prototype.isReactComponent={},C.prototype.setState=function(T,H){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,H,"setState")},C.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function M(){}M.prototype=C.prototype;function q(T,H,F){this.props=T,this.context=H,this.refs=R,this.updater=F||k}var $=q.prototype=new M;$.constructor=q,z($,C.prototype),$.isPureReactComponent=!0;var Z=Array.isArray;function W(){}var K={H:null,A:null,T:null,S:null},fe=Object.prototype.hasOwnProperty;function ie(T,H,F){var I=F.ref;return{$$typeof:a,type:T,key:H,ref:I!==void 0?I:null,props:F}}function oe(T,H){return ie(T.type,H,T.props)}function le(T){return typeof T=="object"&&T!==null&&T.$$typeof===a}function ee(T){var H={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(F){return H[F]})}var ge=/\/+/g;function me(T,H){return typeof T=="object"&&T!==null&&T.key!=null?ee(""+T.key):H.toString(36)}function ke(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(W,W):(T.status="pending",T.then(function(H){T.status==="pending"&&(T.status="fulfilled",T.value=H)},function(H){T.status==="pending"&&(T.status="rejected",T.reason=H)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function x(T,H,F,I,P){var re=typeof T;(re==="undefined"||re==="boolean")&&(T=null);var pe=!1;if(T===null)pe=!0;else switch(re){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(T.$$typeof){case a:case r:pe=!0;break;case w:return pe=T._init,x(pe(T._payload),H,F,I,P)}}if(pe)return P=P(T),pe=I===""?"."+me(T,0):I,Z(P)?(F="",pe!=null&&(F=pe.replace(ge,"$&/")+"/"),x(P,H,F,"",function(pt){return pt})):P!=null&&(le(P)&&(P=oe(P,F+(P.key==null||T&&T.key===P.key?"":(""+P.key).replace(ge,"$&/")+"/")+pe)),H.push(P)),1;pe=0;var Ue=I===""?".":I+":";if(Z(T))for(var _e=0;_e<T.length;_e++)I=T[_e],re=Ue+me(I,_e),pe+=x(I,H,F,re,P);else if(_e=S(T),typeof _e=="function")for(T=_e.call(T),_e=0;!(I=T.next()).done;)I=I.value,re=Ue+me(I,_e++),pe+=x(I,H,F,re,P);else if(re==="object"){if(typeof T.then=="function")return x(ke(T),H,F,I,P);throw H=String(T),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return pe}function N(T,H,F){if(T==null)return T;var I=[],P=0;return x(T,I,"","",function(re){return H.call(F,re,P++)}),I}function U(T){if(T._status===-1){var H=T._result;H=H(),H.then(function(F){(T._status===0||T._status===-1)&&(T._status=1,T._result=F)},function(F){(T._status===0||T._status===-1)&&(T._status=2,T._result=F)}),T._status===-1&&(T._status=0,T._result=H)}if(T._status===1)return T._result.default;throw T._result}var Q=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},J={map:N,forEach:function(T,H,F){N(T,function(){H.apply(this,arguments)},F)},count:function(T){var H=0;return N(T,function(){H++}),H},toArray:function(T){return N(T,function(H){return H})||[]},only:function(T){if(!le(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return ve.Activity=y,ve.Children=J,ve.Component=C,ve.Fragment=o,ve.Profiler=c,ve.PureComponent=q,ve.StrictMode=l,ve.Suspense=m,ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,ve.__COMPILER_RUNTIME={__proto__:null,c:function(T){return K.H.useMemoCache(T)}},ve.cache=function(T){return function(){return T.apply(null,arguments)}},ve.cacheSignal=function(){return null},ve.cloneElement=function(T,H,F){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var I=z({},T.props),P=T.key;if(H!=null)for(re in H.key!==void 0&&(P=""+H.key),H)!fe.call(H,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&H.ref===void 0||(I[re]=H[re]);var re=arguments.length-2;if(re===1)I.children=F;else if(1<re){for(var pe=Array(re),Ue=0;Ue<re;Ue++)pe[Ue]=arguments[Ue+2];I.children=pe}return ie(T.type,P,I)},ve.createContext=function(T){return T={$$typeof:h,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:d,_context:T},T},ve.createElement=function(T,H,F){var I,P={},re=null;if(H!=null)for(I in H.key!==void 0&&(re=""+H.key),H)fe.call(H,I)&&I!=="key"&&I!=="__self"&&I!=="__source"&&(P[I]=H[I]);var pe=arguments.length-2;if(pe===1)P.children=F;else if(1<pe){for(var Ue=Array(pe),_e=0;_e<pe;_e++)Ue[_e]=arguments[_e+2];P.children=Ue}if(T&&T.defaultProps)for(I in pe=T.defaultProps,pe)P[I]===void 0&&(P[I]=pe[I]);return ie(T,re,P)},ve.createRef=function(){return{current:null}},ve.forwardRef=function(T){return{$$typeof:p,render:T}},ve.isValidElement=le,ve.lazy=function(T){return{$$typeof:w,_payload:{_status:-1,_result:T},_init:U}},ve.memo=function(T,H){return{$$typeof:g,type:T,compare:H===void 0?null:H}},ve.startTransition=function(T){var H=K.T,F={};K.T=F;try{var I=T(),P=K.S;P!==null&&P(F,I),typeof I=="object"&&I!==null&&typeof I.then=="function"&&I.then(W,Q)}catch(re){Q(re)}finally{H!==null&&F.types!==null&&(H.types=F.types),K.T=H}},ve.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},ve.use=function(T){return K.H.use(T)},ve.useActionState=function(T,H,F){return K.H.useActionState(T,H,F)},ve.useCallback=function(T,H){return K.H.useCallback(T,H)},ve.useContext=function(T){return K.H.useContext(T)},ve.useDebugValue=function(){},ve.useDeferredValue=function(T,H){return K.H.useDeferredValue(T,H)},ve.useEffect=function(T,H){return K.H.useEffect(T,H)},ve.useEffectEvent=function(T){return K.H.useEffectEvent(T)},ve.useId=function(){return K.H.useId()},ve.useImperativeHandle=function(T,H,F){return K.H.useImperativeHandle(T,H,F)},ve.useInsertionEffect=function(T,H){return K.H.useInsertionEffect(T,H)},ve.useLayoutEffect=function(T,H){return K.H.useLayoutEffect(T,H)},ve.useMemo=function(T,H){return K.H.useMemo(T,H)},ve.useOptimistic=function(T,H){return K.H.useOptimistic(T,H)},ve.useReducer=function(T,H,F){return K.H.useReducer(T,H,F)},ve.useRef=function(T){return K.H.useRef(T)},ve.useState=function(T){return K.H.useState(T)},ve.useSyncExternalStore=function(T,H,F){return K.H.useSyncExternalStore(T,H,F)},ve.useTransition=function(){return K.H.useTransition()},ve.version="19.2.4",ve}var hv;function Tf(){return hv||(hv=1,ld.exports=rx()),ld.exports}var be=Tf();const Uo=$w(be);Array.prototype.toSorted||Object.defineProperty(Array.prototype,"toSorted",{value:function(a){return[...this].sort(a)},writable:!0,configurable:!0});function ix(a,r){return r-a}function ox(a){let r=a[0].name;const o=a.length,l=Math.min(4,o);for(let c=1;c<l;c++)r+=`, ${a[c].name}`;return r}function lx(a){let r=a[0].time;for(let o=1,l=a.length;o<l;o++)r+=a[o].time;return r}function sx(a){for(let r=0,o=a.length;r<o;r++)if(a[r].forget)return!0;return!1}var cx=a=>{let r="";const o=new Map;for(const h of a){const{forget:p,time:m,aggregatedCount:g,name:w}=h;o.has(g)||o.set(g,[]);const y=o.get(g);y&&y.push({name:w,forget:p,time:m??0})}const l=Array.from(o.keys()).sort(ix),c=[];let d=0;for(const h of l){const p=o.get(h);if(!p)continue;let m=ox(p);const g=lx(p),w=sx(p);d+=g,p.length>4&&(m+="…"),h>1&&(m+=` × ${h}`),w&&(m=`✨${m}`),c.push(m)}return r=c.join(", "),r.length?(r.length>40&&(r=`${r.slice(0,40)}…`),d>=.01&&(r+=` (${Number(d.toFixed(2))}ms)`),r):null};function Ma(a,r){return a===r||a!==a&&r!==r}var Cf=a=>{const r=a.createOscillator(),o=a.createGain();r.connect(o),o.connect(a.destination);const l={type:"sine",freq:[392,600],duration:.3,gain:.12},c=l.freq,d=l.duration/c.length;c.forEach((h,p)=>{r.frequency.setValueAtTime(h,a.currentTime+p*d)}),r.type=l.type,o.gain.setValueAtTime(l.gain,a.currentTime),o.gain.setTargetAtTime(0,a.currentTime+l.duration*.7,.05),r.start(),r.stop(a.currentTime+l.duration)},ux=a=>new Promise(r=>{const o=new Map,l=new IntersectionObserver(c=>{for(const d of c){const h=d.target,p=d.boundingClientRect;o.set(h,p)}l.disconnect(),r(o)});for(const c of a)l.observe(c)}),dx={mount:1,update:2,unmount:4},nt=Sf(({size:a=15,name:r,fill:o="currentColor",stroke:l="currentColor",className:c,externalURL:d="",style:h},p)=>{const m=Array.isArray(a)?a[0]:a,g=Array.isArray(a)?a[1]||a[0]:a,w=`${d}#${r}`;return f("svg",{ref:p,width:`${m}px`,height:`${g}px`,fill:o,stroke:l,className:c,style:{...h,minWidth:`${m}px`,maxWidth:`${m}px`,minHeight:`${g}px`,maxHeight:`${g}px`},children:[f("title",{children:r}),f("use",{href:w})]})}),ye=24,ft={width:550,height:350,initialHeight:400},gn=240,Jn="react-scan-widget-settings-v2",hs="react-scan-widget-collapsed-v1",Ir="react-scan-widget-last-view-v1",En=typeof window<"u";function L0(a){var r,o,l="";if(typeof a=="string"||typeof a=="number")l+=a;else if(typeof a=="object")if(Array.isArray(a)){var c=a.length;for(r=0;r<c;r++)a[r]&&(o=L0(a[r]))&&(l&&(l+=" "),l+=o)}else for(o in a)a[o]&&(l&&(l+=" "),l+=o);return l}function fx(){for(var a,r,o=0,l="",c=arguments.length;o<c;o++)(a=arguments[o])&&(r=L0(a))&&(l&&(l+=" "),l+=r);return l}var kf="-",hx=a=>{const r=mx(a),{conflictingClassGroups:o,conflictingClassGroupModifiers:l}=a;return{getClassGroupId:h=>{const p=h.split(kf);return p[0]===""&&p.length!==1&&p.shift(),B0(p,r)||px(h)},getConflictingClassGroupIds:(h,p)=>{const m=o[h]||[];return p&&l[h]?[...m,...l[h]]:m}}},B0=(a,r)=>{if(a.length===0)return r.classGroupId;const o=a[0],l=r.nextPart.get(o),c=l?B0(a.slice(1),l):void 0;if(c)return c;if(r.validators.length===0)return;const d=a.join(kf);return r.validators.find(({validator:h})=>h(d))?.classGroupId},pv=/^\[(.+)\]$/,px=a=>{if(pv.test(a)){const r=pv.exec(a)[1],o=r?.substring(0,r.indexOf(":"));if(o)return"arbitrary.."+o}},mx=a=>{const{theme:r,prefix:o}=a,l={nextPart:new Map,validators:[]};return vx(Object.entries(a.classGroups),o).forEach(([d,h])=>{$d(h,l,d,r)}),l},$d=(a,r,o,l)=>{a.forEach(c=>{if(typeof c=="string"){const d=c===""?r:mv(r,c);d.classGroupId=o;return}if(typeof c=="function"){if(gx(c)){$d(c(l),r,o,l);return}r.validators.push({validator:c,classGroupId:o});return}Object.entries(c).forEach(([d,h])=>{$d(h,mv(r,d),o,l)})})},mv=(a,r)=>{let o=a;return r.split(kf).forEach(l=>{o.nextPart.has(l)||o.nextPart.set(l,{nextPart:new Map,validators:[]}),o=o.nextPart.get(l)}),o},gx=a=>a.isThemeGetter,vx=(a,r)=>r?a.map(([o,l])=>{const c=l.map(d=>typeof d=="string"?r+d:typeof d=="object"?Object.fromEntries(Object.entries(d).map(([h,p])=>[r+h,p])):d);return[o,c]}):a,yx=a=>{if(a<1)return{get:()=>{},set:()=>{}};let r=0,o=new Map,l=new Map;const c=(d,h)=>{o.set(d,h),r++,r>a&&(r=0,l=o,o=new Map)};return{get(d){let h=o.get(d);if(h!==void 0)return h;if((h=l.get(d))!==void 0)return c(d,h),h},set(d,h){o.has(d)?o.set(d,h):c(d,h)}}},Y0="!",bx=a=>{const{separator:r,experimentalParseClassName:o}=a,l=r.length===1,c=r[0],d=r.length,h=p=>{const m=[];let g=0,w=0,y;for(let R=0;R<p.length;R++){let C=p[R];if(g===0){if(C===c&&(l||p.slice(R,R+d)===r)){m.push(p.slice(w,R)),w=R+d;continue}if(C==="/"){y=R;continue}}C==="["?g++:C==="]"&&g--}const _=m.length===0?p:p.substring(w),S=_.startsWith(Y0),k=S?_.substring(1):_,z=y&&y>w?y-w:void 0;return{modifiers:m,hasImportantModifier:S,baseClassName:k,maybePostfixModifierPosition:z}};return o?p=>o({className:p,parseClassName:h}):h},wx=a=>{if(a.length<=1)return a;const r=[];let o=[];return a.forEach(l=>{l[0]==="["?(r.push(...o.sort(),l),o=[]):o.push(l)}),r.push(...o.sort()),r},xx=a=>({cache:yx(a.cacheSize),parseClassName:bx(a),...hx(a)}),_x=/\s+/,Sx=(a,r)=>{const{parseClassName:o,getClassGroupId:l,getConflictingClassGroupIds:c}=r,d=[],h=a.trim().split(_x);let p="";for(let m=h.length-1;m>=0;m-=1){const g=h[m],{modifiers:w,hasImportantModifier:y,baseClassName:_,maybePostfixModifierPosition:S}=o(g);let k=!!S,z=l(k?_.substring(0,S):_);if(!z){if(!k){p=g+(p.length>0?" "+p:p);continue}if(z=l(_),!z){p=g+(p.length>0?" "+p:p);continue}k=!1}const R=wx(w).join(":"),C=y?R+Y0:R,M=C+z;if(d.includes(M))continue;d.push(M);const q=c(z,k);for(let $=0;$<q.length;++$){const Z=q[$];d.push(C+Z)}p=g+(p.length>0?" "+p:p)}return p};function Tx(){let a=0,r,o,l="";for(;a<arguments.length;)(r=arguments[a++])&&(o=X0(r))&&(l&&(l+=" "),l+=o);return l}var X0=a=>{if(typeof a=="string")return a;let r,o="";for(let l=0;l<a.length;l++)a[l]&&(r=X0(a[l]))&&(o&&(o+=" "),o+=r);return o};function Cx(a,...r){let o,l,c,d=h;function h(m){const g=r.reduce((w,y)=>y(w),a());return o=xx(g),l=o.cache.get,c=o.cache.set,d=p,p(m)}function p(m){const g=l(m);if(g)return g;const w=Sx(m,o);return c(m,w),w}return function(){return d(Tx.apply(null,arguments))}}var Je=a=>{const r=o=>o[a]||[];return r.isThemeGetter=!0,r},q0=/^\[(?:([a-z-]+):)?(.+)\]$/i,kx=/^\d+\/\d+$/,Ex=new Set(["px","full","screen"]),zx=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Nx=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ax=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Mx=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ox=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Qn=a=>ni(a)||Ex.has(a)||kx.test(a),Ta=a=>di(a,"length",Yx),ni=a=>!!a&&!Number.isNaN(Number(a)),sd=a=>di(a,"number",ni),io=a=>!!a&&Number.isInteger(Number(a)),Dx=a=>a.endsWith("%")&&ni(a.slice(0,-1)),Te=a=>q0.test(a),Ca=a=>zx.test(a),Rx=new Set(["length","size","percentage"]),Ux=a=>di(a,Rx,V0),Hx=a=>di(a,"position",V0),jx=new Set(["image","url"]),Lx=a=>di(a,jx,qx),Bx=a=>di(a,"",Xx),oo=()=>!0,di=(a,r,o)=>{const l=q0.exec(a);return l?l[1]?typeof r=="string"?l[1]===r:r.has(l[1]):o(l[2]):!1},Yx=a=>Nx.test(a)&&!Ax.test(a),V0=()=>!1,Xx=a=>Mx.test(a),qx=a=>Ox.test(a),Vx=()=>{const a=Je("colors"),r=Je("spacing"),o=Je("blur"),l=Je("brightness"),c=Je("borderColor"),d=Je("borderRadius"),h=Je("borderSpacing"),p=Je("borderWidth"),m=Je("contrast"),g=Je("grayscale"),w=Je("hueRotate"),y=Je("invert"),_=Je("gap"),S=Je("gradientColorStops"),k=Je("gradientColorStopPositions"),z=Je("inset"),R=Je("margin"),C=Je("opacity"),M=Je("padding"),q=Je("saturate"),$=Je("scale"),Z=Je("sepia"),W=Je("skew"),K=Je("space"),fe=Je("translate"),ie=()=>["auto","contain","none"],oe=()=>["auto","hidden","clip","visible","scroll"],le=()=>["auto",Te,r],ee=()=>[Te,r],ge=()=>["",Qn,Ta],me=()=>["auto",ni,Te],ke=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],x=()=>["solid","dashed","dotted","double","none"],N=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],U=()=>["start","end","center","between","around","evenly","stretch"],Q=()=>["","0",Te],J=()=>["auto","avoid","all","avoid-page","page","left","right","column"],T=()=>[ni,Te];return{cacheSize:500,separator:":",theme:{colors:[oo],spacing:[Qn,Ta],blur:["none","",Ca,Te],brightness:T(),borderColor:[a],borderRadius:["none","","full",Ca,Te],borderSpacing:ee(),borderWidth:ge(),contrast:T(),grayscale:Q(),hueRotate:T(),invert:Q(),gap:ee(),gradientColorStops:[a],gradientColorStopPositions:[Dx,Ta],inset:le(),margin:le(),opacity:T(),padding:ee(),saturate:T(),scale:T(),sepia:Q(),skew:T(),space:ee(),translate:ee()},classGroups:{aspect:[{aspect:["auto","square","video",Te]}],container:["container"],columns:[{columns:[Ca]}],"break-after":[{"break-after":J()}],"break-before":[{"break-before":J()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...ke(),Te]}],overflow:[{overflow:oe()}],"overflow-x":[{"overflow-x":oe()}],"overflow-y":[{"overflow-y":oe()}],overscroll:[{overscroll:ie()}],"overscroll-x":[{"overscroll-x":ie()}],"overscroll-y":[{"overscroll-y":ie()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[z]}],"inset-x":[{"inset-x":[z]}],"inset-y":[{"inset-y":[z]}],start:[{start:[z]}],end:[{end:[z]}],top:[{top:[z]}],right:[{right:[z]}],bottom:[{bottom:[z]}],left:[{left:[z]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",io,Te]}],basis:[{basis:le()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Te]}],grow:[{grow:Q()}],shrink:[{shrink:Q()}],order:[{order:["first","last","none",io,Te]}],"grid-cols":[{"grid-cols":[oo]}],"col-start-end":[{col:["auto",{span:["full",io,Te]},Te]}],"col-start":[{"col-start":me()}],"col-end":[{"col-end":me()}],"grid-rows":[{"grid-rows":[oo]}],"row-start-end":[{row:["auto",{span:[io,Te]},Te]}],"row-start":[{"row-start":me()}],"row-end":[{"row-end":me()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Te]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Te]}],gap:[{gap:[_]}],"gap-x":[{"gap-x":[_]}],"gap-y":[{"gap-y":[_]}],"justify-content":[{justify:["normal",...U()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...U(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...U(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[M]}],px:[{px:[M]}],py:[{py:[M]}],ps:[{ps:[M]}],pe:[{pe:[M]}],pt:[{pt:[M]}],pr:[{pr:[M]}],pb:[{pb:[M]}],pl:[{pl:[M]}],m:[{m:[R]}],mx:[{mx:[R]}],my:[{my:[R]}],ms:[{ms:[R]}],me:[{me:[R]}],mt:[{mt:[R]}],mr:[{mr:[R]}],mb:[{mb:[R]}],ml:[{ml:[R]}],"space-x":[{"space-x":[K]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[K]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Te,r]}],"min-w":[{"min-w":[Te,r,"min","max","fit"]}],"max-w":[{"max-w":[Te,r,"none","full","min","max","fit","prose",{screen:[Ca]},Ca]}],h:[{h:[Te,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Te,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Te,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Te,r,"auto","min","max","fit"]}],"font-size":[{text:["base",Ca,Ta]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",sd]}],"font-family":[{font:[oo]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Te]}],"line-clamp":[{"line-clamp":["none",ni,sd]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Qn,Te]}],"list-image":[{"list-image":["none",Te]}],"list-style-type":[{list:["none","disc","decimal",Te]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[a]}],"placeholder-opacity":[{"placeholder-opacity":[C]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[a]}],"text-opacity":[{"text-opacity":[C]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...x(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Qn,Ta]}],"underline-offset":[{"underline-offset":["auto",Qn,Te]}],"text-decoration-color":[{decoration:[a]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:ee()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Te]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Te]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[C]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...ke(),Hx]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Ux]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Lx]}],"bg-color":[{bg:[a]}],"gradient-from-pos":[{from:[k]}],"gradient-via-pos":[{via:[k]}],"gradient-to-pos":[{to:[k]}],"gradient-from":[{from:[S]}],"gradient-via":[{via:[S]}],"gradient-to":[{to:[S]}],rounded:[{rounded:[d]}],"rounded-s":[{"rounded-s":[d]}],"rounded-e":[{"rounded-e":[d]}],"rounded-t":[{"rounded-t":[d]}],"rounded-r":[{"rounded-r":[d]}],"rounded-b":[{"rounded-b":[d]}],"rounded-l":[{"rounded-l":[d]}],"rounded-ss":[{"rounded-ss":[d]}],"rounded-se":[{"rounded-se":[d]}],"rounded-ee":[{"rounded-ee":[d]}],"rounded-es":[{"rounded-es":[d]}],"rounded-tl":[{"rounded-tl":[d]}],"rounded-tr":[{"rounded-tr":[d]}],"rounded-br":[{"rounded-br":[d]}],"rounded-bl":[{"rounded-bl":[d]}],"border-w":[{border:[p]}],"border-w-x":[{"border-x":[p]}],"border-w-y":[{"border-y":[p]}],"border-w-s":[{"border-s":[p]}],"border-w-e":[{"border-e":[p]}],"border-w-t":[{"border-t":[p]}],"border-w-r":[{"border-r":[p]}],"border-w-b":[{"border-b":[p]}],"border-w-l":[{"border-l":[p]}],"border-opacity":[{"border-opacity":[C]}],"border-style":[{border:[...x(),"hidden"]}],"divide-x":[{"divide-x":[p]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[p]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[C]}],"divide-style":[{divide:x()}],"border-color":[{border:[c]}],"border-color-x":[{"border-x":[c]}],"border-color-y":[{"border-y":[c]}],"border-color-s":[{"border-s":[c]}],"border-color-e":[{"border-e":[c]}],"border-color-t":[{"border-t":[c]}],"border-color-r":[{"border-r":[c]}],"border-color-b":[{"border-b":[c]}],"border-color-l":[{"border-l":[c]}],"divide-color":[{divide:[c]}],"outline-style":[{outline:["",...x()]}],"outline-offset":[{"outline-offset":[Qn,Te]}],"outline-w":[{outline:[Qn,Ta]}],"outline-color":[{outline:[a]}],"ring-w":[{ring:ge()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[a]}],"ring-opacity":[{"ring-opacity":[C]}],"ring-offset-w":[{"ring-offset":[Qn,Ta]}],"ring-offset-color":[{"ring-offset":[a]}],shadow:[{shadow:["","inner","none",Ca,Bx]}],"shadow-color":[{shadow:[oo]}],opacity:[{opacity:[C]}],"mix-blend":[{"mix-blend":[...N(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":N()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[l]}],contrast:[{contrast:[m]}],"drop-shadow":[{"drop-shadow":["","none",Ca,Te]}],grayscale:[{grayscale:[g]}],"hue-rotate":[{"hue-rotate":[w]}],invert:[{invert:[y]}],saturate:[{saturate:[q]}],sepia:[{sepia:[Z]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[l]}],"backdrop-contrast":[{"backdrop-contrast":[m]}],"backdrop-grayscale":[{"backdrop-grayscale":[g]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[w]}],"backdrop-invert":[{"backdrop-invert":[y]}],"backdrop-opacity":[{"backdrop-opacity":[C]}],"backdrop-saturate":[{"backdrop-saturate":[q]}],"backdrop-sepia":[{"backdrop-sepia":[Z]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[h]}],"border-spacing-x":[{"border-spacing-x":[h]}],"border-spacing-y":[{"border-spacing-y":[h]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Te]}],duration:[{duration:T()}],ease:[{ease:["linear","in","out","in-out",Te]}],delay:[{delay:T()}],animate:[{animate:["none","spin","ping","pulse","bounce",Te]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[$]}],"scale-x":[{"scale-x":[$]}],"scale-y":[{"scale-y":[$]}],rotate:[{rotate:[io,Te]}],"translate-x":[{"translate-x":[fe]}],"translate-y":[{"translate-y":[fe]}],"skew-x":[{"skew-x":[W]}],"skew-y":[{"skew-y":[W]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Te]}],accent:[{accent:["auto",a]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Te]}],"caret-color":[{caret:[a]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":ee()}],"scroll-mx":[{"scroll-mx":ee()}],"scroll-my":[{"scroll-my":ee()}],"scroll-ms":[{"scroll-ms":ee()}],"scroll-me":[{"scroll-me":ee()}],"scroll-mt":[{"scroll-mt":ee()}],"scroll-mr":[{"scroll-mr":ee()}],"scroll-mb":[{"scroll-mb":ee()}],"scroll-ml":[{"scroll-ml":ee()}],"scroll-p":[{"scroll-p":ee()}],"scroll-px":[{"scroll-px":ee()}],"scroll-py":[{"scroll-py":ee()}],"scroll-ps":[{"scroll-ps":ee()}],"scroll-pe":[{"scroll-pe":ee()}],"scroll-pt":[{"scroll-pt":ee()}],"scroll-pr":[{"scroll-pr":ee()}],"scroll-pb":[{"scroll-pb":ee()}],"scroll-pl":[{"scroll-pl":ee()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Te]}],fill:[{fill:[a,"none"]}],"stroke-w":[{stroke:[Qn,Ta,sd]}],stroke:[{stroke:[a,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Fx=Cx(Vx),O=(...a)=>Fx(fx(a));typeof navigator<"u"&&navigator.userAgent.includes("Firefox");var F0=(a,r)=>{let o=0;return l=>{const c=Date.now();if(c-o>=r)return o=c,a(l)}},Kn=a=>{if(!En)return null;try{const r=localStorage.getItem(a);return r?JSON.parse(r):null}catch{return null}},Lt=(a,r)=>{if(En)try{window.localStorage.setItem(a,JSON.stringify(r))}catch{}},gv=a=>{if(En)try{window.localStorage.removeItem(a)}catch{}},Gx=24,$x=12,ko=a=>{if(!a)return{name:"Unknown",wrappers:[],wrapperTypes:[]};const{tag:r,type:o,elementType:l}=a;let c=bt(o);const d=[],h=[];if(xo(a)||r===Oo||r===Mo||o?.$$typeof===Symbol.for("react.memo")||l?.$$typeof===Symbol.for("react.memo")){const p=xo(a);h.push({type:"memo",title:p?"This component has been auto-memoized by the React Compiler.":"Memoized component that skips re-renders if props are the same",compiler:p})}if(r===Gx&&h.push({type:"lazy",title:"Lazily loaded component that supports code splitting"}),r===Ds&&h.push({type:"suspense",title:"Component that can suspend while content is loading"}),r===$x&&h.push({type:"profiler",title:"Component that measures rendering performance"}),typeof c=="string"){const p=/^(\w+)\((.*)\)$/;let m=c;for(;p.test(m);){const g=m.match(p);if(g?.[1]&&g?.[2])d.unshift(g[1]),m=g[2];else break}c=m}return{name:c||"Unknown",wrappers:d,wrapperTypes:h}},Ls=ht(!1),Qd=ht(null),Tn={corner:"bottom-right",dimensions:{isFullWidth:!1,isFullHeight:!1,width:ft.width,height:ft.height,position:{x:ye,y:ye}},lastDimensions:{isFullWidth:!1,isFullHeight:!1,width:ft.width,height:ft.height,position:{x:ye,y:ye}},componentsTree:{width:gn}},Qx=()=>{const a=Kn(Jn);return a?{corner:a.corner??Tn.corner,dimensions:a.dimensions??Tn.dimensions,lastDimensions:a.lastDimensions??a.dimensions??Tn.lastDimensions,componentsTree:a.componentsTree??Tn.componentsTree}:(Lt(Jn,{corner:Tn.corner,dimensions:Tn.dimensions,lastDimensions:Tn.lastDimensions,componentsTree:Tn.componentsTree}),Tn)},ae=ht(Qx()),cd=()=>{if(!En)return;const{dimensions:a}=ae.value,{width:r,height:o,position:l}=a;ae.value={...ae.value,dimensions:{isFullWidth:r>=window.innerWidth-ye*2,isFullHeight:o>=window.innerHeight-ye*2,width:r,height:o,position:l}}},Qe=ht({view:"none"}),Zx=Kn(hs),It=ht(Zx??null);function Ix(){return!1}function Ef(a){function r(o){return this.shouldComponentUpdate=Ix,ir(a,o)}return r.displayName=`Memo(${a.displayName||a.name})`,r.prototype.isReactComponent=!0,r._forwarded=!0,r}var Jx=a=>{const{count:r,getScrollElement:o,estimateSize:l,overscan:c=5}=a,[d,h]=Ee(0),[p,m]=Ee(0),g=ue(),w=ue(null),y=ue(null),_=l(),S=ot(C=>{if(!w.current)return;const M=C?.[0]?.contentRect.height??w.current.getBoundingClientRect().height;m(M)},[]),k=ot(()=>{y.current!==null&&cancelAnimationFrame(y.current),y.current=requestAnimationFrame(()=>{S(),y.current=null})},[S]);Ce(()=>{const C=o();if(!C)return;w.current=C;const M=()=>{w.current&&h(w.current.scrollTop)};S(),g.current||(g.current=new ResizeObserver(()=>{k()})),g.current.observe(C),C.addEventListener("scroll",M,{passive:!0});const q=new MutationObserver(k);return q.observe(C,{attributes:!0,childList:!0,subtree:!0}),()=>{C.removeEventListener("scroll",M),g.current&&g.current.disconnect(),q.disconnect(),y.current!==null&&cancelAnimationFrame(y.current)}},[o,S,k]);const z=yn(()=>{const C=Math.floor(d/_),M=Math.ceil(p/_);return{start:Math.max(0,C-c),end:Math.min(r,C+M+c)}},[d,_,p,r,c]);return{virtualItems:yn(()=>{const C=[];for(let M=z.start;M<z.end;M++)C.push({key:M,index:M,start:M*_});return C},[z,_]),totalSize:r*_,scrollTop:d,containerHeight:p}};Kn("react-scann-pinned");var Kx=a=>{const r=[];let o=a;for(;o;){const l=o.elementType,c=typeof l=="function"?l.displayName||l.name:typeof l=="string"?l:"Unknown",d=o.index!==void 0?`[${o.index}]`:"";r.unshift(`${c}${d}`),o=o.return??null}return r.join("::")},Ka=new WeakMap,Wx=(a,r)=>{const o=r.bind(null,a);return document.addEventListener("scroll",o,{passive:!0,capture:!0}),()=>{document.removeEventListener("scroll",o,{capture:!0})}},Px={activeFlashes:new Map,create(a){const r=a.querySelector(".react-scan-flash-overlay"),o=r instanceof HTMLElement?r:(()=>{const c=document.createElement("div");c.className="react-scan-flash-overlay",a.appendChild(c);const d=Wx(a,()=>{a.querySelector(".react-scan-flash-overlay")&&this.create(a)});return this.activeFlashes.set(a,{element:a,overlay:c,scrollCleanup:d}),c})(),l=Ka.get(o);l&&(clearTimeout(l),Ka.delete(o)),requestAnimationFrame(()=>{o.style.transition="none",o.style.opacity="0.9";const c=setTimeout(()=>{o.style.transition="opacity 150ms ease-out",o.style.opacity="0";const d=setTimeout(()=>{o.parentNode&&o.parentNode.removeChild(o);const h=this.activeFlashes.get(a);h?.scrollCleanup&&h.scrollCleanup(),this.activeFlashes.delete(a),Ka.delete(o)},150);Ka.set(o,d)},300);Ka.set(o,c)})},cleanup(a){const r=this.activeFlashes.get(a);if(r){const o=Ka.get(r.overlay);o&&(clearTimeout(o),Ka.delete(r.overlay)),r.overlay.parentNode&&r.overlay.parentNode.removeChild(r.overlay),r.scrollCleanup&&r.scrollCleanup(),this.activeFlashes.delete(a)}},cleanupAll(){for(const[,a]of this.activeFlashes)this.cleanup(a.element)}},vv=1e3,G0={updates:[],currentFiber:null,totalUpdates:0,windowOffset:0,currentIndex:0,isViewingHistory:!1,latestFiber:null,isVisible:!1,playbackSpeed:1},At=ht(G0),zf=ht(0),nr=[],Wa=null,e2=()=>{if(nr.length===0)return;const a=[...nr],{updates:r,totalUpdates:o,currentIndex:l,isViewingHistory:c}=At.value,d=[...r];let h=o;for(const{update:w}of a)d.length>=vv&&d.shift(),d.push(w),h++;const p=Math.max(0,h-vv);let m;c?l===o-1?m=d.length-1:l===0?m=0:p===0?m=l:m=l-1:m=d.length-1;const g=a[a.length-1];At.value={...At.value,latestFiber:g.fiber,updates:d,totalUpdates:h,windowOffset:p,currentIndex:m,isViewingHistory:c},nr=nr.slice(a.length)},$0={showTimeline:()=>{At.value={...At.value,isVisible:!0}},hideTimeline:()=>{At.value={...At.value,isVisible:!1,currentIndex:At.value.updates.length-1}},updateFrame:(a,r)=>{At.value={...At.value,currentIndex:a,isViewingHistory:r}},updatePlaybackSpeed:a=>{At.value={...At.value,playbackSpeed:a}},addUpdate:(a,r)=>{if(nr.push({update:a,fiber:r}),!Wa){const o=()=>{e2(),Wa=null,nr.length>0&&(Wa=setTimeout(o,96))};Wa=setTimeout(o,96)}},reset:()=>{Wa&&(clearTimeout(Wa),Wa=null),nr=[],At.value=G0}},Et=ht({query:"",matches:[],currentMatchIndex:-1}),ud=ht(!1),Q0=(a,r=0,o=null)=>a.reduce((l,c,d)=>{const h=c.element?Kx(c.fiber):`${o}-${d}`,p=c.fiber?.type?iy(c.fiber):void 0,m={...c,depth:r,nodeId:h,parentId:o,fiber:c.fiber,renderData:p};return l.push(m),c.children?.length&&l.push(...Q0(c.children,r+1,h)),l},[]),t2=a=>a.reduce((r,o)=>Math.max(r,o.depth),0),n2=(a,r)=>{if(r<=0)return 24;const d=Math.max(0,a-gn);if(d<24)return 0;const p=Math.min(d*.3,r*24)/r;return Math.max(0,Math.min(24,p))},a2=["memo","forwardRef","lazy","suspense"],Z0=a=>{const r=a.match(/\[(.*?)\]/);if(!r)return null;const o=[],l=r[1].split(",");for(const c of l){const d=c.trim().toLowerCase();d&&o.push(d)}return o},r2=a=>{if(a.length===0)return!1;for(const r of a){let o=!1;for(const l of a2)if(l.toLowerCase().includes(r)){o=!0;break}if(!o)return!1}return!0},I0=(a,r)=>{if(a.length===0)return!0;if(!r.length)return!1;for(const o of a){let l=!1;for(const c of r)if(c.type.toLowerCase().includes(o)){l=!0;break}if(!l)return!1}return!0},i2=(a,r)=>yn(()=>{const{query:o,matches:l}=r,c=l.some(g=>g.nodeId===a.nodeId),d=Z0(o)||[],h=o?o.replace(/\[.*?\]/,"").trim():"";if(!o||!c)return{highlightedText:f("span",{className:"truncate",children:a.label}),typeHighlight:!1};let p=!0;if(d.length>0)if(!a.fiber)p=!1;else{const{wrapperTypes:g}=ko(a.fiber);p=I0(d,g)}let m=f("span",{className:"truncate",children:a.label});if(h)try{if(h.startsWith("/")&&h.endsWith("/")){const g=h.slice(1,-1),w=new RegExp(`(${g})`,"i"),y=a.label.split(w);m=f("span",{className:"tree-node-search-highlight",children:y.map((_,S)=>w.test(_)?f("span",{className:O("regex",{start:w.test(_)&&S===0,middle:w.test(_)&&S%2===1,end:w.test(_)&&S===y.length-1,"!ml-0":S===1}),children:_},`${a.nodeId}-${_}`):_)})}else{const g=a.label.toLowerCase(),w=h.toLowerCase(),y=g.indexOf(w);y>=0&&(m=f("span",{className:"tree-node-search-highlight",children:[a.label.slice(0,y),f("span",{className:"single",children:a.label.slice(y,y+h.length)}),a.label.slice(y+h.length)]}))}}catch{}return{highlightedText:m,typeHighlight:p&&d.length>0}},[a.label,a.nodeId,a.fiber,r]),yv=a=>a>0?a<.1-Number.EPSILON?"< 0.1":a<1e3?Number(a.toFixed(1)).toString():`${(a/1e3).toFixed(1)}k`:"0",o2=({node:a,nodeIndex:r,hasChildren:o,isCollapsed:l,handleTreeNodeClick:c,handleTreeNodeToggle:d,searchValue:h})=>{const p=ue(null),m=ue(a.renderData?.renderCount??0),{highlightedText:g,typeHighlight:w}=i2(a,h);Ce(()=>{const S=a.renderData?.renderCount,k=p.current;!k||!m.current||!S||m.current===S||(k.classList.remove("count-flash"),k.offsetWidth,k.classList.add("count-flash"),m.current=S)},[a.renderData?.renderCount]);const y=yn(()=>{if(!a.renderData)return null;const{selfTime:S,totalTime:k,renderCount:z}=a.renderData;return z?f("span",{className:O("flex items-center gap-x-0.5 ml-1.5","text-[10px] text-neutral-400"),children:f("span",{ref:p,title:`Self time: ${yv(S)}ms
Total time: ${yv(k)}ms`,className:"count-badge",children:["×",z]})}):null},[a.renderData]),_=yn(()=>{if(!a.fiber)return null;const{wrapperTypes:S}=ko(a.fiber),k=S[0];return f("span",{className:O("flex items-center gap-x-1","text-[10px] text-neutral-400 tracking-wide","overflow-hidden"),children:[k&&f(De,{children:[f("span",{title:k?.title,className:O("rounded py-[1px] px-1","bg-neutral-700 text-neutral-300","truncate",k.type==="memo"&&"bg-[#8e61e3] text-white",w&&"bg-yellow-300 text-black"),children:k.type},k.type),k.compiler&&f("span",{className:"text-yellow-300 ml-1",children:"✨"})]}),S.length>1&&`×${S.length}`,y]})},[a.fiber,w,y]);return f("button",{type:"button",title:a.title,"data-index":r,className:O("flex items-center gap-x-1","pl-1 pr-2","w-full h-7","text-left","rounded","cursor-pointer select-none"),onClick:c,children:[f("button",{type:"button","data-index":r,onClick:d,className:O("w-6 h-6 flex items-center justify-center","text-left"),children:o&&f(nt,{name:"icon-chevron-right",size:12,className:O("transition-transform",!l&&"rotate-90")})}),g,_]})},l2=()=>{const a=ue(null),r=ue(null),o=ue(null),l=ue(null),c=ue(null),d=ue(0),h=ue(!1),p=ue(!1),m=ue(null),[g,w]=Ee([]),[y,_]=Ee(new Set),[S,k]=Ee(void 0),[z,R]=Ee(Et.value),C=yn(()=>{const x=[],N=g,U=new Map(N.map(Q=>[Q.nodeId,Q]));for(const Q of N){let J=!0,T=Q;for(;T.parentId;){const H=U.get(T.parentId);if(!H)break;if(y.has(H.nodeId)){J=!1;break}T=H}J&&x.push(Q)}return x},[y,g]),M=28,{virtualItems:q,totalSize:$}=Jx({count:C.length,getScrollElement:()=>a.current,estimateSize:()=>M,overscan:5}),Z=ot(x=>{h.current=!0,l.current?.blur(),ud.value=!0;const{parentCompositeFiber:N}=ar(x);if(!N)return;te.inspectState.value={kind:"focused",focusedDomElement:x,fiber:N};const U=C.findIndex(Q=>Q.element===x);if(U!==-1){k(U);const Q=U*M,J=a.current;if(J){const T=J.clientHeight,H=J.scrollTop;(Q<H||Q+M>H+T)&&J.scrollTo({top:Math.max(0,Q-T/2),behavior:"instant"})}}},[C]),W=ot(x=>{const N=x.currentTarget,U=Number(N.dataset.index);if(Number.isNaN(U))return;const Q=C[U].element;Q&&Z(Q)},[C,Z]),K=ot(x=>{_(N=>{const U=new Set(N);return U.has(x)?U.delete(x):U.add(x),U})},[]),fe=ot(x=>{x.stopPropagation();const N=x.target,U=Number(N.dataset.index);if(Number.isNaN(U))return;const Q=C[U].nodeId;K(Q)},[C,K]),ie=ot(x=>{o.current?.classList.remove("!border-red-500");const N=[];if(!x){Et.value={query:x,matches:N,currentMatchIndex:-1};return}if(x.includes("[")&&!x.includes("]")&&x.length>x.indexOf("[")+1){o.current?.classList.add("!border-red-500");return}const U=Z0(x)||[];if(x.includes("[")&&!r2(U)){o.current?.classList.add("!border-red-500");return}const Q=x.replace(/\[.*?\]/,"").trim(),J=/^\/.*\/$/.test(Q);let T=H=>!1;if(Q.startsWith("/")&&!J&&Q.length>1){o.current?.classList.add("!border-red-500");return}if(J)try{const H=Q.slice(1,-1),F=new RegExp(H,"i");T=I=>F.test(I)}catch{o.current?.classList.add("!border-red-500");return}else if(Q){const H=Q.toLowerCase();T=F=>F.toLowerCase().includes(H)}for(const H of g){let F=!0;if(Q&&(F=T(H.label)),F&&U.length>0)if(!H.fiber)F=!1;else{const{wrapperTypes:I}=ko(H.fiber);F=I0(U,I)}F&&N.push(H)}if(Et.value={query:x,matches:N,currentMatchIndex:N.length>0?0:-1},N.length>0){const H=N[0],F=C.findIndex(I=>I.nodeId===H.nodeId);if(F!==-1){const I=F*M,P=a.current;if(P){const re=P.clientHeight;P.scrollTo({top:Math.max(0,I-re/2),behavior:"instant"})}}}},[g,C]),oe=ot(x=>{const N=x.currentTarget;N&&ie(N.value)},[ie]),le=ot(x=>{const{matches:N,currentMatchIndex:U}=Et.value;if(N.length===0)return;const Q=x==="next"?(U+1)%N.length:(U-1+N.length)%N.length;Et.value={...Et.value,currentMatchIndex:Q};const J=N[Q],T=C.findIndex(H=>H.nodeId===J.nodeId);if(T!==-1){k(T);const H=T*M,F=a.current;if(F){const I=F.clientHeight;F.scrollTo({top:Math.max(0,H-I/2),behavior:"instant"})}}},[C]),ee=ot(x=>{if(r.current&&(r.current.style.width=`${x}px`),a.current){a.current.style.width=`${x}px`;const N=n2(x,d.current);a.current.style.setProperty("--indentation-size",`${N}px`)}},[]),ge=ot(x=>{if(!m.current)return;const N=ae.value.dimensions.width,U=Math.floor(N-gn/2);m.current.classList.remove("cursor-ew-resize","cursor-w-resize","cursor-e-resize"),x<=gn?m.current.classList.add("cursor-w-resize"):x>=U?m.current.classList.add("cursor-e-resize"):m.current.classList.add("cursor-ew-resize")},[]),me=ot(x=>{if(x.preventDefault(),x.stopPropagation(),!a.current)return;a.current.style.setProperty("pointer-events","none"),p.current=!0;const N=x.clientX,U=a.current.offsetWidth,Q=ae.value.dimensions.width,J=Math.floor(Q-gn/2);ge(U);const T=F=>{const I=N-F.clientX,P=U+I;ge(P);const re=Math.min(J,Math.max(gn,P));ee(re)},H=()=>{a.current&&(a.current.style.removeProperty("pointer-events"),document.removeEventListener("pointermove",T),document.removeEventListener("pointerup",H),ae.value={...ae.value,componentsTree:{...ae.value.componentsTree,width:a.current.offsetWidth}},Lt(Jn,ae.value),p.current=!1)};document.addEventListener("pointermove",T),document.addEventListener("pointerup",H)},[ee,ge]);Ce(()=>{if(!a.current)return;const x=a.current.offsetWidth;return ge(x),ae.subscribe(()=>{a.current&&ge(a.current.offsetWidth)})},[ge]);const ke=ot(()=>{h.current=!1},[]);return Ce(()=>{let x=!0;const N=H=>{const F=new Map,I=[];for(const{element:P,name:re,fiber:pe}of H){if(!P)continue;let Ue=re;const{name:_e,wrappers:pt}=ko(pe);_e&&(pt.length>0?Ue=`${pt.join("(")}(${_e})${")".repeat(pt.length)}`:Ue=_e),F.set(P,{label:_e||re,title:Ue,children:[],element:P,fiber:pe})}for(const{element:P,depth:re}of H){if(!P)continue;const pe=F.get(P);if(pe)if(re===0)I.push(pe);else{let Ue=P.parentElement;for(;Ue;){const _e=F.get(Ue);if(_e){_e.children=_e.children||[],_e.children.push(pe);break}Ue=Ue.parentElement}}}return I},U=()=>{const H=c.current;if(!H)return;const F=E2(),I=N(F);if(I.length>0){const P=Q0(I),re=t2(P);if(d.current=re,ee(ae.value.componentsTree.width),w(P),x){x=!1;const pe=P.findIndex(Ue=>Ue.element===H);if(pe!==-1){const Ue=pe*M,_e=a.current;_e&&setTimeout(()=>{_e.scrollTo({top:Ue,behavior:"instant"})},96)}}}},Q=te.inspectState.subscribe(H=>{if(H.kind==="focused"){if(ud.value)return;ie(""),c.current=H.focusedDomElement,U()}});let J=0;const T=zf.subscribe(()=>{if(te.inspectState.value.kind==="focused"){if(cancelAnimationFrame(J),p.current)return;J=requestAnimationFrame(()=>{ud.value=!1,U()})}});return()=>{Q(),T(),Et.value={query:"",matches:[],currentMatchIndex:-1}}},[]),Ce(()=>{const x=N=>{if(h.current&&S)switch(N.key){case"ArrowUp":{if(N.preventDefault(),N.stopPropagation(),S>0){const U=C[S-1];U?.element&&Z(U.element)}return}case"ArrowDown":{if(N.preventDefault(),N.stopPropagation(),S<C.length-1){const U=C[S+1];U?.element&&Z(U.element)}return}case"ArrowLeft":{N.preventDefault(),N.stopPropagation();const U=C[S];U?.nodeId&&K(U.nodeId);return}case"ArrowRight":{N.preventDefault(),N.stopPropagation();const U=C[S];U?.nodeId&&K(U.nodeId);return}}};return document.addEventListener("keydown",x),()=>{document.removeEventListener("keydown",x)}},[S,C,Z,K]),Ce(()=>Et.subscribe(R),[]),Ce(()=>ae.subscribe(N=>{r.current?.style.setProperty("transition","width 0.1s"),ee(N.componentsTree.width),setTimeout(()=>{r.current?.style.removeProperty("transition")},500)}),[]),f("div",{className:"react-scan-components-tree flex",children:[f("div",{ref:m,onPointerDown:me,className:"relative resize-v-line",children:f("span",{children:f(nt,{name:"icon-ellipsis",size:18})})}),f("div",{ref:r,className:"flex flex-col h-full",children:[f("div",{className:"p-2 border-b border-[#1e1e1e]",children:f("div",{ref:o,title:`Search components by:

• Name (e.g., "Button") — Case insensitive, matches any part

• Regular Expression (e.g., "/^Button/") — Use forward slashes

• Wrapper Type (e.g., "[memo,forwardRef]"):
   - Available types: memo, forwardRef, lazy, suspense
   - Matches any part of type name (e.g., "mo" matches "memo")
   - Use commas for multiple types

• Combined Search:
   - Mix name/regex with type: "button [for]"
   - Will match components satisfying both conditions

• Navigation:
   - Enter → Next match
   - Shift + Enter → Previous match
   - Cmd/Ctrl + Enter → Select and focus match
`,className:O("relative","flex items-center gap-x-1 px-2","rounded","border border-transparent","focus-within:border-[#454545]","bg-[#1e1e1e] text-neutral-300","transition-colors","whitespace-nowrap","overflow-hidden"),children:[f(nt,{name:"icon-search",size:12,className:" text-neutral-500"}),f("div",{className:"relative flex-1 h-7 overflow-hidden",children:f("input",{ref:l,type:"text",value:Et.value.query,onClick:x=>{x.stopPropagation(),x.currentTarget.focus()},onPointerDown:x=>{x.stopPropagation()},onKeyDown:x=>{x.key==="Escape"&&x.currentTarget.blur(),Et.value.matches.length&&(x.key==="Enter"&&x.shiftKey?le("prev"):x.key==="Enter"&&(x.metaKey||x.ctrlKey?(x.preventDefault(),x.stopPropagation(),Z(Et.value.matches[Et.value.currentMatchIndex].element),x.currentTarget.focus()):le("next")))},onChange:oe,className:"absolute inset-y-0 inset-x-1",placeholder:"Component name, /regex/, or [type]"})}),Et.value.query?f(De,{children:[f("span",{className:"flex items-center gap-x-0.5 text-xs text-neutral-500",children:[Et.value.currentMatchIndex+1,"|",Et.value.matches.length]}),!!Et.value.matches.length&&f(De,{children:[f("button",{type:"button",onClick:x=>{x.stopPropagation(),le("prev")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:f(nt,{name:"icon-chevron-right",className:"-rotate-90",size:12})}),f("button",{type:"button",onClick:x=>{x.stopPropagation(),le("next")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:f(nt,{name:"icon-chevron-right",className:"rotate-90",size:12})})]}),f("button",{type:"button",onClick:x=>{x.stopPropagation(),ie("")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:f(nt,{name:"icon-close",size:12})})]}):!!g.length&&f("span",{className:"text-xs text-neutral-500",children:g.length})]})}),f("div",{className:"flex-1 overflow-hidden",children:f("div",{ref:a,onPointerLeave:ke,className:"tree h-full overflow-auto will-change-transform",children:f("div",{className:"relative w-full",style:{height:$},children:q.map(x=>{const N=C[x.index];if(!N)return null;const U=te.inspectState.value.kind==="focused"&&N.element===te.inspectState.value.focusedDomElement,Q=x.index===S;return f("div",{className:O("absolute left-0 w-full overflow-hidden","text-neutral-400 hover:text-neutral-300","bg-transparent hover:bg-[#5f3f9a]/20",(U||Q)&&"text-neutral-300 bg-[#5f3f9a]/40 hover:bg-[#5f3f9a]/40"),style:{top:x.start,height:M},children:f("div",{className:"w-full h-full",style:{paddingLeft:`calc(${N.depth} * var(--indentation-size))`},children:f(o2,{node:N,nodeIndex:x.index,hasChildren:!!N.children?.length,isCollapsed:y.has(N.nodeId),handleTreeNodeClick:W,handleTreeNodeToggle:fe,searchValue:z})})},N.nodeId)})})})})]})]})},xs=js(({text:a,children:r,onCopy:o,className:l,iconSize:c=14})=>{const[d,h]=Ee(!1);Ce(()=>{if(d){const g=setTimeout(()=>h(!1),600);return()=>{clearTimeout(g)}}},[d]);const p=ot(g=>{g.preventDefault(),g.stopPropagation(),navigator.clipboard.writeText(a).then(()=>{h(!0),o?.(!0,a)},()=>{o?.(!1,a)})},[a,o]),m=f("button",{onClick:p,type:"button",className:O("z-10","flex items-center justify-center","hover:text-dev-pink-400","transition-colors duration-200 ease-in-out","cursor-pointer",`size-[${c}px]`,l),children:f(nt,{name:`icon-${d?"check":"copy"}`,size:[c],className:O(d&&"text-green-500")})});return r?r({ClipboardIcon:m,onClick:p}):m}),s2=({length:a,expanded:r,onToggle:o,isNegative:l})=>f("div",{className:"flex items-center gap-1",children:[f("button",{type:"button",onClick:o,className:"flex items-center p-0 opacity-50",children:f(nt,{name:"icon-chevron-right",size:12,className:O("transition-[color,transform]",l?"text-[#f87171]":"text-[#4ade80]",r&&"rotate-90")})}),f("span",{children:["Array(",a,")"]})]}),Zd=({value:a,path:r,isNegative:o})=>{const[l,c]=Ee(!1);if(!(a!==null&&typeof a=="object"&&!(a instanceof Date)))return f("div",{className:"flex items-center gap-1",children:[f("span",{className:"text-gray-500",children:[r,":"]}),f("span",{className:"truncate",children:Cs(a)})]});const h=Object.entries(a);return f("div",{className:"flex flex-col",children:[f("div",{className:"flex items-center gap-1",children:[f("button",{type:"button",onClick:()=>c(!l),className:"flex items-center p-0 opacity-50",children:f(nt,{name:"icon-chevron-right",size:12,className:O("transition-[color,transform]",o?"text-[#f87171]":"text-[#4ade80]",l&&"rotate-90")})}),f("span",{className:"text-gray-500",children:[r,":"]}),!l&&f("span",{className:"truncate",children:a instanceof Date?Cs(a):`{${Object.keys(a).join(", ")}}`})]}),l&&f("div",{className:"pl-5 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:h.map(([p,m])=>f(Zd,{value:m,path:p,isNegative:o},p))})]})},_s=({value:a,expanded:r,onToggle:o,isNegative:l})=>{const{value:c,error:d}=A2(a);return d?f("span",{className:"text-gray-500 font-italic",children:d}):c!==null&&typeof c=="object"&&!(c instanceof Promise)?Array.isArray(c)?f("div",{className:"flex flex-col gap-1 relative",children:[f(s2,{length:c.length,expanded:r,onToggle:o,isNegative:l}),r&&f("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:c.map((p,m)=>f(Zd,{value:p,path:m.toString(),isNegative:l},m.toString()))}),f(xs,{text:Sv(c),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:p})=>f(De,{children:p})})]}):f("div",{className:"flex items-start gap-1 relative",children:[f("button",{type:"button",onClick:o,className:O("flex items-center","p-0 mt-0.5 mr-1","opacity-50"),children:f(nt,{name:"icon-chevron-right",size:12,className:O("transition-[color,transform]",l?"text-[#f87171]":"text-[#4ade80]",r&&"rotate-90")})}),f("div",{className:"flex-1",children:r?f("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:Object.entries(c).map(([p,m])=>f(Zd,{value:m,path:p,isNegative:l},p))}):f("span",{children:Cs(c)})}),f(xs,{text:Sv(c),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:p})=>f(De,{children:p})})]}):f("span",{children:Cs(c)})},c2=50;ht({fiber:null,fiberProps:{current:[],changes:new Set},fiberState:{current:[],changes:new Set},fiberContext:{current:[],changes:new Set}});var Id=a=>{switch(a.kind){case"initialized":return a.changes.currentValue;case"partially-initialized":return a.value}},bv=(a,r)=>{for(const o of a){const l=r.get(o.name);if(l){r.set(l.name,{count:l.count+1,currentValue:o.value,id:l.name,lastUpdated:Date.now(),name:l.name,previousValue:o.prevValue});continue}r.set(o.name,{count:1,currentValue:o.value,id:o.name,lastUpdated:Date.now(),name:o.name,previousValue:o.prevValue})}},u2=(a,r)=>{for(const o of a){const l=r.contextChanges.get(o.contextType);if(l){if(Ma(Id(l),o.value))continue;if(l.kind==="partially-initialized"){r.contextChanges.set(o.contextType,{kind:"initialized",changes:{count:1,currentValue:o.value,id:o.contextType.toString(),lastUpdated:Date.now(),name:o.name,previousValue:l.value}});continue}r.contextChanges.set(o.contextType,{kind:"initialized",changes:{count:l.changes.count+1,currentValue:o.value,id:o.contextType.toString(),lastUpdated:Date.now(),name:o.name,previousValue:l.changes.currentValue}});continue}r.contextChanges.set(o.contextType,{kind:"partially-initialized",id:o.contextType.toString(),lastUpdated:Date.now(),name:o.name,value:o.value})}},d2=a=>{const r={contextChanges:new Map,propsChanges:new Map,stateChanges:new Map};return a.forEach(o=>{u2(o.contextChanges,r),bv(o.stateChanges,r.stateChanges),bv(o.propsChanges,r.propsChanges)}),r},wv=(a,r)=>{const o=new Map;return a.forEach((l,c)=>{o.set(c,l)}),r.forEach((l,c)=>{const d=o.get(c);if(!d){o.set(c,l);return}o.set(c,{count:d.count+l.count,currentValue:l.currentValue,id:l.id,lastUpdated:l.lastUpdated,name:l.name,previousValue:l.previousValue})}),o},f2=(a,r)=>{const o=new Map;return a.contextChanges.forEach((l,c)=>{o.set(c,l)}),r.contextChanges.forEach((l,c)=>{const d=o.get(c);if(!d){o.set(c,l);return}if(Id(l)!==Id(d))switch(d.kind){case"initialized":switch(l.kind){case"initialized":{o.set(c,{kind:"initialized",changes:{...l.changes,count:l.changes.count+d.changes.count+1,currentValue:l.changes.currentValue,previousValue:l.changes.previousValue}});return}case"partially-initialized":{o.set(c,{kind:"initialized",changes:{count:d.changes.count+1,currentValue:l.value,id:l.id,lastUpdated:l.lastUpdated,name:l.name,previousValue:d.changes.currentValue}});return}}case"partially-initialized":switch(l.kind){case"initialized":{o.set(c,{kind:"initialized",changes:{count:l.changes.count+1,currentValue:l.changes.currentValue,id:l.changes.id,lastUpdated:l.changes.lastUpdated,name:l.changes.name,previousValue:d.value}});return}case"partially-initialized":{o.set(c,{kind:"initialized",changes:{count:1,currentValue:l.value,id:l.id,lastUpdated:l.lastUpdated,name:l.name,previousValue:d.value}});return}}}}),o},h2=(a,r)=>{const o=f2(a,r),l=wv(a.propsChanges,r.propsChanges),c=wv(a.stateChanges,r.stateChanges);return{contextChanges:o,propsChanges:l,stateChanges:c}},Jd=a=>Array.from(a.propsChanges.values()).reduce((r,o)=>r+o.count,0)+Array.from(a.stateChanges.values()).reduce((r,o)=>r+o.count,0)+Array.from(a.contextChanges.values()).filter(r=>r.kind==="initialized").reduce((r,o)=>r+o.changes.count,0),p2=a=>{const r=ue({queue:[]}),[o,l]=Ee({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),c=te.inspectState.value.kind==="focused"?te.inspectState.value.fiber:null,d=c?Aa(c):null;return Ce(()=>{const h=setInterval(()=>{r.current.queue.length!==0&&(l(p=>{const m=d2(r.current.queue),g=h2(p,m);return Jd(p),Jd(g),g}),r.current.queue=[])},c2);return()=>{clearInterval(h)}},[c]),Ce(()=>{if(!d)return;const h=m=>{r.current?.queue.push(m)};let p=te.changesListeners.get(d);return p||(p=[],te.changesListeners.set(d,p)),p.push(h),()=>{l({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),r.current.queue=[],te.changesListeners.set(d,te.changesListeners.get(d)?.filter(m=>m!==h)??[])}},[d]),Ce(()=>()=>{l({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),r.current.queue=[]},[d]),o},Ss=a=>{if(a==null)return{value:a};if(typeof a=="function")return{value:a};if(typeof a!="object")return{value:a};if(ri(a))return{value:"Promise"};try{const r=Object.getPrototypeOf(a);return r===Promise.prototype||r?.constructor?.name==="Promise"?{value:"Promise"}:{value:a}}catch{return{value:null,error:"Error accessing value"}}},m2=js(()=>{const[a,r]=Ee(!0),o=p2(),[l,c]=Ee(!1),d=Jd(o)>0;Ce(()=>{if(!l&&d){const m=setTimeout(()=>{c(!0),requestAnimationFrame(()=>{r(!0)})},0);return()=>clearTimeout(m)}},[l,d]);const h=new Map(Array.from(o.contextChanges.entries()).filter(([,m])=>m.kind==="initialized").map(([m,g])=>[m,g.kind==="partially-initialized"?null:g.changes])),p=te.inspectState.value.kind==="focused"?te.inspectState.value.fiber:null;if(p)return f(De,{children:[f(v2,{}),f("div",{className:"overflow-hidden h-full flex flex-col gap-y-2",children:[f("div",{className:"flex flex-col gap-2 px-3 pt-2",children:[f("span",{className:"text-sm font-medium text-[#888]",children:["Why did"," ",f("span",{className:"text-[#A855F7]",children:bt(p)})," ","render?"]}),!d&&f("div",{className:"text-sm text-[#737373] bg-[#1E1E1E] rounded-md p-4 flex flex-col gap-4",children:[f("div",{children:"No changes detected since selecting"}),f("div",{children:"The props, state, and context changes within your component will be reported here"})]})]}),f("div",{className:O("flex flex-col gap-y-2 pl-3 relative overflow-y-auto h-full"),children:[f(dd,{changes:o.propsChanges,title:"Changed Props",isExpanded:a}),f(dd,{renderName:m=>g2(m,bt(sr(p))??"Unknown Component"),changes:o.stateChanges,title:"Changed State",isExpanded:a}),f(dd,{changes:h,title:"Changed Context",isExpanded:a})]})]})]})}),g2=(a,r)=>{if(Number.isNaN(Number(a)))return a;const o=Number.parseInt(a);return f("span",{className:"truncate",children:[f("span",{className:"text-white",children:[o,(c=>{const d=c%10,h=c%100;if(h>=11&&h<=13)return"th";switch(d){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}})(o)," hook"," "]}),f("span",{style:{color:"#666"},children:["called in ",f("i",{className:"text-[#A855F7] truncate",children:r})]})]})},v2=js(()=>{const a=ue(null),r=ue(null),o=ue(null),l=ue({isPropsChanged:!1,isStateChanged:!1,isContextChanged:!1});return Ce(()=>{const c=F0(()=>{const h=[];a.current?.dataset.flash==="true"&&h.push(a.current),r.current?.dataset.flash==="true"&&h.push(r.current),o.current?.dataset.flash==="true"&&h.push(o.current);for(const p of h)p.classList.remove("count-flash-white"),p.offsetWidth,p.classList.add("count-flash-white")},400);return At.subscribe(h=>{if(!a.current||!r.current||!o.current)return;const{currentIndex:p,updates:m}=h,g=m[p];!g||p===0||(c(),l.current={isPropsChanged:(g.props?.changes?.size??0)>0,isStateChanged:(g.state?.changes?.size??0)>0,isContextChanged:(g.context?.changes?.size??0)>0},a.current.dataset.flash!=="true"&&(a.current.dataset.flash=l.current.isPropsChanged.toString()),r.current.dataset.flash!=="true"&&(r.current.dataset.flash=l.current.isStateChanged.toString()),o.current.dataset.flash!=="true"&&(o.current.dataset.flash=l.current.isContextChanged.toString()))})},[]),f("button",{type:"button",className:O("react-section-header","overflow-hidden","max-h-0","transition-[max-height]"),children:f("div",{className:O("flex-1 react-scan-expandable"),children:f("div",{className:"overflow-hidden",children:f("div",{className:"flex items-center whitespace-nowrap",children:[f("div",{className:"flex items-center gap-x-2",children:"What changed?"}),f("div",{className:O("ml-auto","change-scope","transition-opacity duration-300 delay-150"),children:[f("div",{ref:a,children:"props"}),f("div",{ref:r,children:"state"}),f("div",{ref:o,children:"context"})]})]})})})})}),y2=a=>a,dd=js(({title:a,changes:r,renderName:o=y2})=>{const[l,c]=Ee(new Set),[d,h]=Ee(new Set),p=Array.from(r.entries());return r.size===0?null:f("div",{children:[f("div",{className:"text-xs text-[#888] mb-1.5",children:a}),f("div",{className:"flex flex-col gap-2",children:p.map(([m,g])=>{const w=d.has(String(m)),{value:y,error:_}=Ss(g.previousValue),{value:S,error:k}=Ss(g.currentValue),z=P0(y,S);return f("div",{children:[f("button",{onClick:()=>{h(R=>{const C=new Set(R);return C.has(String(m))?C.delete(String(m)):C.add(String(m)),C})},className:"flex items-center gap-2 w-full bg-transparent border-none p-0 cursor-pointer text-white text-xs",children:f("div",{className:"flex items-center gap-1.5 flex-1",children:[f(nt,{name:"icon-chevron-right",size:12,className:O("text-[#666] transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]",{"rotate-90":w})}),f("div",{className:"whitespace-pre-wrap break-words text-left font-medium flex items-center gap-x-1.5",children:[o(g.name),f(_2,{count:g.count,isFunction:typeof g.currentValue=="function",showWarning:z.changes.length===0,forceFlash:!0})]})]})}),f("div",{className:O("react-scan-expandable",{"react-scan-expanded":w}),children:f("div",{className:"pl-3 text-xs font-mono border-l-1 border-[#333]",children:f("div",{className:"flex flex-col gap-0.5",children:_||k?f(b2,{currError:k,prevError:_}):z.changes.length>0?f(w2,{change:g,diff:z,expandedFns:l,renderName:o,setExpandedFns:c,title:a}):f(x2,{currValue:S,entryKey:m,expandedFns:l,prevValue:y,setExpandedFns:c})})})})]},m)})})]})}),b2=({prevError:a,currError:r})=>f(De,{children:[a&&f("div",{className:"text-[#f87171] bg-[#2a1515] pr-1.5 py-[3px] rounded italic",children:a}),r&&f("div",{className:"text-[#4ade80] bg-[#1a2a1a] pr-1.5 py-[3px] rounded italic mt-0.5",children:r})]}),w2=({diff:a,title:r,renderName:o,change:l,expandedFns:c,setExpandedFns:d})=>a.changes.map((h,p)=>{const{value:m,error:g}=Ss(h.prevValue),{value:w,error:y}=Ss(h.currentValue),_=typeof m=="function"||typeof w=="function";let S;return r==="Props"&&(S=h.path.length>0?`${o(String(l.name))}.${hn(h.path)}`:void 0),r==="State"&&h.path.length>0&&(S=`state.${hn(h.path)}`),S||(S=hn(h.path)),f("div",{className:O("flex flex-col gap-y-1",p<a.changes.length-1&&"mb-4"),children:[S&&f("div",{className:"text-[#666] text-[10px]",children:S}),f("button",{type:"button",className:O("group","flex items-start","py-[3px] px-1.5","text-left text-[#f87171] bg-[#2a1515]","rounded","overflow-hidden break-all",_&&"cursor-pointer"),onClick:_?()=>{const k=`${hn(h.path)}-prev`;d(z=>{const R=new Set(z);return R.has(k)?R.delete(k):R.add(k),R})}:void 0,children:[f("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),f("span",{className:"flex-1 whitespace-nowrap font-mono",children:g?f("span",{className:"italic text-[#f87171]",children:g}):_?f("div",{className:"flex gap-1 items-start flex-col",children:[f("div",{className:"flex gap-1 items-start w-full",children:[f("span",{className:"flex-1 max-h-40",children:Wd(m,c.has(`${hn(h.path)}-prev`))}),typeof m=="function"&&f(xs,{text:m.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:k})=>f(De,{children:k})})]}),m?.toString()===w?.toString()&&f("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):f(_s,{value:m,expanded:c.has(`${hn(h.path)}-prev`),onToggle:()=>{const k=`${hn(h.path)}-prev`;d(z=>{const R=new Set(z);return R.has(k)?R.delete(k):R.add(k),R})},isNegative:!0})})]}),f("button",{type:"button",className:O("group","flex items-start","py-[3px] px-1.5","text-left text-[#4ade80] bg-[#1a2a1a]","rounded","overflow-hidden break-all",_&&"cursor-pointer"),onClick:_?()=>{const k=`${hn(h.path)}-current`;d(z=>{const R=new Set(z);return R.has(k)?R.delete(k):R.add(k),R})}:void 0,children:[f("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),f("span",{className:"flex-1 whitespace-pre-wrap font-mono",children:y?f("span",{className:"italic text-[#4ade80]",children:y}):_?f("div",{className:"flex gap-1 items-start flex-col",children:[f("div",{className:"flex gap-1 items-start w-full",children:[f("span",{className:"flex-1",children:Wd(w,c.has(`${hn(h.path)}-current`))}),typeof w=="function"&&f(xs,{text:w.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:k})=>f(De,{children:k})})]}),m?.toString()===w?.toString()&&f("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):f(_s,{value:w,expanded:c.has(`${hn(h.path)}-current`),onToggle:()=>{const k=`${hn(h.path)}-current`;d(z=>{const R=new Set(z);return R.has(k)?R.delete(k):R.add(k),R})},isNegative:!1})})]})]},`${S}-${l.name}-${p}`)}),x2=({prevValue:a,currValue:r,entryKey:o,expandedFns:l,setExpandedFns:c})=>f(De,{children:[f("div",{className:"group flex gap-0.5 items-start text-[#f87171] bg-[#2a1515] py-[3px] px-1.5 rounded",children:[f("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),f("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:f(_s,{value:a,expanded:l.has(`${String(o)}-prev`),onToggle:()=>{const d=`${String(o)}-prev`;c(h=>{const p=new Set(h);return p.has(d)?p.delete(d):p.add(d),p})},isNegative:!0})})]}),f("div",{className:"group flex gap-0.5 items-start text-[#4ade80] bg-[#1a2a1a] py-[3px] px-1.5 rounded mt-0.5",children:[f("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),f("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:f(_s,{value:r,expanded:l.has(`${String(o)}-current`),onToggle:()=>{const d=`${String(o)}-current`;c(h=>{const p=new Set(h);return p.has(d)?p.delete(d):p.add(d),p})},isNegative:!1})})]}),typeof r=="object"&&r!==null&&f("div",{className:"text-[#666] text-[10px] italic mt-1 flex items-center gap-x-1",children:[f(nt,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),f("span",{children:"Reference changed but objects are structurally the same"})]})]}),_2=({count:a,forceFlash:r,isFunction:o,showWarning:l})=>{const c=ue(!0),d=ue(null),h=ue(a);return Ce(()=>{const p=d.current;!p||h.current===a||(p.classList.remove("count-flash"),p.offsetWidth,p.classList.add("count-flash"),h.current=a)},[a]),Ce(()=>{if(c.current){c.current=!1;return}if(r){let p=setTimeout(()=>{d.current?.classList.add("count-flash-white"),p=setTimeout(()=>{d.current?.classList.remove("count-flash-white")},300)},500);return()=>{clearTimeout(p)}}},[r]),f("div",{ref:d,className:"count-badge",children:[l&&f(nt,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),o&&f(nt,{name:"icon-function",className:"text-[#A855F7] mb-px",size:14}),"x",a]})},Ea={lastRendered:new Map,expandedPaths:new Set,cleanup:()=>{Ea.lastRendered.clear(),Ea.expandedPaths.clear(),Px.cleanupAll(),R2(),$0.reset()}},J0=class extends cn{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleReset=()=>{this.setState({hasError:!1,error:null}),Ea.cleanup()}}static getDerivedStateFromError(a){return{hasError:!0,error:a}}render(){return this.state.hasError?f("div",{className:"p-4 bg-red-950/50 h-screen backdrop-blur-sm",children:[f("div",{className:"flex items-center gap-2 mb-3 text-red-400 font-medium",children:[f(nt,{name:"icon-flame",className:"text-red-500",size:16}),"Something went wrong in the inspector"]}),f("div",{className:"p-3 bg-black/40 rounded font-mono text-xs text-red-300 mb-4 break-words",children:this.state.error?.message||JSON.stringify(this.state.error)}),f("button",{type:"button",onClick:this.handleReset,className:"px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2",children:"Reset Inspector"})]}):this.props.children}},S2=ur(()=>O("react-scan-inspector","flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",!Ls.value&&"opacity-100 delay-300 pointer-events-auto")),T2=Ef(()=>{const a=ue(null),r=o=>{if(!o)return;a.current=o;const{data:l,shouldUpdate:c}=H2(o);if(c){const d={timestamp:Date.now(),fiberInfo:M2(o),props:l.fiberProps,state:l.fiberState,context:l.fiberContext,stateNames:D2(o)};$0.addUpdate(d,o)}};return Co(()=>{const o=te.inspectState.value;To(()=>{if(o.kind!=="focused"||!o.focusedDomElement){a.current=null,Ea.cleanup();return}o.kind==="focused"&&(Ls.value=!1);const{parentCompositeFiber:l}=_v(o.focusedDomElement,o.fiber);if(!l){te.inspectState.value={kind:"inspect-off"},Qe.value={view:"none"};return}a.current?.type!==l.type&&(a.current=l,Ea.cleanup(),r(l))})}),Co(()=>{zf.value,To(()=>{const o=te.inspectState.value;if(o.kind!=="focused"||!o.focusedDomElement){a.current=null,Ea.cleanup();return}const{parentCompositeFiber:l}=_v(o.focusedDomElement,o.fiber);if(!l){te.inspectState.value={kind:"inspect-off"},Qe.value={view:"none"};return}r(l),o.focusedDomElement.isConnected||(a.current=null,Ea.cleanup(),te.inspectState.value={kind:"inspecting",hoveredDomElement:null})})}),Ce(()=>()=>{Ea.cleanup()},[]),f(J0,{children:f("div",{className:S2,children:f("div",{className:"w-full h-full",children:f(m2,{})})})})}),C2=Ef(()=>te.inspectState.value.kind!=="focused"?null:f(J0,{children:[f(T2,{}),f(l2,{})]})),K0=a=>{if("__REACT_DEVTOOLS_GLOBAL_HOOK__"in window){const r=window.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!r?.renderers)return null;for(const[,o]of Array.from(r.renderers))try{const l=o.findFiberByHostInstance?.(a);if(l)return l}catch{}}if("_reactRootContainer"in a)return a._reactRootContainer?._internalRoot?.current?.child??null;for(const r in a)if(r.startsWith("__reactInternalInstance$")||r.startsWith("__reactFiber"))return a[r];return null},Nf=a=>{let r=a;for(;r;){if(r.stateNode instanceof Element)return r.stateNode;if(!r.child)break;r=r.child}for(;r;){if(r.stateNode instanceof Element)return r.stateNode;if(!r.return)break;r=r.return}return null},Af=a=>{if(!a)return null;try{const r=K0(a);if(!r)return null;const o=ai(r);return o?o[0]:null}catch{return null}},ai=a=>{let r=a,o=null;for(;r;){if(Rs(r))return[r,o];wo(r)&&!o&&(o=r),r=r.return}return null},xv=(a,r)=>!!l0(r,l=>l===a),k2=async a=>{const r=Af(a);if(!r)return null;const o=Nf(r);if(!o)return null;const l=(await ux([o])).get(o);return l||null},ar=a=>{const r=Af(a);if(!r)return{};if(!Nf(r))return{};const l=ai(r);if(!l)return{};const[c]=l;return{parentCompositeFiber:c}},_v=(a,r)=>{if(!a.isConnected)return{};let o=r??Af(a);if(!o)return{};let l=o,c=null,d=null;for(;l;){if(!l.stateNode){l=l.return;continue}if(Re.instrumentation?.fiberRoots.has(l.stateNode)){c=l,d=l.stateNode.current;break}l=l.return}if(!c||!d)return{};if(o=xv(o,d)?o:o.alternate??o,!o)return{};if(!Nf(o))return{};const h=ai(o)?.[0];return h?{parentCompositeFiber:xv(h,d)?h:h.alternate??h}:{}},W0=a=>{const r=a.memoizedProps??{},o=a.alternate?.memoizedProps??{},l=[];for(const c in r){if(c==="children")continue;const d=r[c],h=o[c];Ma(d,h)||l.push({name:c,value:d,prevValue:h,type:1})}return l},Kd=new Set(["HTML","HEAD","META","TITLE","BASE","SCRIPT","SCRIPT","STYLE","LINK","NOSCRIPT","SOURCE","TRACK","EMBED","OBJECT","PARAM","TEMPLATE","PORTAL","SLOT","AREA","XML","DOCTYPE","COMMENT"]),Ts=(a,r=!0)=>{if(a.stateNode&&"nodeType"in a.stateNode){const l=a.stateNode;return r&&l.tagName&&Kd.has(l.tagName.toLowerCase())?null:l}let o=a.child;for(;o;){const l=Ts(o,r);if(l)return l;o=o.sibling}return null},E2=(a=document.body)=>{const r=[],o=c=>{if(!c)return null;const{parentCompositeFiber:d}=ar(c);return d&&Ts(d)===c?c:null},l=(c,d=0)=>{const h=o(c);if(h){const{parentCompositeFiber:p}=ar(h);if(!p)return;r.push({element:h,depth:d,name:bt(p.type)??"Unknown",fiber:p})}for(const p of Array.from(c.children))l(p,h?d+1:d)};return l(a),r},Sv=a=>{try{if(a===null)return"null";if(a===void 0)return"undefined";if(ri(a))return"Promise";if(typeof a=="function"){const r=a.toString();try{return r.replace(/\s+/g," ").replace(/{\s+/g,`{
  `).replace(/;\s+/g,`;
  `).replace(/}\s*$/g,`
}`).replace(/\(\s+/g,"(").replace(/\s+\)/g,")").replace(/,\s+/g,", ")}catch{return r}}switch(!0){case a instanceof Date:return a.toISOString();case a instanceof RegExp:return a.toString();case a instanceof Error:return`${a.name}: ${a.message}`;case a instanceof Map:return JSON.stringify(Array.from(a.entries()),null,2);case a instanceof Set:return JSON.stringify(Array.from(a),null,2);case a instanceof DataView:return JSON.stringify(Array.from(new Uint8Array(a.buffer)),null,2);case a instanceof ArrayBuffer:return JSON.stringify(Array.from(new Uint8Array(a)),null,2);case(ArrayBuffer.isView(a)&&"length"in a):return JSON.stringify(Array.from(a),null,2);case Array.isArray(a):return JSON.stringify(a,null,2);case typeof a=="object":return JSON.stringify(a,null,2);default:return String(a)}}catch{return String(a)}},z2=(a,r)=>{try{return typeof a!="function"||typeof r!="function"?!1:a.toString()===r.toString()}catch{return!1}},P0=(a,r,o=[],l=new WeakSet)=>{if(a===r)return{type:"primitive",changes:[],hasDeepChanges:!1};if(typeof a=="function"&&typeof r=="function"){const g=z2(a,r);return{type:"primitive",changes:[{path:o,prevValue:a,currentValue:r,sameFunction:g}],hasDeepChanges:!g}}if(a===null||r===null||a===void 0||r===void 0||typeof a!="object"||typeof r!="object")return{type:"primitive",changes:[{path:o,prevValue:a,currentValue:r}],hasDeepChanges:!0};if(l.has(a)||l.has(r))return{type:"object",changes:[{path:o,prevValue:"[Circular]",currentValue:"[Circular]"}],hasDeepChanges:!1};l.add(a),l.add(r);const c=a,d=r,h=new Set([...Object.keys(c),...Object.keys(d)]),p=[];let m=!1;for(const g of h){const w=c[g],y=d[g];if(w!==y)if(typeof w=="object"&&typeof y=="object"&&w!==null&&y!==null){const _=P0(w,y,[...o,g],l);p.push(..._.changes),_.hasDeepChanges&&(m=!0)}else p.push({path:[...o,g],prevValue:w,currentValue:y}),m=!0}return{type:"object",changes:p,hasDeepChanges:m}},hn=a=>a.length===0?"":a.reduce((r,o,l)=>/^\d+$/.test(o)?`${r}[${o}]`:l===0?o:`${r}.${o}`,"");function N2(a){const r=a.replace(/\s+/g," ").trim(),o=[];let l="";for(let C=0;C<r.length;C++){const M=r[C];if(M==="="&&r[C+1]===">"){l.trim()&&o.push(l.trim()),o.push("=>"),l="",C++;continue}/[(){}[\];,<>:\?!]/.test(M)?(l.trim()&&o.push(l.trim()),o.push(M),l=""):/\s/.test(M)?(l.trim()&&o.push(l.trim()),l=""):l+=M}l.trim()&&o.push(l.trim());const c=[];for(let C=0;C<o.length;C++){const M=o[C],q=o[C+1];M==="("&&q===")"||M==="["&&q==="]"||M==="{"&&q==="}"||M==="<"&&q===">"?(c.push(M+q),C++):c.push(M)}const d=new Set,h=new Set;function p(C,M,q){let $=0;for(let Z=q;Z<c.length;Z++){const W=c[Z];if(W===C)$++;else if(W===M&&($--,$===0))return Z}return-1}for(let C=0;C<c.length;C++)if(c[C]==="("){const q=p("(",")",C);if(q!==-1&&c[q+1]==="=>")for(let $=C;$<=q;$++)d.add($)}for(let C=1;C<c.length;C++){const M=c[C-1],q=c[C];if(/^[a-zA-Z0-9_$]+$/.test(M)&&q==="<"){const $=p("<",">",C);if($!==-1)for(let Z=C;Z<=$;Z++)h.add(Z)}}let m=0;const g="  ",w=[];let y="";function _(){y.trim()&&w.push(y.replace(/\s+$/,"")),y=""}function S(){_(),y=g.repeat(m)}const k=[];function z(){return k.length?k[k.length-1]:null}function R(C,M=!1){y.trim()?M||/^[),;:\].}>]$/.test(C)?y+=C:y+=` ${C}`:y+=C}for(let C=0;C<c.length;C++){const M=c[C],q=c[C+1]||"";if(["(","{","[","<"].includes(M)){if(R(M),k.push(M),M==="{")m++,S();else if((M==="("||M==="["||M==="<")&&!(d.has(C)&&M==="("||h.has(C)&&M==="<")){const $={"(":")","[":"]","<":">"}[M];q!==$&&q!=="()"&&q!=="[]"&&q!=="<>"&&(m++,S())}}else if([")","}","]",">"].includes(M)){const $=z();M===")"&&$==="("||M==="]"&&$==="["||M===">"&&$==="<"?!(d.has(C)&&M===")")&&!(h.has(C)&&M===">")&&(m=Math.max(m-1,0),S()):M==="}"&&$==="{"&&(m=Math.max(m-1,0),S()),k.pop(),R(M),M==="}"&&S()}else if(/^\(\)|\[\]|\{\}|\<\>$/.test(M))R(M);else if(M==="=>")R(M);else if(M===";")R(M,!0),S();else if(M===","){R(M,!0);const $=z();!(d.has(C)&&$==="(")&&!(h.has(C)&&$==="<")&&$&&["{","[","(","<"].includes($)&&S()}else R(M)}return _(),w.join(`
`).replace(/\n\s*\n+/g,`
`).trim()}var Wd=(a,r=!1)=>{try{const o=a.toString(),l=o.match(/(?:function\s*)?(?:\(([^)]*)\)|([^=>\s]+))\s*=>?/);if(!l)return"ƒ";const d=(l[1]||l[2]||"").replace(/\s+/g,"");return r?N2(o):`ƒ (${d}) => ...`}catch{return"ƒ"}},Cs=a=>{if(a===null)return"null";if(a===void 0)return"undefined";if(typeof a=="string")return`"${a.length>150?`${a.slice(0,20)}...`:a}"`;if(typeof a=="number"||typeof a=="boolean")return String(a);if(typeof a=="function")return Wd(a);if(Array.isArray(a))return`Array(${a.length})`;if(a instanceof Map)return`Map(${a.size})`;if(a instanceof Set)return`Set(${a.size})`;if(a instanceof Date)return a.toISOString();if(a instanceof RegExp)return a.toString();if(a instanceof Error)return`${a.name}: ${a.message}`;if(typeof a=="object"){const r=Object.keys(a);return`{${r.length>2?`${r.slice(0,2).join(", ")}, ...`:r.join(", ")}}`}return String(a)},A2=a=>{if(a==null)return{value:a};if(typeof a=="function")return{value:a};if(typeof a!="object")return{value:a};if(a instanceof Promise)return{value:"Promise"};try{const r=Object.getPrototypeOf(a);return r===Promise.prototype||r?.constructor?.name==="Promise"?{value:"Promise"}:{value:a}}catch{return{value:null,error:"Error accessing value"}}},ri=a=>!!a&&(a instanceof Promise||typeof a=="object"&&"then"in a),M2=a=>{const r=tr(a);return{displayName:bt(a)||"Unknown",type:a.type,key:a.key,id:a.index,selfTime:r?.selfTime??null,totalTime:r?.totalTime??null}},Mf=new Map,ey=new Map,Of=new Map,Pd=null,O2=/\[(?<name>\w+),\s*set\w+\]/g,D2=a=>{const r=a.type?.toString?.()||"";return r?Array.from(r.matchAll(O2),o=>o.groups?.name??""):[]},R2=()=>{Mf.clear(),ey.clear(),Of.clear(),Pd=null},U2=a=>{const r=a.type!==Pd;return Pd=a.type,r},fd=(a,r,o,l)=>{const c=a.get(r),d=a===Mf||a===Of,h=!Ma(o,l);if(!c)return a.set(r,{count:h&&d?1:0,currentValue:o,previousValue:l,lastUpdated:Date.now()}),{hasChanged:h,count:h&&d?1:d?0:1};if(!Ma(c.currentValue,o)){const p=c.count+1;return a.set(r,{count:p,currentValue:o,previousValue:c.currentValue,lastUpdated:Date.now()}),{hasChanged:!0,count:p}}return{hasChanged:!1,count:c.count}},Tv=a=>{if(!a)return{};if(a.tag===Ms||a.tag===Os||a.tag===Oo||a.tag===Mo){let r=a.memoizedState;const o={};let l=0;for(;r;)r.queue&&r.memoizedState!==void 0&&(o[l]=r.memoizedState),r=r.next,l++;return o}return a.tag===lr?a.memoizedState||{}:{}},Df=a=>{const r=a.memoizedProps||{},o=a.alternate?.memoizedProps||{},l={},c={},d=Object.keys(r);for(const p of d)p in r&&(l[p]=r[p],c[p]=o[p]);const h=W0(a).map(p=>({name:p.name,value:p.value,prevValue:p.prevValue}));return{current:l,prev:c,changes:h}},Rf=a=>{const r=Tv(a),o=a.alternate?Tv(a.alternate):{},l=[];for(const[c,d]of Object.entries(r)){const h=a.tag===lr?c:Number(c);a.alternate&&!Ma(o[c],d)&&l.push({name:h,value:d,prevValue:o[c]})}return{current:r,prev:o,changes:l}},Uf=a=>{const r=kv(a),o=a.alternate?kv(a.alternate):new Map,l={},c={},d=[],h=new Set;for(const[p,m]of r){const g=m.displayName,w=p;if(h.has(w))continue;h.add(w),l[g]=m.value;const y=o.get(p);y&&(c[g]=y.value,Ma(y.value,m.value)||d.push({name:g,value:m.value,prevValue:y.value,contextType:p}))}return{current:l,prev:c,changes:d}},H2=a=>{const r=()=>({current:[],changes:new Set,changesCounts:new Map});if(!a)return{data:{fiberProps:r(),fiberState:r(),fiberContext:r()},shouldUpdate:!1};let o=!1;const l=U2(a),c=r();if(a.memoizedProps){const{current:y,changes:_}=Df(a);for(const[S,k]of Object.entries(y))c.current.push({name:S,value:ri(k)?{type:"promise",displayValue:"Promise"}:k});for(const S of _){const{hasChanged:k,count:z}=fd(Mf,S.name,S.value,S.prevValue);k&&(o=!0,c.changes.add(S.name),c.changesCounts.set(S.name,z))}}const d=r(),{current:h,changes:p}=Rf(a);for(const[y,_]of Object.entries(h)){const S=a.tag===lr?y:Number(y);d.current.push({name:S,value:_})}for(const y of p){const{hasChanged:_,count:S}=fd(ey,y.name,y.value,y.prevValue);_&&(o=!0,d.changes.add(y.name),d.changesCounts.set(y.name,S))}const m=r(),{current:g,changes:w}=Uf(a);for(const[y,_]of Object.entries(g))m.current.push({name:y,value:_});if(!l)for(const y of w){const{hasChanged:_,count:S}=fd(Of,y.name,y.value,y.prevValue);_&&(o=!0,m.changes.add(y.name),m.changesCounts.set(y.name,S))}return!o&&!l&&(c.changes.clear(),d.changes.clear(),m.changes.clear()),{data:{fiberProps:c,fiberState:d,fiberContext:m},shouldUpdate:o||l}},Cv=new WeakMap,kv=a=>{if(!a)return new Map;const r=Cv.get(a);if(r)return r;const o=new Map;let l=a;for(;l;){const c=l.dependencies;if(c?.firstContext){let d=c.firstContext;for(;d;){const h=d.memoizedValue,p=d.context?.displayName;if(o.has(h)||o.set(d.context,{value:h,displayName:p??"UnnamedContext",contextType:null}),d===d.next)break;d=d.next}}l=l.return}return Cv.set(a,o),o},Ev=a=>{const r=()=>({current:[],changes:new Set,changesCounts:new Map});if(!a)return{fiberProps:r(),fiberState:r(),fiberContext:r()};const o=r();if(a.memoizedProps){const{current:p,changes:m}=Df(a);for(const[g,w]of Object.entries(p))o.current.push({name:g,value:ri(w)?{type:"promise",displayValue:"Promise"}:w});for(const g of m)o.changes.add(g.name),o.changesCounts.set(g.name,1)}const l=r();if(a.memoizedState){const{current:p,changes:m}=Rf(a);for(const[g,w]of Object.entries(p))l.current.push({name:g,value:ri(w)?{type:"promise",displayValue:"Promise"}:w});for(const g of m)l.changes.add(g.name),l.changesCounts.set(g.name,1)}const c=r(),{current:d,changes:h}=Uf(a);for(const[p,m]of Object.entries(d))c.current.push({name:p,value:ri(m)?{type:"promise",displayValue:"Promise"}:m});for(const p of h)c.changes.add(p.name),c.changesCounts.set(p.name,1);return{fiberProps:o,fiberState:l,fiberContext:c}},ef=0,zv=performance.now(),hd=0,Nv=!1,ty=()=>{hd++;const a=performance.now();a-zv>=1e3&&(ef=hd,hd=0,zv=a),requestAnimationFrame(ty)},ny=()=>(Nv||(Nv=!0,ty(),ef=60),ef),j2=a=>{if(!a)return[];const r=[];if(a.tag===Ms||a.tag===Os||a.tag===Oo||a.tag===Mo){let o=a.memoizedState,l=a.alternate?.memoizedState,c=0;for(;o;){if(o.queue&&o.memoizedState!==void 0){const d={type:2,name:c.toString(),value:o.memoizedState,prevValue:l?.memoizedState};Ma(d.prevValue,d.value)||r.push(d)}o=o.next,l=l?.next,c++}return r}if(a.tag===lr){const o={type:3,name:"state",value:a.memoizedState,prevValue:a.alternate?.memoizedState};return Ma(o.prevValue,o.value)||r.push(o),r}return r},pd=0,Av=new WeakMap,L2=a=>{const r=Av.get(a);return r||(pd++,Av.set(a,pd),pd)};function B2(a,r){if(!a||!r)return;const o=a.memoizedValue,l={type:4,name:a.context.displayName??"Context.Provider",value:o,contextType:L2(a.context)};this.push(l)}var Y2=a=>{const r=[];return w1(a,B2.bind(r)),r},ay=new Map,Mv=!1,md=()=>Array.from(ay.values()),X2=16,tf=new WeakMap;function ry(a){return String(Aa(a))}function iy(a){const r=ry(a),o=tf.get(sr(a));if(o)return o.get(r)}function q2(a,r){const o=sr(a.type),l=ry(a);let c=tf.get(o);c||(c=new Map,tf.set(o,c)),c.set(l,r)}var V2=(a,r,o,l,c)=>{const d=Date.now(),h=iy(a);if((l||c)&&(!h||d-(h.lastRenderTimestamp||0)>X2)){const p=h||{selfTime:0,totalTime:0,renderCount:0,lastRenderTimestamp:d};p.renderCount=(p.renderCount||0)+1,p.selfTime=r||0,p.totalTime=o||0,p.lastRenderTimestamp=d,q2(a,{...p})}},F2=(a,r)=>{const o={isPaused:ht(!Re.options.value.enabled),fiberRoots:new WeakSet};return ay.set(a,{key:a,config:r,instrumentation:o}),Mv||(Mv=!0,z1({name:"react-scan",onActive:r.onActive,onCommitFiberRoot(l,c){o.fiberRoots.add(c);const d=md();for(const h of d)h.config.onCommitStart();E1(c.current,(h,p)=>{const m=sr(h.type);if(!m)return null;const g=md(),w=[];for(let M=0,q=g.length;M<q;M++)g[M].config.isValidFiber(h)&&w.push(M);if(!w.length)return null;const y=[];if(g.some(M=>M.config.trackChanges)){const M=Df(h).changes,q=Rf(h).changes,$=Uf(h).changes;y.push.apply(null,M.map(Z=>({type:1,name:Z.name,value:Z.value})));for(const Z of q)h.tag===lr?y.push({type:3,name:Z.name.toString(),value:Z.value}):y.push({type:2,name:Z.name.toString(),value:Z.value});y.push.apply(null,$.map(Z=>({type:4,name:Z.name,value:Z.value,contextType:Number(Z.contextType)})))}const{selfTime:_,totalTime:S}=tr(h),k=ny(),z={phase:dx[p],componentName:bt(m),count:1,changes:y,time:_,forget:xo(h),unnecessary:null,didCommit:ff(h),fps:k},R=y.length>0,C=x1(h).length>0;p==="update"&&V2(h,_,S,R,C);for(let M=0,q=w.length;M<q;M++){const $=w[M];g[$].config.onRender(h,[z])}});for(const h of d)h.config.onCommitFinish()},onPostCommitFiberRoot(){const l=md();for(const c of l)c.config.onPostCommitFiberRoot()}})),o},G2=a=>{const r=new Map;for(let o=0,l=a.length;o<l;o++){const c=a[o];if(!c.componentName)continue;const d=r.get(c.componentName)??[],h=cx([{aggregatedCount:1,computedKey:null,name:c.componentName,frame:null,...c,changes:{type:c.changes.reduce((g,w)=>g|w.type,0),unstable:c.changes.some(g=>g.unstable)},phase:c.phase,computedCurrent:null}]);if(!h)continue;let p=null,m=null;if(c.changes)for(let g=0,w=c.changes.length;g<w;g++){const{name:y,prevValue:_,nextValue:S,unstable:k,type:z}=c.changes[g];z===1?(p??={},m??={},p[`${k?"⚠️":""}${y} (prev)`]=_,m[`${k?"⚠️":""}${y} (next)`]=S):d.push({prev:_,next:S,type:z===4?"context":"state",unstable:k??!1})}p&&m&&d.push({prev:p,next:m,type:"props",unstable:!1}),r.set(h,d)}for(const[o,l]of Array.from(r.entries())){console.group(`%c${o}`,"background: hsla(0,0%,70%,.3); border-radius:3px; padding: 0 2px;");for(const{type:c,prev:d,next:h,unstable:p}of l)console.log(`${c}:`,p?"⚠️":"",d,"!==",h);console.groupEnd()}},$2=()=>{if(window.hideIntro){window.hideIntro=void 0;return}console.log("%c[·] %cReact Scan","font-weight:bold;color:#7a68e8;font-size:20px;","font-weight:bold;font-size:14px;"),console.log("Try React Scan Monitoring to target performance issues in production: https://react-scan.com/monitoring")},Ov=7,Q2="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace",Z2=.1,as=(a,r)=>Math.floor(a+(r-a)*Z2),I2=4,ks=40,gd=45,vd="115,97,230";function J2(a,r){return r[0]-a[0]}function K2(a){return[...a.entries()].sort(J2)}function Dv([a,r]){let o=`${r.slice(0,I2).join(", ")} ×${a}`;return o.length>ks&&(o=`${o.slice(0,ks)}…`),o}var Rv=a=>{const r=new Map;for(const{name:d,count:h}of a)r.set(d,(r.get(d)||0)+h);const o=new Map;for(const[d,h]of r){const p=o.get(h);p?p.push(d):o.set(h,[d])}const l=K2(o);let c=Dv(l[0]);for(let d=1,h=l.length;d<h;d++)c+=", "+Dv(l[d]);return c.length>ks?`${c.slice(0,ks)}…`:c},Uv=a=>{let r=0;for(const o of a)r+=o.width*o.height;return r},W2=(a,r)=>{for(const{id:o,name:l,count:c,x:d,y:h,width:p,height:m,didCommit:g}of r){const w={id:o,name:l,count:c,x:d,y:h,width:p,height:m,frame:0,targetX:d,targetY:h,targetWidth:p,targetHeight:m,didCommit:g},y=String(w.id),_=a.get(y);_?(_.count++,_.frame=0,_.targetX=d,_.targetY=h,_.targetWidth=p,_.targetHeight=m,_.didCommit=g):a.set(y,w)}},P2=(a,r,o)=>{for(const l of a.values()){const c=l.x-r,d=l.y-o;l.targetX=c,l.targetY=d}},e_=(a,r)=>{const o=a.getContext("2d",{alpha:!0});return o&&o.scale(r,r),o},t_=(a,r,o,l)=>{a.clearRect(0,0,r.width/o,r.height/o);const c=new Map,d=new Map;for(const m of l.values()){const{x:g,y:w,width:y,height:_,targetX:S,targetY:k,targetWidth:z,targetHeight:R,frame:C}=m;S!==g&&(m.x=as(g,S)),k!==w&&(m.y=as(w,k)),z!==y&&(m.width=as(y,z)),R!==_&&(m.height=as(_,R));const M=`${S??g},${k??w}`,q=`${M},${z??y},${R??_}`,$=c.get(M);$?$.push(m):c.set(M,[m]);const Z=1-C/gd;m.frame++;const W=d.get(q)||{x:g,y:w,width:y,height:_,alpha:Z};Z>W.alpha&&(W.alpha=Z),d.set(q,W)}for(const{x:m,y:g,width:w,height:y,alpha:_}of d.values())a.strokeStyle=`rgba(${vd},${_})`,a.lineWidth=1,a.beginPath(),a.rect(m,g,w,y),a.stroke(),a.fillStyle=`rgba(${vd},${_*.1})`,a.fill();a.font=`11px ${Q2}`;const h=new Map;a.textRendering="optimizeSpeed";for(const m of c.values()){const g=m[0],{x:w,y,frame:_}=g,S=1-_/gd,k=Rv(m),{width:z}=a.measureText(k);if(h.set(`${w},${y},${z},${k}`,{text:k,width:z,height:11,alpha:S,x:w,y,outlines:m}),_>gd)for(const C of m)l.delete(String(C.id))}const p=Array.from(h.entries()).sort(([m,g],[w,y])=>Uv(y.outlines)-Uv(g.outlines));for(const[m,g]of p)if(h.has(m))for(const[w,y]of h.entries()){if(m===w)continue;const{x:_,y:S,width:k,height:z}=g,{x:R,y:C,width:M,height:q}=y;_+k>R&&R+M>_&&S+z>C&&C+q>S&&(g.text=Rv(g.outlines.concat(y.outlines)),g.width=a.measureText(g.text).width,h.delete(w))}for(const m of h.values()){const{x:g,y:w,alpha:y,width:_,height:S,text:k}=m;let z=w-S-4;z<0&&(z=0),a.fillStyle=`rgba(${vd},${y})`,a.fillRect(g,z,_+4,S+4),a.fillStyle=`rgba(255,255,255,${y})`,a.fillText(k,g+2,z+S)}return l.size>0},n_='"use strict";(()=>{var D="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace";var M=(t,i)=>Math.floor(t+(i-t)*.1);var _="115,97,230";function F(t,i){return i[0]-t[0]}function I(t){return[...t.entries()].sort(F)}function $([t,i]){let o=`${i.slice(0,4).join(", ")} \\xD7${t}`;return o.length>40&&(o=`${o.slice(0,40)}\\u2026`),o}var S=t=>{let i=new Map;for(let{name:e,count:u}of t)i.set(e,(i.get(e)||0)+u);let o=new Map;for(let[e,u]of i){let A=o.get(u);A?A.push(e):o.set(u,[e])}let h=I(o),s=$(h[0]);for(let e=1,u=h.length;e<u;e++)s+=", "+$(h[e]);return s.length>40?`${s.slice(0,40)}\\u2026`:s},X=t=>{let i=0;for(let o of t)i+=o.width*o.height;return i};var N=(t,i)=>{let o=t.getContext("2d",{alpha:!0});return o&&o.scale(i,i),o},Y=(t,i,o,h)=>{t.clearRect(0,0,i.width/o,i.height/o);let s=new Map,e=new Map;for(let n of h.values()){let{x:r,y:c,width:a,height:g,targetX:l,targetY:d,targetWidth:f,targetHeight:p,frame:O}=n;l!==r&&(n.x=M(r,l)),d!==c&&(n.y=M(c,d)),f!==a&&(n.width=M(a,f)),p!==g&&(n.height=M(g,p));let w=`${l??r},${d??c}`,y=`${w},${f??a},${p??g}`,v=s.get(w);v?v.push(n):s.set(w,[n]);let E=1-O/45;n.frame++;let x=e.get(y)||{x:r,y:c,width:a,height:g,alpha:E};E>x.alpha&&(x.alpha=E),e.set(y,x)}for(let{x:n,y:r,width:c,height:a,alpha:g}of e.values())t.strokeStyle=`rgba(${_},${g})`,t.lineWidth=1,t.beginPath(),t.rect(n,r,c,a),t.stroke(),t.fillStyle=`rgba(${_},${g*.1})`,t.fill();t.font=`11px ${D}`;let u=new Map;t.textRendering="optimizeSpeed";for(let n of s.values()){let r=n[0],{x:c,y:a,frame:g}=r,l=1-g/45,d=S(n),{width:f}=t.measureText(d),p=11;u.set(`${c},${a},${f},${d}`,{text:d,width:f,height:p,alpha:l,x:c,y:a,outlines:n});let O=a-p-4;if(O<0&&(O=0),g>45)for(let w of n)h.delete(String(w.id))}let A=Array.from(u.entries()).sort(([n,r],[c,a])=>X(a.outlines)-X(r.outlines));for(let[n,r]of A)if(u.has(n))for(let[c,a]of u.entries()){if(n===c)continue;let{x:g,y:l,width:d,height:f}=r,{x:p,y:O,width:w,height:y}=a;g+d>p&&p+w>g&&l+f>O&&O+y>l&&(r.text=S(r.outlines.concat(a.outlines)),r.width=t.measureText(r.text).width,u.delete(c))}for(let n of u.values()){let{x:r,y:c,alpha:a,width:g,height:l,text:d}=n,f=c-l-4;f<0&&(f=0),t.fillStyle=`rgba(${_},${a})`,t.fillRect(r,f,g+4,l+4),t.fillStyle=`rgba(255,255,255,${a})`,t.fillText(d,r+2,f+l)}return h.size>0};var m=null,L=null,b=1,T=new Map,C=null,R=()=>{if(!L||!m)return;Y(L,m,b,T)?C=requestAnimationFrame(R):C=null};self.onmessage=t=>{let{type:i}=t.data;if(i==="init"&&(m=t.data.canvas,b=t.data.dpr,m&&(m.width=t.data.width,m.height=t.data.height,L=N(m,b))),!(!m||!L)){if(i==="resize"){b=t.data.dpr,m.width=t.data.width*b,m.height=t.data.height*b,L.resetTransform(),L.scale(b,b),R();return}if(i==="draw-outlines"){let{data:o,names:h}=t.data,s=new Float32Array(o);for(let e=0;e<s.length;e+=7){let u=s[e+2],A=s[e+3],n=s[e+4],r=s[e+5],c=s[e+6],a={id:s[e],name:h[e/7],count:s[e+1],x:u,y:A,width:n,height:r,frame:0,targetX:u,targetY:A,targetWidth:n,targetHeight:r,didCommit:c},g=String(a.id),l=T.get(g);l?(l.count++,l.frame=0,l.targetX=u,l.targetY=A,l.targetWidth=n,l.targetHeight=r,l.didCommit=c):T.set(g,a)}C||(C=requestAnimationFrame(R));return}if(i==="scroll"){let{deltaX:o,deltaY:h}=t.data;for(let s of T.values()){let e=s.x-o,u=s.y-h;s.targetX=e,s.targetY=u}}}};})();\n',kn=null,Es=null,rr=null,sn=1,zs=null,Hf=new Map,vo=new Map,ei=new Set,a_=a=>{if(!Rs(a))return;const r=typeof a.type=="string"?a.type:bt(a);if(!r)return;const o=vo.get(a),l=_1(a),c=ff(a);o?o.count++:(vo.set(a,{name:r,count:1,elements:l.map(d=>d.stateNode),didCommit:c?1:0}),ei.add(a))},r_=a=>{const r=a[0];if(a.length===1)return r;let o,l,c,d;for(let h=0,p=a.length;h<p;h++){const m=a[h];o=o==null?m.x:Math.min(o,m.x),l=l==null?m.y:Math.min(l,m.y),c=c==null?m.x+m.width:Math.max(c,m.x+m.width),d=d==null?m.y+m.height:Math.max(d,m.y+m.height)}return o==null||l==null||c==null||d==null?a[0]:new DOMRect(o,l,c-o,d-l)};function i_(a,r){const o=[];for(const l of a){const c=l.target;this.seenElements.has(c)||(this.seenElements.add(c),o.push(l))}o.length>0&&this.resolveNext&&(this.resolveNext(o),this.resolveNext=null),this.seenElements.size===this.uniqueElements.size&&(r.disconnect(),this.done=!0,this.resolveNext&&this.resolveNext([]))}var oy=async function*(a){const r={uniqueElements:new Set(a),seenElements:new Set,resolveNext:null,done:!1},o=new IntersectionObserver(i_.bind(r));for(const l of r.uniqueElements)o.observe(l);for(;!r.done;){const l=await new Promise(c=>{r.resolveNext=c});l.length>0&&(yield l)}},o_=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:ArrayBuffer,l_=async()=>{const a=[];for(const o of ei){const l=vo.get(o);if(l)for(let c=0;c<l.elements.length;c++)l.elements[c]instanceof Element&&a.push(l.elements[c])}const r=new Map;for await(const o of oy(a)){for(const h of o){const p=h.target,m=h.intersectionRect;h.isIntersecting&&m.width&&m.height&&r.set(p,m)}const l=[],c=[],d=[];for(const h of ei){const p=vo.get(h);if(!p)continue;const m=[];for(let g=0;g<p.elements.length;g++){const w=p.elements[g],y=r.get(w);y&&m.push(y)}m.length&&(l.push(p),c.push(r_(m)),d.push(Aa(h)))}if(l.length>0){const h=new o_(l.length*Ov*4),p=new Float32Array(h),m=new Array(l.length);let g;for(let w=0,y=l.length;w<y;w++){const _=l[w],S=d[w],{x:k,y:z,width:R,height:C}=c[w],{count:M,name:q,didCommit:$}=_;if(kn){const Z=w*Ov;p[Z]=S,p[Z+1]=M,p[Z+2]=k,p[Z+3]=z,p[Z+4]=R,p[Z+5]=C,p[Z+6]=$,m[w]=q}else g||=new Array(l.length),g[w]={id:S,name:q,count:M,x:k,y:z,width:R,height:C,didCommit:$}}kn?kn.postMessage({type:"draw-outlines",data:h,names:m}):Es&&rr&&g&&(W2(Hf,g),zs||(zs=requestAnimationFrame(jf)))}}for(const o of ei)vo.delete(o),ei.delete(o)},jf=()=>{if(!rr||!Es)return;t_(rr,Es,sn,Hf)?zs=requestAnimationFrame(jf):zs=null},s_=typeof OffscreenCanvas<"u"&&typeof Worker<"u",Hv=()=>Math.min(window.devicePixelRatio||1,2),c_=()=>{u_();const a=document.createElement("div");a.setAttribute("data-react-scan","true");const r=a.attachShadow({mode:"open"}),o=document.createElement("canvas");if(o.style.position="fixed",o.style.top="0",o.style.left="0",o.style.pointerEvents="none",o.style.zIndex="2147483646",o.setAttribute("aria-hidden","true"),r.appendChild(o),!o)return null;sn=Hv(),Es=o;const{innerWidth:l,innerHeight:c}=window;o.style.width=`${l}px`,o.style.height=`${c}px`;const d=l*sn,h=c*sn;if(o.width=d,o.height=h,s_&&!window.__REACT_SCAN_EXTENSION__)try{kn=new Worker(URL.createObjectURL(new Blob([n_],{type:"application/javascript"})));const y=o.transferControlToOffscreen();kn?.postMessage({type:"init",canvas:y,width:o.width,height:o.height,dpr:sn},[y])}catch(y){console.warn("Failed to initialize OffscreenCanvas worker:",y)}kn||(rr=e_(o,sn));let p=!1;window.addEventListener("resize",()=>{p||(p=!0,setTimeout(()=>{const y=window.innerWidth,_=window.innerHeight;sn=Hv(),o.style.width=`${y}px`,o.style.height=`${_}px`,kn?kn.postMessage({type:"resize",width:y,height:_,dpr:sn}):(o.width=y*sn,o.height=_*sn,rr&&(rr.resetTransform(),rr.scale(sn,sn)),jf()),p=!1}))});let m=window.scrollX,g=window.scrollY,w=!1;return window.addEventListener("scroll",()=>{w||(w=!0,setTimeout(()=>{const{scrollX:y,scrollY:_}=window,S=y-m,k=_-g;m=y,g=_,kn?kn.postMessage({type:"scroll",deltaX:S,deltaY:k}):requestAnimationFrame(P2.bind(null,Hf,S,k)),w=!1},32))}),setInterval(()=>{ei.size&&requestAnimationFrame(l_)},32),r.appendChild(o),a},jv=()=>globalThis.__REACT_SCAN_STOP__,u_=()=>{const a=document.querySelector("[data-react-scan]");a&&a.remove()},d_=a=>{if(Rs(a)&&Re.options.value.showToolbar!==!1&&te.inspectState.value.kind==="focused"){const r=a,{selfTime:o}=tr(a),l=bt(a.type),c=Aa(r),d=te.reportData.get(c),h=d?.count??0,p=d?.time??0,m=[],g=te.changesListeners.get(Aa(a));if(g?.length){const y=W0(a).map(z=>({type:1,name:z.name,value:z.value,prevValue:z.prevValue,unstable:!1})),_=j2(a),k=Y2(a).map(z=>({name:z.name,type:4,value:z.value,contextType:z.contextType}));g.forEach(z=>{z({propsChanges:y,stateChanges:_,contextChanges:k})})}const w={count:h+1,time:p+o||0,renders:[],displayName:l,type:sr(a.type)||null,changes:m};te.reportData.set(c,w),nf=!0}},nf=!1,Lv,f_=()=>{clearInterval(Lv),Lv=setInterval(()=>{nf&&(te.lastReportTime.value=Date.now(),nf=!1)},50)},h_=a=>!iT.has(a.memoizedProps),p_=a=>{if(jv())return;let r,o=!1;const l=()=>{o||(r&&cancelAnimationFrame(r),r=requestAnimationFrame(()=>{o=!0;const d=c_();d&&document.documentElement.appendChild(d),a()}))},c=F2("react-scan-devtools-0.1.0",{onCommitStart:()=>{Re.options.value.onCommitStart?.()},onActive:()=>{jv()||(l(),window.__REACT_SCAN_EXTENSION__||(globalThis.__REACT_SCAN__={ReactScanInternals:Re}),f_(),$2())},onError:()=>{},isValidFiber:h_,onRender:(d,h)=>{Rs(d)&&te.interactionListeningForRenders?.(d,h);const p=Re.instrumentation?.isPaused.value,m=te.inspectState.value.kind==="inspect-off"||te.inspectState.value.kind==="uninitialized";p&&m||(p||a_(d),Re.options.value.log&&G2(h),te.inspectState.value.kind==="focused"&&(zf.value=Date.now()),m||d_(d),Re.options.value.onRender?.(d,h))},onCommitFinish:()=>{l(),Re.options.value.onCommitFinish?.()},onPostCommitFiberRoot(){l()},trackChanges:!1});Re.instrumentation=c},m_=`*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}/*
! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden]:where(:not([hidden="until-found"])) {
  display: none;
}
.\\!container {
  width: 100% !important;
}
.container {
  width: 100%;
}
@media (min-width: 640px) {

  .\\!container {
    max-width: 640px !important;
  }

  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {

  .\\!container {
    max-width: 768px !important;
  }

  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {

  .\\!container {
    max-width: 1024px !important;
  }

  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {

  .\\!container {
    max-width: 1280px !important;
  }

  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {

  .\\!container {
    max-width: 1536px !important;
  }

  .container {
    max-width: 1536px;
  }
}
.pointer-events-none {
  pointer-events: none;
}
.pointer-events-auto {
  pointer-events: auto;
}
.visible {
  visibility: visible;
}
.static {
  position: static;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.sticky {
  position: sticky;
}
.inset-0 {
  inset: 0px;
}
.inset-x-1 {
  left: 4px;
  right: 4px;
}
.inset-y-0 {
  top: 0px;
  bottom: 0px;
}
.-right-1 {
  right: -4px;
}
.-right-2\\.5 {
  right: -10px;
}
.-top-1 {
  top: -4px;
}
.-top-2\\.5 {
  top: -10px;
}
.bottom-0 {
  bottom: 0px;
}
.bottom-4 {
  bottom: 16px;
}
.left-0 {
  left: 0px;
}
.left-3 {
  left: 12px;
}
.right-0 {
  right: 0px;
}
.right-0\\.5 {
  right: 2px;
}
.right-2 {
  right: 8px;
}
.right-4 {
  right: 16px;
}
.top-0 {
  top: 0px;
}
.top-0\\.5 {
  top: 2px;
}
.top-1\\/2 {
  top: 50%;
}
.top-2 {
  top: 8px;
}
.z-10 {
  z-index: 10;
}
.z-100 {
  z-index: 100;
}
.z-50 {
  z-index: 50;
}
.z-\\[124124124124\\] {
  z-index: 124124124124;
}
.z-\\[214748365\\] {
  z-index: 214748365;
}
.z-\\[214748367\\] {
  z-index: 214748367;
}
.m-\\[2px\\] {
  margin: 2px;
}
.mx-0\\.5 {
  margin-left: 2px;
  margin-right: 2px;
}
.\\!ml-0 {
  margin-left: 0px !important;
}
.mb-1\\.5 {
  margin-bottom: 6px;
}
.mb-2 {
  margin-bottom: 8px;
}
.mb-3 {
  margin-bottom: 12px;
}
.mb-4 {
  margin-bottom: 16px;
}
.mb-px {
  margin-bottom: 1px;
}
.ml-1 {
  margin-left: 4px;
}
.ml-1\\.5 {
  margin-left: 6px;
}
.ml-auto {
  margin-left: auto;
}
.mr-0\\.5 {
  margin-right: 2px;
}
.mr-1 {
  margin-right: 4px;
}
.mr-1\\.5 {
  margin-right: 6px;
}
.mr-16 {
  margin-right: 64px;
}
.mr-auto {
  margin-right: auto;
}
.mt-0\\.5 {
  margin-top: 2px;
}
.mt-1 {
  margin-top: 4px;
}
.mt-4 {
  margin-top: 16px;
}
.block {
  display: block;
}
.inline {
  display: inline;
}
.flex {
  display: flex;
}
.table {
  display: table;
}
.hidden {
  display: none;
}
.aspect-square {
  aspect-ratio: 1 / 1;
}
.h-1 {
  height: 4px;
}
.h-1\\.5 {
  height: 6px;
}
.h-10 {
  height: 40px;
}
.h-12 {
  height: 48px;
}
.h-4 {
  height: 16px;
}
.h-4\\/5 {
  height: 80%;
}
.h-6 {
  height: 24px;
}
.h-7 {
  height: 28px;
}
.h-8 {
  height: 32px;
}
.h-\\[150px\\] {
  height: 150px;
}
.h-\\[235px\\] {
  height: 235px;
}
.h-\\[28px\\] {
  height: 28px;
}
.h-\\[48px\\] {
  height: 48px;
}
.h-\\[50px\\] {
  height: 50px;
}
.h-\\[calc\\(100\\%-150px\\)\\] {
  height: calc(100% - 150px);
}
.h-\\[calc\\(100\\%-200px\\)\\] {
  height: calc(100% - 200px);
}
.h-\\[calc\\(100\\%-25px\\)\\] {
  height: calc(100% - 25px);
}
.h-\\[calc\\(100\\%-40px\\)\\] {
  height: calc(100% - 40px);
}
.h-\\[calc\\(100\\%-48px\\)\\] {
  height: calc(100% - 48px);
}
.h-fit {
  height: -moz-fit-content;
  height: fit-content;
}
.h-full {
  height: 100%;
}
.h-screen {
  height: 100vh;
}
.max-h-0 {
  max-height: 0px;
}
.max-h-40 {
  max-height: 160px;
}
.max-h-9 {
  max-height: 36px;
}
.min-h-9 {
  min-height: 36px;
}
.min-h-\\[48px\\] {
  min-height: 48px;
}
.min-h-fit {
  min-height: -moz-fit-content;
  min-height: fit-content;
}
.w-1 {
  width: 4px;
}
.w-1\\/2 {
  width: 50%;
}
.w-1\\/3 {
  width: 33.333333%;
}
.w-2\\/4 {
  width: 50%;
}
.w-3 {
  width: 12px;
}
.w-4 {
  width: 16px;
}
.w-4\\/5 {
  width: 80%;
}
.w-6 {
  width: 24px;
}
.w-80 {
  width: 320px;
}
.w-\\[20px\\] {
  width: 20px;
}
.w-\\[72px\\] {
  width: 72px;
}
.w-\\[90\\%\\] {
  width: 90%;
}
.w-\\[calc\\(100\\%-200px\\)\\] {
  width: calc(100% - 200px);
}
.w-fit {
  width: -moz-fit-content;
  width: fit-content;
}
.w-full {
  width: 100%;
}
.w-px {
  width: 1px;
}
.w-screen {
  width: 100vw;
}
.min-w-0 {
  min-width: 0px;
}
.min-w-\\[200px\\] {
  min-width: 200px;
}
.min-w-fit {
  min-width: -moz-fit-content;
  min-width: fit-content;
}
.max-w-md {
  max-width: 448px;
}
.flex-1 {
  flex: 1 1 0%;
}
.shrink-0 {
  flex-shrink: 0;
}
.grow {
  flex-grow: 1;
}
.-translate-y-1\\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-y-\\[200\\%\\] {
  --tw-translate-y: -200%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-1 {
  --tw-translate-y: 4px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-rotate-90 {
  --tw-rotate: -90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-0 {
  --tw-rotate: 0deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-180 {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-90 {
  --tw-rotate: 90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-110 {
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@keyframes fadeIn {

  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
.animate-fade-in {
  animation: fadeIn ease-in forwards;
}
.cursor-default {
  cursor: default;
}
.cursor-e-resize {
  cursor: e-resize;
}
.cursor-ew-resize {
  cursor: ew-resize;
}
.cursor-move {
  cursor: move;
}
.cursor-nesw-resize {
  cursor: nesw-resize;
}
.cursor-ns-resize {
  cursor: ns-resize;
}
.cursor-nwse-resize {
  cursor: nwse-resize;
}
.cursor-pointer {
  cursor: pointer;
}
.cursor-w-resize {
  cursor: w-resize;
}
.select-none {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.resize {
  resize: both;
}
.appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.flex-col {
  flex-direction: column;
}
.items-start {
  align-items: flex-start;
}
.items-end {
  align-items: flex-end;
}
.items-center {
  align-items: center;
}
.items-stretch {
  align-items: stretch;
}
.justify-start {
  justify-content: flex-start;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.gap-0\\.5 {
  gap: 2px;
}
.gap-1 {
  gap: 4px;
}
.gap-1\\.5 {
  gap: 6px;
}
.gap-2 {
  gap: 8px;
}
.gap-4 {
  gap: 16px;
}
.gap-x-0\\.5 {
  -moz-column-gap: 2px;
       column-gap: 2px;
}
.gap-x-1 {
  -moz-column-gap: 4px;
       column-gap: 4px;
}
.gap-x-1\\.5 {
  -moz-column-gap: 6px;
       column-gap: 6px;
}
.gap-x-2 {
  -moz-column-gap: 8px;
       column-gap: 8px;
}
.gap-x-3 {
  -moz-column-gap: 12px;
       column-gap: 12px;
}
.gap-x-4 {
  -moz-column-gap: 16px;
       column-gap: 16px;
}
.gap-y-0\\.5 {
  row-gap: 2px;
}
.gap-y-1 {
  row-gap: 4px;
}
.gap-y-2 {
  row-gap: 8px;
}
.gap-y-4 {
  row-gap: 16px;
}
.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(6px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(6px * var(--tw-space-y-reverse));
}
.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}
.divide-zinc-800 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-divide-opacity, 1));
}
.place-self-center {
  place-self: center;
}
.self-end {
  align-self: flex-end;
}
.overflow-auto {
  overflow: auto;
}
.overflow-hidden {
  overflow: hidden;
}
.\\!overflow-visible {
  overflow: visible !important;
}
.overflow-x-auto {
  overflow-x: auto;
}
.overflow-y-auto {
  overflow-y: auto;
}
.overflow-x-hidden {
  overflow-x: hidden;
}
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.whitespace-nowrap {
  white-space: nowrap;
}
.whitespace-pre-wrap {
  white-space: pre-wrap;
}
.text-wrap {
  text-wrap: wrap;
}
.break-words {
  overflow-wrap: break-word;
}
.break-all {
  word-break: break-all;
}
.rounded {
  border-radius: 4px;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-lg {
  border-radius: 8px;
}
.rounded-md {
  border-radius: 6px;
}
.rounded-sm {
  border-radius: 2px;
}
.rounded-l-md {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
.rounded-l-sm {
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
.rounded-r-md {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
.rounded-r-sm {
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
.rounded-t-lg {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.rounded-t-sm {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}
.rounded-bl-lg {
  border-bottom-left-radius: 8px;
}
.rounded-br-lg {
  border-bottom-right-radius: 8px;
}
.rounded-tl-lg {
  border-top-left-radius: 8px;
}
.rounded-tr-lg {
  border-top-right-radius: 8px;
}
.border {
  border-width: 1px;
}
.border-4 {
  border-width: 4px;
}
.border-b {
  border-bottom-width: 1px;
}
.border-l {
  border-left-width: 1px;
}
.border-l-0 {
  border-left-width: 0px;
}
.border-l-1 {
  border-left-width: 1px;
}
.border-r {
  border-right-width: 1px;
}
.border-t {
  border-top-width: 1px;
}
.border-none {
  border-style: none;
}
.\\!border-red-500 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(239 68 68 / var(--tw-border-opacity, 1)) !important;
}
.border-\\[\\#1e1e1e\\] {
  --tw-border-opacity: 1;
  border-color: rgb(30 30 30 / var(--tw-border-opacity, 1));
}
.border-\\[\\#222\\] {
  --tw-border-opacity: 1;
  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));
}
.border-\\[\\#27272A\\] {
  --tw-border-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-border-opacity, 1));
}
.border-\\[\\#333\\] {
  --tw-border-opacity: 1;
  border-color: rgb(51 51 51 / var(--tw-border-opacity, 1));
}
.border-transparent {
  border-color: transparent;
}
.border-zinc-800 {
  --tw-border-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-border-opacity, 1));
}
.bg-\\[\\#0A0A0A\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(10 10 10 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#141414\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(20 20 20 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#18181B\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(24 24 27 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#18181B\\]\\/50 {
  background-color: rgb(24 24 27 / 0.5);
}
.bg-\\[\\#1D3A66\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(29 58 102 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#1E1E1E\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(30 30 30 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#1a2a1a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(26 42 26 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#1e1e1e\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(30 30 30 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#214379d4\\] {
  background-color: #214379d4;
}
.bg-\\[\\#27272A\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#2a1515\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(42 21 21 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#412162\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(65 33 98 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#44444a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(68 68 74 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#4b4b4b\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(75 75 75 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#5f3f9a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(95 63 154 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#5f3f9a\\]\\/40 {
  background-color: rgb(95 63 154 / 0.4);
}
.bg-\\[\\#6a369e\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(106 54 158 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#7521c8\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(117 33 200 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#8e61e3\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(142 97 227 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#EFD81A\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(239 216 26 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#b77116\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(183 113 22 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#b94040\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(185 64 64 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#d36cff\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(211 108 255 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#efd81a6b\\] {
  background-color: #efd81a6b;
}
.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
}
.bg-black\\/40 {
  background-color: rgb(0 0 0 / 0.4);
}
.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));
}
.bg-green-500\\/50 {
  background-color: rgb(34 197 94 / 0.5);
}
.bg-green-500\\/60 {
  background-color: rgb(34 197 94 / 0.6);
}
.bg-neutral-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(64 64 64 / var(--tw-bg-opacity, 1));
}
.bg-purple-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(168 85 247 / var(--tw-bg-opacity, 1));
}
.bg-purple-500\\/90 {
  background-color: rgb(168 85 247 / 0.9);
}
.bg-purple-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(107 33 168 / var(--tw-bg-opacity, 1));
}
.bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity, 1));
}
.bg-red-500\\/90 {
  background-color: rgb(239 68 68 / 0.9);
}
.bg-red-950\\/50 {
  background-color: rgb(69 10 10 / 0.5);
}
.bg-transparent {
  background-color: transparent;
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
}
.bg-yellow-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 224 71 / var(--tw-bg-opacity, 1));
}
.bg-zinc-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity, 1));
}
.bg-zinc-900\\/30 {
  background-color: rgb(24 24 27 / 0.3);
}
.bg-zinc-900\\/50 {
  background-color: rgb(24 24 27 / 0.5);
}
.p-0 {
  padding: 0px;
}
.p-1 {
  padding: 4px;
}
.p-2 {
  padding: 8px;
}
.p-3 {
  padding: 12px;
}
.p-4 {
  padding: 16px;
}
.p-5 {
  padding: 20px;
}
.p-6 {
  padding: 24px;
}
.px-1 {
  padding-left: 4px;
  padding-right: 4px;
}
.px-1\\.5 {
  padding-left: 6px;
  padding-right: 6px;
}
.px-2 {
  padding-left: 8px;
  padding-right: 8px;
}
.px-2\\.5 {
  padding-left: 10px;
  padding-right: 10px;
}
.px-3 {
  padding-left: 12px;
  padding-right: 12px;
}
.px-4 {
  padding-left: 16px;
  padding-right: 16px;
}
.py-0\\.5 {
  padding-top: 2px;
  padding-bottom: 2px;
}
.py-1 {
  padding-top: 4px;
  padding-bottom: 4px;
}
.py-1\\.5 {
  padding-top: 6px;
  padding-bottom: 6px;
}
.py-2 {
  padding-top: 8px;
  padding-bottom: 8px;
}
.py-3 {
  padding-top: 12px;
  padding-bottom: 12px;
}
.py-4 {
  padding-top: 16px;
  padding-bottom: 16px;
}
.py-\\[1px\\] {
  padding-top: 1px;
  padding-bottom: 1px;
}
.py-\\[3px\\] {
  padding-top: 3px;
  padding-bottom: 3px;
}
.py-\\[5px\\] {
  padding-top: 5px;
  padding-bottom: 5px;
}
.pb-2 {
  padding-bottom: 8px;
}
.pl-1 {
  padding-left: 4px;
}
.pl-2 {
  padding-left: 8px;
}
.pl-2\\.5 {
  padding-left: 10px;
}
.pl-3 {
  padding-left: 12px;
}
.pl-5 {
  padding-left: 20px;
}
.pl-6 {
  padding-left: 24px;
}
.pr-1 {
  padding-right: 4px;
}
.pr-1\\.5 {
  padding-right: 6px;
}
.pr-2 {
  padding-right: 8px;
}
.pr-2\\.5 {
  padding-right: 10px;
}
.pt-0 {
  padding-top: 0px;
}
.pt-2 {
  padding-top: 8px;
}
.pt-5 {
  padding-top: 20px;
}
.text-left {
  text-align: left;
}
.font-mono {
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
}
.text-\\[10px\\] {
  font-size: 10px;
}
.text-\\[11px\\] {
  font-size: 11px;
}
.text-\\[13px\\] {
  font-size: 13px;
}
.text-\\[14px\\] {
  font-size: 14px;
}
.text-\\[17px\\] {
  font-size: 17px;
}
.text-\\[8px\\] {
  font-size: 8px;
}
.text-sm {
  font-size: 14px;
  line-height: 20px;
}
.text-xs {
  font-size: 12px;
  line-height: 16px;
}
.font-bold {
  font-weight: 700;
}
.font-medium {
  font-weight: 500;
}
.font-semibold {
  font-weight: 600;
}
.uppercase {
  text-transform: uppercase;
}
.lowercase {
  text-transform: lowercase;
}
.capitalize {
  text-transform: capitalize;
}
.italic {
  font-style: italic;
}
.leading-6 {
  line-height: 24px;
}
.leading-none {
  line-height: 1;
}
.tracking-wide {
  letter-spacing: 0.025em;
}
.text-\\[\\#4ade80\\] {
  --tw-text-opacity: 1;
  color: rgb(74 222 128 / var(--tw-text-opacity, 1));
}
.text-\\[\\#5a5a5a\\] {
  --tw-text-opacity: 1;
  color: rgb(90 90 90 / var(--tw-text-opacity, 1));
}
.text-\\[\\#65656D\\] {
  --tw-text-opacity: 1;
  color: rgb(101 101 109 / var(--tw-text-opacity, 1));
}
.text-\\[\\#666\\] {
  --tw-text-opacity: 1;
  color: rgb(102 102 102 / var(--tw-text-opacity, 1));
}
.text-\\[\\#6E6E77\\] {
  --tw-text-opacity: 1;
  color: rgb(110 110 119 / var(--tw-text-opacity, 1));
}
.text-\\[\\#6F6F78\\] {
  --tw-text-opacity: 1;
  color: rgb(111 111 120 / var(--tw-text-opacity, 1));
}
.text-\\[\\#7346a0\\] {
  --tw-text-opacity: 1;
  color: rgb(115 70 160 / var(--tw-text-opacity, 1));
}
.text-\\[\\#737373\\] {
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}
.text-\\[\\#888\\] {
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));
}
.text-\\[\\#8E61E3\\] {
  --tw-text-opacity: 1;
  color: rgb(142 97 227 / var(--tw-text-opacity, 1));
}
.text-\\[\\#999\\] {
  --tw-text-opacity: 1;
  color: rgb(153 153 153 / var(--tw-text-opacity, 1));
}
.text-\\[\\#A1A1AA\\] {
  --tw-text-opacity: 1;
  color: rgb(161 161 170 / var(--tw-text-opacity, 1));
}
.text-\\[\\#A855F7\\] {
  --tw-text-opacity: 1;
  color: rgb(168 85 247 / var(--tw-text-opacity, 1));
}
.text-\\[\\#E4E4E7\\] {
  --tw-text-opacity: 1;
  color: rgb(228 228 231 / var(--tw-text-opacity, 1));
}
.text-\\[\\#d36cff\\] {
  --tw-text-opacity: 1;
  color: rgb(211 108 255 / var(--tw-text-opacity, 1));
}
.text-\\[\\#f87171\\] {
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity, 1));
}
.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity, 1));
}
.text-gray-100 {
  --tw-text-opacity: 1;
  color: rgb(243 244 246 / var(--tw-text-opacity, 1));
}
.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity, 1));
}
.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity, 1));
}
.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
}
.text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(34 197 94 / var(--tw-text-opacity, 1));
}
.text-neutral-300 {
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity, 1));
}
.text-neutral-400 {
  --tw-text-opacity: 1;
  color: rgb(163 163 163 / var(--tw-text-opacity, 1));
}
.text-neutral-500 {
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}
.text-purple-400 {
  --tw-text-opacity: 1;
  color: rgb(192 132 252 / var(--tw-text-opacity, 1));
}
.text-red-300 {
  --tw-text-opacity: 1;
  color: rgb(252 165 165 / var(--tw-text-opacity, 1));
}
.text-red-400 {
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity, 1));
}
.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity, 1));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}
.text-white\\/30 {
  color: rgb(255 255 255 / 0.3);
}
.text-white\\/70 {
  color: rgb(255 255 255 / 0.7);
}
.text-yellow-300 {
  --tw-text-opacity: 1;
  color: rgb(253 224 71 / var(--tw-text-opacity, 1));
}
.text-yellow-500 {
  --tw-text-opacity: 1;
  color: rgb(234 179 8 / var(--tw-text-opacity, 1));
}
.text-zinc-200 {
  --tw-text-opacity: 1;
  color: rgb(228 228 231 / var(--tw-text-opacity, 1));
}
.text-zinc-400 {
  --tw-text-opacity: 1;
  color: rgb(161 161 170 / var(--tw-text-opacity, 1));
}
.text-zinc-500 {
  --tw-text-opacity: 1;
  color: rgb(113 113 122 / var(--tw-text-opacity, 1));
}
.text-zinc-600 {
  --tw-text-opacity: 1;
  color: rgb(82 82 91 / var(--tw-text-opacity, 1));
}
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
.opacity-50 {
  opacity: 0.5;
}
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.outline {
  outline-style: solid;
}
.ring-1 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-white\\/\\[0\\.08\\] {
  --tw-ring-color: rgb(255 255 255 / 0.08);
}
.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.\\!filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow) !important;
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.backdrop-blur-sm {
  --tw-backdrop-blur: blur(4px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[border-radius\\] {
  transition-property: border-radius;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[color\\2c transform\\] {
  transition-property: color,transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[max-height\\] {
  transition-property: max-height;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[opacity\\] {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-none {
  transition-property: none;
}
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.delay-0 {
  transition-delay: 0s;
}
.delay-150 {
  transition-delay: 150ms;
}
.delay-300 {
  transition-delay: 300ms;
}
.\\!duration-0 {
  transition-duration: 0s !important;
}
.duration-0 {
  transition-duration: 0s;
}
.duration-200 {
  transition-duration: 200ms;
}
.duration-300 {
  transition-duration: 300ms;
}
.ease-\\[cubic-bezier\\(0\\.23\\2c 1\\2c 0\\.32\\2c 1\\)\\] {
  transition-timing-function: cubic-bezier(0.23,1,0.32,1);
}
.ease-\\[cubic-bezier\\(0\\.25\\2c 0\\.1\\2c 0\\.25\\2c 1\\)\\] {
  transition-timing-function: cubic-bezier(0.25,0.1,0.25,1);
}
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
.will-change-transform {
  will-change: transform;
}
.animation-duration-300 {
  animation-duration: .3s;
}
.animation-delay-300 {
  animation-delay: .3s;
}
.\\[touch-action\\:none\\] {
  touch-action: none;
}

* {
  outline: none !important;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;

  /* WebKit (Chrome, Safari, Edge) specific scrollbar styles */
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.3);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }
}

@-moz-document url-prefix() {
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.4) transparent;
    scrollbar-width: 6px;
  }
}

button:hover {
  background-image: none;
}

button {
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-style: none;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-timing-function: linear;
  cursor: pointer;
}

input {
  border-style: none;
  background-color: transparent;
  background-image: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

input::-moz-placeholder {
  font-size: 12px;
  line-height: 16px;
  font-style: italic;
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}

input::placeholder {
  font-size: 12px;
  line-height: 16px;
  font-style: italic;
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}

input:-moz-placeholder-shown {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

input:placeholder-shown {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

svg {
  height: auto;
  width: auto;
  pointer-events: none;
}

/*
  Using CSS content with data attributes is more performant than:
  1. React re-renders with JSX text content
  2. Direct DOM manipulation methods:
     - element.textContent (creates/updates text nodes, triggers repaint)
     - element.innerText (triggers reflow by computing styles & layout)
     - element.innerHTML (heavy parsing, triggers reflow, security risks)
  3. Multiple data attributes with complex CSS concatenation

  This approach:
  - Avoids React reconciliation
  - Uses browser's native CSS engine (optimized content updates)
  - Minimizes main thread work
  - Reduces DOM operations
  - Avoids forced reflows (layout recalculation)
  - Only triggers necessary repaints
  - Keeps pseudo-element updates in render layer
*/
.with-data-text {
  overflow: hidden;
  &::before {
    content: attr(data-text);
  }
  &::before {
    display: block;
  }
  &::before {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

#react-scan-toolbar {
  position: fixed;
  left: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  font-size: 13px;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  cursor: move;
  opacity: 0;
  z-index: 2147483678;
}

@keyframes fadeIn {

  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

#react-scan-toolbar {
  animation: fadeIn ease-in forwards;
  animation-duration: .3s;
  animation-delay: .3s;
  --tw-shadow: 0 4px 12px rgba(0,0,0,0.2);
  --tw-shadow-colored: 0 4px 12px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  place-self: start;

  /* [CURSOR GENERATED] Anti-blur fixes:
   * We removed will-change-transform and replaced it with these properties
   * because will-change was causing stacking context issues and inconsistent
   * text rendering. The new properties work together to force proper
   * GPU acceleration without z-index side effects:
   */
  transform: translate3d(
    0,
    0,
    0
  ); /* Forces GPU acceleration without causing stacking issues */
  backface-visibility: hidden; /* Prevents blurry text during transforms */
  perspective: 1000; /* Creates proper 3D context for crisp text */ /* Ensures consistent text rendering across browsers */
  transform-style: preserve-3d;
}

.button {
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background: rgba(255, 255, 255, 0.15);
  }
}

.resize-line-wrapper {
  position: absolute;
  overflow: hidden;
}

.resize-line {
  position: absolute;
  inset: 0px;
  overflow: hidden;
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  svg {
    position: absolute;
  }

  svg {
    top: 50%;
  }

  svg {
    left: 50%;
  }

  svg {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-right,
.resize-left {
  top: 0px;
  bottom: 0px;
  width: 24px;
  cursor: ew-resize;

  .resize-line-wrapper {
    top: 0px;
    bottom: 0px;
  }

  .resize-line-wrapper {
    width: 50%;
  }

  &:hover {
    .resize-line {
      --tw-translate-x: 0px;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }
}
.resize-right {
  right: 0px;
  --tw-translate-x: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    right: 0px;
  }
  .resize-line {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .resize-line {
    --tw-translate-x: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-left {
  left: 0px;
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    left: 0px;
  }
  .resize-line {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .resize-line {
    --tw-translate-x: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-top,
.resize-bottom {
  left: 0px;
  right: 0px;
  height: 24px;
  cursor: ns-resize;

  .resize-line-wrapper {
    left: 0px;
    right: 0px;
  }

  .resize-line-wrapper {
    height: 50%;
  }

  &:hover {
    .resize-line {
      --tw-translate-y: 0px;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }
}
.resize-top {
  top: 0px;
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    top: 0px;
  }
  .resize-line {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .resize-line {
    --tw-translate-y: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-bottom {
  bottom: 0px;
  --tw-translate-y: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    bottom: 0px;
  }
  .resize-line {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .resize-line {
    --tw-translate-y: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-scan-header {
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding-left: 12px;
  padding-right: 8px;
  min-height: 36px;
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));
  overflow: hidden;
  white-space: nowrap;
}

.react-scan-replay-button,
.react-scan-close-button {
  display: flex;
  align-items: center;
  padding: 4px;
  min-width: -moz-fit-content;
  min-width: fit-content;
  border-radius: 4px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.react-scan-replay-button {
  position: relative;
  overflow: hidden;
  background-color: rgb(168 85 247 / 0.5) !important;

  &:hover {
    background-color: rgb(168 85 247 / 0.25);
  }

  &.disabled {
    opacity: 0.5;
  }

  &.disabled {
    pointer-events: none;
  }

  &:before {
    content: "";
  }

  &:before {
    position: absolute;
  }

  &:before {
    inset: 0px;
  }

  &:before {
    --tw-translate-x: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &:before {
    animation: shimmer 2s infinite;
    background: linear-gradient(
      to right,
      transparent,
      rgba(142, 97, 227, 0.3),
      transparent
    );
  }
}

.react-scan-close-button {
  background-color: rgb(255 255 255 / 0.1);

  &:hover {
    background-color: rgb(255 255 255 / 0.15);
  }
}

@keyframes shimmer {
  100% {
    --tw-translate-x: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-section-header {
  position: sticky;
  z-index: 100;
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding-left: 12px;
  padding-right: 12px;
  height: 28px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(10 10 10 / var(--tw-bg-opacity, 1));
}

.react-scan-section {
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  padding-right: 8px;
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));
}

.react-scan-section::before {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
  --tw-content: attr(data-section);
  content: var(--tw-content);
}

.react-scan-section {
  font-size: 12px;
  line-height: 16px;

  > .react-scan-property {
    margin-left: -14px;
  }
}

.react-scan-property {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  border-left-width: 1px;
  border-color: transparent;
  overflow: hidden;
}

.react-scan-property-content {
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  min-height: 28px;
  max-width: 100%;
  overflow: hidden;
}

.react-scan-string {
  color: #9ecbff;
}

.react-scan-number {
  color: #79c7ff;
}

.react-scan-boolean {
  color: #56b6c2;
}

.react-scan-key {
  width: -moz-fit-content;
  width: fit-content;
  max-width: 240px;
  white-space: nowrap;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}

.react-scan-input {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
}

@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.react-scan-arrow {
  position: absolute;
  top: 0px;
  left: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 28px;
  width: 24px;
  --tw-translate-x: -100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  z-index: 10;

  > svg {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
}

.react-scan-expandable {
  display: grid;
  grid-template-rows: 0fr;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 75ms;

  &.react-scan-expanded {
    grid-template-rows: 1fr;
  }

  &.react-scan-expanded {
    transition-duration: 100ms;
  }
}

.react-scan-nested {
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
  }

  &:before {
    position: absolute;
  }

  &:before {
    top: 0px;
  }

  &:before {
    left: 0px;
  }

  &:before {
    height: 100%;
  }

  &:before {
    width: 1px;
  }

  &:before {
    background-color: rgb(107 114 128 / 0.3);
  }
}

.react-scan-settings {
  position: absolute;
  inset: 0px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));

  > div {
    display: flex;
  }

  > div {
    align-items: center;
  }

  > div {
    justify-content: space-between;
  }

  > div {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > div {
    transition-duration: 300ms;
  }
}

.react-scan-preview-line {
  position: relative;
  display: flex;
  min-height: 28px;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
}

.react-scan-flash-overlay {
  position: absolute;
  inset: 0px;
  opacity: 0;
  z-index: 50;
  pointer-events: none;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  mix-blend-mode: multiply;
  background-color: rgb(168 85 247 / 0.9);
}

.react-scan-toggle {
  position: relative;
  display: inline-flex;
  height: 24px;
  width: 40px;

  input {
    position: absolute;
  }

  input {
    inset: 0px;
  }

  input {
    z-index: 20;
  }

  input {
    opacity: 0;
  }

  input {
    cursor: pointer;
  }

  input {
    height: 100%;
  }

  input {
    width: 100%;
  }

  input:checked {
    + div {
      --tw-bg-opacity: 1;
      background-color: rgb(95 63 154 / var(--tw-bg-opacity, 1));
    }
    + div {

      &::before {
        --tw-translate-x: 100%;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }

      &::before {
        left: auto;
      }

      &::before {
        --tw-border-opacity: 1;
        border-color: rgb(95 63 154 / var(--tw-border-opacity, 1));
      }
    }
  }

  > div {
    position: absolute;
  }

  > div {
    inset: 4px;
  }

  > div {
    --tw-bg-opacity: 1;
    background-color: rgb(64 64 64 / var(--tw-bg-opacity, 1));
  }

  > div {
    border-radius: 9999px;
  }

  > div {
    pointer-events: none;
  }

  > div {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > div {
    transition-duration: 300ms;
  }

  > div {

    &:before {
      --tw-content: '';
      content: var(--tw-content);
    }

    &:before {
      position: absolute;
    }

    &:before {
      top: 50%;
    }

    &:before {
      left: 0px;
    }

    &:before {
      --tw-translate-y: -50%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }

    &:before {
      height: 16px;
    }

    &:before {
      width: 16px;
    }

    &:before {
      --tw-bg-opacity: 1;
      background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
    }

    &:before {
      border-width: 2px;
    }

    &:before {
      --tw-border-opacity: 1;
      border-color: rgb(64 64 64 / var(--tw-border-opacity, 1));
    }

    &:before {
      border-radius: 9999px;
    }

    &:before {
      --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }

    &:before {
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }

    &:before {
      transition-duration: 300ms;
    }
  }
}

.react-scan-flash-active {
  opacity: 0.4;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.react-scan-inspector-overlay {
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;

  &.fade-out {
    opacity: 0;
  }

  &.fade-in {
    opacity: 1;
  }
}

.react-scan-what-changed {
  ul {
    list-style-type: disc;
  }
  ul {
    padding-left: 16px;
  }

  li {
    white-space: nowrap;
  }

  li {
    > div {
      display: flex;
    }
    > div {
      align-items: center;
    }
    > div {
      justify-content: space-between;
    }
    > div {
      -moz-column-gap: 8px;
           column-gap: 8px;
    }
  }
}

.count-badge {
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  --tw-numeric-spacing: tabular-nums;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
  --tw-text-opacity: 1;
  color: rgb(168 85 247 / var(--tw-text-opacity, 1));
  background-color: rgb(168 85 247 / 0.1);
  transform-origin: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 150ms;
  transition-duration: 300ms;
}

@keyframes countFlash {

  0% {
    background-color: rgba(168, 85, 247, 0.3);
    transform: scale(1.05);
  }

  100% {
    background-color: rgba(168, 85, 247, 0.1);
    transform: scale(1);
  }
}

.count-flash {
  animation: countFlash .3s ease-out forwards;
}

@keyframes countFlashShake {

  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(-5px);
  }

  50% {
    transform: translateX(5px) scale(1.1);
  }

  75% {
    transform: translateX(-5px);
  }

  100% {
    transform: translateX(0);
  }
}

.count-flash-white {
  animation: countFlashShake .3s ease-out forwards;
  transition-delay: 500ms !important;
}

.change-scope {
  display: flex;
  align-items: center;
  -moz-column-gap: 4px;
       column-gap: 4px;
  --tw-text-opacity: 1;
  color: rgb(102 102 102 / var(--tw-text-opacity, 1));
  font-size: 12px;
  line-height: 16px;
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;

  > div {
    padding-left: 6px;
    padding-right: 6px;
  }

  > div {
    padding-top: 2px;
    padding-bottom: 2px;
  }

  > div {
    transform-origin: center;
  }

  > div {
    border-radius: 4px;
  }

  > div {
    font-size: 12px;
    line-height: 16px;
  }

  > div {
    font-weight: 500;
  }

  > div {
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
  }

  > div {
    transform-origin: center;
  }

  > div {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > div {
    transition-delay: 150ms;
  }

  > div {
    transition-duration: 300ms;
  }

  > div {

    &[data-flash="true"] {
      background-color: rgb(168 85 247 / 0.1);
    }

    &[data-flash="true"] {
      --tw-text-opacity: 1;
      color: rgb(168 85 247 / var(--tw-text-opacity, 1));
    }
  }
}

.react-scan-slider {
  position: relative;
  min-height: 24px;

  > input {
    position: absolute;
  }

  > input {
    inset: 0px;
  }

  > input {
    opacity: 0;
  }

  &:before {
    --tw-content: '';
    content: var(--tw-content);
  }

  &:before {
    position: absolute;
  }

  &:before {
    left: 0px;
    right: 0px;
  }

  &:before {
    top: 50%;
  }

  &:before {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &:before {
    height: 6px;
  }

  &:before {
    background-color: rgb(142 97 227 / 0.4);
  }

  &:before {
    border-radius: 8px;
  }

  &:before {
    pointer-events: none;
  }

  &:after {
    --tw-content: '';
    content: var(--tw-content);
  }

  &:after {
    position: absolute;
  }

  &:after {
    left: 0px;
    right: 0px;
  }

  &:after {
    top: -8px;
    bottom: -8px;
  }

  &:after {
    z-index: -10;
  }

  span {
    position: absolute;
  }

  span {
    left: 0px;
  }

  span {
    top: 50%;
  }

  span {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  span {
    height: 10px;
  }

  span {
    width: 10px;
  }

  span {
    border-radius: 8px;
  }

  span {
    --tw-bg-opacity: 1;
    background-color: rgb(142 97 227 / var(--tw-bg-opacity, 1));
  }

  span {
    pointer-events: none;
  }

  span {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  span {
    transition-duration: 75ms;
  }
}

.resize-v-line {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 4px;
  max-width: 4px;
  height: 100%;
  width: 100%;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover,
  &:active {
    > span {
      --tw-bg-opacity: 1;
      background-color: rgb(34 34 34 / var(--tw-bg-opacity, 1));
    }

    svg {
      opacity: 1;
    }
  }

  &::before {
    --tw-content: "";
    content: var(--tw-content);
  }

  &::before {
    position: absolute;
  }

  &::before {
    inset: 0px;
  }

  &::before {
    left: 50%;
  }

  &::before {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &::before {
    width: 1px;
  }

  &::before {
    --tw-bg-opacity: 1;
    background-color: rgb(34 34 34 / var(--tw-bg-opacity, 1));
  }

  &::before {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > span {
    position: absolute;
  }

  > span {
    left: 50%;
  }

  > span {
    top: 50%;
  }

  > span {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  > span {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  > span {
    height: 18px;
  }

  > span {
    width: 6px;
  }

  > span {
    border-radius: 4px;
  }

  > span {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  svg {
    position: absolute;
  }

  svg {
    left: 50%;
  }

  svg {
    top: 50%;
  }

  svg {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-rotate: 90deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-text-opacity: 1;
    color: rgb(163 163 163 / var(--tw-text-opacity, 1));
  }

  svg {
    opacity: 0;
  }

  svg {
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  svg {
    z-index: 50;
  }
}

.tree-node-search-highlight {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  span {
    padding-top: 1px;
    padding-bottom: 1px;
  }

  span {
    border-radius: 2px;
  }

  span {
    --tw-bg-opacity: 1;
    background-color: rgb(253 224 71 / var(--tw-bg-opacity, 1));
  }

  span {
    font-weight: 500;
  }

  span {
    --tw-text-opacity: 1;
    color: rgb(0 0 0 / var(--tw-text-opacity, 1));
  }

  .single {
    margin-right: 1px;
  }

  .single {
    padding-left: 2px;
    padding-right: 2px;
  }

  .regex {
    padding-left: 2px;
    padding-right: 2px;
  }

  .start {
    margin-left: 1px;
  }

  .start {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }

  .end {
    margin-right: 1px;
  }

  .end {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }

  .middle {
    margin-left: 1px;
    margin-right: 1px;
  }

  .middle {
    border-radius: 2px;
  }
}

.react-scan-toolbar-notification {
  position: absolute;
  left: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding: 4px;
  padding-left: 8px;
  font-size: 10px;
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity, 1));
  background-color: rgb(0 0 0 / 0.9);
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:before {
    --tw-content: '';
    content: var(--tw-content);
  }

  &:before {
    position: absolute;
  }

  &:before {
    left: 0px;
    right: 0px;
  }

  &:before {
    --tw-bg-opacity: 1;
    background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
  }

  &:before {
    height: 8px;
  }

  &.position-top {
    top: 100%;
  }

  &.position-top {
    --tw-translate-y: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &.position-top {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &.position-top {

    &::before {
      top: 0px;
    }

    &::before {
      --tw-translate-y: -100%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }

  &.position-bottom {
    bottom: 100%;
  }

  &.position-bottom {
    --tw-translate-y: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &.position-bottom {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &.position-bottom {

    &::before {
      bottom: 0px;
    }

    &::before {
      --tw-translate-y: 100%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }

  &.is-open {
    --tw-translate-y: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-scan-header-item {
  position: absolute;
  inset: 0px;
  --tw-translate-y: -200%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;

  &.is-visible {
    --tw-translate-y: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-scan-components-tree:has(.resize-v-line:hover, .resize-v-line:active)
  .tree {
  overflow: hidden;
}

.react-scan-expandable {
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 75ms;
  transition-timing-function: ease-out;

  > * {
    min-height: 0;
  }

  &.react-scan-expanded {
    grid-template-rows: 1fr;
    transition-duration: 100ms;
  }
}

.after\\:absolute::after {
  content: var(--tw-content);
  position: absolute;
}

.after\\:inset-0::after {
  content: var(--tw-content);
  inset: 0px;
}

.after\\:left-1\\/2::after {
  content: var(--tw-content);
  left: 50%;
}

.after\\:top-\\[100\\%\\]::after {
  content: var(--tw-content);
  top: 100%;
}

.after\\:h-\\[6px\\]::after {
  content: var(--tw-content);
  height: 6px;
}

.after\\:w-\\[10px\\]::after {
  content: var(--tw-content);
  width: 10px;
}

.after\\:-translate-x-1\\/2::after {
  content: var(--tw-content);
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

@keyframes fadeOut {

  0% {
    content: var(--tw-content);
    opacity: 1;
  }

  100% {
    content: var(--tw-content);
    opacity: 0;
  }
}

.after\\:animate-\\[fadeOut_1s_ease-out_forwards\\]::after {
  content: var(--tw-content);
  animation: fadeOut 1s ease-out forwards;
}

.after\\:border-l-\\[5px\\]::after {
  content: var(--tw-content);
  border-left-width: 5px;
}

.after\\:border-r-\\[5px\\]::after {
  content: var(--tw-content);
  border-right-width: 5px;
}

.after\\:border-t-\\[6px\\]::after {
  content: var(--tw-content);
  border-top-width: 6px;
}

.after\\:border-l-transparent::after {
  content: var(--tw-content);
  border-left-color: transparent;
}

.after\\:border-r-transparent::after {
  content: var(--tw-content);
  border-right-color: transparent;
}

.after\\:border-t-white::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-top-color: rgb(255 255 255 / var(--tw-border-opacity, 1));
}

.after\\:bg-purple-500\\/30::after {
  content: var(--tw-content);
  background-color: rgb(168 85 247 / 0.3);
}

.after\\:content-\\[\\"\\"\\]::after {
  --tw-content: "";
  content: var(--tw-content);
}

.focus-within\\:border-\\[\\#454545\\]:focus-within {
  --tw-border-opacity: 1;
  border-color: rgb(69 69 69 / var(--tw-border-opacity, 1));
}

.hover\\:bg-\\[\\#0f0f0f\\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(15 15 15 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-\\[\\#18181B\\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(24 24 27 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-\\[\\#34343b\\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(52 52 59 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-\\[\\#5f3f9a\\]\\/20:hover {
  background-color: rgb(95 63 154 / 0.2);
}

.hover\\:bg-\\[\\#5f3f9a\\]\\/40:hover {
  background-color: rgb(95 63 154 / 0.4);
}

.hover\\:bg-red-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-zinc-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(63 63 70 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-zinc-800\\/50:hover {
  background-color: rgb(39 39 42 / 0.5);
}

.hover\\:text-neutral-300:hover {
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity, 1));
}

.hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}

.group:hover .group-hover\\:bg-\\[\\#21437982\\] {
  background-color: #21437982;
}

.group:hover .group-hover\\:bg-\\[\\#5b2d89\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(91 45 137 / var(--tw-bg-opacity, 1));
}

.group:hover .group-hover\\:bg-\\[\\#6a6a6a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(106 106 106 / var(--tw-bg-opacity, 1));
}

.group:hover .group-hover\\:bg-\\[\\#efda1a2f\\] {
  background-color: #efda1a2f;
}

.group:hover .group-hover\\:opacity-100 {
  opacity: 1;
}

.peer\\/bottom:hover ~ .peer-hover\\/bottom\\:rounded-b-none {
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
}

.peer\\/left:hover ~ .peer-hover\\/left\\:rounded-l-none {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

.peer\\/right:hover ~ .peer-hover\\/right\\:rounded-r-none {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}

.peer\\/top:hover ~ .peer-hover\\/top\\:rounded-t-none {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}
`,g_=(a,r,o=r)=>{const[l,c]=Ee(a);return Ce(()=>{if(a===l)return;const h=setTimeout(()=>c(a),a?r:o);return()=>clearTimeout(h)},[a,r,o]),l},v_=ur(()=>O("absolute inset-0 flex items-center gap-x-2","translate-y-0","transition-transform duration-300",Ls.value&&"-translate-y-[200%]")),y_=()=>{const a=ue(null),r=ue(null),[o,l]=Ee(null);Co(()=>{const d=te.inspectState.value;d.kind==="focused"&&l(d.fiber)}),Co(()=>{const d=At.value;To(()=>{if(te.inspectState.value.kind!=="focused"||!a.current||!r.current)return;const{totalUpdates:h,currentIndex:p,updates:m,isVisible:g,windowOffset:w}=d,y=Math.max(0,h-1),_=g?`#${w+p} Re-render`:y>0?`×${y}`:"";let S;if(y>0&&p>=0&&p<m.length){const k=m[p]?.fiberInfo?.selfTime;S=k>0?k<.1-Number.EPSILON?"< 0.1ms":`${Number(k.toFixed(1))}ms`:void 0}a.current.dataset.text=_?` • ${_}`:"",r.current.dataset.text=S?` • ${S}`:""})});const c=yn(()=>{if(!o)return null;const{name:d,wrappers:h,wrapperTypes:p}=ko(o),m=h.length?`${h.join("(")}(${d})${")".repeat(h.length)}`:d??"",g=p[0];return f("span",{title:m,className:"flex items-center gap-x-1",children:[d??"Unknown",f("span",{title:g?.title,className:"flex items-center gap-x-1 text-[10px] text-purple-400",children:!!g&&f(De,{children:[f("span",{className:O("rounded py-[1px] px-1","truncate",g.compiler&&"bg-purple-800 text-neutral-400",!g.compiler&&"bg-neutral-700 text-neutral-300",g.type==="memo"&&"bg-[#5f3f9a] text-white"),children:g.type},g.type),g.compiler&&f("span",{className:"text-yellow-300",children:"✨"})]})}),p.length>1&&f("span",{className:"text-[10px] text-neutral-400",children:["×",p.length-1]})]})},[o]);return f("div",{className:v_,children:[c,f("div",{className:"flex items-center gap-x-2 mr-auto text-xs text-[#888]",children:[f("span",{ref:a,className:"with-data-text cursor-pointer !overflow-visible",title:"Click to toggle between rerenders and total renders"}),f("span",{ref:r,className:"with-data-text !overflow-visible"})]})]})},b_=()=>{const a=g_(te.inspectState.value.kind==="focused",150,0),r=()=>{Qe.value={view:"none"},te.inspectState.value={kind:"inspect-off"}};if(Qe.value.view!=="notifications")return f("div",{className:"react-scan-header",children:[f("div",{className:"relative flex-1 h-full",children:f("div",{className:O("react-scan-header-item is-visible",!a&&"!duration-0"),children:f(y_,{})})}),f("button",{type:"button",title:"Close",className:"react-scan-close-button",onClick:r,children:f(nt,{name:"icon-close"})})]})},w_=({className:a,...r})=>f("div",{className:O("react-scan-toggle",a),children:[f("input",{type:"checkbox",...r}),f("div",{})]}),x_=({fps:a})=>{const r=o=>o<30?"#EF4444":o<50?"#F59E0B":"rgb(214,132,245)";return f("div",{className:O("flex items-center gap-x-1 px-2 w-full","h-6","rounded-md","font-mono leading-none","bg-[#141414]","ring-1 ring-white/[0.08]"),children:[f("div",{style:{color:r(a)},className:"text-sm font-semibold tracking-wide transition-colors ease-in-out w-full flex justify-center items-center",children:a}),f("span",{className:"text-white/30 text-[11px] font-medium tracking-wide ml-auto min-w-fit",children:"FPS"})]})},__=()=>{const[a,r]=Ee(null);return Ce(()=>{const o=setInterval(()=>{r(ny())},200);return()=>clearInterval(o)},[]),f("div",{className:O("flex items-center justify-end gap-x-2 px-1 ml-1 w-[72px]","whitespace-nowrap text-sm text-white"),children:a===null?f(De,{children:"️"}):f(x_,{fps:a})})},mn=()=>En?(window.reactScanIdCounter===void 0&&(window.reactScanIdCounter=0),`${++window.reactScanIdCounter}`):"0",vn=a=>a(),gt=class ly extends Array{constructor(r=25){super(),this.capacity=r}push(...r){const o=super.push(...r);for(;this.length>this.capacity;)this.shift();return o}static fromArray(r,o){const l=new ly(o);return l.push(...r),l}},S_=class{constructor(a){this.subscribers=new Set,this.currentValue=a}subscribe(a){return this.subscribers.add(a),a(this.currentValue),()=>{this.subscribers.delete(a)}}setState(a){this.currentValue=a,this.subscribers.forEach(r=>r(a))}getCurrentState(){return this.currentValue}},sy=150,Bv=new S_(new gt(sy)),Cn=50,T_=class{constructor(){this.channels={}}publish(a,r,o=!0){const l=this.channels[r];if(!l){if(!o)return;this.channels[r]={callbacks:new gt(Cn),state:new gt(Cn)},this.channels[r].state.push(a);return}l.state.push(a),l.callbacks.forEach(c=>c(a))}getAvailableChannels(){return gt.fromArray(Object.keys(this.channels),Cn)}subscribe(a,r,o=!1){const l=()=>(o||this.channels[a].state.forEach(d=>{r(d)}),()=>{const d=this.channels[a].callbacks.filter(h=>h!==r);this.channels[a].callbacks=gt.fromArray(d,Cn)}),c=this.channels[a];return c?(c.callbacks.push(r),l()):(this.channels[a]={callbacks:new gt(Cn),state:new gt(Cn)},this.channels[a].callbacks.push(r),l())}updateChannelState(a,r,o=!0){const l=this.channels[a];if(!l){if(!o)return;const c=new gt(Cn),d={callbacks:new gt(Cn),state:c};this.channels[a]=d,d.state=r(c);return}l.state=r(l.state)}getChannelState(a){return this.channels[a].state??new gt(Cn)}},Ns=new T_,cy={skipProviders:!0,skipHocs:!0,skipContainers:!0,skipMinified:!0,skipUtilities:!0,skipBoundaries:!0},lo={providers:[/Provider$/,/^Provider$/,/^Context$/],hocs:[/^with[A-Z]/,/^forward(?:Ref)?$/i,/^Forward(?:Ref)?\(/],containers:[/^(?:App)?Container$/,/^Root$/,/^ReactDev/],utilities:[/^Fragment$/,/^Suspense$/,/^ErrorBoundary$/,/^Portal$/,/^Consumer$/,/^Layout$/,/^Router/,/^Hydration/],boundaries:[/^Boundary$/,/Boundary$/,/^Provider$/,/Provider$/]},C_=(a,r=cy)=>{const o=[];return r.skipProviders&&o.push(...lo.providers),r.skipHocs&&o.push(...lo.hocs),r.skipContainers&&o.push(...lo.containers),r.skipUtilities&&o.push(...lo.utilities),r.skipBoundaries&&o.push(...lo.boundaries),!o.some(l=>l.test(a))},Yv=[/^[a-z]$/,/^[a-z][0-9]$/,/^_+$/,/^[A-Za-z][_$]$/,/^[a-z]{1,2}$/],k_=a=>{for(let d=0;d<Yv.length;d++)if(Yv[d].test(a))return!0;const r=!/[aeiou]/i.test(a),o=(a.match(/\d/g)?.length??0)>a.length/2,l=/^[a-z]+$/.test(a),c=/[$_]{2,}/.test(a);return Number(r)+Number(o)+Number(l)+Number(c)>=2},E_=(a,r=cy)=>{if(!a)return[];if(!bt(a.type))return[];const l=new Array;let c=a;for(;c.return;){const h=z_(c.type);h&&!k_(h)&&C_(h,r)&&h.toLowerCase()!==h&&l.push(h),c=c.return}const d=new Array(l.length);for(let h=0;h<l.length;h++)d[h]=l[l.length-h-1];return d},z_=a=>{const r=bt(a);return r?r.replace(/^(?:Memo|Forward(?:Ref)?|With.*?)\((?<inner>.*?)\)$/,"$<inner>"):""},N_=(a,r=()=>!0)=>{let o=a;for(;o;){const l=bt(o.type);if(l&&r(l))return l;o=o.return}return null},Xv,af="never-hidden",A_=()=>{Xv?.();const a=()=>{document.hidden&&(af=Date.now())};document.addEventListener("visibilitychange",a),Xv=()=>{document.removeEventListener("visibilitychange",a)}},M_=a=>["pointerup","click"].includes(a)?"pointer":(a.includes("key"),["keydown","keyup"].includes(a)?"keyboard":null),yd=null,O_=a=>{A_();const r=new Map,o=new Map,l=d=>{if(!d.interactionId)return;if(d.interactionId&&d.target&&!o.has(d.interactionId)&&o.set(d.interactionId,d.target),d.target){let p=d.target;for(;p;){if(p.id==="react-scan-toolbar-root"||p.id==="react-scan-root")return;p=p.parentElement}}const h=r.get(d.interactionId);if(h)d.duration>h.latency?(h.entries=[d],h.latency=d.duration):d.duration===h.latency&&d.startTime===h.entries[0].startTime&&h.entries.push(d);else{const p=M_(d.name);if(!p)return;const m={id:d.interactionId,latency:d.duration,entries:[d],target:d.target,type:p,startTime:d.startTime,endTime:Date.now(),processingStart:d.processingStart,processingEnd:d.processingEnd,duration:d.duration,inputDelay:d.processingStart-d.startTime,processingDuration:d.processingEnd-d.processingStart,presentationDelay:d.duration-(d.processingEnd-d.startTime),timestamp:Date.now(),timeSinceTabInactive:af==="never-hidden"?"never-hidden":Date.now()-af,visibilityState:document.visibilityState,timeOrigin:performance.timeOrigin,referrer:document.referrer};r.set(m.id,m),yd||(yd=requestAnimationFrame(()=>{requestAnimationFrame(()=>{a(r.get(m.id)),yd=null})}))}},c=new PerformanceObserver(d=>{const h=d.getEntries();for(let p=0,m=h.length;p<m;p++){const g=h[p];l(g)}});try{c.observe({type:"event",buffered:!0,durationThreshold:16}),c.observe({type:"first-input",buffered:!0})}catch{}return()=>c.disconnect()},D_=()=>O_(a=>{Ns.publish({kind:"entry-received",entry:a},"recording")}),ps=25,Zn=new gt(ps),R_=(a,r)=>{let o=null;for(const l of r){if(l.type!==a.type)continue;if(o===null){o=l;continue}const c=(d,h)=>Math.abs(d.startDateTime)-(h.startTime+h.timeOrigin);c(l,a)<c(o,a)&&(o=l)}return o},U_=a=>Ns.subscribe("recording",o=>{const l=o.kind==="auto-complete-race"?Zn.find(d=>d.interactionUUID===o.interactionUUID):R_(o.entry,Zn);if(!l)return;const c=l.completeInteraction(o);a(c)}),H_=({onMicroTask:a,onRAF:r,onTimeout:o,abort:l})=>{queueMicrotask(()=>{l?.()!==!0&&a()&&requestAnimationFrame(()=>{l?.()!==!0&&r()&&setTimeout(()=>{l?.()!==!0&&o()},0)})})},j_=a=>{const r=K0(a);if(!r)return;let o=r?bt(r?.type):"N/A";return o||(o=N_(r,c=>c.length>2)??"N/A"),o?{componentPath:E_(r),childrenTree:{},componentName:o,elementFiber:r}:void 0},qv=(a,r)=>{let o=null;const l=m=>{switch(a){case"pointer":return m.phase==="start"?"pointerup":m.target instanceof HTMLInputElement||m.target instanceof HTMLSelectElement?"change":"click";case"keyboard":return m.phase==="start"?"keydown":"change"}},c={current:{kind:"uninitialized-stage",interactionUUID:mn(),stageStart:Date.now(),interactionType:a}},d=m=>{if(m.composedPath().some(z=>z instanceof Element&&z.id==="react-scan-toolbar-root")||(Date.now()-c.current.stageStart>2e3&&(c.current={kind:"uninitialized-stage",interactionUUID:mn(),stageStart:Date.now(),interactionType:a}),c.current.kind!=="uninitialized-stage"))return;const w=performance.now();r?.onStart?.(c.current.interactionUUID);const y=j_(m.target);if(!y){r?.onError?.(c.current.interactionUUID);return}const _={},S=uy(_);c.current={...c.current,interactionType:a,blockingTimeStart:Date.now(),childrenTree:y.childrenTree,componentName:y.componentName,componentPath:y.componentPath,fiberRenders:_,kind:"interaction-start",interactionStartDetail:w,stopListeningForRenders:S};const k=l({phase:"end",target:m.target});document.addEventListener(k,h,{once:!0}),requestAnimationFrame(()=>{document.removeEventListener(k,h)})};document.addEventListener(l({phase:"start"}),d,{capture:!0});const h=(m,g,w)=>{if(c.current.kind!=="interaction-start"&&g===o){if(a==="pointer"&&m.target instanceof HTMLSelectElement){c.current={kind:"uninitialized-stage",interactionUUID:mn(),stageStart:Date.now(),interactionType:a};return}r?.onError?.(c.current.interactionUUID),c.current={kind:"uninitialized-stage",interactionUUID:mn(),stageStart:Date.now(),interactionType:a};return}o=g,H_({abort:w,onMicroTask:()=>c.current.kind==="uninitialized-stage"?!1:(c.current={...c.current,kind:"js-end-stage",jsEndDetail:performance.now()},!0),onRAF:()=>c.current.kind!=="js-end-stage"&&c.current.kind!=="raf-stage"?(r?.onError?.(c.current.interactionUUID),c.current={kind:"uninitialized-stage",interactionUUID:mn(),stageStart:Date.now(),interactionType:a},!1):(c.current={...c.current,kind:"raf-stage",rafStart:performance.now()},!0),onTimeout:()=>{if(c.current.kind!=="raf-stage"){r?.onError?.(c.current.interactionUUID),c.current={kind:"uninitialized-stage",interactionUUID:mn(),stageStart:Date.now(),interactionType:a};return}const y=Date.now(),_=Object.freeze({...c.current,kind:"timeout-stage",blockingTimeEnd:y,commitEnd:performance.now()});c.current={kind:"uninitialized-stage",interactionUUID:mn(),stageStart:y,interactionType:a};let S=!1;const k=R=>{S=!0;const C=R.kind==="auto-complete-race"?R.detailedTiming.commitEnd-R.detailedTiming.interactionStartDetail:R.entry.latency,M={detailedTiming:_,latency:C,completedAt:Date.now(),flushNeeded:!0};r?.onComplete?.(_.interactionUUID,M,R);const q=Zn.filter($=>$.interactionUUID!==_.interactionUUID);return Zn=gt.fromArray(q,ps),M},z={completeInteraction:k,endDateTime:Date.now(),startDateTime:_.blockingTimeStart,type:a,interactionUUID:_.interactionUUID};if(Zn.push(z),L_())setTimeout(()=>{if(S)return;k({kind:"auto-complete-race",detailedTiming:_,interactionUUID:_.interactionUUID});const R=Zn.filter(C=>C.interactionUUID!==_.interactionUUID);Zn=gt.fromArray(R,ps)},1e3);else{const R=Zn.filter(C=>C.interactionUUID!==_.interactionUUID);Zn=gt.fromArray(R,ps),k({kind:"auto-complete-race",detailedTiming:_,interactionUUID:_.interactionUUID})}}})},p=m=>{const g=mn();h(m,g,()=>g!==o)};return a==="keyboard"&&document.addEventListener("keypress",p),()=>{document.removeEventListener(l({phase:"start"}),d,{capture:!0}),document.removeEventListener("keypress",p)}},Vv=a=>l0(a,r=>{if(wo(r))return!0})?.stateNode,L_=()=>"PerformanceEventTiming"in globalThis,uy=a=>{const r=o=>{const l=bt(o.type);if(!l)return;const c=a[l];if(!c){const w=new Set,y=o.return&&ai(o.return),_=y&&bt(y[0]);_&&w.add(_);const{selfTime:S,totalTime:k}=tr(o),z=Ev(o),R={current:[],changes:new Set,changesCounts:new Map},C={fiberProps:z.fiberProps||R,fiberState:z.fiberState||R,fiberContext:z.fiberContext||R};a[l]={renderCount:1,hasMemoCache:xo(o),wasFiberRenderMount:Fv(o),parents:w,selfTime:S,totalTime:k,nodeInfo:[{element:Vv(o),name:bt(o.type)??"Unknown",selfTime:tr(o).selfTime}],changes:C};return}if(ai(o)?.[0]?.type){const w=o.return&&ai(o.return),y=w&&bt(w[0]);y&&c.parents.add(y)}const{selfTime:h,totalTime:p}=tr(o),m=Ev(o);if(!m)return;const g={current:[],changes:new Set,changesCounts:new Map};c.wasFiberRenderMount=c.wasFiberRenderMount||Fv(o),c.hasMemoCache=c.hasMemoCache||xo(o),c.changes={fiberProps:bd(c.changes?.fiberProps||g,m.fiberProps||g),fiberState:bd(c.changes?.fiberState||g,m.fiberState||g),fiberContext:bd(c.changes?.fiberContext||g,m.fiberContext||g)},c.renderCount+=1,c.selfTime+=h,c.totalTime+=p,c.nodeInfo.push({element:Vv(o),name:bt(o.type)??"Unknown",selfTime:tr(o).selfTime})};return te.interactionListeningForRenders=r,()=>{te.interactionListeningForRenders===r&&(te.interactionListeningForRenders=null)}},bd=(a,r)=>{const o={current:[...a.current],changes:new Set,changesCounts:new Map};for(const l of r.current)o.current.some(c=>c.name===l.name)||o.current.push(l);for(const l of r.changes)if(typeof l=="string"||typeof l=="number"){o.changes.add(l);const c=a.changesCounts.get(l)||0,d=r.changesCounts.get(l)||0;o.changesCounts.set(l,c+d)}return o},Fv=a=>{if(!a.alternate)return!0;const r=a.alternate,o=r&&r.memoizedState!=null&&r.memoizedState.element!=null&&r.memoizedState.isDehydrated!==!0,l=a.memoizedState!=null&&a.memoizedState.element!=null&&a.memoizedState.isDehydrated!==!0;return!o&&l},B_=a=>{let r;const o=new Set,l=(g,w)=>{const y=typeof g=="function"?g(r):g;if(!Object.is(y,r)){const _=r;r=w??(typeof y!="object"||y===null)?y:Object.assign({},r,y),o.forEach(S=>S(r,_))}},c=()=>r,p={setState:l,getState:c,getInitialState:()=>m,subscribe:(g,w)=>{let y,_;w?(y=g,_=w):_=g;let S=y?y(r):void 0;const k=(z,R)=>{if(y){const C=y(z),M=y(R);Object.is(S,C)||(S=C,_(C,M))}else _(z,R)};return o.add(k),()=>o.delete(k)}},m=r=a(l,c,p);return p},dy=a=>B_,rs=null;dy()(a=>({state:{events:[]},actions:{addEvent:r=>{a(o=>({state:{events:[...o.state.events,r]}}))},clear:()=>{a({state:{events:[]}})}}}));var wd=200,Eo=dy()((a,r)=>{const o=new Set;return{state:{events:new gt(wd)},actions:{addEvent:l=>{o.forEach(m=>m(l));const c=[...r().state.events,l],d=(m,g)=>{const w=c.find(y=>{if(y.kind!=="long-render"&&y.id!==m.id&&(m.data.startAt<=y.data.startAt&&m.data.endAt<=y.data.endAt&&m.data.endAt>=y.data.startAt||y.data.startAt<=m.data.startAt&&y.data.endAt>=m.data.startAt||m.data.startAt<=y.data.startAt&&m.data.endAt>=y.data.endAt))return!0});w&&g(w)},h=new Set;c.forEach(m=>{m.kind!=="interaction"&&d(m,()=>{h.add(m.id)})});const p=c.filter(m=>!h.has(m.id));a(()=>({state:{events:gt.fromArray(p,wd)}}))},addListener:l=>(o.add(l),()=>{o.delete(l)}),clear:()=>{a({state:{events:new gt(wd)}})}}}}),Y_=()=>X1(Eo.subscribe,Eo.getState),ms=null,gs=null,xd=null,rf,X_=()=>{const a=r=>{rf=r.composedPath().map(o=>o.id).filter(Boolean).includes("react-scan-toolbar")};return document.addEventListener("mouseover",a),xd=a,()=>{xd&&document.removeEventListener("mouseover",xd)}},q_=()=>{const a=()=>{ms=performance.now(),gs=performance.timeOrigin};return document.addEventListener("visibilitychange",a),()=>{document.removeEventListener("visibilitychange",a)}},fy=150,_d=[];function V_(){let a,r;function o(){let c=null;rs=null,rs={},c=uy(rs);const d=performance.timeOrigin,h=performance.now();return a=requestAnimationFrame(()=>{r=setTimeout(()=>{const p=performance.now(),m=p-h,g=performance.timeOrigin;_d.push(p+g);const w=_d.filter(k=>p+g-k<=1e3),y=w.length;_d=w;const _=ms!==null&&gs!==null?p+g-(gs+ms)<100:null,S=rf!==null&&rf;if(m>fy&&!_&&document.visibilityState==="visible"&&!S){const k=g+p,z=h+d;Eo.getState().actions.addEvent({kind:"long-render",id:mn(),data:{endAt:k,startAt:z,meta:{fiberRenders:rs,latency:m,fps:y}}})}ms=null,gs=null,c?.(),o()},0)}),c}const l=o();return()=>{l(),cancelAnimationFrame(a),clearTimeout(r)}}var F_=()=>{const a=D_(),r=X_(),o=q_(),l=V_(),c=async(m,g,w)=>{Eo.getState().actions.addEvent({kind:"interaction",id:mn(),data:{startAt:g.detailedTiming.blockingTimeStart,endAt:performance.now()+performance.timeOrigin,meta:{...g,kind:w.kind}}});const y=Ns.getChannelState("recording");g.detailedTiming.stopListeningForRenders(),y.length&&Ns.updateChannelState("recording",()=>new gt(Cn))},d=qv("pointer",{onComplete:c}),h=qv("keyboard",{onComplete:c}),p=U_(m=>{Bv.setState(gt.fromArray(Bv.getCurrentState().concat(m),sy))});return()=>{r(),o(),l(),a(),d(),p(),h()}},zo=a=>{const r=a.filter(o=>o.length>2);return r.length===0?a.at(-1)??"Unknown":r.at(-1)},wt=a=>{switch(a.kind){case"interaction":{const{renderTime:r,otherJSTime:o,framePreparation:l,frameConstruction:c,frameDraw:d}=a;return r+o+l+c+(d??0)}case"dropped-frames":return a.otherTime+a.renderTime}},G_=a=>a.wasFiberRenderMount||a.hasMemoCache?!1:a.changes.context.length===0&&a.changes.props.length===0&&a.changes.state.length===0,Ho=a=>{const r=wt(a.timing);switch(a.kind){case"interaction":return r<200?"low":r<500?"needs-improvement":"high";case"dropped-frames":return r<50?"low":r<fy?"needs-improvement":"high"}},Jt=()=>bf(hy),hy=C0(null),py=({size:a=24,className:r})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:O(["lucide lucide-chevron-right",r]),children:f("path",{d:"m9 18 6-6-6-6"})}),$_=({className:a="",size:r=24,events:o=[]})=>{const l=o.includes(!0),c=o.filter(p=>p).length,d=c>99?">99":c,h=l?Math.max(r*.6,14):Math.max(r*.4,6);return f("div",{className:"relative",children:[f("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:`lucide lucide-bell ${a}`,children:[f("path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}),f("path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"})]}),o.length>0&&c>0&&Re.options.value.showNotificationCount&&f("div",{className:O(["absolute",l?"-top-2.5 -right-2.5":"-top-1 -right-1","rounded-full","flex items-center justify-center","text-[8px] font-medium text-white","aspect-square",l?"bg-red-500/90":"bg-purple-500/90"]),style:{width:`${h}px`,height:`${h}px`,padding:l?"0.5px":"0"},children:l&&d})]})},As=({className:a="",size:r=24})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:a,children:[f("path",{d:"M18 6 6 18"}),f("path",{d:"m6 6 12 12"})]}),Q_=({className:a="",size:r=24})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:a,children:[f("path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}),f("path",{d:"M16 9a5 5 0 0 1 0 6"}),f("path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"})]}),Z_=({className:a="",size:r=24})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:a,children:[f("path",{d:"M16 9a5 5 0 0 1 .95 2.293"}),f("path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96"}),f("path",{d:"m2 2 20 20"}),f("path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"}),f("path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686"})]}),I_=({size:a=24,className:r})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:O(["lucide lucide-arrow-left",r]),children:[f("path",{d:"m12 19-7-7 7-7"}),f("path",{d:"M19 12H5"})]}),J_=({className:a="",size:r=24})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:a,children:[f("path",{d:"M14 4.1 12 6"}),f("path",{d:"m5.1 8-2.9-.8"}),f("path",{d:"m6 12-1.9 2"}),f("path",{d:"M7.2 2.2 8 5.1"}),f("path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"})]}),K_=({className:a="",size:r=24})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:a,children:[f("path",{d:"M10 8h.01"}),f("path",{d:"M12 12h.01"}),f("path",{d:"M14 8h.01"}),f("path",{d:"M16 12h.01"}),f("path",{d:"M18 8h.01"}),f("path",{d:"M6 8h.01"}),f("path",{d:"M7 16h10"}),f("path",{d:"M8 12h.01"}),f("rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"})]}),W_=({className:a="",size:r=24})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:a,style:{transform:"rotate(180deg)"},children:[f("circle",{cx:"12",cy:"12",r:"10"}),f("path",{d:"m4.9 4.9 14.2 14.2"})]}),P_=({className:a="",size:r=24})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:a,children:[f("polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7"}),f("polyline",{points:"16 17 22 17 22 11"})]}),my=({children:a,triggerContent:r,wrapperProps:o})=>{const[l,c]=Ee("closed"),[d,h]=Ee(null),[p,m]=Ee({width:window.innerWidth,height:window.innerHeight}),g=ue(null),w=ue(null),y=bf(Lf),_=ue(!1);Ce(()=>{const C=()=>{m({width:window.innerWidth,height:window.innerHeight}),S()};return window.addEventListener("resize",C),()=>window.removeEventListener("resize",C)},[]);const S=()=>{if(g.current&&y){const C=g.current.getBoundingClientRect(),M=y.getBoundingClientRect(),q=C.left+C.width/2,$=C.top,Z=new DOMRect(q-M.left,$-M.top,C.width,C.height);h(Z)}};Ce(()=>{S()},[g.current]),Ce(()=>{if(l==="opening"){const C=setTimeout(()=>c("open"),120);return()=>clearTimeout(C)}else if(l==="closing"){const C=setTimeout(()=>c("closed"),120);return()=>clearTimeout(C)}},[l]),Ce(()=>{const C=setInterval(()=>{!_.current&&l!=="closed"&&c("closing")},1e3);return()=>clearInterval(C)},[l]);const k=()=>{_.current=!0,S(),c("opening")},z=()=>{_.current=!1,S(),c("closing")},R=()=>{if(!d||!y)return{top:0,left:0};const C=y.getBoundingClientRect(),M=175,q=w.current?.offsetHeight||40,$=5,Z=d.x+C.left,W=d.y+C.top;let K=Z,fe=W-4;return K-M/2<$?K=$+M/2:K+M/2>p.width-$&&(K=p.width-$-M/2),fe-q<$&&(fe=W+d.height+4),{top:fe-C.top,left:K-C.left}};return f(De,{children:[y&&d&&l!=="closed"&&$1(f("div",{ref:w,className:O(["absolute z-100 bg-white text-black rounded-lg px-3 py-2 shadow-lg","transform transition-all duration-120 ease-[cubic-bezier(0.23,1,0.32,1)]",'after:content-[""] after:absolute after:top-[100%]',"after:left-1/2 after:-translate-x-1/2","after:w-[10px] after:h-[6px]","after:border-l-[5px] after:border-l-transparent","after:border-r-[5px] after:border-r-transparent","after:border-t-[6px] after:border-t-white","pointer-events-none",l==="opening"||l==="closing"?"opacity-0 translate-y-1":"opacity-100 translate-y-0"]),style:{top:R().top+"px",left:R().left+"px",transform:"translate(-50%, -100%)",minWidth:"175px"},children:a}),y),f("div",{ref:g,onMouseEnter:k,onMouseLeave:z,...o,children:r})]})},eS=({selectedEvent:a})=>{const{notificationState:r,setNotificationState:o,setRoute:l}=Jt();return f("div",{className:O(["flex w-full justify-between items-center px-3 py-2 text-xs"]),children:[f("div",{className:O(["bg-[#18181B] flex items-center gap-x-1 p-1 rounded-sm"]),children:[f("button",{onClick:()=>{l({route:"render-visualization",routeMessage:null})},className:O(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",r.route==="render-visualization"||r.route==="render-explanation"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Ranked"}),f("button",{onClick:()=>{l({route:"other-visualization",routeMessage:null})},className:O(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",r.route==="other-visualization"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Overview"}),f("button",{onClick:()=>{l({route:"optimize",routeMessage:null})},className:O(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",r.route==="optimize"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:f("span",{children:"Prompts"})})]}),f(my,{triggerContent:f("button",{onClick:()=>{o(c=>{c.audioNotificationsOptions.enabled&&c.audioNotificationsOptions.audioContext.state!=="closed"&&c.audioNotificationsOptions.audioContext.close();const d=c.audioNotificationsOptions.enabled;localStorage.setItem("react-scan-notifications-audio",String(!d));const h=new AudioContext;return c.audioNotificationsOptions.enabled||Cf(h),d&&h.close(),{...c,audioNotificationsOptions:d?{audioContext:null,enabled:!1}:{audioContext:h,enabled:!0}}})},className:"ml-auto",children:f("div",{className:O(["flex gap-x-2 justify-center items-center text-[#6E6E77]"]),children:[f("span",{children:"Alerts"}),r.audioNotificationsOptions.enabled?f(Q_,{size:16,className:"text-[#6E6E77]"}):f(Z_,{size:16,className:"text-[#6E6E77]"})]})}),children:f(De,{children:"Play a chime when a slowdown is recorded"})})]})},Jr=a=>{let r="";return a.toSorted((l,c)=>c.totalTime-l.totalTime).slice(0,30).filter(l=>l.totalTime>5).forEach(l=>{let c="";c+="Component Name:",c+=l.name,c+=`
`,c+=`Rendered: ${l.count} times
`,c+=`Sum of self times for ${l.name} is ${l.totalTime.toFixed(0)}ms
`,l.changes.props.length>0&&(c+=`Changed props for all ${l.name} instances ("name:count" pairs)
`,l.changes.props.forEach(d=>{c+=`${d.name}:${d.count}x
`})),l.changes.state.length>0&&(c+=`Changed state for all ${l.name} instances ("hook index:count" pairs)
`,l.changes.state.forEach(d=>{c+=`${d.index}:${d.count}x
`})),l.changes.context.length>0&&(c+=`Changed context for all ${l.name} instances ("context display name (if exists):count" pairs)
`,l.changes.context.forEach(d=>{c+=`${d.name}:${d.count}x
`})),r+=c,r+=`
`}),r},tS=({renderTime:a,eHandlerTimeExcludingRenders:r,toRafTime:o,commitTime:l,framePresentTime:c,formattedReactData:d})=>`I will provide you with a set of high level, and low level performance data about an interaction in a React App:
### High level
- react component render time: ${a.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${r.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${o.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${l.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${c===null?"":`- how long it took from dom commit for the frame to be presented: ${c.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${d}`,nS=({interactionType:a,name:r,componentPath:o,time:l,renderTime:c,eHandlerTimeExcludingRenders:d,toRafTime:h,commitTime:p,framePresentTime:m,formattedReactData:g})=>`You will attempt to implement a performance improvement to a user interaction in a React app. You will be provided with data about the interaction, and the slow down.

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.


Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)

The interaction was a ${a} on the component named ${r}. This component has the following ancestors ${o}. This is the path from the component, to the root. This should be enough information to figure out where this component is in the user's code base

This path is the component that was clicked, so it should tell you roughly where component had an event handler that triggered a state change.

Please note that the leaf node of this path might not be user code (if they use a UI library), and they may contain many wrapper components that just pass through children that aren't relevant to the actual click. So make you sure analyze the path and understand what the user code is doing

We have a set of high level, and low level data about the performance issue.

The click took ${l.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${c.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${d.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${h.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${p.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${m===null?"":`- how long it took from dom commit for the frame to be presented: ${m.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${g}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

`,aS=({renderTime:a,otherTime:r,formattedReactData:o})=>`You will attempt to implement a performance improvement to a large slowdown in a react app

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.

Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)


We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${a.toFixed(0)}ms
- other time: ${r}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${o}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

If renders don't seem to be the problem, see if there are any expensive CSS properties being added/mutated, or any expensive DOM Element mutations/new elements being created that could cause this slowdown. 
`,rS=({renderTime:a,otherTime:r,formattedReactData:o})=>`Your goal will be to help me find the source of a performance problem in a React App. I collected a large dataset about this specific performance problem.

We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${a.toFixed(0)}ms
- other time (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${r}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${o}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one, and this can add significant overhead when thousands of effects ran.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`,iS=({renderTime:a,otherTime:r,formattedReactData:o})=>`I will provide you with a set of high level, and low level performance data about a large frame drop in a React App:
### High level
- react component render time: ${a.toFixed(0)}ms
- how long it took to run everything else (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${r}ms

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${o}`,oS=({interactionType:a,name:r,time:o,renderTime:l,eHandlerTimeExcludingRenders:c,toRafTime:d,commitTime:h,framePresentTime:p,formattedReactData:m})=>`Your goal will be to help me find the source of a performance problem. I collected a large dataset about this specific performance problem.

There was a ${a} on a component named ${r}. This means, roughly, the component that handled the ${a} event was named ${r}.

We have a set of high level, and low level data about the performance issue.

The click took ${o.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${l.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${c.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${d.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${h.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${p===null?"":`- how long it took from dom commit for the frame to be presented: ${p.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${m}


You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`,of=(a,r)=>vn(()=>{switch(a){case"data":switch(r.kind){case"dropped-frames":return iS({formattedReactData:Jr(r.groupedFiberRenders),renderTime:r.groupedFiberRenders.reduce((o,l)=>o+l.totalTime,0),otherTime:r.timing.otherTime});case"interaction":return tS({commitTime:r.timing.frameConstruction,eHandlerTimeExcludingRenders:r.timing.otherJSTime,formattedReactData:Jr(r.groupedFiberRenders),framePresentTime:r.timing.frameDraw,renderTime:r.groupedFiberRenders.reduce((o,l)=>o+l.totalTime,0),toRafTime:r.timing.framePreparation})}case"explanation":switch(r.kind){case"dropped-frames":return rS({formattedReactData:Jr(r.groupedFiberRenders),renderTime:r.groupedFiberRenders.reduce((o,l)=>o+l.totalTime,0),otherTime:r.timing.otherTime});case"interaction":return oS({commitTime:r.timing.frameConstruction,eHandlerTimeExcludingRenders:r.timing.otherJSTime,formattedReactData:Jr(r.groupedFiberRenders),framePresentTime:r.timing.frameDraw,interactionType:r.type,name:zo(r.componentPath),renderTime:r.groupedFiberRenders.reduce((o,l)=>o+l.totalTime,0),time:wt(r.timing),toRafTime:r.timing.framePreparation})}case"fix":switch(r.kind){case"dropped-frames":return aS({formattedReactData:Jr(r.groupedFiberRenders),renderTime:r.groupedFiberRenders.reduce((o,l)=>o+l.totalTime,0),otherTime:r.timing.otherTime});case"interaction":return nS({commitTime:r.timing.frameConstruction,componentPath:r.componentPath.join(">"),eHandlerTimeExcludingRenders:r.timing.otherJSTime,formattedReactData:Jr(r.groupedFiberRenders),framePresentTime:r.timing.frameDraw,interactionType:r.type,name:zo(r.componentPath),renderTime:r.groupedFiberRenders.reduce((o,l)=>o+l.totalTime,0),time:wt(r.timing),toRafTime:r.timing.framePreparation})}}}),lS=({selectedEvent:a})=>{const[r,o]=Ee("fix"),[l,c]=Ee(!1);return f("div",{className:O(["w-full h-full"]),children:[f("div",{className:O(["border border-[#27272A] rounded-sm h-4/5 text-xs overflow-hidden"]),children:[f("div",{className:O(["bg-[#18181B] p-1 rounded-t-sm"]),children:f("div",{className:O(["flex items-center gap-x-1"]),children:[f("button",{onClick:()=>o("fix"),className:O(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",r==="fix"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Fix"}),f("button",{onClick:()=>o("explanation"),className:O(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",r==="explanation"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Explanation"}),f("button",{onClick:()=>o("data"),className:O(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",r==="data"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Data"})]})}),f("div",{className:O(["overflow-y-auto h-full"]),children:f("pre",{className:O(["p-2 h-full","whitespace-pre-wrap break-words","text-gray-300 font-mono "]),children:of(r,a)})})]}),f("button",{onClick:async()=>{const d=of(r,a);await navigator.clipboard.writeText(d),c(!0),setTimeout(()=>c(!1),1e3)},className:O(["mt-4 px-4 py-2 bg-[#18181B] text-[#6E6E77] rounded-sm","hover:text-white transition-colors duration-200","flex items-center justify-center gap-x-2 text-xs"]),children:[f("span",{children:l?"Copied!":"Copy Prompt"}),f("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:O(["transition-transform duration-200",l&&"scale-110"]),children:l?f("path",{d:"M20 6L9 17l-5-5"}):f(De,{children:[f("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),f("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})]})},sS=(a,r)=>{switch(a.kind){case"dropped-frames":return[...r?[{name:"Total Processing Time",time:wt(a.timing),color:"bg-red-500",kind:"total-processing-time"}]:[{name:"Renders",time:a.timing.renderTime,color:"bg-purple-500",kind:"render"},{name:"JavaScript, DOM updates, Draw Frame",time:a.timing.otherTime,color:"bg-[#4b4b4b]",kind:"other-frame-drop"}]];case"interaction":return[...r?[]:[{name:"Renders",time:a.timing.renderTime,color:"bg-purple-500",kind:"render"}],{name:r?"React Renders, Hooks, Other JavaScript":"JavaScript/React Hooks ",time:a.timing.otherJSTime,color:"bg-[#EFD81A]",kind:"other-javascript"},{name:"Update DOM and Draw New Frame",time:wt(a.timing)-a.timing.renderTime-a.timing.otherJSTime,color:"bg-[#1D3A66]",kind:"other-not-javascript"}]}},cS=({selectedEvent:a})=>{const[r]=Ee(Bs()??!1),{notificationState:o}=Jt(),[l,c]=Ee(o.routeMessage?.name?[o.routeMessage.name]:[]),d=sS(a,r),h=bf(Lf);Ce(()=>{if(o.routeMessage?.name){const m=h?.querySelector("#overview-scroll-container"),g=h?.querySelector(`#react-scan-overview-bar-${o.routeMessage.name}`);if(m&&g){const w=g.getBoundingClientRect().top,y=m.getBoundingClientRect().top,_=w-y;m.scrollTop=m.scrollTop+_}}},[o.route]),Ce(()=>{o.route==="other-visualization"&&c(m=>o.routeMessage?.name?[o.routeMessage.name]:m)},[o.route]);const p=d.reduce((m,g)=>m+g.time,0);return f("div",{className:"rounded-sm border border-zinc-800 text-xs",children:[f("div",{className:"p-2 border-b border-zinc-800 bg-zinc-900/50",children:f("div",{className:"flex items-center justify-between",children:[f("h3",{className:"text-xs font-medium",children:"What was time spent on?"}),f("span",{className:"text-xs text-zinc-400",children:["Total: ",p.toFixed(0),"ms"]})]})}),f("div",{className:"divide-y divide-zinc-800",children:d.map(m=>{const g=l.includes(m.kind);return f("div",{id:`react-scan-overview-bar-${m.kind}`,children:[f("button",{onClick:()=>c(w=>w.includes(m.kind)?w.filter(y=>y!==m.kind):[...w,m.kind]),className:"w-full px-3 py-2 flex items-center gap-4 hover:bg-zinc-800/50 transition-colors",children:f("div",{className:"flex-1",children:[f("div",{className:"flex items-center justify-between mb-2",children:[f("div",{className:"flex items-center gap-0.5",children:[f("svg",{className:`h-4 w-4 text-zinc-400 transition-transform ${g?"rotate-90":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),f("span",{className:"font-medium flex items-center text-left",children:m.name})]}),f("span",{className:" text-zinc-400",children:[m.time.toFixed(0),"ms"]})]}),f("div",{className:"h-1 bg-zinc-800 rounded-full overflow-hidden",children:f("div",{className:`h-full ${m.color} transition-all`,style:{width:`${m.time/p*100}%`}})})]})}),g&&f("div",{className:"bg-zinc-900/30 border-t border-zinc-800 px-2.5 py-3",children:f("p",{className:" text-zinc-400 mb-4 text-xs",children:vn(()=>{switch(a.kind){case"interaction":switch(m.kind){case"render":return f(Kr,{input:dS(a)});case"other-javascript":return f(Kr,{input:fS(a)});case"other-not-javascript":return f(Kr,{input:uS(a)})}case"dropped-frames":switch(m.kind){case"total-processing-time":return f(Kr,{input:{kind:"total-processing",data:{time:wt(a.timing)}}});case"render":return f(De,{children:f(Kr,{input:{kind:"render",data:{topByTime:a.groupedFiberRenders.toSorted((w,y)=>y.totalTime-w.totalTime).slice(0,3).map(w=>({name:w.name,percentage:w.totalTime/wt(a.timing)}))}}})});case"other-frame-drop":return f(Kr,{input:{kind:"other"}})}}})})})]},m.kind)})})]})},uS=a=>{const r=a.groupedFiberRenders.reduce((d,h)=>d+h.count,0),o=a.timing.renderTime,l=wt(a.timing),c=o/l*100;return r>100?{kind:"high-render-count-update-dom-draw-frame",data:{count:r,percentageOfTotal:c,copyButton:f(Gv,{})}}:{kind:"update-dom-draw-frame",data:{copyButton:f(Gv,{})}}},Gv=()=>{const[a,r]=Ee(!1),{notificationState:o}=Jt();return f("button",{onClick:async()=>{o.selectedEvent&&(await navigator.clipboard.writeText(of("explanation",o.selectedEvent)),r(!0),setTimeout(()=>r(!1),1e3))},className:"bg-zinc-800 flex hover:bg-zinc-700 text-zinc-200 px-2 py-1 rounded gap-x-3",children:[f("span",{children:a?"Copied!":"Copy Prompt"}),f("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:O(["transition-transform duration-200",a&&"scale-110"]),children:a?f("path",{d:"M20 6L9 17l-5-5"}):f(De,{children:[f("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),f("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})},dS=a=>a.timing.renderTime/wt(a.timing)>.3?{kind:"render",data:{topByTime:a.groupedFiberRenders.toSorted((r,o)=>o.totalTime-r.totalTime).slice(0,3).map(r=>({percentage:r.totalTime/wt(a.timing),name:r.name}))}}:{kind:"other"},fS=a=>{const r=a.groupedFiberRenders.reduce((o,l)=>o+l.count,0);return a.timing.otherJSTime/wt(a.timing)<.2?{kind:"js-explanation-base"}:a.groupedFiberRenders.find(o=>o.count>200)||a.groupedFiberRenders.reduce((o,l)=>o+l.count,0)>500?{kind:"high-render-count-high-js",data:{renderCount:r,topByCount:a.groupedFiberRenders.filter(o=>o.count>100).toSorted((o,l)=>l.count-o.count).slice(0,3)}}:a.timing.otherJSTime/wt(a.timing)>.3?a.timing.renderTime>.2?{kind:"js-explanation-base"}:{kind:"low-render-count-high-js",data:{renderCount:r}}:{kind:"js-explanation-base"}},Kr=({input:a})=>{switch(a.kind){case"total-processing":return f("div",{className:O(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[f("p",{children:["This is the time it took to draw the entire frame that was presented to the user. To be at 60FPS, this number needs to be ","<=16ms"]}),f("p",{children:'To debug the issue, check the "Ranked" tab to see if there are significant component renders'}),f("p",{children:"On a production React build, React Scan can't access the time it took for component to render. To get that information, run React Scan on a development build"}),f("p",{children:["To understand precisely what caused the slowdown while in production, use the ",f("strong",{children:"Chrome profiler"})," and analyze the function call times."]}),f("p",{})]});case"render":return f("div",{className:O(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[f("p",{children:"This is the time it took React to run components, and internal logic to handle the output of your component."}),f("div",{className:O(["flex flex-col"]),children:[f("p",{children:"The slowest components for this time period were:"}),a.data.topByTime.map(r=>f("div",{children:[f("strong",{children:r.name}),":"," ",(r.percentage*100).toFixed(0),"% of total"]},r.name))]}),f("p",{children:'To view the render times of all your components, and what caused them to render, go to the "Ranked" tab'}),f("p",{children:'The "Ranked" tab shows the render times of every component.'}),f("p",{children:"The render times of the same components are grouped together into one bar."}),f("p",{children:"Clicking the component will show you what props, state, or context caused the component to re-render."})]});case"js-explanation-base":return f("div",{className:O(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[f("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),f("p",{children:["The most common culprit for high JS time is expensive hooks, like expensive callbacks inside of ",f("code",{children:"useEffect"}),"'s or a large number of useEffect's called, but this can also be JavaScript event handlers (",f("code",{children:"'onclick'"}),", ",f("code",{children:"'onchange'"}),") that performed expensive computation."]}),f("p",{children:"If you have lots of components rendering that call hooks, like useEffect, it can add significant overhead even if the callbacks are not expensive. If this is the case, you can try optimizing the renders of those components to avoid the hook from having to run."}),f("p",{children:["You should profile your app using the"," ",f("strong",{children:"Chrome DevTools profiler"})," to learn exactly which functions took the longest to execute."]})]});case"high-render-count-high-js":return f("div",{className:O(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[f("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),a.data.renderCount===0?f(De,{children:[f("p",{children:"There were no renders, which means nothing related to React caused this slowdown. The most likely cause of the slowdown is a slow JavaScript event handler, or code related to a Web API"}),f("p",{children:["You should try to reproduce the slowdown while profiling your website with the",f("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]}):f(De,{children:[" ",f("p",{children:["There were ",f("strong",{children:a.data.renderCount})," renders, which could have contributed to the high JavaScript/Hook time if they ran lots of hooks, like ",f("code",{children:"useEffects"}),"."]}),f("div",{className:O(["flex flex-col"]),children:[f("p",{children:"You should try optimizing the renders of:"}),a.data.topByCount.map(r=>f("div",{children:["- ",f("strong",{children:r.name})," (rendered ",r.count,"x)"]},r.name))]}),"and then checking if the problem still exists.",f("p",{children:["You can also try profiling your app using the"," ",f("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]})]});case"low-render-count-high-js":return f("div",{className:O(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[f("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),f("p",{children:["There were only ",f("strong",{children:a.data.renderCount})," renders detected, which means either you had very expensive hooks like"," ",f("code",{children:"useEffect"}),"/",f("code",{children:"useLayoutEffect"}),", or there is other JavaScript running during this interaction that took up the majority of the time."]}),f("p",{children:["To understand precisely what caused the slowdown, use the"," ",f("strong",{children:"Chrome profiler"})," and analyze the function call times."]})]});case"high-render-count-update-dom-draw-frame":return f("div",{className:O(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[f("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),f("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),f("p",{children:["During this interaction, there were"," ",f("strong",{children:a.data.count})," renders, which was"," ",f("strong",{children:[a.data.percentageOfTotal.toFixed(0),"%"]})," of the time spent processing"]}),f("p",{children:"The work performed as a result of the renders may have forced the browser to spend a lot of time to draw the next frame."}),f("p",{children:'You can try optimizing the renders to see if the performance problem still exists using the "Ranked" tab.'}),f("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),f("p",{children:a.data.copyButton}),f("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),f("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"update-dom-draw-frame":return f("div",{className:O(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[f("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),f("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),f("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),f("p",{children:a.data.copyButton}),f("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),f("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"other":return f("div",{className:O(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[f("p",{children:["This is the time it took to run everything other than React renders. This can be hooks like ",f("code",{children:"useEffect"}),", other JavaScript not part of React, or work the browser has to do to update the DOM and draw the next frame."]}),f("p",{children:["To get a better picture of what happened, profile your app using the"," ",f("strong",{children:"Chrome profiler"})," when the performance problem arises."]})]})}},We=null,it=null,$e=ht({kind:"idle",current:null}),Sd=null,ii=()=>{Sd&&cancelAnimationFrame(Sd),Sd=requestAnimationFrame(()=>{if(!We||!it)return;it.clearRect(0,0,We.width,We.height);const a="hsl(271, 76%, 53%)",r=$e.value,{alpha:o,current:l}=vn(()=>{switch(r.kind){case"transition":{const c=r.current?.alpha&&r.current.alpha>0?r.current:r.transitionTo;return{alpha:c?c.alpha:0,current:c}}case"move-out":return{alpha:r.current?.alpha??0,current:r.current};case"idle":return{alpha:1,current:r.current}}});switch(l?.rects.forEach(c=>{it&&(it.shadowColor=a,it.shadowBlur=6,it.strokeStyle=a,it.lineWidth=2,it.globalAlpha=o,it.beginPath(),it.rect(c.left,c.top,c.width,c.height),it.stroke(),it.shadowBlur=0,it.beginPath(),it.rect(c.left,c.top,c.width,c.height),it.stroke())}),r.kind){case"move-out":{if(r.current.alpha===0){$e.value={kind:"idle",current:null};return}r.current.alpha<=.01&&(r.current.alpha=0),r.current.alpha=Math.max(0,r.current.alpha-.03),ii();return}case"transition":{if(r.current&&r.current.alpha>0){r.current.alpha=Math.max(0,r.current.alpha-.03),ii();return}if(r.transitionTo.alpha===1){$e.value={kind:"idle",current:r.transitionTo};return}r.transitionTo.alpha=Math.min(r.transitionTo.alpha+.03,1),ii()}case"idle":return}})},Td=null,hS=a=>{if(We=document.createElement("canvas"),it=We.getContext("2d",{alpha:!0}),!it)return null;const r=window.devicePixelRatio||1,{innerWidth:o,innerHeight:l}=window;We.style.width=`${o}px`,We.style.height=`${l}px`,We.width=o*r,We.height=l*r,We.style.position="fixed",We.style.left="0",We.style.top="0",We.style.pointerEvents="none",We.style.zIndex="2147483600",it.scale(r,r),a.appendChild(We),Td&&window.removeEventListener("resize",Td);const c=()=>{if(!We||!it)return;const d=window.devicePixelRatio||1,{innerWidth:h,innerHeight:p}=window;We.style.width=`${h}px`,We.style.height=`${p}px`,We.width=h*d,We.height=p*d,it.scale(d,d),ii()};return Td=c,window.addEventListener("resize",c),$e.subscribe(()=>{requestAnimationFrame(()=>{ii()})}),pS};function pS(){We?.parentNode&&We.parentNode.removeChild(We),We=null,it=null}var po=()=>{const a=$e.value.current?$e.value.current:$e.value.kind==="transition"?$e.value.transitionTo:null;if(a){if($e.value.kind==="transition"){$e.value={kind:"move-out",current:$e.value.current?.alpha===0?$e.value.transitionTo:$e.value.current??$e.value.transitionTo};return}$e.value={kind:"move-out",current:{alpha:0,...a}}}},mS=({selectedEvent:a})=>{const r=wt(a.timing),o=r-a.timing.renderTime,[l]=Ee(Bs()),d=a.groupedFiberRenders.map(g=>({event:g,kind:"render",totalTime:l?g.count:g.totalTime})),h=vn(()=>{switch(a.kind){case"dropped-frames":return a.timing.renderTime/r<.1;case"interaction":return(a.timing.otherJSTime+a.timing.renderTime)/r<.2}});a.kind==="interaction"&&!l&&d.push({kind:"other-javascript",totalTime:a.timing.otherJSTime}),h&&!l&&(a.kind==="interaction"?d.push({kind:"other-not-javascript",totalTime:wt(a.timing)-a.timing.renderTime-a.timing.otherJSTime}):d.push({kind:"other-frame-drop",totalTime:o}));const p=ue({lastCallAt:null,timer:null}),m=d.reduce((g,w)=>g+w.totalTime,0);return f("div",{className:O(["flex flex-col h-full w-full gap-y-1"]),children:[vn(()=>{if(l&&d.length===0)return f("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[f("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No data available"}),f("p",{className:"text-x w-full text-lefts",children:"No data was collected during this period"})]});if(d.length===0)return f("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[f("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No renders collected"}),f("p",{className:"text-x w-full text-lefts",children:"There were no renders during this period"})]})}),d.toSorted((g,w)=>w.totalTime-g.totalTime).map(g=>f(gy,{bars:d,bar:g,debouncedMouseEnter:p,totalBarTime:m,isProduction:l},g.kind==="render"?g.event.id:g.kind))]})},gS=a=>a.current&&a.current.alpha>0?"fading-out":"fading-in",gy=({bar:a,debouncedMouseEnter:r,totalBarTime:o,isProduction:l,bars:c,depth:d=0})=>{const{setNotificationState:h,setRoute:p}=Jt(),[m,g]=Ee(!1),w=a.kind==="render"?a.event.parents.size===0:!0,y=c.filter(k=>k.kind==="render"&&a.kind==="render"?a.event.parents.has(k.event.name)&&k.event.name!==a.event.name:!1),_=a.kind==="render"?Array.from(a.event.parents).filter(k=>!c.some(z=>z.kind==="render"&&z.event.name===k)):[],S=()=>{a.kind==="render"?(h(k=>({...k,selectedFiber:a.event})),p({route:"render-explanation",routeMessage:null})):p({route:"other-visualization",routeMessage:{kind:"auto-open-overview-accordion",name:a.kind}})};return f("div",{className:"w-full",children:[f("div",{className:O(["w-full flex items-center relative text-xs min-w-0"]),children:[f("button",{onMouseLeave:()=>{r.current.timer&&clearTimeout(r.current.timer),po()},onMouseEnter:async()=>{const k=async()=>{if(r.current.lastCallAt=Date.now(),a.kind!=="render"){const q=$e.value.current?$e.value.current:$e.value.kind==="transition"?$e.value.transitionTo:null;if(!q){$e.value={kind:"idle",current:null};return}$e.value={kind:"move-out",current:{alpha:0,...q}};return}const z=$e.value,R=vn(()=>{switch(z.kind){case"transition":return z.transitionTo;case"idle":case"move-out":return z.current}}),C=[];if(z.kind==="transition"){const q=gS(z);vn(()=>{switch(q){case"fading-in":{$e.value={kind:"transition",current:z.transitionTo,transitionTo:{rects:C,alpha:0,name:a.event.name}};return}case"fading-out":{$e.value={kind:"transition",current:$e.value.current?{alpha:0,...$e.value.current}:null,transitionTo:{rects:C,alpha:0,name:a.event.name}};return}}})}else $e.value={kind:"transition",transitionTo:{rects:C,alpha:0,name:a.event.name},current:R?{alpha:0,...R}:null};const M=a.event.elements.filter(q=>q instanceof Element);for await(const q of oy(M))q.forEach(({boundingClientRect:$})=>{C.push($)}),ii()};if(r.current.lastCallAt&&Date.now()-r.current.lastCallAt<200){r.current.timer&&clearTimeout(r.current.timer),r.current.timer=setTimeout(()=>{k()},200);return}k()},onClick:S,className:O(["h-full w-[90%] flex items-center hover:bg-[#0f0f0f] rounded-l-md min-w-0 relative"]),children:[f("div",{style:{minWidth:"fit-content",width:`${a.totalTime/o*100}%`},className:O(["flex items-center rounded-sm text-white text-xs h-[28px] shrink-0",a.kind==="render"&&"bg-[#412162] group-hover:bg-[#5b2d89]",a.kind==="other-frame-drop"&&"bg-[#44444a] group-hover:bg-[#6a6a6a]",a.kind==="other-javascript"&&"bg-[#efd81a6b] group-hover:bg-[#efda1a2f]",a.kind==="other-not-javascript"&&"bg-[#214379d4] group-hover:bg-[#21437982]"])}),f("div",{className:O(["absolute inset-0 flex items-center px-2","min-w-0"]),children:f("div",{className:"flex items-center gap-x-2 min-w-0 w-full",children:[f("span",{className:O(["truncate"]),children:vn(()=>{switch(a.kind){case"other-frame-drop":return"JavaScript, DOM updates, Draw Frame";case"other-javascript":return"JavaScript/React Hooks";case"other-not-javascript":return"Update DOM and Draw New Frame";case"render":return a.event.name}})}),a.kind==="render"&&G_(a.event)&&f("div",{style:{lineHeight:"10px"},className:O(["px-1 py-0.5 bg-[#6a369e] flex items-center rounded-sm font-semibold text-[8px] shrink-0"]),children:"Memoizable"})]})})]}),f("button",{onClick:()=>a.kind==="render"&&!w&&g(!m),className:O(["flex items-center min-w-fit shrink-0 rounded-r-md h-[28px]",!w&&"hover:bg-[#0f0f0f]",a.kind==="render"&&!w?"cursor-pointer":"cursor-default"]),children:[f("div",{className:"w-[20px] flex items-center justify-center",children:a.kind==="render"&&!w&&f(py,{className:O("transition-transform",m&&"rotate-90"),size:16})}),f("div",{style:{minWidth:w?"fit-content":l?"30px":"60px"},className:"flex items-center justify-end gap-x-1",children:[a.kind==="render"&&f("span",{className:O(["text-[10px]"]),children:["x",a.event.count]}),(a.kind!=="render"||!l)&&f("span",{className:"text-[10px] text-[#7346a0] pr-1",children:[a.totalTime<1?"<1":a.totalTime.toFixed(0),"ms"]})]})]}),d===0&&f("div",{className:O(["absolute right-0 top-1/2 transition-none -translate-y-1/2 bg-white text-black px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity mr-16","pointer-events-none"]),children:"Click to learn more"})]}),m&&(y.length>0||_.length>0)&&f("div",{className:"pl-3 flex flex-col gap-y-1 mt-1",children:[y.toSorted((k,z)=>z.totalTime-k.totalTime).map((k,z)=>f(gy,{depth:d+1,bar:k,debouncedMouseEnter:r,totalBarTime:o,isProduction:l,bars:c},z)),_.map(k=>f("div",{className:"w-full",children:f("div",{className:"w-full flex items-center relative text-xs",children:f("div",{className:"h-full w-full flex items-center relative",children:[f("div",{className:"flex items-center rounded-sm text-white text-xs h-[28px] w-full"}),f("div",{className:"absolute inset-0 flex items-center px-2",children:f("span",{className:"truncate whitespace-nowrap text-white/70 w-full",children:k})})]})})},k))]})]})},vS=({selectedEvent:a,selectedFiber:r})=>{const{setRoute:o}=Jt(),[l,c]=Ee(!0),[d]=Ee(Bs());yf(()=>{const p=localStorage.getItem("react-scan-tip-shown"),m=p==="true"?!0:p==="false"?!1:null;if(m===null){c(!0),localStorage.setItem("react-scan-tip-is-shown","true");return}m||c(!1)},[]);const h=r.changes.context.length===0&&r.changes.props.length===0&&r.changes.state.length===0;return f("div",{className:O(["w-full min-h-fit h-full flex flex-col py-4 pt-0 rounded-sm"]),children:[f("div",{className:O(["flex items-start gap-x-4 "]),children:[f("button",{onClick:()=>{o({route:"render-visualization",routeMessage:null})},className:O(["text-white hover:bg-[#34343b] flex gap-x-1 justify-center items-center mb-4 w-fit px-2.5 py-1.5 text-xs rounded-sm bg-[#18181B]"]),children:[f(I_,{size:14})," ",f("span",{children:"Overview"})]}),f("div",{className:O(["flex flex-col gap-y-1"]),children:[f("div",{className:O(["text-sm font-bold text-white overflow-x-hidden"]),children:f("div",{className:"flex items-center gap-x-2 truncate",children:r.name})}),f("div",{className:O(["flex gap-x-2"]),children:[!d&&f(De,{children:f("div",{className:O(["text-xs text-gray-400"]),children:["• Render time: ",r.totalTime.toFixed(0),"ms"]})}),f("div",{className:O(["text-xs text-gray-400 mb-4"]),children:["• Renders: ",r.count,"x"]})]})]})]}),l&&!h&&f("div",{className:O(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex relative"]),children:[f("button",{onClick:()=>{c(!1),localStorage.setItem("react-scan-tip-shown","false")},className:O(["absolute right-2 top-2 rounded-sm p-1 hover:bg-[#18181B]"]),children:f(As,{size:12})}),f("div",{className:O(["w-1 bg-[#d36cff]"])}),f("div",{className:O(["flex-1"]),children:[f("div",{className:O(["px-3 py-2 text-gray-100 text-xs font-semibold"]),children:"How to stop renders"}),f("div",{className:O(["px-3 pb-2 text-gray-400 text-[10px]"]),children:"Stop the following props, state and context from changing between renders, and wrap the component in React.memo if not already"})]})]}),h&&f("div",{className:O(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex"]),children:[f("div",{className:O(["w-1 bg-[#d36cff]"])}),f("div",{className:O(["flex-1"]),children:[f("div",{className:O(["px-3 py-2 text-gray-100 text-sm font-semibold"]),children:"No changes detected"}),f("div",{className:O(["px-3 pb-2 text-gray-400 text-xs"]),children:"This component would not of rendered if it was memoized"})]})]}),f("div",{className:O(["flex w-full"]),children:[f("div",{className:O(["flex flex-col border border-[#27272A] rounded-l-sm overflow-hidden w-1/3"]),children:[f("div",{className:O(["text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Props"}),r.changes.props.length>0?r.changes.props.toSorted((p,m)=>m.count-p.count).map(p=>f("div",{className:O(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[f("span",{className:O(["text-white "]),children:p.name}),f("div",{className:O([" text-[8px]  text-[#d36cff] pl-1 py-1 "]),children:[p.count,"/",r.count,"x"]})]},p.name)):f("div",{className:O(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),f("div",{className:O(["flex flex-col border border-[#27272A] border-l-0 overflow-hidden w-1/3"]),children:[f("div",{className:O([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed State"}),r.changes.state.length>0?r.changes.state.toSorted((p,m)=>m.count-p.count).map(p=>f("div",{className:O(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[f("span",{className:O(["text-white "]),children:["index ",p.index]}),f("div",{className:O(["rounded-full  text-[#d36cff] pl-1 py-1 text-[8px]"]),children:[p.count,"/",r.count,"x"]})]},p.index)):f("div",{className:O(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),f("div",{className:O(["flex flex-col border border-[#27272A] border-l-0 rounded-r-sm overflow-hidden w-1/3"]),children:[f("div",{className:O([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Context"}),r.changes.context.length>0?r.changes.context.toSorted((p,m)=>m.count-p.count).map(p=>f("div",{className:O(["flex flex-col justify-between items-center border-t  border-[#27272A] px-1 py-1 bg-[#0A0A0A] text-[10px] overflow-x-auto"]),children:[f("span",{className:O(["text-white "]),children:p.name}),f("div",{className:O(["rounded-full text-[#d36cff] pl-1 py-1 text-[8px] text-wrap"]),children:[p.count,"/",r.count,"x"]})]},p.name)):f("div",{className:O(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A] py-2"]),children:"No changes"})]})]})]})},yS=()=>{const{notificationState:a,setNotificationState:r}=Jt(),[o,l]=Ee("..."),c=ue(null);if(Ce(()=>{const d=setInterval(()=>{l(h=>h==="..."?"":h+".")},500);return()=>clearInterval(d)},[]),!a.selectedEvent)return f("div",{ref:c,className:O(["h-full w-full flex flex-col items-center justify-center relative py-2 px-4"]),children:[f("div",{className:O(["p-2 flex justify-center items-center border-[#27272A] absolute top-0 right-0"]),children:f("button",{onClick:()=>{Qe.value={view:"none"}},children:f(As,{size:18,className:"text-[#6F6F78]"})})}),f("div",{className:O(["flex flex-col items-start pt-5 bg-[#0A0A0A] p-5 rounded-sm max-w-md"," shadow-lg"]),children:f("div",{className:O(["flex flex-col items-start gap-y-4"]),children:[f("div",{className:O(["flex items-center"]),children:f("span",{className:O(["text-zinc-400 font-medium text-[17px]"]),children:["Scanning for slowdowns",o]})}),a.events.length!==0&&f("p",{className:O(["text-xs"]),children:["Click on an item in the"," ",f("span",{className:O(["text-purple-400"]),children:"History"})," list to get started"]}),f("p",{className:O(["text-zinc-600 text-xs"]),children:"You don't need to keep this panel open for React Scan to record slowdowns"}),f("p",{className:O(["text-zinc-600 text-xs"]),children:"Enable audio alerts to hear a delightful ding every time a large slowdown is recorded"}),f("button",{onClick:()=>{if(a.audioNotificationsOptions.enabled){r(h=>(h.audioNotificationsOptions.audioContext?.state!=="closed"&&h.audioNotificationsOptions.audioContext?.close(),localStorage.setItem("react-scan-notifications-audio","false"),{...h,audioNotificationsOptions:{audioContext:null,enabled:!1}}));return}localStorage.setItem("react-scan-notifications-audio","true");const d=new AudioContext;Cf(d),r(h=>({...h,audioNotificationsOptions:{enabled:!0,audioContext:d}}))},className:O(["px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-sm w-full"," text-sm flex items-center gap-x-2 justify-center"]),children:a.audioNotificationsOptions.enabled?f(De,{children:f("span",{className:"flex items-center gap-x-1",children:"Disable audio alerts"})}):f(De,{children:f("span",{className:"flex items-center gap-x-1",children:"Enable audio alerts"})})})]})})]});switch(a.route){case"render-visualization":return f(is,{children:f(mS,{selectedEvent:a.selectedEvent})});case"render-explanation":{if(!a.selectedFiber)throw new Error("Invariant: must have selected fiber when viewing render explanation");return f(is,{children:f(vS,{selectedFiber:a.selectedFiber,selectedEvent:a.selectedEvent})})}case"other-visualization":return f(is,{children:f("div",{className:O(["flex w-full h-full flex-col overflow-y-auto"]),id:"overview-scroll-container",children:f(cS,{selectedEvent:a.selectedEvent})})});case"optimize":return f(is,{children:f(lS,{selectedEvent:a.selectedEvent})})}a.route},is=({children:a})=>{const{notificationState:r}=Jt();if(!r.selectedEvent)throw new Error("Invariant: d must have selected event when viewing render explanation");return f("div",{className:O(["w-full h-full flex flex-col gap-y-2"]),children:[f("div",{className:O(["h-[50px] w-full"]),children:f(eS,{selectedEvent:r.selectedEvent})}),f("div",{className:O(["h-calc(100%-50px) flex flex-col overflow-y-auto px-3"]),children:a})]})},bS=({selectedEvent:a})=>{const r=Ho(a);switch(a.kind){case"interaction":return f("div",{className:O(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:f("div",{className:O(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[f("div",{className:O(["flex items-center gap-x-2 "]),children:[f("span",{className:O(["text-[#5a5a5a] mr-0.5"]),children:a.type==="click"?"Clicked ":"Typed in "}),f("span",{children:zo(a.componentPath)}),f("div",{className:O(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap",r==="low"&&"bg-green-500/50",r==="needs-improvement"&&"bg-[#b77116]",r==="high"&&"bg-[#b94040]"]),children:[wt(a.timing).toFixed(0),"ms processing time"]})]}),f("div",{className:O(["flex items-center gap-x-2  justify-end ml-auto"]),children:f("div",{className:O(["p-2 flex justify-center items-center border-[#27272A]"]),children:f("button",{onClick:()=>{Qe.value={view:"none"}},title:"Close",children:f(As,{size:18,className:"text-[#6F6F78]"})})})})]})});case"dropped-frames":return f("div",{className:O(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:f("div",{className:O(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[f("div",{className:O(["flex items-center gap-x-2 "]),children:["FPS Drop",f("div",{className:O(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap",r==="low"&&"bg-green-500/50",r==="needs-improvement"&&"bg-[#b77116]",r==="high"&&"bg-[#b94040]"]),children:["dropped to ",a.fps," FPS"]})]}),f("div",{className:O(["flex items-center gap-x-2 w-2/4 justify-end ml-auto"]),children:f("div",{className:O(["p-2 flex justify-center items-center border-[#27272A]"]),children:f("button",{onClick:()=>{Qe.value={view:"none"}},children:f(As,{size:18,className:"text-[#6F6F78]"})})})})]})})}},wS=({flashingItemsCount:a,totalEvents:r})=>{const[o,l]=Ee(!1),c=ue(0),d=ue(0);return Ce(()=>{if(c.current>=r)return;const h=Date.now(),p=250,m=h-d.current;if(m>=p){l(!1);const g=setTimeout(()=>{c.current=r,d.current=Date.now(),l(!0),setTimeout(()=>{l(!1)},2e3)},50);return()=>clearTimeout(g)}else{const g=p-m,w=setTimeout(()=>{l(!1),setTimeout(()=>{c.current=r,d.current=Date.now(),l(!0),setTimeout(()=>{l(!1)},2e3)},50)},g);return()=>clearTimeout(w)}},[a]),o},$v=({item:a,shouldFlash:r})=>{const[o,l]=Ee(!1),c=a.events.map(Ho).reduce((p,m)=>{switch(m){case"high":return"high";case"needs-improvement":return p==="high"?"high":"needs-improvement";case"low":return p}},"low"),d=a.events.reduce((p,m)=>r(m.id)?p+1:p,0),h=wS({flashingItemsCount:d,totalEvents:a.events.length});return f("div",{className:O(["flex flex-col gap-y-0.5"]),children:[f("button",{onClick:()=>l(p=>!p),className:O(["pl-2 py-1.5  text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",h&&!o&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[f("div",{className:O(["w-4/5 flex items-center justify-start h-full text-xs truncate gap-x-1.5"]),children:[f("span",{className:O(["min-w-fit"]),children:f(py,{className:O(["text-[#A1A1AA] transition-transform",o?"rotate-90":""]),size:14},`chevron-${a.timestamp}`)}),f("span",{className:O(["text-xs"]),children:a.kind==="collapsed-frame-drops"?"FPS Drops":zo(a.events.at(0)?.componentPath??[])})]}),f("div",{className:O(["ml-auto min-w-fit flex justify-end items-center"]),children:f("div",{style:{lineHeight:"10px"},className:O(["w-fit flex items-center text-[10px] justify-center h-full text-white px-1 py-1 rounded-sm font-semibold",c==="low"&&"bg-green-500/60",c==="needs-improvement"&&"bg-[#b77116] text-[10px]",c==="high"&&"bg-[#b94040]"]),children:["x",a.events.length]})})]}),o&&f(xS,{children:a.events.toSorted((p,m)=>m.timestamp-p.timestamp).map(p=>f(vy,{event:p,shouldFlash:r(p.id)}))})]})},xS=({children:a})=>f("div",{className:"relative pl-6 flex flex-col gap-y-1",children:[f("div",{className:"absolute left-3 top-0 bottom-0 w-px bg-[#27272A]"}),a]}),_S=a=>{const r=ue([]),[o,l]=Ee(new Set),c=ue(!0);return Ce(()=>{if(c.current){c.current=!1,r.current=a;return}const d=new Set(a.map(m=>m.id)),h=new Set(r.current.map(m=>m.id)),p=new Set;d.forEach(m=>{h.has(m)||p.add(m)}),p.size>0&&(l(p),setTimeout(()=>{l(new Set)},2e3)),r.current=a},[a]),d=>o.has(d)},SS=({shouldFlash:a})=>{const[r,o]=Ee(a);return Ce(()=>{if(a){o(!0);const l=setTimeout(()=>{o(!1)},1e3);return()=>clearTimeout(l)}},[a]),r},vy=({event:a,shouldFlash:r})=>{const{notificationState:o,setNotificationState:l}=Jt(),c=Ho(a),d=SS({shouldFlash:r});switch(a.kind){case"interaction":return f("button",{onClick:()=>{l(h=>({...h,selectedEvent:a,route:"render-visualization",selectedFiber:null}))},className:O(["pl-2 py-1.5  text-sm flex w-full items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",a.id===o.selectedEvent?.id&&"bg-[#18181B]",d&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[f("div",{className:O(["w-4/5 flex items-center justify-start h-full gap-x-1.5"]),children:[f("span",{className:O(["min-w-fit text-xs"]),children:vn(()=>{switch(a.type){case"click":return f(J_,{size:14});case"keyboard":return f(K_,{size:14})}})}),f("span",{className:O(["text-xs pr-1 truncate"]),children:zo(a.componentPath)})]}),f("div",{className:O([" min-w-fit flex justify-end items-center ml-auto"]),children:f("div",{style:{lineHeight:"10px"},className:O(["gap-x-0.5 w-fit flex items-end justify-center h-full text-white px-1 py-1 rounded-sm font-semibold text-[10px]",c==="low"&&"bg-green-500/50",c==="needs-improvement"&&"bg-[#b77116] text-[10px]",c==="high"&&"bg-[#b94040]"]),children:f("div",{style:{lineHeight:"10px"},className:O(["text-[10px] text-white flex items-end"]),children:[wt(a.timing).toFixed(0),"ms"]})})})]});case"dropped-frames":return f("button",{onClick:()=>{l(h=>({...h,selectedEvent:a,route:"render-visualization",selectedFiber:null}))},className:O(["pl-2 py-1.5  w-full text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",a.id===o.selectedEvent?.id&&"bg-[#18181B]",d&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[f("div",{className:O(["w-4/5 flex items-center justify-start h-full text-xs truncate"]),children:[f(P_,{size:14,className:"mr-1.5"})," FPS Drop"]}),f("div",{className:O([" min-w-fit flex justify-end items-center ml-auto"]),children:f("div",{style:{lineHeight:"10px"},className:O(["w-fit flex items-center justify-center h-full text-white px-1 py-1 rounded-sm text-[10px] font-bold",c==="low"&&"bg-green-500/60",c==="needs-improvement"&&"bg-[#b77116] text-[10px]",c==="high"&&"bg-[#b94040]"]),children:[a.fps," FPS"]})})]})}},TS=a=>a.reduce((o,l)=>{const c=o.at(-1);if(!c)return[{kind:"single",event:l,timestamp:l.timestamp}];switch(c.kind){case"collapsed-keyboard":return l.kind==="interaction"&&l.type==="keyboard"&&l.componentPath.join("-")===c.events[0].componentPath.join("-")?[...o.filter(h=>h!==c),{kind:"collapsed-keyboard",events:[...c.events,l],timestamp:Math.max(...[...c.events,l].map(h=>h.timestamp))}]:[...o,{kind:"single",event:l,timestamp:l.timestamp}];case"single":return c.event.kind==="interaction"&&c.event.type==="keyboard"&&l.kind==="interaction"&&l.type==="keyboard"&&c.event.componentPath.join("-")===l.componentPath.join("-")?[...o.filter(h=>h!==c),{kind:"collapsed-keyboard",events:[c.event,l],timestamp:Math.max(c.event.timestamp,l.timestamp)}]:c.event.kind==="dropped-frames"&&l.kind==="dropped-frames"?[...o.filter(h=>h!==c),{kind:"collapsed-frame-drops",events:[c.event,l],timestamp:Math.max(c.event.timestamp,l.timestamp)}]:[...o,{kind:"single",event:l,timestamp:l.timestamp}];case"collapsed-frame-drops":return l.kind==="dropped-frames"?[...o.filter(h=>h!==c),{kind:"collapsed-frame-drops",events:[...c.events,l],timestamp:Math.max(...[...c.events,l].map(h=>h.timestamp))}]:[...o,{kind:"single",event:l,timestamp:l.timestamp}]}},[]),yy=(a=150)=>{const{notificationState:r}=Jt(),[o,l]=Ee(r.events);return Ce(()=>{setTimeout(()=>{l(r.events)},a)},[r.events]),[o,l]},CS=()=>{const{notificationState:a,setNotificationState:r}=Jt(),o=_S(a.events),[l,c]=yy(),d=TS(l).toSorted((h,p)=>p.timestamp-h.timestamp);return f("div",{className:O(["w-full h-full gap-y-2 flex flex-col border-r border-[#27272A] overflow-y-auto"]),children:[f("div",{className:O(["text-sm text-[#65656D] pl-3 pr-1 w-full flex items-center justify-between"]),children:[f("span",{children:"History"}),f(my,{wrapperProps:{className:"h-full flex items-center justify-center ml-auto"},triggerContent:f("button",{className:O(["hover:bg-[#18181B] rounded-full p-2"]),title:"Clear all events",onClick:()=>{Eo.getState().actions.clear(),r(h=>({...h,selectedEvent:null,selectedFiber:null,route:h.route==="other-visualization"?"other-visualization":"render-visualization"})),c([])},children:f(W_,{className:O([""]),size:16})}),children:f("div",{className:O(["w-full flex justify-center"]),children:"Clear all events"})})]}),f("div",{className:O(["flex flex-col px-1 gap-y-1"]),children:[d.length===0&&f("div",{className:O(["flex items-center justify-center text-zinc-500 text-sm py-4"]),children:"No Events"}),d.map(h=>vn(()=>{switch(h.kind){case"collapsed-keyboard":return f($v,{shouldFlash:o,item:h});case"single":return f(vy,{event:h.event,shouldFlash:o(h.event.id)},h.event.id);case"collapsed-frame-drops":return f($v,{shouldFlash:o,item:h})}}))]})]})},kS=a=>Object.values(a).map(o=>({id:mn(),totalTime:o.nodeInfo.reduce((l,c)=>l+c.selfTime,0),count:o.nodeInfo.length,name:o.nodeInfo[0].name,deletedAll:!1,parents:o.parents,hasMemoCache:o.hasMemoCache,wasFiberRenderMount:o.wasFiberRenderMount,elements:o.nodeInfo.map(l=>l.element),changes:{context:o.changes.fiberContext.current.filter(l=>o.changes.fiberContext.changesCounts.get(l.name)).map(l=>({name:String(l.name),count:o.changes.fiberContext.changesCounts.get(l.name)??0})),props:o.changes.fiberProps.current.filter(l=>o.changes.fiberProps.changesCounts.get(l.name)).map(l=>({name:String(l.name),count:o.changes.fiberProps.changesCounts.get(l.name)??0})),state:o.changes.fiberState.current.filter(l=>o.changes.fiberState.changesCounts.get(Number(l.name))).map(l=>({index:l.name,count:o.changes.fiberState.changesCounts.get(Number(l.name))??0}))}})),ES=a=>{Ce(()=>{const o=setInterval(()=>{a.forEach(l=>{l.groupedFiberRenders&&l.groupedFiberRenders.forEach(c=>{if(c.deletedAll)return;if(!c.elements||c.elements.length===0){c.deletedAll=!0;return}const d=c.elements.length;c.elements=c.elements.filter(h=>h&&h.isConnected),c.elements.length===0&&d>0&&(c.deletedAll=!0)})})},5e3);return()=>{clearInterval(o)}},[a])},by=()=>{const a=Y_(),r=[];return ES(r),a.state.events.forEach(o=>{const l=o.kind==="interaction"?o.data.meta.detailedTiming.fiberRenders:o.data.meta.fiberRenders,c=kS(l),d=c.reduce((h,p)=>h+p.totalTime,0);switch(o.kind){case"interaction":{const{commitEnd:h,jsEndDetail:p,interactionStartDetail:m,rafStart:g}=o.data.meta.detailedTiming,w=Math.max(0,p-m-d),y=Math.max(o.data.meta.latency-(h-m),0);r.push({componentPath:o.data.meta.detailedTiming.componentPath,groupedFiberRenders:c,id:o.id,kind:"interaction",memory:null,timestamp:o.data.startAt,type:o.data.meta.detailedTiming.interactionType==="keyboard"?"keyboard":"click",timing:{renderTime:d,kind:"interaction",otherJSTime:w,framePreparation:g-p,frameConstruction:h-g,frameDraw:y}});return}case"long-render":{r.push({kind:"dropped-frames",id:o.id,memory:null,timing:{kind:"dropped-frames",renderTime:d,otherTime:o.data.meta.latency},groupedFiberRenders:c,timestamp:o.data.startAt,fps:o.data.meta.fps});return}}}),r},zS=1e3,NS=()=>{const{notificationState:a,setNotificationState:r}=Jt(),o=ue(null),l=ue(null),c=ue(0),[d]=yy(),h=d.filter(p=>Ho(p)==="high").length;return Ce(()=>{const p=localStorage.getItem("react-scan-notifications-audio");if(p!=="false"&&p!=="true"){localStorage.setItem("react-scan-notifications-audio","false");return}if(p!=="false"){r(g=>g.audioNotificationsOptions.enabled?g:{...g,audioNotificationsOptions:{enabled:!0,audioContext:new AudioContext}});return}},[]),Ce(()=>{const{audioNotificationsOptions:p}=a;if(!p.enabled||h===0||o.current&&o.current>=h)return;l.current&&clearTimeout(l.current);const g=Date.now()-c.current,w=Math.max(0,zS-g);l.current=setTimeout(()=>{Cf(p.audioContext),o.current=h,c.current=Date.now(),l.current=null},w)},[h]),Ce(()=>{h===0&&(o.current=null)},[h]),Ce(()=>()=>{l.current&&clearTimeout(l.current)},[]),null},AS=Sf((a,r)=>{const o=by(),[l,c]=Ee({detailsExpanded:!1,events:o,filterBy:"latest",moreInfoExpanded:!1,route:"render-visualization",selectedEvent:o.toSorted((d,h)=>d.timestamp-h.timestamp).at(-1)??null,selectedFiber:null,routeMessage:null,audioNotificationsOptions:{enabled:!1,audioContext:null}});return l.events=o,f(hy.Provider,{value:{notificationState:l,setNotificationState:c,setRoute:({route:d,routeMessage:h})=>{c(p=>{const m={...p,route:d,routeMessage:h};switch(d){case"render-visualization":return po(),{...m,selectedFiber:null};case"optimize":return po(),{...m,selectedFiber:null};case"other-visualization":return po(),{...m,selectedFiber:null};case"render-explanation":return po(),m}})}},children:[f(NS,{}),f(MS,{ref:r})]})}),MS=Sf((a,r)=>{const{notificationState:o}=Jt();return f("div",{ref:r,className:O(["h-full w-full flex flex-col"]),children:[o.selectedEvent&&f("div",{className:O(["w-full h-[48px] flex flex-col",o.moreInfoExpanded&&"h-[235px]",o.moreInfoExpanded&&o.selectedEvent.kind==="dropped-frames"&&"h-[150px]"]),children:[f(bS,{selectedEvent:o.selectedEvent}),o.moreInfoExpanded&&f(OS,{})]}),f("div",{className:O(["flex ",o.selectedEvent?"h-[calc(100%-48px)]":"h-full",o.moreInfoExpanded&&"h-[calc(100%-200px)]",o.moreInfoExpanded&&o.selectedEvent?.kind==="dropped-frames"&&"h-[calc(100%-150px)]"]),children:[f("div",{className:O(["h-full min-w-[200px]"]),children:f(CS,{})}),f("div",{className:O(["w-[calc(100%-200px)] h-full overflow-y-auto"]),children:f(yS,{})})]})]})}),OS=()=>{const{notificationState:a}=Jt();if(!a.selectedEvent)throw new Error("Invariant must have selected event for more info");const r=a.selectedEvent;return f("div",{className:O(["px-4 py-2 border-b border-[#27272A] bg-[#18181B]/50 h-[calc(100%-40px)]",r.kind==="dropped-frames"&&"h-[calc(100%-25px)]"]),children:f("div",{className:O(["flex flex-col gap-y-4 h-full"]),children:vn(()=>{switch(r.kind){case"interaction":return f(De,{children:[f("div",{className:O(["flex items-center gap-x-3"]),children:[f("span",{className:"text-[#6F6F78] text-xs font-medium",children:r.type==="click"?"Clicked component location":"Typed in component location"}),f("div",{className:"font-mono text-[#E4E4E7] flex items-center bg-[#27272A] pl-2 py-1 rounded-sm overflow-x-auto",children:r.componentPath.toReversed().map((o,l)=>f(De,{children:[f("span",{style:{lineHeight:"14px"},className:"text-[10px] whitespace-nowrap",children:o},o),l<r.componentPath.length-1&&f("span",{className:"text-[#6F6F78] mx-0.5",children:"‹"})]}))})]}),f("div",{className:O(["flex items-center gap-x-3"]),children:[f("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),f("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[wt(r.timing).toFixed(0),"ms"]})]}),f("div",{className:O(["flex items-center gap-x-3"]),children:[f("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),f("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-r.timestamp)/1e3).toFixed(0)}s ago`})]})]});case"dropped-frames":return f(De,{children:[f("div",{className:O(["flex items-center gap-x-3"]),children:[f("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),f("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[wt(r.timing).toFixed(0),"ms"]})]}),f("div",{className:O(["flex items-center gap-x-3"]),children:[f("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),f("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-r.timestamp)/1e3).toFixed(0)}s ago`})]})]})}})})})},DS=Ef(()=>{const a=by(),[r,o]=Ee(a);Ce(()=>{const _=setTimeout(()=>{o(a)},600);return()=>{clearTimeout(_)}},[a]);const l=te.inspectState,c=l.value.kind==="inspecting",d=l.value.kind==="focused",[h,p]=Ee([]),m=ot(()=>{switch(te.inspectState.value.kind){case"inspecting":{Qe.value={view:"none"},te.inspectState.value={kind:"inspect-off"};return}case"focused":{Qe.value={view:"inspector"},te.inspectState.value={kind:"inspecting",hoveredDomElement:null};return}case"inspect-off":{Qe.value={view:"none"},te.inspectState.value={kind:"inspecting",hoveredDomElement:null};return}case"uninitialized":return}},[]),g=ot(_=>{if(_.preventDefault(),_.stopPropagation(),!Re.instrumentation)return;const S=!Re.instrumentation.isPaused.value;Re.instrumentation.isPaused.value=S;const k=Kn("react-scan-options");Lt("react-scan-options",{...k,enabled:!S})},[]);Co(()=>{te.inspectState.value.kind==="uninitialized"&&(te.inspectState.value={kind:"inspect-off"})});let w=null,y="#999";return c?(w=f(nt,{name:"icon-inspect"}),y="#8e61e3"):d?(w=f(nt,{name:"icon-focus"}),y="#8e61e3"):(w=f(nt,{name:"icon-inspect"}),y="#999"),yf(()=>{if(Qe.value.view!=="notifications")return;const _=new Set(a.map(S=>S.id));p([..._.values()])},[a.length,Qe.value.view]),f("div",{className:"flex max-h-9 min-h-9 flex-1 items-stretch overflow-hidden",children:[f("div",{className:"h-full flex items-center min-w-fit",children:f("button",{type:"button",id:"react-scan-inspect-element",title:"Inspect element",onClick:m,className:"button flex items-center justify-center h-full w-full pl-3 pr-2.5",style:{color:y},children:w})}),f("div",{className:"h-full flex items-center justify-center",children:f("button",{type:"button",id:"react-scan-notifications",title:"Notifications",onClick:()=>{switch(te.inspectState.value.kind!=="inspect-off"&&(te.inspectState.value={kind:"inspect-off"}),Qe.value.view){case"inspector":{te.inspectState.value={kind:"inspect-off"};const _=new Set(a.map(S=>S.id));p([..._.values()]),Qe.value={view:"notifications"};return}case"notifications":{Qe.value={view:"none"};return}case"none":{const _=new Set(a.map(S=>S.id));p([..._.values()]),Qe.value={view:"notifications"};return}}},className:"button flex items-center justify-center h-full pl-2.5 pr-2.5",style:{color:y},children:f($_,{events:r.filter(_=>!h.includes(_.id)).map(_=>Ho(_)==="high"),size:16,className:O(["text-[#999]",Qe.value.view==="notifications"&&"text-[#8E61E3]"])})})}),f(w_,{checked:!Re.instrumentation?.isPaused.value,onChange:g,className:"place-self-center",title:"Outline Re-renders"}),Re.options.value.showFPS&&f(__,{})]})}),RS=ur(()=>te.inspectState.value.kind==="inspecting"),US=ur(()=>O("relative","flex-1","flex flex-col","rounded-t-lg","overflow-hidden","opacity-100","transition-[opacity]",RS.value&&"opacity-0 duration-0 delay-0")),HS=ur(()=>Qe.value.view==="inspector"),jS=ur(()=>Qe.value.view==="notifications"),LS=()=>f("div",{className:O("flex flex-1 flex-col","overflow-hidden z-10","rounded-lg","bg-black","opacity-100","transition-[border-radius]","peer-hover/left:rounded-l-none","peer-hover/right:rounded-r-none","peer-hover/top:rounded-t-none","peer-hover/bottom:rounded-b-none"),children:[f("div",{className:US,children:[f(b_,{}),f("div",{className:O("relative","flex-1 flex","text-white","bg-[#0A0A0A]","transition-opacity delay-150","overflow-hidden","border-b border-[#222]"),children:[f(Qv,{isOpen:HS,children:f(C2,{})}),f(Qv,{isOpen:jS,children:f(AS,{})})]})]}),f(DS,{})]}),Qv=({isOpen:a,children:r})=>f("div",{className:O("flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",a.value&&"opacity-100 delay-150 pointer-events-auto"),children:f("div",{className:"absolute inset-0 flex",children:r})}),os=(a,r,o)=>a+(r-a)*o,Cd={frameInterval:1e3/60,speeds:{fast:.51,slow:.1,off:0}},Wr=En&&window.devicePixelRatio||1,BS=()=>{const a=ue(null),r=ue(null),o=ue(null),l=ue(null),c=ue(null),d=ue(0),h=ue(),p=ue(new Map),m=ue(!1),g=ue(0),w=(x,N,U,Q)=>{x.save(),x.strokeStyle="white",x.fillStyle="white",x.lineWidth=1.5;const J=Q*.6,T=Q*.5,H=N+(Q-J)/2,F=U;x.beginPath(),x.arc(H+J/2,F+T/2,J/2,Math.PI,0,!1),x.stroke();const I=Q*.8,P=Q*.5,re=N+(Q-I)/2,pe=U+T/2;x.fillRect(re,pe,I,P),x.restore()},y=(x,N,U,Q)=>{if(!Q)return;const J=24,T=8,F=(Q?.type&&bt(Q.type))??"Unknown";x.save(),x.font="12px system-ui, -apple-system, sans-serif";const P=x.measureText(F).width,re=U==="locked"?14:0,pe=U==="locked"?6:0,Ue=P+T*2+re+pe,_e=N.left,pt=N.top-J-4;if(x.fillStyle="rgb(37, 37, 38, .75)",x.beginPath(),x.roundRect(_e,pt,Ue,J,3),x.fill(),U==="locked"){const Wn=_e+T,Oa=pt+(J-re)/2+2;w(x,Wn,Oa,re),l.current={x:Wn,y:Oa,width:re,height:re}}else l.current=null;x.fillStyle="white",x.textBaseline="middle";const zn=_e+T+(U==="locked"?re+pe:0);x.fillText(F,zn,pt+J/2),x.restore()},_=(x,N,U,Q)=>{if(!o.current)return;const J=o.current;N.clearRect(0,0,x.width,x.height),N.strokeStyle="rgba(142, 97, 227, 0.5)",N.fillStyle="rgba(173, 97, 230, 0.10)",U==="locked"?N.setLineDash([]):N.setLineDash([4]),N.lineWidth=1,N.fillRect(J.left,J.top,J.width,J.height),N.strokeRect(J.left,J.top,J.width,J.height),y(N,J,U,Q)},S=(x,N,U,Q,J,T)=>{const H=Re.options.value.animationSpeed,F=Cd.speeds[H]??Cd.speeds.off,I=P=>{if(P-g.current<Cd.frameInterval){d.current=requestAnimationFrame(I);return}if(g.current=P,!o.current){cancelAnimationFrame(d.current);return}o.current={left:os(o.current.left,U.left,F),top:os(o.current.top,U.top,F),width:os(o.current.width,U.width,F),height:os(o.current.height,U.height,F)},_(x,N,Q,J),Math.abs(o.current.left-U.left)>.1||Math.abs(o.current.top-U.top)>.1||Math.abs(o.current.width-U.width)>.1||Math.abs(o.current.height-U.height)>.1?d.current=requestAnimationFrame(I):(o.current=U,_(x,N,Q,J),cancelAnimationFrame(d.current),N.restore())};cancelAnimationFrame(d.current),clearTimeout(h.current),d.current=requestAnimationFrame(I),h.current=setTimeout(()=>{cancelAnimationFrame(d.current),o.current=U,_(x,N,Q,J),N.restore()},1e3)},k=(x,N,U,Q,J)=>{if(N.save(),!o.current){o.current=U,_(x,N,Q,J),N.restore();return}S(x,N,U,Q,J)},z=async(x,N,U,Q)=>{if(!x||!N||!U)return;const{parentCompositeFiber:J}=ar(x),T=await k2(x);!J||!T||k(N,U,T,Q,J)},R=()=>{for(const x of p.current.values())x?.()},C=x=>{const N=x.getContext("2d");N&&N.clearRect(0,0,x.width,x.height),o.current=null,l.current=null,c.current=null,x.classList.remove("fade-in"),m.current=!1},M=x=>{if(!a.current||m.current)return;const N=Q=>{!a.current||Q.propertyName!=="opacity"||!m.current||(a.current.removeEventListener("transitionend",N),C(a.current),x?.())},U=p.current.get("fade-out");U&&(U(),p.current.delete("fade-out")),a.current.addEventListener("transitionend",N),p.current.set("fade-out",()=>{a.current?.removeEventListener("transitionend",N)}),m.current=!0,a.current.classList.remove("fade-in"),requestAnimationFrame(()=>{a.current?.classList.add("fade-out")})},q=()=>{a.current&&(m.current=!1,a.current.classList.remove("fade-out"),requestAnimationFrame(()=>{a.current?.classList.add("fade-in")}))},$=x=>{x!==c.current&&(c.current=x,Kd.has(x.tagName)?M():q(),te.inspectState.value={kind:"inspecting",hoveredDomElement:x})},Z=()=>{!o.current||!a.current||m.current||M()},W=F0(x=>{if(te.inspectState.peek().kind!=="inspecting"||!r.current)return;r.current.style.pointerEvents="none";const U=document.elementFromPoint(x?.clientX??0,x?.clientY??0);if(r.current.style.removeProperty("pointer-events"),clearTimeout(h.current),U&&U!==a.current){const{parentCompositeFiber:Q}=ar(U);if(Q){const J=Ts(Q);if(J){$(J);return}}}Z()},32),K=(x,N)=>{const U=l.current;if(!U)return!1;const Q=N.getBoundingClientRect(),J=N.width/Q.width,T=N.height/Q.height,H=(x.clientX-Q.left)*J,F=(x.clientY-Q.top)*T,I=H/Wr,P=F/Wr;return I>=U.x&&I<=U.x+U.width&&P>=U.y&&P<=U.y+U.height},fe=x=>{x.kind==="focused"&&(te.inspectState.value={kind:"inspecting",hoveredDomElement:x.focusedDomElement})},ie=x=>{const N=["react-scan-inspect-element","react-scan-power"];if(x.target instanceof HTMLElement&&N.includes(x.target.id))return;const U=c.current?.tagName;if(U&&Kd.has(U))return;x.preventDefault(),x.stopPropagation();const Q=c.current??document.elementFromPoint(x.clientX,x.clientY);if(!Q)return;const J=x.composedPath().at(0);if(J instanceof HTMLElement&&N.includes(J.id)){const F=new MouseEvent(x.type,x);F.__reactScanSyntheticEvent=!0,J.dispatchEvent(F);return}const{parentCompositeFiber:T}=ar(Q);if(!T)return;const H=Ts(T);if(!H){c.current=null,te.inspectState.value={kind:"inspect-off"};return}te.inspectState.value={kind:"focused",focusedDomElement:H,fiber:T}},oe=x=>{if(x.__reactScanSyntheticEvent)return;const N=te.inspectState.peek(),U=a.current;if(!(!U||!r.current)){if(K(x,U)){x.preventDefault(),x.stopPropagation(),fe(N);return}N.kind==="inspecting"&&ie(x)}},le=x=>{if(x.key!=="Escape")return;const N=te.inspectState.peek();if(a.current&&document.activeElement?.id!=="react-scan-root"&&(Qe.value={view:"none"},N.kind==="focused"||N.kind==="inspecting"))switch(x.preventDefault(),x.stopPropagation(),N.kind){case"focused":{q(),o.current=null,c.current=N.focusedDomElement,te.inspectState.value={kind:"inspecting",hoveredDomElement:N.focusedDomElement};break}case"inspecting":{M(()=>{Ls.value=!1,te.inspectState.value={kind:"inspect-off"}});break}}},ee=(x,N,U)=>{p.current.get(x.kind)?.(),r.current&&x.kind!=="inspecting"&&(r.current.style.pointerEvents="none"),d.current&&cancelAnimationFrame(d.current);let Q;switch(x.kind){case"inspect-off":M();return;case"inspecting":z(x.hoveredDomElement,N,U,"inspecting");break;case"focused":if(!x.focusedDomElement)return;c.current!==x.focusedDomElement&&(c.current=x.focusedDomElement),Qe.value={view:"inspector"},z(x.focusedDomElement,N,U,"locked"),Q=te.lastReportTime.subscribe(()=>{if(d.current&&o.current){const{parentCompositeFiber:J}=ar(x.focusedDomElement);J&&z(x.focusedDomElement,N,U,"locked")}}),Q&&p.current.set(x.kind,Q);break}},ge=(x,N)=>{const U=x.getBoundingClientRect();x.width=U.width*Wr,x.height=U.height*Wr,N.scale(Wr,Wr),N.save()},me=()=>{const x=te.inspectState.peek(),N=a.current;if(!N)return;const U=N?.getContext("2d");U&&(cancelAnimationFrame(d.current),clearTimeout(h.current),ge(N,U),o.current=null,x.kind==="focused"&&x.focusedDomElement?z(x.focusedDomElement,N,U,"locked"):x.kind==="inspecting"&&x.hoveredDomElement&&z(x.hoveredDomElement,N,U,"inspecting"))},ke=x=>{const N=te.inspectState.peek(),U=a.current;U&&(N.kind==="inspecting"||K(x,U))&&(x.preventDefault(),x.stopPropagation(),x.stopImmediatePropagation())};return Ce(()=>{const x=a.current;if(!x)return;const N=x?.getContext("2d");if(!N)return;ge(x,N);const U=te.inspectState.subscribe(Q=>{ee(Q,x,N)});return window.addEventListener("scroll",me,{passive:!0}),window.addEventListener("resize",me,{passive:!0}),document.addEventListener("pointermove",W,{passive:!0,capture:!0}),document.addEventListener("pointerdown",ke,{capture:!0}),document.addEventListener("click",oe,{capture:!0}),document.addEventListener("keydown",le,{capture:!0}),()=>{R(),U(),window.removeEventListener("scroll",me),window.removeEventListener("resize",me),document.removeEventListener("pointermove",W,{capture:!0}),document.removeEventListener("click",oe,{capture:!0}),document.removeEventListener("pointerdown",ke,{capture:!0}),document.removeEventListener("keydown",le,{capture:!0}),d.current&&cancelAnimationFrame(d.current),clearTimeout(h.current)}},[]),f(De,{children:[f("div",{ref:r,className:O("fixed top-0 left-0 w-screen h-screen","z-[214748365]"),style:{pointerEvents:"none"}}),f("canvas",{ref:a,dir:"ltr",className:O("react-scan-inspector-overlay","fixed top-0 left-0 w-screen h-screen","pointer-events-none","z-[214748367]")})]})},YS=class{constructor(a,r){this.width=a,this.height=r,this.maxWidth=a-ye*2,this.maxHeight=r-ye*2}rightEdge(a){return this.width-a-ye}bottomEdge(a){return this.height-a-ye}isFullWidth(a){return a>=this.maxWidth}isFullHeight(a){return a>=this.maxHeight}},Pr,No=()=>{const a=window.innerWidth,r=window.innerHeight;return Pr&&Pr.width===a&&Pr.height===r||(Pr=new YS(a,r)),Pr},XS=(a,r,o,l,c)=>{if(o){if(a==="top-left")return"bottom-right";if(a==="top-right")return"bottom-left";if(a==="bottom-left")return"top-right";if(a==="bottom-right")return"top-left";const[d,h]=r.split("-");if(a==="left")return`${d}-right`;if(a==="right")return`${d}-left`;if(a==="top")return`bottom-${h}`;if(a==="bottom")return`top-${h}`}if(l){if(a==="left")return`${r.split("-")[0]}-right`;if(a==="right")return`${r.split("-")[0]}-left`}if(c){if(a==="top")return`bottom-${r.split("-")[1]}`;if(a==="bottom")return`top-${r.split("-")[1]}`}return r},yo=(a,r,o)=>{const l=getComputedStyle(document.body).direction==="rtl",c=window.innerWidth,d=window.innerHeight,h=r===ft.width,p=h?r:Math.min(r,c-ye*2),m=h?o:Math.min(o,d-ye*2);let g,w,y=ye,_=c-p-ye,S=ye,k=d-m-ye;switch(a){case"top-right":g=l?-y:_,w=S;break;case"bottom-right":g=l?-y:_,w=k;break;case"bottom-left":g=l?-_:y,w=k;break;case"top-left":g=l?-_:y,w=S;break;default:g=y,w=S;break}return h&&(l?g=Math.min(-y,Math.max(g,-_)):g=Math.max(y,Math.min(g,_)),w=Math.max(S,Math.min(w,k))),{x:g,y:w}},qS=(a,r)=>{const[o,l]=r.split("-");return a!==o&&a!==l},VS=(a,r,o,l)=>o&&l?!0:!o&&!l?qS(a,r):o?a!==r.split("-")[0]:l?a!==r.split("-")[1]:!1,ls=(a,r,o)=>{const l=o?ft.width:ft.initialHeight,c=o?No().maxWidth:No().maxHeight,d=a+r;return Math.min(Math.max(l,d),c)},FS=(a,r,o,l,c)=>{const d=getComputedStyle(document.body).direction==="rtl",h=window.innerWidth-ye*2,p=window.innerHeight-ye*2;let m=r.width,g=r.height,w=o.x,y=o.y;if(d&&a.includes("right")){const R=-o.x+r.width-ye,C=Math.min(r.width+l,R);m=Math.min(h,Math.max(ft.width,C)),w=o.x+(m-r.width)}if(d&&a.includes("left")){const R=window.innerWidth-o.x-ye,C=Math.min(r.width-l,R);m=Math.min(h,Math.max(ft.width,C))}if(!d&&a.includes("right")){const R=window.innerWidth-o.x-ye,C=Math.min(r.width+l,R);m=Math.min(h,Math.max(ft.width,C))}if(!d&&a.includes("left")){const R=o.x+r.width-ye,C=Math.min(r.width-l,R);m=Math.min(h,Math.max(ft.width,C)),w=o.x-(m-r.width)}if(a.includes("bottom")){const R=window.innerHeight-o.y-ye,C=Math.min(r.height+c,R);g=Math.min(p,Math.max(ft.initialHeight,C))}if(a.includes("top")){const R=o.y+r.height-ye,C=Math.min(r.height-c,R);g=Math.min(p,Math.max(ft.initialHeight,C)),y=o.y-(g-r.height)}let _=ye,S=window.innerWidth-ye-m,k=ye,z=window.innerHeight-ye-g;return d?w=Math.min(-_,Math.max(w,-S)):w=Math.max(_,Math.min(w,S)),y=Math.max(k,Math.min(y,z)),{newSize:{width:m,height:g},newPosition:{x:w,y}}},GS=a=>{const r=No(),o={"top-left":Math.hypot(a.x,a.y),"top-right":Math.hypot(r.maxWidth-a.x,a.y),"bottom-left":Math.hypot(a.x,r.maxHeight-a.y),"bottom-right":Math.hypot(r.maxWidth-a.x,r.maxHeight-a.y)};let l="top-left";for(const c in o)o[c]<o[l]&&(l=c);return l},$S=(a,r,o,l,c=100)=>{const d=o!==void 0?a-o:0,h=l!==void 0?r-l:0,p=window.innerWidth/2,m=window.innerHeight/2,g=d>c,w=d<-c,y=h>c,_=h<-c;if(g||w){const S=r>m;return g?S?"bottom-right":"top-right":S?"bottom-left":"top-left"}if(y||_){const S=a>p;return y?S?"bottom-right":"bottom-left":S?"top-right":"top-left"}return a>p?r>m?"bottom-right":"top-right":r>m?"bottom-left":"top-left"},ss=({position:a})=>{const r=ue(null),o=ue(null),l=ue(null),c=ue(null);Ce(()=>{const p=r.current;if(!p)return;const m=()=>{p.classList.remove("pointer-events-none");const y=te.inspectState.value.kind==="focused",_=Qe.value.view!=="none";(y||_)&&VS(a,ae.value.corner,ae.value.dimensions.isFullWidth,ae.value.dimensions.isFullHeight)?p.classList.remove("hidden","pointer-events-none","opacity-0"):p.classList.add("hidden","pointer-events-none","opacity-0")},g=ae.subscribe(y=>{o.current!==null&&l.current!==null&&c.current!==null&&y.dimensions.width===o.current&&y.dimensions.height===l.current&&y.corner===c.current||(m(),o.current=y.dimensions.width,l.current=y.dimensions.height,c.current=y.corner)}),w=te.inspectState.subscribe(()=>{m()});return()=>{g(),w(),o.current=null,l.current=null,c.current=null}},[]);const d=ot(p=>{p.preventDefault(),p.stopPropagation();const m=Qd.value;if(!m)return;const g=m.style,{dimensions:w}=ae.value,y=p.clientX,_=p.clientY,S=w.width,k=w.height,z=w.position;ae.value={...ae.value,dimensions:{...w,isFullWidth:!1,isFullHeight:!1,width:S,height:k,position:z}};let R=null;const C=q=>{R||(g.transition="none",R=requestAnimationFrame(()=>{const{newSize:$,newPosition:Z}=FS(a,{width:S,height:k},z,q.clientX-y,q.clientY-_);g.transform=`translate3d(${Z.x}px, ${Z.y}px, 0)`,g.width=`${$.width}px`,g.height=`${$.height}px`;const W=Math.floor($.width-gn/2),K=ae.value.componentsTree.width,fe=Math.min(W,Math.max(gn,K));ae.value={...ae.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:$.width,height:$.height,position:Z},componentsTree:{...ae.value.componentsTree,width:fe}},R=null}))},M=()=>{R&&(cancelAnimationFrame(R),R=null),document.removeEventListener("pointermove",C),document.removeEventListener("pointerup",M);const{dimensions:q,corner:$}=ae.value,Z=No(),W=Z.isFullWidth(q.width),K=Z.isFullHeight(q.height),fe=W&&K;let ie=$;(fe||W||K)&&(ie=GS(q.position));const oe=yo(ie,q.width,q.height),le=()=>{m.removeEventListener("transitionend",le)};m.addEventListener("transitionend",le),g.transform=`translate3d(${oe.x}px, ${oe.y}px, 0)`,ae.value={...ae.value,corner:ie,dimensions:{isFullWidth:W,isFullHeight:K,width:q.width,height:q.height,position:oe},lastDimensions:{isFullWidth:W,isFullHeight:K,width:q.width,height:q.height,position:oe}},Lt(Jn,{corner:ie,dimensions:ae.value.dimensions,lastDimensions:ae.value.lastDimensions,componentsTree:ae.value.componentsTree})};document.addEventListener("pointermove",C,{passive:!0}),document.addEventListener("pointerup",M)},[]),h=ot(p=>{p.preventDefault(),p.stopPropagation();const m=Qd.value;if(!m)return;const g=m.style,{dimensions:w,corner:y}=ae.value,_=No(),S=_.isFullWidth(w.width),k=_.isFullHeight(w.height),z=S&&k,R=(S||k)&&!z;let C=w.width,M=w.height;const q=XS(a,y,z,S,k);a==="left"||a==="right"?(C=S?w.width:_.maxWidth,R&&(C=S?ft.width:_.maxWidth)):(M=k?w.height:_.maxHeight,R&&(M=k?ft.initialHeight:_.maxHeight)),z&&(a==="left"||a==="right"?C=ft.width:M=ft.initialHeight);const $=yo(q,C,M),Z={isFullWidth:_.isFullWidth(C),isFullHeight:_.isFullHeight(M),width:C,height:M,position:$},W=Math.floor(C-ft.width/2),K=ae.value.componentsTree.width,fe=Math.floor(C*.3),ie=S?gn:(a==="left"||a==="right")&&!S?Math.min(W,Math.max(gn,fe)):Math.min(W,Math.max(gn,K));requestAnimationFrame(()=>{ae.value={corner:q,dimensions:Z,lastDimensions:w,componentsTree:{...ae.value.componentsTree,width:ie}},g.transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",g.width=`${C}px`,g.height=`${M}px`,g.transform=`translate3d(${$.x}px, ${$.y}px, 0)`}),Lt(Jn,{corner:q,dimensions:Z,lastDimensions:w,componentsTree:{...ae.value.componentsTree,width:ie}})},[]);return f("div",{ref:r,onPointerDown:d,onDblClick:h,className:O("absolute z-50","flex items-center justify-center","group","transition-colors select-none","peer",{"resize-left peer/left":a==="left","resize-right peer/right z-10":a==="right","resize-top peer/top":a==="top","resize-bottom peer/bottom":a==="bottom"}),children:f("span",{className:"resize-line-wrapper",children:f("span",{className:"resize-line",children:f(nt,{name:"icon-ellipsis",size:18,className:O("text-neutral-400",(a==="left"||a==="right")&&"rotate-90")})})})})},Zv={horizontal:{width:20,height:48},vertical:{width:48,height:20}},QS=()=>{const a=ue(null),r=ue(!1),o=ue(0),l=ue(0),c=ue(!1),d=ot((_=!0)=>{if(!a.current)return;const{corner:S}=ae.value;let k,z;if(It.value){const ie=It.value.orientation||"horizontal",oe=Zv[ie];k=oe.width,z=oe.height}else if(r.current){const ie=ae.value.lastDimensions;k=ls(ie.width,0,!0),z=ls(ie.height,0,!1),c.current&&(c.current=!1)}else k=o.current,z=l.current;let C=yo(S,k,z);if(It.value){const{corner:ie,orientation:oe="horizontal"}=It.value,le=Zv[oe];switch(ie){case"top-left":C=oe==="horizontal"?{x:-1,y:ye}:{x:ye,y:-1};break;case"bottom-left":C=oe==="horizontal"?{x:-1,y:window.innerHeight-le.height-ye}:{x:ye,y:window.innerHeight-le.height+1};break;case"top-right":C=oe==="horizontal"?{x:window.innerWidth-le.width+1,y:ye}:{x:window.innerWidth-le.width-ye,y:-1};break;default:C=oe==="horizontal"?{x:window.innerWidth-le.width+1,y:window.innerHeight-le.height-ye}:{x:window.innerWidth-le.width-ye,y:window.innerHeight-le.height+1};break}}const M=k<ft.width||z<ft.initialHeight,q=_&&!M,$=a.current,Z=$.style;let W=null;const K=()=>{cd(),$.removeEventListener("transitionend",K),W&&(cancelAnimationFrame(W),W=null)};$.addEventListener("transitionend",K),Z.transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",W=requestAnimationFrame(()=>{Z.width=`${k}px`,Z.height=`${z}px`,Z.transform=`translate3d(${C.x}px, ${C.y}px, 0)`,W=null});const fe={isFullWidth:k>=window.innerWidth-ye*2,isFullHeight:z>=window.innerHeight-ye*2,width:k,height:z,position:C};ae.value={corner:S,dimensions:fe,lastDimensions:r?ae.value.lastDimensions:k>o.current?fe:ae.value.lastDimensions,componentsTree:ae.value.componentsTree},q&&Lt(Jn,{corner:ae.value.corner,dimensions:ae.value.dimensions,lastDimensions:ae.value.lastDimensions,componentsTree:ae.value.componentsTree}),cd()},[]),h=ot(_=>{if(_.preventDefault(),!a.current||_.target.closest("button"))return;const S=a.current,k=S.style,{dimensions:z}=ae.value,R=_.clientX,C=_.clientY,M=z.position.x,q=z.position.y;let $=M,Z=q,W=null,K=!1,fe=R,ie=C;const oe=ee=>{W||(K=!0,fe=ee.clientX,ie=ee.clientY,W=requestAnimationFrame(()=>{const ge=fe-R,me=ie-C;$=Number(M)+ge,Z=Number(q)+me,k.transition="none",k.transform=`translate3d(${$}px, ${Z}px, 0)`;const ke=$+z.width,x=Z+z.height,N=Math.max(0,-$),U=Math.max(0,ke-window.innerWidth),Q=Math.max(0,-Z),J=Math.max(0,x-window.innerHeight),T=Math.min(z.width,N+U),H=Math.min(z.height,Q+J),F=T*z.height+H*z.width-T*H,I=z.width*z.height;let P=F>I*.35;if(!P&&Re.options.value.showFPS){const re=$+z.width,pe=re-100;P=re<=0||pe>=window.innerWidth||Z+z.height<=0||Z>=window.innerHeight}if(P){const re=$+z.width/2,pe=Z+z.height/2,Ue=window.innerWidth/2,_e=window.innerHeight/2;let pt;re<Ue?pt=pe<_e?"top-left":"bottom-left":pt=pe<_e?"top-right":"bottom-right";let zn;const Wn=Math.max(N,U),Oa=Math.max(Q,J);zn=Wn>Oa?"horizontal":"vertical",ae.value={...ae.value,corner:pt,lastDimensions:{...z,position:yo(pt,z.width,z.height)}};const bn={corner:pt,orientation:zn};It.value=bn,Lt(hs,bn),Lt(Jn,ae.value),d(!1),document.removeEventListener("pointermove",oe),document.removeEventListener("pointerup",le),W&&(cancelAnimationFrame(W),W=null)}W=null}))},le=()=>{if(!S)return;W&&(cancelAnimationFrame(W),W=null),document.removeEventListener("pointermove",oe),document.removeEventListener("pointerup",le);const ee=Math.abs(fe-R),ge=Math.abs(ie-C),me=Math.sqrt(ee*ee+ge*ge);if(!K||me<60)return;const ke=$S(fe,ie,R,C,te.inspectState.value.kind==="focused"?80:40);if(ke===ae.value.corner){k.transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)";const U=ae.value.dimensions.position;requestAnimationFrame(()=>{k.transform=`translate3d(${U.x}px, ${U.y}px, 0)`});return}const x=yo(ke,z.width,z.height);if($===M&&Z===q)return;const N=()=>{k.transition="none",cd(),S.removeEventListener("transitionend",N),W&&(cancelAnimationFrame(W),W=null)};S.addEventListener("transitionend",N),k.transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",requestAnimationFrame(()=>{k.transform=`translate3d(${x.x}px, ${x.y}px, 0)`}),ae.value={corner:ke,dimensions:{isFullWidth:z.isFullWidth,isFullHeight:z.isFullHeight,width:z.width,height:z.height,position:x},lastDimensions:ae.value.lastDimensions,componentsTree:ae.value.componentsTree},Lt(Jn,{corner:ke,dimensions:ae.value.dimensions,lastDimensions:ae.value.lastDimensions,componentsTree:ae.value.componentsTree})};document.addEventListener("pointermove",oe),document.addEventListener("pointerup",le)},[]),p=ot(_=>{if(_.preventDefault(),!a.current||!It.value)return;const{corner:S,orientation:k="horizontal"}=It.value,z=_.clientX,R=_.clientY;let C=null,M=!1;const q=50,$=W=>{if(M||C)return;const K=W.clientX-z,fe=W.clientY-R;let ie=!1;if(k==="horizontal"?(S.endsWith("left")&&K>q||S.endsWith("right")&&K<-q)&&(ie=!0):(S.startsWith("top")&&fe>q||S.startsWith("bottom")&&fe<-q)&&(ie=!0),ie){if(M=!0,It.value=null,Lt(hs,null),o.current===0&&a.current)requestAnimationFrame(()=>{if(a.current){a.current.style.width="min-content";const oe=a.current.offsetWidth;o.current=oe||300;const le=ae.value.lastDimensions,ee=ls(le.width,0,!0),ge=ls(le.height,0,!1);let me=W.clientX-ee/2,ke=W.clientY-ge/2;me=Math.max(ye,Math.min(me,window.innerWidth-ee-ye)),ke=Math.max(ye,Math.min(ke,window.innerHeight-ge-ye)),ae.value={...ae.value,dimensions:{...ae.value.dimensions,position:{x:me,y:ke}}},d(!0);const x=Kn(Ir);Qe.value=x||{view:"none"},setTimeout(()=>{if(a.current){const N=new PointerEvent("pointerdown",{clientX:W.clientX,clientY:W.clientY,pointerId:W.pointerId,bubbles:!0});a.current.dispatchEvent(N)}},100)}});else{d(!0);const oe=Kn(Ir);Qe.value=oe||{view:"none"}}document.removeEventListener("pointermove",$),document.removeEventListener("pointerup",Z)}},Z=()=>{document.removeEventListener("pointermove",$),document.removeEventListener("pointerup",Z)};document.addEventListener("pointermove",$),document.addEventListener("pointerup",Z)},[]);Ce(()=>{if(!a.current)return;gv(Ir),It.value?(l.current=36,o.current=0):(a.current.style.width="min-content",l.current=36,o.current=a.current.offsetWidth),a.current.style.maxWidth=`calc(100vw - ${ye*2}px)`,a.current.style.maxHeight=`calc(100vh - ${ye*2}px)`,d(),te.inspectState.value.kind!=="focused"&&!It.value&&!c.current&&(ae.value={...ae.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:o.current,height:l.current,position:ae.value.dimensions.position}}),Qd.value=a.current;const _=ae.subscribe(R=>{if(!a.current)return;const{x:C,y:M}=R.dimensions.position,{width:q,height:$}=R.dimensions,Z=a.current;requestAnimationFrame(()=>{Z.style.transform=`translate3d(${C}px, ${M}px, 0)`,Z.style.width=`${q}px`,Z.style.height=`${$}px`})}),S=Qe.subscribe(R=>{r.current=R.view!=="none",d(),It.value||(R.view!=="none"?Lt(Ir,R):gv(Ir))}),k=te.inspectState.subscribe(R=>{r.current=R.kind==="focused",d()}),z=()=>{d(!0)};return window.addEventListener("resize",z,{passive:!0}),()=>{window.removeEventListener("resize",z),S(),k(),_(),Lt(Jn,{...Tn,corner:ae.value.corner})}},[]);const[m,g]=Ee(!1);Ce(()=>{g(!0)},[]);const w=It.value;let y="";if(w){const{orientation:_="horizontal",corner:S}=w;_==="horizontal"?y=S?.endsWith("right")?"rotate-180":"":y=S?.startsWith("bottom")?"-rotate-90":"rotate-90"}return f(De,{children:[f(BS,{}),f(Lf.Provider,{value:a.current,children:f("div",{id:"react-scan-toolbar",dir:"ltr",ref:a,onPointerDown:w?p:h,className:O("fixed inset-0",w?(()=>{const{orientation:_="horizontal",corner:S}=w;return _==="horizontal"?S?.endsWith("right")?"rounded-tl-lg rounded-bl-lg shadow-lg":"rounded-tr-lg rounded-br-lg shadow-lg":S?.startsWith("bottom")?"rounded-tl-lg rounded-tr-lg shadow-lg":"rounded-bl-lg rounded-br-lg shadow-lg"})():"rounded-lg shadow-lg","flex flex-col","font-mono text-[13px]","user-select-none","opacity-0",w?"cursor-pointer":"cursor-move","z-[124124124124]","animate-fade-in animation-duration-300 animation-delay-300","will-change-transform","[touch-action:none]"),children:w?f("button",{type:"button",onClick:()=>{It.value=null,Lt(hs,null),o.current===0&&a.current&&requestAnimationFrame(()=>{if(a.current){a.current.style.width="min-content";const S=a.current.offsetWidth;o.current=S||300,d(!0)}});const _=Kn(Ir);Qe.value=_||{view:"none"}},className:"flex items-center justify-center w-full h-full text-white",title:"Expand toolbar",children:f(nt,{name:"icon-chevron-right",size:16,className:O("transition-transform",y)})}):f(De,{children:[f(ss,{position:"top"}),f(ss,{position:"bottom"}),f(ss,{position:"left"}),f(ss,{position:"right"}),f(LS,{})]})})})]})},Lf=C0(null),ZS=()=>f("svg",{xmlns:"http://www.w3.org/2000/svg",style:"display: none;",children:[f("title",{children:"React Scan Icons"}),f("symbol",{id:"icon-inspect",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),f("path",{d:"M5 3a2 2 0 0 0-2 2"}),f("path",{d:"M19 3a2 2 0 0 1 2 2"}),f("path",{d:"M5 21a2 2 0 0 1-2-2"}),f("path",{d:"M9 3h1"}),f("path",{d:"M9 21h2"}),f("path",{d:"M14 3h1"}),f("path",{d:"M3 9v1"}),f("path",{d:"M21 9v2"}),f("path",{d:"M3 14v1"})]}),f("symbol",{id:"icon-focus",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),f("path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"})]}),f("symbol",{id:"icon-next",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:f("path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z"})}),f("symbol",{id:"icon-previous",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:f("path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z"})}),f("symbol",{id:"icon-close",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),f("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),f("symbol",{id:"icon-replay",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}),f("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),f("path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}),f("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),f("circle",{cx:"12",cy:"12",r:"1"}),f("path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"})]}),f("symbol",{id:"icon-ellipsis",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("circle",{cx:"12",cy:"12",r:"1"}),f("circle",{cx:"19",cy:"12",r:"1"}),f("circle",{cx:"5",cy:"12",r:"1"})]}),f("symbol",{id:"icon-copy",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),f("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]}),f("symbol",{id:"icon-check",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:f("path",{d:"M20 6 9 17l-5-5"})}),f("symbol",{id:"icon-chevron-right",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:f("path",{d:"m9 18 6-6-6-6"})}),f("symbol",{id:"icon-settings",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}),f("circle",{cx:"12",cy:"12",r:"3"})]}),f("symbol",{id:"icon-flame",viewBox:"0 0 24 24",children:f("path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"})}),f("symbol",{id:"icon-function",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}),f("path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"}),f("path",{d:"M9 11.2h5.7"})]}),f("symbol",{id:"icon-triangle-alert",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}),f("path",{d:"M12 9v4"}),f("path",{d:"M12 17h.01"})]}),f("symbol",{id:"icon-gallery-horizontal-end",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("path",{d:"M2 7v10"}),f("path",{d:"M6 5v14"}),f("rect",{width:"12",height:"18",x:"10",y:"3",rx:"2"})]}),f("symbol",{id:"icon-search",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("circle",{cx:"11",cy:"11",r:"8"}),f("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),f("symbol",{id:"icon-lock",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),f("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),f("symbol",{id:"icon-lock-open",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),f("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"})]}),f("symbol",{id:"icon-sanil",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}),f("circle",{cx:"10",cy:"13",r:"8"}),f("path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"}),f("path",{d:"M18 3 19.1 5.2"})]})]}),IS=class extends cn{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleReset=()=>{this.setState({hasError:!1,error:null})}}static getDerivedStateFromError(a){return{hasError:!0,error:a}}render(){return this.state.hasError?f("div",{className:"fixed bottom-4 right-4 z-[124124124124]",children:f("div",{className:"p-3 bg-black rounded-lg shadow-lg w-80",children:[f("div",{className:"flex items-center gap-2 mb-2 text-red-400 text-sm font-medium",children:[f(nt,{name:"icon-flame",className:"text-red-500",size:14}),"React Scan ran into a problem"]}),f("div",{className:"p-2 bg-black rounded font-mono text-xs text-red-300 mb-3 break-words",children:this.state.error?.message||JSON.stringify(this.state.error)}),f("button",{type:"button",onClick:this.handleReset,className:"px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded text-xs font-medium transition-colors flex items-center justify-center gap-1.5",children:"Restart"})]})}):this.props.children}},JS=a=>{const r=document.createElement("div");r.id="react-scan-toolbar-root",window.__REACT_SCAN_TOOLBAR_CONTAINER__=r,a.appendChild(r),mo(f(IS,{children:f(De,{children:[f(ZS,{}),f(QS,{})]})}),r);const o=r.remove.bind(r);return r.remove=()=>{window.__REACT_SCAN_TOOLBAR_CONTAINER__=void 0,r.hasChildNodes()&&(mo(null,r),mo(null,r)),o()},r},KS={version:"0.4.3"},Pa=null,so=null,WS=()=>{if(Pa&&so)return{rootContainer:Pa,shadowRoot:so};Pa=document.createElement("div"),Pa.id="react-scan-root",so=Pa.attachShadow({mode:"open"});const a=document.createElement("style");return a.textContent=m_,so.appendChild(a),document.documentElement.appendChild(Pa),{rootContainer:Pa,shadowRoot:so}},te={wasDetailsOpen:ht(!0),isInIframe:ht(En&&window.self!==window.top),inspectState:ht({kind:"uninitialized"}),monitor:ht(null),fiberRoots:new Set,reportData:new Map,legacyReportData:new Map,lastReportTime:ht(0),interactionListeningForRenders:null,changesListeners:new Map},Re={instrumentation:null,componentAllowList:null,options:ht({enabled:!0,log:!1,showToolbar:!0,animationSpeed:"fast",dangerouslyForceRunInProduction:!1,showFPS:!0,showNotificationCount:!0,allowInIframe:!1}),runInAllEnvironments:!1,onRender:null,scheduledOutlines:new Map,activeOutlines:new Map,Store:te,version:KS.version};En&&window.__REACT_SCAN_EXTENSION__&&(window.__REACT_SCAN_VERSION__=Re.version);function PS(a){return a in Re.options.value}var wy=a=>{const r=[],o={};for(const l in a){if(!PS(l))continue;const c=a[l];switch(l){case"enabled":case"log":case"showToolbar":case"showNotificationCount":case"dangerouslyForceRunInProduction":case"showFPS":case"allowInIframe":typeof c!="boolean"?r.push(`- ${l} must be a boolean. Got "${c}"`):o[l]=c;break;case"animationSpeed":["slow","fast","off"].includes(c)?o[l]=c:r.push(`- Invalid animation speed "${c}". Using default "fast"`);break;case"onCommitStart":typeof c!="function"?r.push(`- ${l} must be a function. Got "${c}"`):o.onCommitStart=c;break;case"onCommitFinish":typeof c!="function"?r.push(`- ${l} must be a function. Got "${c}"`):o.onCommitFinish=c;break;case"onRender":typeof c!="function"?r.push(`- ${l} must be a function. Got "${c}"`):o.onRender=c;break;case"onPaintStart":case"onPaintFinish":typeof c!="function"?r.push(`- ${l} must be a function. Got "${c}"`):o[l]=c;break;default:r.push(`- Unknown option "${l}"`)}}return r.length>0&&console.warn(`[React Scan] Invalid options:
${r.join(`
`)}`),o},eT=a=>{try{const r=wy(a);if(Object.keys(r).length===0)return;const o="showToolbar"in r&&r.showToolbar!==void 0,l={...Re.options.value,...r},{instrumentation:c}=Re;c&&"enabled"in r&&(c.isPaused.value=r.enabled===!1),Re.options.value=l;try{const d=Kn("react-scan-options")?.enabled;typeof d=="boolean"&&(l.enabled=d)}catch(d){Re.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",d)}return Lt("react-scan-options",l),o&&xy(!!l.showToolbar),l}catch(r){Re.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",r)}},tT=()=>Re.options,cs=null,Iv,Bs=()=>{if(cs!==null)return cs;Iv??=si();for(const a of Iv.renderers.values())S1(a)==="production"&&(cs=!0);return cs},nT=()=>{try{if(!En||!Re.runInAllEnvironments&&Bs()&&!Re.options.value.dangerouslyForceRunInProduction)return;const a=Kn("react-scan-options");if(a){const o=wy(a);Object.keys(o).length>0&&(Re.options.value={...Re.options.value,...o})}const r=tT();p_(()=>{xy(!!r.value.showToolbar)}),!te.monitor.value&&En&&setTimeout(()=>{T1()||console.error("[React Scan] Failed to load. Must import React Scan before React runs.")},5e3)}catch(a){Re.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",a)}},xy=a=>{window.reactScanCleanupListeners?.();const r=F_(),o=aT();window.reactScanCleanupListeners=()=>{r(),o?.()};const l=window.__REACT_SCAN_TOOLBAR_CONTAINER__;if(!a){l?.remove();return}l?.remove();const{shadowRoot:c}=WS();JS(c)},aT=()=>{try{const a=document.documentElement;return hS(a)}catch(a){Re.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",a)}},rT=(a={})=>{eT(a),!(te.isInIframe.value&&!Re.options.value.allowInIframe&&!Re.runInAllEnvironments)&&(a.enabled===!1&&a.showToolbar!==!0||nT())},iT=new WeakSet,kd={exports:{}},co={},Ed={exports:{}},zd={};var Jv;function oT(){return Jv||(Jv=1,(function(a){function r(x,N){var U=x.length;x.push(N);e:for(;0<U;){var Q=U-1>>>1,J=x[Q];if(0<c(J,N))x[Q]=N,x[U]=J,U=Q;else break e}}function o(x){return x.length===0?null:x[0]}function l(x){if(x.length===0)return null;var N=x[0],U=x.pop();if(U!==N){x[0]=U;e:for(var Q=0,J=x.length,T=J>>>1;Q<T;){var H=2*(Q+1)-1,F=x[H],I=H+1,P=x[I];if(0>c(F,U))I<J&&0>c(P,F)?(x[Q]=P,x[I]=U,Q=I):(x[Q]=F,x[H]=U,Q=H);else if(I<J&&0>c(P,U))x[Q]=P,x[I]=U,Q=I;else break e}}return N}function c(x,N){var U=x.sortIndex-N.sortIndex;return U!==0?U:x.id-N.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var h=Date,p=h.now();a.unstable_now=function(){return h.now()-p}}var m=[],g=[],w=1,y=null,_=3,S=!1,k=!1,z=!1,R=!1,C=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function $(x){for(var N=o(g);N!==null;){if(N.callback===null)l(g);else if(N.startTime<=x)l(g),N.sortIndex=N.expirationTime,r(m,N);else break;N=o(g)}}function Z(x){if(z=!1,$(x),!k)if(o(m)!==null)k=!0,W||(W=!0,ee());else{var N=o(g);N!==null&&ke(Z,N.startTime-x)}}var W=!1,K=-1,fe=5,ie=-1;function oe(){return R?!0:!(a.unstable_now()-ie<fe)}function le(){if(R=!1,W){var x=a.unstable_now();ie=x;var N=!0;try{e:{k=!1,z&&(z=!1,M(K),K=-1),S=!0;var U=_;try{t:{for($(x),y=o(m);y!==null&&!(y.expirationTime>x&&oe());){var Q=y.callback;if(typeof Q=="function"){y.callback=null,_=y.priorityLevel;var J=Q(y.expirationTime<=x);if(x=a.unstable_now(),typeof J=="function"){y.callback=J,$(x),N=!0;break t}y===o(m)&&l(m),$(x)}else l(m);y=o(m)}if(y!==null)N=!0;else{var T=o(g);T!==null&&ke(Z,T.startTime-x),N=!1}}break e}finally{y=null,_=U,S=!1}N=void 0}}finally{N?ee():W=!1}}}var ee;if(typeof q=="function")ee=function(){q(le)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,me=ge.port2;ge.port1.onmessage=le,ee=function(){me.postMessage(null)}}else ee=function(){C(le,0)};function ke(x,N){K=C(function(){x(a.unstable_now())},N)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(x){x.callback=null},a.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):fe=0<x?Math.floor(1e3/x):5},a.unstable_getCurrentPriorityLevel=function(){return _},a.unstable_next=function(x){switch(_){case 1:case 2:case 3:var N=3;break;default:N=_}var U=_;_=N;try{return x()}finally{_=U}},a.unstable_requestPaint=function(){R=!0},a.unstable_runWithPriority=function(x,N){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var U=_;_=x;try{return N()}finally{_=U}},a.unstable_scheduleCallback=function(x,N,U){var Q=a.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?Q+U:Q):U=Q,x){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=U+J,x={id:w++,callback:N,priorityLevel:x,startTime:U,expirationTime:J,sortIndex:-1},U>Q?(x.sortIndex=U,r(g,x),o(m)===null&&x===o(g)&&(z?(M(K),K=-1):z=!0,ke(Z,U-Q))):(x.sortIndex=J,r(m,x),k||S||(k=!0,W||(W=!0,ee()))),x},a.unstable_shouldYield=oe,a.unstable_wrapCallback=function(x){var N=_;return function(){var U=_;_=N;try{return x.apply(this,arguments)}finally{_=U}}}})(zd)),zd}var Kv;function lT(){return Kv||(Kv=1,Ed.exports=oT()),Ed.exports}var Nd={exports:{}},zt={};var Wv;function sT(){if(Wv)return zt;Wv=1;var a=Tf();function r(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)g+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var l={d:{f:o,r:function(){throw Error(r(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(m,g,w){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:y==null?null:""+y,children:m,containerInfo:g,implementation:w}}var h=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,zt.createPortal=function(m,g){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(r(299));return d(m,g,null,w)},zt.flushSync=function(m){var g=h.T,w=l.p;try{if(h.T=null,l.p=2,m)return m()}finally{h.T=g,l.p=w,l.d.f()}},zt.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,l.d.C(m,g))},zt.prefetchDNS=function(m){typeof m=="string"&&l.d.D(m)},zt.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var w=g.as,y=p(w,g.crossOrigin),_=typeof g.integrity=="string"?g.integrity:void 0,S=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;w==="style"?l.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:y,integrity:_,fetchPriority:S}):w==="script"&&l.d.X(m,{crossOrigin:y,integrity:_,fetchPriority:S,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},zt.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var w=p(g.as,g.crossOrigin);l.d.M(m,{crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&l.d.M(m)},zt.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var w=g.as,y=p(w,g.crossOrigin);l.d.L(m,w,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},zt.preloadModule=function(m,g){if(typeof m=="string")if(g){var w=p(g.as,g.crossOrigin);l.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else l.d.m(m)},zt.requestFormReset=function(m){l.d.r(m)},zt.unstable_batchedUpdates=function(m,g){return m(g)},zt.useFormState=function(m,g,w){return h.H.useFormState(m,g,w)},zt.useFormStatus=function(){return h.H.useHostTransitionStatus()},zt.version="19.2.4",zt}var Pv;function cT(){if(Pv)return Nd.exports;Pv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Nd.exports=sT(),Nd.exports}var e0;function uT(){if(e0)return co;e0=1;var a=lT(),r=Tf(),o=cT();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(d(e)!==e)throw Error(l(188))}function g(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var u=s.alternate;if(u===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===u.child){for(u=s.child;u;){if(u===n)return m(s),e;if(u===i)return m(s),t;u=u.sibling}throw Error(l(188))}if(n.return!==i.return)n=s,i=u;else{for(var v=!1,b=s.child;b;){if(b===n){v=!0,n=s,i=u;break}if(b===i){v=!0,i=s,n=u;break}b=b.sibling}if(!v){for(b=u.child;b;){if(b===n){v=!0,n=u,i=s;break}if(b===i){v=!0,i=u,n=s;break}b=b.sibling}if(!v)throw Error(l(189))}}if(n.alternate!==i)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function w(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=w(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,_=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),q=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),ie=Symbol.for("react.activity"),oe=Symbol.for("react.memo_cache_sentinel"),le=Symbol.iterator;function ee(e){return e===null||typeof e!="object"?null:(e=le&&e[le]||e["@@iterator"],typeof e=="function"?e:null)}var ge=Symbol.for("react.client.reference");function me(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ge?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case C:return"Profiler";case R:return"StrictMode";case Z:return"Suspense";case W:return"SuspenseList";case ie:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case q:return e.displayName||"Context";case M:return(e._context.displayName||"Context")+".Consumer";case $:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return t=e.displayName||null,t!==null?t:me(e.type)||"Memo";case fe:t=e._payload,e=e._init;try{return me(e(t))}catch{}}return null}var ke=Array.isArray,x=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U={pending:!1,data:null,method:null,action:null},Q=[],J=-1;function T(e){return{current:e}}function H(e){0>J||(e.current=Q[J],Q[J]=null,J--)}function F(e,t){J++,Q[J]=e.current,e.current=t}var I=T(null),P=T(null),re=T(null),pe=T(null);function Ue(e,t){switch(F(re,t),F(P,e),F(I,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?sg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=sg(t),e=cg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H(I),F(I,e)}function _e(){H(I),H(P),H(re)}function pt(e){e.memoizedState!==null&&F(pe,e);var t=I.current,n=cg(t,e.type);t!==n&&(F(P,e),F(I,n))}function zn(e){P.current===e&&(H(I),H(P)),pe.current===e&&(H(pe),eo._currentValue=U)}var Wn,Oa;function bn(e){if(Wn===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Wn=t&&t[1]||"",Oa=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wn+e+Oa}var Ys=!1;function Xs(e,t){if(!e||Ys)return"";Ys=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var G=function(){throw Error()};if(Object.defineProperty(G.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(G,[])}catch(Y){var B=Y}Reflect.construct(e,[],G)}else{try{G.call()}catch(Y){B=Y}e.call(G.prototype)}}else{try{throw Error()}catch(Y){B=Y}(G=e())&&typeof G.catch=="function"&&G.catch(function(){})}}catch(Y){if(Y&&B&&typeof Y.stack=="string")return[Y.stack,B.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=i.DetermineComponentFrameRoot(),v=u[0],b=u[1];if(v&&b){var E=v.split(`
`),L=b.split(`
`);for(s=i=0;i<E.length&&!E[i].includes("DetermineComponentFrameRoot");)i++;for(;s<L.length&&!L[s].includes("DetermineComponentFrameRoot");)s++;if(i===E.length||s===L.length)for(i=E.length-1,s=L.length-1;1<=i&&0<=s&&E[i]!==L[s];)s--;for(;1<=i&&0<=s;i--,s--)if(E[i]!==L[s]){if(i!==1||s!==1)do if(i--,s--,0>s||E[i]!==L[s]){var X=`
`+E[i].replace(" at new "," at ");return e.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",e.displayName)),X}while(1<=i&&0<=s);break}}}finally{Ys=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?bn(n):""}function Sy(e,t){switch(e.tag){case 26:case 27:case 5:return bn(e.type);case 16:return bn("Lazy");case 13:return e.child!==t&&t!==null?bn("Suspense Fallback"):bn("Suspense");case 19:return bn("SuspenseList");case 0:case 15:return Xs(e.type,!1);case 11:return Xs(e.type.render,!1);case 1:return Xs(e.type,!0);case 31:return bn("Activity");default:return""}}function Bf(e){try{var t="",n=null;do t+=Sy(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var qs=Object.prototype.hasOwnProperty,Vs=a.unstable_scheduleCallback,Fs=a.unstable_cancelCallback,Ty=a.unstable_shouldYield,Cy=a.unstable_requestPaint,Bt=a.unstable_now,ky=a.unstable_getCurrentPriorityLevel,Yf=a.unstable_ImmediatePriority,Xf=a.unstable_UserBlockingPriority,jo=a.unstable_NormalPriority,Ey=a.unstable_LowPriority,qf=a.unstable_IdlePriority,zy=a.log,Ny=a.unstable_setDisableYieldValue,fi=null,Yt=null;function Pn(e){if(typeof zy=="function"&&Ny(e),Yt&&typeof Yt.setStrictMode=="function")try{Yt.setStrictMode(fi,e)}catch{}}var Xt=Math.clz32?Math.clz32:Oy,Ay=Math.log,My=Math.LN2;function Oy(e){return e>>>=0,e===0?32:31-(Ay(e)/My|0)|0}var Lo=256,Bo=262144,Yo=4194304;function Da(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xo(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,u=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var b=i&134217727;return b!==0?(i=b&~u,i!==0?s=Da(i):(v&=b,v!==0?s=Da(v):n||(n=b&~e,n!==0&&(s=Da(n))))):(b=i&~u,b!==0?s=Da(b):v!==0?s=Da(v):n||(n=i&~e,n!==0&&(s=Da(n)))),s===0?0:t!==0&&t!==s&&(t&u)===0&&(u=s&-s,n=t&-t,u>=n||u===32&&(n&4194048)!==0)?t:s}function hi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Dy(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vf(){var e=Yo;return Yo<<=1,(Yo&62914560)===0&&(Yo=4194304),e}function Gs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function pi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ry(e,t,n,i,s,u){var v=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var b=e.entanglements,E=e.expirationTimes,L=e.hiddenUpdates;for(n=v&~n;0<n;){var X=31-Xt(n),G=1<<X;b[X]=0,E[X]=-1;var B=L[X];if(B!==null)for(L[X]=null,X=0;X<B.length;X++){var Y=B[X];Y!==null&&(Y.lane&=-536870913)}n&=~G}i!==0&&Ff(e,i,0),u!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=u&~(v&~t))}function Ff(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Xt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Gf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Xt(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function $f(e,t){var n=t&-t;return n=(n&42)!==0?1:$s(n),(n&(e.suspendedLanes|t))!==0?0:n}function $s(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Qs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Qf(){var e=N.p;return e!==0?e:(e=window.event,e===void 0?32:Og(e.type))}function Zf(e,t){var n=N.p;try{return N.p=e,t()}finally{N.p=n}}var ea=Math.random().toString(36).slice(2),xt="__reactFiber$"+ea,Mt="__reactProps$"+ea,dr="__reactContainer$"+ea,Zs="__reactEvents$"+ea,Uy="__reactListeners$"+ea,Hy="__reactHandles$"+ea,If="__reactResources$"+ea,mi="__reactMarker$"+ea;function Is(e){delete e[xt],delete e[Mt],delete e[Zs],delete e[Uy],delete e[Hy]}function fr(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dr]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=gg(e);e!==null;){if(n=e[xt])return n;e=gg(e)}return t}e=n,n=e.parentNode}return null}function hr(e){if(e=e[xt]||e[dr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function gi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function pr(e){var t=e[If];return t||(t=e[If]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function vt(e){e[mi]=!0}var Jf=new Set,Kf={};function Ra(e,t){mr(e,t),mr(e+"Capture",t)}function mr(e,t){for(Kf[e]=t,e=0;e<t.length;e++)Jf.add(t[e])}var jy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wf={},Pf={};function Ly(e){return qs.call(Pf,e)?!0:qs.call(Wf,e)?!1:jy.test(e)?Pf[e]=!0:(Wf[e]=!0,!1)}function qo(e,t,n){if(Ly(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Vo(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Nn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Kt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function eh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function By(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,u=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(v){n=""+v,u.call(this,v)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(v){n=""+v},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Js(e){if(!e._valueTracker){var t=eh(e)?"checked":"value";e._valueTracker=By(e,t,""+e[t])}}function th(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=eh(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Fo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Yy=/[\n"\\]/g;function Wt(e){return e.replace(Yy,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ks(e,t,n,i,s,u,v,b){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),t!=null?v==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Kt(t)):e.value!==""+Kt(t)&&(e.value=""+Kt(t)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),t!=null?Ws(e,v,Kt(t)):n!=null?Ws(e,v,Kt(n)):i!=null&&e.removeAttribute("value"),s==null&&u!=null&&(e.defaultChecked=!!u),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Kt(b):e.removeAttribute("name")}function nh(e,t,n,i,s,u,v,b){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){Js(e);return}n=n!=null?""+Kt(n):"",t=t!=null?""+Kt(t):n,b||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=b?e.checked:!!i,e.defaultChecked=!!i,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Js(e)}function Ws(e,t,n){t==="number"&&Fo(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function gr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Kt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function ah(e,t,n){if(t!=null&&(t=""+Kt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Kt(n):""}function rh(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(l(92));if(ke(i)){if(1<i.length)throw Error(l(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Kt(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Js(e)}function vr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Xy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ih(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Xy.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function oh(e,t,n){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&ih(e,s,i)}else for(var u in t)t.hasOwnProperty(u)&&ih(e,u,t[u])}function Ps(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Go(e){return Vy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function An(){}var ec=null;function tc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yr=null,br=null;function lh(e){var t=hr(e);if(t&&(e=t.stateNode)){var n=e[Mt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ks(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Wt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Mt]||null;if(!s)throw Error(l(90));Ks(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&th(i)}break e;case"textarea":ah(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&gr(e,!!n.multiple,t,!1)}}}var nc=!1;function sh(e,t,n){if(nc)return e(t,n);nc=!0;try{var i=e(t);return i}finally{if(nc=!1,(yr!==null||br!==null)&&(Ol(),yr&&(t=yr,e=br,br=yr=null,lh(t),e)))for(t=0;t<e.length;t++)lh(e[t])}}function vi(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Mt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ac=!1;if(Mn)try{var yi={};Object.defineProperty(yi,"passive",{get:function(){ac=!0}}),window.addEventListener("test",yi,yi),window.removeEventListener("test",yi,yi)}catch{ac=!1}var ta=null,rc=null,$o=null;function ch(){if($o)return $o;var e,t=rc,n=t.length,i,s="value"in ta?ta.value:ta.textContent,u=s.length;for(e=0;e<n&&t[e]===s[e];e++);var v=n-e;for(i=1;i<=v&&t[n-i]===s[u-i];i++);return $o=s.slice(e,1<i?1-i:void 0)}function Qo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zo(){return!0}function uh(){return!1}function Ot(e){function t(n,i,s,u,v){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=u,this.target=v,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(n=e[b],this[b]=n?n(u):u[b]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Zo:uh,this.isPropagationStopped=uh,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),t}var Ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Io=Ot(Ua),bi=y({},Ua,{view:0,detail:0}),Fy=Ot(bi),ic,oc,wi,Jo=y({},bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wi&&(wi&&e.type==="mousemove"?(ic=e.screenX-wi.screenX,oc=e.screenY-wi.screenY):oc=ic=0,wi=e),ic)},movementY:function(e){return"movementY"in e?e.movementY:oc}}),dh=Ot(Jo),Gy=y({},Jo,{dataTransfer:0}),$y=Ot(Gy),Qy=y({},bi,{relatedTarget:0}),lc=Ot(Qy),Zy=y({},Ua,{animationName:0,elapsedTime:0,pseudoElement:0}),Iy=Ot(Zy),Jy=y({},Ua,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ky=Ot(Jy),Wy=y({},Ua,{data:0}),fh=Ot(Wy),Py={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=tb[e])?!!t[e]:!1}function sc(){return nb}var ab=y({},bi,{key:function(e){if(e.key){var t=Py[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?eb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sc,charCode:function(e){return e.type==="keypress"?Qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rb=Ot(ab),ib=y({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hh=Ot(ib),ob=y({},bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sc}),lb=Ot(ob),sb=y({},Ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),cb=Ot(sb),ub=y({},Jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),db=Ot(ub),fb=y({},Ua,{newState:0,oldState:0}),hb=Ot(fb),pb=[9,13,27,32],cc=Mn&&"CompositionEvent"in window,xi=null;Mn&&"documentMode"in document&&(xi=document.documentMode);var mb=Mn&&"TextEvent"in window&&!xi,ph=Mn&&(!cc||xi&&8<xi&&11>=xi),mh=" ",gh=!1;function vh(e,t){switch(e){case"keyup":return pb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wr=!1;function gb(e,t){switch(e){case"compositionend":return yh(t);case"keypress":return t.which!==32?null:(gh=!0,mh);case"textInput":return e=t.data,e===mh&&gh?null:e;default:return null}}function vb(e,t){if(wr)return e==="compositionend"||!cc&&vh(e,t)?(e=ch(),$o=rc=ta=null,wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ph&&t.locale!=="ko"?null:t.data;default:return null}}var yb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yb[e.type]:t==="textarea"}function wh(e,t,n,i){yr?br?br.push(i):br=[i]:yr=i,t=Bl(t,"onChange"),0<t.length&&(n=new Io("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var _i=null,Si=null;function bb(e){ng(e,0)}function Ko(e){var t=gi(e);if(th(t))return e}function xh(e,t){if(e==="change")return t}var _h=!1;if(Mn){var uc;if(Mn){var dc="oninput"in document;if(!dc){var Sh=document.createElement("div");Sh.setAttribute("oninput","return;"),dc=typeof Sh.oninput=="function"}uc=dc}else uc=!1;_h=uc&&(!document.documentMode||9<document.documentMode)}function Th(){_i&&(_i.detachEvent("onpropertychange",Ch),Si=_i=null)}function Ch(e){if(e.propertyName==="value"&&Ko(Si)){var t=[];wh(t,Si,e,tc(e)),sh(bb,t)}}function wb(e,t,n){e==="focusin"?(Th(),_i=t,Si=n,_i.attachEvent("onpropertychange",Ch)):e==="focusout"&&Th()}function xb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ko(Si)}function _b(e,t){if(e==="click")return Ko(t)}function Sb(e,t){if(e==="input"||e==="change")return Ko(t)}function Tb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qt=typeof Object.is=="function"?Object.is:Tb;function Ti(e,t){if(qt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!qs.call(t,s)||!qt(e[s],t[s]))return!1}return!0}function kh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Eh(e,t){var n=kh(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kh(n)}}function zh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Fo(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fo(e.document)}return t}function fc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Cb=Mn&&"documentMode"in document&&11>=document.documentMode,xr=null,hc=null,Ci=null,pc=!1;function Ah(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pc||xr==null||xr!==Fo(i)||(i=xr,"selectionStart"in i&&fc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ci&&Ti(Ci,i)||(Ci=i,i=Bl(hc,"onSelect"),0<i.length&&(t=new Io("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=xr)))}function Ha(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _r={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionrun:Ha("Transition","TransitionRun"),transitionstart:Ha("Transition","TransitionStart"),transitioncancel:Ha("Transition","TransitionCancel"),transitionend:Ha("Transition","TransitionEnd")},mc={},Mh={};Mn&&(Mh=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);function ja(e){if(mc[e])return mc[e];if(!_r[e])return e;var t=_r[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Mh)return mc[e]=t[n];return e}var Oh=ja("animationend"),Dh=ja("animationiteration"),Rh=ja("animationstart"),kb=ja("transitionrun"),Eb=ja("transitionstart"),zb=ja("transitioncancel"),Uh=ja("transitionend"),Hh=new Map,gc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gc.push("scrollEnd");function un(e,t){Hh.set(e,t),Ra(t,[e])}var Wo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Pt=[],Sr=0,vc=0;function Po(){for(var e=Sr,t=vc=Sr=0;t<e;){var n=Pt[t];Pt[t++]=null;var i=Pt[t];Pt[t++]=null;var s=Pt[t];Pt[t++]=null;var u=Pt[t];if(Pt[t++]=null,i!==null&&s!==null){var v=i.pending;v===null?s.next=s:(s.next=v.next,v.next=s),i.pending=s}u!==0&&jh(n,s,u)}}function el(e,t,n,i){Pt[Sr++]=e,Pt[Sr++]=t,Pt[Sr++]=n,Pt[Sr++]=i,vc|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function yc(e,t,n,i){return el(e,t,n,i),tl(e)}function La(e,t){return el(e,null,null,t),tl(e)}function jh(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,u=e.return;u!==null;)u.childLanes|=n,i=u.alternate,i!==null&&(i.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(s=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,s&&t!==null&&(s=31-Xt(n),e=u.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),u):null}function tl(e){if(50<Qi)throw Qi=0,Eu=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Tr={};function Nb(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(e,t,n,i){return new Nb(e,t,n,i)}function bc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function On(e,t){var n=e.alternate;return n===null?(n=Vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Lh(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function nl(e,t,n,i,s,u){var v=0;if(i=e,typeof e=="function")bc(e)&&(v=1);else if(typeof e=="string")v=Rw(e,n,I.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ie:return e=Vt(31,n,t,s),e.elementType=ie,e.lanes=u,e;case z:return Ba(n.children,s,u,t);case R:v=8,s|=24;break;case C:return e=Vt(12,n,t,s|2),e.elementType=C,e.lanes=u,e;case Z:return e=Vt(13,n,t,s),e.elementType=Z,e.lanes=u,e;case W:return e=Vt(19,n,t,s),e.elementType=W,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case q:v=10;break e;case M:v=9;break e;case $:v=11;break e;case K:v=14;break e;case fe:v=16,i=null;break e}v=29,n=Error(l(130,e===null?"null":typeof e,"")),i=null}return t=Vt(v,n,t,s),t.elementType=e,t.type=i,t.lanes=u,t}function Ba(e,t,n,i){return e=Vt(7,e,i,t),e.lanes=n,e}function wc(e,t,n){return e=Vt(6,e,null,t),e.lanes=n,e}function Bh(e){var t=Vt(18,null,null,0);return t.stateNode=e,t}function xc(e,t,n){return t=Vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Yh=new WeakMap;function en(e,t){if(typeof e=="object"&&e!==null){var n=Yh.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Bf(t)},Yh.set(e,t),t)}return{value:e,source:t,stack:Bf(t)}}var Cr=[],kr=0,al=null,ki=0,tn=[],nn=0,na=null,wn=1,xn="";function Dn(e,t){Cr[kr++]=ki,Cr[kr++]=al,al=e,ki=t}function Xh(e,t,n){tn[nn++]=wn,tn[nn++]=xn,tn[nn++]=na,na=e;var i=wn;e=xn;var s=32-Xt(i)-1;i&=~(1<<s),n+=1;var u=32-Xt(t)+s;if(30<u){var v=s-s%5;u=(i&(1<<v)-1).toString(32),i>>=v,s-=v,wn=1<<32-Xt(t)+s|n<<s|i,xn=u+e}else wn=1<<u|n<<s|i,xn=e}function _c(e){e.return!==null&&(Dn(e,1),Xh(e,1,0))}function Sc(e){for(;e===al;)al=Cr[--kr],Cr[kr]=null,ki=Cr[--kr],Cr[kr]=null;for(;e===na;)na=tn[--nn],tn[nn]=null,xn=tn[--nn],tn[nn]=null,wn=tn[--nn],tn[nn]=null}function qh(e,t){tn[nn++]=wn,tn[nn++]=xn,tn[nn++]=na,wn=t.id,xn=t.overflow,na=e}var _t=null,Ze=null,Oe=!1,aa=null,an=!1,Tc=Error(l(519));function ra(e){var t=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ei(en(t,e)),Tc}function Vh(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[xt]=e,t[Mt]=i,n){case"dialog":Ne("cancel",t),Ne("close",t);break;case"iframe":case"object":case"embed":Ne("load",t);break;case"video":case"audio":for(n=0;n<Ii.length;n++)Ne(Ii[n],t);break;case"source":Ne("error",t);break;case"img":case"image":case"link":Ne("error",t),Ne("load",t);break;case"details":Ne("toggle",t);break;case"input":Ne("invalid",t),nh(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Ne("invalid",t);break;case"textarea":Ne("invalid",t),rh(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||og(t.textContent,n)?(i.popover!=null&&(Ne("beforetoggle",t),Ne("toggle",t)),i.onScroll!=null&&Ne("scroll",t),i.onScrollEnd!=null&&Ne("scrollend",t),i.onClick!=null&&(t.onclick=An),t=!0):t=!1,t||ra(e,!0)}function Fh(e){for(_t=e.return;_t;)switch(_t.tag){case 5:case 31:case 13:an=!1;return;case 27:case 3:an=!0;return;default:_t=_t.return}}function Er(e){if(e!==_t)return!1;if(!Oe)return Fh(e),Oe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||qu(e.type,e.memoizedProps)),n=!n),n&&Ze&&ra(e),Fh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Ze=mg(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Ze=mg(e)}else t===27?(t=Ze,ya(e.type)?(e=Qu,Qu=null,Ze=e):Ze=t):Ze=_t?on(e.stateNode.nextSibling):null;return!0}function Ya(){Ze=_t=null,Oe=!1}function Cc(){var e=aa;return e!==null&&(Ht===null?Ht=e:Ht.push.apply(Ht,e),aa=null),e}function Ei(e){aa===null?aa=[e]:aa.push(e)}var kc=T(null),Xa=null,Rn=null;function ia(e,t,n){F(kc,t._currentValue),t._currentValue=n}function Un(e){e._currentValue=kc.current,H(kc)}function Ec(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function zc(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var u=s.dependencies;if(u!==null){var v=s.child;u=u.firstContext;e:for(;u!==null;){var b=u;u=s;for(var E=0;E<t.length;E++)if(b.context===t[E]){u.lanes|=n,b=u.alternate,b!==null&&(b.lanes|=n),Ec(u.return,n,e),i||(v=null);break e}u=b.next}}else if(s.tag===18){if(v=s.return,v===null)throw Error(l(341));v.lanes|=n,u=v.alternate,u!==null&&(u.lanes|=n),Ec(v,n,e),v=null}else v=s.child;if(v!==null)v.return=s;else for(v=s;v!==null;){if(v===e){v=null;break}if(s=v.sibling,s!==null){s.return=v.return,v=s;break}v=v.return}s=v}}function zr(e,t,n,i){e=null;for(var s=t,u=!1;s!==null;){if(!u){if((s.flags&524288)!==0)u=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var v=s.alternate;if(v===null)throw Error(l(387));if(v=v.memoizedProps,v!==null){var b=s.type;qt(s.pendingProps.value,v.value)||(e!==null?e.push(b):e=[b])}}else if(s===pe.current){if(v=s.alternate,v===null)throw Error(l(387));v.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(eo):e=[eo])}s=s.return}e!==null&&zc(t,e,n,i),t.flags|=262144}function rl(e){for(e=e.firstContext;e!==null;){if(!qt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function qa(e){Xa=e,Rn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function St(e){return Gh(Xa,e)}function il(e,t){return Xa===null&&qa(e),Gh(e,t)}function Gh(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Rn===null){if(e===null)throw Error(l(308));Rn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Rn=Rn.next=t;return n}var Ab=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Mb=a.unstable_scheduleCallback,Ob=a.unstable_NormalPriority,st={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Nc(){return{controller:new Ab,data:new Map,refCount:0}}function zi(e){e.refCount--,e.refCount===0&&Mb(Ob,function(){e.controller.abort()})}var Ni=null,Ac=0,Nr=0,Ar=null;function Db(e,t){if(Ni===null){var n=Ni=[];Ac=0,Nr=Du(),Ar={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Ac++,t.then($h,$h),t}function $h(){if(--Ac===0&&Ni!==null){Ar!==null&&(Ar.status="fulfilled");var e=Ni;Ni=null,Nr=0,Ar=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Rb(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var Qh=x.S;x.S=function(e,t){Am=Bt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Db(e,t),Qh!==null&&Qh(e,t)};var Va=T(null);function Mc(){var e=Va.current;return e!==null?e:Ge.pooledCache}function ol(e,t){t===null?F(Va,Va.current):F(Va,t.pool)}function Zh(){var e=Mc();return e===null?null:{parent:st._currentValue,pool:e}}var Mr=Error(l(460)),Oc=Error(l(474)),ll=Error(l(542)),sl={then:function(){}};function Ih(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Jh(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(An,An),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Wh(e),e;default:if(typeof t.status=="string")t.then(An,An);else{if(e=Ge,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Wh(e),e}throw Ga=t,Mr}}function Fa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ga=n,Mr):n}}var Ga=null;function Kh(){if(Ga===null)throw Error(l(459));var e=Ga;return Ga=null,e}function Wh(e){if(e===Mr||e===ll)throw Error(l(483))}var Or=null,Ai=0;function cl(e){var t=Ai;return Ai+=1,Or===null&&(Or=[]),Jh(Or,e,t)}function Mi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ul(e,t){throw t.$$typeof===_?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ph(e){function t(D,A){if(e){var j=D.deletions;j===null?(D.deletions=[A],D.flags|=16):j.push(A)}}function n(D,A){if(!e)return null;for(;A!==null;)t(D,A),A=A.sibling;return null}function i(D){for(var A=new Map;D!==null;)D.key!==null?A.set(D.key,D):A.set(D.index,D),D=D.sibling;return A}function s(D,A){return D=On(D,A),D.index=0,D.sibling=null,D}function u(D,A,j){return D.index=j,e?(j=D.alternate,j!==null?(j=j.index,j<A?(D.flags|=67108866,A):j):(D.flags|=67108866,A)):(D.flags|=1048576,A)}function v(D){return e&&D.alternate===null&&(D.flags|=67108866),D}function b(D,A,j,V){return A===null||A.tag!==6?(A=wc(j,D.mode,V),A.return=D,A):(A=s(A,j),A.return=D,A)}function E(D,A,j,V){var de=j.type;return de===z?X(D,A,j.props.children,V,j.key):A!==null&&(A.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===fe&&Fa(de)===A.type)?(A=s(A,j.props),Mi(A,j),A.return=D,A):(A=nl(j.type,j.key,j.props,null,D.mode,V),Mi(A,j),A.return=D,A)}function L(D,A,j,V){return A===null||A.tag!==4||A.stateNode.containerInfo!==j.containerInfo||A.stateNode.implementation!==j.implementation?(A=xc(j,D.mode,V),A.return=D,A):(A=s(A,j.children||[]),A.return=D,A)}function X(D,A,j,V,de){return A===null||A.tag!==7?(A=Ba(j,D.mode,V,de),A.return=D,A):(A=s(A,j),A.return=D,A)}function G(D,A,j){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=wc(""+A,D.mode,j),A.return=D,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case S:return j=nl(A.type,A.key,A.props,null,D.mode,j),Mi(j,A),j.return=D,j;case k:return A=xc(A,D.mode,j),A.return=D,A;case fe:return A=Fa(A),G(D,A,j)}if(ke(A)||ee(A))return A=Ba(A,D.mode,j,null),A.return=D,A;if(typeof A.then=="function")return G(D,cl(A),j);if(A.$$typeof===q)return G(D,il(D,A),j);ul(D,A)}return null}function B(D,A,j,V){var de=A!==null?A.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return de!==null?null:b(D,A,""+j,V);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case S:return j.key===de?E(D,A,j,V):null;case k:return j.key===de?L(D,A,j,V):null;case fe:return j=Fa(j),B(D,A,j,V)}if(ke(j)||ee(j))return de!==null?null:X(D,A,j,V,null);if(typeof j.then=="function")return B(D,A,cl(j),V);if(j.$$typeof===q)return B(D,A,il(D,j),V);ul(D,j)}return null}function Y(D,A,j,V,de){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return D=D.get(j)||null,b(A,D,""+V,de);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case S:return D=D.get(V.key===null?j:V.key)||null,E(A,D,V,de);case k:return D=D.get(V.key===null?j:V.key)||null,L(A,D,V,de);case fe:return V=Fa(V),Y(D,A,j,V,de)}if(ke(V)||ee(V))return D=D.get(j)||null,X(A,D,V,de,null);if(typeof V.then=="function")return Y(D,A,j,cl(V),de);if(V.$$typeof===q)return Y(D,A,j,il(A,V),de);ul(A,V)}return null}function ne(D,A,j,V){for(var de=null,He=null,se=A,Se=A=0,Me=null;se!==null&&Se<j.length;Se++){se.index>Se?(Me=se,se=null):Me=se.sibling;var je=B(D,se,j[Se],V);if(je===null){se===null&&(se=Me);break}e&&se&&je.alternate===null&&t(D,se),A=u(je,A,Se),He===null?de=je:He.sibling=je,He=je,se=Me}if(Se===j.length)return n(D,se),Oe&&Dn(D,Se),de;if(se===null){for(;Se<j.length;Se++)se=G(D,j[Se],V),se!==null&&(A=u(se,A,Se),He===null?de=se:He.sibling=se,He=se);return Oe&&Dn(D,Se),de}for(se=i(se);Se<j.length;Se++)Me=Y(se,D,Se,j[Se],V),Me!==null&&(e&&Me.alternate!==null&&se.delete(Me.key===null?Se:Me.key),A=u(Me,A,Se),He===null?de=Me:He.sibling=Me,He=Me);return e&&se.forEach(function(Sa){return t(D,Sa)}),Oe&&Dn(D,Se),de}function he(D,A,j,V){if(j==null)throw Error(l(151));for(var de=null,He=null,se=A,Se=A=0,Me=null,je=j.next();se!==null&&!je.done;Se++,je=j.next()){se.index>Se?(Me=se,se=null):Me=se.sibling;var Sa=B(D,se,je.value,V);if(Sa===null){se===null&&(se=Me);break}e&&se&&Sa.alternate===null&&t(D,se),A=u(Sa,A,Se),He===null?de=Sa:He.sibling=Sa,He=Sa,se=Me}if(je.done)return n(D,se),Oe&&Dn(D,Se),de;if(se===null){for(;!je.done;Se++,je=j.next())je=G(D,je.value,V),je!==null&&(A=u(je,A,Se),He===null?de=je:He.sibling=je,He=je);return Oe&&Dn(D,Se),de}for(se=i(se);!je.done;Se++,je=j.next())je=Y(se,D,Se,je.value,V),je!==null&&(e&&je.alternate!==null&&se.delete(je.key===null?Se:je.key),A=u(je,A,Se),He===null?de=je:He.sibling=je,He=je);return e&&se.forEach(function(Gw){return t(D,Gw)}),Oe&&Dn(D,Se),de}function Fe(D,A,j,V){if(typeof j=="object"&&j!==null&&j.type===z&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case S:e:{for(var de=j.key;A!==null;){if(A.key===de){if(de=j.type,de===z){if(A.tag===7){n(D,A.sibling),V=s(A,j.props.children),V.return=D,D=V;break e}}else if(A.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===fe&&Fa(de)===A.type){n(D,A.sibling),V=s(A,j.props),Mi(V,j),V.return=D,D=V;break e}n(D,A);break}else t(D,A);A=A.sibling}j.type===z?(V=Ba(j.props.children,D.mode,V,j.key),V.return=D,D=V):(V=nl(j.type,j.key,j.props,null,D.mode,V),Mi(V,j),V.return=D,D=V)}return v(D);case k:e:{for(de=j.key;A!==null;){if(A.key===de)if(A.tag===4&&A.stateNode.containerInfo===j.containerInfo&&A.stateNode.implementation===j.implementation){n(D,A.sibling),V=s(A,j.children||[]),V.return=D,D=V;break e}else{n(D,A);break}else t(D,A);A=A.sibling}V=xc(j,D.mode,V),V.return=D,D=V}return v(D);case fe:return j=Fa(j),Fe(D,A,j,V)}if(ke(j))return ne(D,A,j,V);if(ee(j)){if(de=ee(j),typeof de!="function")throw Error(l(150));return j=de.call(j),he(D,A,j,V)}if(typeof j.then=="function")return Fe(D,A,cl(j),V);if(j.$$typeof===q)return Fe(D,A,il(D,j),V);ul(D,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,A!==null&&A.tag===6?(n(D,A.sibling),V=s(A,j),V.return=D,D=V):(n(D,A),V=wc(j,D.mode,V),V.return=D,D=V),v(D)):n(D,A)}return function(D,A,j,V){try{Ai=0;var de=Fe(D,A,j,V);return Or=null,de}catch(se){if(se===Mr||se===ll)throw se;var He=Vt(29,se,null,D.mode);return He.lanes=V,He.return=D,He}}}var $a=Ph(!0),ep=Ph(!1),oa=!1;function Dc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Rc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function la(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function sa(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Le&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=tl(e),jh(e,null,n),t}return el(e,i,t,n),tl(e)}function Oi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Gf(e,n)}}function Uc(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var v={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?s=u=v:u=u.next=v,n=n.next}while(n!==null);u===null?s=u=t:u=u.next=t}else s=u=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:u,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Hc=!1;function Di(){if(Hc){var e=Ar;if(e!==null)throw e}}function Ri(e,t,n,i){Hc=!1;var s=e.updateQueue;oa=!1;var u=s.firstBaseUpdate,v=s.lastBaseUpdate,b=s.shared.pending;if(b!==null){s.shared.pending=null;var E=b,L=E.next;E.next=null,v===null?u=L:v.next=L,v=E;var X=e.alternate;X!==null&&(X=X.updateQueue,b=X.lastBaseUpdate,b!==v&&(b===null?X.firstBaseUpdate=L:b.next=L,X.lastBaseUpdate=E))}if(u!==null){var G=s.baseState;v=0,X=L=E=null,b=u;do{var B=b.lane&-536870913,Y=B!==b.lane;if(Y?(Ae&B)===B:(i&B)===B){B!==0&&B===Nr&&(Hc=!0),X!==null&&(X=X.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var ne=e,he=b;B=t;var Fe=n;switch(he.tag){case 1:if(ne=he.payload,typeof ne=="function"){G=ne.call(Fe,G,B);break e}G=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=he.payload,B=typeof ne=="function"?ne.call(Fe,G,B):ne,B==null)break e;G=y({},G,B);break e;case 2:oa=!0}}B=b.callback,B!==null&&(e.flags|=64,Y&&(e.flags|=8192),Y=s.callbacks,Y===null?s.callbacks=[B]:Y.push(B))}else Y={lane:B,tag:b.tag,payload:b.payload,callback:b.callback,next:null},X===null?(L=X=Y,E=G):X=X.next=Y,v|=B;if(b=b.next,b===null){if(b=s.shared.pending,b===null)break;Y=b,b=Y.next,Y.next=null,s.lastBaseUpdate=Y,s.shared.pending=null}}while(!0);X===null&&(E=G),s.baseState=E,s.firstBaseUpdate=L,s.lastBaseUpdate=X,u===null&&(s.shared.lanes=0),ha|=v,e.lanes=v,e.memoizedState=G}}function tp(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function np(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)tp(n[e],t)}var Dr=T(null),dl=T(0);function ap(e,t){e=Fn,F(dl,e),F(Dr,t),Fn=e|t.baseLanes}function jc(){F(dl,Fn),F(Dr,Dr.current)}function Lc(){Fn=dl.current,H(Dr),H(dl)}var Ft=T(null),rn=null;function ca(e){var t=e.alternate;F(at,at.current&1),F(Ft,e),rn===null&&(t===null||Dr.current!==null||t.memoizedState!==null)&&(rn=e)}function Bc(e){F(at,at.current),F(Ft,e),rn===null&&(rn=e)}function rp(e){e.tag===22?(F(at,at.current),F(Ft,e),rn===null&&(rn=e)):ua()}function ua(){F(at,at.current),F(Ft,Ft.current)}function Gt(e){H(Ft),rn===e&&(rn=null),H(at)}var at=T(0);function fl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Gu(n)||$u(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hn=0,xe=null,qe=null,ct=null,hl=!1,Rr=!1,Qa=!1,pl=0,Ui=0,Ur=null,Ub=0;function et(){throw Error(l(321))}function Yc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qt(e[n],t[n]))return!1;return!0}function Xc(e,t,n,i,s,u){return Hn=u,xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,x.H=e===null||e.memoizedState===null?Xp:nu,Qa=!1,u=n(i,s),Qa=!1,Rr&&(u=op(t,n,i,s)),ip(e),u}function ip(e){x.H=Li;var t=qe!==null&&qe.next!==null;if(Hn=0,ct=qe=xe=null,hl=!1,Ui=0,Ur=null,t)throw Error(l(300));e===null||ut||(e=e.dependencies,e!==null&&rl(e)&&(ut=!0))}function op(e,t,n,i){xe=e;var s=0;do{if(Rr&&(Ur=null),Ui=0,Rr=!1,25<=s)throw Error(l(301));if(s+=1,ct=qe=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}x.H=qp,u=t(n,i)}while(Rr);return u}function Hb(){var e=x.H,t=e.useState()[0];return t=typeof t.then=="function"?Hi(t):t,e=e.useState()[0],(qe!==null?qe.memoizedState:null)!==e&&(xe.flags|=1024),t}function qc(){var e=pl!==0;return pl=0,e}function Vc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Fc(e){if(hl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}hl=!1}Hn=0,ct=qe=xe=null,Rr=!1,Ui=pl=0,Ur=null}function Nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?xe.memoizedState=ct=e:ct=ct.next=e,ct}function rt(){if(qe===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var t=ct===null?xe.memoizedState:ct.next;if(t!==null)ct=t,qe=e;else{if(e===null)throw xe.alternate===null?Error(l(467)):Error(l(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},ct===null?xe.memoizedState=ct=e:ct=ct.next=e}return ct}function ml(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Hi(e){var t=Ui;return Ui+=1,Ur===null&&(Ur=[]),e=Jh(Ur,e,t),t=xe,(ct===null?t.memoizedState:ct.next)===null&&(t=t.alternate,x.H=t===null||t.memoizedState===null?Xp:nu),e}function gl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Hi(e);if(e.$$typeof===q)return St(e)}throw Error(l(438,String(e)))}function Gc(e){var t=null,n=xe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=xe.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ml(),xe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=oe;return t.index++,n}function jn(e,t){return typeof t=="function"?t(e):t}function vl(e){var t=rt();return $c(t,qe,e)}function $c(e,t,n){var i=e.queue;if(i===null)throw Error(l(311));i.lastRenderedReducer=n;var s=e.baseQueue,u=i.pending;if(u!==null){if(s!==null){var v=s.next;s.next=u.next,u.next=v}t.baseQueue=s=u,i.pending=null}if(u=e.baseState,s===null)e.memoizedState=u;else{t=s.next;var b=v=null,E=null,L=t,X=!1;do{var G=L.lane&-536870913;if(G!==L.lane?(Ae&G)===G:(Hn&G)===G){var B=L.revertLane;if(B===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),G===Nr&&(X=!0);else if((Hn&B)===B){L=L.next,B===Nr&&(X=!0);continue}else G={lane:0,revertLane:L.revertLane,gesture:null,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},E===null?(b=E=G,v=u):E=E.next=G,xe.lanes|=B,ha|=B;G=L.action,Qa&&n(u,G),u=L.hasEagerState?L.eagerState:n(u,G)}else B={lane:G,revertLane:L.revertLane,gesture:L.gesture,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},E===null?(b=E=B,v=u):E=E.next=B,xe.lanes|=G,ha|=G;L=L.next}while(L!==null&&L!==t);if(E===null?v=u:E.next=b,!qt(u,e.memoizedState)&&(ut=!0,X&&(n=Ar,n!==null)))throw n;e.memoizedState=u,e.baseState=v,e.baseQueue=E,i.lastRenderedState=u}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Qc(e){var t=rt(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,u=t.memoizedState;if(s!==null){n.pending=null;var v=s=s.next;do u=e(u,v.action),v=v.next;while(v!==s);qt(u,t.memoizedState)||(ut=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,i]}function lp(e,t,n){var i=xe,s=rt(),u=Oe;if(u){if(n===void 0)throw Error(l(407));n=n()}else n=t();var v=!qt((qe||s).memoizedState,n);if(v&&(s.memoizedState=n,ut=!0),s=s.queue,Jc(up.bind(null,i,s,e),[e]),s.getSnapshot!==t||v||ct!==null&&ct.memoizedState.tag&1){if(i.flags|=2048,Hr(9,{destroy:void 0},cp.bind(null,i,s,n,t),null),Ge===null)throw Error(l(349));u||(Hn&127)!==0||sp(i,t,n)}return n}function sp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=xe.updateQueue,t===null?(t=ml(),xe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cp(e,t,n,i){t.value=n,t.getSnapshot=i,dp(t)&&fp(e)}function up(e,t,n){return n(function(){dp(t)&&fp(e)})}function dp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qt(e,n)}catch{return!0}}function fp(e){var t=La(e,2);t!==null&&jt(t,e,2)}function Zc(e){var t=Nt();if(typeof e=="function"){var n=e;if(e=n(),Qa){Pn(!0);try{n()}finally{Pn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:e},t}function hp(e,t,n,i){return e.baseState=n,$c(e,qe,typeof i=="function"?i:jn)}function jb(e,t,n,i,s){if(wl(e))throw Error(l(485));if(e=t.action,e!==null){var u={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){u.listeners.push(v)}};x.T!==null?n(!0):u.isTransition=!1,i(u),n=t.pending,n===null?(u.next=t.pending=u,pp(t,u)):(u.next=n.next,t.pending=n.next=u)}}function pp(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var u=x.T,v={};x.T=v;try{var b=n(s,i),E=x.S;E!==null&&E(v,b),mp(e,t,b)}catch(L){Ic(e,t,L)}finally{u!==null&&v.types!==null&&(u.types=v.types),x.T=u}}else try{u=n(s,i),mp(e,t,u)}catch(L){Ic(e,t,L)}}function mp(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){gp(e,t,i)},function(i){return Ic(e,t,i)}):gp(e,t,n)}function gp(e,t,n){t.status="fulfilled",t.value=n,vp(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,pp(e,n)))}function Ic(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,vp(t),t=t.next;while(t!==i)}e.action=null}function vp(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function yp(e,t){return t}function bp(e,t){if(Oe){var n=Ge.formState;if(n!==null){e:{var i=xe;if(Oe){if(Ze){t:{for(var s=Ze,u=an;s.nodeType!==8;){if(!u){s=null;break t}if(s=on(s.nextSibling),s===null){s=null;break t}}u=s.data,s=u==="F!"||u==="F"?s:null}if(s){Ze=on(s.nextSibling),i=s.data==="F!";break e}}ra(i)}i=!1}i&&(t=n[0])}}return n=Nt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yp,lastRenderedState:t},n.queue=i,n=Lp.bind(null,xe,i),i.dispatch=n,i=Zc(!1),u=tu.bind(null,xe,!1,i.queue),i=Nt(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=jb.bind(null,xe,s,u,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function wp(e){var t=rt();return xp(t,qe,e)}function xp(e,t,n){if(t=$c(e,t,yp)[0],e=vl(jn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Hi(t)}catch(v){throw v===Mr?ll:v}else i=t;t=rt();var s=t.queue,u=s.dispatch;return n!==t.memoizedState&&(xe.flags|=2048,Hr(9,{destroy:void 0},Lb.bind(null,s,n),null)),[i,u,e]}function Lb(e,t){e.action=t}function _p(e){var t=rt(),n=qe;if(n!==null)return xp(t,n,e);rt(),t=t.memoizedState,n=rt();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Hr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=xe.updateQueue,t===null&&(t=ml(),xe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Sp(){return rt().memoizedState}function yl(e,t,n,i){var s=Nt();xe.flags|=e,s.memoizedState=Hr(1|t,{destroy:void 0},n,i===void 0?null:i)}function bl(e,t,n,i){var s=rt();i=i===void 0?null:i;var u=s.memoizedState.inst;qe!==null&&i!==null&&Yc(i,qe.memoizedState.deps)?s.memoizedState=Hr(t,u,n,i):(xe.flags|=e,s.memoizedState=Hr(1|t,u,n,i))}function Tp(e,t){yl(8390656,8,e,t)}function Jc(e,t){bl(2048,8,e,t)}function Bb(e){xe.flags|=4;var t=xe.updateQueue;if(t===null)t=ml(),xe.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Cp(e){var t=rt().memoizedState;return Bb({ref:t,nextImpl:e}),function(){if((Le&2)!==0)throw Error(l(440));return t.impl.apply(void 0,arguments)}}function kp(e,t){return bl(4,2,e,t)}function Ep(e,t){return bl(4,4,e,t)}function zp(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Np(e,t,n){n=n!=null?n.concat([e]):null,bl(4,4,zp.bind(null,t,e),n)}function Kc(){}function Ap(e,t){var n=rt();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Yc(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Mp(e,t){var n=rt();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Yc(t,i[1]))return i[0];if(i=e(),Qa){Pn(!0);try{e()}finally{Pn(!1)}}return n.memoizedState=[i,t],i}function Wc(e,t,n){return n===void 0||(Hn&1073741824)!==0&&(Ae&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Om(),xe.lanes|=e,ha|=e,n)}function Op(e,t,n,i){return qt(n,t)?n:Dr.current!==null?(e=Wc(e,n,i),qt(e,t)||(ut=!0),e):(Hn&42)===0||(Hn&1073741824)!==0&&(Ae&261930)===0?(ut=!0,e.memoizedState=n):(e=Om(),xe.lanes|=e,ha|=e,t)}function Dp(e,t,n,i,s){var u=N.p;N.p=u!==0&&8>u?u:8;var v=x.T,b={};x.T=b,tu(e,!1,t,n);try{var E=s(),L=x.S;if(L!==null&&L(b,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var X=Rb(E,i);ji(e,t,X,Zt(e))}else ji(e,t,i,Zt(e))}catch(G){ji(e,t,{then:function(){},status:"rejected",reason:G},Zt())}finally{N.p=u,v!==null&&b.types!==null&&(v.types=b.types),x.T=v}}function Yb(){}function Pc(e,t,n,i){if(e.tag!==5)throw Error(l(476));var s=Rp(e).queue;Dp(e,s,t,U,n===null?Yb:function(){return Up(e),n(i)})}function Rp(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:U,baseState:U,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:U},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Up(e){var t=Rp(e);t.next===null&&(t=e.alternate.memoizedState),ji(e,t.next.queue,{},Zt())}function eu(){return St(eo)}function Hp(){return rt().memoizedState}function jp(){return rt().memoizedState}function Xb(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Zt();e=la(n);var i=sa(t,e,n);i!==null&&(jt(i,t,n),Oi(i,t,n)),t={cache:Nc()},e.payload=t;return}t=t.return}}function qb(e,t,n){var i=Zt();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},wl(e)?Bp(t,n):(n=yc(e,t,n,i),n!==null&&(jt(n,e,i),Yp(n,t,i)))}function Lp(e,t,n){var i=Zt();ji(e,t,n,i)}function ji(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(wl(e))Bp(t,s);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var v=t.lastRenderedState,b=u(v,n);if(s.hasEagerState=!0,s.eagerState=b,qt(b,v))return el(e,t,s,0),Ge===null&&Po(),!1}catch{}if(n=yc(e,t,s,i),n!==null)return jt(n,e,i),Yp(n,t,i),!0}return!1}function tu(e,t,n,i){if(i={lane:2,revertLane:Du(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},wl(e)){if(t)throw Error(l(479))}else t=yc(e,n,i,2),t!==null&&jt(t,e,2)}function wl(e){var t=e.alternate;return e===xe||t!==null&&t===xe}function Bp(e,t){Rr=hl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Yp(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Gf(e,n)}}var Li={readContext:St,use:gl,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useLayoutEffect:et,useInsertionEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useSyncExternalStore:et,useId:et,useHostTransitionStatus:et,useFormState:et,useActionState:et,useOptimistic:et,useMemoCache:et,useCacheRefresh:et};Li.useEffectEvent=et;var Xp={readContext:St,use:gl,useCallback:function(e,t){return Nt().memoizedState=[e,t===void 0?null:t],e},useContext:St,useEffect:Tp,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,yl(4194308,4,zp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return yl(4194308,4,e,t)},useInsertionEffect:function(e,t){yl(4,2,e,t)},useMemo:function(e,t){var n=Nt();t=t===void 0?null:t;var i=e();if(Qa){Pn(!0);try{e()}finally{Pn(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Nt();if(n!==void 0){var s=n(t);if(Qa){Pn(!0);try{n(t)}finally{Pn(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=qb.bind(null,xe,e),[i.memoizedState,e]},useRef:function(e){var t=Nt();return e={current:e},t.memoizedState=e},useState:function(e){e=Zc(e);var t=e.queue,n=Lp.bind(null,xe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Kc,useDeferredValue:function(e,t){var n=Nt();return Wc(n,e,t)},useTransition:function(){var e=Zc(!1);return e=Dp.bind(null,xe,e.queue,!0,!1),Nt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=xe,s=Nt();if(Oe){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),Ge===null)throw Error(l(349));(Ae&127)!==0||sp(i,t,n)}s.memoizedState=n;var u={value:n,getSnapshot:t};return s.queue=u,Tp(up.bind(null,i,u,e),[e]),i.flags|=2048,Hr(9,{destroy:void 0},cp.bind(null,i,u,n,t),null),n},useId:function(){var e=Nt(),t=Ge.identifierPrefix;if(Oe){var n=xn,i=wn;n=(i&~(1<<32-Xt(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=pl++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Ub++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:eu,useFormState:bp,useActionState:bp,useOptimistic:function(e){var t=Nt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=tu.bind(null,xe,!0,n),n.dispatch=t,[e,t]},useMemoCache:Gc,useCacheRefresh:function(){return Nt().memoizedState=Xb.bind(null,xe)},useEffectEvent:function(e){var t=Nt(),n={impl:e};return t.memoizedState=n,function(){if((Le&2)!==0)throw Error(l(440));return n.impl.apply(void 0,arguments)}}},nu={readContext:St,use:gl,useCallback:Ap,useContext:St,useEffect:Jc,useImperativeHandle:Np,useInsertionEffect:kp,useLayoutEffect:Ep,useMemo:Mp,useReducer:vl,useRef:Sp,useState:function(){return vl(jn)},useDebugValue:Kc,useDeferredValue:function(e,t){var n=rt();return Op(n,qe.memoizedState,e,t)},useTransition:function(){var e=vl(jn)[0],t=rt().memoizedState;return[typeof e=="boolean"?e:Hi(e),t]},useSyncExternalStore:lp,useId:Hp,useHostTransitionStatus:eu,useFormState:wp,useActionState:wp,useOptimistic:function(e,t){var n=rt();return hp(n,qe,e,t)},useMemoCache:Gc,useCacheRefresh:jp};nu.useEffectEvent=Cp;var qp={readContext:St,use:gl,useCallback:Ap,useContext:St,useEffect:Jc,useImperativeHandle:Np,useInsertionEffect:kp,useLayoutEffect:Ep,useMemo:Mp,useReducer:Qc,useRef:Sp,useState:function(){return Qc(jn)},useDebugValue:Kc,useDeferredValue:function(e,t){var n=rt();return qe===null?Wc(n,e,t):Op(n,qe.memoizedState,e,t)},useTransition:function(){var e=Qc(jn)[0],t=rt().memoizedState;return[typeof e=="boolean"?e:Hi(e),t]},useSyncExternalStore:lp,useId:Hp,useHostTransitionStatus:eu,useFormState:_p,useActionState:_p,useOptimistic:function(e,t){var n=rt();return qe!==null?hp(n,qe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Gc,useCacheRefresh:jp};qp.useEffectEvent=Cp;function au(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ru={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Zt(),s=la(i);s.payload=t,n!=null&&(s.callback=n),t=sa(e,s,i),t!==null&&(jt(t,e,i),Oi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Zt(),s=la(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=sa(e,s,i),t!==null&&(jt(t,e,i),Oi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Zt(),i=la(n);i.tag=2,t!=null&&(i.callback=t),t=sa(e,i,n),t!==null&&(jt(t,e,n),Oi(t,e,n))}};function Vp(e,t,n,i,s,u,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,u,v):t.prototype&&t.prototype.isPureReactComponent?!Ti(n,i)||!Ti(s,u):!0}function Fp(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&ru.enqueueReplaceState(t,t.state,null)}function Za(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=y({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function Gp(e){Wo(e)}function $p(e){console.error(e)}function Qp(e){Wo(e)}function xl(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Zp(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function iu(e,t,n){return n=la(n),n.tag=3,n.payload={element:null},n.callback=function(){xl(e,t)},n}function Ip(e){return e=la(e),e.tag=3,e}function Jp(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var u=i.value;e.payload=function(){return s(u)},e.callback=function(){Zp(t,n,i)}}var v=n.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Zp(t,n,i),typeof s!="function"&&(pa===null?pa=new Set([this]):pa.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})})}function Vb(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&zr(t,n,s,!0),n=Ft.current,n!==null){switch(n.tag){case 31:case 13:return rn===null?Dl():n.alternate===null&&tt===0&&(tt=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===sl?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Au(e,i,s)),!1;case 22:return n.flags|=65536,i===sl?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Au(e,i,s)),!1}throw Error(l(435,n.tag))}return Au(e,i,s),Dl(),!1}if(Oe)return t=Ft.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==Tc&&(e=Error(l(422),{cause:i}),Ei(en(e,n)))):(i!==Tc&&(t=Error(l(423),{cause:i}),Ei(en(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=en(i,n),s=iu(e.stateNode,i,s),Uc(e,s),tt!==4&&(tt=2)),!1;var u=Error(l(520),{cause:i});if(u=en(u,n),$i===null?$i=[u]:$i.push(u),tt!==4&&(tt=2),t===null)return!0;i=en(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=iu(n.stateNode,i,e),Uc(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(pa===null||!pa.has(u))))return n.flags|=65536,s&=-s,n.lanes|=s,s=Ip(s),Jp(s,e,n,i),Uc(n,s),!1}n=n.return}while(n!==null);return!1}var ou=Error(l(461)),ut=!1;function Tt(e,t,n,i){t.child=e===null?ep(t,null,n,i):$a(t,e.child,n,i)}function Kp(e,t,n,i,s){n=n.render;var u=t.ref;if("ref"in i){var v={};for(var b in i)b!=="ref"&&(v[b]=i[b])}else v=i;return qa(t),i=Xc(e,t,n,v,u,s),b=qc(),e!==null&&!ut?(Vc(e,t,s),Ln(e,t,s)):(Oe&&b&&_c(t),t.flags|=1,Tt(e,t,i,s),t.child)}function Wp(e,t,n,i,s){if(e===null){var u=n.type;return typeof u=="function"&&!bc(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,Pp(e,t,u,i,s)):(e=nl(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!pu(e,s)){var v=u.memoizedProps;if(n=n.compare,n=n!==null?n:Ti,n(v,i)&&e.ref===t.ref)return Ln(e,t,s)}return t.flags|=1,e=On(u,i),e.ref=t.ref,e.return=t,t.child=e}function Pp(e,t,n,i,s){if(e!==null){var u=e.memoizedProps;if(Ti(u,i)&&e.ref===t.ref)if(ut=!1,t.pendingProps=i=u,pu(e,s))(e.flags&131072)!==0&&(ut=!0);else return t.lanes=e.lanes,Ln(e,t,s)}return lu(e,t,n,i,s)}function em(e,t,n,i){var s=i.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~u}else i=0,t.child=null;return tm(e,t,u,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ol(t,u!==null?u.cachePool:null),u!==null?ap(t,u):jc(),rp(t);else return i=t.lanes=536870912,tm(e,t,u!==null?u.baseLanes|n:n,n,i)}else u!==null?(ol(t,u.cachePool),ap(t,u),ua(),t.memoizedState=null):(e!==null&&ol(t,null),jc(),ua());return Tt(e,t,s,n),t.child}function Bi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function tm(e,t,n,i,s){var u=Mc();return u=u===null?null:{parent:st._currentValue,pool:u},t.memoizedState={baseLanes:n,cachePool:u},e!==null&&ol(t,null),jc(),rp(t),e!==null&&zr(e,t,i,!0),t.childLanes=s,null}function _l(e,t){return t=Tl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function nm(e,t,n){return $a(t,e.child,null,n),e=_l(t,t.pendingProps),e.flags|=2,Gt(t),t.memoizedState=null,e}function Fb(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Oe){if(i.mode==="hidden")return e=_l(t,i),t.lanes=536870912,Bi(null,e);if(Bc(t),(e=Ze)?(e=pg(e,an),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:na!==null?{id:wn,overflow:xn}:null,retryLane:536870912,hydrationErrors:null},n=Bh(e),n.return=t,t.child=n,_t=t,Ze=null)):e=null,e===null)throw ra(t);return t.lanes=536870912,null}return _l(t,i)}var u=e.memoizedState;if(u!==null){var v=u.dehydrated;if(Bc(t),s)if(t.flags&256)t.flags&=-257,t=nm(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(l(558));else if(ut||zr(e,t,n,!1),s=(n&e.childLanes)!==0,ut||s){if(i=Ge,i!==null&&(v=$f(i,n),v!==0&&v!==u.retryLane))throw u.retryLane=v,La(e,v),jt(i,e,v),ou;Dl(),t=nm(e,t,n)}else e=u.treeContext,Ze=on(v.nextSibling),_t=t,Oe=!0,aa=null,an=!1,e!==null&&qh(t,e),t=_l(t,i),t.flags|=4096;return t}return e=On(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Sl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(l(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function lu(e,t,n,i,s){return qa(t),n=Xc(e,t,n,i,void 0,s),i=qc(),e!==null&&!ut?(Vc(e,t,s),Ln(e,t,s)):(Oe&&i&&_c(t),t.flags|=1,Tt(e,t,n,s),t.child)}function am(e,t,n,i,s,u){return qa(t),t.updateQueue=null,n=op(t,i,n,s),ip(e),i=qc(),e!==null&&!ut?(Vc(e,t,u),Ln(e,t,u)):(Oe&&i&&_c(t),t.flags|=1,Tt(e,t,n,u),t.child)}function rm(e,t,n,i,s){if(qa(t),t.stateNode===null){var u=Tr,v=n.contextType;typeof v=="object"&&v!==null&&(u=St(v)),u=new n(i,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=ru,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=i,u.state=t.memoizedState,u.refs={},Dc(t),v=n.contextType,u.context=typeof v=="object"&&v!==null?St(v):Tr,u.state=t.memoizedState,v=n.getDerivedStateFromProps,typeof v=="function"&&(au(t,n,v,i),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(v=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),v!==u.state&&ru.enqueueReplaceState(u,u.state,null),Ri(t,i,u,s),Di(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){u=t.stateNode;var b=t.memoizedProps,E=Za(n,b);u.props=E;var L=u.context,X=n.contextType;v=Tr,typeof X=="object"&&X!==null&&(v=St(X));var G=n.getDerivedStateFromProps;X=typeof G=="function"||typeof u.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,X||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(b||L!==v)&&Fp(t,u,i,v),oa=!1;var B=t.memoizedState;u.state=B,Ri(t,i,u,s),Di(),L=t.memoizedState,b||B!==L||oa?(typeof G=="function"&&(au(t,n,G,i),L=t.memoizedState),(E=oa||Vp(t,n,E,i,B,L,v))?(X||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=L),u.props=i,u.state=L,u.context=v,i=E):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{u=t.stateNode,Rc(e,t),v=t.memoizedProps,X=Za(n,v),u.props=X,G=t.pendingProps,B=u.context,L=n.contextType,E=Tr,typeof L=="object"&&L!==null&&(E=St(L)),b=n.getDerivedStateFromProps,(L=typeof b=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(v!==G||B!==E)&&Fp(t,u,i,E),oa=!1,B=t.memoizedState,u.state=B,Ri(t,i,u,s),Di();var Y=t.memoizedState;v!==G||B!==Y||oa||e!==null&&e.dependencies!==null&&rl(e.dependencies)?(typeof b=="function"&&(au(t,n,b,i),Y=t.memoizedState),(X=oa||Vp(t,n,X,i,B,Y,E)||e!==null&&e.dependencies!==null&&rl(e.dependencies))?(L||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(i,Y,E),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(i,Y,E)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||v===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=Y),u.props=i,u.state=Y,u.context=E,i=X):(typeof u.componentDidUpdate!="function"||v===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),i=!1)}return u=i,Sl(e,t),i=(t.flags&128)!==0,u||i?(u=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&i?(t.child=$a(t,e.child,null,s),t.child=$a(t,null,n,s)):Tt(e,t,n,s),t.memoizedState=u.state,e=t.child):e=Ln(e,t,s),e}function im(e,t,n,i){return Ya(),t.flags|=256,Tt(e,t,n,i),t.child}var su={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cu(e){return{baseLanes:e,cachePool:Zh()}}function uu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Qt),e}function om(e,t,n){var i=t.pendingProps,s=!1,u=(t.flags&128)!==0,v;if((v=u)||(v=e!==null&&e.memoizedState===null?!1:(at.current&2)!==0),v&&(s=!0,t.flags&=-129),v=(t.flags&32)!==0,t.flags&=-33,e===null){if(Oe){if(s?ca(t):ua(),(e=Ze)?(e=pg(e,an),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:na!==null?{id:wn,overflow:xn}:null,retryLane:536870912,hydrationErrors:null},n=Bh(e),n.return=t,t.child=n,_t=t,Ze=null)):e=null,e===null)throw ra(t);return $u(e)?t.lanes=32:t.lanes=536870912,null}var b=i.children;return i=i.fallback,s?(ua(),s=t.mode,b=Tl({mode:"hidden",children:b},s),i=Ba(i,s,n,null),b.return=t,i.return=t,b.sibling=i,t.child=b,i=t.child,i.memoizedState=cu(n),i.childLanes=uu(e,v,n),t.memoizedState=su,Bi(null,i)):(ca(t),du(t,b))}var E=e.memoizedState;if(E!==null&&(b=E.dehydrated,b!==null)){if(u)t.flags&256?(ca(t),t.flags&=-257,t=fu(e,t,n)):t.memoizedState!==null?(ua(),t.child=e.child,t.flags|=128,t=null):(ua(),b=i.fallback,s=t.mode,i=Tl({mode:"visible",children:i.children},s),b=Ba(b,s,n,null),b.flags|=2,i.return=t,b.return=t,i.sibling=b,t.child=i,$a(t,e.child,null,n),i=t.child,i.memoizedState=cu(n),i.childLanes=uu(e,v,n),t.memoizedState=su,t=Bi(null,i));else if(ca(t),$u(b)){if(v=b.nextSibling&&b.nextSibling.dataset,v)var L=v.dgst;v=L,i=Error(l(419)),i.stack="",i.digest=v,Ei({value:i,source:null,stack:null}),t=fu(e,t,n)}else if(ut||zr(e,t,n,!1),v=(n&e.childLanes)!==0,ut||v){if(v=Ge,v!==null&&(i=$f(v,n),i!==0&&i!==E.retryLane))throw E.retryLane=i,La(e,i),jt(v,e,i),ou;Gu(b)||Dl(),t=fu(e,t,n)}else Gu(b)?(t.flags|=192,t.child=e.child,t=null):(e=E.treeContext,Ze=on(b.nextSibling),_t=t,Oe=!0,aa=null,an=!1,e!==null&&qh(t,e),t=du(t,i.children),t.flags|=4096);return t}return s?(ua(),b=i.fallback,s=t.mode,E=e.child,L=E.sibling,i=On(E,{mode:"hidden",children:i.children}),i.subtreeFlags=E.subtreeFlags&65011712,L!==null?b=On(L,b):(b=Ba(b,s,n,null),b.flags|=2),b.return=t,i.return=t,i.sibling=b,t.child=i,Bi(null,i),i=t.child,b=e.child.memoizedState,b===null?b=cu(n):(s=b.cachePool,s!==null?(E=st._currentValue,s=s.parent!==E?{parent:E,pool:E}:s):s=Zh(),b={baseLanes:b.baseLanes|n,cachePool:s}),i.memoizedState=b,i.childLanes=uu(e,v,n),t.memoizedState=su,Bi(e.child,i)):(ca(t),n=e.child,e=n.sibling,n=On(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(v=t.deletions,v===null?(t.deletions=[e],t.flags|=16):v.push(e)),t.child=n,t.memoizedState=null,n)}function du(e,t){return t=Tl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Tl(e,t){return e=Vt(22,e,null,t),e.lanes=0,e}function fu(e,t,n){return $a(t,e.child,null,n),e=du(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lm(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Ec(e.return,t,n)}function hu(e,t,n,i,s,u){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:u}:(v.isBackwards=t,v.rendering=null,v.renderingStartTime=0,v.last=i,v.tail=n,v.tailMode=s,v.treeForkCount=u)}function sm(e,t,n){var i=t.pendingProps,s=i.revealOrder,u=i.tail;i=i.children;var v=at.current,b=(v&2)!==0;if(b?(v=v&1|2,t.flags|=128):v&=1,F(at,v),Tt(e,t,i,n),i=Oe?ki:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lm(e,n,t);else if(e.tag===19)lm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&fl(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),hu(t,!1,s,n,u,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&fl(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}hu(t,!0,n,null,u,i);break;case"together":hu(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ha|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(zr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=On(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=On(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&rl(e)))}function Gb(e,t,n){switch(t.tag){case 3:Ue(t,t.stateNode.containerInfo),ia(t,st,e.memoizedState.cache),Ya();break;case 27:case 5:pt(t);break;case 4:Ue(t,t.stateNode.containerInfo);break;case 10:ia(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Bc(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(ca(t),t.flags|=128,null):(n&t.child.childLanes)!==0?om(e,t,n):(ca(t),e=Ln(e,t,n),e!==null?e.sibling:null);ca(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(zr(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return sm(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),F(at,at.current),i)break;return null;case 22:return t.lanes=0,em(e,t,n,t.pendingProps);case 24:ia(t,st,e.memoizedState.cache)}return Ln(e,t,n)}function cm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ut=!0;else{if(!pu(e,n)&&(t.flags&128)===0)return ut=!1,Gb(e,t,n);ut=(e.flags&131072)!==0}else ut=!1,Oe&&(t.flags&1048576)!==0&&Xh(t,ki,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=Fa(t.elementType),t.type=e,typeof e=="function")bc(e)?(i=Za(e,i),t.tag=1,t=rm(null,t,e,i,n)):(t.tag=0,t=lu(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===$){t.tag=11,t=Kp(null,t,e,i,n);break e}else if(s===K){t.tag=14,t=Wp(null,t,e,i,n);break e}}throw t=me(e)||e,Error(l(306,t,""))}}return t;case 0:return lu(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=Za(i,t.pendingProps),rm(e,t,i,s,n);case 3:e:{if(Ue(t,t.stateNode.containerInfo),e===null)throw Error(l(387));i=t.pendingProps;var u=t.memoizedState;s=u.element,Rc(e,t),Ri(t,i,null,n);var v=t.memoizedState;if(i=v.cache,ia(t,st,i),i!==u.cache&&zc(t,[st],n,!0),Di(),i=v.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:v.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=im(e,t,i,n);break e}else if(i!==s){s=en(Error(l(424)),t),Ei(s),t=im(e,t,i,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ze=on(e.firstChild),_t=t,Oe=!0,aa=null,an=!0,n=ep(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ya(),i===s){t=Ln(e,t,n);break e}Tt(e,t,i,n)}t=t.child}return t;case 26:return Sl(e,t),e===null?(n=wg(t.type,null,t.pendingProps,null))?t.memoizedState=n:Oe||(n=t.type,e=t.pendingProps,i=Yl(re.current).createElement(n),i[xt]=t,i[Mt]=e,Ct(i,n,e),vt(i),t.stateNode=i):t.memoizedState=wg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return pt(t),e===null&&Oe&&(i=t.stateNode=vg(t.type,t.pendingProps,re.current),_t=t,an=!0,s=Ze,ya(t.type)?(Qu=s,Ze=on(i.firstChild)):Ze=s),Tt(e,t,t.pendingProps.children,n),Sl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Oe&&((s=i=Ze)&&(i=xw(i,t.type,t.pendingProps,an),i!==null?(t.stateNode=i,_t=t,Ze=on(i.firstChild),an=!1,s=!0):s=!1),s||ra(t)),pt(t),s=t.type,u=t.pendingProps,v=e!==null?e.memoizedProps:null,i=u.children,qu(s,u)?i=null:v!==null&&qu(s,v)&&(t.flags|=32),t.memoizedState!==null&&(s=Xc(e,t,Hb,null,null,n),eo._currentValue=s),Sl(e,t),Tt(e,t,i,n),t.child;case 6:return e===null&&Oe&&((e=n=Ze)&&(n=_w(n,t.pendingProps,an),n!==null?(t.stateNode=n,_t=t,Ze=null,e=!0):e=!1),e||ra(t)),null;case 13:return om(e,t,n);case 4:return Ue(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=$a(t,null,i,n):Tt(e,t,i,n),t.child;case 11:return Kp(e,t,t.type,t.pendingProps,n);case 7:return Tt(e,t,t.pendingProps,n),t.child;case 8:return Tt(e,t,t.pendingProps.children,n),t.child;case 12:return Tt(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,ia(t,t.type,i.value),Tt(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,qa(t),s=St(s),i=i(s),t.flags|=1,Tt(e,t,i,n),t.child;case 14:return Wp(e,t,t.type,t.pendingProps,n);case 15:return Pp(e,t,t.type,t.pendingProps,n);case 19:return sm(e,t,n);case 31:return Fb(e,t,n);case 22:return em(e,t,n,t.pendingProps);case 24:return qa(t),i=St(st),e===null?(s=Mc(),s===null&&(s=Ge,u=Nc(),s.pooledCache=u,u.refCount++,u!==null&&(s.pooledCacheLanes|=n),s=u),t.memoizedState={parent:i,cache:s},Dc(t),ia(t,st,s)):((e.lanes&n)!==0&&(Rc(e,t),Ri(t,null,null,n),Di()),s=e.memoizedState,u=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),ia(t,st,i)):(i=u.cache,ia(t,st,i),i!==s.cache&&zc(t,[st],n,!0))),Tt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function Bn(e){e.flags|=4}function mu(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(Hm())e.flags|=8192;else throw Ga=sl,Oc}else e.flags&=-16777217}function um(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Cg(t))if(Hm())e.flags|=8192;else throw Ga=sl,Oc}function Cl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Vf():536870912,e.lanes|=t,Yr|=t)}function Yi(e,t){if(!Oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function $b(e,t,n){var i=t.pendingProps;switch(Sc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(t),null;case 1:return Ie(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Un(st),_e(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Er(t)?Bn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Cc())),Ie(t),null;case 26:var s=t.type,u=t.memoizedState;return e===null?(Bn(t),u!==null?(Ie(t),um(t,u)):(Ie(t),mu(t,s,null,i,n))):u?u!==e.memoizedState?(Bn(t),Ie(t),um(t,u)):(Ie(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Bn(t),Ie(t),mu(t,s,e,i,n)),null;case 27:if(zn(t),n=re.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Bn(t);else{if(!i){if(t.stateNode===null)throw Error(l(166));return Ie(t),null}e=I.current,Er(t)?Vh(t):(e=vg(s,i,n),t.stateNode=e,Bn(t))}return Ie(t),null;case 5:if(zn(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Bn(t);else{if(!i){if(t.stateNode===null)throw Error(l(166));return Ie(t),null}if(u=I.current,Er(t))Vh(t);else{var v=Yl(re.current);switch(u){case 1:u=v.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:u=v.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":u=v.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":u=v.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":u=v.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof i.is=="string"?v.createElement("select",{is:i.is}):v.createElement("select"),i.multiple?u.multiple=!0:i.size&&(u.size=i.size);break;default:u=typeof i.is=="string"?v.createElement(s,{is:i.is}):v.createElement(s)}}u[xt]=t,u[Mt]=i;e:for(v=t.child;v!==null;){if(v.tag===5||v.tag===6)u.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===t)break e;for(;v.sibling===null;){if(v.return===null||v.return===t)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}t.stateNode=u;e:switch(Ct(u,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Bn(t)}}return Ie(t),mu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Bn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(l(166));if(e=re.current,Er(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=_t,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[xt]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||og(e.nodeValue,n)),e||ra(t,!0)}else e=Yl(e).createTextNode(i),e[xt]=t,t.stateNode=e}return Ie(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Er(t),n!==null){if(e===null){if(!i)throw Error(l(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[xt]=t}else Ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ie(t),e=!1}else n=Cc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Gt(t),t):(Gt(t),null);if((t.flags&128)!==0)throw Error(l(558))}return Ie(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Er(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(l(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(l(317));s[xt]=t}else Ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ie(t),s=!1}else s=Cc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Gt(t),t):(Gt(t),null)}return Gt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Cl(t,t.updateQueue),Ie(t),null);case 4:return _e(),e===null&&ju(t.stateNode.containerInfo),Ie(t),null;case 10:return Un(t.type),Ie(t),null;case 19:if(H(at),i=t.memoizedState,i===null)return Ie(t),null;if(s=(t.flags&128)!==0,u=i.rendering,u===null)if(s)Yi(i,!1);else{if(tt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=fl(e),u!==null){for(t.flags|=128,Yi(i,!1),e=u.updateQueue,t.updateQueue=e,Cl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Lh(n,e),n=n.sibling;return F(at,at.current&1|2),Oe&&Dn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Bt()>Al&&(t.flags|=128,s=!0,Yi(i,!1),t.lanes=4194304)}else{if(!s)if(e=fl(u),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Cl(t,e),Yi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!Oe)return Ie(t),null}else 2*Bt()-i.renderingStartTime>Al&&n!==536870912&&(t.flags|=128,s=!0,Yi(i,!1),t.lanes=4194304);i.isBackwards?(u.sibling=t.child,t.child=u):(e=i.last,e!==null?e.sibling=u:t.child=u,i.last=u)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Bt(),e.sibling=null,n=at.current,F(at,s?n&1|2:n&1),Oe&&Dn(t,i.treeForkCount),e):(Ie(t),null);case 22:case 23:return Gt(t),Lc(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Ie(t),t.subtreeFlags&6&&(t.flags|=8192)):Ie(t),n=t.updateQueue,n!==null&&Cl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&H(Va),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Un(st),Ie(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function Qb(e,t){switch(Sc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Un(st),_e(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return zn(t),null;case 31:if(t.memoizedState!==null){if(Gt(t),t.alternate===null)throw Error(l(340));Ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Gt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(at),null;case 4:return _e(),null;case 10:return Un(t.type),null;case 22:case 23:return Gt(t),Lc(),e!==null&&H(Va),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Un(st),null;case 25:return null;default:return null}}function dm(e,t){switch(Sc(t),t.tag){case 3:Un(st),_e();break;case 26:case 27:case 5:zn(t);break;case 4:_e();break;case 31:t.memoizedState!==null&&Gt(t);break;case 13:Gt(t);break;case 19:H(at);break;case 10:Un(t.type);break;case 22:case 23:Gt(t),Lc(),e!==null&&H(Va);break;case 24:Un(st)}}function Xi(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var u=n.create,v=n.inst;i=u(),v.destroy=i}n=n.next}while(n!==s)}}catch(b){Xe(t,t.return,b)}}function da(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var u=s.next;i=u;do{if((i.tag&e)===e){var v=i.inst,b=v.destroy;if(b!==void 0){v.destroy=void 0,s=t;var E=n,L=b;try{L()}catch(X){Xe(s,E,X)}}}i=i.next}while(i!==u)}}catch(X){Xe(t,t.return,X)}}function fm(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{np(t,n)}catch(i){Xe(e,e.return,i)}}}function hm(e,t,n){n.props=Za(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Xe(e,t,i)}}function qi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){Xe(e,t,s)}}function _n(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){Xe(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){Xe(e,t,s)}else n.current=null}function pm(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){Xe(e,e.return,s)}}function gu(e,t,n){try{var i=e.stateNode;mw(i,e.type,n,t),i[Mt]=t}catch(s){Xe(e,e.return,s)}}function mm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ya(e.type)||e.tag===4}function vu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yu(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=An));else if(i!==4&&(i===27&&ya(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(yu(e,t,n),e=e.sibling;e!==null;)yu(e,t,n),e=e.sibling}function kl(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&ya(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(kl(e,t,n),e=e.sibling;e!==null;)kl(e,t,n),e=e.sibling}function gm(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Ct(t,i,n),t[xt]=e,t[Mt]=n}catch(u){Xe(e,e.return,u)}}var Yn=!1,dt=!1,bu=!1,vm=typeof WeakSet=="function"?WeakSet:Set,yt=null;function Zb(e,t){if(e=e.containerInfo,Yu=Ql,e=Nh(e),fc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var v=0,b=-1,E=-1,L=0,X=0,G=e,B=null;t:for(;;){for(var Y;G!==n||s!==0&&G.nodeType!==3||(b=v+s),G!==u||i!==0&&G.nodeType!==3||(E=v+i),G.nodeType===3&&(v+=G.nodeValue.length),(Y=G.firstChild)!==null;)B=G,G=Y;for(;;){if(G===e)break t;if(B===n&&++L===s&&(b=v),B===u&&++X===i&&(E=v),(Y=G.nextSibling)!==null)break;G=B,B=G.parentNode}G=Y}n=b===-1||E===-1?null:{start:b,end:E}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xu={focusedElem:e,selectionRange:n},Ql=!1,yt=t;yt!==null;)if(t=yt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,yt=e;else for(;yt!==null;){switch(t=yt,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,s=u.memoizedProps,u=u.memoizedState,i=n.stateNode;try{var ne=Za(n.type,s);e=i.getSnapshotBeforeUpdate(ne,u),i.__reactInternalSnapshotBeforeUpdate=e}catch(he){Xe(n,n.return,he)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Fu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Fu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,yt=e;break}yt=t.return}}function ym(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:qn(e,n),i&4&&Xi(5,n);break;case 1:if(qn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(v){Xe(n,n.return,v)}else{var s=Za(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Xe(n,n.return,v)}}i&64&&fm(n),i&512&&qi(n,n.return);break;case 3:if(qn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{np(e,t)}catch(v){Xe(n,n.return,v)}}break;case 27:t===null&&i&4&&gm(n);case 26:case 5:qn(e,n),t===null&&i&4&&pm(n),i&512&&qi(n,n.return);break;case 12:qn(e,n);break;case 31:qn(e,n),i&4&&xm(e,n);break;case 13:qn(e,n),i&4&&_m(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=aw.bind(null,n),Sw(e,n))));break;case 22:if(i=n.memoizedState!==null||Yn,!i){t=t!==null&&t.memoizedState!==null||dt,s=Yn;var u=dt;Yn=i,(dt=t)&&!u?Vn(e,n,(n.subtreeFlags&8772)!==0):qn(e,n),Yn=s,dt=u}break;case 30:break;default:qn(e,n)}}function bm(e){var t=e.alternate;t!==null&&(e.alternate=null,bm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Is(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,Dt=!1;function Xn(e,t,n){for(n=n.child;n!==null;)wm(e,t,n),n=n.sibling}function wm(e,t,n){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(fi,n)}catch{}switch(n.tag){case 26:dt||_n(n,t),Xn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:dt||_n(n,t);var i=Ke,s=Dt;ya(n.type)&&(Ke=n.stateNode,Dt=!1),Xn(e,t,n),Ki(n.stateNode),Ke=i,Dt=s;break;case 5:dt||_n(n,t);case 6:if(i=Ke,s=Dt,Ke=null,Xn(e,t,n),Ke=i,Dt=s,Ke!==null)if(Dt)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(n.stateNode)}catch(u){Xe(n,t,u)}else try{Ke.removeChild(n.stateNode)}catch(u){Xe(n,t,u)}break;case 18:Ke!==null&&(Dt?(e=Ke,fg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Zr(e)):fg(Ke,n.stateNode));break;case 4:i=Ke,s=Dt,Ke=n.stateNode.containerInfo,Dt=!0,Xn(e,t,n),Ke=i,Dt=s;break;case 0:case 11:case 14:case 15:da(2,n,t),dt||da(4,n,t),Xn(e,t,n);break;case 1:dt||(_n(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&hm(n,t,i)),Xn(e,t,n);break;case 21:Xn(e,t,n);break;case 22:dt=(i=dt)||n.memoizedState!==null,Xn(e,t,n),dt=i;break;default:Xn(e,t,n)}}function xm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Zr(e)}catch(n){Xe(t,t.return,n)}}}function _m(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Zr(e)}catch(n){Xe(t,t.return,n)}}function Ib(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new vm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new vm),t;default:throw Error(l(435,e.tag))}}function El(e,t){var n=Ib(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=rw.bind(null,e,i);i.then(s,s)}})}function Rt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],u=e,v=t,b=v;e:for(;b!==null;){switch(b.tag){case 27:if(ya(b.type)){Ke=b.stateNode,Dt=!1;break e}break;case 5:Ke=b.stateNode,Dt=!1;break e;case 3:case 4:Ke=b.stateNode.containerInfo,Dt=!0;break e}b=b.return}if(Ke===null)throw Error(l(160));wm(u,v,s),Ke=null,Dt=!1,u=s.alternate,u!==null&&(u.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Sm(t,e),t=t.sibling}var dn=null;function Sm(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Rt(t,e),Ut(e),i&4&&(da(3,e,e.return),Xi(3,e),da(5,e,e.return));break;case 1:Rt(t,e),Ut(e),i&512&&(dt||n===null||_n(n,n.return)),i&64&&Yn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=dn;if(Rt(t,e),Ut(e),i&512&&(dt||n===null||_n(n,n.return)),i&4){var u=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;t:switch(i){case"title":u=s.getElementsByTagName("title")[0],(!u||u[mi]||u[xt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=s.createElement(i),s.head.insertBefore(u,s.querySelector("head > title"))),Ct(u,i,n),u[xt]=e,vt(u),i=u;break e;case"link":var v=Sg("link","href",s).get(i+(n.href||""));if(v){for(var b=0;b<v.length;b++)if(u=v[b],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){v.splice(b,1);break t}}u=s.createElement(i),Ct(u,i,n),s.head.appendChild(u);break;case"meta":if(v=Sg("meta","content",s).get(i+(n.content||""))){for(b=0;b<v.length;b++)if(u=v[b],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){v.splice(b,1);break t}}u=s.createElement(i),Ct(u,i,n),s.head.appendChild(u);break;default:throw Error(l(468,i))}u[xt]=e,vt(u),i=u}e.stateNode=i}else Tg(s,e.type,e.stateNode);else e.stateNode=_g(s,i,e.memoizedProps);else u!==i?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,i===null?Tg(s,e.type,e.stateNode):_g(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&gu(e,e.memoizedProps,n.memoizedProps)}break;case 27:Rt(t,e),Ut(e),i&512&&(dt||n===null||_n(n,n.return)),n!==null&&i&4&&gu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Rt(t,e),Ut(e),i&512&&(dt||n===null||_n(n,n.return)),e.flags&32){s=e.stateNode;try{vr(s,"")}catch(ne){Xe(e,e.return,ne)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,gu(e,s,n!==null?n.memoizedProps:s)),i&1024&&(bu=!0);break;case 6:if(Rt(t,e),Ut(e),i&4){if(e.stateNode===null)throw Error(l(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(ne){Xe(e,e.return,ne)}}break;case 3:if(Vl=null,s=dn,dn=Xl(t.containerInfo),Rt(t,e),dn=s,Ut(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Zr(t.containerInfo)}catch(ne){Xe(e,e.return,ne)}bu&&(bu=!1,Tm(e));break;case 4:i=dn,dn=Xl(e.stateNode.containerInfo),Rt(t,e),Ut(e),dn=i;break;case 12:Rt(t,e),Ut(e);break;case 31:Rt(t,e),Ut(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,El(e,i)));break;case 13:Rt(t,e),Ut(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Nl=Bt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,El(e,i)));break;case 22:s=e.memoizedState!==null;var E=n!==null&&n.memoizedState!==null,L=Yn,X=dt;if(Yn=L||s,dt=X||E,Rt(t,e),dt=X,Yn=L,Ut(e),i&8192)e:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||E||Yn||dt||Ia(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){E=n=t;try{if(u=E.stateNode,s)v=u.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{b=E.stateNode;var G=E.memoizedProps.style,B=G!=null&&G.hasOwnProperty("display")?G.display:null;b.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(ne){Xe(E,E.return,ne)}}}else if(t.tag===6){if(n===null){E=t;try{E.stateNode.nodeValue=s?"":E.memoizedProps}catch(ne){Xe(E,E.return,ne)}}}else if(t.tag===18){if(n===null){E=t;try{var Y=E.stateNode;s?hg(Y,!0):hg(E.stateNode,!1)}catch(ne){Xe(E,E.return,ne)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,El(e,n))));break;case 19:Rt(t,e),Ut(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,El(e,i)));break;case 30:break;case 21:break;default:Rt(t,e),Ut(e)}}function Ut(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(mm(i)){n=i;break}i=i.return}if(n==null)throw Error(l(160));switch(n.tag){case 27:var s=n.stateNode,u=vu(e);kl(e,u,s);break;case 5:var v=n.stateNode;n.flags&32&&(vr(v,""),n.flags&=-33);var b=vu(e);kl(e,b,v);break;case 3:case 4:var E=n.stateNode.containerInfo,L=vu(e);yu(e,L,E);break;default:throw Error(l(161))}}catch(X){Xe(e,e.return,X)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Tm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Tm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function qn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ym(e,t.alternate,t),t=t.sibling}function Ia(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:da(4,t,t.return),Ia(t);break;case 1:_n(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&hm(t,t.return,n),Ia(t);break;case 27:Ki(t.stateNode);case 26:case 5:_n(t,t.return),Ia(t);break;case 22:t.memoizedState===null&&Ia(t);break;case 30:Ia(t);break;default:Ia(t)}e=e.sibling}}function Vn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,u=t,v=u.flags;switch(u.tag){case 0:case 11:case 15:Vn(s,u,n),Xi(4,u);break;case 1:if(Vn(s,u,n),i=u,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(L){Xe(i,i.return,L)}if(i=u,s=i.updateQueue,s!==null){var b=i.stateNode;try{var E=s.shared.hiddenCallbacks;if(E!==null)for(s.shared.hiddenCallbacks=null,s=0;s<E.length;s++)tp(E[s],b)}catch(L){Xe(i,i.return,L)}}n&&v&64&&fm(u),qi(u,u.return);break;case 27:gm(u);case 26:case 5:Vn(s,u,n),n&&i===null&&v&4&&pm(u),qi(u,u.return);break;case 12:Vn(s,u,n);break;case 31:Vn(s,u,n),n&&v&4&&xm(s,u);break;case 13:Vn(s,u,n),n&&v&4&&_m(s,u);break;case 22:u.memoizedState===null&&Vn(s,u,n),qi(u,u.return);break;case 30:break;default:Vn(s,u,n)}t=t.sibling}}function wu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&zi(n))}function xu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&zi(e))}function fn(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Cm(e,t,n,i),t=t.sibling}function Cm(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:fn(e,t,n,i),s&2048&&Xi(9,t);break;case 1:fn(e,t,n,i);break;case 3:fn(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&zi(e)));break;case 12:if(s&2048){fn(e,t,n,i),e=t.stateNode;try{var u=t.memoizedProps,v=u.id,b=u.onPostCommit;typeof b=="function"&&b(v,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){Xe(t,t.return,E)}}else fn(e,t,n,i);break;case 31:fn(e,t,n,i);break;case 13:fn(e,t,n,i);break;case 23:break;case 22:u=t.stateNode,v=t.alternate,t.memoizedState!==null?u._visibility&2?fn(e,t,n,i):Vi(e,t):u._visibility&2?fn(e,t,n,i):(u._visibility|=2,jr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&wu(v,t);break;case 24:fn(e,t,n,i),s&2048&&xu(t.alternate,t);break;default:fn(e,t,n,i)}}function jr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,v=t,b=n,E=i,L=v.flags;switch(v.tag){case 0:case 11:case 15:jr(u,v,b,E,s),Xi(8,v);break;case 23:break;case 22:var X=v.stateNode;v.memoizedState!==null?X._visibility&2?jr(u,v,b,E,s):Vi(u,v):(X._visibility|=2,jr(u,v,b,E,s)),s&&L&2048&&wu(v.alternate,v);break;case 24:jr(u,v,b,E,s),s&&L&2048&&xu(v.alternate,v);break;default:jr(u,v,b,E,s)}t=t.sibling}}function Vi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Vi(n,i),s&2048&&wu(i.alternate,i);break;case 24:Vi(n,i),s&2048&&xu(i.alternate,i);break;default:Vi(n,i)}t=t.sibling}}var Fi=8192;function Lr(e,t,n){if(e.subtreeFlags&Fi)for(e=e.child;e!==null;)km(e,t,n),e=e.sibling}function km(e,t,n){switch(e.tag){case 26:Lr(e,t,n),e.flags&Fi&&e.memoizedState!==null&&Uw(n,dn,e.memoizedState,e.memoizedProps);break;case 5:Lr(e,t,n);break;case 3:case 4:var i=dn;dn=Xl(e.stateNode.containerInfo),Lr(e,t,n),dn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Fi,Fi=16777216,Lr(e,t,n),Fi=i):Lr(e,t,n));break;default:Lr(e,t,n)}}function Em(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Gi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];yt=i,Nm(i,e)}Em(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zm(e),e=e.sibling}function zm(e){switch(e.tag){case 0:case 11:case 15:Gi(e),e.flags&2048&&da(9,e,e.return);break;case 3:Gi(e);break;case 12:Gi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,zl(e)):Gi(e);break;default:Gi(e)}}function zl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];yt=i,Nm(i,e)}Em(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:da(8,t,t.return),zl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,zl(t));break;default:zl(t)}e=e.sibling}}function Nm(e,t){for(;yt!==null;){var n=yt;switch(n.tag){case 0:case 11:case 15:da(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:zi(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,yt=i;else e:for(n=e;yt!==null;){i=yt;var s=i.sibling,u=i.return;if(bm(i),i===n){yt=null;break e}if(s!==null){s.return=u,yt=s;break e}yt=u}}}var Jb={getCacheForType:function(e){var t=St(st),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return St(st).controller.signal}},Kb=typeof WeakMap=="function"?WeakMap:Map,Le=0,Ge=null,ze=null,Ae=0,Ye=0,$t=null,fa=!1,Br=!1,_u=!1,Fn=0,tt=0,ha=0,Ja=0,Su=0,Qt=0,Yr=0,$i=null,Ht=null,Tu=!1,Nl=0,Am=0,Al=1/0,Ml=null,pa=null,mt=0,ma=null,Xr=null,Gn=0,Cu=0,ku=null,Mm=null,Qi=0,Eu=null;function Zt(){return(Le&2)!==0&&Ae!==0?Ae&-Ae:x.T!==null?Du():Qf()}function Om(){if(Qt===0)if((Ae&536870912)===0||Oe){var e=Bo;Bo<<=1,(Bo&3932160)===0&&(Bo=262144),Qt=e}else Qt=536870912;return e=Ft.current,e!==null&&(e.flags|=32),Qt}function jt(e,t,n){(e===Ge&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)&&(qr(e,0),ga(e,Ae,Qt,!1)),pi(e,n),((Le&2)===0||e!==Ge)&&(e===Ge&&((Le&2)===0&&(Ja|=n),tt===4&&ga(e,Ae,Qt,!1)),Sn(e))}function Dm(e,t,n){if((Le&6)!==0)throw Error(l(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||hi(e,t),s=i?ew(e,t):Nu(e,t,!0),u=i;do{if(s===0){Br&&!i&&ga(e,t,0,!1);break}else{if(n=e.current.alternate,u&&!Wb(n)){s=Nu(e,t,!1),u=!1;continue}if(s===2){if(u=t,e.errorRecoveryDisabledLanes&u)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){t=v;e:{var b=e;s=$i;var E=b.current.memoizedState.isDehydrated;if(E&&(qr(b,v).flags|=256),v=Nu(b,v,!1),v!==2){if(_u&&!E){b.errorRecoveryDisabledLanes|=u,Ja|=u,s=4;break e}u=Ht,Ht=s,u!==null&&(Ht===null?Ht=u:Ht.push.apply(Ht,u))}s=v}if(u=!1,s!==2)continue}}if(s===1){qr(e,0),ga(e,t,0,!0);break}e:{switch(i=e,u=s,u){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:ga(i,t,Qt,!fa);break e;case 2:Ht=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(s=Nl+300-Bt(),10<s)){if(ga(i,t,Qt,!fa),Xo(i,0,!0)!==0)break e;Gn=t,i.timeoutHandle=ug(Rm.bind(null,i,n,Ht,Ml,Tu,t,Qt,Ja,Yr,fa,u,"Throttled",-0,0),s);break e}Rm(i,n,Ht,Ml,Tu,t,Qt,Ja,Yr,fa,u,null,-0,0)}}break}while(!0);Sn(e)}function Rm(e,t,n,i,s,u,v,b,E,L,X,G,B,Y){if(e.timeoutHandle=-1,G=t.subtreeFlags,G&8192||(G&16785408)===16785408){G={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:An},km(t,u,G);var ne=(u&62914560)===u?Nl-Bt():(u&4194048)===u?Am-Bt():0;if(ne=Hw(G,ne),ne!==null){Gn=u,e.cancelPendingCommit=ne(qm.bind(null,e,t,u,n,i,s,v,b,E,X,G,null,B,Y)),ga(e,u,v,!L);return}}qm(e,t,u,n,i,s,v,b,E)}function Wb(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],u=s.getSnapshot;s=s.value;try{if(!qt(u(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ga(e,t,n,i){t&=~Su,t&=~Ja,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var u=31-Xt(s),v=1<<u;i[u]=-1,s&=~v}n!==0&&Ff(e,n,t)}function Ol(){return(Le&6)===0?(Zi(0),!1):!0}function zu(){if(ze!==null){if(Ye===0)var e=ze.return;else e=ze,Rn=Xa=null,Fc(e),Or=null,Ai=0,e=ze;for(;e!==null;)dm(e.alternate,e),e=e.return;ze=null}}function qr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,yw(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Gn=0,zu(),Ge=e,ze=n=On(e.current,null),Ae=t,Ye=0,$t=null,fa=!1,Br=hi(e,t),_u=!1,Yr=Qt=Su=Ja=ha=tt=0,Ht=$i=null,Tu=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-Xt(i),u=1<<s;t|=e[s],i&=~u}return Fn=t,Po(),n}function Um(e,t){xe=null,x.H=Li,t===Mr||t===ll?(t=Kh(),Ye=3):t===Oc?(t=Kh(),Ye=4):Ye=t===ou?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,$t=t,ze===null&&(tt=1,xl(e,en(t,e.current)))}function Hm(){var e=Ft.current;return e===null?!0:(Ae&4194048)===Ae?rn===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?e===rn:!1}function jm(){var e=x.H;return x.H=Li,e===null?Li:e}function Lm(){var e=x.A;return x.A=Jb,e}function Dl(){tt=4,fa||(Ae&4194048)!==Ae&&Ft.current!==null||(Br=!0),(ha&134217727)===0&&(Ja&134217727)===0||Ge===null||ga(Ge,Ae,Qt,!1)}function Nu(e,t,n){var i=Le;Le|=2;var s=jm(),u=Lm();(Ge!==e||Ae!==t)&&(Ml=null,qr(e,t)),t=!1;var v=tt;e:do try{if(Ye!==0&&ze!==null){var b=ze,E=$t;switch(Ye){case 8:zu(),v=6;break e;case 3:case 2:case 9:case 6:Ft.current===null&&(t=!0);var L=Ye;if(Ye=0,$t=null,Vr(e,b,E,L),n&&Br){v=0;break e}break;default:L=Ye,Ye=0,$t=null,Vr(e,b,E,L)}}Pb(),v=tt;break}catch(X){Um(e,X)}while(!0);return t&&e.shellSuspendCounter++,Rn=Xa=null,Le=i,x.H=s,x.A=u,ze===null&&(Ge=null,Ae=0,Po()),v}function Pb(){for(;ze!==null;)Bm(ze)}function ew(e,t){var n=Le;Le|=2;var i=jm(),s=Lm();Ge!==e||Ae!==t?(Ml=null,Al=Bt()+500,qr(e,t)):Br=hi(e,t);e:do try{if(Ye!==0&&ze!==null){t=ze;var u=$t;t:switch(Ye){case 1:Ye=0,$t=null,Vr(e,t,u,1);break;case 2:case 9:if(Ih(u)){Ye=0,$t=null,Ym(t);break}t=function(){Ye!==2&&Ye!==9||Ge!==e||(Ye=7),Sn(e)},u.then(t,t);break e;case 3:Ye=7;break e;case 4:Ye=5;break e;case 7:Ih(u)?(Ye=0,$t=null,Ym(t)):(Ye=0,$t=null,Vr(e,t,u,7));break;case 5:var v=null;switch(ze.tag){case 26:v=ze.memoizedState;case 5:case 27:var b=ze;if(v?Cg(v):b.stateNode.complete){Ye=0,$t=null;var E=b.sibling;if(E!==null)ze=E;else{var L=b.return;L!==null?(ze=L,Rl(L)):ze=null}break t}}Ye=0,$t=null,Vr(e,t,u,5);break;case 6:Ye=0,$t=null,Vr(e,t,u,6);break;case 8:zu(),tt=6;break e;default:throw Error(l(462))}}tw();break}catch(X){Um(e,X)}while(!0);return Rn=Xa=null,x.H=i,x.A=s,Le=n,ze!==null?0:(Ge=null,Ae=0,Po(),tt)}function tw(){for(;ze!==null&&!Ty();)Bm(ze)}function Bm(e){var t=cm(e.alternate,e,Fn);e.memoizedProps=e.pendingProps,t===null?Rl(e):ze=t}function Ym(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=am(n,t,t.pendingProps,t.type,void 0,Ae);break;case 11:t=am(n,t,t.pendingProps,t.type.render,t.ref,Ae);break;case 5:Fc(t);default:dm(n,t),t=ze=Lh(t,Fn),t=cm(n,t,Fn)}e.memoizedProps=e.pendingProps,t===null?Rl(e):ze=t}function Vr(e,t,n,i){Rn=Xa=null,Fc(t),Or=null,Ai=0;var s=t.return;try{if(Vb(e,s,t,n,Ae)){tt=1,xl(e,en(n,e.current)),ze=null;return}}catch(u){if(s!==null)throw ze=s,u;tt=1,xl(e,en(n,e.current)),ze=null;return}t.flags&32768?(Oe||i===1?e=!0:Br||(Ae&536870912)!==0?e=!1:(fa=e=!0,(i===2||i===9||i===3||i===6)&&(i=Ft.current,i!==null&&i.tag===13&&(i.flags|=16384))),Xm(t,e)):Rl(t)}function Rl(e){var t=e;do{if((t.flags&32768)!==0){Xm(t,fa);return}e=t.return;var n=$b(t.alternate,t,Fn);if(n!==null){ze=n;return}if(t=t.sibling,t!==null){ze=t;return}ze=t=e}while(t!==null);tt===0&&(tt=5)}function Xm(e,t){do{var n=Qb(e.alternate,e);if(n!==null){n.flags&=32767,ze=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ze=e;return}ze=e=n}while(e!==null);tt=6,ze=null}function qm(e,t,n,i,s,u,v,b,E){e.cancelPendingCommit=null;do Ul();while(mt!==0);if((Le&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(u=t.lanes|t.childLanes,u|=vc,Ry(e,n,u,v,b,E),e===Ge&&(ze=Ge=null,Ae=0),Xr=t,ma=e,Gn=n,Cu=u,ku=s,Mm=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,iw(jo,function(){return Qm(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=x.T,x.T=null,s=N.p,N.p=2,v=Le,Le|=4;try{Zb(e,t,n)}finally{Le=v,N.p=s,x.T=i}}mt=1,Vm(),Fm(),Gm()}}function Vm(){if(mt===1){mt=0;var e=ma,t=Xr,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=x.T,x.T=null;var i=N.p;N.p=2;var s=Le;Le|=4;try{Sm(t,e);var u=Xu,v=Nh(e.containerInfo),b=u.focusedElem,E=u.selectionRange;if(v!==b&&b&&b.ownerDocument&&zh(b.ownerDocument.documentElement,b)){if(E!==null&&fc(b)){var L=E.start,X=E.end;if(X===void 0&&(X=L),"selectionStart"in b)b.selectionStart=L,b.selectionEnd=Math.min(X,b.value.length);else{var G=b.ownerDocument||document,B=G&&G.defaultView||window;if(B.getSelection){var Y=B.getSelection(),ne=b.textContent.length,he=Math.min(E.start,ne),Fe=E.end===void 0?he:Math.min(E.end,ne);!Y.extend&&he>Fe&&(v=Fe,Fe=he,he=v);var D=Eh(b,he),A=Eh(b,Fe);if(D&&A&&(Y.rangeCount!==1||Y.anchorNode!==D.node||Y.anchorOffset!==D.offset||Y.focusNode!==A.node||Y.focusOffset!==A.offset)){var j=G.createRange();j.setStart(D.node,D.offset),Y.removeAllRanges(),he>Fe?(Y.addRange(j),Y.extend(A.node,A.offset)):(j.setEnd(A.node,A.offset),Y.addRange(j))}}}}for(G=[],Y=b;Y=Y.parentNode;)Y.nodeType===1&&G.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<G.length;b++){var V=G[b];V.element.scrollLeft=V.left,V.element.scrollTop=V.top}}Ql=!!Yu,Xu=Yu=null}finally{Le=s,N.p=i,x.T=n}}e.current=t,mt=2}}function Fm(){if(mt===2){mt=0;var e=ma,t=Xr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=x.T,x.T=null;var i=N.p;N.p=2;var s=Le;Le|=4;try{ym(e,t.alternate,t)}finally{Le=s,N.p=i,x.T=n}}mt=3}}function Gm(){if(mt===4||mt===3){mt=0,Cy();var e=ma,t=Xr,n=Gn,i=Mm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?mt=5:(mt=0,Xr=ma=null,$m(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(pa=null),Qs(n),t=t.stateNode,Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(fi,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=x.T,s=N.p,N.p=2,x.T=null;try{for(var u=e.onRecoverableError,v=0;v<i.length;v++){var b=i[v];u(b.value,{componentStack:b.stack})}}finally{x.T=t,N.p=s}}(Gn&3)!==0&&Ul(),Sn(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===Eu?Qi++:(Qi=0,Eu=e):Qi=0,Zi(0)}}function $m(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,zi(t)))}function Ul(){return Vm(),Fm(),Gm(),Qm()}function Qm(){if(mt!==5)return!1;var e=ma,t=Cu;Cu=0;var n=Qs(Gn),i=x.T,s=N.p;try{N.p=32>n?32:n,x.T=null,n=ku,ku=null;var u=ma,v=Gn;if(mt=0,Xr=ma=null,Gn=0,(Le&6)!==0)throw Error(l(331));var b=Le;if(Le|=4,zm(u.current),Cm(u,u.current,v,n),Le=b,Zi(0,!1),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(fi,u)}catch{}return!0}finally{N.p=s,x.T=i,$m(e,t)}}function Zm(e,t,n){t=en(n,t),t=iu(e.stateNode,t,2),e=sa(e,t,2),e!==null&&(pi(e,2),Sn(e))}function Xe(e,t,n){if(e.tag===3)Zm(e,e,n);else for(;t!==null;){if(t.tag===3){Zm(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(pa===null||!pa.has(i))){e=en(n,e),n=Ip(2),i=sa(t,n,2),i!==null&&(Jp(n,i,t,e),pi(i,2),Sn(i));break}}t=t.return}}function Au(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Kb;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(_u=!0,s.add(n),e=nw.bind(null,e,t,n),t.then(e,e))}function nw(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ge===e&&(Ae&n)===n&&(tt===4||tt===3&&(Ae&62914560)===Ae&&300>Bt()-Nl?(Le&2)===0&&qr(e,0):Su|=n,Yr===Ae&&(Yr=0)),Sn(e)}function Im(e,t){t===0&&(t=Vf()),e=La(e,t),e!==null&&(pi(e,t),Sn(e))}function aw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Im(e,n)}function rw(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(l(314))}i!==null&&i.delete(t),Im(e,n)}function iw(e,t){return Vs(e,t)}var Hl=null,Fr=null,Mu=!1,jl=!1,Ou=!1,va=0;function Sn(e){e!==Fr&&e.next===null&&(Fr===null?Hl=Fr=e:Fr=Fr.next=e),jl=!0,Mu||(Mu=!0,lw())}function Zi(e,t){if(!Ou&&jl){Ou=!0;do for(var n=!1,i=Hl;i!==null;){if(e!==0){var s=i.pendingLanes;if(s===0)var u=0;else{var v=i.suspendedLanes,b=i.pingedLanes;u=(1<<31-Xt(42|e)+1)-1,u&=s&~(v&~b),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,Pm(i,u))}else u=Ae,u=Xo(i,i===Ge?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(u&3)===0||hi(i,u)||(n=!0,Pm(i,u));i=i.next}while(n);Ou=!1}}function ow(){Jm()}function Jm(){jl=Mu=!1;var e=0;va!==0&&vw()&&(e=va);for(var t=Bt(),n=null,i=Hl;i!==null;){var s=i.next,u=Km(i,t);u===0?(i.next=null,n===null?Hl=s:n.next=s,s===null&&(Fr=n)):(n=i,(e!==0||(u&3)!==0)&&(jl=!0)),i=s}mt!==0&&mt!==5||Zi(e),va!==0&&(va=0)}function Km(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var v=31-Xt(u),b=1<<v,E=s[v];E===-1?((b&n)===0||(b&i)!==0)&&(s[v]=Dy(b,t)):E<=t&&(e.expiredLanes|=b),u&=~b}if(t=Ge,n=Ae,n=Xo(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Fs(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||hi(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Fs(i),Qs(n)){case 2:case 8:n=Xf;break;case 32:n=jo;break;case 268435456:n=qf;break;default:n=jo}return i=Wm.bind(null,e),n=Vs(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Fs(i),e.callbackPriority=2,e.callbackNode=null,2}function Wm(e,t){if(mt!==0&&mt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ul()&&e.callbackNode!==n)return null;var i=Ae;return i=Xo(e,e===Ge?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Dm(e,i,t),Km(e,Bt()),e.callbackNode!=null&&e.callbackNode===n?Wm.bind(null,e):null)}function Pm(e,t){if(Ul())return null;Dm(e,t,!0)}function lw(){bw(function(){(Le&6)!==0?Vs(Yf,ow):Jm()})}function Du(){if(va===0){var e=Nr;e===0&&(e=Lo,Lo<<=1,(Lo&261888)===0&&(Lo=256)),va=e}return va}function eg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Go(""+e)}function tg(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function sw(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var u=eg((s[Mt]||null).action),v=i.submitter;v&&(t=(t=v[Mt]||null)?eg(t.formAction):v.getAttribute("formAction"),t!==null&&(u=t,v=null));var b=new Io("action","action",null,i,s);e.push({event:b,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(va!==0){var E=v?tg(s,v):new FormData(s);Pc(n,{pending:!0,data:E,method:s.method,action:u},null,E)}}else typeof u=="function"&&(b.preventDefault(),E=v?tg(s,v):new FormData(s),Pc(n,{pending:!0,data:E,method:s.method,action:u},u,E))},currentTarget:s}]})}}for(var Ru=0;Ru<gc.length;Ru++){var Uu=gc[Ru],cw=Uu.toLowerCase(),uw=Uu[0].toUpperCase()+Uu.slice(1);un(cw,"on"+uw)}un(Oh,"onAnimationEnd"),un(Dh,"onAnimationIteration"),un(Rh,"onAnimationStart"),un("dblclick","onDoubleClick"),un("focusin","onFocus"),un("focusout","onBlur"),un(kb,"onTransitionRun"),un(Eb,"onTransitionStart"),un(zb,"onTransitionCancel"),un(Uh,"onTransitionEnd"),mr("onMouseEnter",["mouseout","mouseover"]),mr("onMouseLeave",["mouseout","mouseover"]),mr("onPointerEnter",["pointerout","pointerover"]),mr("onPointerLeave",["pointerout","pointerover"]),Ra("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ra("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ra("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ra("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ra("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ra("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ii));function ng(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;e:{var u=void 0;if(t)for(var v=i.length-1;0<=v;v--){var b=i[v],E=b.instance,L=b.currentTarget;if(b=b.listener,E!==u&&s.isPropagationStopped())break e;u=b,s.currentTarget=L;try{u(s)}catch(X){Wo(X)}s.currentTarget=null,u=E}else for(v=0;v<i.length;v++){if(b=i[v],E=b.instance,L=b.currentTarget,b=b.listener,E!==u&&s.isPropagationStopped())break e;u=b,s.currentTarget=L;try{u(s)}catch(X){Wo(X)}s.currentTarget=null,u=E}}}}function Ne(e,t){var n=t[Zs];n===void 0&&(n=t[Zs]=new Set);var i=e+"__bubble";n.has(i)||(ag(t,e,2,!1),n.add(i))}function Hu(e,t,n){var i=0;t&&(i|=4),ag(n,e,i,t)}var Ll="_reactListening"+Math.random().toString(36).slice(2);function ju(e){if(!e[Ll]){e[Ll]=!0,Jf.forEach(function(n){n!=="selectionchange"&&(dw.has(n)||Hu(n,!1,e),Hu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ll]||(t[Ll]=!0,Hu("selectionchange",!1,t))}}function ag(e,t,n,i){switch(Og(t)){case 2:var s=Bw;break;case 8:s=Yw;break;default:s=Wu}n=s.bind(null,t,n,e),s=void 0,!ac||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Lu(e,t,n,i,s){var u=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var v=i.tag;if(v===3||v===4){var b=i.stateNode.containerInfo;if(b===s)break;if(v===4)for(v=i.return;v!==null;){var E=v.tag;if((E===3||E===4)&&v.stateNode.containerInfo===s)return;v=v.return}for(;b!==null;){if(v=fr(b),v===null)return;if(E=v.tag,E===5||E===6||E===26||E===27){i=u=v;continue e}b=b.parentNode}}i=i.return}sh(function(){var L=u,X=tc(n),G=[];e:{var B=Hh.get(e);if(B!==void 0){var Y=Io,ne=e;switch(e){case"keypress":if(Qo(n)===0)break e;case"keydown":case"keyup":Y=rb;break;case"focusin":ne="focus",Y=lc;break;case"focusout":ne="blur",Y=lc;break;case"beforeblur":case"afterblur":Y=lc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=$y;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=lb;break;case Oh:case Dh:case Rh:Y=Iy;break;case Uh:Y=cb;break;case"scroll":case"scrollend":Y=Fy;break;case"wheel":Y=db;break;case"copy":case"cut":case"paste":Y=Ky;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=hh;break;case"toggle":case"beforetoggle":Y=hb}var he=(t&4)!==0,Fe=!he&&(e==="scroll"||e==="scrollend"),D=he?B!==null?B+"Capture":null:B;he=[];for(var A=L,j;A!==null;){var V=A;if(j=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||j===null||D===null||(V=vi(A,D),V!=null&&he.push(Ji(A,V,j))),Fe)break;A=A.return}0<he.length&&(B=new Y(B,ne,null,n,X),G.push({event:B,listeners:he}))}}if((t&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",B&&n!==ec&&(ne=n.relatedTarget||n.fromElement)&&(fr(ne)||ne[dr]))break e;if((Y||B)&&(B=X.window===X?X:(B=X.ownerDocument)?B.defaultView||B.parentWindow:window,Y?(ne=n.relatedTarget||n.toElement,Y=L,ne=ne?fr(ne):null,ne!==null&&(Fe=d(ne),he=ne.tag,ne!==Fe||he!==5&&he!==27&&he!==6)&&(ne=null)):(Y=null,ne=L),Y!==ne)){if(he=dh,V="onMouseLeave",D="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(he=hh,V="onPointerLeave",D="onPointerEnter",A="pointer"),Fe=Y==null?B:gi(Y),j=ne==null?B:gi(ne),B=new he(V,A+"leave",Y,n,X),B.target=Fe,B.relatedTarget=j,V=null,fr(X)===L&&(he=new he(D,A+"enter",ne,n,X),he.target=j,he.relatedTarget=Fe,V=he),Fe=V,Y&&ne)t:{for(he=fw,D=Y,A=ne,j=0,V=D;V;V=he(V))j++;V=0;for(var de=A;de;de=he(de))V++;for(;0<j-V;)D=he(D),j--;for(;0<V-j;)A=he(A),V--;for(;j--;){if(D===A||A!==null&&D===A.alternate){he=D;break t}D=he(D),A=he(A)}he=null}else he=null;Y!==null&&rg(G,B,Y,he,!1),ne!==null&&Fe!==null&&rg(G,Fe,ne,he,!0)}}e:{if(B=L?gi(L):window,Y=B.nodeName&&B.nodeName.toLowerCase(),Y==="select"||Y==="input"&&B.type==="file")var He=xh;else if(bh(B))if(_h)He=Sb;else{He=xb;var se=wb}else Y=B.nodeName,!Y||Y.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?L&&Ps(L.elementType)&&(He=xh):He=_b;if(He&&(He=He(e,L))){wh(G,He,n,X);break e}se&&se(e,B,L),e==="focusout"&&L&&B.type==="number"&&L.memoizedProps.value!=null&&Ws(B,"number",B.value)}switch(se=L?gi(L):window,e){case"focusin":(bh(se)||se.contentEditable==="true")&&(xr=se,hc=L,Ci=null);break;case"focusout":Ci=hc=xr=null;break;case"mousedown":pc=!0;break;case"contextmenu":case"mouseup":case"dragend":pc=!1,Ah(G,n,X);break;case"selectionchange":if(Cb)break;case"keydown":case"keyup":Ah(G,n,X)}var Se;if(cc)e:{switch(e){case"compositionstart":var Me="onCompositionStart";break e;case"compositionend":Me="onCompositionEnd";break e;case"compositionupdate":Me="onCompositionUpdate";break e}Me=void 0}else wr?vh(e,n)&&(Me="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Me="onCompositionStart");Me&&(ph&&n.locale!=="ko"&&(wr||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&wr&&(Se=ch()):(ta=X,rc="value"in ta?ta.value:ta.textContent,wr=!0)),se=Bl(L,Me),0<se.length&&(Me=new fh(Me,e,null,n,X),G.push({event:Me,listeners:se}),Se?Me.data=Se:(Se=yh(n),Se!==null&&(Me.data=Se)))),(Se=mb?gb(e,n):vb(e,n))&&(Me=Bl(L,"onBeforeInput"),0<Me.length&&(se=new fh("onBeforeInput","beforeinput",null,n,X),G.push({event:se,listeners:Me}),se.data=Se)),sw(G,e,L,n,X)}ng(G,t)})}function Ji(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Bl(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,u=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||u===null||(s=vi(e,n),s!=null&&i.unshift(Ji(e,s,u)),s=vi(e,t),s!=null&&i.push(Ji(e,s,u))),e.tag===3)return i;e=e.return}return[]}function fw(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function rg(e,t,n,i,s){for(var u=t._reactName,v=[];n!==null&&n!==i;){var b=n,E=b.alternate,L=b.stateNode;if(b=b.tag,E!==null&&E===i)break;b!==5&&b!==26&&b!==27||L===null||(E=L,s?(L=vi(n,u),L!=null&&v.unshift(Ji(n,L,E))):s||(L=vi(n,u),L!=null&&v.push(Ji(n,L,E)))),n=n.return}v.length!==0&&e.push({event:t,listeners:v})}var hw=/\r\n?/g,pw=/\u0000|\uFFFD/g;function ig(e){return(typeof e=="string"?e:""+e).replace(hw,`
`).replace(pw,"")}function og(e,t){return t=ig(t),ig(e)===t}function Ve(e,t,n,i,s,u){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||vr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&vr(e,""+i);break;case"className":Vo(e,"class",i);break;case"tabIndex":Vo(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Vo(e,n,i);break;case"style":oh(e,i,u);break;case"data":if(t!=="object"){Vo(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Go(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&Ve(e,t,"name",s.name,s,null),Ve(e,t,"formEncType",s.formEncType,s,null),Ve(e,t,"formMethod",s.formMethod,s,null),Ve(e,t,"formTarget",s.formTarget,s,null)):(Ve(e,t,"encType",s.encType,s,null),Ve(e,t,"method",s.method,s,null),Ve(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Go(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=An);break;case"onScroll":i!=null&&Ne("scroll",e);break;case"onScrollEnd":i!=null&&Ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(l(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Go(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Ne("beforetoggle",e),Ne("toggle",e),qo(e,"popover",i);break;case"xlinkActuate":Nn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Nn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Nn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Nn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Nn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Nn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Nn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Nn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Nn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":qo(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=qy.get(n)||n,qo(e,n,i))}}function Bu(e,t,n,i,s,u){switch(n){case"style":oh(e,i,u);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(l(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"children":typeof i=="string"?vr(e,i):(typeof i=="number"||typeof i=="bigint")&&vr(e,""+i);break;case"onScroll":i!=null&&Ne("scroll",e);break;case"onScrollEnd":i!=null&&Ne("scrollend",e);break;case"onClick":i!=null&&(e.onclick=An);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Kf.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),u=e[Mt]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,s),typeof i=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):qo(e,n,i)}}}function Ct(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ne("error",e),Ne("load",e);var i=!1,s=!1,u;for(u in n)if(n.hasOwnProperty(u)){var v=n[u];if(v!=null)switch(u){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Ve(e,t,u,v,n,null)}}s&&Ve(e,t,"srcSet",n.srcSet,n,null),i&&Ve(e,t,"src",n.src,n,null);return;case"input":Ne("invalid",e);var b=u=v=s=null,E=null,L=null;for(i in n)if(n.hasOwnProperty(i)){var X=n[i];if(X!=null)switch(i){case"name":s=X;break;case"type":v=X;break;case"checked":E=X;break;case"defaultChecked":L=X;break;case"value":u=X;break;case"defaultValue":b=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(l(137,t));break;default:Ve(e,t,i,X,n,null)}}nh(e,u,b,E,L,v,s,!1);return;case"select":Ne("invalid",e),i=v=u=null;for(s in n)if(n.hasOwnProperty(s)&&(b=n[s],b!=null))switch(s){case"value":u=b;break;case"defaultValue":v=b;break;case"multiple":i=b;default:Ve(e,t,s,b,n,null)}t=u,n=v,e.multiple=!!i,t!=null?gr(e,!!i,t,!1):n!=null&&gr(e,!!i,n,!0);return;case"textarea":Ne("invalid",e),u=s=i=null;for(v in n)if(n.hasOwnProperty(v)&&(b=n[v],b!=null))switch(v){case"value":i=b;break;case"defaultValue":s=b;break;case"children":u=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(l(91));break;default:Ve(e,t,v,b,n,null)}rh(e,i,s,u);return;case"option":for(E in n)n.hasOwnProperty(E)&&(i=n[E],i!=null)&&(E==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":Ve(e,t,E,i,n,null));return;case"dialog":Ne("beforetoggle",e),Ne("toggle",e),Ne("cancel",e),Ne("close",e);break;case"iframe":case"object":Ne("load",e);break;case"video":case"audio":for(i=0;i<Ii.length;i++)Ne(Ii[i],e);break;case"image":Ne("error",e),Ne("load",e);break;case"details":Ne("toggle",e);break;case"embed":case"source":case"link":Ne("error",e),Ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in n)if(n.hasOwnProperty(L)&&(i=n[L],i!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Ve(e,t,L,i,n,null)}return;default:if(Ps(t)){for(X in n)n.hasOwnProperty(X)&&(i=n[X],i!==void 0&&Bu(e,t,X,i,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(i=n[b],i!=null&&Ve(e,t,b,i,n,null))}function mw(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,u=null,v=null,b=null,E=null,L=null,X=null;for(Y in n){var G=n[Y];if(n.hasOwnProperty(Y)&&G!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":E=G;default:i.hasOwnProperty(Y)||Ve(e,t,Y,null,i,G)}}for(var B in i){var Y=i[B];if(G=n[B],i.hasOwnProperty(B)&&(Y!=null||G!=null))switch(B){case"type":u=Y;break;case"name":s=Y;break;case"checked":L=Y;break;case"defaultChecked":X=Y;break;case"value":v=Y;break;case"defaultValue":b=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(l(137,t));break;default:Y!==G&&Ve(e,t,B,Y,i,G)}}Ks(e,v,b,E,L,X,u,s);return;case"select":Y=v=b=B=null;for(u in n)if(E=n[u],n.hasOwnProperty(u)&&E!=null)switch(u){case"value":break;case"multiple":Y=E;default:i.hasOwnProperty(u)||Ve(e,t,u,null,i,E)}for(s in i)if(u=i[s],E=n[s],i.hasOwnProperty(s)&&(u!=null||E!=null))switch(s){case"value":B=u;break;case"defaultValue":b=u;break;case"multiple":v=u;default:u!==E&&Ve(e,t,s,u,i,E)}t=b,n=v,i=Y,B!=null?gr(e,!!n,B,!1):!!i!=!!n&&(t!=null?gr(e,!!n,t,!0):gr(e,!!n,n?[]:"",!1));return;case"textarea":Y=B=null;for(b in n)if(s=n[b],n.hasOwnProperty(b)&&s!=null&&!i.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ve(e,t,b,null,i,s)}for(v in i)if(s=i[v],u=n[v],i.hasOwnProperty(v)&&(s!=null||u!=null))switch(v){case"value":B=s;break;case"defaultValue":Y=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(l(91));break;default:s!==u&&Ve(e,t,v,s,i,u)}ah(e,B,Y);return;case"option":for(var ne in n)B=n[ne],n.hasOwnProperty(ne)&&B!=null&&!i.hasOwnProperty(ne)&&(ne==="selected"?e.selected=!1:Ve(e,t,ne,null,i,B));for(E in i)B=i[E],Y=n[E],i.hasOwnProperty(E)&&B!==Y&&(B!=null||Y!=null)&&(E==="selected"?e.selected=B&&typeof B!="function"&&typeof B!="symbol":Ve(e,t,E,B,i,Y));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var he in n)B=n[he],n.hasOwnProperty(he)&&B!=null&&!i.hasOwnProperty(he)&&Ve(e,t,he,null,i,B);for(L in i)if(B=i[L],Y=n[L],i.hasOwnProperty(L)&&B!==Y&&(B!=null||Y!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(l(137,t));break;default:Ve(e,t,L,B,i,Y)}return;default:if(Ps(t)){for(var Fe in n)B=n[Fe],n.hasOwnProperty(Fe)&&B!==void 0&&!i.hasOwnProperty(Fe)&&Bu(e,t,Fe,void 0,i,B);for(X in i)B=i[X],Y=n[X],!i.hasOwnProperty(X)||B===Y||B===void 0&&Y===void 0||Bu(e,t,X,B,i,Y);return}}for(var D in n)B=n[D],n.hasOwnProperty(D)&&B!=null&&!i.hasOwnProperty(D)&&Ve(e,t,D,null,i,B);for(G in i)B=i[G],Y=n[G],!i.hasOwnProperty(G)||B===Y||B==null&&Y==null||Ve(e,t,G,B,i,Y)}function lg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function gw(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],u=s.transferSize,v=s.initiatorType,b=s.duration;if(u&&b&&lg(v)){for(v=0,b=s.responseEnd,i+=1;i<n.length;i++){var E=n[i],L=E.startTime;if(L>b)break;var X=E.transferSize,G=E.initiatorType;X&&lg(G)&&(E=E.responseEnd,v+=X*(E<b?1:(b-L)/(E-L)))}if(--i,t+=8*(u+v)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Yu=null,Xu=null;function Yl(e){return e.nodeType===9?e:e.ownerDocument}function sg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function qu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vu=null;function vw(){var e=window.event;return e&&e.type==="popstate"?e===Vu?!1:(Vu=e,!0):(Vu=null,!1)}var ug=typeof setTimeout=="function"?setTimeout:void 0,yw=typeof clearTimeout=="function"?clearTimeout:void 0,dg=typeof Promise=="function"?Promise:void 0,bw=typeof queueMicrotask=="function"?queueMicrotask:typeof dg<"u"?function(e){return dg.resolve(null).then(e).catch(ww)}:ug;function ww(e){setTimeout(function(){throw e})}function ya(e){return e==="head"}function fg(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Zr(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Ki(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ki(n);for(var u=n.firstChild;u;){var v=u.nextSibling,b=u.nodeName;u[mi]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=v}}else n==="body"&&Ki(e.ownerDocument.body);n=s}while(n);Zr(t)}function hg(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Fu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Fu(n),Is(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function xw(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[mi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=on(e.nextSibling),e===null)break}return null}function _w(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=on(e.nextSibling),e===null))return null;return e}function pg(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=on(e.nextSibling),e===null))return null;return e}function Gu(e){return e.data==="$?"||e.data==="$~"}function $u(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Sw(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function on(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Qu=null;function mg(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return on(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function gg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function vg(e,t,n){switch(t=Yl(n),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function Ki(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Is(e)}var ln=new Map,yg=new Set;function Xl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $n=N.d;N.d={f:Tw,r:Cw,D:kw,C:Ew,L:zw,m:Nw,X:Mw,S:Aw,M:Ow};function Tw(){var e=$n.f(),t=Ol();return e||t}function Cw(e){var t=hr(e);t!==null&&t.tag===5&&t.type==="form"?Up(t):$n.r(e)}var Gr=typeof document>"u"?null:document;function bg(e,t,n){var i=Gr;if(i&&typeof t=="string"&&t){var s=Wt(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),yg.has(s)||(yg.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),Ct(t,"link",e),vt(t),i.head.appendChild(t)))}}function kw(e){$n.D(e),bg("dns-prefetch",e,null)}function Ew(e,t){$n.C(e,t),bg("preconnect",e,t)}function zw(e,t,n){$n.L(e,t,n);var i=Gr;if(i&&e&&t){var s='link[rel="preload"][as="'+Wt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Wt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Wt(n.imageSizes)+'"]')):s+='[href="'+Wt(e)+'"]';var u=s;switch(t){case"style":u=$r(e);break;case"script":u=Qr(e)}ln.has(u)||(e=y({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ln.set(u,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Wi(u))||t==="script"&&i.querySelector(Pi(u))||(t=i.createElement("link"),Ct(t,"link",e),vt(t),i.head.appendChild(t)))}}function Nw(e,t){$n.m(e,t);var n=Gr;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Wt(i)+'"][href="'+Wt(e)+'"]',u=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Qr(e)}if(!ln.has(u)&&(e=y({rel:"modulepreload",href:e},t),ln.set(u,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Pi(u)))return}i=n.createElement("link"),Ct(i,"link",e),vt(i),n.head.appendChild(i)}}}function Aw(e,t,n){$n.S(e,t,n);var i=Gr;if(i&&e){var s=pr(i).hoistableStyles,u=$r(e);t=t||"default";var v=s.get(u);if(!v){var b={loading:0,preload:null};if(v=i.querySelector(Wi(u)))b.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ln.get(u))&&Zu(e,n);var E=v=i.createElement("link");vt(E),Ct(E,"link",e),E._p=new Promise(function(L,X){E.onload=L,E.onerror=X}),E.addEventListener("load",function(){b.loading|=1}),E.addEventListener("error",function(){b.loading|=2}),b.loading|=4,ql(v,t,i)}v={type:"stylesheet",instance:v,count:1,state:b},s.set(u,v)}}}function Mw(e,t){$n.X(e,t);var n=Gr;if(n&&e){var i=pr(n).hoistableScripts,s=Qr(e),u=i.get(s);u||(u=n.querySelector(Pi(s)),u||(e=y({src:e,async:!0},t),(t=ln.get(s))&&Iu(e,t),u=n.createElement("script"),vt(u),Ct(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(s,u))}}function Ow(e,t){$n.M(e,t);var n=Gr;if(n&&e){var i=pr(n).hoistableScripts,s=Qr(e),u=i.get(s);u||(u=n.querySelector(Pi(s)),u||(e=y({src:e,async:!0,type:"module"},t),(t=ln.get(s))&&Iu(e,t),u=n.createElement("script"),vt(u),Ct(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(s,u))}}function wg(e,t,n,i){var s=(s=re.current)?Xl(s):null;if(!s)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=$r(n.href),n=pr(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=$r(n.href);var u=pr(s).hoistableStyles,v=u.get(e);if(v||(s=s.ownerDocument||s,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,v),(u=s.querySelector(Wi(e)))&&!u._p&&(v.instance=u,v.state.loading=5),ln.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ln.set(e,n),u||Dw(s,e,n,v.state))),t&&i===null)throw Error(l(528,""));return v}if(t&&i!==null)throw Error(l(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Qr(n),n=pr(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function $r(e){return'href="'+Wt(e)+'"'}function Wi(e){return'link[rel="stylesheet"]['+e+"]"}function xg(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function Dw(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Ct(t,"link",n),vt(t),e.head.appendChild(t))}function Qr(e){return'[src="'+Wt(e)+'"]'}function Pi(e){return"script[async]"+e}function _g(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Wt(n.href)+'"]');if(i)return t.instance=i,vt(i),i;var s=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),vt(i),Ct(i,"style",s),ql(i,n.precedence,e),t.instance=i;case"stylesheet":s=$r(n.href);var u=e.querySelector(Wi(s));if(u)return t.state.loading|=4,t.instance=u,vt(u),u;i=xg(n),(s=ln.get(s))&&Zu(i,s),u=(e.ownerDocument||e).createElement("link"),vt(u);var v=u;return v._p=new Promise(function(b,E){v.onload=b,v.onerror=E}),Ct(u,"link",i),t.state.loading|=4,ql(u,n.precedence,e),t.instance=u;case"script":return u=Qr(n.src),(s=e.querySelector(Pi(u)))?(t.instance=s,vt(s),s):(i=n,(s=ln.get(u))&&(i=y({},n),Iu(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),vt(s),Ct(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,ql(i,n.precedence,e));return t.instance}function ql(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,u=s,v=0;v<i.length;v++){var b=i[v];if(b.dataset.precedence===t)u=b;else if(u!==s)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Zu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Iu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Vl=null;function Sg(e,t,n){if(Vl===null){var i=new Map,s=Vl=new Map;s.set(n,i)}else s=Vl,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var u=n[s];if(!(u[mi]||u[xt]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var v=u.getAttribute(t)||"";v=e+v;var b=i.get(v);b?b.push(u):i.set(v,[u])}}return i}function Tg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Rw(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Cg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Uw(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=$r(i.href),u=t.querySelector(Wi(s));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Fl.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=u,vt(u);return}u=t.ownerDocument||t,i=xg(i),(s=ln.get(s))&&Zu(i,s),u=u.createElement("link"),vt(u);var v=u;v._p=new Promise(function(b,E){v.onload=b,v.onerror=E}),Ct(u,"link",i),n.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Fl.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Ju=0;function Hw(e,t){return e.stylesheets&&e.count===0&&$l(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&$l(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Ju===0&&(Ju=62500*gw());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$l(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Ju?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function Fl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$l(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Gl=null;function $l(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Gl=new Map,t.forEach(jw,e),Gl=null,Fl.call(e))}function jw(e,t){if(!(t.state.loading&4)){var n=Gl.get(e);if(n)var i=n.get(null);else{n=new Map,Gl.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<s.length;u++){var v=s[u];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(n.set(v.dataset.precedence,v),i=v)}i&&n.set(null,i)}s=t.instance,v=s.getAttribute("data-precedence"),u=n.get(v)||i,u===i&&n.set(null,s),n.set(v,s),this.count++,i=Fl.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),u?u.parentNode.insertBefore(s,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var eo={$$typeof:q,Provider:null,Consumer:null,_currentValue:U,_currentValue2:U,_threadCount:0};function Lw(e,t,n,i,s,u,v,b,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Gs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gs(0),this.hiddenUpdates=Gs(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=u,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function kg(e,t,n,i,s,u,v,b,E,L,X,G){return e=new Lw(e,t,n,v,E,L,X,G,b),t=1,u===!0&&(t|=24),u=Vt(3,null,null,t),e.current=u,u.stateNode=e,t=Nc(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:i,isDehydrated:n,cache:t},Dc(u),e}function Eg(e){return e?(e=Tr,e):Tr}function zg(e,t,n,i,s,u){s=Eg(s),i.context===null?i.context=s:i.pendingContext=s,i=la(t),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=sa(e,i,t),n!==null&&(jt(n,e,t),Oi(n,e,t))}function Ng(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ku(e,t){Ng(e,t),(e=e.alternate)&&Ng(e,t)}function Ag(e){if(e.tag===13||e.tag===31){var t=La(e,67108864);t!==null&&jt(t,e,67108864),Ku(e,67108864)}}function Mg(e){if(e.tag===13||e.tag===31){var t=Zt();t=$s(t);var n=La(e,t);n!==null&&jt(n,e,t),Ku(e,t)}}var Ql=!0;function Bw(e,t,n,i){var s=x.T;x.T=null;var u=N.p;try{N.p=2,Wu(e,t,n,i)}finally{N.p=u,x.T=s}}function Yw(e,t,n,i){var s=x.T;x.T=null;var u=N.p;try{N.p=8,Wu(e,t,n,i)}finally{N.p=u,x.T=s}}function Wu(e,t,n,i){if(Ql){var s=Pu(i);if(s===null)Lu(e,t,i,Zl,n),Dg(e,i);else if(qw(s,e,t,n,i))i.stopPropagation();else if(Dg(e,i),t&4&&-1<Xw.indexOf(e)){for(;s!==null;){var u=hr(s);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var v=Da(u.pendingLanes);if(v!==0){var b=u;for(b.pendingLanes|=2,b.entangledLanes|=2;v;){var E=1<<31-Xt(v);b.entanglements[1]|=E,v&=~E}Sn(u),(Le&6)===0&&(Al=Bt()+500,Zi(0))}}break;case 31:case 13:b=La(u,2),b!==null&&jt(b,u,2),Ol(),Ku(u,2)}if(u=Pu(i),u===null&&Lu(e,t,i,Zl,n),u===s)break;s=u}s!==null&&i.stopPropagation()}else Lu(e,t,i,null,n)}}function Pu(e){return e=tc(e),ed(e)}var Zl=null;function ed(e){if(Zl=null,e=fr(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===31){if(e=p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Zl=e,null}function Og(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ky()){case Yf:return 2;case Xf:return 8;case jo:case Ey:return 32;case qf:return 268435456;default:return 32}default:return 32}}var td=!1,ba=null,wa=null,xa=null,to=new Map,no=new Map,_a=[],Xw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dg(e,t){switch(e){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":xa=null;break;case"pointerover":case"pointerout":to.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(t.pointerId)}}function ao(e,t,n,i,s,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:u,targetContainers:[s]},t!==null&&(t=hr(t),t!==null&&Ag(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function qw(e,t,n,i,s){switch(t){case"focusin":return ba=ao(ba,e,t,n,i,s),!0;case"dragenter":return wa=ao(wa,e,t,n,i,s),!0;case"mouseover":return xa=ao(xa,e,t,n,i,s),!0;case"pointerover":var u=s.pointerId;return to.set(u,ao(to.get(u)||null,e,t,n,i,s)),!0;case"gotpointercapture":return u=s.pointerId,no.set(u,ao(no.get(u)||null,e,t,n,i,s)),!0}return!1}function Rg(e){var t=fr(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,Zf(e.priority,function(){Mg(n)});return}}else if(t===31){if(t=p(n),t!==null){e.blockedOn=t,Zf(e.priority,function(){Mg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Il(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Pu(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);ec=i,n.target.dispatchEvent(i),ec=null}else return t=hr(n),t!==null&&Ag(t),e.blockedOn=n,!1;t.shift()}return!0}function Ug(e,t,n){Il(e)&&n.delete(t)}function Vw(){td=!1,ba!==null&&Il(ba)&&(ba=null),wa!==null&&Il(wa)&&(wa=null),xa!==null&&Il(xa)&&(xa=null),to.forEach(Ug),no.forEach(Ug)}function Jl(e,t){e.blockedOn===t&&(e.blockedOn=null,td||(td=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Vw)))}var Kl=null;function Hg(e){Kl!==e&&(Kl=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Kl===e&&(Kl=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(ed(i||n)===null)continue;break}var u=hr(n);u!==null&&(e.splice(t,3),t-=3,Pc(u,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Zr(e){function t(E){return Jl(E,e)}ba!==null&&Jl(ba,e),wa!==null&&Jl(wa,e),xa!==null&&Jl(xa,e),to.forEach(t),no.forEach(t);for(var n=0;n<_a.length;n++){var i=_a[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<_a.length&&(n=_a[0],n.blockedOn===null);)Rg(n),n.blockedOn===null&&_a.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],u=n[i+1],v=s[Mt]||null;if(typeof u=="function")v||Hg(n);else if(v){var b=null;if(u&&u.hasAttribute("formAction")){if(s=u,v=u[Mt]||null)b=v.formAction;else if(ed(s)!==null)continue}else b=v.action;typeof b=="function"?n[i+1]=b:(n.splice(i,3),i-=3),Hg(n)}}}function jg(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(v){return s=v})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function nd(e){this._internalRoot=e}Wl.prototype.render=nd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var n=t.current,i=Zt();zg(n,i,e,t,null,null)},Wl.prototype.unmount=nd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zg(e.current,2,null,e,null,null),Ol(),t[dr]=null}};function Wl(e){this._internalRoot=e}Wl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_a.length&&t!==0&&t<_a[n].priority;n++);_a.splice(n,0,e),n===0&&Rg(e)}};var Lg=r.version;if(Lg!=="19.2.4")throw Error(l(527,Lg,"19.2.4"));N.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=g(t),e=e!==null?w(e):null,e=e===null?null:e.stateNode,e};var Fw={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:x,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pl.isDisabled&&Pl.supportsFiber)try{fi=Pl.inject(Fw),Yt=Pl}catch{}}return co.createRoot=function(e,t){if(!c(e))throw Error(l(299));var n=!1,i="",s=Gp,u=$p,v=Qp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(v=t.onRecoverableError)),t=kg(e,1,!1,null,null,n,i,null,s,u,v,jg),e[dr]=t.current,ju(e),new nd(t)},co.hydrateRoot=function(e,t,n){if(!c(e))throw Error(l(299));var i=!1,s="",u=Gp,v=$p,b=Qp,E=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(v=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.formState!==void 0&&(E=n.formState)),t=kg(e,1,!0,t,n??null,i,s,E,u,v,b,jg),t.context=Eg(null),n=t.current,i=Zt(),i=$s(i),s=la(i),s.callback=null,sa(n,s,i),n=i,t.current.lanes=n,pi(t,n),Sn(t),e[dr]=t.current,ju(e),new Wl(t)},co.version="19.2.4",co}var t0;function dT(){if(t0)return kd.exports;t0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),kd.exports=uT(),kd.exports}var fT=dT();const hT=()=>{const[a,r]=be.useState(null),[o,l]=be.useState(!0),[c,d]=be.useState(null);return be.useEffect(()=>{(async()=>{l(!0);try{const p=await fetch("/RSSchool_2026Q2_Stage3__ReactClassComponents//data/owid-co2-data.json");if(!p.ok)throw new Error("Failed to fetch CO2 data");const m=await p.json(),g=Object.entries(m).map(([w,y])=>{const _=y;return{id:w,iso_code:_.iso_code,data:_.data}});r(g),d(null)}catch(p){console.error(p),d(p instanceof Error?p.message:"Unknown error"),r(null)}finally{l(!1)}})()},[]),{data:a,isLoading:o,error:c}},pT="_container_1e2lk_1",mT={container:pT},gT=()=>ce.jsx("div",{className:mT.container,children:ce.jsx("div",{className:"spinner",children:"Loading CO2 data..."})}),vT="_container_1280a_1",yT="_label_1280a_9",bT="_input_1280a_17",Ad={container:vT,label:yT,input:bT},wT=Uo.memo(({value:a,onChange:r})=>ce.jsxs("div",{className:Ad.container,children:[ce.jsx("label",{htmlFor:"search",className:Ad.label,children:"Search countries:"}),ce.jsx("input",{id:"search",type:"text",value:a,onChange:o=>r(o.target.value),placeholder:"Type to search...",className:Ad.input})]})),xT="_container_1gzis_1",_T="_label_1gzis_9",ST="_select_1gzis_17",Md={container:xT,label:_T,select:ST},TT=Uo.memo(({year:a,years:r,onChange:o})=>ce.jsxs("div",{className:Md.container,children:[ce.jsx("label",{htmlFor:"year",className:Md.label,children:"Select year:"}),ce.jsx("select",{id:"year",value:a,onChange:l=>o(Number(l.target.value)),className:Md.select,children:r.map(l=>ce.jsx("option",{value:l,children:l},l))})]})),Ao=typeof window<"u"?be.useLayoutEffect:be.useEffect;function n0(a){if(a!==void 0)switch(typeof a){case"number":return a;case"string":{if(a.endsWith("px"))return parseFloat(a);break}}}function CT({box:a,defaultHeight:r,defaultWidth:o,disabled:l,element:c,mode:d,style:h}){const{styleHeight:p,styleWidth:m}=be.useMemo(()=>({styleHeight:n0(h?.height),styleWidth:n0(h?.width)}),[h?.height,h?.width]),[g,w]=be.useState({height:r,width:o}),y=l||p!==void 0||d==="only-width"||p!==void 0&&m!==void 0;return Ao(()=>{if(c===null||y)return;const _=new ResizeObserver(S=>{for(const k of S){const{contentRect:z,target:R}=k;c===R&&w(C=>C.height===z.height&&C.width===z.width?C:{height:z.height,width:z.width})}});return _.observe(c,{box:a}),()=>{_?.unobserve(c)}},[a,y,c,p,m]),be.useMemo(()=>({height:p??g.height,width:m??g.width}),[g,p,m])}function kT(a){const r=be.useRef(()=>{throw new Error("Cannot call during render.")});return Ao(()=>{r.current=a},[a]),be.useCallback(o=>r.current?.(o),[r])}function Od({containerElement:a,direction:r,isRtl:o,scrollOffset:l}){return l}function Na(a,r="Assertion error"){if(!a)throw console.error(r),Error(r)}function bo(a,r){if(a===r)return!0;if(!!a!=!!r||(Na(a!==void 0),Na(r!==void 0),Object.keys(a).length!==Object.keys(r).length))return!1;for(const o in a)if(!Object.is(r[o],a[o]))return!1;return!0}function _y({cachedBounds:a,itemCount:r,itemSize:o}){if(r===0)return 0;if(typeof o=="number")return r*o;{const l=a.get(a.size===0?0:a.size-1);Na(l!==void 0,"Unexpected bounds cache miss");const c=(l.scrollOffset+l.size)/a.size;return r*c}}function ET({align:a,cachedBounds:r,index:o,itemCount:l,itemSize:c,containerScrollOffset:d,containerSize:h}){if(o<0||o>=l)throw RangeError(`Invalid index specified: ${o}`,{cause:`Index ${o} is not within the range of 0 - ${l-1}`});const p=_y({cachedBounds:r,itemCount:l,itemSize:c}),m=r.get(o),g=Math.max(0,Math.min(p-h,m.scrollOffset)),w=Math.max(0,m.scrollOffset-h+m.size);switch(a==="smart"&&(d>=w&&d<=g?a="auto":a="center"),a){case"start":return g;case"end":return w;case"center":return m.scrollOffset<=h/2?0:m.scrollOffset+m.size/2>=p-h/2?p-h:m.scrollOffset+m.size/2-h/2;default:return d>=w&&d<=g?d:d<w?w:g}}function Dd({cachedBounds:a,containerScrollOffset:r,containerSize:o,itemCount:l,overscanCount:c}){const d=l-1;let h=0,p=-1,m=0,g=-1,w=0;for(;w<d;){const y=a.get(w);if(y.scrollOffset+y.size>r)break;w++}for(h=w,m=Math.max(0,h-c);w<d;){const y=a.get(w);if(y.scrollOffset+y.size>=r+o)break;w++}return p=Math.min(d,w),g=Math.min(l-1,p+c),h<0&&(h=0,p=-1,m=0,g=-1),{startIndexVisible:h,stopIndexVisible:p,startIndexOverscan:m,stopIndexOverscan:g}}function zT({itemCount:a,itemProps:r,itemSize:o}){const l=new Map;return{get(c){for(Na(c<a,`Invalid index ${c}`);l.size-1<c;){const h=l.size;let p;switch(typeof o){case"function":{p=o(h,r);break}case"number":{p=o;break}}if(h===0)l.set(h,{size:p,scrollOffset:0});else{const m=l.get(h-1);Na(m!==void 0,`Unexpected bounds cache miss for index ${c}`),l.set(h,{scrollOffset:m.scrollOffset+m.size,size:p})}}const d=l.get(c);return Na(d!==void 0,`Unexpected bounds cache miss for index ${c}`),d},set(c,d){l.set(c,d)},get size(){return l.size}}}function NT({itemCount:a,itemProps:r,itemSize:o}){return be.useMemo(()=>zT({itemCount:a,itemProps:r,itemSize:o}),[a,r,o])}function AT({containerSize:a,itemSize:r}){let o;return typeof r==="string"?(Na(r.endsWith("%"),`Invalid item size: "${r}"; string values must be percentages (e.g. "100%")`),Na(a!==void 0,"Container size must be defined if a percentage item size is specified"),o=a*parseInt(r)/100):o=r,o}function MT({containerElement:a,containerStyle:r,defaultContainerSize:o=0,direction:l,isRtl:c=!1,itemCount:d,itemProps:h,itemSize:p,onResize:m,overscanCount:g}){const{height:w=o,width:y=o}=CT({defaultHeight:o,defaultWidth:void 0,element:a,mode:"only-height",style:r}),_=be.useRef({height:0,width:0}),S=w,k=AT({containerSize:S,itemSize:p});be.useLayoutEffect(()=>{if(typeof m=="function"){const oe=_.current;(oe.height!==w||oe.width!==y)&&(m({height:w,width:y},{...oe}),oe.height=w,oe.width=y)}},[w,m,y]);const z=NT({itemCount:d,itemProps:h,itemSize:k}),R=be.useCallback(oe=>z.get(oe),[z]),[C,M]=be.useState(()=>Dd({cachedBounds:z,containerScrollOffset:0,containerSize:S,itemCount:d,overscanCount:g})),{startIndexVisible:q,startIndexOverscan:$,stopIndexVisible:Z,stopIndexOverscan:W}={startIndexVisible:Math.min(d-1,C.startIndexVisible),startIndexOverscan:Math.min(d-1,C.startIndexOverscan),stopIndexVisible:Math.min(d-1,C.stopIndexVisible),stopIndexOverscan:Math.min(d-1,C.stopIndexOverscan)},K=be.useCallback(()=>_y({cachedBounds:z,itemCount:d,itemSize:k}),[z,d,k]),fe=be.useCallback(oe=>{const le=Od({containerElement:a,direction:l,isRtl:c,scrollOffset:oe});return Dd({cachedBounds:z,containerScrollOffset:le,containerSize:S,itemCount:d,overscanCount:g})},[z,a,S,l,c,d,g]);Ao(()=>{const oe=a?.scrollTop??0;M(fe(oe))},[a,l,fe]),Ao(()=>{if(!a)return;const oe=()=>{M(le=>{const{scrollLeft:ee,scrollTop:ge}=a,me=Od({containerElement:a,direction:l,isRtl:c,scrollOffset:ge}),ke=Dd({cachedBounds:z,containerScrollOffset:me,containerSize:S,itemCount:d,overscanCount:g});return bo(ke,le)?le:ke})};return a.addEventListener("scroll",oe),()=>{a.removeEventListener("scroll",oe)}},[z,a,S,l,d,g]);const ie=kT(({align:oe="auto",containerScrollOffset:le,index:ee})=>{let ge=ET({align:oe,cachedBounds:z,containerScrollOffset:le,containerSize:S,index:ee,itemCount:d,itemSize:k});if(a){if(ge=Od({containerElement:a,direction:l,isRtl:c,scrollOffset:ge}),typeof a.scrollTo!="function"){const me=fe(ge);bo(C,me)||M(me)}return ge}});return{getCellBounds:R,getEstimatedSize:K,scrollToIndex:ie,startIndexOverscan:$,startIndexVisible:q,stopIndexOverscan:W,stopIndexVisible:Z}}function OT(a){return be.useMemo(()=>a,Object.values(a))}function DT(a,r){const{ariaAttributes:o,style:l,...c}=a,{ariaAttributes:d,style:h,...p}=r;return bo(o,d)&&bo(l,h)&&bo(c,p)}function RT(a){return a!=null&&typeof a=="object"&&"getAverageRowHeight"in a&&typeof a.getAverageRowHeight=="function"}const UT="data-react-window-index";function HT({children:a,className:r,defaultHeight:o=0,listRef:l,onResize:c,onRowsRendered:d,overscanCount:h=3,rowComponent:p,rowCount:m,rowHeight:g,rowProps:w,tagName:y="div",style:_,...S}){const k=OT(w),z=be.useMemo(()=>be.memo(p,DT),[p]),[R,C]=be.useState(null),M=RT(g),q=be.useMemo(()=>M?ge=>g.getRowHeight(ge)??g.getAverageRowHeight():g,[M,g]),{getCellBounds:$,getEstimatedSize:Z,scrollToIndex:W,startIndexOverscan:K,startIndexVisible:fe,stopIndexOverscan:ie,stopIndexVisible:oe}=MT({containerElement:R,containerStyle:_,defaultContainerSize:o,direction:"vertical",itemCount:m,itemProps:k,itemSize:q,onResize:c,overscanCount:h});be.useImperativeHandle(l,()=>({get element(){return R},scrollToRow({align:ge="auto",behavior:me="auto",index:ke}){const x=W({align:ge,containerScrollOffset:R?.scrollTop??0,index:ke});typeof R?.scrollTo=="function"&&R.scrollTo({behavior:me,top:x})}}),[R,W]),Ao(()=>{if(!R)return;const ge=Array.from(R.children).filter((me,ke)=>{if(me.hasAttribute("aria-hidden"))return!1;const x=`${K+ke}`;return me.setAttribute(UT,x),!0});if(M)return g.observeRowElements(ge)},[R,M,g,K,ie]),be.useEffect(()=>{K>=0&&ie>=0&&d&&d({startIndex:fe,stopIndex:oe},{startIndex:K,stopIndex:ie})},[d,K,fe,ie,oe]);const le=be.useMemo(()=>{const ge=[];if(m>0)for(let me=K;me<=ie;me++){const ke=$(me);ge.push(be.createElement(z,{...k,ariaAttributes:{"aria-posinset":me+1,"aria-setsize":m,role:"listitem"},key:me,index:me,style:{position:"absolute",left:0,transform:`translateY(${ke.scrollOffset}px)`,height:M?void 0:ke.size,width:"100%"}}))}return ge},[z,$,M,m,k,K,ie]),ee=ce.jsx("div",{"aria-hidden":!0,style:{height:Z(),width:"100%",zIndex:-1}});return be.createElement(y,{role:"list",...S,className:r,ref:C,style:{position:"relative",maxHeight:"100%",flexGrow:1,overflowY:"auto",..._}},le,a,ee)}const lf=(a,r)=>a==null?"N/A":a.toLocaleString("en-US",r??{maximumFractionDigits:0}),jT="_table_1gsi9_1",LT="_row_1gsi9_13",BT="_labelCell_1gsi9_21",YT="_valueCell_1gsi9_33",XT="_noData_1gsi9_41",uo={table:jT,row:LT,labelCell:BT,valueCell:YT,noData:XT},qT=Uo.memo(({data:a,year:r,columns:o})=>{const l=be.useMemo(()=>{const c=a.filter(d=>d.year===r);return c.length>0?c[0]:null},[a,r]);return l?ce.jsx("table",{className:uo.table,children:ce.jsx("tbody",{children:o.map(c=>ce.jsxs("tr",{className:uo.row,children:[ce.jsx("td",{className:uo.labelCell,children:c.replace(/_/g," ").toUpperCase()}),ce.jsx("td",{className:uo.valueCell,children:lf(l[c],{maximumFractionDigits:2})})]},c))})}):ce.jsxs("div",{className:uo.noData,children:["No data available for year ",r]})}),VT=()=>["year","population","co2","co2_per_capita","cement_co2","cement_co2_per_capita","coal_co2","coal_co2_per_capita","gas_co2","gas_co2_per_capita","oil_co2","oil_co2_per_capita","methane","methane_per_capita","nitrous_oxide","nitrous_oxide_per_capita","temperature_change_from_co2","total_ghg","total_ghg_per_capita"],sf=a=>{const r=new Map;return a.forEach(o=>{r.set(o.year,o)}),r},cf=(a,r)=>a.get(r)?.population,FT=(a,r)=>a.get(r)?.co2,GT=a=>{const r=new Set;return a.forEach(o=>{o.data.forEach(l=>{r.add(l.year)})}),Array.from(r).sort((o,l)=>o-l)},$T="_card_2twj0_1",QT="_header_2twj0_17",ZT="_title_2twj0_31",IT="_isoCode_2twj0_39",JT="_stats_2twj0_53",fo={card:$T,header:QT,title:ZT,isoCode:IT,stats:JT},KT=({listState:{countries:a,selectedYear:r,selectedColumns:o},index:l,style:c})=>{const d=a[l],h=sf(d.data),p=cf(h,r),m=FT(h,r);return ce.jsx("div",{style:c,children:ce.jsxs("div",{className:fo.card,children:[ce.jsxs("div",{className:fo.header,children:[ce.jsx("h3",{className:fo.title,children:d.id}),d.iso_code&&ce.jsx("span",{className:fo.isoCode,children:d.iso_code})]}),ce.jsxs("div",{className:fo.stats,children:[ce.jsxs("div",{children:["Population (",r,"): ",lf(p)]}),ce.jsxs("div",{children:["CO₂ Emissions (",r,"): ",lf(m)," tonnes"]})]}),ce.jsx(qT,{data:d.data,year:r,columns:o})]})})},WT="_countryList_o08x2_1",PT={countryList:WT},e4=Uo.memo(function({countries:r,searchQuery:o,selectedColumns:l,selectedRegion:c,selectedYear:d,sortField:h,sortOrder:p}){const m=be.useMemo(()=>r.filter(w=>{const y=w.id.toLowerCase().includes(o.toLowerCase()),_=!c||w.data.some(S=>S.region===c);return y&&_}).sort((w,y)=>{if(h==="name")return p==="asc"?w.id.localeCompare(y.id):y.id.localeCompare(w.id);{const _=cf(sf(w.data),d)||0,S=cf(sf(y.data),d)||0;return p==="asc"?_-S:S-_}}),[r,o,c,d,h,p]),g=be.useMemo(()=>({countries:m,selectedYear:d,selectedColumns:l}),[m,d,l]);return ce.jsx("div",{className:PT.countryList,style:{height:"600px"},children:ce.jsx(HT,{rowComponent:KT,rowCount:m.length,rowHeight:295,rowProps:{listState:g}})})}),t4="_overlay_1lp0j_1",n4="_modal_1lp0j_27",a4="_title_1lp0j_45",r4="_columnList_1lp0j_55",i4="_columnItem_1lp0j_63",o4="_checkbox_1lp0j_71",l4="_buttonContainer_1lp0j_79",s4="_closeButton_1lp0j_91",ka={overlay:t4,modal:n4,title:a4,columnList:r4,columnItem:i4,checkbox:o4,buttonContainer:l4,closeButton:s4},c4=Uo.memo(({isOpen:a,availableColumns:r,selectedColumns:o,onToggle:l,onClose:c})=>a?ce.jsx("div",{className:ka.overlay,children:ce.jsxs("div",{className:ka.modal,children:[ce.jsx("h2",{className:ka.title,children:"Select columns to display"}),ce.jsx("div",{className:ka.columnList,children:r.map(d=>ce.jsx("div",{className:ka.columnItem,children:ce.jsxs("label",{children:[ce.jsx("input",{type:"checkbox",checked:o.includes(d),onChange:()=>l(d),className:ka.checkbox}),d]})},d))}),ce.jsx("div",{className:ka.buttonContainer,children:ce.jsx("button",{onClick:c,className:ka.closeButton,children:"Close"})})]})}):null),u4="_container_15ou3_1",d4="_title_15ou3_13",f4="_controls_15ou3_23",h4="_sortContainer_15ou3_37",p4="_sortLabel_15ou3_45",m4="_sortSelect_15ou3_53",g4="_sortButton_15ou3_65",v4="_columnButtonContainer_15ou3_77",y4="_columnButton_15ou3_77",b4="_errorMessage_15ou3_97",w4="_noDataMessage_15ou3_107",pn={container:u4,title:d4,controls:f4,sortContainer:h4,sortLabel:p4,sortSelect:m4,sortButton:g4,columnButtonContainer:v4,columnButton:y4,errorMessage:b4,noDataMessage:w4},x4=()=>{const{data:a,isLoading:r,error:o}=hT(),[l,c]=be.useState({searchQuery:"",selectedRegion:"",selectedYear:2020,sortField:"population",sortOrder:"desc",selectedColumns:["year","population","co2","co2_per_capita"],isColumnModalOpen:!1}),d=be.useMemo(()=>a?GT(a):[],[a]),h=be.useMemo(()=>VT(),[]),p=be.useCallback(k=>{c(z=>({...z,searchQuery:k}))},[]),m=be.useCallback(k=>{c(z=>({...z,selectedYear:k}))},[]),g=be.useCallback(k=>{c(z=>({...z,sortField:k}))},[]),w=be.useCallback(k=>{g(k.target.value)},[g]),y=be.useCallback(()=>{c(k=>({...k,sortOrder:k.sortOrder==="asc"?"desc":"asc"}))},[]),_=be.useCallback(k=>{c(z=>({...z,selectedColumns:z.selectedColumns.includes(k)?z.selectedColumns.filter(R=>R!==k):[...z.selectedColumns,k]}))},[]),S=be.useCallback(()=>{c(k=>({...k,isColumnModalOpen:!k.isColumnModalOpen}))},[]);return r?ce.jsx(gT,{}):o?ce.jsxs("div",{className:pn.errorMessage,children:["Error: ",o]}):a?ce.jsxs("div",{className:pn.container,children:[ce.jsx("h1",{className:pn.title,children:"CO₂ Emissions Data Explorer"}),ce.jsxs("div",{className:pn.controls,children:[ce.jsx(wT,{value:l.searchQuery,onChange:p}),ce.jsx(TT,{year:l.selectedYear,years:d,onChange:m}),ce.jsxs("div",{className:pn.sortContainer,children:[ce.jsx("label",{className:pn.sortLabel,children:"Sort by:"}),ce.jsxs("select",{value:l.sortField,onChange:w,className:pn.sortSelect,children:[ce.jsx("option",{value:"population",children:"Population"}),ce.jsx("option",{value:"name",children:"Name"})]}),ce.jsx("button",{onClick:y,className:pn.sortButton,children:l.sortOrder==="asc"?"Ascending":"Descending"})]}),ce.jsx("div",{className:pn.columnButtonContainer,children:ce.jsxs("button",{onClick:S,className:pn.columnButton,children:["Select columns (",l.selectedColumns.length," selected)"]})})]}),ce.jsx(e4,{countries:a,searchQuery:l.searchQuery,selectedColumns:l.selectedColumns,selectedRegion:l.selectedRegion,selectedYear:l.selectedYear,sortField:l.sortField,sortOrder:l.sortOrder}),ce.jsx(c4,{isOpen:l.isColumnModalOpen,availableColumns:h,selectedColumns:l.selectedColumns,onToggle:_,onClose:S})]}):ce.jsx("div",{className:pn.noDataMessage,children:"No data available"})};rT({enabled:!0});fT.createRoot(document.getElementById("root")).render(ce.jsx(be.StrictMode,{children:ce.jsx(be.Profiler,{onRender:console.log,id:"",children:ce.jsx(x4,{})})}));
