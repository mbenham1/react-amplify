(this["webpackJsonpreact-amplify"]=this["webpackJsonpreact-amplify"]||[]).push([[0],{117:function(e,t,a){e.exports=a(529)},122:function(e,t,a){},123:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},124:function(e,t,a){},47:function(e,t){},529:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(102),l=a.n(i),r=(a(122),a(55)),c=a(103),s=a(104),p=a(113),d=a(105),u=a(39),m=a(114),g=(a(123),a(124),a(111)),h=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={original:"",original2:"",flip:"",flip2:"",copyButton:!1,copyMessage:""},a.handleInputChange=function(e){var t,n=a.state.original.split("").reverse().join().replace(/,/g,""),o=e.target.value,i=e.target.name;a.setState((t={},Object(r.a)(t,i,o),Object(r.a)(t,"flip",n),t))},a.generatePalindrome=function(){if(a.state.original){var e=a.state.original.split("").slice(0,-1).reverse().join().replace(/,/g,"");a.setState({original2:a.state.original,flip2:e,copyButton:!0})}},a.copyPalindrome=function(){var e=a.state.original2+a.state.flip2,t=document.createElement("input");document.body.appendChild(t),t.setAttribute("id","dummy_id"),document.getElementById("dummy_id").value=e,t.select(),document.execCommand("copy"),document.body.removeChild(t),a.setState({copyMessage:"Copied to Clipboard",copyButton:!1}),setTimeout(function(){this.setState({copyMessage:"",copyButton:!1})}.bind(Object(u.a)(a)),3e3)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container",style:{margin:"0 auto",boxShadow:"10px 10px",fontFamily:"Roboto",width:"80%",textAlign:"center",border:"2px solid",borderRadius:"8px",marginTop:"50px"}},o.a.createElement("h3",null,"Palindrome Generator"),o.a.createElement("input",{className:"form-control",name:"original",value:this.state.original,onChange:this.handleInputChange,type:"text",placeholder:"Enter palindrome",maxLength:"50",autoComplete:"off"}),o.a.createElement("button",{id:"generate-palindrome",onClick:this.generatePalindrome},"Generate"),o.a.createElement("div",null,o.a.createElement("p",null,"Palindrome: ",o.a.createElement("span",null,this.state.original2,this.state.flip2,"  "),o.a.createElement("button",{id:"copy-palindrome",onClick:this.copyPalindrome,style:{display:this.state.copyButton?"inline":"none"}},"Copy"),o.a.createElement("span",{style:{"font-size":"12px",display:this.state.copyMessage?"inline-block":"none"}}," \u2705 ",this.state.copyMessage))),o.a.createElement("p",null,"Visit ",o.a.createElement("a",{target:"_blank",href:"http://www.michaelbenham.com/portfolio"},"www.michaelbenham.com")," to check!"))}}]),t}(n.Component),y=Object(g.a)(h,{includeGreetings:!0});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f={aws_project_region:"us-east-1",aws_cognito_identity_pool_id:"us-east-1:9d9c5c9f-ce4f-4d2d-96ca-9b34a9270a4c",aws_cognito_region:"us-east-1",aws_user_pools_id:"us-east-1_ynaw4ssM5",aws_user_pools_web_client_id:"61ejul7dhl34i5tdqcnl0teldn",oauth:{}};a(112).a.configure(f),l.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[117,1,2]]]);
//# sourceMappingURL=main.0789a015.chunk.js.map