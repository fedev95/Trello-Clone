import{a as j,b as O,c as ve,d as he}from"./chunk-T6PQX5TA.js";import{a as P}from"./chunk-EWENUQ2Y.js";import{a as le,b as ce,c as de,d as pe,e as me,f as q,g as ue,h as fe,i as be,j as xe,k as ge}from"./chunk-JLDKSDHC.js";import{$ as l,$a as ie,Aa as W,Ba as X,C as $,Ea as Y,Fa as J,G as B,Ga as Z,I as p,Ia as d,Ja as w,Ka as ee,Ma as u,N as v,Na as te,O as h,Oa as A,P as T,Pa as V,Wa as E,X as Q,Xa as z,Ya as C,aa as K,bb as ne,eb as oe,f as U,fb as re,ha as M,ja as f,jb as ae,kb as N,lb as se,na as g,oa as I,pa as k,qa as S,ra as y,sa as o,ta as a,ua as c,va as F,ya as b,za as m}from"./chunk-WNCHCCWC.js";var Ce=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["app-task-card"]],inputs:{card:"card"},standalone:!0,features:[u],decls:2,vars:1,consts:[[1,"text-sm","py-2","px-3","rounded-lg","bg-cc-task-card"]],template:function(i,r){i&1&&(o(0,"p",0),d(1),a()),i&2&&(l(),w(r.card.title))}});let t=e;return t})();function Te(t,e){if(t&1&&c(0,"app-task-card",7),t&2){let s=e.$implicit;f("card",s)}}var we=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["app-task-card-list"]],hostAttrs:[1,"flex","flex-grow"],inputs:{list:"list"},standalone:!0,features:[u],decls:12,vars:1,consts:[[1,"h-full","w-[272px]","flex","flex-col"],[1,"bg-cc-task-list","h-max","rounded-xl","text-cc-text","overflow-hidden","flex","flex-col",3,"mousedown"],[1,"flex","p-2","text-sm","font-medium"],[1,"text-sm","font-semibold","py-2","px-3"],["id","card-list",1,"flex","flex-col","mx-1","px-1","gap-2","overflow-auto"],[1,"w-full","py-2","px-3","text-start","text-cc-subtle","hover:bg-cc-task-list-btn","rounded-lg","flex","gap-2","items-center"],["dimensions","size-3"],[3,"card"]],template:function(i,r){i&1&&(o(0,"div",0)(1,"div",1),b("mousedown",function(L){return L.stopImmediatePropagation()}),o(2,"div",2)(3,"p",3),d(4),a()(),o(5,"div",4),S(6,Te,1,1,"app-task-card",7,k),a(),o(8,"div",2)(9,"button",5),c(10,"app-plus-icon",6),d(11," Add a card "),a()()()()),i&2&&(l(4),w(r.list.title),l(2),y(r.list.cards))},dependencies:[Ce,P],styles:["#card-list[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}#card-list[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:rgba(var(--task-list-scrollbar-track));border-radius:9999px}#card-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:rgba(var(--task-list-scrollbar-thumb));border-radius:9999px}"]});let t=e;return t})();var _e=(()=>{let e=class e{constructor(){this.dimensions="size-2"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["app-menu-dots-icon"]],inputs:{dimensions:"dimensions"},standalone:!0,features:[u],decls:3,vars:1,consts:[[3,"ngClass"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 448 512"],["fill","currentColor","d","M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"]],template:function(i,r){i&1&&(o(0,"div",0),T(),o(1,"svg",1),c(2,"path",2),a()()),i&2&&f("ngClass",r.dimensions+" flex justify-center items-center")},dependencies:[C,E]});let t=e;return t})();var G=(()=>{let e=class e{constructor(){this.dimensions="size-2"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["app-minus-icon"]],inputs:{dimensions:"dimensions"},standalone:!0,features:[u],decls:3,vars:1,consts:[[3,"ngClass"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 448 512"],["fill","currentColor","d","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]],template:function(i,r){i&1&&(o(0,"div",0),T(),o(1,"svg",1),c(2,"path",2),a()()),i&2&&f("ngClass",r.dimensions+" flex items-center justify-center")},dependencies:[C,E]});let t=e;return t})();function Ee(t,e){if(t&1&&(o(0,"div",13),c(1,"div"),o(2,"a",14),d(3),a(),o(4,"button",15),c(5,"app-minus-icon",16),a()()),t&2){let s=e.$implicit,n=m();l(),g("min-w-6 min-h-5 rounded-sm ",s.background,""),l(),X("routerLink","/board/",n.workspace.id,"/",s.id,""),l(),w(s.title)}}var ke=(()=>{let e=class e{constructor(){this.sidebar=!0}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["app-board-sidebar"]],inputs:{workspace:"workspace",bgBase:"bgBase"},standalone:!0,features:[u],decls:23,vars:15,consts:[[1,"flex","flex-col","h-full","absolute","right-0","w-full","min-w-[260px]"],[1,"flex","items-center","py-2","px-3","min-h-14","border-b","border-[hsla(211,18%,68%,0.16)]","justify-between"],[1,"flex","items-center","gap-2",3,"routerLink"],["sizeClasses","size-8 text-xl rounded",3,"workspace"],[1,"text-sm","font-semibold"],["title","Collapse sidebar",1,"size-7","aspect-square","rounded-sm","hover:bg-white/10","rotate-90","flex","items-center","justify-center","text-white",3,"click"],[1,"sr-only"],["dimensions","size-[10px]"],[1,"flex","flex-col","flex-grow","overflow-auto","sidebar-scrollbar","pb-10"],[1,"flex","justify-between","py-4","px-3"],[1,"flex","flex-col"],["title","Expand sidebar","aria-label","Workspace navigation",3,"click"],[1,"size-6","bg-cc-board-sidebar-collapse","border","border-cc-border/15","aspect-square","flex","justify-center","items-center","-rotate-90","text-white","rounded-full","mt-4","ms-1"],["routerLinkActive","bg-white/20",1,"flex","items-center","py-1","px-3","gap-2","text-sm","hover:bg-white/10","[&>button]:hover:min-w-7","relative"],[1,"truncate","expanded-link",3,"routerLink"],["title","Close workspace",1,"flex","ms-auto","w-0","h-7","overflow-hidden","focus:min-w-7","justify-center","items-center","aspect-square","rounded-sm","hover:bg-white/15","relative"],["dimensions","size-3"],["class","flex items-center py-1 px-3 gap-2 text-sm hover:bg-white/10 [&>button]:hover:min-w-7 relative","routerLinkActive","bg-white/20"]],template:function(i,r){i&1&&(o(0,"div")(1,"div")(2,"div")(3,"div",0)(4,"div",1)(5,"a",2),c(6,"app-workspace-icon",3),o(7,"span",4),d(8),a()(),o(9,"button",5),b("click",function(){return r.sidebar=!r.sidebar}),o(10,"span",6),d(11,"Close menu"),a(),c(12,"app-chevron-icon",7),a()(),o(13,"div",8)(14,"div",9)(15,"p",4),d(16,"Your boards"),a()(),o(17,"div",10),S(18,Ee,6,6,"div",17,k),a()()()(),o(20,"button",11),b("click",function(){return r.sidebar=!r.sidebar}),o(21,"span",12),c(22,"app-chevron-icon",7),a()()()()),i&2&&(g("",r.bgBase," h-full"),l(),g("",r.sidebar?"min-w-[260px]":"min-w-[16px]"," h-full relative duration-200 bg-cc-board-sidebar text-cc-board-sidebar-text border-r border-[hsla(211,18%,68%,0.16)]"),l(),g("h-full w-full ",r.sidebar?"block":"invisible delay-200",""),l(3),W("routerLink","/workspace/",r.workspace.id,""),l(),f("workspace",r.workspace),l(2),w(r.workspace.title),l(10),y(r.workspace.boards),l(2),g("[&>span]:hover:bg-white/40 w-full h-full absolute top-0 left-0 flex ",r.sidebar?"invisible":"delay-200 block",""))},dependencies:[C,ae,oe,re,j,se,G],styles:[".sidebar-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar{width:9px}.sidebar-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:#3239407f;border-radius:9999px}.sidebar-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#45505b7f;border-radius:9999px}"]});let t=e;return t})();var R=(()=>{let e=class e{constructor(){this.settingsSidebar=new U(!1)}getSettingsSidebar(){return this.settingsSidebar.asObservable()}setSettingsSidebar(n){this.settingsSidebar.next(n)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=$({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var H=function(t){return t.BACKGROUND="Change background",t.LABELS="Labels",t.ARCHIVED="Archive",t.DEFAULT="Menu",t}(H||{});var Se=(()=>{let e=class e{constructor(){this.dimensions="size-2"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["app-archive-icon"]],inputs:{dimensions:"dimensions"},standalone:!0,features:[u],decls:3,vars:1,consts:[[3,"ngClass"],["xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-archive"],["d","M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"]],template:function(i,r){i&1&&(o(0,"div",0),T(),o(1,"svg",1),c(2,"path",2),a()()),i&2&&f("ngClass",r.dimensions+" flex items-center justify-center")},dependencies:[C,E]});let t=e;return t})();var ye=(()=>{let e=class e{constructor(){this.dimensions="size-2"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["app-label-icon"]],inputs:{dimensions:"dimensions"},standalone:!0,features:[u],decls:4,vars:1,consts:[[3,"ngClass"],["xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-tag"],["d","M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0"],["d","M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1m0 5.586 7 7L13.586 9l-7-7H2z"]],template:function(i,r){i&1&&(o(0,"div",0),T(),o(1,"svg",1),c(2,"path",2)(3,"path",3),a()()),i&2&&f("ngClass",r.dimensions+" flex items-center justify-center")},dependencies:[C,E]});let t=e;return t})();function Le(t,e){t&1&&c(0,"app-check-icon",6)}function Ae(t,e){if(t&1){let s=F();o(0,"button",3),b("click",function(){let r=v(s).$implicit,x=m();return x.board.background=r.class,h(x.board.base=r.base)}),o(1,"span",4),d(2),a(),o(3,"span",5),M(4,Le,1,0,"app-check-icon",6),a()()}if(t&2){let s=e.$implicit,n=m();g("h-24 rounded-lg flex py-3 px-2 items-end relative ",s.class,""),l(2),w(s.emoji),l(2),I(4,s.class===n.board.background?4:-1)}}function Ve(t,e){t&1&&c(0,"app-check-icon",6)}function De(t,e){if(t&1){let s=F();o(0,"button",3),b("click",function(){let r=v(s).$implicit,x=m();return x.board.background=r.class,h(x.board.base=r.base)}),o(1,"span",5),M(2,Ve,1,0,"app-check-icon",6),a()()}if(t&2){let s=e.$implicit,n=m();g("aspect-square rounded-md relative ",s.class,""),l(2),I(2,s.class===n.board.background?2:-1)}}var Me=(()=>{let e=class e{constructor(){this.boardBackgrounds=he}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["app-change-background"]],hostAttrs:[1,"overflow-hidden"],inputs:{board:"board"},standalone:!0,features:[u],decls:7,vars:0,consts:[[1,"submenu-animation","p-4","flex","flex-col","h-full","overflow-y-auto","scrollbar"],[1,"grid","grid-cols-2","pb-6","gap-2","border-b","border-cc-border/15"],[1,"grid","grid-cols-5","gap-2","mt-5"],[3,"click"],[1,"select-none"],[1,"absolute","h-full","w-full","flex","items-center","justify-center","top-0","left-0","hover:bg-cc-base/20","text-white"],["dimensions","size-4"],[3,"class"]],template:function(i,r){i&1&&(o(0,"div",0)(1,"div",1),S(2,Ae,5,5,"button",7,k),a(),o(4,"div",2),S(5,De,3,4,"button",7,k),a()()),i&2&&(l(2),y(r.boardBackgrounds.gradients),l(3),y(r.boardBackgrounds.solids))},dependencies:[ve]});let t=e;return t})();function ze(t,e){t&1&&(o(0,"p",1),d(1,"labels"),a())}var Ne=()=>[],Ie=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["app-labels"]],hostAttrs:[1,"overflow-hidden"],standalone:!0,features:[u],decls:3,vars:1,consts:[[1,"p-4","flex","flex-col","h-full","submenu-animation","overflow-y-auto","scrollbar"],[1,"py-2"],["class","py-2"]],template:function(i,r){i&1&&(o(0,"div",0),S(1,ze,2,0,"p",2,k),a()),i&2&&(l(),y(te(0,Ne).constructor(20)))}});let t=e;return t})();function Pe(t,e){if(t&1){let s=F();o(0,"div",7)(1,"button",8),b("click",function(){v(s);let i=m();return h(i.setActiveMenu(i.settingsMenu.ARCHIVED))}),c(2,"app-archive-icon",9),d(3," Archived items "),a(),o(4,"button",8),b("click",function(){v(s);let i=m();return h(i.setActiveMenu(i.settingsMenu.BACKGROUND))}),c(5,"div"),d(6," Change background "),a(),o(7,"button",8),b("click",function(){v(s);let i=m();return h(i.setActiveMenu(i.settingsMenu.LABELS))}),c(8,"app-label-icon",10),d(9," Labels "),a(),o(10,"button",11),c(11,"app-minus-icon",9),d(12," Close board "),a()()}if(t&2){let s=m();l(5),g("size-5 rounded-sm ",s.board.background,"")}}function je(t,e){t&1&&(o(0,"div",12)(1,"p"),d(2,"archive"),a()())}function Oe(t,e){if(t&1&&c(0,"app-change-background",13),t&2){let s=m();f("board",s.board)}}function Ge(t,e){t&1&&c(0,"app-labels")}var Fe=(()=>{let e=class e{constructor(){this.boardService=B(R),this.settingsMenu=H,this.activeMenu=H.DEFAULT}ngOnInit(){this.settings=this.boardService.getSettingsSidebar()}setSettings(n){this.boardService.setSettingsSidebar(n)}setActiveMenu(n){this.activeMenu=n}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["app-board-settings"]],inputs:{board:"board"},standalone:!0,features:[u],decls:16,vars:15,consts:[[1,"px-4"],[1,"border-b","border-cc-border/15","flex","items-center","justify-center","relative"],[1,"my-4","mx-8","font-medium"],["title","Go back.",3,"click"],["dimensions","size-4 rotate-90"],["title","Close the board menu.",1,"p-[6px]","rounded-md","aspect-square","hover:bg-cc-menu-item-hover","absolute","right-0",3,"click"],["dimensions","size-4"],[1,"p-4","text-sm","font-base","flex","flex-col","gap-1","menu-animation","h-full","overflow-y-auto","scrollbar"],[1,"flex","items-center","gap-3","py-[6px]","px-3","hover:bg-cc-menu-item-hover","w-full","rounded-md",3,"click"],["dimensions","size-5"],["dimensions","size-5 -rotate-90"],[1,"flex","items-center","gap-3","py-[6px]","px-3","hover:bg-cc-menu-item-hover","w-full","rounded-md"],[1,"p-4","submenu-animation"],[3,"board"]],template:function(i,r){if(i&1&&(o(0,"div"),A(1,"async"),o(2,"div"),A(3,"async"),o(4,"div",0)(5,"div",1)(6,"h3",2),d(7),a(),o(8,"button",3),b("click",function(){return r.activeMenu=r.settingsMenu.DEFAULT}),c(9,"app-chevron-icon",4),a(),o(10,"button",5),b("click",function(){return r.setSettings(!1)}),c(11,"app-xmark-icon",6),a()()(),M(12,Pe,13,3)(13,je,3,0)(14,Oe,1,1)(15,Ge,1,0),a()()),i&2){let x;g("",V(1,11,r.settings)?"min-w-[340px]":"min-w-0"," h-full duration-200 relative"),l(2),g("",V(3,13,r.settings)?"visible":"invisible delay-200"," absolute left-0 h-full w-full bg-cc-menu min-w-[340px] text-cc-text overflow-hidden flex flex-col"),l(5),w(r.activeMenu),l(),g("",r.activeMenu!=r.settingsMenu.DEFAULT?"":"invisible translate-x-[-200%]"," duration-200 p-[6px] rounded-md aspect-square hover:bg-cc-menu-item-hover absolute left-0"),l(4),I(12,(x=r.activeMenu)===r.settingsMenu.DEFAULT?12:x===r.settingsMenu.ARCHIVED?13:x===r.settingsMenu.BACKGROUND?14:x===r.settingsMenu.LABELS?15:-1)}},dependencies:[C,z,j,O,Se,ye,G,Me,Ie],styles:["@keyframes _ngcontent-%COMP%_menu-animation{0%{translate:-316px 0}to{translate:0}}.menu-animation[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_menu-animation ease .2s}"]});let t=e;return t})();var Re=["form"];function He(t,e){if(t&1){let s=F();o(0,"form",1,2),b("ngSubmit",function(){v(s);let i=m();return h(i.formFunc())})("mousedown",function(i){return i.stopPropagation()}),c(2,"input",3),o(3,"div",4)(4,"button",5),d(5,"Add list"),a(),o(6,"button",6),b("click",function(){v(s);let i=m();return h(i.cancel())}),c(7,"app-xmark-icon",7),a()()()}if(t&2){let s=m();f("formGroup",s.newListForm),l(4),f("disabled",!s.newListForm.valid)}}function qe(t,e){if(t&1){let s=F();o(0,"button",8),b("click",function(i){v(s);let r=m();return r.builder=!0,h(i.stopPropagation())})("mousedown",function(i){return i.stopPropagation()}),c(1,"app-plus-icon",7),d(2),a()}if(t&2){let s=m();l(2),ee(" ",s.board.lists.length>0?"Add another list":"Add a list"," ")}}var Be=(()=>{let e=class e{constructor(){this.appService=B(N),this.builder=!1,this.newListForm=new me({title:new q("",ce.required),cards:new q([])})}onClick(n){this.builder&&!this.menux.nativeElement.contains(n.target)&&this.cancel()}formFunc(){this.appService.createList(this.workspaceId,this.boardId,this.newListForm.getRawValue()),this.newListForm.patchValue({title:"",cards:[]})}cancel(){this.builder=!1,this.newListForm.patchValue({title:"",cards:[]})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["app-new-list-form"]],viewQuery:function(i,r){if(i&1&&Y(Re,5),i&2){let x;J(x=Z())&&(r.menux=x.first)}},hostBindings:function(i,r){i&1&&b("click",function(L){return r.onClick(L)},!1,Q)},inputs:{board:"board",workspaceId:"workspaceId",boardId:"boardId"},standalone:!0,features:[u],decls:2,vars:1,consts:[["class","min-w-[272px] text-sm gap-2 p-2 bg-cc-task-list flex flex-col rounded-xl text-cc-text",3,"formGroup"],[1,"min-w-[272px]","text-sm","gap-2","p-2","bg-cc-task-list","flex","flex-col","rounded-xl","text-cc-text",3,"formGroup","ngSubmit","mousedown"],["form",""],["id","miInput","autofocus","","formControlName","title","type","text","aria-label","Enter list title","placeholder","Enter list title...",1,"p-1","outline-none","py-[6px]","px-3","rounded-md","border-2","border-cc-border/15","focus:border-cc-accent","bg-cc-task-card","font-semibold","w-full"],[1,"flex","gap-1"],["type","submit",1,"py-[6px]","px-3","font-semibold","bg-cc-accent","hover:bg-cc-accent-highlight","text-cc-base","rounded",3,"disabled"],["type","button","aria-label","Cancel list editing",1,"hover:bg-cc-task-list-btn","w-8","flex","justify-center","items-center","rounded",3,"click"],["dimensions","size-3"],[1,"min-w-[272px]","p-3","bg-white/20","hover:bg-white/10","rounded-xl","text-white","flex","gap-2","text-sm","font-medium","items-center",3,"click","mousedown"]],template:function(i,r){i&1&&M(0,He,8,2,"form",0)(1,qe,3,1),i&2&&I(0,r.builder?0:1)},dependencies:[O,P,ge,ue,le,de,pe,fe,be,xe]});let t=e;return t})();function Ue(t,e){if(t&1&&c(0,"app-task-card-list",15),t&2){let s=e.$implicit;f("list",s)}}function $e(t,e){if(t&1&&(o(0,"div",14),S(1,Ue,1,1,"app-task-card-list",15,k),a()),t&2){let s=m(2);l(),y(s.board.lists)}}function Qe(t,e){if(t&1){let s=F();o(0,"div",1),c(1,"app-board-sidebar",2),o(2,"div",3)(3,"div",4)(4,"div",5)(5,"label",6),d(6),a(),c(7,"input",7),a(),o(8,"button",8),b("click",function(){v(s);let i=m();return h(i.setSettingsSidebar(!0))}),A(9,"async"),c(10,"app-menu-dots-icon",9),a()(),o(11,"div",10),b("mousedown",function(){v(s);let i=m();return h(i.pointerScroll())}),M(12,$e,3,0,"div",11),c(13,"app-new-list-form",12),a()(),c(14,"app-board-settings",13),a()}if(t&2){let s=m();g("flex h-full overflow-hidden ",s.board.background,""),l(),f("workspace",s.workspace)("bgBase",s.board.base),l(5),w(s.board.title),l(),f("value",s.board.title),l(),g("p-2 hover:bg-white/10 rounded-sm ",V(9,15,s.settings)?"invisible":"delay-200 visible",""),l(4),I(12,s.board.lists.length>0?12:-1),l(),f("workspaceId",s.workspaceId)("boardId",s.boardId)("board",s.board),l(),f("board",s.board)}}function Ke(t,e){t&1&&(o(0,"p",16),d(1,"Page not found."),a())}var li=(()=>{let e=class e{constructor(n){this.titleService=n,this.appService=B(N),this.boardService=B(R),this.route=B(ne)}ngOnInit(){this.settings=this.boardService.getSettingsSidebar(),this.route.paramMap.subscribe(n=>{this.workspaceId=n.get("workspace-id"),this.boardId=n.get("board-id"),this.getBoard()})}setSettingsSidebar(n){this.boardService.setSettingsSidebar(n)}getBoard(){this.appService.getWorkspace(this.workspaceId).subscribe({next:n=>this.workspace=n}),this.appService.setBoard(this.workspaceId,this.boardId),this.appService.getBoard().subscribe({next:n=>{n&&(this.board=n,this.titleService.setTitle(`${this.board.title} | Trello`))}}),this.appService.checkRecentBoards(parseInt(this.workspaceId),parseInt(this.boardId))}pointerScroll(){let n=!0,i=document.getElementById("board-content");i?.setAttribute("style","user-select: none;");let r=()=>{n=!1,i?.setAttribute("style","user-select: auto;")},x=L=>n&&(i.scrollLeft-=L.movementX);addEventListener("pointermove",x),addEventListener("pointerup",r)}};e.\u0275fac=function(i){return new(i||e)(K(ie))},e.\u0275cmp=p({type:e,selectors:[["app-board"]],hostAttrs:[1,"flex","flex-grow","flex-col","overflow-auto"],standalone:!0,features:[u],decls:2,vars:1,consts:[["style","view-transition-name: board-transition",3,"class"],[2,"view-transition-name","board-transition"],[3,"workspace","bgBase"],[1,"bg-cc-board-filter","duration-200","h-full","w-full","flex","flex-col","overflow-hidden","pb-2"],[1,"py-3","px-4","bg-black/25","flex","justify-between","text-white"],[1,"relative","flex"],["for","board-title",1,"text-lg","font-bold","leading-8","min-w-fit","relative","hover:bg-white/15","z-10","cursor-pointer","px-2","rounded-sm"],["type","text","id","board-title",1,"focus:bg-zinc-800","focus:ring-2","focus:ring-blue-300","focus:z-10","focus:select-all","px-2","z-0","w-full","absolute","left-0","bg-transparent","text-lg","font-bold","leading-8","rounded-sm","outline-none",3,"value"],["aria-label","Show menu",3,"click"],["dimensions","size-4"],["id","board-content",1,"flex","gap-3","p-3","pb-2","flex-grow","items-start","overflow-x-auto","min-w-full","overflow-y-hidden",3,"mousedown"],["class","flex gap-3 h-full"],[3,"workspaceId","boardId","board"],[3,"board"],[1,"flex","gap-3","h-full"],[3,"list"],[1,"text-3xl","text-cc-subtle/60","font-semibold","mt-20","mx-auto"]],template:function(i,r){i&1&&M(0,Qe,15,17,"div",0)(1,Ke,2,0),i&2&&I(0,r.board?0:1)},dependencies:[C,z,we,_e,ke,Fe,Be],styles:["#board-content[_ngcontent-%COMP%]::-webkit-scrollbar{height:12px}#board-content[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0003;border-radius:4px;margin:12px}#board-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#fff6;border-radius:4px}"]});let t=e;return t})();export{li as default};
