(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/+cc":function(e,t,o){
/*!
 * Fuse.js v3.6.1 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
e.exports=function(e){var t={};function o(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var r=o(1),i=o(7),d=i.get,h=(i.deepValue,i.isArray),s=function(){function e(t,o){var a=o.location,n=void 0===a?0:a,r=o.distance,i=void 0===r?100:r,h=o.threshold,s=void 0===h?.6:h,l=o.maxPatternLength,c=void 0===l?32:l,u=o.caseSensitive,p=void 0!==u&&u,f=o.tokenSeparator,v=void 0===f?/ +/g:f,g=o.findAllMatches,b=void 0!==g&&g,m=o.minMatchCharLength,y=void 0===m?1:m,w=o.id,k=void 0===w?null:w,x=o.keys,M=void 0===x?[]:x,S=o.shouldSort,_=void 0===S||S,C=o.getFn,T=void 0===C?d:C,F=o.sortFn,A=void 0===F?function(e,t){return e.score-t.score}:F,D=o.tokenize,j=void 0!==D&&D,I=o.matchAllTokens,O=void 0!==I&&I,P=o.includeMatches,W=void 0!==P&&P,H=o.includeScore,L=void 0!==H&&H,z=o.verbose,G=void 0!==z&&z;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:n,distance:i,threshold:s,maxPatternLength:c,isCaseSensitive:p,tokenSeparator:v,findAllMatches:b,minMatchCharLength:y,id:k,keys:M,includeMatches:W,includeScore:L,shouldSort:_,getFn:T,sortFn:A,verbose:G,tokenize:j,matchAllTokens:O},this.setCollection(t),this._processKeys(M)}var t,o;return t=e,(o=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"_processKeys",value:function(e){if(this._keyWeights={},this._keyNames=[],e.length&&"string"==typeof e[0])for(var t=0,o=e.length;t<o;t+=1){var a=e[t];this._keyWeights[a]=1,this._keyNames.push(a)}else{for(var n=null,r=null,i=0,d=0,h=e.length;d<h;d+=1){var s=e[d];if(!s.hasOwnProperty("name"))throw new Error('Missing "name" property in key object');var l=s.name;if(this._keyNames.push(l),!s.hasOwnProperty("weight"))throw new Error('Missing "weight" property in key object');var c=s.weight;if(c<0||c>1)throw new Error('"weight" property in key must bein the range of [0, 1)');r=null==r?c:Math.max(r,c),n=null==n?c:Math.min(n,c),this._keyWeights[l]=c,i+=c}if(i>1)throw new Error("Total of weights cannot exceed 1")}}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var o=this._prepareSearchers(e),a=o.tokenSearchers,n=o.fullSearcher,r=this._search(a,n);return this._computeScore(r),this.options.shouldSort&&this._sort(r),t.limit&&"number"==typeof t.limit&&(r=r.slice(0,t.limit)),this._format(r)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var o=e.split(this.options.tokenSeparator),a=0,n=o.length;a<n;a+=1)t.push(new r(o[a],this.options));return{tokenSearchers:t,fullSearcher:new r(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,o=this.list,a={},n=[];if("string"==typeof o[0]){for(var r=0,i=o.length;r<i;r+=1)this._analyze({key:"",value:o[r],record:r,index:r},{resultMap:a,results:n,tokenSearchers:e,fullSearcher:t});return n}for(var d=0,h=o.length;d<h;d+=1)for(var s=o[d],l=0,c=this._keyNames.length;l<c;l+=1){var u=this._keyNames[l];this._analyze({key:u,value:this.options.getFn(s,u),record:s,index:d},{resultMap:a,results:n,tokenSearchers:e,fullSearcher:t})}return n}},{key:"_analyze",value:function(e,t){var o=this,a=e.key,n=e.arrayIndex,r=void 0===n?-1:n,i=e.value,d=e.record,s=e.index,l=t.tokenSearchers,c=void 0===l?[]:l,u=t.fullSearcher,p=t.resultMap,f=void 0===p?{}:p,v=t.results,g=void 0===v?[]:v;!function e(t,n,r,i){if(null!=n)if("string"==typeof n){var d=!1,s=-1,l=0;o._log("\nKey: ".concat(""===a?"--":a));var p=u.search(n);if(o._log('Full text: "'.concat(n,'", score: ').concat(p.score)),o.options.tokenize){for(var v=n.split(o.options.tokenSeparator),b=v.length,m=[],y=0,w=c.length;y<w;y+=1){var k=c[y];o._log('\nPattern: "'.concat(k.pattern,'"'));for(var x=!1,M=0;M<b;M+=1){var S=v[M],_=k.search(S),C={};_.isMatch?(C[S]=_.score,d=!0,x=!0,m.push(_.score)):(C[S]=1,o.options.matchAllTokens||m.push(1)),o._log('Token: "'.concat(S,'", score: ').concat(C[S]))}x&&(l+=1)}s=m[0];for(var T=m.length,F=1;F<T;F+=1)s+=m[F];s/=T,o._log("Token score average:",s)}var A=p.score;s>-1&&(A=(A+s)/2),o._log("Score average:",A);var D=!o.options.tokenize||!o.options.matchAllTokens||l>=c.length;if(o._log("\nCheck Matches: ".concat(D)),(d||p.isMatch)&&D){var j={key:a,arrayIndex:t,value:n,score:A};o.options.includeMatches&&(j.matchedIndices=p.matchedIndices);var I=f[i];I?I.output.push(j):(f[i]={item:r,output:[j]},g.push(f[i]))}}else if(h(n))for(var O=0,P=n.length;O<P;O+=1)e(O,n[O],r,i)}(r,i,d,s)}},{key:"_computeScore",value:function(e){this._log("\n\nComputing score:\n");for(var t=this._keyWeights,o=!!Object.keys(t).length,a=0,n=e.length;a<n;a+=1){for(var r=e[a],i=r.output,d=i.length,h=1,s=0;s<d;s+=1){var l=i[s],c=l.key,u=o?t[c]:1,p=0===l.score&&t&&t[c]>0?Number.EPSILON:l.score;h*=Math.pow(p,u)}r.score=h,this._log(r)}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var o=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,(function(e,t){if("object"===a(t)&&null!==t){if(-1!==o.indexOf(t))return;o.push(t)}return t}),2)),o=null}var n=[];this.options.includeMatches&&n.push((function(e,t){var o=e.output;t.matches=[];for(var a=0,n=o.length;a<n;a+=1){var r=o[a];if(0!==r.matchedIndices.length){var i={indices:r.matchedIndices,value:r.value};r.key&&(i.key=r.key),r.hasOwnProperty("arrayIndex")&&r.arrayIndex>-1&&(i.arrayIndex=r.arrayIndex),t.matches.push(i)}}})),this.options.includeScore&&n.push((function(e,t){t.score=e.score}));for(var r=0,i=e.length;r<i;r+=1){var d=e[r];if(this.options.id&&(d.item=this.options.getFn(d.item,this.options.id)[0]),n.length){for(var h={item:d.item},s=0,l=n.length;s<l;s+=1)n[s](d,h);t.push(h)}else t.push(d.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&n(t.prototype,o),e}();e.exports=s},function(e,t,o){function a(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var n=o(2),r=o(3),i=o(6),d=function(){function e(t,o){var a=o.location,n=void 0===a?0:a,r=o.distance,d=void 0===r?100:r,h=o.threshold,s=void 0===h?.6:h,l=o.maxPatternLength,c=void 0===l?32:l,u=o.isCaseSensitive,p=void 0!==u&&u,f=o.tokenSeparator,v=void 0===f?/ +/g:f,g=o.findAllMatches,b=void 0!==g&&g,m=o.minMatchCharLength,y=void 0===m?1:m,w=o.includeMatches,k=void 0!==w&&w;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:n,distance:d,threshold:s,maxPatternLength:c,isCaseSensitive:p,tokenSeparator:v,findAllMatches:b,includeMatches:k,minMatchCharLength:y},this.pattern=p?t:t.toLowerCase(),this.pattern.length<=c&&(this.patternAlphabet=i(this.pattern))}var t,o;return t=e,(o=[{key:"search",value:function(e){var t=this.options,o=t.isCaseSensitive,a=t.includeMatches;if(o||(e=e.toLowerCase()),this.pattern===e){var i={isMatch:!0,score:0};return a&&(i.matchedIndices=[[0,e.length-1]]),i}var d=this.options,h=d.maxPatternLength,s=d.tokenSeparator;if(this.pattern.length>h)return n(e,this.pattern,s);var l=this.options,c=l.location,u=l.distance,p=l.threshold,f=l.findAllMatches,v=l.minMatchCharLength;return r(e,this.pattern,this.patternAlphabet,{location:c,distance:u,threshold:p,findAllMatches:f,minMatchCharLength:v,includeMatches:a})}}])&&a(t.prototype,o),e}();e.exports=d},function(e,t){var o=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,n=new RegExp(t.replace(o,"\\$&").replace(a,"|")),r=e.match(n),i=!!r,d=[];if(i)for(var h=0,s=r.length;h<s;h+=1){var l=r[h];d.push([e.indexOf(l),l.length-1])}return{score:i?.5:1,isMatch:i,matchedIndices:d}}},function(e,t,o){var a=o(4),n=o(5);e.exports=function(e,t,o,r){for(var i=r.location,d=void 0===i?0:i,h=r.distance,s=void 0===h?100:h,l=r.threshold,c=void 0===l?.6:l,u=r.findAllMatches,p=void 0!==u&&u,f=r.minMatchCharLength,v=void 0===f?1:f,g=r.includeMatches,b=void 0!==g&&g,m=d,y=e.length,w=c,k=e.indexOf(t,m),x=t.length,M=[],S=0;S<y;S+=1)M[S]=0;if(-1!==k){var _=a(t,{errors:0,currentLocation:k,expectedLocation:m,distance:s});if(w=Math.min(_,w),-1!==(k=e.lastIndexOf(t,m+x))){var C=a(t,{errors:0,currentLocation:k,expectedLocation:m,distance:s});w=Math.min(C,w)}}k=-1;for(var T=[],F=1,A=x+y,D=1<<(x<=31?x-1:30),j=0;j<x;j+=1){for(var I=0,O=A;I<O;)a(t,{errors:j,currentLocation:m+O,expectedLocation:m,distance:s})<=w?I=O:A=O,O=Math.floor((A-I)/2+I);A=O;var P=Math.max(1,m-O+1),W=p?y:Math.min(m+O,y)+x,H=Array(W+2);H[W+1]=(1<<j)-1;for(var L=W;L>=P;L-=1){var z=L-1,G=o[e.charAt(z)];if(G&&(M[z]=1),H[L]=(H[L+1]<<1|1)&G,0!==j&&(H[L]|=(T[L+1]|T[L])<<1|1|T[L+1]),H[L]&D&&(F=a(t,{errors:j,currentLocation:z,expectedLocation:m,distance:s}))<=w){if(w=F,(k=z)<=m)break;P=Math.max(1,2*m-k)}}if(a(t,{errors:j+1,currentLocation:m,expectedLocation:m,distance:s})>w)break;T=H}var N={isMatch:k>=0,score:0===F?.001:F};return b&&(N.matchedIndices=n(M,v)),N}},function(e,t){e.exports=function(e,t){var o=t.errors,a=void 0===o?0:o,n=t.currentLocation,r=void 0===n?0:n,i=t.expectedLocation,d=void 0===i?0:i,h=t.distance,s=void 0===h?100:h,l=a/e.length,c=Math.abs(d-r);return s?l+c/s:c?1:l}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o=[],a=-1,n=-1,r=0,i=e.length;r<i;r+=1){var d=e[r];d&&-1===a?a=r:d||-1===a||((n=r-1)-a+1>=t&&o.push([a,n]),a=-1)}return e[r-1]&&r-a>=t&&o.push([a,r-1]),o}},function(e,t){e.exports=function(e){for(var t={},o=e.length,a=0;a<o;a+=1)t[e.charAt(a)]=0;for(var n=0;n<o;n+=1)t[e.charAt(n)]|=1<<o-n-1;return t}},function(e,t){var o=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)},a=function(e){return null==e?"":function(e){if("string"==typeof e)return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)},n=function(e){return"string"==typeof e},r=function(e){return"number"==typeof e};e.exports={get:function(e,t){var i=[];return function e(t,d){if(d){var h=d.indexOf("."),s=d,l=null;-1!==h&&(s=d.slice(0,h),l=d.slice(h+1));var c=t[s];if(null!=c)if(l||!n(c)&&!r(c))if(o(c))for(var u=0,p=c.length;u<p;u+=1)e(c[u],l);else l&&e(c,l);else i.push(a(c))}else i.push(t)}(e,t),i},isArray:o,isString:n,isNum:r,toString:a}}])},GKVU:function(e,t,o){"use strict";var a=o("I+eb"),n=o("hXpO");a({target:"String",proto:!0,forced:o("rwPt")("anchor")},{anchor:function(e){return n(this,"a","name",e)}})},wQbG:function(e,t,o){"use strict";o.r(t);o("QWBl"),o("2B1R"),o("+2oP"),o("rB9j"),o("hByQ"),o("GKVU"),o("FZtP");var a=o("VTBJ"),n=o("/+cc"),r=o.n(n),i=o("CjXH"),d={components:{ChevronRightIcon:i.d,SearchIcon:i.j},data:function(){return{query:"",focusIndex:-1,focused:!1}},computed:{results:function(){return new r.a(this.headings,{keys:["value"],threshold:.25}).search(this.query).slice(0,15)},headings:function(){var e=[];return this.$static.allMarkdownPage.edges.map((function(e){return e.node})).forEach((function(t){t.headings.forEach((function(o){e.push(Object(a.a)(Object(a.a)({},o),{},{path:t.path,title:t.title}))}))})),e},showResult:function(){return this.focused&&this.query.length>0}},methods:{increment:function(){this.focusIndex<this.results.length-1&&this.focusIndex++},decrement:function(){this.focusIndex>=0&&this.focusIndex--},go:function(){var e;0!==this.results.length&&(e=-1===this.focusIndex?this.results[0]:this.results[this.focusIndex],this.$router.push(e.path+e.anchor),this.$refs.input.blur(),this.query="")}}},h=o("KHd+"),s=o("Kw5r"),l=s.a.config.optionMergeStrategies.computed,c={allMarkdownPage:{edges:[{node:{id:"ffc73ec625b7dc839df8ba0a0ad83eea",path:"/docs/zeroci/img/readme/",title:"",headings:[]}},{node:{id:"9f5324fef2420ad6fba5c3f41c9601c0",path:"/docs/wiki-publisher/img/readme/",title:"",headings:[]}},{node:{id:"f36908badaf2cebf29f5966477788f1f",path:"/docs/website-publisher/img/readme/",title:"",headings:[]}},{node:{id:"c337a9ec045e10973cb5562d7ef4248e",path:"/docs/virtual-spaces/img/readme/",title:"",headings:[]}},{node:{id:"31bbae45d4bd15b9459d4d31864464cd",path:"/docs/video-sharing/img/readme/",title:"",headings:[]}},{node:{id:"88ff8e8b12269f44b557e9e5ead0c050",path:"/docs/video-conf/img/readme/",title:"",headings:[]}},{node:{id:"37f5bf02284941e29a91dbd845f3085d",path:"/docs/tomochain/img/readme/",title:"",headings:[]}},{node:{id:"30ecda009e1e5fbc8834ff3a2d2ad72f",path:"/docs/tfgrid/img/readme/",title:"",headings:[]}},{node:{id:"35119380ad86153e9676367e7f0baa01",path:"/docs/serverless/img/readme/",title:"",headings:[]}},{node:{id:"f23e4fe26e68024afc26956a814bb34f",path:"/docs/index/img/readme/",title:"",headings:[]}},{node:{id:"9f96b199d07a8c10bf8aeb68f103506e",path:"/docs/harmony/img/readme/",title:"",headings:[]}},{node:{id:"4f7cc9c8659717f39e5d7bf95edac043",path:"/docs/gitea/img/readme/",title:"",headings:[]}},{node:{id:"1970b306a481a1088077c6c3b0d1ba70",path:"/docs/gridsome/img/readme/",title:"",headings:[]}},{node:{id:"d8523f3f6f2a4ed6e632b7181d04e155",path:"/docs/dmoffice/img/readme/",title:"",headings:[]}},{node:{id:"01dbe3967310f6ed05652e8d93139116",path:"/docs/dmcustomers/img/readme/",title:"",headings:[]}},{node:{id:"a6ab280727a86e102f27f1d8f332bac9",path:"/docs/dmcollab/img/readme/",title:"",headings:[]}},{node:{id:"776ba9e54c45a751c7d3022ca2904b89",path:"/docs/dmcircles/img/readme/",title:"",headings:[]}},{node:{id:"993a9ab882d70c0cce70ce79d0439d77",path:"/docs/digitalme/img/readme/",title:"",headings:[]}},{node:{id:"efb1d193a8442420790ed00729c68c3b",path:"/docs/digibyte/img/readme/",title:"",headings:[]}},{node:{id:"9fff3bfabf2015fbb1da1d6755a97857",path:"/docs/dash/img/readme/",title:"",headings:[]}},{node:{id:"08193b648915a4e0b7b54c3c01e4fb8f",path:"/docs/crystaltwin/img/readme/",title:"",headings:[]}},{node:{id:"a453efabaa19c1d3137f1d10823477c2",path:"/docs/commento/img/readme/",title:"",headings:[]}},{node:{id:"181de75bffb8a49ec0661eb296de04dc",path:"/docs/blog-publisher/img/readme/",title:"",headings:[]}},{node:{id:"b5928a0e261f26575203fb432484bc05",path:"/docs/zeroci/",title:"ZeroCI",headings:[{depth:1,value:"ZeroCI",anchor:"#zeroci"},{depth:2,value:"What is ZeroCI ?",anchor:"#what-is-zeroci-"},{depth:2,value:"How to Deploy ?",anchor:"#how-to-deploy-"},{depth:2,value:"FAQs",anchor:"#faqs"}]}},{node:{id:"453ae698914fa78c86a3068f69c114ab",path:"/docs/wiki-publisher/",title:"Wiki Publisher",headings:[{depth:1,value:"Wiki Publisher",anchor:"#wiki-publisher"},{depth:2,value:"How it works ?",anchor:"#how-it-works-"},{depth:2,value:"What you need to do?",anchor:"#what-you-need-to-do"}]}},{node:{id:"e00c4c6e1023b561f4a4bb073e75e941",path:"/docs/website-publisher/",title:"Website Publisher",headings:[{depth:1,value:"Website Publisher",anchor:"#website-publisher"},{depth:2,value:"How it works ?",anchor:"#how-it-works-"},{depth:2,value:"What you need to do ?",anchor:"#what-you-need-to-do-"}]}},{node:{id:"a35c5cfd5a6331ea3441adc1666db943",path:"/docs/waykichain/",title:"WaykiChain on ThreeFold",headings:[{depth:1,value:"WaykiChain on ThreeFold",anchor:"#waykichain-on-threefold"},{depth:2,value:"Joint Mission",anchor:"#joint-mission"},{depth:2,value:"About WayKiChain",anchor:"#about-waykichain"},{depth:2,value:"WaykiChain and ThreeFold",anchor:"#waykichain-and-threefold"},{depth:2,value:"Get started",anchor:"#get-started"}]}},{node:{id:"6d665a675a80017621dac59edfcef4d7",path:"/docs/virtual-spaces/",title:"Virtual Spaces",headings:[{depth:1,value:"Virtual Spaces",anchor:"#virtual-spaces"},{depth:2,value:"Taking collaboration to the next level",anchor:"#taking-collaboration-to-the-next-level"},{depth:2,value:"Do you know about Mozilla Hubs ?",anchor:"#do-you-know-about-mozilla-hubs-"},{depth:2,value:"Few use cases for Hubs",anchor:"#few-use-cases-for-hubs"},{depth:2,value:"Hubs on the ThreeFold grid",anchor:"#hubs-on-the-threefold-grid"}]}},{node:{id:"2c615a4706ffdd246a21f457a022f81d",path:"/docs/video-sharing/",title:"Video Sharing",headings:[{depth:1,value:"Video Sharing",anchor:"#video-sharing"},{depth:2,value:"What is a video sharing platform?",anchor:"#what-is-a-video-sharing-platform"},{depth:2,value:"Why is video sharing getting popular ?",anchor:"#why-is-video-sharing-getting-popular-"},{depth:2,value:"What makes our solution different ?",anchor:"#what-makes-our-solution-different-"},{depth:2,value:"Decentralized video sharingn platform",anchor:"#decentralized-video-sharingn-platform"},{depth:2,value:"Peertube - You want to join now ?",anchor:"#peertube---you-want-to-join-now-"},{depth:2,value:"Deploy your own youtube, super powerfull & decentralized.",anchor:"#deploy-your-own-youtube-super-powerfull--decentralized"},{depth:2,value:"How to use peertube with our platform ?",anchor:"#how-to-use-peertube-with-our-platform-"}]}},{node:{id:"dcef1acef0d4f6e1acf70f9c131ce37f",path:"/docs/video-conf/",title:"Video Conferencing",headings:[{depth:1,value:"Video Conferencing",anchor:"#video-conferencing"},{depth:2,value:"Quick Background",anchor:"#quick-background"},{depth:2,value:"How other solutions work ?",anchor:"#how-other-solutions-work-"},{depth:2,value:"Here is an example",anchor:"#here-is-an-example"},{depth:2,value:"How our solution works and what makes it different ?",anchor:"#how-our-solution-works-and-what-makes-it-different-"}]}},{node:{id:"1bcac4487c441dd67a63b9f4ce7c4209",path:"/docs/upcoming-projects/",title:"Upcoming Projects",headings:[{depth:1,value:"Upcoming Projects",anchor:"#upcoming-projects"},{depth:2,value:"Presearch on ThreeFold",anchor:"#presearch-on-threefold"},{depth:2,value:"Origin on ThreeFold",anchor:"#origin-on-threefold"},{depth:2,value:"Polkadot on Threefold",anchor:"#polkadot-on-threefold"},{depth:2,value:"Near on ThreeFold",anchor:"#near-on-threefold"},{depth:2,value:"Ethereum on ThreeFold",anchor:"#ethereum-on-threefold"},{depth:2,value:"Stellar",anchor:"#stellar"},{depth:2,value:"Chainlink",anchor:"#chainlink"}]}},{node:{id:"1598c69024e549e695c9c956bb03713d",path:"/docs/tomochain/",title:"TomoChain on ThreeFold",headings:[{depth:1,value:"TomoChain on ThreeFold",anchor:"#tomochain-on-threefold"},{depth:2,value:"Joint Mission",anchor:"#joint-mission"},{depth:2,value:"About TomoChain",anchor:"#about-tomochain"},{depth:2,value:"TomoChain and ThreeFold",anchor:"#tomochain-and-threefold"},{depth:2,value:"Get Started",anchor:"#get-started"}]}},{node:{id:"629f2ff0944c019064380c6bbc8de838",path:"/docs/tfgrid/",title:"ThreeFold Grid ",headings:[{depth:1,value:"ThreeFold Grid",anchor:"#threefold-grid"},{depth:2,value:"Decentralized Cloud",anchor:"#decentralized-cloud"},{depth:2,value:"ThreeFold Grid",anchor:"#threefold-grid-1"},{depth:2,value:"Centralized Cloud",anchor:"#centralized-cloud"}]}},{node:{id:"f1d1af59ac475eb26df0343bd79ecd70",path:"/docs/stellar/",title:"Stellar",headings:[{depth:1,value:"Stellar",anchor:"#stellar"}]}},{node:{id:"5280fbee8a7c8ebe4ff1b91ea02cef06",path:"/docs/skalelabs/",title:"Skale Network on ThreeFold",headings:[{depth:1,value:"Skale Network on ThreeFold",anchor:"#skale-network-on-threefold"},{depth:2,value:"Joint Mission",anchor:"#joint-mission"},{depth:2,value:"About Skale Labs",anchor:"#about-skale-labs"},{depth:2,value:"Skale Labs and ThreeFold",anchor:"#skale-labs-and-threefold"},{depth:2,value:"Get Started",anchor:"#get-started"}]}},{node:{id:"7e0abe47312453d071d6344900a4d11f",path:"/docs/serverless/",title:"Serverless",headings:[{depth:1,value:"Serverless",anchor:"#serverless"},{depth:2,value:"What is it ?",anchor:"#what-is-it-"},{depth:2,value:"How it is related to our Grid ?",anchor:"#how-it-is-related-to-our-grid-"},{depth:2,value:"Serverless Apps that can run on the Grid ?",anchor:"#serverless-apps-that-can-run-on-the-grid-"}]}},{node:{id:"7cfc396287f06b22b65f59ea6837ba23",path:"/docs/neo/",title:"Neo on ThreeFold",headings:[{depth:1,value:"Neo on ThreeFold",anchor:"#neo-on-threefold"},{depth:2,value:"Joint Mission",anchor:"#joint-mission"},{depth:2,value:"About NEO",anchor:"#about-neo"},{depth:2,value:"Neo and ThreeFold",anchor:"#neo-and-threefold"},{depth:2,value:"Get Started with NEO",anchor:"#get-started-with-neo"}]}},{node:{id:"68ce2e0b556cf215a3070671695b2708",path:"/docs/matic/",title:"Matic Network on ThreeFold",headings:[{depth:1,value:"Matic Network on ThreeFold",anchor:"#matic-network-on-threefold"},{depth:2,value:"Joint Mission",anchor:"#joint-mission"},{depth:2,value:"About Matic Network",anchor:"#about-matic-network"},{depth:2,value:"Matic Network and ThreeFold",anchor:"#matic-network-and-threefold"},{depth:2,value:"Get started with Matic",anchor:"#get-started-with-matic"}]}},{node:{id:"45b37496b420988860daea28d67ada28",path:"/docs/harmony/",title:"Harmony on ThreeFold",headings:[{depth:1,value:"Harmony on ThreeFold",anchor:"#harmony-on-threefold"},{depth:2,value:"Joint Mission",anchor:"#joint-mission"},{depth:2,value:"About Harmony",anchor:"#about-harmony"},{depth:2,value:"Harmony and ThreeFold",anchor:"#harmony-and-threefold"},{depth:2,value:"Get started with Harmony",anchor:"#get-started-with-harmony"}]}},{node:{id:"cf5bd4f173011f4c239d0a05ce48e2b2",path:"/docs/gridsome/",title:"Gridsome",headings:[{depth:1,value:"Gridsome",anchor:"#gridsome"},{depth:2,value:"How it Works ?",anchor:"#how-it-works-"},{depth:2,value:"Features",anchor:"#features"},{depth:2,value:"How to Deploy ?",anchor:"#how-to-deploy-"},{depth:2,value:"FAQs",anchor:"#faqs"}]}},{node:{id:"4ee6f96a38bcd9c1331d3d58446b5d72",path:"/docs/gitea/",title:"Source control Management: Gitea",headings:[{depth:1,value:"Source control Management: Gitea",anchor:"#source-control-management-gitea"},{depth:2,value:"What is gitea ?",anchor:"#what-is-gitea-"},{depth:3,value:"How it all started",anchor:"#how-it-all-started"},{depth:3,value:"Naming",anchor:"#naming"},{depth:2,value:"How to Deploy ?",anchor:"#how-to-deploy-"},{depth:2,value:"FAQs",anchor:"#faqs"}]}},{node:{id:"7e6a2437ce9ccd186e2452e27e9e561b",path:"/docs/elrond/",title:"Elrond on ThreeFold",headings:[{depth:1,value:"Elrond on ThreeFold",anchor:"#elrond-on-threefold"},{depth:2,value:"Joint Mission",anchor:"#joint-mission"},{depth:2,value:"About Elrond",anchor:"#about-elrond"},{depth:2,value:"Elrond and ThreeFold",anchor:"#elrond-and-threefold"},{depth:2,value:"Get Started with Elrond",anchor:"#get-started-with-elrond"}]}},{node:{id:"1aa5ba5190a9bd85327d2547c7375800",path:"/docs/dmoffice/",title:"DigitalMe Office",headings:[{depth:1,value:"DigitalMe Office",anchor:"#digitalme-office"},{depth:2,value:'A brief overview of "Office"',anchor:"#a-brief-overview-of-office"},{depth:2,value:"Tools offered by ThreeFold",anchor:"#tools-offered-by-threefold"}]}},{node:{id:"a0ae2ffe7d41c2354a4dc427955e7388",path:"/docs/dmcustomers/",title:"DigitalMe Customers",headings:[{depth:1,value:"DigitalMe Customers",anchor:"#digitalme-customers"},{depth:2,value:"Did you know about OroCRM ?",anchor:"#did-you-know-about-orocrm-"},{depth:2,value:"How to Deploy on the TGF Grid?",anchor:"#how-to-deploy-on-the-tgf-grid"}]}},{node:{id:"a5d307463fe72ce9f0b5ae3edf6c8a6a",path:"/docs/dmcollab/",title:"DigitalMe Collab",headings:[{depth:1,value:"DigitalMe Collab",anchor:"#digitalme-collab"},{depth:2,value:"Why cryptpad ?",anchor:"#why-cryptpad-"},{depth:2,value:"A rich text editor",anchor:"#a-rich-text-editor"},{depth:2,value:"A code editor",anchor:"#a-code-editor"},{depth:2,value:"A presentation creation tool",anchor:"#a-presentation-creation-tool"},{depth:2,value:"A spreadsheet creator and editor",anchor:"#a-spreadsheet-creator-and-editor"},{depth:2,value:"A poll creation tool",anchor:"#a-poll-creation-tool"},{depth:2,value:"A Kanban project management tool",anchor:"#a-kanban-project-management-tool"},{depth:2,value:"A Whiteboard tool",anchor:"#a-whiteboard-tool"},{depth:2,value:"An encrypted drive to store files",anchor:"#an-encrypted-drive-to-store-files"}]}},{node:{id:"3ba9f1de6a7a340bd6fcdd71777b397f",path:"/docs/digitalme-id/",title:"DigitalMe ID",headings:[{depth:1,value:"DigitalMe ID",anchor:"#digitalme-id"}]}},{node:{id:"f2713ac69b5551164f741bb7ece9e8f3",path:"/docs/dmcircles/",title:"DigitalMe Circles",headings:[{depth:1,value:"DigitalMe Circles",anchor:"#digitalme-circles"},{depth:2,value:"Are you familiar with Agile ?",anchor:"#are-you-familiar-with-agile-"},{depth:2,value:"Agile tool: Taiga",anchor:"#agile-tool-taiga"},{depth:2,value:"How we work at ThreeFold ?",anchor:"#how-we-work-at-threefold-"},{depth:2,value:"How can you and your business benefit ?",anchor:"#how-can-you-and-your-business-benefit-"},{depth:2,value:"What do you need to deploy ?",anchor:"#what-do-you-need-to-deploy-"}]}},{node:{id:"7e3c520af0a95044fa9391a9431c6462",path:"/docs/digitalme/",title:"DigitalMe",headings:[{depth:1,value:"DigitalMe",anchor:"#digitalme"},{depth:2,value:"What is happening ?",anchor:"#what-is-happening-"},{depth:2,value:"What should be done and how are we solving the problem ?",anchor:"#what-should-be-done-and-how-are-we-solving-the-problem-"}]}},{node:{id:"81b82663b17d32e9abc583cdadef346e",path:"/docs/digibyte/",title:"Digibyte on ThreeFold",headings:[{depth:1,value:"Digibyte on ThreeFold",anchor:"#digibyte-on-threefold"},{depth:2,value:"Joint Mission",anchor:"#joint-mission"},{depth:2,value:"About Digibyte",anchor:"#about-digibyte"},{depth:2,value:"Digibyte and ThreeFold",anchor:"#digibyte-and-threefold"},{depth:2,value:"Get Started",anchor:"#get-started"}]}},{node:{id:"a53b30027bb583574c1609c09bbfaf29",path:"/docs/crystaltwin/",title:"Crystal Twin",headings:[{depth:1,value:"Crystal Twin",anchor:"#crystal-twin"},{depth:2,value:"Why is important ?",anchor:"#why-is-important-"},{depth:2,value:"What difference it would make ?",anchor:"#what-difference-it-would-make-"},{depth:2,value:"How will it help you and the people on this planet ?",anchor:"#how-will-it-help-you-and-the-people-on-this-planet-"}]}},{node:{id:"179dc29441f1259e2b0775dee3a67a8f",path:"/docs/dash/",title:"Dash on ThreeFold",headings:[{depth:1,value:"Dash on ThreeFold",anchor:"#dash-on-threefold"},{depth:2,value:"Joint Mission",anchor:"#joint-mission"},{depth:2,value:"About Dash ",anchor:"#about-dash"},{depth:2,value:"Dash and ThreeFold",anchor:"#dash-and-threefold"},{depth:2,value:"Get started with Dash",anchor:"#get-started-with-dash"}]}},{node:{id:"71f2d6bb180b95781023f0826ca988a3",path:"/docs/commento/",title:"Commento",headings:[{depth:1,value:"Commento",anchor:"#commento"},{depth:2,value:"How it Works ?",anchor:"#how-it-works-"},{depth:2,value:"What problems it solves ?",anchor:"#what-problems-it-solves-"},{depth:2,value:"How to Deploy ?",anchor:"#how-to-deploy-"},{depth:2,value:"FAQs",anchor:"#faqs"}]}},{node:{id:"5e5cc1a5b5d6213519e46d4cd10d0bab",path:"/docs/blog-publisher/",title:"Blog Publisher",headings:[{depth:1,value:"Blog Publisher",anchor:"#blog-publisher"},{depth:2,value:"How it works ?",anchor:"#how-it-works-"},{depth:2,value:"What you need to do ?",anchor:"#what-you-need-to-do-"}]}},{node:{id:"95d82bcf962b71caa6da2dbe0cf63701",path:"/docs/",title:"Introduction",headings:[{depth:1,value:"Introduction",anchor:"#introduction"},{depth:2,value:"Why It Matters",anchor:"#why-it-matters"},{depth:2,value:"Features / Benefits",anchor:"#features--benefits"},{depth:2,value:"How to Use ",anchor:"#how-to-use"}]}}]}},u=function(e){var t=e.options;t.__staticData?t.__staticData.data=c:(t.__staticData=s.a.observable({data:c}),t.computed=l({$static:function(){return t.__staticData.data}},t.computed))},p=Object(h.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"relative",on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.increment(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.decrement(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go(t)}]}},[o("label",{staticClass:"relative block"},[o("span",{staticClass:"sr-only"},[e._v("Search Documentation")]),o("div",{staticClass:"absolute inset-y-0 left-0 flex items-center justify-center px-3 py-2 opacity-50"},[o("SearchIcon",{staticClass:"text-ui-typo",attrs:{size:"1.25x"}})],1),o("input",{ref:"input",staticClass:"block w-full py-2 pl-10 pr-4 border-2 rounded-lg bg-ui-sidebar border-ui-sidebar focus:bg-ui-background",class:{"rounded-b-none":e.showResult},attrs:{type:"search",placeholder:"Search Documentation..."},domProps:{value:e.query},on:{focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},input:function(t){e.focusIndex=-1,e.query=t.target.value},change:function(t){e.query=t.target.value}}})]),e.showResult?o("div",{staticClass:"fixed inset-x-0 z-50 overflow-y-auto border-2 border-t-0 rounded-lg rounded-t-none shadow-lg results bg-ui-background bottom:0 sm:bottom-auto sm:absolute border-ui-sidebar",staticStyle:{"max-height":"calc(100vh - 120px)"}},[o("ul",{staticClass:"px-4 py-2 m-0"},[0===e.results.length?o("li",{staticClass:"px-2"},[e._v("\n        No results for "),o("span",{staticClass:"font-bold"},[e._v(e._s(e.query))]),e._v(".\n      ")]):e._l(e.results,(function(t,a){return o("li",{key:t.path+t.anchor,staticClass:"border-ui-sidebar",class:{"border-b":a+1!==e.results.length},on:{mouseenter:function(t){e.focusIndex=a},mousedown:e.go}},[o("g-link",{staticClass:"block p-2 -mx-2 text-base font-bold rounded-lg",class:{"bg-ui-sidebar text-ui-primary":e.focusIndex===a},attrs:{to:t.path+t.anchor}},[t.value===t.title?o("span",[e._v("\n            "+e._s(t.value)+"\n          ")]):o("span",{staticClass:"flex items-center"},[e._v("\n            "+e._s(t.title)+"\n            "),o("ChevronRightIcon",{staticClass:"mx-1",attrs:{size:"1x"}}),o("span",{staticClass:"font-normal opacity-75"},[e._v(e._s(t.value))])],1)])],1)}))],2)]):e._e()])}),[],!1,null,null,null);"function"==typeof u&&u(p);t.default=p.exports}}]);