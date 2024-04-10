import{a as Ce}from"./chunk-RAINTSEK.js";import{a as ye}from"./chunk-BPCXBGAN.js";import{c as U,d as Me,e as Se,f as A,g as H,h as F}from"./chunk-DYYYTC6F.js";import{a as q,b as E,c as Z,d as Q,e as Y,f as y,g as X,h as J,i as K,j as ee,k as te,l as oe}from"./chunk-V5NWHRLM.js";import{Ba as v,Ca as f,F as ce,Fa as pe,Ga as me,J as b,Ka as ue,L as u,La as he,Ma as fe,Na as P,O as le,Oa as s,Pa as R,Q as k,R as C,S as D,Sa as g,Ua as B,Va as T,Wa as L,_ as de,ab as $,ca as d,cb as z,eb as ge,f as ae,gb as be,ib as xe,jb as j,ka as x,kb as G,ma as m,mb as ve,nb as we,ob as ke,pa as se,pb as O,qa as h,qb as _,ra as w,rb as _e,sa as I,ta as V,ua as W,va as n,wa as i,xa as l,ya as S}from"./chunk-FZC3OZB2.js";var De=[{path:"",loadComponent:()=>import("./chunk-GV4TRVAP.js"),children:[{path:"",redirectTo:"boards",pathMatch:"full"},{path:"boards",loadComponent:()=>import("./chunk-DDJRYAUR.js"),title:"Boards | Trello"},{path:"workspace/:id",loadComponent:()=>import("./chunk-Y7B24ED6.js")}]},{path:"board/:workspace-id/:board-id",loadComponent:()=>import("./chunk-X4HFWVL2.js")},{path:"**",redirectTo:"",pathMatch:"full"}];var Ee={providers:[ve(De,ke(),we())]};var re=(()=>{let e=class e{constructor(){this.dimensions="size-2"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=u({type:e,selectors:[["app-users-icon"]],inputs:{dimensions:"dimensions"},standalone:!0,features:[g],decls:3,vars:1,consts:[[3,"ngClass"],["xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-people"],["d","M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"]],template:function(r,a){r&1&&(n(0,"div",0),D(),n(1,"svg",1),l(2,"path",2),i()()),r&2&&m("ngClass",a.dimensions+" flex items-center justify-center")},dependencies:[z,$]});let t=e;return t})();function je(t,e){if(t&1&&(n(0,"a",5),l(1,"app-workspace-icon",6),n(2,"span",7),s(3),i()()),t&2){let c=e.$implicit;pe("routerLink","workspace/",c.id,""),d(),m("workspace",c),d(2),R(c.title)}}function Ge(t,e){if(t&1&&(n(0,"p",4),s(1,"Your workspaces"),i(),V(2,je,4,3,"a",8,I)),t&2){let c=f(2);d(2),W(c.data.workspaces)}}function Ue(t,e){if(t&1){let c=S();n(0,"button",9),v("click",function(){k(c);let r=f(2);return C(r.showCreateWorkspaceModal())}),n(1,"span",10),l(2,"app-users-icon",11),s(3," Create workspace "),i(),n(4,"p",12),s(5,"A Workspace is a group of boards and people. Use it to organize your company, side hustle, family, or friends."),i()()}}function $e(t,e){if(t&1&&(n(0,"div",3),x(1,Ge,4,0)(2,Ue,6,0),i()),t&2){let c=f();h("",c.data.workspaces.length>0?"p-3":"py-3"," w-[304px] mt-2 flex flex-col gap-1 bg-cc-menu rounded-xl border border-cc-border/15 shadow-xl shadow-cc-shadow"),d(),w(1,c.data.workspaces.length>0?1:2)}}var Be=(()=>{let e=class e{constructor(){this.appService=b(_)}ngOnInit(){this.appService.getData().subscribe({next:o=>this.data=o})}showCreateWorkspaceModal(){let o=document.getElementById("create-workspace-modal");o&&o.showModal()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=u({type:e,selectors:[["app-workspaces-dropdown"]],inputs:{boardPage:"boardPage",board:"board"},standalone:!0,features:[g],decls:6,vars:4,consts:[[3,"cdkMenuTriggerFor"],["dimensions","size-3"],["menu",""],["cdkMenu",""],[1,"text-xs","font-semibold","ms-2","mt-1","mb-2","text-cc-subtle"],["cdkMenuItem","",1,"flex","gap-3","items-center","p-2","hover:bg-cc-menu-item-hover","rounded-md",3,"routerLink"],["sizeClasses","min-h-10 min-w-10 text-xl rounded",3,"workspace"],[1,"text-nowrap","truncate","text-sm","font-medium","text-cc-text"],["cdkMenuItem","","class","flex gap-3 items-center p-2 hover:bg-cc-menu-item-hover rounded-md",3,"routerLink"],["cdkMenuItem","",1,"flex","flex-col","gap-1","py-2","px-3","hover:bg-cc-menu-item-hover",3,"click"],[1,"flex","gap-2","items-center","text-cc-text","text-sm","font-medium"],["dimensions","size-4"],[1,"text-xs","text-start","text-cc-subtle"]],template:function(r,a){if(r&1&&(n(0,"button",0)(1,"span"),s(2,"Workspaces"),i(),l(3,"app-chevron-icon",1),i(),x(4,$e,3,4,"ng-template",null,2,L)),r&2){let p=P(5);h("",a.boardPage&&a.board?"hover:bg-cc-boardpage-menu-hover aria-expanded:bg-cc-boardpage-menu-active aria-expanded:text-cc-boardpage-menu-text-active":"hover:bg-cc-overlay aria-expanded:bg-cc-accent-muted aria-expanded:text-cc-accent"," px-3 text-sm rounded-sm h-full flex items-center gap-2"),m("cdkMenuTriggerFor",p)}},dependencies:[O,G,A,F,H,U,_e,re]});let t=e;return t})();var ne=(()=>{let e=class e{constructor(){this.appService=b(_)}transform(o,...r){let a;return this.appService.getWorkspace(o).subscribe({next:p=>{p&&(a=p)}}),a}};e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=le({name:"workspaceData",type:e,pure:!0,standalone:!0});let t=e;return t})();function qe(t,e){if(t&1&&(n(0,"a",4),l(1,"div"),B(2,"boardData"),n(3,"div",5)(4,"p",6),s(5),B(6,"boardData"),i(),n(7,"p",7),s(8),B(9,"workspaceData"),i()()()),t&2){let c=e.$implicit;me("routerLink","board/",c.workspaceId,"/",c.boardId,""),d(),h("min-w-10 h-8 rounded-sm ",T(2,7,c).background,""),d(4),R(T(6,9,c).title),d(3),R(T(9,11,c.workspaceId).title)}}function Ze(t,e){if(t&1&&V(0,qe,10,13,"a",8,I),t&2){let c=f(2);W(c.data.recent)}}function Qe(t,e){t&1&&(n(0,"p",9),s(1,"No recent activity."),i())}function Ye(t,e){if(t&1&&(n(0,"div",3),x(1,Ze,2,0)(2,Qe,2,0),i()),t&2){let c=f();d(),w(1,c.data.recent.length>0?1:2)}}var Te=(()=>{let e=class e{constructor(){this.appService=b(_)}ngOnInit(){this.appService.getData().subscribe({next:o=>this.data=o})}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=u({type:e,selectors:[["app-recent-dropdown"]],inputs:{boardPage:"boardPage",board:"board"},standalone:!0,features:[g],decls:6,vars:4,consts:[[3,"cdkMenuTriggerFor"],["dimensions","size-3"],["menu",""],["cdkMenu","",1,"w-[304px]","mt-2","p-3","flex","flex-col","gap-1","bg-cc-menu","rounded-xl","border","border-cc-border/15","shadow-xl","shadow-cc-shadow"],["cdkMenuItem","",1,"flex","gap-3","items-center","p-1","hover:bg-cc-menu-item-hover","rounded-md",3,"routerLink"],[1,"text-cc-text","overflow-hidden"],[1,"truncate","text-sm","font-medium"],[1,"text-xs","truncate","text-cc-subtle"],["cdkMenuItem","","class","flex gap-3 items-center p-1 hover:bg-cc-menu-item-hover rounded-md",3,"routerLink"],[1,"text-cc-subtle","text-sm","font-medium"]],template:function(r,a){if(r&1&&(n(0,"button",0)(1,"span"),s(2,"Recent"),i(),l(3,"app-chevron-icon",1),i(),x(4,Ye,3,1,"ng-template",null,2,L)),r&2){let p=P(5);h("",a.boardPage&&a.board?"hover:bg-cc-boardpage-menu-hover aria-expanded:bg-cc-boardpage-menu-active aria-expanded:text-cc-boardpage-menu-text-active":"hover:bg-cc-overlay aria-expanded:bg-cc-accent-muted aria-expanded:text-cc-accent"," px-3 text-sm rounded-sm h-full flex items-center gap-2"),m("cdkMenuTriggerFor",p)}},dependencies:[O,G,A,F,H,U,ne,ye]});let t=e;return t})();function Xe(t,e){if(t&1){let c=S();n(0,"button",4),v("click",function(){k(c);let r=f(2);return C(r.showCreateBoardModal())}),n(1,"span",5),l(2,"app-trello-icon",8),s(3," Create board "),i(),n(4,"p",7),s(5,"A board is made up of cards ordered on lists. Use it to manage projects, track information, or organize anything."),i()()}}function Je(t,e){if(t&1){let c=S();n(0,"div",2),x(1,Xe,6,0,"button",3),n(2,"button",4),v("click",function(){k(c);let r=f();return C(r.showCreateWorkspaceModal())}),n(3,"span",5),l(4,"app-users-icon",6),s(5," Create workspace "),i(),n(6,"p",7),s(7,"A Workspace is a group of boards and people. Use it to organize your company, side hustle, family, or friends."),i()()()}if(t&2){let c=f();d(),w(1,c.data.workspaces.length>0?1:-1)}}var Ie=(()=>{let e=class e{constructor(){this.appService=b(_)}ngOnInit(){this.appService.getData().subscribe({next:o=>this.data=o})}showCreateBoardModal(){this.appService.setCreateBoardWorkspace();let o=document.getElementById("create-board-modal");o&&o.showModal()}showCreateWorkspaceModal(){let o=document.getElementById("create-workspace-modal");o&&o.showModal()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=u({type:e,selectors:[["app-create-dropdown"]],inputs:{boardPage:"boardPage",board:"board"},standalone:!0,features:[g],decls:5,vars:4,consts:[[3,"cdkMenuTriggerFor"],["menu",""],["cdkMenu","",1,"w-[304px]","mt-2","py-3","flex","flex-col","bg-cc-menu","rounded-xl","border","border-cc-border/15","shadow-xl","shadow-cc-shadow"],["cdkMenuItem","","class","flex flex-col gap-1 py-2 px-3 hover:bg-cc-menu-item-hover"],["cdkMenuItem","",1,"flex","flex-col","gap-1","py-2","px-3","hover:bg-cc-menu-item-hover",3,"click"],[1,"flex","gap-2","items-center","text-cc-text","text-sm","font-medium"],["dimensions","size-4"],[1,"text-xs","text-start","text-cc-subtle"],["dimensions","size-3"]],template:function(r,a){if(r&1&&(n(0,"button",0)(1,"span"),s(2,"Create"),i()(),x(3,Je,8,1,"ng-template",null,1,L)),r&2){let p=P(4);h("",a.boardPage&&a.board?"bg-cc-boardpage-accent-menu hover:bg-cc-boardpage-accent-menu-hover aria-expanded:bg-cc-boardpage-accent-menu-expanded aria-expanded:text-cc-boardpage-accent-menu-text":"bg-cc-accent hover:bg-cc-accent-highlight aria-expanded:bg-cc-accent-muted aria-expanded:text-cc-accent"," text-cc-base px-3 text-sm rounded-sm h-full flex items-center gap-2"),m("cdkMenuTriggerFor",p)}},dependencies:[z,O,A,F,H,Ce,re]});let t=e;return t})();var Ve=(()=>{let e=class e{constructor(){this.dimensions="size-2"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=u({type:e,selectors:[["app-github-icon"]],inputs:{dimensions:"dimensions"},standalone:!0,features:[g],decls:3,vars:1,consts:[[3,"ngClass"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 496 512"],["fill","currentColor","d","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]],template:function(r,a){r&1&&(n(0,"div",0),D(),n(1,"svg",1),l(2,"path",2),i()()),r&2&&m("ngClass",a.dimensions+" flex items-center justify-center")},dependencies:[z,$]});let t=e;return t})();var ie=(()=>{let e=class e{constructor(){this.savedTheme=new ae(void 0)}getSavedTheme(){let o=localStorage.getItem("data-theme");o=="light"?(document.documentElement.setAttribute("data-theme","light"),this.savedTheme.next(o)):o=="dark"?(document.documentElement.setAttribute("data-theme","dark"),this.savedTheme.next(o)):(document.documentElement.removeAttribute("data-theme"),this.savedTheme.next(void 0))}setTheme(o){o?localStorage.setItem("data-theme",o):localStorage.removeItem("data-theme"),this.getSavedTheme()}getSavedThemeObservable(){return this.savedTheme.asObservable()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ce({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var We=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=u({type:e,selectors:[["app-theme-system"]],standalone:!0,features:[g],decls:30,vars:0,consts:[["width","64","height","48","viewBox","0 0 64 48","fill","none","xmlns","http://www.w3.org/2000/svg"],["clip-path","url(#clip0_761_573049)"],["id","mask0_761_573049","maskUnits","userSpaceOnUse","x","0","y","0","width","48","height","48",2,"mask-type","alpha"],["d","M48 0H0V48H16L48 0Z","fill","#D9D9D9"],["mask","url(#mask0_761_573049)"],["width","64","height","48","fill","white"],["x","6","y","18","width","10","height","24","rx","3","fill","#DCDFE4"],["x","20","y","18","width","10","height","20","rx","3","fill","#DCDFE4"],["x","34","y","18","width","10","height","16","rx","3","fill","#DCDFE4"],["id","path-5-outside-1_761_573049","maskUnits","userSpaceOnUse","x","0","y","0","width","64","height","13","fill","black"],["fill","white","width","64","height","13"],["d","M0 0H64V12H0V0Z"],["d","M64 11H0V13H64V11Z","fill","#091E42","fill-opacity","0.141176","mask","url(#path-5-outside-1_761_573049)"],["x","6","y","4","width","12","height","4","rx","2","fill","#DCDFE4"],["id","mask1_761_573049","maskUnits","userSpaceOnUse","x","16","y","0","width","48","height","48",2,"mask-type","alpha"],["d","M48 0H64V48H16L48 0Z","fill","#D9D9D9"],["mask","url(#mask1_761_573049)"],["width","64","height","48","fill","#161A1D"],["x","20","y","18","width","10","height","20","rx","3","fill","#454F59"],["x","34","y","18","width","10","height","16","rx","3","fill","#454F59"],["x","48","y","18","width","10","height","24","rx","3","fill","#454F59"],["id","path-12-outside-2_761_573049","maskUnits","userSpaceOnUse","x","0","y","0","width","64","height","13","fill","black"],["d","M64 11H0V13H64V11Z","fill","#A6C5E2","fill-opacity","0.160784","mask","url(#path-12-outside-2_761_573049)"],["x","6","y","4","width","12","height","4","rx","2","fill","#454F59"],["x","54","y","4","width","4","height","4","rx","2","fill","#454F59"],["id","clip0_761_573049"]],template:function(r,a){r&1&&(D(),n(0,"svg",0)(1,"g",1)(2,"mask",2),l(3,"path",3),i(),n(4,"g",4),l(5,"rect",5)(6,"rect",6)(7,"rect",7)(8,"rect",8),n(9,"mask",9),l(10,"rect",10)(11,"path",11),i(),l(12,"path",12)(13,"rect",13),i(),n(14,"mask",14),l(15,"path",15),i(),n(16,"g",16),l(17,"rect",17)(18,"rect",18)(19,"rect",19)(20,"rect",20),n(21,"mask",21),l(22,"rect",10)(23,"path",11),i(),l(24,"path",22)(25,"rect",23)(26,"rect",24),i()(),n(27,"defs")(28,"clipPath",25),l(29,"rect",5),i()()())}});let t=e;return t})();var Pe=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=u({type:e,selectors:[["app-theme-light"]],standalone:!0,features:[g],decls:12,vars:0,consts:[["width","64","height","48","viewBox","0 0 64 48","fill","none","xmlns","http://www.w3.org/2000/svg"],["width","64","height","48","fill","white"],["x","6","y","18","width","10","height","24","rx","3","fill","#DCDFE4"],["x","20","y","18","width","10","height","20","rx","3","fill","#DCDFE4"],["x","34","y","18","width","10","height","16","rx","3","fill","#DCDFE4"],["x","48","y","18","width","10","height","24","rx","3","fill","#DCDFE4"],["id","path-5-outside-1_519_521375","maskUnits","userSpaceOnUse","x","0","y","0","width","64","height","13","fill","black"],["fill","white","width","64","height","13"],["d","M0 0H64V12H0V0Z"],["d","M64 11H0V13H64V11Z","fill","#091E42","fill-opacity","0.14","mask","url(#path-5-outside-1_519_521375)"],["x","6","y","4","width","12","height","4","rx","2","fill","#DCDFE4"],["x","54","y","4","width","4","height","4","rx","2","fill","#DCDFE4"]],template:function(r,a){r&1&&(D(),n(0,"svg",0),l(1,"rect",1)(2,"rect",2)(3,"rect",3)(4,"rect",4)(5,"rect",5),n(6,"mask",6),l(7,"rect",7)(8,"path",8),i(),l(9,"path",9)(10,"rect",10)(11,"rect",11),i())}});let t=e;return t})();var Re=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=u({type:e,selectors:[["app-theme-dark"]],standalone:!0,features:[g],decls:12,vars:0,consts:[["width","64","height","48","viewBox","0 0 64 48","fill","none","xmlns","http://www.w3.org/2000/svg"],["width","64","height","48","fill","#161A1D"],["x","6","y","18","width","10","height","24","rx","3","fill","#454F59"],["x","20","y","18","width","10","height","20","rx","3","fill","#454F59"],["x","34","y","18","width","10","height","16","rx","3","fill","#454F59"],["x","48","y","18","width","10","height","24","rx","3","fill","#454F59"],["id","path-5-outside-1_519_521374","maskUnits","userSpaceOnUse","x","0","y","0","width","64","height","13","fill","black"],["fill","white","width","64","height","13"],["d","M0 0H64V12H0V0Z"],["d","M64 11H0V13H64V11Z","fill","#A6C5E2","fill-opacity","0.160784","mask","url(#path-5-outside-1_519_521374)"],["x","6","y","4","width","12","height","4","rx","2","fill","#454F59"],["x","54","y","4","width","4","height","4","rx","2","fill","#454F59"]],template:function(r,a){r&1&&(D(),n(0,"svg",0),l(1,"rect",1)(2,"rect",2)(3,"rect",3)(4,"rect",4)(5,"rect",5),n(6,"mask",6),l(7,"rect",7)(8,"path",8),i(),l(9,"path",9)(10,"rect",10)(11,"rect",11),i())}});let t=e;return t})();function Ke(t,e){if(t&1){let c=S();n(0,"div",2)(1,"label",3)(2,"input",4,5),v("change",function(){k(c);let r=f();return C(r.setTheme("light"))}),i(),n(4,"div",6),l(5,"app-theme-light"),i(),s(6," Light "),i(),n(7,"label",7)(8,"input",8,9),v("change",function(){k(c);let r=f();return C(r.setTheme("dark"))}),i(),n(10,"div",6),l(11,"app-theme-dark"),i(),s(12," Dark "),i(),n(13,"label",10)(14,"input",11,12),v("change",function(){k(c);let r=f();return C(r.setTheme())}),i(),n(16,"div",6),l(17,"app-theme-system"),i(),s(18," Match browser "),i()()}if(t&2){let c=f();d(2),m("checked",c.theme=="light"),d(6),m("checked",c.theme=="dark"),d(6),m("checked",!c.theme)}}var Le=(()=>{let e=class e{constructor(){this.themeService=b(ie)}ngOnInit(){this.themeService.getSavedThemeObservable().subscribe({next:o=>this.theme=o})}setTheme(o){this.themeService.setTheme(o)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=u({type:e,selectors:[["app-theme-dropdown"]],inputs:{boardPage:"boardPage",board:"board"},standalone:!0,features:[g],decls:5,vars:4,consts:[[3,"cdkMenuTriggerFor"],["menu",""],["cdkMenu","",1,"w-60","mt-2","py-3","flex","flex-col","bg-cc-menu","rounded-xl","border","border-cc-border/15","shadow-xl","shadow-cc-shadow","text-sm","text-cc-text","font-medium"],["for","light",1,"flex","items-center","py-2","px-3","gap-3","cursor-pointer","border-l-2","border-transparent","hover:bg-cc-overlay","has-[:checked]:bg-cc-accent-muted","has-[:checked]:border-l-2","has-[:checked]:border-cc-accent"],["id","light","type","radio","name","theme",1,"accent-cc-accent",3,"checked","change"],["light",""],[1,"overflow-hidden","rounded-md","shadow"],["for","dark",1,"flex","items-center","py-2","px-3","gap-3","cursor-pointer","border-l-2","border-transparent","hover:bg-cc-overlay","has-[:checked]:bg-cc-accent-muted","has-[:checked]:border-l-2","has-[:checked]:border-cc-accent"],["id","dark","type","radio","name","theme",1,"accent-cc-accent",3,"checked","change"],["dark",""],["for","system",1,"flex","items-center","py-2","px-3","gap-3","cursor-pointer","border-l-2","border-transparent","hover:bg-cc-overlay","has-[:checked]:bg-cc-accent-muted","has-[:checked]:border-l-2","has-[:checked]:border-cc-accent"],["id","system","type","radio","name","theme",1,"accent-cc-accent",3,"checked","change"],["system",""]],template:function(r,a){if(r&1&&(n(0,"button",0)(1,"span"),s(2,"Theme"),i()(),x(3,Ke,19,3,"ng-template",null,1,L)),r&2){let p=P(4);h("",a.boardPage&&a.board?"bg-cc-boardpage-accent-menu hover:bg-cc-boardpage-accent-menu-hover aria-expanded:bg-cc-boardpage-accent-menu-expanded aria-expanded:text-cc-boardpage-accent-menu-text":"bg-cc-accent hover:bg-cc-accent-highlight aria-expanded:bg-cc-accent-muted aria-expanded:text-cc-accent"," text-cc-base px-3 text-sm rounded-sm h-full flex items-center"),m("cdkMenuTriggerFor",p)}},dependencies:[A,F,We,Pe,Re]});let t=e;return t})();var ze=(()=>{let e=class e{constructor(){this.router=b(j),this.appService=b(_),this.boardPage=!1}ngOnInit(){this.appService.getBoard().subscribe({next:o=>this.board=o}),this.router.events.subscribe(o=>{o instanceof be&&(this.router.url.split("?")[0].split("/").filter(a=>a!=="")[0]=="board"?this.boardPage=!0:this.boardPage=!1)})}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=u({type:e,selectors:[["app-nav-bar"]],standalone:!0,features:[g],decls:11,vars:23,consts:[["id","nav-bar"],[1,"flex","gap-1"],["href","https://github.com/fedev95","target","_blank","aria-label","Open the GitHub repository in a new tab"],["dimensions","size-5"],["routerLink","/","aria-label","Back to home"],["id","trello-logo"],[3,"boardPage","board"],[1,"ms-3",3,"boardPage","board"]],template:function(r,a){r&1&&(n(0,"div")(1,"nav",0)(2,"div",1)(3,"a",2),l(4,"app-github-icon",3),i(),n(5,"a",4),l(6,"div",5),i(),l(7,"app-workspaces-dropdown",6)(8,"app-recent-dropdown",6)(9,"app-create-dropdown",7),i(),l(10,"app-theme-dropdown",6),i()()),r&2&&(se(a.board?a.board.base:""),d(),h("",a.boardPage&&a.board?"text-cc-boardpage-nav-text bg-cc-boardpage-nav-bg duration-200":"bg-cc-base text-cc-subtle"," flex font-semibold justify-between p-2 border-b border-cc-border/15"),d(2),h("",a.boardPage&&a.board?"hover:bg-cc-boardpage-menu-hover":"hover:bg-cc-overlay"," flex items-center px-2 rounded-sm"),d(2),h("",a.boardPage&&a.board?"hover:bg-cc-boardpage-menu-hover":"hover:bg-cc-overlay"," px-2 rounded-sm"),d(),h("",a.boardPage&&a.board?"board-logo-filter":"logo-filter"," w-[72px] h-8"),d(),m("boardPage",a.boardPage)("board",a.board),d(),m("boardPage",a.boardPage)("board",a.board),d(),m("boardPage",a.boardPage)("board",a.board),d(),m("boardPage",a.boardPage)("board",a.board))},dependencies:[O,G,Be,Te,Ie,Ve,Le],styles:['#trello-logo[_ngcontent-%COMP%]{background-image:url("./media/trello-logo-YN2I4FWN.gif");background-position:center;background-repeat:no-repeat;background-size:contain}#trello-logo[_ngcontent-%COMP%]:hover{background-image:url("./media/trello-logo-hover-V6M7KJYV.gif")}.logo-filter[_ngcontent-%COMP%]{filter:var(--logo-filter)}.board-logo-filter[_ngcontent-%COMP%]{filter:var(--board-logo-filter)}']});let t=e;return t})();var tt=["workspaceList"];function ot(t,e){t&1&&l(0,"app-check-icon",5)}function rt(t,e){if(t&1){let c=S();n(0,"button",20),v("click",function(){let a=k(c).$implicit,p=f();return C(p.setBackgrounds(a))}),n(1,"span",21),x(2,ot,1,0,"app-check-icon",5),i()()}if(t&2){let c=e.$implicit,o=f();h("rounded h-8 relative ",c.class,""),d(2),w(2,o.newBoardForm.getRawValue().background===c.class?2:-1)}}function nt(t,e){t&1&&l(0,"app-check-icon",5)}function it(t,e){if(t&1){let c=S();n(0,"button",20),v("click",function(){let a=k(c).$implicit,p=f();return C(p.setBackgrounds(a))}),n(1,"span",21),x(2,nt,1,0,"app-check-icon",5),i()()}if(t&2){let c=e.$implicit,o=f();h("rounded h-8 relative ",c.class,""),d(2),w(2,o.newBoardForm.getRawValue().background===c.class?2:-1)}}function at(t,e){t&1&&(n(0,"p",22),s(1,"\u{1F44B} Board title is required"),i())}function ct(t,e){if(t&1){let c=S();n(0,"button",20),v("click",function(){let a=k(c).$implicit,p=f(3);return p.createBoardWorkspace=a.id,C(p.workspacesList=!1)}),s(1),i()}if(t&2){let c=e.$implicit,o=f(3);h("",o.createBoardWorkspace==c.id?"bg-cc-accent-muted text-cc-accent":""," w-full p-2 text-start hover:bg-cc-overlay text-sm"),d(),R(c.title)}}function lt(t,e){if(t&1&&(n(0,"div",29),V(1,ct,2,4,"button",30,I),i()),t&2){let c=f(2);d(),W(c.data.workspaces)}}function dt(t,e){t&1&&(n(0,"p",31),s(1,"This Workspace has reached the maximum number of boards."),i())}function st(t,e){if(t&1){let c=S();n(0,"div",23)(1,"p",11),s(2,"Workspace"),i(),n(3,"div",10,24)(5,"button",25),v("click",function(){k(c);let r=f();return C(r.workspacesList=!r.workspacesList)}),n(6,"span",26),s(7),B(8,"workspaceData"),i(),l(9,"app-chevron-icon",5),i(),x(10,lt,3,0,"div",27),i(),x(11,dt,2,0,"p",28),B(12,"workspaceData"),i()}if(t&2){let c=f();d(5),h("",c.workspacesList?"border-cc-accent":"border-cc-border/40"," text-sm font-semibold py-[6px] hover:bg-cc-surface rounded bg-cc-base outline-none px-2 border-2 focus:border-cc-accent flex justify-between items-center gap-2"),d(2),R(T(8,6,c.createBoardWorkspace).title),d(3),w(10,c.workspacesList?10:-1),d(),w(11,T(12,8,c.createBoardWorkspace).boards.length==5?11:-1)}}var Oe=(()=>{let e=class e{constructor(){this.appService=b(_),this.router=b(j),this.boardBackgrounds=Me,this.workspacesList=!1,this.newBoardForm=new Y({id:new y(0,E.required),base:new y("board-bg-base-1",E.required),background:new y("board-bg-1",E.required),title:new y("",[E.required,E.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),labels:new y([]),archived:new y({lists:[],cards:[]}),lists:new y([])})}onClick(o){this.workspacesList&&!this.menux.nativeElement.contains(o.target)&&(this.workspacesList=!1)}ngOnInit(){this.appService.getData().subscribe({next:o=>this.data=o}),this.appService.getCreateBoardWorkspace().subscribe({next:o=>this.createBoardWorkspace=o}),this.modal=document.getElementById("create-board-modal"),this.modal?.addEventListener("close",()=>{this.newBoardForm.patchValue({id:0,base:"board-bg-base-1",background:"board-bg-1",title:""})})}setBackgrounds(o){this.newBoardForm.patchValue({base:o.base,background:o.class})}createBoard(){let o=this.createId();this.newBoardForm.patchValue({id:o,lists:[]}),this.appService.createNewBoard(this.createBoardWorkspace,this.newBoardForm.getRawValue()),this.closeModal(),this.router.navigate([`/board/${this.createBoardWorkspace}/${o}`])}createId(){let o=this.data.workspaces.find(r=>r.id==this.createBoardWorkspace);return o.boards.length>0?o.boards[o.boards.length-1].id+1:0}closeModal(){this.modal&&this.modal.close()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=u({type:e,selectors:[["app-create-board-modal"]],viewQuery:function(r,a){if(r&1&&ue(tt,5),r&2){let p;he(p=fe())&&(a.menux=p.first)}},hostBindings:function(r,a){r&1&&v("click",function(N){return a.onClick(N)},!1,de)},standalone:!0,features:[g],decls:32,vars:17,consts:[["id","create-board-modal",1,"bg-transparent","max-w-[304px]","w-full","p-0"],[1,"flex","flex-col","max-h-[90vh]","bg-cc-menu","rounded-xl","p-0","border","border-cc-border/15","text-cc-subtle","text-xs"],[1,"flex","justify-center","items-center","relative","min-h-10","my-1","mx-2"],[1,"text-sm","font-medium"],["aria-label","Close modal",1,"absolute","p-2","rounded-lg","right-0","hover:bg-cc-menu-item-hover",3,"click"],["dimensions","size-3"],[1,"flex","flex-col","h-full","overflow-auto","scrollbar","p-3"],[1,"flex","justify-center"],["src","./../../../assets/board-bg-preview.svg","alt",""],[1,"mt-5","flex","flex-col","gap-4",3,"formGroup","ngSubmit"],[1,"flex","flex-col","gap-2"],[1,"font-bold"],["cdkMenu","",1,"grid","grid-cols-6","gap-2"],["for","title",1,"flex","flex-col","gap-2"],[1,"font-bold","text-xs"],[1,"text-cc-danger-red"],["type","text","formControlName","title","autofocus",""],["class","text-sm font-semibold"],["class","flex flex-col gap-2 relative"],["type","submit",3,"disabled"],["cdkMenuItem","","type","button",3,"click"],[1,"absolute","h-full","w-full","flex","items-center","justify-center","top-0","left-0","hover:bg-cc-base/20","text-white"],[1,"text-sm","font-semibold"],[1,"flex","flex-col","gap-2","relative"],["workspaceList",""],["type","button",3,"click"],[1,"truncate","w-full","text-start"],["cdkMenu","","class","rounded-lg border border-cc-border/15 py-2"],["class","text-sm font-semibold text-cc-danger-red"],["cdkMenu","",1,"rounded-lg","border","border-cc-border/15","py-2"],["cdkMenuItem","","type","button",3,"class"],[1,"text-sm","font-semibold","text-cc-danger-red"]],template:function(r,a){if(r&1&&(n(0,"dialog",0)(1,"div",1)(2,"div",2)(3,"h2",3),s(4,"Create board"),i(),n(5,"button",4),v("click",function(){return a.closeModal()}),l(6,"app-xmark-icon",5),i()(),n(7,"div",6)(8,"div",7)(9,"div"),l(10,"img",8),i()(),n(11,"form",9),v("ngSubmit",function(){return a.createBoard()}),n(12,"div",10)(13,"p",11),s(14,"Background"),i(),n(15,"div",12),V(16,rt,3,4,"button",30,I),V(18,it,3,4,"button",30,I),i()(),n(20,"label",13)(21,"p",14),s(22,"Board title "),n(23,"span",15),s(24,"*"),i()(),l(25,"input",16),x(26,at,2,0,"p",17),i(),x(27,st,13,10,"div",18),n(28,"button",19),B(29,"workspaceData"),B(30,"workspaceData"),s(31,"Create"),i()()()()()),r&2){let p,N;d(9),h("",a.newBoardForm.getRawValue().background," p-2 rounded"),d(2),m("formGroup",a.newBoardForm),d(5),W(a.boardBackgrounds.gradients),d(2),W(a.boardBackgrounds.solids),d(7),h("",(p=a.newBoardForm.get("title"))!=null&&p.errors?"border-cc-danger-red":""," py-[6px] hover:bg-cc-surface rounded bg-cc-base outline-none px-2 border-2 border-cc-border/40 focus:border-cc-accent text-sm"),d(),w(26,(N=a.newBoardForm.get("title"))!=null&&N.errors?26:-1),d(),w(27,a.data.workspaces?27:-1),d(),h("",a.newBoardForm.invalid||T(29,13,a.createBoardWorkspace).boards.length==5?"bg-cc-overlay cursor-not-allowed":"bg-cc-accent hover:bg-cc-accent-highlight"," rounded text-cc-base py-2 text-sm font-medium"),m("disabled",a.newBoardForm.invalid||T(30,15,a.createBoardWorkspace).boards.length==5)}},dependencies:[oe,te,X,q,Z,Q,J,K,ee,Se,U,ne,F,H]});let t=e;return t})();function pt(t,e){t&1&&(n(0,"p",16),s(1,"\u{1F44B} Workspace name is required"),i())}var Ae=(()=>{let e=class e{constructor(){this.appService=b(_),this.router=b(j),this.newWorkspaceForm=new Y({id:new y(0,E.required),title:new y("",[E.required,E.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),iconBg:new y(""),description:new y(""),boards:new y([])})}ngOnInit(){this.appService.getData().subscribe({next:o=>this.data=o}),this.modal=document.getElementById("create-workspace-modal"),this.modal?.addEventListener("close",()=>{this.newWorkspaceForm.patchValue({id:0,title:"",iconBg:"",description:"",boards:[]})})}createWorkspace(){let o=this.createId(),r=`workspace-bg-${this.generateIconBg()}`;this.newWorkspaceForm.patchValue({id:o,iconBg:r}),this.closeModal(),this.appService.createNewWorkspace(this.newWorkspaceForm.getRawValue()),this.router.navigate([`/workspace/${o}`])}createId(){let o=this.data.workspaces[this.data.workspaces.length-1];return o?o.id+1:0}generateIconBg(){return Math.floor(Math.random()*4)+1}closeModal(){this.modal&&this.modal.close()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=u({type:e,selectors:[["app-create-workspace-modal"]],standalone:!0,features:[g],decls:23,vars:9,consts:[["id","create-workspace-modal",1,"backdrop:bg-black/80","p-4","bg-transparent","max-w-[624px]","w-full","overflow-hidden"],[1,"w-full","max-h-[90vh]","bg-cc-menu","rounded","border","border-cc-border/15","text-cc-subtle","text-xs","px-3","pb-10","relative","overflow-auto"],[1,"absolute","top-8","right-5",3,"click"],["dimensions","size-4"],[1,"flex","flex-col","gap-10","max-w-[388px]","w-full","max-h-[90vh]","mx-auto","mt-16"],[1,"text-2xl","font-semibold"],[1,"flex","flex-col","gap-7",3,"formGroup","ngSubmit"],["for","title",1,"flex","flex-col","gap-2"],[1,"font-bold","text-xs"],[1,"text-cc-danger-red"],["id","title","type","text","formControlName","title","autofocus","","placeholder","Taco's Co."],["class","text-sm font-semibold"],["for","description",1,"flex","flex-col","gap-2"],[1,"font-normal"],["formControlName","description","id","description","rows","6","placeholder","Our team organizes everything here.",1,"hover:bg-cc-surface","rounded","bg-cc-base","outline-none","p-2","border-2","border-cc-border/40","focus:border-cc-accent","text-sm","resize-none"],["type","submit",3,"disabled"],[1,"text-sm","font-semibold"]],template:function(r,a){if(r&1&&(n(0,"dialog",0)(1,"div",1)(2,"button",2),v("click",function(){return a.closeModal()}),l(3,"app-xmark-icon",3),i(),n(4,"div",4)(5,"h2",5),s(6,"Let's build a Workspace"),i(),n(7,"form",6),v("ngSubmit",function(){return a.createWorkspace()}),n(8,"label",7)(9,"p",8),s(10,"Workspace name "),n(11,"span",9),s(12,"*"),i()(),l(13,"input",10),x(14,pt,2,0,"p",11),i(),n(15,"label",12)(16,"p",8),s(17,"Workspace description "),n(18,"span",13),s(19,"Optional"),i()(),l(20,"textarea",14),i(),n(21,"button",15),s(22,"Create"),i()()()()()),r&2){let p,N;d(7),m("formGroup",a.newWorkspaceForm),d(6),h("",(p=a.newWorkspaceForm.get("title"))!=null&&p.errors?"border-cc-danger-red":""," hover:bg-cc-surface rounded bg-cc-base outline-none p-2 border-2 border-cc-border/40 focus:border-cc-accent text-sm"),d(),w(14,(N=a.newWorkspaceForm.get("title"))!=null&&N.errors?14:-1),d(7),h("",a.newWorkspaceForm.invalid?"bg-cc-overlay cursor-not-allowed":"bg-cc-accent hover:bg-cc-accent-highlight"," rounded text-cc-base py-3 text-sm font-medium"),m("disabled",a.newWorkspaceForm.invalid)}},dependencies:[oe,ee,X,q,Z,Q,te,J,K]});let t=e;return t})();var He=(()=>{let e=class e{constructor(){this.themeService=b(ie)}ngOnInit(){this.themeService.getSavedTheme()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=u({type:e,selectors:[["app-root"]],standalone:!0,features:[g],decls:5,vars:0,consts:[[1,"h-screen","flex","flex-col","overflow-hidden"]],template:function(r,a){r&1&&(n(0,"div",0),l(1,"app-nav-bar")(2,"router-outlet"),i(),l(3,"app-create-board-modal")(4,"app-create-workspace-modal"))},dependencies:[z,xe,ze,Oe,Ae]});let t=e;return t})();ge(He,Ee).catch(t=>console.error(t));
