!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t(),module.exports.introJs=function(){return console.warn('Deprecated: please use require("intro.js") directly, instead of the introJs method of the function'),t().apply(this,arguments)};else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).introJs=t()}}(function(){function n(t){this._targetElement=t,this._introItems=[],this._options={nextLabel:"Next &rarr;",prevLabel:"&larr; Back",skipLabel:"Skip",doneLabel:"Done",hidePrev:!1,hideNext:!1,tooltipPosition:"bottom",tooltipClass:"",highlightClass:"",exitOnEsc:!0,exitOnOverlayClick:!0,showStepNumbers:!0,keyboardNavigation:!0,showButtons:!0,showBullets:!0,showProgress:!1,scrollToElement:!0,scrollTo:"element",scrollPadding:30,overlayOpacity:.8,positionPrecedence:["bottom","top","right","left"],disableInteraction:!1,helperElementPadding:10,hintPosition:"top-middle",hintButtonLabel:"Got it",hintAnimation:!0,buttonClass:"introjs-button"}}function e(t,i){var e=t.querySelectorAll("*[data-intro]"),n=[];if(this._options.steps)B(this._options.steps,function(t){var e=h(t);if(e.step=n.length+1,"string"==typeof e.element&&(e.element=document.querySelector(e.element)),void 0===e.element||null===e.element){var i=document.querySelector(".introjsFloatingElement");null===i&&((i=document.createElement("div")).className="introjsFloatingElement",document.body.appendChild(i)),e.element=i,e.position="floating"}e.scrollTo=e.scrollTo||this._options.scrollTo,void 0===e.disableInteraction&&(e.disableInteraction=this._options.disableInteraction),null!==e.element&&n.push(e)}.bind(this));else{var o;if(e.length<1)return!1;B(e,function(t){if((!i||t.getAttribute("data-intro-group")===i)&&"none"!==t.style.display){var e=parseInt(t.getAttribute("data-step"),10);o=void 0!==t.getAttribute("data-disable-interaction")?!!t.getAttribute("data-disable-interaction"):this._options.disableInteraction,0<e&&(n[e-1]={element:t,intro:t.getAttribute("data-intro"),step:parseInt(t.getAttribute("data-step"),10),tooltipClass:t.getAttribute("data-tooltipclass"),highlightClass:t.getAttribute("data-highlightclass"),position:t.getAttribute("data-position")||this._options.tooltipPosition,scrollTo:t.getAttribute("data-scrollto")||this._options.scrollTo,disableInteraction:o})}}.bind(this));var s=0;B(e,function(t){if((!i||t.getAttribute("data-intro-group")===i)&&null===t.getAttribute("data-step")){for(;void 0!==n[s];)s++;o=void 0!==t.getAttribute("data-disable-interaction")?!!t.getAttribute("data-disable-interaction"):this._options.disableInteraction,n[s]={element:t,intro:t.getAttribute("data-intro"),step:s+1,tooltipClass:t.getAttribute("data-tooltipclass"),highlightClass:t.getAttribute("data-highlightclass"),position:t.getAttribute("data-position")||this._options.tooltipPosition,scrollTo:t.getAttribute("data-scrollto")||this._options.scrollTo,disableInteraction:o}}}.bind(this))}for(var l=[],r=0;r<n.length;r++)n[r]&&l.push(n[r]);return(n=l).sort(function(t,e){return t.step-e.step}),this._introItems=n,function(t){var e=document.createElement("div"),i="",n=this;if(e.className="introjs-overlay",t.tagName&&"body"!==t.tagName.toLowerCase()){var o=k(t);o&&(i+="width: "+o.width+"px; height:"+o.height+"px; top:"+o.top+"px;left: "+o.left+"px;",e.style.cssText=i)}else i+="top: 0;bottom: 0; left: 0;right: 0;position: fixed;",e.style.cssText=i;return t.appendChild(e),e.onclick=function(){!0===n._options.exitOnOverlayClick&&A.call(n,t)},window.setTimeout(function(){i+="opacity: "+n._options.overlayOpacity.toString()+";",e.style.cssText=i},10),!0}.call(this,t)&&(E.call(this),this._options.keyboardNavigation&&u.on(window,"keydown",c,this,!0),u.on(window,"resize",a,this,!0)),!1}function a(){this.refresh.call(this)}function c(t){var e=null===t.code?t.which:t.code;if(null===e&&(e=null===t.charCode?t.keyCode:t.charCode),"Escape"!==e&&27!==e||!0!==this._options.exitOnEsc){if("ArrowLeft"===e||37===e)N.call(this);else if("ArrowRight"===e||39===e)E.call(this);else if("Enter"===e||13===e){var i=t.target||t.srcElement;i&&i.className.match("introjs-prevbutton")?N.call(this):i&&i.className.match("introjs-skipbutton")?(this._introItems.length-1===this._currentStep&&"function"==typeof this._introCompleteCallback&&this._introCompleteCallback.call(this),A.call(this,this._targetElement)):i&&i.getAttribute("data-stepnumber")?i.click():E.call(this),t.preventDefault?t.preventDefault():t.returnValue=!1}}else A.call(this,this._targetElement)}function h(t){if(null===t||"object"!=typeof t||void 0!==t.nodeType)return t;var e={};for(var i in t)void 0!==window.jQuery&&t[i]instanceof window.jQuery?e[i]=t[i]:e[i]=h(t[i]);return e}function E(){this._direction="forward",void 0!==this._currentStepNumber&&B(this._introItems,function(t,e){t.step===this._currentStepNumber&&(this._currentStep=e-1,this._currentStepNumber=void 0)}.bind(this)),void 0===this._currentStep?this._currentStep=0:++this._currentStep;var t=this._introItems[this._currentStep],e=!0;return void 0!==this._introBeforeChangeCallback&&(e=this._introBeforeChangeCallback.call(this,t.element)),!1===e?(--this._currentStep,!1):this._introItems.length<=this._currentStep?("function"==typeof this._introCompleteCallback&&this._introCompleteCallback.call(this),void A.call(this,this._targetElement)):void i.call(this,t)}function N(){if(this._direction="backward",0===this._currentStep)return!1;--this._currentStep;var t=this._introItems[this._currentStep],e=!0;if(void 0!==this._introBeforeChangeCallback&&(e=this._introBeforeChangeCallback.call(this,t.element)),!1===e)return++this._currentStep,!1;i.call(this,t)}function A(t,e){var i=!0;if(void 0!==this._introBeforeExitCallback&&(i=this._introBeforeExitCallback.call(this)),e||!1!==i){var n=t.querySelectorAll(".introjs-overlay");n&&n.length&&B(n,function(t){t.style.opacity=0,window.setTimeout(function(){this.parentNode&&this.parentNode.removeChild(this)}.bind(t),500)}.bind(this));var o=t.querySelector(".introjs-helperLayer");o&&o.parentNode.removeChild(o);var s=t.querySelector(".introjs-tooltipReferenceLayer");s&&s.parentNode.removeChild(s);var l=t.querySelector(".introjs-disableInteraction");l&&l.parentNode.removeChild(l);var r=document.querySelector(".introjsFloatingElement");r&&r.parentNode.removeChild(r),q(),B(document.querySelectorAll(".introjs-fixParent"),function(t){O(t,/introjs-fixParent/g)}),u.off(window,"keydown",c,this,!0),u.off(window,"resize",a,this,!0),void 0!==this._introExitCallback&&this._introExitCallback.call(this),this._currentStep=void 0}}function L(t,e,i,n,o){var s,l,r,a,c,h="";if(o=o||!1,e.style.top=null,e.style.right=null,e.style.bottom=null,e.style.left=null,e.style.marginLeft=null,e.style.marginTop=null,i.style.display="inherit",null!=n&&(n.style.top=null,n.style.left=null),this._introItems[this._currentStep])switch(h="string"==typeof(s=this._introItems[this._currentStep]).tooltipClass?s.tooltipClass:this._options.tooltipClass,e.className=("introjs-tooltip "+h).replace(/^\s+|\s+$/g,""),e.setAttribute("role","dialog"),"floating"!==(c=this._introItems[this._currentStep].position)&&(c=function(t,e,i){var n=this._options.positionPrecedence.slice(),o=b(),s=k(e).height+10,l=k(e).width+20,r=t.getBoundingClientRect(),a="floating";r.bottom+s+s>o.height&&m(n,"bottom");r.top-s<0&&m(n,"top");r.right+l>o.width&&m(n,"right");r.left-l<0&&m(n,"left");var c=(h=i||"",u=h.indexOf("-"),-1!==u?h.substr(u):"");var h,u;i&&(i=i.split("-")[0]);n.length&&(a="auto"!==i&&-1<n.indexOf(i)?i:n[0]);-1!==["top","bottom"].indexOf(a)&&(a+=function(t,e,i,n){var o=e/2,s=Math.min(i.width,window.screen.width),l=["-left-aligned","-middle-aligned","-right-aligned"],r="";s-t<e&&m(l,"-left-aligned");(t<o||s-t<o)&&m(l,"-middle-aligned");t<e&&m(l,"-right-aligned");r=l.length?-1!==l.indexOf(n)?n:l[0]:"-middle-aligned";return r}(r.left,l,o,c));return a}.call(this,t,e,c)),r=k(t),l=k(e),a=b(),H(e,"introjs-"+c),c){case"top-right-aligned":i.className="introjs-arrow bottom-right";var u=0;f(r,u,l,e),e.style.bottom=r.height+20+"px";break;case"top-middle-aligned":i.className="introjs-arrow bottom-middle";var d=r.width/2-l.width/2;o&&(d+=5),f(r,d,l,e)&&(e.style.right=null,p(r,d,l,a,e)),e.style.bottom=r.height+20+"px";break;case"top-left-aligned":case"top":i.className="introjs-arrow bottom",p(r,o?0:15,l,a,e),e.style.bottom=r.height+20+"px";break;case"right":e.style.left=r.width+20+"px",r.top+l.height>a.height?(i.className="introjs-arrow left-bottom",e.style.top="-"+(l.height-r.height-20)+"px"):i.className="introjs-arrow left";break;case"left":o||!0!==this._options.showStepNumbers||(e.style.top="15px"),r.top+l.height>a.height?(e.style.top="-"+(l.height-r.height-20)+"px",i.className="introjs-arrow right-bottom"):i.className="introjs-arrow right",e.style.right=r.width+20+"px";break;case"floating":i.style.display="none",e.style.left="50%",e.style.top="50%",e.style.marginLeft="-"+l.width/2+"px",e.style.marginTop="-"+l.height/2+"px",null!=n&&(n.style.left="-"+(l.width/2+18)+"px",n.style.top="-"+(l.height/2+18)+"px");break;case"bottom-right-aligned":i.className="introjs-arrow top-right",f(r,u=0,l,e),e.style.top=r.height+20+"px";break;case"bottom-middle-aligned":i.className="introjs-arrow top-middle",d=r.width/2-l.width/2,o&&(d+=5),f(r,d,l,e)&&(e.style.right=null,p(r,d,l,a,e)),e.style.top=r.height+20+"px";break;default:i.className="introjs-arrow top",p(r,0,l,a,e),e.style.top=r.height+20+"px"}}function p(t,e,i,n,o){return t.left+e+i.width>n.width?(o.style.left=n.width-i.width-t.left+"px",!1):(o.style.left=e+"px",!0)}function f(t,e,i,n){return t.left+t.width-e-i.width<0?(n.style.left=-t.left+"px",!1):(n.style.right=e+"px",!0)}function m(t,e){-1<t.indexOf(e)&&t.splice(t.indexOf(e),1)}function T(t){if(t){if(!this._introItems[this._currentStep])return;var e=this._introItems[this._currentStep],i=k(e.element),n=this._options.helperElementPadding;d(e.element)?H(t,"introjs-fixedTooltip"):O(t,"introjs-fixedTooltip"),"floating"===e.position&&(n=0),t.style.cssText="width: "+(i.width+n)+"px; height:"+(i.height+n)+"px; top:"+(i.top-n/2)+"px;left: "+(i.left-n/2)+"px;"}}function I(t){t.setAttribute("role","button"),t.tabIndex=0}function i(o){void 0!==this._introChangeCallback&&this._introChangeCallback.call(this,o.element);var t,e,i,n,s=this,l=document.querySelector(".introjs-helperLayer"),r=document.querySelector(".introjs-tooltipReferenceLayer"),a="introjs-helperLayer";if("string"==typeof o.highlightClass&&(a+=" "+o.highlightClass),"string"==typeof this._options.highlightClass&&(a+=" "+this._options.highlightClass),null!==l){var c=r.querySelector(".introjs-helperNumberLayer"),h=r.querySelector(".introjs-tooltiptext"),u=r.querySelector(".introjs-arrow"),d=r.querySelector(".introjs-tooltip");if(i=r.querySelector(".introjs-skipbutton"),e=r.querySelector(".introjs-prevbutton"),t=r.querySelector(".introjs-nextbutton"),l.className=a,d.style.opacity=0,d.style.display="none",null!==c){var p=this._introItems[0<=o.step-2?o.step-2:0];(null!==p&&"forward"===this._direction&&"floating"===p.position||"backward"===this._direction&&"floating"===o.position)&&(c.style.opacity=0)}(n=R(o.element))!==document.body&&V(n,o.element),T.call(s,l),T.call(s,r),B(document.querySelectorAll(".introjs-fixParent"),function(t){O(t,/introjs-fixParent/g)}),q(),s._lastShowElementTimer&&window.clearTimeout(s._lastShowElementTimer),s._lastShowElementTimer=window.setTimeout(function(){null!==c&&(c.innerHTML=o.step),h.innerHTML=o.intro,d.style.display="block",L.call(s,o.element,d,u,c),s._options.showBullets&&(r.querySelector(".introjs-bullets li > a.active").className="",r.querySelector('.introjs-bullets li > a[data-stepnumber="'+o.step+'"]').className="active"),r.querySelector(".introjs-progress .introjs-progressbar").style.cssText="width:"+z.call(s)+"%;",r.querySelector(".introjs-progress .introjs-progressbar").setAttribute("aria-valuenow",z.call(s)),d.style.opacity=1,c&&(c.style.opacity=1),null!=i&&/introjs-donebutton/gi.test(i.className)?i.focus():null!=t&&t.focus(),P.call(s,o.scrollTo,o,h)},350)}else{var f=document.createElement("div"),m=document.createElement("div"),b=document.createElement("div"),g=document.createElement("div"),y=document.createElement("div"),v=document.createElement("div"),_=document.createElement("div"),w=document.createElement("div");f.className=a,m.className="introjs-tooltipReferenceLayer",(n=R(o.element))!==document.body&&V(n,o.element),T.call(s,f),T.call(s,m),this._targetElement.appendChild(f),this._targetElement.appendChild(m),b.className="introjs-arrow",y.className="introjs-tooltiptext",y.innerHTML=o.intro,!(v.className="introjs-bullets")===this._options.showBullets&&(v.style.display="none");var C=document.createElement("ul");C.setAttribute("role","tablist");var j=function(){s.goToStep(this.getAttribute("data-stepnumber"))};B(this._introItems,function(t,e){var i=document.createElement("li"),n=document.createElement("a");i.setAttribute("role","presentation"),n.setAttribute("role","tab"),n.onclick=j,e===o.step-1&&(n.className="active"),I(n),n.innerHTML="&nbsp;",n.setAttribute("data-stepnumber",t.step),i.appendChild(n),C.appendChild(i)}),v.appendChild(C),!(_.className="introjs-progress")===this._options.showProgress&&(_.style.display="none");var k=document.createElement("div");k.className="introjs-progressbar",k.setAttribute("role","progress"),k.setAttribute("aria-valuemin",0),k.setAttribute("aria-valuemax",100),k.setAttribute("aria-valuenow",z.call(this)),k.style.cssText="width:"+z.call(this)+"%;",_.appendChild(k),!(w.className="introjs-tooltipbuttons")===this._options.showButtons&&(w.style.display="none"),g.className="introjs-tooltip",g.appendChild(y),g.appendChild(v),g.appendChild(_);var x=document.createElement("span");!0===this._options.showStepNumbers&&(x.className="introjs-helperNumberLayer",x.innerHTML=o.step,m.appendChild(x)),g.appendChild(b),m.appendChild(g),(t=document.createElement("a")).onclick=function(){s._introItems.length-1!==s._currentStep&&E.call(s)},I(t),t.innerHTML=this._options.nextLabel,(e=document.createElement("a")).onclick=function(){0!==s._currentStep&&N.call(s)},I(e),e.innerHTML=this._options.prevLabel,(i=document.createElement("a")).className=this._options.buttonClass+" introjs-skipbutton ",I(i),i.innerHTML=this._options.skipLabel,i.onclick=function(){s._introItems.length-1===s._currentStep&&"function"==typeof s._introCompleteCallback&&s._introCompleteCallback.call(s),s._introItems.length-1!==s._currentStep&&"function"==typeof s._introExitCallback&&s._introExitCallback.call(s),"function"==typeof s._introSkipCallback&&s._introSkipCallback.call(s),A.call(s,s._targetElement)},w.appendChild(i),1<this._introItems.length&&(w.appendChild(e),w.appendChild(t)),g.appendChild(w),L.call(s,o.element,g,b,x),P.call(this,o.scrollTo,o,g)}var S=s._targetElement.querySelector(".introjs-disableInteraction");S&&S.parentNode.removeChild(S),o.disableInteraction&&function(){var t=document.querySelector(".introjs-disableInteraction");null===t&&((t=document.createElement("div")).className="introjs-disableInteraction",this._targetElement.appendChild(t)),T.call(this,t)}.call(s),0===this._currentStep&&1<this._introItems.length?(null!=i&&(i.className=this._options.buttonClass+" introjs-skipbutton"),null!=t&&(t.className=this._options.buttonClass+" introjs-nextbutton"),!0===this._options.hidePrev?(null!=e&&(e.className=this._options.buttonClass+" introjs-prevbutton introjs-hidden"),null!=t&&H(t,"introjs-fullbutton")):null!=e&&(e.className=this._options.buttonClass+" introjs-prevbutton introjs-disabled"),null!=i&&(i.innerHTML=this._options.skipLabel)):this._introItems.length-1===this._currentStep||1===this._introItems.length?(null!=i&&(i.innerHTML=this._options.doneLabel,H(i,"introjs-donebutton")),null!=e&&(e.className=this._options.buttonClass+" introjs-prevbutton"),!0===this._options.hideNext?(null!=t&&(t.className=this._options.buttonClass+" introjs-nextbutton introjs-hidden"),null!=e&&H(e,"introjs-fullbutton")):null!=t&&(t.className=this._options.buttonClass+" introjs-nextbutton introjs-disabled")):(null!=i&&(i.className=this._options.buttonClass+" introjs-skipbutton"),null!=e&&(e.className=this._options.buttonClass+" introjs-prevbutton"),null!=t&&(t.className=this._options.buttonClass+" introjs-nextbutton"),null!=i&&(i.innerHTML=this._options.skipLabel)),e.setAttribute("role","button"),t.setAttribute("role","button"),i.setAttribute("role","button"),null!=t&&t.focus(),function(t){var e;if(t.element instanceof SVGElement)for(e=t.element.parentNode;null!==t.element.parentNode&&e.tagName&&"body"!==e.tagName.toLowerCase();)"svg"===e.tagName.toLowerCase()&&H(e,"introjs-showElement introjs-relativePosition"),e=e.parentNode;H(t.element,"introjs-showElement");var i=M(t.element,"position");"absolute"!==i&&"relative"!==i&&"fixed"!==i&&H(t.element,"introjs-relativePosition");e=t.element.parentNode;for(;null!==e&&e.tagName&&"body"!==e.tagName.toLowerCase();){var n=M(e,"z-index"),o=parseFloat(M(e,"opacity")),s=M(e,"transform")||M(e,"-webkit-transform")||M(e,"-moz-transform")||M(e,"-ms-transform")||M(e,"-o-transform");(/[0-9]+/.test(n)||o<1||"none"!==s&&void 0!==s)&&H(e,"introjs-fixParent"),e=e.parentNode}}(o),void 0!==this._introAfterChangeCallback&&this._introAfterChangeCallback.call(this,o.element)}function P(t,e,i){var n,o,s;if("off"!==t&&(this._options.scrollToElement&&(n="tooltip"===t?i.getBoundingClientRect():e.element.getBoundingClientRect(),o=e.element,!(0<=(s=o.getBoundingClientRect()).top&&0<=s.left&&s.bottom+80<=window.innerHeight&&s.right<=window.innerWidth)))){var l=b().height;n.bottom-(n.bottom-n.top)<0||e.element.clientHeight>l?window.scrollBy(0,n.top-(l/2-n.height/2)-this._options.scrollPadding):window.scrollBy(0,n.top-(l/2-n.height/2)+this._options.scrollPadding)}}function q(){B(document.querySelectorAll(".introjs-showElement"),function(t){O(t,/introjs-[a-zA-Z]+/g)})}function B(t,e,i){if(t)for(var n=0,o=t.length;n<o;n++)e(t[n],n);"function"==typeof i&&i()}var o,s=(o={},function(t,e){return o[e=e||"introjs-stamp"]=o[e]||0,void 0===t[e]&&(t[e]=o[e]++),t[e]}),u=new function(){var r="introjs_event";this._id=function(t,e,i,n){return e+s(i)+(n?"_"+s(n):"")},this.on=function(e,t,i,n,o){var s=this._id.apply(this,arguments),l=function(t){return i.call(n||e,t||window.event)};"addEventListener"in e?e.addEventListener(t,l,o):"attachEvent"in e&&e.attachEvent("on"+t,l),e[r]=e[r]||{},e[r][s]=l},this.off=function(t,e,i,n,o){var s=this._id.apply(this,arguments),l=t[r]&&t[r][s];l&&("removeEventListener"in t?t.removeEventListener(e,l,o):"detachEvent"in t&&t.detachEvent("on"+e,l),t[r][s]=null)}};function H(e,t){if(e instanceof SVGElement){var i=e.getAttribute("class")||"";e.setAttribute("class",i+" "+t)}else{if(void 0!==e.classList)B(t.split(" "),function(t){e.classList.add(t)});else e.className.match(t)||(e.className+=" "+t)}}function O(t,e){if(t instanceof SVGElement){var i=t.getAttribute("class")||"";t.setAttribute("class",i.replace(e,"").replace(/^\s+|\s+$/g,""))}else t.className=t.className.replace(e,"").replace(/^\s+|\s+$/g,"")}function M(t,e){var i="";return t.currentStyle?i=t.currentStyle[e]:document.defaultView&&document.defaultView.getComputedStyle&&(i=document.defaultView.getComputedStyle(t,null).getPropertyValue(e)),i&&i.toLowerCase?i.toLowerCase():i}function d(t){var e=t.parentNode;return!(!e||"HTML"===e.nodeName)&&("fixed"===M(t,"position")||d(e))}function b(){if(void 0!==window.innerWidth)return{width:window.innerWidth,height:window.innerHeight};var t=document.documentElement;return{width:t.clientWidth,height:t.clientHeight}}function g(){var t=document.querySelector(".introjs-hintReference");if(t){var e=t.getAttribute("data-step");return t.parentNode.removeChild(t),e}}function l(t){if(this._introItems=[],this._options.hints)B(this._options.hints,function(t){var e=h(t);"string"==typeof e.element&&(e.element=document.querySelector(e.element)),e.hintPosition=e.hintPosition||this._options.hintPosition,e.hintAnimation=e.hintAnimation||this._options.hintAnimation,null!==e.element&&this._introItems.push(e)}.bind(this));else{var e=t.querySelectorAll("*[data-hint]");if(!e||!e.length)return!1;B(e,function(t){var e=t.getAttribute("data-hintanimation");e=e?"true"===e:this._options.hintAnimation,this._introItems.push({element:t,hint:t.getAttribute("data-hint"),hintPosition:t.getAttribute("data-hintposition")||this._options.hintPosition,hintAnimation:e,tooltipClass:t.getAttribute("data-tooltipclass"),position:t.getAttribute("data-position")||this._options.tooltipPosition})}.bind(this))}(function(){var l=this,r=document.querySelector(".introjs-hints");null===r&&((r=document.createElement("div")).className="introjs-hints");B(this._introItems,function(t,e){if(!document.querySelector('.introjs-hint[data-step="'+e+'"]')){var i,n=document.createElement("a");I(n),n.onclick=(i=e,function(t){var e=t||window.event;e.stopPropagation&&e.stopPropagation(),null!==e.cancelBubble&&(e.cancelBubble=!0),j.call(l,i)}),n.className="introjs-hint",t.hintAnimation||H(n,"introjs-hint-no-anim"),d(t.element)&&H(n,"introjs-fixedhint");var o=document.createElement("div");o.className="introjs-hint-dot";var s=document.createElement("div");s.className="introjs-hint-pulse",n.appendChild(o),n.appendChild(s),n.setAttribute("data-step",e),t.targetElement=t.element,t.element=n,C.call(this,t.hintPosition,n,t.targetElement),r.appendChild(n)}}.bind(this)),document.body.appendChild(r),void 0!==this._hintsAddedCallback&&this._hintsAddedCallback.call(this)}).call(this),u.on(document,"click",g,this,!1),u.on(window,"resize",r,this,!0)}function r(){B(this._introItems,function(t){void 0!==t.targetElement&&C.call(this,t.hintPosition,t.element,t.targetElement)}.bind(this))}function y(t){var e=document.querySelector(".introjs-hints");return e?e.querySelectorAll(t):[]}function v(t){var e=y('.introjs-hint[data-step="'+t+'"]')[0];g.call(this),e&&H(e,"introjs-hidehint"),void 0!==this._hintCloseCallback&&this._hintCloseCallback.call(this,t)}function _(t){var e=y('.introjs-hint[data-step="'+t+'"]')[0];e&&O(e,/introjs-hidehint/g)}function w(t){var e=y('.introjs-hint[data-step="'+t+'"]')[0];e&&e.parentNode.removeChild(e)}function C(t,e,i){var n=k.call(this,i);switch(t){default:case"top-left":e.style.left=n.left+"px",e.style.top=n.top+"px";break;case"top-right":e.style.left=n.left+n.width-20+"px",e.style.top=n.top+"px";break;case"bottom-left":e.style.left=n.left+"px",e.style.top=n.top+n.height-20+"px";break;case"bottom-right":e.style.left=n.left+n.width-20+"px",e.style.top=n.top+n.height-20+"px";break;case"middle-left":e.style.left=n.left+"px",e.style.top=n.top+(n.height-20)/2+"px";break;case"middle-right":e.style.left=n.left+n.width-20+"px",e.style.top=n.top+(n.height-20)/2+"px";break;case"middle-middle":e.style.left=n.left+(n.width-20)/2+"px",e.style.top=n.top+(n.height-20)/2+"px";break;case"bottom-middle":e.style.left=n.left+(n.width-20)/2+"px",e.style.top=n.top+n.height-20+"px";break;case"top-middle":e.style.left=n.left+(n.width-20)/2+"px",e.style.top=n.top+"px"}}function j(t){var e=document.querySelector('.introjs-hint[data-step="'+t+'"]'),i=this._introItems[t];void 0!==this._hintClickCallback&&this._hintClickCallback.call(this,e,i,t);var n=g.call(this);if(parseInt(n,10)!==t){var o=document.createElement("div"),s=document.createElement("div"),l=document.createElement("div"),r=document.createElement("div");o.className="introjs-tooltip",o.onclick=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0},s.className="introjs-tooltiptext";var a=document.createElement("p");a.innerHTML=i.hint;var c=document.createElement("a");c.className=this._options.buttonClass,c.setAttribute("role","button"),c.innerHTML=this._options.hintButtonLabel,c.onclick=v.bind(this,t),s.appendChild(a),s.appendChild(c),l.className="introjs-arrow",o.appendChild(l),o.appendChild(s),this._currentStep=e.getAttribute("data-step"),r.className="introjs-tooltipReferenceLayer introjs-hintReference",r.setAttribute("data-step",e.getAttribute("data-step")),T.call(this,r),r.appendChild(o),document.body.appendChild(r),L.call(this,e,o,l,null,!0)}}function k(t){var e=document.body,i=document.documentElement,n=window.pageYOffset||i.scrollTop||e.scrollTop,o=window.pageXOffset||i.scrollLeft||e.scrollLeft,s=t.getBoundingClientRect();return{top:s.top+n,width:s.width,height:s.height,left:s.left+o}}function R(t){var e=window.getComputedStyle(t),i="absolute"===e.position,n=/(auto|scroll)/;if("fixed"===e.position)return document.body;for(var o=t;o=o.parentElement;)if(e=window.getComputedStyle(o),(!i||"static"!==e.position)&&n.test(e.overflow+e.overflowY+e.overflowX))return o;return document.body}function V(t,e){t.scrollTop=e.offsetTop-t.offsetTop}function z(){return parseInt(this._currentStep+1,10)/this._introItems.length*100}var x=function(t){var e;if("object"==typeof t)e=new n(t);else if("string"==typeof t){var i=document.querySelector(t);if(!i)throw new Error("There is no element with given selector.");e=new n(i)}else e=new n(document.body);return x.instances[s(e,"introjs-instance")]=e};return x.version="2.9.3",x.instances={},x.fn=n.prototype={clone:function(){return new n(this)},setOption:function(t,e){return this._options[t]=e,this},setOptions:function(t){return this._options=function(t,e){var i,n={};for(i in t)n[i]=t[i];for(i in e)n[i]=e[i];return n}(this._options,t),this},start:function(t){return e.call(this,this._targetElement,t),this},goToStep:function(t){return function(t){this._currentStep=t-2,void 0!==this._introItems&&E.call(this)}.call(this,t),this},addStep:function(t){return this._options.steps||(this._options.steps=[]),this._options.steps.push(t),this},addSteps:function(t){if(t.length){for(var e=0;e<t.length;e++)this.addStep(t[e]);return this}},goToStepNumber:function(t){return function(t){this._currentStepNumber=t,void 0!==this._introItems&&E.call(this)}.call(this,t),this},nextStep:function(){return E.call(this),this},previousStep:function(){return N.call(this),this},exit:function(t){return A.call(this,this._targetElement,t),this},refresh:function(){return function(){if(T.call(this,document.querySelector(".introjs-helperLayer")),T.call(this,document.querySelector(".introjs-tooltipReferenceLayer")),T.call(this,document.querySelector(".introjs-disableInteraction")),void 0!==this._currentStep&&null!==this._currentStep){var t=document.querySelector(".introjs-helperNumberLayer"),e=document.querySelector(".introjs-arrow"),i=document.querySelector(".introjs-tooltip");L.call(this,this._introItems[this._currentStep].element,i,e,t)}return r.call(this),this}.call(this),this},onbeforechange:function(t){if("function"!=typeof t)throw new Error("Provided callback for onbeforechange was not a function");return this._introBeforeChangeCallback=t,this},onchange:function(t){if("function"!=typeof t)throw new Error("Provided callback for onchange was not a function.");return this._introChangeCallback=t,this},onafterchange:function(t){if("function"!=typeof t)throw new Error("Provided callback for onafterchange was not a function");return this._introAfterChangeCallback=t,this},oncomplete:function(t){if("function"!=typeof t)throw new Error("Provided callback for oncomplete was not a function.");return this._introCompleteCallback=t,this},onhintsadded:function(t){if("function"!=typeof t)throw new Error("Provided callback for onhintsadded was not a function.");return this._hintsAddedCallback=t,this},onhintclick:function(t){if("function"!=typeof t)throw new Error("Provided callback for onhintclick was not a function.");return this._hintClickCallback=t,this},onhintclose:function(t){if("function"!=typeof t)throw new Error("Provided callback for onhintclose was not a function.");return this._hintCloseCallback=t,this},onexit:function(t){if("function"!=typeof t)throw new Error("Provided callback for onexit was not a function.");return this._introExitCallback=t,this},onskip:function(t){if("function"!=typeof t)throw new Error("Provided callback for onskip was not a function.");return this._introSkipCallback=t,this},onbeforeexit:function(t){if("function"!=typeof t)throw new Error("Provided callback for onbeforeexit was not a function.");return this._introBeforeExitCallback=t,this},addHints:function(){return l.call(this,this._targetElement),this},hideHint:function(t){return v.call(this,t),this},hideHints:function(){return function(){B(y(".introjs-hint"),function(t){v.call(this,t.getAttribute("data-step"))}.bind(this))}.call(this),this},showHint:function(t){return _.call(this,t),this},showHints:function(){return function(){var t=y(".introjs-hint");t&&t.length?B(t,function(t){_.call(this,t.getAttribute("data-step"))}.bind(this)):l.call(this,this._targetElement)}.call(this),this},removeHints:function(){return function(){B(y(".introjs-hint"),function(t){w.call(this,t.getAttribute("data-step"))}.bind(this))}.call(this),this},removeHint:function(t){return w.call(this,t),this},showHintDialog:function(t){return j.call(this,t),this}},x});
;
/**
 * Create instance and init() with feature_name and callbackReady to check introduction availability.
 * The callbackReady is called if introJs() is available for specified feature.
 * Availability check is done through Ajax request.
 *
 * There can be only one instance of introJs(), so if two separate features check for availability and both are
 * available, only one will be permitted. The second one will get permission on the next request/reload.
 *
 * Each feature manually adds it's steps and start introJs().
 * Status registration is done automatically.
 *
 * @param featureName
 * @constructor
 */
function Introduction(featureName, callbackReady) {
  this.featureName = featureName;
  this.currentStep = 0;
  this.callbackReady = callbackReady;
  this.init();
}

var IntroductionStatus = {
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  SKIPPED: 'skipped'
}

Introduction.prototype = {
  init: function () {
    var me = this;
    jQuery.ajax({
      type: "GET",
      url: '/feature/introduction/show/' + me.featureName,
      cache: false
    })
      .done(function (response, status) {
        if (response && status == 'success') {
          if (response.show) {
            if (typeof Introduction.prototype.introJS === 'undefined') {
              Introduction.prototype.introJS = introJs();
              me.setOptions({
                'exitOnEsc': false,
                'exitOnOverlayClick': false,
                'scrollToElement': true
              });
              me.callbackReady(me);
              createIntroJSStatus();
              handleIntroJSEvents();
            }
          }
        }
      })
      .fail(function (response) {
        console.warn(response);
      });

    function handleIntroJSEvents() {
      me.introJS.onbeforeexit(function () {
        if (me.introJS._currentStep === me.introJS._options.steps.length - 1) {
          updateIntroJSStatus(IntroductionStatus.COMPLETED);
        } else {
          updateIntroJSStatus(IntroductionStatus.SKIPPED);
        }
      });
      me.introJS.onchange(function (targetElement) {
        if (me.currentStep < me.introJS._currentStep) {
          me.currentStep = me.introJS._currentStep;
        }
      });
      me.introJS.onafterchange(function (targetElement) {
        if (this._currentStep == this._introItems.length - 1) {
          jQuery('.introjs-donebutton').addClass('introjs-donebutton-last');
          jQuery('.introjs-prevbutton').addClass('introjs-prevbutton-last');
        } else {
          jQuery('.introjs-donebutton').removeClass('introjs-donebutton-last');
          jQuery('.introjs-prevbutton').removeClass('introjs-prevbutton-last');
        }
      });
    }

    function createIntroJSStatus() {
      me.setIntroJSStatus({
        'feature': me.featureName,
        'create': true
      });
    }

    function updateIntroJSStatus(status) {
      me.setIntroJSStatus({
        'feature': me.featureName,
        'status': status,
        'step_id': me.currentStep
      });
    }
  },
  setOptions: function (options) {
    this.introJS.setOptions(options);
    return this;
  },
  addWelcome: function (data) {
    this.welcomeData = data;
    return this;
  },
  addSteps: function (steps) {
    this.introJS.addSteps(steps);
    return this;
  },
  skip: function (step_id) {
    var me = this;
    return me.setIntroJSStatus({
      'feature': me.featureName,
      'status': IntroductionStatus.SKIPPED,
      'step_id': step_id
    });
  },
  start: function (notifyStarted) {
    var me = this;
    me.notifyStarted = notifyStarted;
    if (typeof me.welcomeData !== 'undefined') {
      var introWelcome = new IntroductionWelcome(me.welcomeData.title, me.welcomeData.body, welcomeContinue, welcomeSkip, me.welcomeData.options);
      introWelcome.show();
    } else {
      _startIntro();
    }

    function welcomeContinue() {
      _startIntro();
    }

    function welcomeSkip() {
      me.skip(0);
    }

    function _startIntro() {
      me.introJS.start();
      if (typeof me.notifyStarted !== 'undefined') {
        me.notifyStarted();
      }
    }

  },

  setIntroJSStatus: function (data) {
    jQuery.ajax({
      type: 'POST',
      url: '/feature/introduction/status/',
      data: data,
      tryCount: 0,
      retryLimit: 3
    }).fail(Introduction.prototype.setStatusFail)
  },

  setStatusFail: function (response) {
    if (this.tryCount < this.retryLimit) {
      var ajax_request = this;
      var retry_in = Math.exp(this.tryCount++) * 1000;
      setTimeout(function () {
        jQuery.ajax(ajax_request)
          .fail(Introduction.prototype.setStatusFail);
      }, retry_in);
    }
  },

  _introJS: function () {
    return this.introJS;
  }
}
;
function IntroductionWelcome(title, body, startHandler, skipHandler, options) {
  this.title = title;
  this.body = body;
  this.startCallback = startHandler;
  this.skipCallback = skipHandler;
  this.options = options;
  this.modalId = 'intro-welcome-modal';
  this.init();
}

IntroductionWelcome.prototype = {
  init: function () {
    var me = this;
    var placeholder = jQuery("<div id='intro-modal-placeholder'>");
    placeholder.appendTo('body');
    placeholder.html(createContent());

    jQuery('#btn-start-intro').click(function (e) {
      me.hide();
      me.startCallback();
    });

    jQuery('#btn-skip-intro').click(function (e) {
      me.skipCallback();
    });

    function createContent() {
      var skipLabel = Drupal.t('Skip');
      var startLabel = Drupal.t('Take the Tour');
      if (typeof me.options !== 'undefined') {
        skipLabel = me.options.hasOwnProperty('skipLabel') ? me.options.skipLabel : skipLabel;
        startLabel = me.options.hasOwnProperty('startLabel') ? me.options.startLabel : startLabel;
      }

      var content = '<div class="modal modal-em fade" id="' + me.modalId + '" tabindex="-1" role="dialog" aria-labelledby="intro-modal-label">\n' +
        '  <div class="modal-dialog" role="document" style="margin-left: auto; margin-right: auto; max-width: 340px; width: 98%;">\n' +
        '    <div class="modal-content">\n' +
        '      <div class="modal-header">\n' +
        '        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n' +
        '        <h4 class="modal-title" id="intro-modal-label">\n' +
        '          <i class="far fa-sparkles"></i>' +
                    me.title +
        '        </h4>\n' +
        '      </div>\n' +
        '      <div class="modal-body">\n' +
                me.body +
        '      </div>\n' +
        '      <div class="modal-footer">\n' +
        '        <button type="button" class="btn btn-default pull-left" data-dismiss="modal" id="btn-skip-intro">' + skipLabel + '</button>\n' +
        '        <button type="button" class="btn btn-primary" id="btn-start-intro">' + startLabel + '</button>\n' +
        '      </div>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</div>'
      return content;
    }
  },

  show: function () {
    jQuery("#" + this.modalId).modal('show');
  },

  hide: function () {
    jQuery("#" + this.modalId).modal('hide');
  }
};
;
(function ($) {
  $(document).ready(function () {
    $("a[data-target=#details-preview-container]").click(function (ev) {
      ev.preventDefault();
      var target = $(this).data('url');
      $("#details-preview-container").modal("show");

      var path = Drupal.absoluteUrl(target);
      // get body data
      $.get(path, function (data) {
      })
        .done(function (data) {
          $('#details-preview-container .modal-body').html(data);
          register_modal_actions();
        })
    });

    /** Actions registering for modal functionality support */
    function register_modal_actions() {
      // register sorting
      jQuery(".all-slides").sortable();
      // register save button handler
      save_new_order();
      // register required actions when modal is closed
      close_actions();
    }

    /** Save the new order implementation*/
    function save_new_order() {
      $('#detailsPreviewSaveBtn').on('click', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var prefix = "match_score_field_";
        var field_names = [];
        jQuery('span[id^=' + prefix + ']').each(function (e) {
          var id = this.id;
          field_names.push(id.substring(prefix.length));
        })

        var target = $(this).data('url');
        var path = Drupal.absoluteUrl(target);
        var $btn = $(this);
        $btn.button('loading');

        var data = {
          field_names: field_names
        };
        $.ajax({
          type: "POST",
          url: path,
          data: {'data': data},
          dataType: "json",
          success: function (response) {
            $btn.button('reset');
            if (response && response.status == "success") {
              $('#details-preview-container').modal("toggle");
              $('#details-preview-container .modal-body').html('');
              $('#detailPreviewBodyError').hide();
            } else if (response.error) {
              $btn.hide();
              $('#detailPreviewBodyError').html(response.error);
              $('#detailPreviewBodyError').show();
            }
          },
          error: function (response) {
            $('#detailPreviewBodyError').html('Sorry, something went wrong.');
          }
        });
        $('#detailsPreviewSaveBtn').off('click');
        return false;
      });
    }

    /** Close action logic */
    function close_actions() {
      $("#details-preview-container").one("hidden.bs.modal", function () {
        // delete modal body, so next loading will not show prev data
        $('#details-preview-container .modal-body').html('');
      });
    }
  });
})(jQuery);


;
(function ($) {

  //code starts
  $(document).ready(function () {
    // this is the id of the form
    $("a[data-target=#template-container-save]").click(function (ev) {
      ev.preventDefault();

      $("#template-container-save").modal("show");
      var target = $(this).data('url');
      var form_unique_id = $(this).data('form-unique-id');
      var message_template_type = $(this).data('message-template-type');
      $("#messageTemplateTitleRequired").hide();
      _register_save_template(target, form_unique_id, message_template_type);
    });

    function _register_save_template(target_url, form_unique_id, message_template_type) {
      $('#messageTemplateBtnSave').on('click', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        if ($.trim($('#messageTitle').val()) == '') {
          $("#messageTemplateTitleRequired").show();
          return false;
        } else {
          $("#messageTemplateTitleRequired").hide();
        }
        var $btn = $(this);
        $btn.button('loading');
        var msg_title = $('#messageTitle').val();
        var msg_share = $('#messageShared').prop('checked');
        var subject_id = window["get_after_build_message_subject_" + form_unique_id]();
        var body_id = window["get_after_build_message_body_" + form_unique_id]();

        // get subject value
        var msg_subject = _mc_get_message_subject_element(subject_id).val();
        // get body value
        var msg_body = _mc_get_message_body_element(body_id).getData();
        var data = {
          title: msg_title,
          subject: msg_subject,
          body: msg_body,
          shared: msg_share,
          type: message_template_type
        };
        $.ajax({
          type: "POST",
          url: target_url,
          data: {'data': data},
          dataType: "json",
          success: function (response) {
            $btn.button('reset');
            if (response && response.status == "success") {
              $("#messageTemplateTitleRequired").hide();
              $('#template-container-save .modal-body').hide();
              $("#messageTitle").val("");
              $('#template-container-save .save-confirm').show();
            } else if (response.error == "title") {
              $("#messageTemplateTitleRequired").show();
            }
          },
          error: function (response) {
            alert(response['status']);
          }
        });
        $('#messageTemplateBtnSave').off('click');
        return false;
      });

      $("#template-container-save").one("hidden.bs.modal", function () {
        $("#template-container-save .modal-body").show();
        $('#messageTemplateBtnSave').off('click');
        $("#template-container-save .save-confirm").hide();
      });

      $("#template-container-save").one("show.bs.modal", function () {
        $("#template-container-save .modal-body").show();
        $("#template-container-save .save-confirm").hide();
      });
    }

    $("a[data-target=#template-container]").click(function (ev) {
      ev.preventDefault();

      var target = $(this).data('url');
      var title = $(this).data('title');
      var form_unique_id = $(this).data('form-unique-id');
      var message_template_type = $(this).data('message-template-type');
      $('#template-container-label').html(title);
      $("#template-container").modal("show");
      _load_template_messages(target + "/" + message_template_type, form_unique_id);
    });

    function _load_template_messages(target_url, form_unique_id) {
      var path = Drupal.absoluteUrl(target_url);
      $('#template-container .modal-body').html('Loading message templates...');

      // load the url and show modal on success
      $.get(Drupal.absoluteUrl(path), function (data) {
      })
        .done(function (data) {
          $('#template-container .modal-body').html(data);
          Drupal.attachBehaviors();
          registerModalHandlers(form_unique_id);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
          if (console && console.log) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
          }
        })
      ;
    }

    function _mc_get_message_subject_element(subject_id) {
      var msg_element = $("#" + subject_id);
      if (msg_element.prop('nodeName').toLowerCase() !== 'input') {
        // we get here if drupal generated some weird id
        // in that case required input element is under div (with id=subject_id) and
        // starts with the actual subject_id
        $('#' + subject_id + ' input').each(function (e) {
          var id = this.id;
          // check if input element's id starts with provided subject_id
          if (id.toLowerCase().indexOf(subject_id.toLowerCase()) === 0) {
            msg_element = $(this);
          }
        });
      }
      return msg_element;
    }

    function _mc_get_message_body_element(body_id) {
      var ckeditorIds = Object.keys(CKEDITOR.instances);
      for (var i = 0; i < ckeditorIds.length; i++) {
        var onCkeditorId = ckeditorIds[i];
        // check for form's passed id and -value trailing part
        if (onCkeditorId && onCkeditorId.match('^' + body_id) && onCkeditorId.match('-value{1}')) {
          return CKEDITOR.instances[onCkeditorId];
        }
      }

    }

    function registerModalHandlers(form_unique_id) {
      $("a[data-target=#template-content-import]").click(function (ev) {
        ev.preventDefault();
        var data_type = $(this).data('type');
        var messages;
        if (data_type == 'self') {
          messages = templates_self;
        } else {
          messages = templates_shared;
        }
        if (messages) {
          var id = $(this).data('id');
          for (i = 0; i < messages.length; i++) {
            if (messages[i]['id'] == id) {
              var subject_id = window["get_after_build_message_subject_" + form_unique_id]();
              var body_id = window["get_after_build_message_body_" + form_unique_id]();
              // set subject value
              _mc_get_message_subject_element(subject_id).val(messages[i]['subject']);
              // set body value
              _mc_get_message_body_element(body_id).setData(messages[i]['body']);
              break;
            }
          }
        }
        $("#template-container").modal("toggle");
        return;
      });

      // delete message template handler on confirmation modal
      $("a[data-target=#template-delete-confirm]").click(function (ev) {
        ev.preventDefault();
        var target = $(this).data('url');
        var path = Drupal.absoluteUrl(target);
        var $btn = $(this);
        $btn.button('loading');
        $.ajax({
          type: "GET",
          url: path,
          success: function (response) {
            if (response['status'] && response['status'] == 'success') {
              $('#template-container .modal-body').html('');
              if (response['target_url']) {
                $btn.button('reset');
                _load_template_messages(response['target_url']);
              } else {
                $("#template-container").modal("toggle");
              }
            }
          },
          error: function () {
            alert(response['status']);
          }
        });
        return false;
      });

      // modal content changing while modal is open
      $("a[data-target=#template-change-content]").click(function (ev) {
        ev.preventDefault();

        var target = $(this).data('url');
        var path = Drupal.absoluteUrl(target);
        var $btn = $(this);
        $btn.button('loading');

        // load the url and show modal on success
        $.get(Drupal.absoluteUrl(path), function (data) {
        })
          .done(function (data) {
            $btn.button('reset');
            $('#template-container .modal-body').html(data);
            Drupal.attachBehaviors();
            registerModalHandlers();
          })
          .fail(function (jqXHR, textStatus, errorThrown) {
            if (console && console.log) {
              console.log(jqXHR);
              console.log(textStatus);
              console.log(errorThrown);
            }
          })
        ;
      });
    }
  });
})(jQuery);
;
(function ($) {
    $(document).ready(function () {
        $.each($(".milestone-in-quickcliq"), function (index, element) {
            change_milestone_file_section_visibility(element);
        });

        $(".milestone-in-quickcliq").click(function () {
            change_milestone_file_section_visibility($(this)[0]);
        });

        function change_milestone_file_section_visibility(milestone) {

            var is_milestone_completed = milestone.checked;
            var quickcliq_nid = milestone.attributes.quickcliq_nid.value;
            var milestone_nid = milestone.attributes.milestone_nid.value;

            var display_value = is_milestone_completed ? 'block' : 'none';
            $("div[name='file_section_" + milestone_nid + "_" + quickcliq_nid + "']").css('display', display_value);
        }

        $('input[type="file"]').change(function (ev) {
            mc_milestone_get_file_attachment_button(ev, $(this));
        });

        function mc_milestone_get_file_attachment_button(ev, file) {
            var suffix = file.closest("form").attr('id');
            if (ev.originalEvent.target.files[0].name.length > 0) {
                ev.preventDefault();
                var file_attached_and_milestone_completed = $('button[id="mark_incomplete_' + suffix + '"]').length == 1;
                if (file_attached_and_milestone_completed) {
                    mc_milestone_show_file_update_button(suffix);
                } else {
                    mc_milestone_show_upload_and_mark_complete_button(suffix);
                }
            }
        }

        function mc_milestone_show_file_update_button(suffix) {
            $("#file_update_btn_" + suffix).removeAttr('style');
        }

        function mc_milestone_show_upload_and_mark_complete_button(suffix) {
            var upload_and_complete_btn = $('button[name="upload_and_complete_' + suffix + '"]');

            if (upload_and_complete_btn.text() == Drupal.t('Mark as Complete')) {
                upload_and_complete_btn.text(Drupal.t("Attach & Mark as Complete"));
                upload_and_complete_btn[0].title ='';
            }
            if (upload_and_complete_btn.hasClass('disabled')) {
                upload_and_complete_btn.removeClass('disabled');
            }
            var style_attr = upload_and_complete_btn.attr('style');
            if (typeof style_attr !== typeof undefined && style_attr !== false) {
                upload_and_complete_btn.removeAttr('style');
            }
        }

        $('.mark_incomplete').click(function (ev) {
            if ($(this).data('toggle') == 'modal') {
                ev.preventDefault();
            }
        });

        $('#mark-incomplete-modal').on('show.bs.modal', function (event) {
            var btn = $(event.relatedTarget);

            var user_id = btn.data('user-id');
            var group_id = btn.data('group-id');
            var milestone_id = btn.data('milestone-id');
            var suffix = btn.data('suffix');

            $('#mark-incomplete-modal .modal-body').html(Drupal.t('<em>Are you sure you want to Mark Incomplete this Milestone and delete the attached file?<br><br></em>'));
            $('#mark-incomplete-modal .modal-body').append(
                '<div class="modal-footer">' +
                '<button type="submit" class="btn btn-danger btn-sm delete_file_and_mark_incomplete" name = "delete_file_and_mark_incomplete"' +
                                        'data-user-id = "' + user_id + '" ' +
                                        'data-group-id = "' + group_id + '" ' +
                                        'data-milestone-id = "' + milestone_id + '" ' +
                                        'data-suffix = "' + suffix + '">' + Drupal.t("Yes, delete the file and Mark Incomplete") + '</button>' +
                '<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>' +
                '</div>');

          $('button[name="delete_file_and_mark_incomplete"]').click(function (ev) {
            ev.preventDefault();
            var user_id = $(this).data('user-id');
            var group_id = $(this).data('group-id');
            var milestone_id = $(this).data('milestone-id');

            $.ajax({
              type: 'POST',
              url: Drupal.absoluteUrl('/milestone/delete-file-and-mark-incomplete'),
              data: JSON.stringify({
                user_id: user_id,
                group_id: group_id,
                milestone_id: milestone_id
              }),
              dataType: "json",
              contentType: "application/json; charset=utf-8"
            })
              .done(function (response) {
                location.reload(true);
              })
              .fail(function (response) {
                if ($("form").children("div.messages.error").length == 0) {
                  $("form").append('<div class="messages error">' + response.statusText + '</div>');
                }
              });
            $('#mark-incomplete-modal').modal('hide');
          });
        });
    });
})(jQuery);
;
function AnimatedValue() {
	var me = this;
	this.setVal = function(inData) {
		if(this.timeout) {
			clearTimeout(this.timeout);
		}
		for(var i = 0; i < inData.length; i++){
			var obj = inData[i];
			obj.newVal = obj.val;
			obj.old = parseFloat(obj.cmp.innerHTML.replace(/,/gi, ''));
			obj.old = isNaN(obj.old) ? 0 : obj.old;
			obj.old = Math.round(obj.old);
			obj.val = parseFloat(obj.val);
			obj.step = Math.round((obj.val - obj.old) / 10);
		}
		this.updateVal(inData);
	}
	this.updateVal = function(inData) {
		this.timeout = setTimeout(function() {
			var cnt = 0;
			for(var i = 0; i < inData.length; i++){
				var obj = inData[i];
				var nextVal = (obj.old += obj.step).toLocaleString('en-US', {maximumFractionDigits: 2});
				if (obj.dopCmp) {
					obj.dopCmp.innerHTML = nextVal
				}
				obj.cmp.innerHTML = nextVal;
				if ((obj.step > 0 && obj.old < obj.val) || (obj.step < 0 && obj.old > obj.val)) {
					cnt++;
				} else {
					var newVal = obj.newVal.toLocaleString('en-US', {maximumFractionDigits: 2})
					if (obj.dopCmp) {
						obj.dopCmp.innerHTML = newVal;
					}
					obj.cmp.innerHTML = newVal;
				}
			}
			if (cnt) {
				me.updateVal(inData);
			}
		}, 50);
	}
};
;
function Gantt(inData) {
	this.items = inData.items;
	this.id = inData.id || 'gi';
	this.plat = inData.plat;
	this.gradAnimation = inData.gradAnimation;
	this.maxLabelWidth = inData.maxLabelWidth || 200;
	this.createGoch();
	this.updateGoch();
}

Gantt.prototype = {
	createGoch: function() {
		this.plat.innerHTML = '<div style="position:relative;display:table;width:100%;"></div>'
		this.mainDiv = this.plat.firstChild;
	},

	setSizes: function(items) {
		var me = this;
		setTimeout( function() {
			for(var i = 0; i < items.length; i++) {
				var item = items[i];
				if (item.separator) {
					continue;
				}
				var cmp = me.mainDiv.childNodes[i].lastChild.firstChild;
				cmp.style.backgroundColor = item.color;
				cmp.style.width = me.gradAnimation ? item.animWidth : item.width;
				me.mainDiv.childNodes[i].lastChild.lastChild.style.opacity = 1;
			}

		}, 150);

		setTimeout( function() {
			for(var i = 0; i < items.length; i++) {
				var item = items[i];
				if (item.separator) {
					continue;
				}
				var cmp = me.mainDiv.childNodes[i].lastChild.firstChild;
				cmp.style.width = item.width;
			}
		}, 560);

	},

	createItem: function(item, ind) {
		this.mainDiv.innerHTML += '<div style="display:table-row;"><div style="display:table-cell;min-width:147px;' +
		'vertical-align:middle;text-align:end;text-align:right;padding:0px 16px 0px 0px;border-right:1px solid gray;">' +
		'</div><div <div style="display:table-cell;width:96%;padding:5px 0px;"></div></div>'
		var row = this.mainDiv.lastChild;
		if (item.separator) {
			row.style.height = item.height + 'px';
			return;
		}
		row.firstChild.innerHTML = item.text;
		row.lastChild.innerHTML = '<div style="float:left;width:1px;height:36px;' +
		'transition:width 0.4s ease-out;"></div><div style="float:left;font-size:17px;'+
		'font-weight:600;opacity:0;transition:opacity 0.4s ease-out 0.3s;padding:7px 10px"></div>';
		var valueSpan = row.lastChild.lastChild;
		valueSpan.innerHTML = '<span id="' + this.id + ind + '">'+ item.value + '</span>%';
	},

	updateGoch: function() {
		this.mainDiv.innerHTML = '';
		var items = this.items;
		if (!items.length) {
			return;
		}
		this.maxValue = 0;
		for(var i = 0; i < items.length; i++) {
			var item = items[i];
			item.width = '1px';
			this.createItem(item, i);
			this.maxValue = item.value && item.value > this.maxValue ? item.value : this.maxValue;
		}
		if (this.maxValue == 0) {
			return;
		}
		var cor = 100 / this.maxValue;
		var areaWidth = this.mainDiv.firstChild.lastChild.offsetWidth;
		for(var i = 0; i < items.length; i++) {
			var item = items[i];
			var gap = 82 * ((cor * item.value)/100);
			item.width = "calc(" + item.value * cor + "% - " + gap + "px)"
			item.animWidth = areaWidth * item.value * cor / 100 - gap  + "px"
		}

		this.setSizes(this.items);
	}
}
;
    function InfoPanel() {
	  this.tipLineColor = '#aaa';
	  this.tipFillColor = '#F8FFFF';

	}

	InfoPanel.prototype = {
	  infoPanelTask: function(inData, elem) {
		var me = this;
		if (!me.infoPanelTimeout) {
			me.infoPanelTimeout = setTimeout( function() {
				me.createInfoPanel(inData, elem);
				me.infoPanelTimeout = null;
			}, 500);
		}
	},

  infoPanelTaskCancel: function() {
		var me = this;
		if (me.infoPanelTimeout) {
			clearTimeout(me.infoPanelTimeout);
			me.infoPanelTimeout = null;
		}
	},

	infoPanelCloseTask: function(infoPanelCloseTask) {
    var me = this;
    me.infoPanelCloseTimeout = setTimeout( function() {
      me.deleteInfoPanel();
    }, 300);
	},

  infoPanelCloseTaskCancel: function() {
		var me = this;
		if (me.infoPanelCloseTimeout) {
			clearTimeout(me.infoPanelCloseTimeout);
			me.infoPanelCloseTimeout = null;
		}
	},

	getInfoPanelInner: function(inData) {
		return  '<div padding: 10px>' + inData.tpl + '</div>';
	},

	createInfoPanel: function(inData, elem) {
    var me = this;
		if (me.menuEl) {
			return;
		}
        var inner = me.getInfoPanelInner(inData);
		if (!inner) {
			return;
		}

		var p = elem.getBoundingClientRect();
		if (!p.width || !p.height) {
			return;
		}

		p.x = p.left ? p.left : px;
		p.y = (p.top ? p.top : py) + document.body.scrollTop + (document.body.parentNode && document.body.parentNode.scrollTop ? document.body.parentNode.scrollTop : 0);

		//p = me.interSectRect(p, parentRect.getBoundingClientRect());
		me.menuEl = document.createElement('DIV');
		me.menuEl.style.cssText = 'box-shadow:3px 3px 6px #888;position:absolute;z-index:800;padding:5px;' +
		'border:1px solid ' + me.tipLineColor + ';background-color:' + me.tipFillColor;
		me.menuEl.innerHTML = inner;
		me.menuEl.elem = elem;
		var pntik = document.createElement('DIV');
		pntik.style.cssText = 'position:absolute;width:9px;height:9px;transform:rotate(45deg);border:1px solid gray;' +
			'background-color:' + me.tipFillColor;
		me.menuEl.appendChild(pntik);
		document.body.appendChild(me.menuEl);
		me.menuEl.onclick = function(ev) {
		  ev.stopPropagation();
		  if (me.infoPanelClicked) {
        me.infoPanelClicked(ev, inData);
      }
		};
		me.menuEl.onmouseover = function(ev) {
		  me.infoPanelCloseTaskCancel();
		};
		me.menuEl.onmouseout = function(ev) {
		  me.infoPanelCloseTask();
		};
		var l = p.x + p.width / 2 - me.menuEl.offsetWidth /2;
		var r = l + me.menuEl.offsetWidth;
		var cor = 0;
		if (l < 3) {
			cor = l - 3;
			l = 3;
		}
		if (r > window.innerWidth - 3) {
			cor = r - window.innerWidth  + 3;
			l = window.innerWidth - 3 - me.menuEl.offsetWidth;
		}
		var t = p.y - me.menuEl.offsetHeight - 10;
		pntik.style.top = t < 0 ? '-6px' : (me.menuEl.offsetHeight - 6 + 'px');
		pntik.style.borderWidth= t < 0 ? '1px 0 0 1px' : ' 0 1px 1px 0';
		var zdv = me.menuEl.offsetWidth / 2 - 6 + cor;
		pntik.style.left = Math.min(Math.max(zdv, 2), me.menuEl.offsetWidth - 13) + 'px';
		if (t < 3) {
			t = p.y  + p.height + 10;
		} else {
			pntik.style.boxShadow = '3px 0px 3px #aaa';
			var overPntik = document.createElement('DIV');
			overPntik.style.cssText = ' transform:rotate(135deg);position:absolute;width:'
			+ (zdv < me.menuEl.offsetWidth - 13 ? '8':'7') + 'px; height: 5px; bottom: 6px; background-color: ' + me.tipFillColor;
			pntik.appendChild(overPntik);
		}
		me.menuEl.style.top = t + 'px';
		me.menuEl.style.left = l + 'px';
  },

  closeInfoPanel: function() {
	    this.deleteInfoPanel();
  },

	deleteInfoPanel: function() {
    var me = this;
    if (me.menuEl) {
      me.menuEl.parentNode.removeChild(me.menuEl);
      me.menuEl = null;
    }
  }
}
;
function NumberPicker(inData) {
  this.rangeStep = inData.rangeStep == null ? 1 : inData.rangeStep;
	this.timeStep = 0;
	this.accelerator = 0;
	this.indeTimeout = null;
	this.allowDecimals = inData.allowDecimals === false ? false : true;
	this.ds = 1111.1.toLocaleString('en-US', { maximumFractionDigits: 2 })[5];
	this.dd = 1111.1.toLocaleString('en-US', { maximumFractionDigits: 2 })[1];

	var inputPadding = {right: '21px'};
	var buttonRight = '7px';
	var dopTxt = '';
	if (inData.leftUnit) {
		inputPadding = {right: '21px', left: '42px'};
		dopTxt = '<div class="form-control" style="position:absolute;background-color:#f5f5f5;padding-left:6px;' +
			'padding-right:6px; text-align:center;top:1px;left:1px;' +
			'width:32px;height:32px;border-top-right-radius:0px;border-bottom-right-radius:0px;' +
			'border-width:0px 1px 0px 0px;user-select:none;">' + inData.leftUnit +'</div>';
	}

	if (inData.rightUnit) {
		inputPadding = {right: '50px'};
		buttonRight = '39px';
		dopTxt = '<div class="form-control" style="position:absolute;background-color:#f5f5f5;padding-left:6px;' +
			'padding-right:6px;text-align:center;top:1px;right:1px;width:32px;height:32px;border-top-left-radius:0px;' +
			'border-bottom-left-radius:0px;border-width:0px 0px 0px 1px;user-select:none;">'+ inData.rightUnit +'</div>';
	}

	var txt = '<div style="position: relative; display: inline-block;">' +
	'<input type="text" class="form-control" style="width:128px;" required="true" value="0" realval="0" min="0" max="99999999999">';
	if (!inData.hideArrows) {
		txt += '<div style="position: absolute; display: none; cursor: pointer; bottom: 50%; right: '
			+ buttonRight + '; min-width: 11px; min-height: 10px; background:url(/sites/all/modules/mentorcliq/features/mentorcliq_roi_dashboard/images/controls/arrowUp.png);" ></div>';
		txt += '<div style="position: absolute; display: none; cursor: pointer; top: 50%; right: '
			+ buttonRight + ';  min-width: 11px; min-height: 10px; background:url(/sites/all/modules/mentorcliq/features/mentorcliq_roi_dashboard/images/controls/arrowDown.png)" ></div>';
	}
	txt += dopTxt;
	txt += '</div>';
  txt += '<input type="hidden">'

	inData.plat.innerHTML = txt;
	this.inputCmp = inData.plat.firstChild.firstChild;
	this.inputCmp.min = inData.min || 0;
	if(inData.max) {
		this.inputCmp.max = inData.max;
	}

  this.hiddenInput = inData.plat.lastChild;
  if (inData.name) {
    this.hiddenInput.name = inData.name;
  }

  if (inData.style) {
		this.inputCmp.style.cssText = inData.style;
		if(this.inputCmp.style.width) {
			inData.plat.firstChild.style.width = this.inputCmp.style.width;
		}
	}
	this.inputCmp.style.paddingRight = inData.hideArrows ? (parseInt(inputPadding.right) - 10 + 'px') : inputPadding.right;
	if (inputPadding.left) {
		this.inputCmp.style.paddingLeft = inputPadding.left;
	}

	var me = this;

	this.corMinMax = function(val) {
		var val = parseFloat(val)
		if (isNaN(val)) {
			val = 0;
		}
		if (this.inputCmp.min) {
			val = Math.max(this.inputCmp.min, val)
		}
		if (this.inputCmp.max) {
			val = Math.min(this.inputCmp.max, val)
		}
		return val;
	}

	this.corVal = function () {
		var cmp = this.inputCmp;

		var temp = parseFloat(this.repl(cmp.value).replace(this.ds, '.'))
		if (isNaN(temp)) {
			temp = 0;
		}
		temp = this.corMinMax(temp);
		cmp.value = temp.toLocaleString('en-US', { maximumFractionDigits: 2 });
		this.valCanged(temp);
	}

	this.getCharCnt = function(str, chr) {
		var cnt = 0;
		var legal = ['0','1','2','3','4','5','6','7','8','9'];
		for (var i = 0; i < str.length; i++) {
			if (chr) {
				if (chr == str[i])
				cnt++;
			} else {
				if (legal.indexOf(str[i]) == -1) {
					cnt++;
				}
			}
		}
		return cnt;
	}

	this.decEnd = function(str) {
		if (this.allowDecimals) {
			var cnt = 0;
			for (var i = str.length - 1; i >= 0; i--) {
				if (str[i] == this.ds) {
					return str.substring(i, str.length);
				} else {
					if (str[i] != 0) {
						return '';
					}
				}
			}
		}
		return '';
	}

	this.indeTimerOn = function(val, indeInterval) {
		this.timeStep = val;
		if (this.indeTimeout) {
			clearTimeout(this.indeTimeout);
			this.indeTimeout = null;
		}
		this.indeTimeout = setTimeout(function() {
			me.inde(me.timeStep);

			me.indeTimerOn(me.timeStep, 80 - me.accelerator);
			if (me.accelerator < 50) {
				me.accelerator++;
			}
		}, indeInterval);
	}

	this.indeTimerOff = function() {
		this.timeStep = 0;
		this.accelerator = 0;
		if (this.indeTimeout) {
			clearTimeout(this.indeTimeout);
			this.indeTimeout = null;
		}
	}

	this.inde = function(val) {
    var temp = parseFloat(this.inputCmp.getAttribute("realval"));
    if (temp % this.rangeStep >= val / 2) {
      temp = Math.ceil(temp / val) * val;
    } else {
      temp = Math.floor(temp / val) * val;
    }
    temp = temp + val;

		temp = temp < this.inputCmp.min ? this.inputCmp.min : (temp > this.inputCmp.max ? this.inputCmp.max : temp)
		this.inputCmp.value = temp;
		this.inputCmp.value = this.inputCmp.value.replace('.', me.ds)
		this.corVal();
	}

	this.repl = function(str) {
		var legal = ['0','1','2','3','4','5','6','7','8','9'];
		if (this.allowDecimals) {
			legal.push(this.ds);
		}
		// RegExp !!!
		for(var i=str.length-1; i>=0; i--){
			if (legal.indexOf(str[i]) == -1){
				str = str.substring(0, i) + str.substring(i + 1, str.length);
				i--;
			}
		}
		return str;
	}

	this.inputCmp.oninput = function(a,b,s,d) {
		var pos = this.selectionStart;
		if (me.getCharCnt(this.value, me.ds) > 1) {
			this.selectionStart = pos - 1;
			this.selectionEnd = pos - 1;
			this.value = this.value.substring(0, pos - 1) + this.value.substring(pos, this.value.length);
			return;
		}

    var v = this.value;
		var vc = me.repl(v);
        if (v !== vc) {
			this.value = vc;
		}
		var temp = parseFloat(me.repl(this.value).replace(me.ds, '.'))
		if (isNaN(temp)) {
			this.value = 0;
			temp = 0;
		} else {
			var cnt = me.getCharCnt(v.substring(0, pos))
			this.value = temp.toLocaleString('en-US', { maximumFractionDigits: 2 }) + me.decEnd(v);
			pos = pos + me.getCharCnt(this.value.substring(0, pos)) - cnt;
			this.selectionStart = pos;
			this.selectionEnd = pos;
		}
		me.valCanged(temp);
    }

	this.valCanged = function(val) {
		var oldVal = parseFloat(this.inputCmp.getAttribute("realval"));
		val = this.corMinMax(val);
		this.inputCmp.setAttribute("realval", val);
    this.hiddenInput.value = val;
		if (this.onchange && oldVal != val) {
			this.onchange(val);
		}
	}

	this.getValue = function() {
		return parseFloat(this.inputCmp.getAttribute("realval"));
	}

	this.setValue = function(val) {
		val = this.corMinMax(val);
		this.inputCmp.setAttribute("realval", val);
    this.hiddenInput.value = val;
		this.inputCmp.value = val.toLocaleString('en-US', { maximumFractionDigits: 2 });
	}
	this.setValue(inData.value || 0);

	this.inputCmp.onblur = function(){
		me.corVal();
	}
	this.inputCmp.onmouseout = this.indeTimerOff;

	this.inputCmp.onkeydown = function(e) {
		if (e.keyCode == 38 || e.keyCode == 40) {
			me.inde(e.keyCode == 38 ? me.rangeStep : -me.rangeStep);
			e.stopPropagation();
			return false;
		}
	}

	if (!inData.hideArrows) {
		this.updiv = inData.plat.firstChild.childNodes[1];
		this.downdiv = inData.plat.firstChild.childNodes[2];
		this.wrapper = inData.plat.firstChild;
		this.wrapper.onmouseover = function(){
			me.updiv.style.display = 'block';
			me.downdiv.style.display = 'block';
		}
		this.wrapper.onmouseout = function(){
			me.updiv.style.display = 'none';
			me.downdiv.style.display = 'none';
		}
		this.updiv.onclick = function(){
			me.inde(me.rangeStep);
		}
		this.updiv.onmousedown = function(){
			me.indeTimerOn(me.rangeStep, 700);
		}
		this.updiv.onmouseup = function(){
			me.indeTimerOff()
		}
		this.updiv.onmouseout = function(){
			me.indeTimerOff()
		}
		this.downdiv.onclick = function(){
			me.inde(-me.rangeStep);
		}
		this.downdiv.onmousedown = function(){
			me.indeTimerOn(-me.rangeStep, 700);
		}
		this.downdiv.onmouseup = function(){
			me.indeTimerOff()
		}
		this.downdiv.onmouseout = function(){
			me.indeTimerOff()
		}
	}
}
;
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var isFirefox = typeof InstallTrigger !== 'undefined';
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
var isIE = /*@cc_on!@*/false || !!document.documentMode;
var isEdge = !isIE && !!window.StyleMedia;
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
var isBlink = (isChrome || isOpera) && !!window.CSS;
var employeesNumber, salaryNumber, investmentNumber, replacementNumber, retained_employees_added,
    retainedEmployeesSmall, inlineDecrease, roi_multiple_div,
    total_investment_in_mentoring_div, replacement_cost_div, savings_in_replacement_cost_div, retained_employees_count_div, savings_in_replacement_cost_big_div,
    platformWithoutDiv, platformWithDiv,
    animated_value, infoPanel, topGantt, startDatePicker, endDatePicker, goButton;

function getElem(id) {
  return document.getElementById(id);
};

function strToPickerDate(str) {
  var temp = str.split("-");
  return new Date(parseInt(temp[2]), parseInt(temp[0]) - 1, parseInt(temp[1]));
};

function setCmpEventListeners() {
  retained_employees_added = getElem('retained_employees_added');
  retainedEmployeesSmall = getElem('retainedEmployeesSmall');
  inlineDecrease = getElem('inlineDecrease');
  roi_multiple_div = getElem('roi_multiple');
  total_investment_in_mentoring_div = getElem('total_investment_in_mentoring');
  replacement_cost_div = getElem('replacement_cost');
  savings_in_replacement_cost_div = getElem('savings_in_replacement_cost');
  retained_employees_count_div = getElem('retained_employees_count');
  platformWithDiv =  getElem('platformWith');
  platformWithoutDiv =  getElem('platformWithout');
  savings_in_replacement_cost_big_div = getElem('savings_in_replacement_cost_big');
  animated_value = new AnimatedValue();
  infoPanel = new InfoPanel();
  var topGanttItems = [
    {separator: true, height: 5},
    {text: '<span style="white-space:nowrap"><b>Non Involved</b><span><br>Employees', color: '#ccc', value: parseFloat(loadData.non_mentoring_pop_turnover.toFixed(1))},
    {text: '<span style="white-space:nowrap"><b>Involved</b><br>Employees<span>', color: '#630677', value: parseFloat(loadData.mentoring_pop_turnover.toFixed(1))},
    {separator: true, height: 5}
  ];
  topGantt = new Gantt({plat: getElem('involvedPrcDiv'), items: topGanttItems, gradAnimation: (isIE || isEdge), id: 'gt'});

  employeesNumber = new NumberPicker({
    plat: getElem('employeesNumberWrapper'),
    allowDecimals: false,
    min: loadData.employees_in_mentoring_min,
    max: loadData.employees_in_mentoring_max,
    value: loadData.employees_in_mentoring,
    name: 'employees_in_mentoring',
    rangeStep: loadData.employees_in_mentoring_min
  });
  var employeesRange = getElem('employeesRange');
  employeesRange.oninput = function() {
    employeesNumber.setValue(this.value);
    setCalcAndSetValues();
  }
  employeesRange.onchange = function() {
    employeesNumber.setValue(this.value);
    setCalcAndSetValues();
  }
  employeesNumber.onchange = function(val) {
    employeesRange.value = val;
    setCalcAndSetValues();
  }
  salaryNumber = new NumberPicker({
    plat: getElem('salaryNumberWrapper'),
    leftUnit: '$',
    allowDecimals: false,
    //hideArrows: true,
    min: loadData.average_annual_salary_min,
    max: loadData.average_annual_salary_max,
    value: loadData.average_annual_salary,
    name: 'average_annual_salary',
    rangeStep: loadData.average_annual_salary_min
  });
  var salaryRange = getElem('salaryRange');
  salaryRange.oninput = function() {
    salaryNumber.setValue(this.value);
    setCalcAndSetValues();
  }
  salaryRange.onchange = function() {
    salaryNumber.setValue(this.value);
    setCalcAndSetValues();
  }
  salaryNumber.onchange = function(val) {
    salaryRange.value = val;
    setCalcAndSetValues();
  }
  replacementNumber =  new NumberPicker({
    plat: getElem('costNumberWrapper'),
    rightUnit: '%',
    allowDecimals: false,
    min: loadData.cost_of_replacement_min,
    max: loadData.cost_of_replacement_max,
    value: loadData.cost_of_replacement,
    name: 'cost_of_replacement',
    rangeStep: loadData.cost_of_replacement_min
  });
  var replacementRange = getElem('replacementRange');
  replacementRange.oninput = function() {
    replacementNumber.setValue(this.value);
    setCalcAndSetValues();
  }
  replacementRange.onchange = function() {
    replacementNumber.setValue(this.value);
    setCalcAndSetValues();
  }
  replacementNumber.onchange = function(val) {
    replacementRange.value = val;
    setCalcAndSetValues();
  }

  investmentNumber = new NumberPicker({
    plat: getElem('investmentNumberWrapper'),
    leftUnit: '$',
    allowDecimals: false,
    min: loadData.investment_min,
    max: loadData.investment_max,
    value: loadData.investment,
    name: 'investment',
    rangeStep: 5000
  });
  var investmentRange = getElem('investmentRange');
  investmentRange.oninput = function() {
    investmentNumber.setValue(this.value);
    setCalcAndSetValues();
  }
  investmentRange.onchange = function() {
    investmentNumber.setValue(this.value);
    setCalcAndSetValues();
  }
  investmentNumber.onchange = function(val) {
    investmentRange.value = val;
    setCalcAndSetValues();
  }

  var rangeClassName = isBlink ? "sliderCH" : (isIE || isEdge ? "sliderIE" : (isFirefox ? "sliderFF" : "slider"));
  if (isIE || isEdge) {
    jQuery('.blokCntr').css("margin-top", isEdge ? "-26px" : "-34px");
    jQuery('.range-container').css("margin-top", isEdge ? "-30px" : "-22px");
  }
  if (isBlink) {
    jQuery('.range-container').css("margin-top", "14px");
  }
  if (isFirefox) {
    jQuery('.range-container').css("margin-top", "5px");
  }
  employeesRange.classList.add(rangeClassName);
  salaryRange.classList.add(rangeClassName);
  replacementRange.classList.add(rangeClassName);
  investmentRange.classList.add(rangeClassName);

  var startDatePickerWrapper = getElem('startDatePickerWrapper');
  if (startDatePickerWrapper) {
    goButton = getElem('goButton');
    startDatePicker = new DatePicker({plat:startDatePickerWrapper, name: 'from', date: strToPickerDate(loadData.date_range_from)});
    startDatePicker.dateChanged = function(e, date) {
      checkGoButtonState();
    }
  }

  var endDatePickerWrapper = getElem('endDatePickerWrapper');
  if (endDatePickerWrapper) {
    endDatePicker = new DatePicker({plat:endDatePickerWrapper, name: 'to', date: strToPickerDate(loadData.date_range_to)});
    endDatePicker.dateChanged = function(e, date) {
      checkGoButtonState();
    }
  }

  var infoCmp = getElem('infoCmp');
  if (infoCmp) {
    infoCmp.onmouseover = function(d) {
      infoPanel.infoPanelTaskCancel();
      if (infoPanel.menuEl && infoPanel.menuEl.elem == infoCmp) {
        infoPanel.infoPanelCloseTaskCancel();
      } else {
        var data_fluctuation = loadData.data_fluctuation;
        var infoTpl_fluctuation = '';
        for (var i = 0; i < data_fluctuation.length; i++) {
          var value_date = data_fluctuation[i][0];
          var value_date_formatted = data_fluctuation[i][1];
          var value_user_count = data_fluctuation[i][2];
          infoTpl_fluctuation +=
            '<div class="row">' +
              '<div class="col-md-6" style="cursor:pointer" valueDate="' + value_date + '">' + value_date_formatted + '</div>' +
              '<div class="col-md-6">' + value_user_count + '</div>' +
            '</div>';
        }

        var infoTpl = '<div style="width:250px; height: 200px; overflow-x: hidden;overflow-y: auto">' +
          '<div style="max-width:200px">Data fluctuations</div>' +
          infoTpl_fluctuation +
          '</div>';
        infoPanel.infoPanelTask({tpl: infoTpl}, infoCmp);
      }
    };
    infoCmp.onmouseout = function(d) {
      infoPanel.infoPanelTaskCancel();
      infoPanel.infoPanelCloseTask();
    };
    infoPanel.infoPanelClicked = function(ev, obj) {
      var elem = ev.target;
      debugger;
      var valueDate = elem.getAttribute('valueDate');
      if (valueDate) {
        startDatePicker.setDate(strToPickerDate(valueDate));
        var invalidRange = startDatePicker.getDate() >= endDatePicker.getDate();
        if (!invalidRange) {
          getElem('reportForm').submit();
        }
      }
    }
  }
};

function checkGoButtonState() {
  var invalid = startDatePicker.getDate() >= endDatePicker.getDate();
  startDatePicker.setInvalid(invalid);
  endDatePicker.setInvalid(invalid);
  getElem('errorMsgText').style.display = invalid ? 'block' : 'none';
  getElem('goButtonWrapper').style.display = 'block';
  goButton.disabled = invalid;
  goButton.style.opacity = invalid ? 0.5 : 1;
}
function setCalcAndSetValues(full) {
  var valArray = [];
  if (full) {
    valArray.push({cmp: getElem('enployeeMinLabel'), val: loadData.employees_in_mentoring_min});
    valArray.push({cmp: getElem('enployeeMaxLabel'), val: loadData.employees_in_mentoring_max});
    valArray.push({cmp: getElem('averageMinLabel'), val: loadData.average_annual_salary_min});
    valArray.push({cmp: getElem('averageMaxLabel'), val: loadData.average_annual_salary_max});
    valArray.push({cmp: getElem('costMinLabel'), val: loadData.cost_of_replacement_min});
    valArray.push({cmp: getElem('costMaxLabel'), val: loadData.cost_of_replacement_max});
    valArray.push({cmp: getElem('investmentMinLabel'), val: loadData.investment_min});
    valArray.push({cmp: getElem('investmentMaxLabel'), val: loadData.investment_max});
  }

  var employees_in_mentoring_updated = employeesNumber.getValue();
  var employees_in_mentoring = loadData.employees_in_mentoring;
  var employees_added = loadData.retained_employees_added;
  var employees_added_updated = Math.round(employees_in_mentoring_updated * employees_added / employees_in_mentoring);

  var mentoring_pop_turnover = loadData.mentoring_pop_turnover;
  var total_population_retained = Math.round(employees_in_mentoring_updated - employees_in_mentoring_updated * mentoring_pop_turnover / 100);

  var retained_employees_count = employees_added_updated;
  var retained_employees_count_without = total_population_retained - retained_employees_count;

  valArray.push({cmp: platformWithoutDiv, val: retained_employees_count_without});
  valArray.push({cmp: platformWithDiv, val: retained_employees_count_without + retained_employees_count});

  valArray.push({cmp: retained_employees_added, val: retained_employees_count});
  valArray.push({cmp: retainedEmployeesSmall, val: retained_employees_count});
  valArray.push({cmp: inlineDecrease, val: Math.round(loadData.turnover_reduction)});
  var total_investment_in_mentoring = investmentNumber.getValue();
  valArray.push({cmp: total_investment_in_mentoring_div, val: total_investment_in_mentoring});
  var replacement_cost = Math.round(salaryNumber.getValue() * replacementNumber.getValue() / 100);
  valArray.push({cmp: replacement_cost_div, val: replacement_cost});
  var savings_in_replacement_cost = Math.round(retained_employees_count * replacement_cost);
  valArray.push({cmp: savings_in_replacement_cost_div, val: savings_in_replacement_cost});
  valArray.push({cmp: savings_in_replacement_cost_big_div, val: savings_in_replacement_cost});
  valArray.push({cmp: retained_employees_count_div, val: retained_employees_count});
  var roi_multiple = savings_in_replacement_cost > total_investment_in_mentoring ?
    Math.round(savings_in_replacement_cost / total_investment_in_mentoring) :
    -Math.round(total_investment_in_mentoring/ savings_in_replacement_cost)
  ;

  if (isNaN(roi_multiple) || roi_multiple < 0) {
    roi_multiple = 0;
  }

  if (isFinite(roi_multiple)) {
    getElem('final-text-infinity').style.display = 'none';
    getElem('final-text').style.display = 'inline';
  } else {
    getElem('final-text-infinity').style.display = 'inline';
    getElem('final-text').style.display = 'none';
  }

  valArray.push({cmp: roi_multiple_div, val: roi_multiple});
  animated_value.setVal(valArray);
};

function updateReportFields() {
  setCmpEventListeners();
  setCalcAndSetValues(true);
};
;
function DatePicker(inData) {
  var me = this;
  inData.plat.innerHTML = '<div class="input-group date" id="endDatePicker"><span class="input-group-addon" style="padding:6px 10px 6px 10px;">' +
    '<span class="glyphicon glyphicon-calendar"></span></span><input type="text" class="form-control"/></div><input type="hidden">';
  this.pickerCmp = jQuery(inData.plat.firstChild);
  this.pickerCmp.datepicker({
    format: inData.format || 'M dd, yyyy',
    autoclose: true,
    todayHighlight: true
  }).on('changeDate', function(e){
    if (typeof me.dateChanged === 'function') {
      var d = me.pickerCmp.datepicker('getDate');
      me.setHiddenDate(d);
      me.dateChanged(e, d);
    }
  });

  this.pickerCmp.datepicker('setDate', inData.date || new Date());
  this.pickerCmp.context.lastChild.onkeydown = function(e) {e.preventDefault(); e.stopPropagation(); return false};
  this.hiddenInput = inData.plat.lastChild;
  if (inData.name) {
    this.hiddenInput.name = inData.name;
  }
  this.setHiddenDate = function (d) {
    this.hiddenInput.value = (d.getMonth() + 1) + '-' + d.getDate() +'-'+ d.getFullYear();
  }
  this.setHiddenDate(inData.date || new Date());

  this.setDate = function (d) {
    this.pickerCmp.datepicker('setDate', d);
  }

  this.getDate = function () {
    return this.pickerCmp.datepicker('getDate');
  }

  this.setInvalid = function(val) {
    val ? this.pickerCmp.context.classList.add('is-invalid') : this.pickerCmp.context.classList.remove('is-invalid');
  }
}
;
