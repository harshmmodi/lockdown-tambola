(this.webpackJsonphousie=this.webpackJsonphousie||[]).push([[0],{10:function(a,e,t){"use strict";t.r(e);var n=t(1),r=t.n(n),u=t(7),i=t(2),c=t(3),s=t(5),l=t(4),m=t(0),d=t.n(m),o=t(8),h=t.n(o),S=(t(16),function(a){return new Promise((function(e){return setTimeout(e,a)}))}),k=Array(91).fill(!1),M=!1;function g(a){var e="";return a.isChosen?Math.ceil(90*Math.random())%7==0?e+="selected-square":Math.ceil(90*Math.random())%7==1?e+="selected-square-violet":Math.ceil(90*Math.random())%7==2?e+="selected-square-blue":Math.ceil(90*Math.random())%7==3?e+="selected-square-green":Math.ceil(90*Math.random())%7==4?e+="selected-square-yellow":Math.ceil(90*Math.random())%7==5?e+="selected-square":e+="selected-square-red":e+="square",d.a.createElement("button",{id:"number-"+a.value,className:"".concat(e),onClick:a.onClick},a.value)}var f=function(a){Object(s.a)(t,a);var e=Object(l.a)(t);function t(a){var n;Object(i.a)(this,t);return(n=e.call(this,a)).state={squares:Array.from(Array(90),(function(a,e){return e+1})),isChosen:Array(90).fill(!1),renderRef:a.renderRef},n}return Object(c.a)(t,[{key:"renderSquare",value:function(a,e){var t=this;return d.a.createElement(g,{value:this.state.squares[a],onClick:function(){return t.handleClick(a)},isChosen:e})}},{key:"handleClick",value:function(a){var e=this.state.isChosen;e[a]=!e[a],this.setState({isChosen:e}),this.state.renderRef()}},{key:"createBoard",value:function(a,e){for(var t=[],n=0,r=0;r<a;r+=1){for(var u=[],i=0;i<e;i+=1)u.push(this.renderSquare(n++,this.state.isChosen[n-1]));t.push(d.a.createElement("div",{key:r,className:"board-row"},u))}return t}},{key:"render",value:function(){return d.a.createElement("div",null,this.createBoard(9,10))}}]),t}(d.a.Component),v=function(a){Object(s.a)(t,a);var e=Object(l.a)(t);function t(a){var n;return Object(i.a)(this,t),(n=e.call(this,a)).names=["Surprise Box!!!","Sudatta Gautam","Harsha Saagi","Sheetal Manan Sureka","Sudatta Gautam","Harsha Saagi","Sheetal Manan Sureka","Sudatta Gautam","Harsha Saagi","Sheetal Manan Sureka","Sudatta Gautam","Harsha Saagi","Sheetal Manan Sureka","Sudatta Gautam","Harsha Saagi","Sheetal Manan Sureka","Sudatta Gautam","Harsha Saagi","Sheetal Manan Sureka","Sudatta Gautam","Harsha Saagi","Sheetal Manan Sureka","Sudatta Gautam","Harsha Saagi","Sheetal Manan Sureka","Sudatta Gautam","Harsha Saagi","Sheetal Manan Sureka","Sudatta Gautam","Harsha Saagi","Sheetal Manan Sureka","Sudatta Gautam","Harsha Saagi","Sheetal Manan Sureka","Sudatta Gautam","Harsha Saagi","Sheetal Manan Sureka","Sudatta Gautam","Harsha Saagi","Sheetal Manan Sureka","Sudatta Gautam","Harsha Saagi","Sheetal Manan Sureka","Sudatta Gautam","Harsha Saagi","Sheetal Manan Sureka","Sudatta Gautam","Harsha Saagi","Sheetal Manan Sureka","Sudatta Gautam","Harsha Saagi","Sheetal Manan Sureka","Sudatta Gautam","Harsha Saagi","Sheetal Manan Sureka","Sudatta Gautam","Harsha Saagi","Sheetal Manan Sureka","Sudatta Gautam","Harsha Saagi","Sheetal Manan Sureka","Sudatta Gautam","Harsha Saagi","Sheetal Manan Sureka","Sudatta Gautam","Harsha Saagi","Sheetal Manan Sureka","Sudatta Gautam","Harsha Saagi","Sheetal Manan Sureka","Sudatta Gautam","Harsha Saagi","Sheetal Manan Sureka","Sudatta Gautam","Harsha Saagi","Sheetal Manan Sureka","Sudatta Gautam","Harsha Saagi","Sheetal Manan Sureka","Sudatta Gautam","Harsha Saagi","Sheetal Manan Sureka","Sudatta Gautam","Harsha Saagi","Sheetal Manan Sureka","Sudatta Gautam","Harsha Saagi","Sheetal Manan Sureka","Sudatta Gautam","Harsha Saagi","Sheetal Manan Sureka","Sudatta Gautam","Harsha Saagi","Sheetal Manan Sureka","Sudatta Gautam","Harsha Saagi","Sheetal Manan Sureka"],n.numbers=[[0],[7,11,14,19,20,22,35,41,44,52,67,74,75,81,90],[3,6,18,19,23,27,30,32,41,51,53,65,73,74,87],[9,10,11,20,23,34,46,49,51,63,67,68,77,78,80],[5,7,10,15,20,31,40,44,52,56,58,61,73,75,84],[4,5,13,14,18,23,31,40,57,60,66,73,78,84,88],[7,10,11,26,30,37,39,44,47,54,65,71,79,81,82],[3,4,14,22,27,29,31,33,46,52,58,64,74,78,90],[5,13,15,25,29,37,39,48,54,56,61,66,67,75,84],[1,7,17,21,38,39,43,49,51,59,65,66,71,84,90],[3,6,19,20,36,41,44,54,58,62,68,76,80,86,89],[6,14,16,28,30,32,39,43,52,57,69,70,74,82,83],[1,8,12,16,23,26,31,48,49,58,62,75,76,79,84],[1,3,10,14,28,38,40,53,55,63,68,79,81,88,89],[4,9,14,18,27,35,37,43,51,53,56,65,68,79,83],[1,7,10,14,29,30,41,44,50,51,62,68,79,82,84],[6,9,14,25,28,36,41,56,57,61,68,79,82,88,90],[4,5,16,18,25,33,37,41,44,51,63,77,80,87,90],[2,13,15,19,24,26,39,43,56,58,67,69,79,82,87],[1,13,17,18,26,38,39,42,51,56,60,64,77,80,81],[5,9,12,19,25,27,39,45,55,64,65,73,75,82,90],[6,7,18,21,28,34,36,44,54,56,59,64,75,80,83],[1,2,15,20,22,23,34,42,45,54,61,69,77,82,89],[2,10,14,22,28,37,41,43,59,62,67,68,78,86,87],[3,5,11,12,13,25,32,41,48,50,57,64,72,74,88],[1,3,12,17,25,29,35,42,44,53,63,73,77,84,86],[6,18,25,26,31,33,47,48,52,57,60,68,72,85,88],[1,9,13,20,23,38,42,48,52,66,73,76,84,87,88],[1,9,14,17,20,33,36,47,56,61,63,64,72,83,86],[3,6,18,19,20,33,40,44,51,55,62,73,75,81,82],[4,9,10,16,20,24,30,46,49,59,61,75,81,85,86],[1,8,13,18,20,31,37,47,59,64,67,71,73,81,89],[5,12,13,19,27,30,35,40,43,53,62,71,75,81,82],[1,9,11,16,21,25,35,42,45,46,56,65,75,76,85],[2,9,17,27,29,36,42,44,57,58,65,75,81,87,90],[6,11,12,19,22,25,30,42,49,55,62,69,78,85,89],[2,3,9,15,26,28,37,42,48,53,61,67,76,79,87],[4,7,10,15,23,33,37,43,50,57,63,69,72,76,80],[2,7,8,13,14,25,30,40,46,56,61,62,76,84,86],[1,9,11,16,23,29,37,38,44,51,54,60,77,78,86],[3,5,16,17,21,22,32,45,55,57,59,61,72,78,87],[4,6,10,12,20,33,36,47,49,51,67,73,74,79,82],[4,11,19,24,29,38,39,44,50,54,66,68,69,74,84],[4,6,15,17,22,25,34,43,46,54,61,64,79,80,84],[2,10,15,21,37,41,42,51,58,60,61,70,73,82,89],[6,15,19,26,27,39,40,48,49,55,64,66,73,83,89],[1,13,23,29,30,31,46,50,56,60,69,70,79,80,81],[7,8,10,22,25,28,33,41,52,55,67,73,78,87,90],[3,5,8,12,29,34,41,49,51,53,64,66,71,78,87],[9,15,22,24,38,43,48,56,57,58,63,72,75,80,86],[1,8,15,16,20,22,38,45,51,60,63,70,78,84,85],[5,7,12,15,24,32,34,36,44,50,63,65,73,85,88],[5,8,12,15,26,34,36,42,51,59,68,69,70,71,87],[7,16,17,22,25,36,40,43,54,56,65,69,77,80,86],[3,9,11,12,25,27,35,44,54,64,71,73,80,81,82],[6,9,14,18,29,38,39,41,59,65,68,69,75,82,90],[2,7,18,22,26,33,42,45,58,66,69,71,81,84,85],[5,7,8,11,21,36,42,44,51,52,62,70,72,83,89],[4,7,19,26,36,46,47,50,58,59,67,72,75,80,89],[2,6,8,10,14,28,33,38,44,53,57,65,79,81,87],[4,9,11,28,38,39,41,45,52,69,73,76,77,84,87],[1,13,16,23,27,35,43,50,51,54,60,61,79,83,90],[6,8,14,24,26,36,37,39,46,53,57,64,72,82,90],[4,17,19,26,28,33,41,48,56,61,72,75,78,81,90],[1,5,11,16,20,28,36,47,52,54,64,78,83,88,90],[4,5,11,21,30,31,42,45,52,57,66,74,79,82,87],[5,14,15,21,39,44,47,55,56,61,63,77,81,84,86],[1,12,13,26,32,38,39,40,50,54,67,68,75,80,84],[3,8,17,23,26,30,36,47,50,54,55,61,77,82,88],[4,7,11,20,33,34,36,45,55,56,61,62,73,78,81],[8,10,13,21,24,33,37,43,46,51,55,61,72,75,90],[7,8,11,20,26,27,39,41,46,50,67,78,79,80,90],[1,4,5,15,23,26,31,45,49,58,60,61,74,82,85],[7,9,14,15,18,23,35,37,47,58,64,65,76,81,90],[2,6,19,22,27,36,38,39,46,51,52,61,62,76,85],[1,3,10,29,33,41,48,52,54,62,64,72,76,80,85],[3,14,21,30,35,40,44,50,55,60,63,70,81,84,88],[3,5,11,17,22,31,32,47,57,60,73,77,84,88,90],[8,14,20,38,39,40,44,49,51,67,68,73,79,82,88],[5,13,26,27,38,44,46,47,52,59,60,72,79,84,88],[3,5,8,15,22,24,38,47,51,52,69,75,79,84,88],[4,6,12,18,26,30,34,36,47,59,63,68,76,79,89],[4,11,15,16,21,35,41,44,55,64,65,74,75,82,84],[1,7,12,15,21,33,42,49,50,53,65,70,84,88,89],[2,8,17,25,27,31,35,40,44,52,60,64,76,82,84],[2,3,15,18,25,27,31,39,41,51,64,70,72,86,90],[3,9,13,23,30,34,39,42,46,57,61,62,74,83,89]],n.state={currentIndex:"0"},n}return Object(c.a)(t,[{key:"setRecentNumbers",value:function(){}},{key:"incrementCurrentIndex",value:function(){document.getElementById("next-number-input").value="";var a=Number(this.state.currentIndex)+1;(M||a>86)&&(M=!0,(a=Math.floor(87*Math.random()))<1&&(a=1),console.log("TEMP: "+a));var e=String(a);this.hideVerificationResults(),this.setState({currentIndex:e})}},{key:"startButtonPressed",value:function(){var a=Object(u.a)(r.a.mark((function a(){var e,t,n,u,i,c,s;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:console.log("sdfd"),e=1;case 2:if(!(e<50)){a.next=21;break}return t=Math.ceil(90*Math.random()),document.getElementById("number-"+t).click(),n=Math.ceil(90*Math.random()),document.getElementById("number-"+n).click(),u=Math.ceil(90*Math.random()),document.getElementById("number-"+u).click(),i=Math.ceil(90*Math.random()),document.getElementById("number-"+i).click(),a.next=13,S(200);case 13:document.getElementById("number-"+t).click(),document.getElementById("number-"+n).click(),document.getElementById("number-"+u).click(),document.getElementById("number-"+i).click(),e%3==0&&((c=document.createElement("audio")).setAttribute("src","success_notification.mp3"),c.play());case 18:e++,a.next=2;break;case 21:s=Math.ceil(90*Math.random()),document.getElementById("number-"+s).click();case 23:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()},{key:"hideVerificationResults",value:function(){document.getElementById("verification-success").setAttribute("hidden",!0),document.getElementById("verification-failure").setAttribute("hidden",!0)}},{key:"verifyAndClick",value:function(){this.hideVerificationResults();var a,e=Number(document.getElementById("next-number-input").value);e&&e<=90&&e>=1&&(this.checkForInvalidNumber(e)?((a=document.createElement("audio")).setAttribute("src","mario_death.mp3"),a.play(),document.getElementById("verification-failure").removeAttribute("hidden")):((a=document.createElement("audio")).setAttribute("src","success_notification.mp3"),a.play(),document.getElementById("number-"+e).click(),document.getElementById("verification-success").removeAttribute("hidden")))}},{key:"checkForInvalidNumber",value:function(a){return k[a]||this.numbers[this.state.currentIndex].includes(a)}},{key:"handleInputComplete",value:function(a){"Enter"===a.key&&(a.preventDefault(),document.getElementById("verify-button").click())}},{key:"render",value:function(){var a=this;return d.a.createElement("div",{className:"game"},d.a.createElement("div",null,d.a.createElement("h1",{className:"page-heading text-center"},"Welcome everyone to The Great Diwali Bumper Lotteryy!!")),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"game-board col-12 pl-5"},d.a.createElement(f,{renderRef:function(){return a.setRecentNumbers()}}))),d.a.createElement("div",null,d.a.createElement("button",{className:"start-button",type:"button",onClick:function(){return a.startButtonPressed()}},"Start! ")),d.a.createElement("div",{className:"footnote"},"Made with ",d.a.createElement("span",{className:"heart"},"\u2764")," by Modiji (modihar@)"))}}]),t}(d.a.Component);h.a.render(d.a.createElement(v,null),document.getElementById("root"))},16:function(a,e,t){},9:function(a,e,t){a.exports=t(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.618dac0b.chunk.js.map