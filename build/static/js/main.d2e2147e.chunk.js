(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,o,r){e.exports=r(23)},22:function(e,o,r){},23:function(e,o,r){"use strict";r.r(o);var a=r(0),n=r.n(a),t=r(4),u=r.n(t),y=r(6),l=(r(22),Object(y.b)(function(e){return e},function(e){return{attackHandler:function(){return e({type:"ATTACK"})},restartHandler:function(){return e({type:"RESTART"})},thunderHandler:function(){return e({type:"THUNDER"})},armorHandler:function(){return e({type:"ARMOR"})},healHandler:function(){return e({type:"HEAL"})},powerHandler:function(){return e({type:"POWER"})}}})(function(e){return n.a.createElement("section",null,n.a.createElement("div",{style:{textAlign:"center"}},e.you.hp>0&&e.enemy.hp>0&&n.a.createElement("div",null,n.a.createElement("div",{className:"flex"},n.a.createElement("div",{className:"player"},n.a.createElement("p",null,"You"),n.a.createElement("p",null,"\u2764 ",e.you.hp," ",n.a.createElement("span",{style:e.you.wound>0?{color:"red"}:{color:"green"}},0!==e.you.wound&&-e.you.wound)),n.a.createElement("p",null,n.a.createElement("span",{className:e.you.armorCD>=5&&"activeBuff"},"\u26ca")," ",e.you.armor),n.a.createElement("p",null,n.a.createElement("span",{className:e.you.powerCD>=5&&"activeBuff"},"\u2694")," ",e.you.power)),n.a.createElement("span",{className:"vs"},"VS"),n.a.createElement("div",{className:"player"},n.a.createElement("p",null,"Enemy"),n.a.createElement("p",null,"\u2764 ",e.enemy.hp," ",n.a.createElement("span",{style:{color:"red"}},0!==e.enemy.wound&&-e.enemy.wound)),n.a.createElement("p",null,"\u26ca ",e.enemy.armor),n.a.createElement("p",null,"\u2694 ",e.enemy.power))),n.a.createElement("button",{className:"button",onClick:e.attackHandler},"Attack"),n.a.createElement("button",{className:"button",onClick:e.thunderHandler,disabled:!(e.you.thunderCD<=0)},"Thunder Strike ",e.you.thunderCD>0&&n.a.createElement("span",null,"(",e.you.thunderCD,")")),n.a.createElement("button",{className:"button",onClick:e.healHandler,disabled:!(e.you.healCD<=0)},"Heal Up ",e.you.healCD>0&&n.a.createElement("span",null,"(",e.you.healCD,")")),n.a.createElement("button",{className:e.you.powerCD>=5?"button button-active":"button",onClick:e.powerHandler,disabled:!(e.you.powerCD<=0)},"Power Up ",e.you.powerCD>0&&n.a.createElement("span",null,"(",e.you.powerCD,")")),n.a.createElement("button",{className:e.you.armorCD>=5?"button button-active":"button",onClick:e.armorHandler,disabled:!(e.you.armorCD<=0)},"Armor Up ",e.you.armorCD>0&&n.a.createElement("span",null,"(",e.you.armorCD,")"))),e.enemy.hp<=0&&e.you.hp<=0&&n.a.createElement("p",{className:"result"},"Draw ",n.a.createElement("br",null),n.a.createElement("span",{className:"hint"},"Almost won. Want to try again?")),e.you.hp<=0&&e.enemy.hp>0&&n.a.createElement("p",{className:"result"},"You lost ",n.a.createElement("br",null),n.a.createElement("span",{className:"hint"},"Next time try this OP combos: Power Up + Thunder Strike and Power Up + Heal Up")),e.enemy.hp<=0&&e.you.hp>0&&n.a.createElement("p",{className:"result"},"You won ",n.a.createElement("br",null),n.a.createElement("span",{className:"hint"},"Looks like we have a God Gamer here")),n.a.createElement("button",{className:"button button-restart",onClick:e.restartHandler},"Restart")))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var m=r(5),p=r(1),c={turn:0,you:{hp:1500,power:100,armor:10,wound:0,thunderCD:0,healCD:0,armorCD:0,powerCD:0},enemy:{hp:5e3,power:120,armor:40,wound:0}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,o=arguments.length>1?arguments[1]:void 0,r=.9*e.enemy.power,a=1.1*e.enemy.power,n=.9*e.you.power,t=1.1*e.you.power,u=function(e,o){return Math.round(Math.random()*(o-e+1))+e},y=u(n,t)-e.enemy.armor,l=u(r,a)-e.you.armor,m=u(n,t),h=4*(y+e.enemy.armor)-e.enemy.armor;return"ATTACK"===o.type?{turn:e.turn+1,you:Object(p.a)({},e.you,{hp:5===e.you.armorCD?e.you.hp-l-40:e.you.hp-l,armor:5===e.you.armorCD?c.you.armor:e.you.armor,wound:5===e.you.armorCD?l+40:l,power:5===e.you.powerCD?c.you.power:e.you.power,thunderCD:e.you.thunderCD-1,healCD:e.you.healCD-1,powerCD:e.you.powerCD-1,armorCD:e.you.armorCD-1}),enemy:Object(p.a)({},e.enemy,{hp:5===e.you.powerCD?e.enemy.hp-y+100:e.enemy.hp-y,wound:5===e.you.powerCD?y-100:y})}:"THUNDER"===o.type?{turn:e.turn+1,you:Object(p.a)({},e.you,{hp:5===e.you.armorCD?e.you.hp-l-40:e.you.hp-l,armor:5===e.you.armorCD?c.you.armor:e.you.armor,wound:5===e.you.armorCD?l+40:l,power:5===e.you.powerCD?c.you.power:e.you.power,thunderCD:3,healCD:e.you.healCD-1,powerCD:e.you.powerCD-1,armorCD:e.you.armorCD-1}),enemy:Object(p.a)({},e.enemy,{hp:5===e.you.powerCD?e.enemy.hp-h+4*(y+e.enemy.armor-100)-e.enemy.armor:e.enemy.hp-h,wound:5===e.you.powerCD?h-4*(y+e.enemy.armor-100)-e.enemy.armor:h})}:"HEAL"===o.type?{turn:e.turn+1,you:Object(p.a)({},e.you,{hp:5===e.you.powerCD?e.you.hp-l+2*(m-100)>=c.you.hp?c.you.hp:e.you.hp-l+2*(m-100):5===e.you.armorCD?e.you.hp-l-40+2*m>=c.you.hp?c.you.hp:e.you.hp-l-40+2*m:e.you.hp-l+2*m>=c.you.hp?c.you.hp:e.you.hp-l+2*m,power:5===e.you.powerCD?c.you.power:e.you.power,armor:5===e.you.armorCD?c.you.armor:e.you.armor,wound:5===e.you.armorCD?l+40-2*m:5===e.you.powerCD?l-2*(m-100):l-2*m,healCD:4,thunderCD:e.you.thunderCD-1,powerCD:e.you.powerCD-1,armorCD:e.you.armorCD-1}),enemy:Object(p.a)({},e.enemy,{wound:0})}:"ARMOR"===o.type?{turn:e.turn+1,you:Object(p.a)({},e.you,{armor:e.you.armor+40,power:5===e.you.powerCD?c.you.power:e.you.power,hp:e.you.hp-l+40,wound:l-40,armorCD:10,thunderCD:e.you.thunderCD-1,powerCD:e.you.powerCD-1,healCD:e.you.healCD-1}),enemy:Object(p.a)({},e.enemy,{wound:0})}:"POWER"===o.type?{turn:e.turn+1,you:Object(p.a)({},e.you,{hp:5===e.you.armorCD?e.you.hp-l-40:e.you.hp-l,armor:5===e.you.armorCD?c.you.armor:e.you.armor,wound:5===e.you.armorCD?l+40:l,power:e.you.power+100,powerCD:10,armorCD:e.you.armorCD-1,thunderCD:e.you.thunderCD-1,healCD:e.you.healCD-1}),enemy:Object(p.a)({},e.enemy,{wound:0})}:("RESTART"===o.type&&document.location.reload(),e)},C=Object(m.b)(h);u.a.render(n.a.createElement(y.a,{store:C},n.a.createElement(l,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.d2e2147e.chunk.js.map