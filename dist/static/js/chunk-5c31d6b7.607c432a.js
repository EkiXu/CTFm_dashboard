(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c31d6b7"],{"169a":function(e,t,i){"use strict";i("7db0"),i("caad"),i("45fc"),i("c0b6"),i("a9e3"),i("2532"),i("498a"),i("4795");var n=i("5530"),a=i("2909"),s=i("ade3"),l=(i("368e"),i("480e")),o=i("4ad4"),r=i("b848"),c=i("75eb"),d=i("e707"),u=i("e4d3"),h=i("21be"),m=i("f2e7"),v=i("a293"),f=i("58df"),g=i("d9bd"),p=i("80d2"),b=Object(f["a"])(o["a"],r["a"],c["a"],d["a"],u["a"],h["a"],m["a"]);t["a"]=b.extend({name:"v-dialog",directives:{ClickOutside:v["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var e;return e={},Object(s["a"])(e,"v-dialog ".concat(this.contentClass).trim(),!0),Object(s["a"])(e,"v-dialog--active",this.isActive),Object(s["a"])(e,"v-dialog--persistent",this.persistent),Object(s["a"])(e,"v-dialog--fullscreen",this.fullscreen),Object(s["a"])(e,"v-dialog--scrollable",this.scrollable),Object(s["a"])(e,"v-dialog--animated",this.animate),e},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(e){var t;e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(t=this.previousActiveElement)||t.focus())},fullscreen:function(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(g["e"])("full-width",this)},beforeMount:function(){var e=this;this.$nextTick((function(){e.isBooted=e.isActive,e.isActive&&e.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var e=this;this.animate=!1,this.$nextTick((function(){e.animate=!0,window.clearTimeout(e.animateTimeout),e.animateTimeout=window.setTimeout((function(){return e.animate=!1}),150)}))},closeConditional:function(e){var t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):d["a"].options.methods.hideScroll.call(this)},show:function(){var e=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){e.$nextTick((function(){e.previousActiveElement=document.activeElement,e.$refs.content.focus(),e.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(e){if(e.keyCode===p["x"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var t=this.getActivator();this.$nextTick((function(){return t&&t.focus()}))}this.$emit("keydown",e)},onFocusin:function(e){if(e&&this.retainFocus){var t=e.target;if(t&&![document,this.$refs.content].includes(t)&&!this.$refs.content.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(e){return e.contains(t)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),n=Object(a["a"])(i).find((function(e){return!e.hasAttribute("disabled")}));n&&n.focus()}}},genContent:function(){var e=this;return this.showLazyContent((function(){return[e.$createElement(l["a"],{props:{root:!0,light:e.light,dark:e.dark}},[e.$createElement("div",{class:e.contentClasses,attrs:Object(n["a"])({role:"document",tabindex:e.isActive?0:void 0},e.getScopeIdAttrs()),on:{keydown:e.onKeydown},style:{zIndex:e.activeZIndex},ref:"content"},[e.genTransition()])])]}))},genTransition:function(){var e=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[e]):e},genInnerContent:function(){var e={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(e.style=Object(n["a"])(Object(n["a"])({},e.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(p["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(p["g"])(this.width)})),this.$createElement("div",e,this.getContentSlot())}},render:function(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"368e":function(e,t,i){},"98ed":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{attrs:{id:"user-profile",fluid:"",category:"section"}},[i("v-row",{staticStyle:{height:"56px"}}),i("v-row",{attrs:{justify:"center"}},[i("v-col",{attrs:{cols:"12",md:"8"}},[i("BaseCard",{attrs:{color:"#03a9be"},scopedSlots:e._u([{key:"heading",fn:function(){return[i("div",{staticClass:"display-2 font-weight-light"},[e._v(" Edit Challenges ")])]},proxy:!0}])},[i("v-data-table",{staticClass:"elevation-1",staticStyle:{"box-shadow":"none !important"},attrs:{headers:e.headers,items:e.challenges,"sort-by":"id"},scopedSlots:e._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",[e._v("Challenges")]),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-spacer"),i("v-dialog",{attrs:{"hide-overlay":"",persistent:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,a=t.attrs;return[i("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",a,!1),n),[e._v(" New Challenge ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),i("v-card-text",[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"7",md:"8"}},[i("v-text-field",{attrs:{rules:e.rules.nameRules,label:"Title"},model:{value:e.editedChallenge.title,callback:function(t){e.$set(e.editedChallenge,"title",t)},expression:"editedChallenge.title"}})],1),i("v-col",{attrs:{cols:"12",sm:"5",md:"4"}},[i("v-select",{attrs:{items:e.categories,rules:e.rules.categoryRules,"item-text":"name","item-value":"id",label:"Category"},model:{value:e.editedChallenge.category,callback:function(t){e.$set(e.editedChallenge,"category",t)},expression:"editedChallenge.category"}})],1),i("v-col",{attrs:{cols:"8",sm:"5",md:"4"}},[i("v-text-field",{attrs:{label:"Author"},model:{value:e.editedChallenge.author,callback:function(t){e.$set(e.editedChallenge,"author",t)},expression:"editedChallenge.author"}})],1),i("v-col",{attrs:{cols:"12",sm:"7",md:"8"}},[i("v-text-field",{attrs:{rules:e.rules.flagRules,label:"Flag"},model:{value:e.editedChallenge.flag,callback:function(t){e.$set(e.editedChallenge,"flag",t)},expression:"editedChallenge.flag"}})],1),i("v-col",{attrs:{cols:"4"}},[i("v-text-field",{attrs:{rules:e.rules.pointsRules,label:"Initial Points"},model:{value:e.editedChallenge.initial_points,callback:function(t){e.$set(e.editedChallenge,"initial_points",t)},expression:"editedChallenge.initial_points"}})],1),i("v-col",{attrs:{cols:"4"}},[i("v-text-field",{attrs:{rules:e.rules.pointsRules,label:"Minimum points"},model:{value:e.editedChallenge.minimum_points,callback:function(t){e.$set(e.editedChallenge,"minimum_points",t)},expression:"editedChallenge.minimum_points"}})],1),i("v-col",{attrs:{cols:"4"}},[i("v-text-field",{attrs:{rules:e.rules.pointsRules,label:"Decay"},model:{value:e.editedChallenge.decay,callback:function(t){e.$set(e.editedChallenge,"decay",t)},expression:"editedChallenge.decay"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{label:"Summary"},model:{value:e.editedChallenge.summary,callback:function(t){e.$set(e.editedChallenge,"summary",t)},expression:"editedChallenge.summary"}})],1),i("v-col",{attrs:{cols:"12"}},[i("h2",{staticStyle:{"padding-bottom":"10px"}},[e._v(" Content ")]),i("Markdown",{attrs:{height:260},model:{value:e.editedChallenge.content,callback:function(t){e.$set(e.editedChallenge,"content",t)},expression:"editedChallenge.content"}})],1),i("v-col",{attrs:{cols:"8",sm:"5",md:"4"}},[i("v-select",{attrs:{items:e.types,"item-text":"name","item-value":"value",label:"Type"},model:{value:e.editedChallenge.has_dynamic_container,callback:function(t){e.$set(e.editedChallenge,"has_dynamic_container",t)},expression:"editedChallenge.has_dynamic_container"}})],1),i("v-col",{attrs:{cols:"12",sm:"7",md:"8"}},[i("v-text-field",{attrs:{label:"Attachment"},model:{value:e.editedChallenge.attachment_url,callback:function(t){e.$set(e.editedChallenge,"attachment_url",t)},expression:"editedChallenge.attachment_url"}})],1),e.editedChallenge.has_dynamic_container?[i("v-col",{attrs:{cols:"12",sm:"6"}},[i("v-text-field",{attrs:{label:"Image"},model:{value:e.editedChallenge.image,callback:function(t){e.$set(e.editedChallenge,"image",t)},expression:"editedChallenge.image"}})],1),i("v-col",{attrs:{cols:"6",sm:"3"}},[i("v-select",{attrs:{items:e.protocols,"item-text":"name","item-value":"value",label:"Protocol"},model:{value:e.editedChallenge.protocol,callback:function(t){e.$set(e.editedChallenge,"protocol",t)},expression:"editedChallenge.protocol"}})],1),i("v-col",{attrs:{cols:"6",sm:"3"}},[i("v-text-field",{attrs:{label:"Port",rules:e.rules.portRules},model:{value:e.editedChallenge.redirect_port,callback:function(t){e.$set(e.editedChallenge,"redirect_port",t)},expression:"editedChallenge.redirect_port"}})],1),i("v-col",{attrs:{cols:"6"}},[i("v-text-field",{attrs:{label:"Memory Limit"},model:{value:e.editedChallenge.memory_limit,callback:function(t){e.$set(e.editedChallenge,"memory_limit",t)},expression:"editedChallenge.memory_limit"}})],1),i("v-col",{attrs:{cols:"6"}},[i("v-text-field",{attrs:{label:"CPU Limit"},model:{value:e.editedChallenge.cpu_limit,callback:function(t){e.$set(e.editedChallenge,"cpu_limit",t)},expression:"editedChallenge.cpu_limit"}})],1)]:e._e(),i("v-col",{attrs:{cols:"12"}},[i("v-switch",{attrs:{label:"Hide Challenge"},model:{value:e.editedChallenge.is_hidden,callback:function(t){e.$set(e.editedChallenge,"is_hidden",t)},expression:"editedChallenge.is_hidden"}})],1)],2)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancel ")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" Save ")])],1)],1)],1)],1)]},proxy:!0},{key:"item.is_hidden",fn:function(t){var n=t.item;return[i("v-simple-checkbox",{attrs:{disabled:""},model:{value:n.is_hidden,callback:function(t){e.$set(n,"is_hidden",t)},expression:"item.is_hidden"}})]}},{key:"item.actions",fn:function(t){var n=t.item;return[i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(n)}}},[e._v(" mdi-pencil ")]),i("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(n)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[i("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v(" Reset ")])]},proxy:!0}])})],1)],1)],1)],1)},a=[],s=(i("c975"),i("a434"),i("e25e"),i("96cf"),i("1da1")),l=i("ff7d"),o=i("8e77"),r=i("c405"),c=i("b775"),d=function(){return Object(c["a"])({url:"/admin/challenge/",method:"get"})},u=function(e){return Object(c["a"])({url:"/admin/challenge/"+e+"/",method:"get"})},h=function(e){return Object(c["a"])({url:"/admin/challenge/",method:"post",data:e})},m=function(e,t){return Object(c["a"])({url:"/admin/challenge/"+e+"/",method:"put",data:t})},v=function(e){return Object(c["a"])({url:"/admin/challenge/"+e+"/",method:"delete"})},f={components:{BaseCard:l["a"],Markdown:o["a"]},data:function(){return{dialog:!1,headers:[{text:"ID",align:"start",sortable:!0,value:"id"},{text:"Challenge",sortable:!1,value:"title"},{text:"Points",value:"points"},{text:"Category",value:"category"},{text:"Is Hidden",value:"is_hidden"},{text:"Solved",value:"solved_amount"},{text:"Attempts",value:"attempt_amount"},{text:"Actions",value:"actions",sortable:!1}],challenges:[],editedIndex:-1,editedChallenge:{id:0,title:"",summary:"",content:"",flag:"",category:0,initial_points:0,minimum_points:0,decay:0,is_hidden:!0,have_dynamic_container:!1,attachment_url:"",memory_limit:"128m",cpu_limit:.5},defaultChallenge:{id:0,title:"",summary:"",content:"",flag:"",category:0,initial_points:0,minimum_points:0,decay:0,is_hidden:!0,has_dynamic_container:!1,attachment_url:""},categories:[],types:[{name:"Static URL",value:!1},{name:"Daynamic Container",value:!0}],protocols:[{name:"TCP",value:"1"},{name:"HTTP",value:"2"}],rules:{nameRules:[function(e){return!!e||"Challenge Title is required"}],pointsRules:[function(e){return!!e||"Points is required"},function(e){return/^[0-9]*$/.test(e)||"Points must be valid"}],portRules:[function(e){return!!e||"Ports is required"},function(e){return/^[0-9]*$/.test(e)||"Ports must be valid"},function(e){return 0<e&&e<66536||"Ports must between 1~66535"}],categoryRules:[function(e){return!!e||"Category is required"}],contentnRules:[function(e){return!!e||"Content is required"}],flagRules:[function(e){return!!e||"Flag is required"}]}}},computed:{formTitle:function(){return-1===this.editedIndex?"New Challenge":"Edit Challenge"}},watch:{dialog:function(e){e||this.close()}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.initialize();case 1:case"end":return t.stop()}}),t)})))()},methods:{initialize:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d();case 2:return i=t.sent,e.challenges=i.data,t.next=6,Object(r["d"])();case 6:n=t.sent,e.categories=n.data;case 8:case"end":return t.stop()}}),t)})))()},editItem:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function i(){var n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return t.editedIndex=t.challenges.indexOf(e),i.next=3,u(e.id);case 3:n=i.sent,t.editedChallenge=Object.assign({},n["data"]),t.dialog=!0;case 6:case"end":return i.stop()}}),i)})))()},deleteItem:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function i(){var n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return n=t.challenges.indexOf(e),confirm("Are you sure you want to delete this Challenge?")&&t.challenges.splice(n,1),i.next=4,v(e.id);case 4:i.sent,t.$vToastify.success("Deleted Successfully");case 6:case"end":return i.stop()}}),i)})))()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedChallenge=Object.assign({},e.defaultChallenge),e.editedIndex=-1}))},save:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.editedIndex>-1)){t.next=8;break}return Object.assign(e.challenges[e.editedIndex],e.editedChallenge),t.next=4,m(e.editedChallenge.id,e.editedChallenge);case 4:t.sent,e.$vToastify.success("Edited Successfully"),t.next=15;break;case 8:return t.next=10,h(e.editedChallenge);case 10:i=t.sent,e.editedChallenge.points=parseInt(e.editedChallenge.initial_points),e.editedChallenge.id=i["data"]["id"],e.challenges.push(e.editedChallenge),e.$vToastify.success("Added Successfully");case 15:e.close();case 16:case"end":return t.stop()}}),t)})))()}}},g=f,p=i("2877"),b=i("6544"),C=i.n(b),y=i("8336"),x=i("b0af"),w=i("99d9"),_=i("62ad"),k=i("a523"),O=i("8fea"),$=i("169a"),S=i("ce7e"),A=i("132d"),j=i("0fd9"),V=i("b974"),T=i("9e88"),I=i("2fa4"),R=i("b73d"),E=i("8654"),B=i("71d9"),D=i("2a7f"),P=Object(p["a"])(g,n,a,!1,null,null,null);t["default"]=P.exports;C()(P,{VBtn:y["a"],VCard:x["a"],VCardActions:w["a"],VCardText:w["b"],VCardTitle:w["c"],VCol:_["a"],VContainer:k["a"],VDataTable:O["a"],VDialog:$["a"],VDivider:S["a"],VIcon:A["a"],VRow:j["a"],VSelect:V["a"],VSimpleCheckbox:T["a"],VSpacer:I["a"],VSwitch:R["a"],VTextField:E["a"],VToolbar:B["a"],VToolbarTitle:D["a"]})},"9d01":function(e,t,i){},b73d:function(e,t,i){"use strict";i("0481"),i("4069");var n=i("5530"),a=(i("ec29"),i("9d01"),i("4de4"),i("277d"),i("45fc"),i("0d03"),i("d3b7"),i("25f0"),i("c37a")),s=i("5607"),l=i("2b0e"),o=l["a"].extend({name:"rippleable",directives:{ripple:s["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}}),r=i("8547"),c=i("58df");function d(e){e.preventDefault()}var u=Object(c["a"])(a["a"],o,r["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var e=this,t=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return e.valueComparator(i,t)})):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel:function(){var e=a["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:d},e):e},genInput:function(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:d},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(e){this.onChange(),this.$emit("click",e)},onChange:function(){var e=this;if(this.isInteractive){var t=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var n=i.length;i=i.filter((function(i){return!e.valueComparator(i,t)})),i.length===n&&i.push(t)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(i,t)?null:t:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(e){}}}),h=i("c3f0"),m=i("0789"),v=i("490a"),f=i("80d2");t["a"]=u.extend({name:"v-switch",directives:{Touch:h["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(n["a"])(Object(n["a"])({},this.attrs),this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(n["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(n["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(m["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(v["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(e){(e.keyCode===f["x"].left&&this.isActive||e.keyCode===f["x"].right&&!this.isActive)&&this.onChange()}}})},c405:function(e,t,i){"use strict";i.d(t,"d",(function(){return a})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return l})),i.d(t,"e",(function(){return o})),i.d(t,"b",(function(){return r}));var n=i("b775"),a=function(){return Object(n["a"])({url:"/admin/category/",method:"get"})},s=function(e){return Object(n["a"])({url:"/admin/category/"+e+"/",method:"get"})},l=function(e){return Object(n["a"])({url:"/admin/category/",method:"post",data:e})},o=function(e,t){return Object(n["a"])({url:"/admin/category/"+e+"/",method:"put",data:t})},r=function(e){return Object(n["a"])({url:"/admin/category/"+e+"/",method:"delete"})}},ec29:function(e,t,i){}}]);