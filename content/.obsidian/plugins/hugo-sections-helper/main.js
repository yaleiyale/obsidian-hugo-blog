var P=Object.create;var s=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var y=Object.getPrototypeOf,F=Object.prototype.hasOwnProperty;var g=n=>s(n,"__esModule",{value:!0});var v=(n,t)=>{g(n);for(var e in t)s(n,e,{get:t[e],enumerable:!0})},w=(n,t,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of u(t))!F.call(n,o)&&o!=="default"&&s(n,o,{get:()=>t[o],enumerable:!(e=f(t,o))||e.enumerable});return n},A=n=>w(g(s(n!=null?P(y(n)):{},"default",n&&n.__esModule&&"default"in n?{get:()=>n.default,enumerable:!0}:{value:n,enumerable:!0})),n);var a=(n,t,e)=>new Promise((o,h)=>{var x=i=>{try{c(e.next(i))}catch(d){h(d)}},m=i=>{try{c(e.throw(i))}catch(d){h(d)}},c=i=>i.done?o(i.value):Promise.resolve(i.value).then(x,m);c((e=e.apply(n,t)).next())});v(exports,{default:()=>p});var r=A(require("obsidian"));var l=class{constructor(t){this.filename="_index.html";this.app=t,this.notePath="",this.folderPath=""}setPath(t){this.folderPath=t,this.notePath=t+"/"+this.filename}createIndex(t){return a(this,null,function*(){this.setPath(t),yield this.newIndex()})}newIndex(){return a(this,null,function*(){let t=`---
title: {{FOLDER_NAME}}
---`,e=yield this.expandContent(t);yield this.app.vault.adapter.write(this.notePath,e)})}expandContent(t){return a(this,null,function*(){let e=this.folderPath.split("/").pop();return t.replace(/{{FOLDER_NAME}}/g,e)})}};var p=class extends r.Plugin{onload(){return a(this,null,function*(){console.log("Loading HugoSections plugin."),this.indexFactory=new l(this.app),this.registerEvent(app.vault.on("rename",t=>{t instanceof r.TFolder&&this.indexFactory.createIndex(t.path).catch(()=>{console.log("HugoSections create error")})}))})}onunload(){console.log("Unloading HugoSections plugin")}};0&&(module.exports={});