(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Kje1:function(t,i,n){"use strict";n.r(i),n.d(i,"Tab1PageModule",(function(){return f}));var e=n("TEn/"),o=n("ofXK"),s=n("3Pt+"),r=n("tyNb"),a=n("fXoL"),c=n("zbXe"),b=n("kVNm");const l=[{path:"",component:(()=>{class t{constructor(t){this.noticiasService=t,this.noticias=[]}ngOnInit(){this.noticiasService.obtenerNoticias().subscribe(t=>{this.noticias=t.articles})}cargarMasNoticias(t){this.noticiasService.obtenerNoticias().subscribe(i=>{if(0===i.articles.length)return t.target.complete(),void(t.target.disabled=!0);this.noticias=[...this.noticias,...i.articles],t.target.complete()})}}return t.\u0275fac=function(i){return new(i||t)(a.Hb(c.a))},t.\u0275cmp=a.Bb({type:t,selectors:[["app-tab1"]],decls:8,vars:4,consts:[[3,"translucent"],["color","dark"],["color","dark",3,"fullscreen"],[3,"noticias","enFavoritos"],["threshold","20px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Cargando mas noticias ..."]],template:function(t,i){1&t&&(a.Kb(0,"ion-header",0),a.Kb(1,"ion-toolbar",1),a.Kb(2,"ion-title"),a.ec(3," Noticias "),a.Jb(),a.Jb(),a.Jb(),a.Kb(4,"ion-content",2),a.Ib(5,"app-noticias",3),a.Kb(6,"ion-infinite-scroll",4),a.Rb("ionInfinite",(function(t){return i.cargarMasNoticias(t)})),a.Ib(7,"ion-infinite-scroll-content",5),a.Jb(),a.Jb()),2&t&&(a.Yb("translucent",!0),a.xb(4),a.Yb("fullscreen",!0),a.xb(1),a.Yb("noticias",i.noticias)("enFavoritos",!1))},directives:[e.k,e.A,e.z,e.i,b.a,e.n,e.o],styles:[""]}),t})()}];let u=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(i){return new(i||t)},imports:[[r.i.forChild(l)],r.i]}),t})();var p=n("j1ZV");let f=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(i){return new(i||t)},imports:[[e.B,o.b,s.a,u,p.a]]}),t})()}}]);