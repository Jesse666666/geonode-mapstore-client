(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[6235,9081],{16919:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(67294),o=n.n(r),i=n(32833),c=n(65539),a=n(2479),s=n(57588),l=n(82467),u={bottom:{true:"chevron-down",false:"chevron-up"},top:{true:"chevron-up",false:"chevron-down"},right:{true:"chevron-right",false:"chevron-left"},left:{true:"chevron-left",false:"chevron-right"}};const p=function(e){var t=e.position,n=void 0===t?"right":t,r=e.onClose,i=e.bsStyle,c=void 0===i?"default":i,a=e.title,p=void 0===a?"":a,d=e.fullscreen,f=void 0!==d&&d,m=e.showFullscreen,v=void 0!==m&&m,y=e.glyph,g=void 0===y?"info-sign":y,h=e.additionalRows,w=e.onFullscreen,b=void 0===w?function(){}:w,E=r?o().createElement(l.Z,{key:"ms-header-close",className:"square-button ms-close",onClick:r,bsStyle:c},o().createElement(s.Glyphicon,{glyph:"1-close"})):null,S=v?o().createElement(l.Z,{key:"ms-header-glyph",className:"square-button",bsStyle:c,onClick:function(){return b(!f)}},o().createElement(s.Glyphicon,{glyph:u[n]&&u[n][f]||"resize-full"})):o().createElement("div",{key:"ms-header-glyph",className:"square-button ".concat("bg-"+c),style:{display:"flex"}},o().createElement(s.Glyphicon,{glyph:g,className:"".concat("default"===c?"text-primary":"")})),O="left"===n?[E,S]:[S,E];return o().createElement(s.Grid,{fluid:!0,style:{width:"100%"},className:"ms-header ms-"+c},o().createElement(s.Row,null,o().createElement(s.Col,{xs:2},O[0]),o().createElement(s.Col,{xs:8},o().createElement("h4",null,p)),o().createElement(s.Col,{xs:2},O[1])),h)},d=(0,a.withState)("fullscreen","onFullscreen",!1)((function(e){var t=e.fluid,n=e.className,r=void 0===n?"":n,a=e.fullscreen,s=void 0!==a&&a,l=e.position,u=e.open,d=e.size,f=void 0===d?550:d,m=e.style,v=void 0===m?{}:m,y=e.zIndex,g=void 0===y?1030:y,h=e.onClose,w=e.bsStyle,b=e.title,E=e.showFullscreen,S=void 0!==E&&E,O=e.glyph,P=e.header,x=e.footer,j=e.children,C=e.onFullscreen,I=void 0===C?function(){}:C,k=e.fixed,M=void 0!==k&&k,z=e.resizable,T=void 0!==z&&z,N=e.hideHeader;return o().createElement("div",{className:"ms-side-panel "+(M?"":"ms-absolute-dock ")+(T?"":"react-dock-no-resize ")+r},o().createElement(i.default,{fluid:t||s,position:l,dimMode:"none",isVisible:u,size:s?1:f,dockStyle:v,zIndex:g},o().createElement(c.Z,{header:!N&&u&&o().createElement(p,{position:l,onClose:h,bsStyle:w,title:b,fullscreen:s,showFullscreen:S,glyph:O,additionalRows:P,onFullscreen:I}),footer:u&&x},u&&j)))}))},32107:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(67294),o=n.n(r),i=n(2479),c=n(65539),a=n(16919),s=n(94745),l=["children","header"];var u=(0,i.renameProps)({open:"show"})((function(e){var t=e.children,n=e.header,r=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,l);return o().createElement(s.Z,r,o().createElement(c.Z,{header:o().createElement("div",{className:"ms-header"},n)},t))}));const p=(0,i.branch)((function(e){return!e.dock}),(function(){return function(e){return o().createElement(u,e)}}))(a.Z)},22780:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Support:()=>ne,default:()=>ie});var r=n(67294),o=n.n(r),i=n(33664),c=n(22222),a=n(75110),s=n(71314),l=n(27418),u=n.n(l),p="SWIPE:SET_ACTIVE",d="SWIPE:SET_MODE",f="SWIPE:SET_SWIPE_TOOL_DIRECTION",m="SWIPE:SET_SPY_TOOL_RADIUS";function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"active";return{type:p,active:e,prop:t}}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=n(89255),b=n(80416),E=n(75982);const S={resetLayerSwipeSettingsEpic:function(e,t){return e.ofType(b.c7).switchMap((function(e){var n=e.nodeType,r=t.getState();return(0,s.yn)(r).active&&"group"===n?w.Observable.of(v(!1)):w.Observable.empty()}))},deactivateSwipeToolOnSwitchMaps:function(e,t){return e.ofType(E.nk).switchMap((function(){return(0,s.yn)(t.getState()).active?w.Observable.of(v(!1)):w.Observable.empty()}))}};var O=n(22843),P=n(43129),x=n(85552),j=n.n(x),C=n(13311),I=n.n(C),k=n(5346),M=n(32107);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var R=[{label:"Horizontal",value:"cut-horizontal"},{label:"Vertical",value:"cut-vertical"}],A=function(e){var t=e.spyModeSettings,n=e.onSetSpyToolRadius;return o().createElement("div",{className:"mapstore-swipe-settings-spy"},o().createElement("h4",null,o().createElement(k.Z,{msgId:"toc.radius"})),o().createElement("div",{className:"mapstore-slider with-tooltip"},o().createElement(j(),{tooltips:!0,step:10,start:[t.radius],range:{min:[20],max:[100]},onChange:function(e){return n(e[0])}})))},Z=function(e){var t=e.swipeModeSettings,n=e.onSetSwipeToolDirection;return o().createElement("div",{className:"mapstore-swipe-settings-slider"},o().createElement("h4",null,o().createElement(k.Z,{msgId:"toc.direction"})),o().createElement(P.ZP,{styles:{menuPortal:function(e){return T(T({},e),{},{zIndex:3100})}},onChange:function(e){var t=e.value;return n(t)},clearable:!1,value:I()(R,["value",t.direction]),options:R}))},D=(0,c.P1)([s.yn,s.wQ,s.IY],(function(e,t,n){return{configuring:(null==e?void 0:e.configuring)||!1,toolMode:(null==e?void 0:e.mode)||"swipe",swipeModeSettings:t,spyModeSettings:n}}));const L=(0,i.connect)(D,{onSetConfigurationActive:v,onSetSwipeToolDirection:function(e){return{type:f,direction:e}},onSetSpyToolRadius:function(e){return{type:m,radius:e}}})((function(e){var t=e.configuring,n=e.toolMode,r=e.swipeModeSettings,i=e.spyModeSettings,c=e.onSetConfigurationActive,a=void 0===c?function(){}:c,s=e.onSetSpyToolRadius,l=void 0===s?function(){}:s,u=e.onSetSwipeToolDirection,p=void 0===u?function(){}:u;return o().createElement("div",{className:"mapstore-swipe-settings"},o().createElement(M.Z,{title:"spy"===n?o().createElement(k.Z,{msgId:"toc.spyconfiguration"}):o().createElement(k.Z,{msgId:"toc.swipeconfiguration"}),open:t,onClose:function(){return a(!1,"configuring")},enableFooter:!1,draggable:!0,size:"xs",bodyClassName:"mapstore-swipe-setiings-modal-body",dialogClassName:" mapstore-swipe-settings-modal",glyph:"transfer"},"spy"===n?o().createElement(A,{spyModeSettings:i,onSetSpyToolRadius:l}):o().createElement(Z,{swipeModeSettings:r,onSetSwipeToolDirection:p})))}));var _=n(57588),G=n(85294),F=n.n(G);const Y=function(e){var t=e.map,n=e.layer,o=e.type,i=e.getWidth,c=e.getHeight,a=e.circleCutProp,s=(0,r.useCallback)((function(e){var n=e.context,r=i()*t.pixelRatio_;n.save(),n.beginPath(),n.rect(r,0,n.canvas.width-r,n.canvas.height),n.strokeStyle="rgba(0,0,0,0.5)",n.clip()}),[n,o]),l=(0,r.useCallback)((function(e){e.context.restore()}),[n,o]),u=(0,r.useCallback)((function(e){var n=e.context,r=c()*t.pixelRatio_;n.save(),n.beginPath(),n.rect(0,r,n.canvas.width,n.canvas.height-r),n.clip()}),[n,o]),p=(0,r.useCallback)((function(e){var t=e.context,n=e.frameState.pixelRatio;t.save(),t.beginPath();var r=a.getMousePosition();r&&(t.arc(r[0]*n,r[1]*n,a.radius*n,0,2*Math.PI),t.lineWidth=5*n,t.strokeStyle="rgba(0,0,0,0.5)",t.stroke()),t.clip()}),[n,o,a]);return(0,r.useEffect)((function(){var e=t.getLayers().getArray().filter((function(e){return e.get("msId")===n}))[0];if(e){switch(o){case"cut-vertical":!function(e,t,n){e.on("precompose",t),e.on("postcompose",n)}(e,s,l);break;case"cut-horizontal":!function(e,t,n){e.on("precompose",t),e.on("postcompose",n)}(e,u,l);break;case"circle":!function(e,t,n){e.on("precompose",t),e.on("postcompose",n)}(e,p,l)}return t.render(),function(){e.un("precompose",s),e.un("precompose",u),e.un("precompose",p),e.un("postcompose",l),t.render()}}return function(){return t.render()}}),[n,o,a]),null};function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],c=!0,a=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);c=!0);}catch(e){a=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?q(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var H=function(e){var t=e.type,n=e.map,i=e.widthRef,c=W((0,r.useState)(),2),a=c[0],s=c[1],l=W((0,r.useState)(!0),2),u=l[0],p=l[1],d=function(){s({x:0,y:0}),i.current=n.getProperties().size[0]/2};return(0,r.useEffect)((function(){return window.addEventListener("resize",d),function(){window.removeEventListener("resize",d)}}),[t]),(0,r.useEffect)((function(){i.current=n.getProperties().size[0]/2}),[t]),o().createElement(F(),{position:a,bounds:"parent",onStart:function(){return p(!1)},onDrag:function(e,t){return function(e,t){i.current+=t.deltaX,s({x:t.x,y:t.y}),n.render()}(0,t)},onStop:function(){return p(!0)}},o().createElement("div",{className:"mapstore-swipe-slider",style:{height:"100%",top:"0px",left:"".concat(n.getProperties().size[0]/2,"px"),width:"8px",cursor:"col-resize"}},u&&o().createElement("div",{className:"ms-vertical-swipe-slider-arrows",style:{top:"".concat(n.getProperties().size[1]/2-26,"px")}},o().createElement("div",{className:"ms-slider-arrows"},o().createElement(_.Glyphicon,{glyph:"chevron-left"})),o().createElement("div",{className:"ms-slider-arrows"},o().createElement(_.Glyphicon,{glyph:"chevron-right"})))))},Q=function(e){var t=e.type,n=e.map,i=e.heightRef,c=W((0,r.useState)(),2),a=c[0],s=c[1],l=W((0,r.useState)(!0),2),u=l[0],p=l[1],d=function(){s({x:0,y:0}),i.current=n.getProperties().size[1]/2};return(0,r.useEffect)((function(){return window.addEventListener("resize",d),function(){window.removeEventListener("resize",d)}}),[t]),(0,r.useEffect)((function(){i.current=n.getProperties().size[1]/2}),[t]),o().createElement(F(),{position:a,bounds:"parent",onStart:function(){return p(!1)},onDrag:function(e,t){return function(e,t){i.current+=t.deltaY,s({x:t.x,y:t.y}),n.render()}(0,t)},onStop:function(){return p(!0)}},o().createElement("div",{className:"mapstore-swipe-slider",style:{height:"8px",top:"".concat(n.getProperties().size[1]/2,"px"),left:"0px",width:"100%",cursor:"row-resize"}},u&&o().createElement("div",{className:"ms-horizontal-swipe-slider-arrows",style:{left:"".concat(n.getProperties().size[0]/2-26,"px")}},o().createElement("div",{className:"ms-slider-arrows"},o().createElement(_.Glyphicon,{glyph:"chevron-up"})),o().createElement("div",{className:"ms-slider-arrows"},o().createElement(_.Glyphicon,{glyph:"chevron-down"})))))};const V=function(e){var t=e.map,n=e.layer,i=e.type,c=void 0===i?"cut-vertical":i,a=e.active,s=(0,r.useRef)(),l=(0,r.useRef)();return n&&a?o().createElement(o().Fragment,null,"cut-vertical"===c&&o().createElement(H,{widthRef:l,map:t,type:c}),"cut-horizontal"===c&&o().createElement(Q,{heightRef:s,map:t,type:c}),o().createElement(Y,{map:t,layer:n,type:c,getWidth:function(){return l.current},getHeight:function(){return s.current}})):null},U=function(e){var t=e.layer,n=e.map,i=e.active,c=e.radius,a=(0,r.useRef)(),s=(0,r.useCallback)((function(e){a.current=n.getEventPixel(e),n.render()}),[t,c]),l=(0,r.useCallback)((function(){a.current=null,n.render()}),[t,c]);(0,r.useEffect)((function(){var e=n.getTargetElement();return e.addEventListener("mousemove",s),e.addEventListener("mouseout",l),function(){e.removeEventListener("mousemove",s),e.removeEventListener("mouseout",l)}}),[]);var u={radius:c,getMousePosition:function(){return a.current}};return t&&i?o().createElement(Y,{map:n,layer:t,type:"circle",circleCutProp:u}):null};var B=n(45697),X=n.n(B);function $(){return $=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$.apply(this,arguments)}var J=(0,n(15135).Z)(_.SplitButton),K={title:o().createElement(_.Glyphicon,{glyph:"transfer"}),tooltipId:"toc.compareTool",tooltipPosition:"top",className:"square-button-md no-border",pullRight:!0},ee=function(e){var t=e.swipeSettings,n=e.onSetActive,r=e.onSetSwipeMode,i=e.status;return o().createElement(J,$({onClick:function(){t.active||"LAYER"!==i?n(!1):n(!0)},bsStyle:null!=t&&t.active?"success":"primary"},K),o().createElement(_.MenuItem,{active:"swipe"===(null==t?void 0:t.mode),onClick:function(){r("swipe"),n(!0)}},o().createElement(_.Glyphicon,{glyph:"vert-dashed"}),o().createElement(k.Z,{msgId:"toc.swipe"})),o().createElement(_.MenuItem,{active:"spy"===(null==t?void 0:t.mode),onClick:function(){r("spy"),n(!0)}},o().createElement(_.Glyphicon,{glyph:"search"}),o().createElement(k.Z,{msgId:"toc.spyGlass"})),o().createElement(_.MenuItem,{onClick:function(){t.configuring||"LAYER"!==i?n(!1,"configuring"):n(!0,"configuring")}},o().createElement(_.Glyphicon,{glyph:"cog"}),o().createElement(k.Z,{msgId:"toc.configureTool"})))};ee.propTypes={swipeSettings:X().object,status:X().string,onSetActive:X().func,onSetSwipeMode:X().func},ee.defaultProps={status:"LAYER",onSetSwipeMode:function(){},onSetActive:function(){}};const te=ee;var ne=function(e){var t=e.mode,n=e.map,r=e.layer,i=e.active,c=e.swipeModeSettings,a=e.spyModeSettings;return"spy"===t?o().createElement(U,{map:n,layer:r,active:i,radius:a.radius}):o().createElement(V,{map:n,layer:r,active:i,type:c.direction})},re=(0,c.P1)([a.Iz,s.yn,s.wQ,s.IY],(function(e,t,n,r){return{layer:null==e?void 0:e.id,active:t.active||!1,swipeModeSettings:n,spyModeSettings:r,mode:(null==t?void 0:t.mode)||"swipe"}})),oe=(0,i.connect)(re,null)(ne);const ie=(0,O.rx)("Swipe",{options:{disablePluginIf:"{state('mapType') === 'leaflet' || state('mapType') === 'cesium'}"},component:L,containers:{TOC:{name:"Swipe",target:"toolbar",selector:function(e){return"LAYER"===e.status},Component:(0,i.connect)((0,c.P1)(s.yn,(function(e){return{swipeSettings:e}})),{onSetActive:v,onSetSwipeMode:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"swipe";return{type:d,mode:e}}})(te)},Map:{name:"Swipe",Tool:oe}},reducers:{swipe:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return u()({},e,h({},t.prop,t.active));case d:return u()({},e,{mode:t.mode});case f:var n=g(g({},e.swipe),{},{direction:t.direction});return u()({},e,{swipe:n});case m:var r=g(g({},e.spy),{},{radius:t.radius});return u()({},e,{spy:r});default:return e}}},epics:S})},71314:(e,t,n)=>{"use strict";n.d(t,{yn:()=>r,IY:()=>o,wQ:()=>i});var r=function(e){return e.swipe&&e.swipe||{active:!1}},o=function(e){var t;return(null==e||null===(t=e.swipe)||void 0===t?void 0:t.spy)||{radius:80}},i=function(e){var t;return(null==e||null===(t=e.swipe)||void 0===t?void 0:t.swipe)||{direction:"cut-vertical"}}},19081:(e,t,n)=>{"use strict";e.exports=n(1174)}}]);