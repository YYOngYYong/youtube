(this.webpackJsonpyoutube=this.webpackJsonpyoutube||[]).push([[0],[,function(e,t,a){e.exports={container:"video_item_container__elnBn",grid:"video_item_grid__1VuOE",list:"video_item_list__33EYW",video:"video_item_video__2Q_lr",metadata:"video_item_metadata__1OBdc",title:"video_item_title__1ewZD",channel:"video_item_channel__146wn",thumbnail:"video_item_thumbnail__1aioK"}},function(e,t,a){e.exports={container:"searchbar_container__mrVPY",logo:"searchbar_logo__214IM",title:"searchbar_title__3Np57",searchbar:"searchbar_searchbar__3EO8x",img:"searchbar_img__12OqF"}},function(e,t,a){e.exports={app:"app_app__1sNhu",content:"app_content__2mQyI",detail:"app_detail__1hyey",list:"app_list__3_ZHa"}},,function(e,t,a){e.exports={description:"video_detail_description__CmrLT"}},,,,,function(e,t,a){e.exports={videos:"video_list_videos__XBbjj"}},,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(9),r=a.n(c),s=(a(19),a(7)),o=a(2),l=a.n(o),u=function(e){var t=e.onSearch,a=Object(n.useRef)(),c=function(){var e=a.current.value;t(e)};return i.a.createElement("header",{className:l.a.container},i.a.createElement("div",{className:l.a.logo,onClick:function(){t("")}},i.a.createElement("img",{className:l.a.img,src:"/images/logo.png",alt:"logo"}),i.a.createElement("h1",{className:l.a.title},"Youtube")),i.a.createElement("input",{className:l.a.searchbar,type:"search",placeholder:"search",onKeyPress:function(e){"Enter"===e.key&&c()},ref:a}),i.a.createElement("button",{className:l.a.button,type:"submit",onClick:function(){c()}},"\uac80\uc0c9"))},m=a(1),p=a.n(m),d=function(e){var t=e.video,a=e.onVideoClick,n="list"===e.display?p.a.list:p.a.grid;return i.a.createElement("li",{className:"".concat(p.a.container," ").concat(n),onClick:function(){return a(t)}},i.a.createElement("div",{className:p.a.video},i.a.createElement("img",{className:p.a.thumbnail,src:t.snippet.thumbnails.medium.url,alt:"img"}),i.a.createElement("div",{className:p.a.metadata},i.a.createElement("p",{className:p.a.title},t.snippet.title),i.a.createElement("p",{className:p.a.channel},t.snippet.channelTitle))))},_=a(10),h=a.n(_),v=function(e){var t=e.videos,a=e.onVideoClick,n=e.display;return i.a.createElement("ul",{className:h.a.videos},t.map((function(e){return i.a.createElement(d,{key:e.id,video:e,onVideoClick:a,display:n})})))},f=a(3),b=a.n(f),E=a(5),y=a.n(E),g=function(e){var t=e.video;return i.a.createElement("section",{className:y.a.detail},i.a.createElement("iframe",{title:"youtube",className:y.a.video,type:"text/html",width:"100%",height:"500px",src:"https://www.youtube.com/embed/".concat(t.id),frameBorder:"0",allowFullScreen:!0}),i.a.createElement("h2",null,t.snippet.title),i.a.createElement("h3",null,t.snippet.channelTitle),i.a.createElement("pre",{className:y.a.description},t.snippet.description))};var N=function(e){var t=e.youtube,a=Object(n.useState)([]),c=Object(s.a)(a,2),r=c[0],o=c[1],l=Object(n.useState)(null),m=Object(s.a)(l,2),p=m[0],d=m[1];return Object(n.useEffect)((function(){t.mostPopular().then((function(e){return o(e)}))}),[t]),i.a.createElement("div",{className:b.a.app},i.a.createElement(u,{onSearch:function(e){t.search(e).then((function(e){o(e),d(null)}))},onCLick:function(){d(null),console.log("click")}}),i.a.createElement("section",{className:b.a.content},p&&i.a.createElement("div",{className:b.a.detail},i.a.createElement(g,{video:p})),i.a.createElement("div",{className:b.a.list},i.a.createElement(v,{videos:r,onVideoClick:function(e){d(e)},display:p?"list":"grid"}))))},k=a(13),w=a(4),x=a.n(w),O=a(6),j=a(11),C=a(12),S=new(function(){function e(t){Object(j.a)(this,e),this.key=t,this.getRequestOptions={method:"GET",redirect:"follow"}}return Object(C.a)(e,[{key:"mostPopular",value:function(){var e=Object(O.a)(x.a.mark((function e(){var t,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/youtube/v3/videos?&part=snippet&chart=mostPopular&maxResults=25&key=".concat(this.key),this.getRequestOptions);case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a.items);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(O.a)(x.a.mark((function e(t){var a,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=".concat(t,"&type=video&key=").concat(this.key),this.getRequestOptions);case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n.items.map((function(e){return Object(k.a)({},e,{id:e.id.videoId})})));case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}())("AIzaSyA8I9S9IvfxTCqeXVrXrGu7H2deWNDGUrE");r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(N,{youtube:S})),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.c65c3634.chunk.js.map