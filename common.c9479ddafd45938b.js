"use strict";(self.webpackChunkmobile=self.webpackChunkmobile||[]).push([[592],{8397:(_,m,c)=>{c.d(m,{c:()=>f});var e=c(4893),p=c(1196),s=c(9808);const g=function(r){return{width:r}};function n(r,u){if(1&r){const o=e.EpF();e.TgZ(0,"li",1),e.NdJ("click",function(){const t=e.CHM(o).$implicit;return e.oxw().toLink(t)}),e.TgZ(1,"span"),e._uU(2),e.qZA(),e.qZA()}if(2&r){const o=u.$implicit,a=e.oxw();e.Q6J("ngStyle",e.VKq(2,g,100/a.navList.length+"%")),e.xp6(2),e.Oqu(o.name)}}let f=(()=>{class r{constructor(o,a){this.router=o,this.route=a,this.navList=[{name:"\u9996\u9875",link:"./home"},{name:"\u9996\u98752"},{name:"\u62fc\u8f66\u4fe1\u606f"},{name:"\u5a31\u4e50"},{name:"\u4e2a\u4eba\u4e2d\u5fc3",link:"./personal"}]}ngOnInit(){}toLink(o){console.log(this.router),console.log(o.link),this.router.navigate([o.link],{relativeTo:this.route})}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(p.F0),e.Y36(p.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["zb-mobile-footer"]],decls:2,vars:1,consts:[[3,"ngStyle","click",4,"ngFor","ngForOf"],[3,"ngStyle","click"]],template:function(o,a){1&o&&(e.TgZ(0,"ul"),e.YNc(1,n,3,4,"li",0),e.qZA()),2&o&&(e.xp6(1),e.Q6J("ngForOf",a.navList))},directives:[s.sg,s.PC],styles:["ul[_ngcontent-%COMP%]{display:flex;width:100%;height:2.5rem;background:#ededed;border-top:1px solid #f8bebe;box-shadow:0 -1px 3px #5d5df7;position:fixed;bottom:0;left:0;font-size:.8rem}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{text-align:center}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%]{color:#00f}"]}),r})()},4699:(_,m,c)=>{c.r(m),c.d(m,{PublicModule:()=>C});var e=c(9808),p=c(2382),s=c(1196),n=(c(8397),c(4893));const u=[{path:"",redirectTo:"identity",pathMatch:"full"},{path:"identity",component:(()=>{class t{constructor(i,d){this.router=i,this.route=d}ngOnInit(){}toList(i){this.router.navigate(1==i?["/passenger"]:["/owner"],{relativeTo:this.route})}}return t.\u0275fac=function(i){return new(i||t)(n.Y36(s.F0),n.Y36(s.gz))},t.\u0275cmp=n.Xpm({type:t,selectors:[["zb-mobile-identity"]],decls:5,vars:0,consts:[[1,"identity"],[1,"passenger",3,"click"],[1,"owner",3,"click"]],template:function(i,d){1&i&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.NdJ("click",function(){return d.toList(1)}),n._uU(2," \u4e58\u5ba2 "),n.qZA(),n.TgZ(3,"div",2),n.NdJ("click",function(){return d.toList(2)}),n._uU(4," \u8f66\u4e3b "),n.qZA(),n.qZA())},styles:[".identity[_ngcontent-%COMP%]{display:flex}.identity[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:9rem;height:9rem;border-radius:50%;text-align:center;line-height:9rem;font-size:2rem;position:fixed;left:50%;margin:-5rem 0 0 -5rem}.identity[_ngcontent-%COMP%]   .passenger[_ngcontent-%COMP%]{color:red;background:rgba(255,113,113,.4);top:27%;box-shadow:0 0 15px red}.identity[_ngcontent-%COMP%]   .owner[_ngcontent-%COMP%]{color:green;background:rgba(113,255,117,.4);top:73%;box-shadow:0 0 15px green}"]}),t})()}];let o=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[s.Bz.forChild(u)],s.Bz]}),t})(),C=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[o,p.u5,e.ez],s.Bz]}),t})()}}]);