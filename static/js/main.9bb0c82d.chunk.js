(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(43)},31:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),o=(a(31),a(10)),s=a(11),u=a(13),i=a(12),m=a(14),h=a(15),p=a.n(h),E=a(7),d=a(6);function f(e){return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h1",null,e.title)))}var g=a(22),b=a(23),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault();var t=a.query.value;a.props.onSearch(t);var n="/search/"+t;console.log(n),a.props.history.push(n),e.currentTarget.reset()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{className:"search-form",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",placeholder:"Search",ref:function(t){return e.query=t},required:!0}),r.a.createElement("button",{type:"submit"},r.a.createElement(g.a,{icon:b.a}))))}}]),t}(n.Component),S=Object(d.f)(v);function y(){return r.a.createElement("nav",{className:"main-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(E.b,{to:"/cats"},"Cats")),r.a.createElement("li",null,r.a.createElement(E.b,{to:"/dogs"},"Dogs")),r.a.createElement("li",null,r.a.createElement(E.b,{to:"/computers"},"Computers"))))}var j=function(){return r.a.createElement("div",{className:"photo-container"},r.a.createElement(p.a,{className:"spinner",type:"spin",color:"blue",height:"30%",width:"20%"}),r.a.createElement("h2",null,"Loading..."))},k=function(e){return r.a.createElement("li",null,r.a.createElement("img",{src:e.url,alt:e.title}))},O=function(e){var t,a=e.results;return a.length>0?(t=a.map(function(e){return r.a.createElement(k,{url:"https://farm".concat(e.farm,".staticflickr.com/").concat(e.server,"/").concat(e.id,"_").concat(e.secret,".jpg"),key:e.id})}),r.a.createElement("div",{className:"photo-container"},r.a.createElement("h2",null,e.name),r.a.createElement("ul",null,t))):r.a.createElement("div",{className:"photo-container"},r.a.createElement("h2",null,"No Results Found"),r.a.createElement("div",{className:"not-found"},"Your search did not return any results. Please try again."))},N=function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Error: 404 Page not found!"))},w="6f492c97382646ed8e3493cfa8b33612",L=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(i.a)(t).call(this))).performSearch=function(t){e.setState({isLoading:!0}),fetch("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(w,"&tags=").concat(t,"&per_page=24&format=json&nojsoncallback=1")).then(function(e){return e.json()}).then(function(a){console.log(a.photos),"cats"===t?e.setState({cats:a.photos.photo,isLoading:!1}):"dogs"===t?e.setState({dogs:a.photos.photo,isLoading:!1}):"computers"===t?e.setState({computers:a.photos.photo,isLoading:!1}):e.setState({images:a.photos.photo,search:t,isLoading:!1})}).catch(function(e){return console.log(e)})},e.state={search:null,images:[],cats:[],dogs:[],computers:[],isLoading:!1},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.performSearch(),this.performSearch("cats"),this.performSearch("dogs"),this.performSearch("computers")}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.cats,n=e.dogs,c=e.computers,l=e.isLoading,o=e.search;return r.a.createElement(E.a,{basename:"/FSJS_techdegree_P7"},r.a.createElement("div",{className:"container"},r.a.createElement(f,{title:"Gallery"}),r.a.createElement(S,{onSearch:this.performSearch}),r.a.createElement(y,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",render:function(){return l?r.a.createElement(j,null):r.a.createElement(d.a,{to:"/computers"})}}),r.a.createElement(d.b,{exact:!0,path:"/search/:name",render:function(){return l?r.a.createElement(j,null):r.a.createElement(O,{results:t,name:o})}}),r.a.createElement(d.b,{exact:!0,path:"/cats",render:function(){return l?r.a.createElement(j,null):r.a.createElement(O,{results:a,name:"Cats"})}}),r.a.createElement(d.b,{exact:!0,path:"/dogs",render:function(){return l?r.a.createElement(j,null):r.a.createElement(O,{results:n,name:"Dogs"})}}),r.a.createElement(d.b,{exact:!0,path:"/computers",render:function(){return l?r.a.createElement(j,null):r.a.createElement(O,{results:c,name:"Computers"})}}),r.a.createElement(d.b,{component:N}))))}}]),t}(n.Component);l.a.render(r.a.createElement(L,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.9bb0c82d.chunk.js.map