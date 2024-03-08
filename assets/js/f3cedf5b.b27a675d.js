"use strict";(self.webpackChunkbeepy=self.webpackChunkbeepy||[]).push([[713],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(r),c=a,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return r?n.createElement(k,i(i({ref:t},s),{},{components:r})):n.createElement(k,i({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6476:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_position:3},i="RGB LED",o={unversionedId:"software/linux-drivers",id:"software/linux-drivers",title:"RGB LED",description:"The following sysfs entries are available under /sys/firmware/beepy:",source:"@site/docs/software/linux-drivers.md",sourceDirName:"software",slug:"/software/linux-drivers",permalink:"/docs/software/linux-drivers",draft:!1,editUrl:"https://github.com/sqfmi/beepy-docs/blob/main/docs/software/linux-drivers.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"OS Image",permalink:"/docs/software/os-image"},next:{title:"Firmware",permalink:"/docs/category/firmware"}},p={},d=[{value:"RGB LED over I2C",id:"rgb-led-over-i2c",level:2},{value:"Example",id:"example",level:2}],s={toc:d},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rgb-led"},"RGB LED"),(0,a.kt)("p",null,"The following sysfs entries are available under ",(0,a.kt)("inlineCode",{parentName:"p"},"/sys/firmware/beepy"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"led"),": 0 to disable LED, 1 to enable. Write-only"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"led_red"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"led_green"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"led_blue"),": set LED color intensity from 0 to 255. Write- only")),(0,a.kt)("h2",{id:"rgb-led-over-i2c"},"RGB LED over I2C"),(0,a.kt)("p",null,"The RGB LED is connected to the RP2040. When the keyboard driver is unloaded via ",(0,a.kt)("inlineCode",{parentName:"p"},"rmmod beepy-kbd"),", they can be controlled directly by the Pi via ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/I%C2%B2C"},"I\xb2C"),"."),(0,a.kt)("p",null,"The LED color on the Beepy is exposed on I2C bus 1 at the chip address ",(0,a.kt)("inlineCode",{parentName:"p"},"0x1F"),"."),(0,a.kt)("p",null,"Controls are available at the following specific data addresses:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Function"),(0,a.kt)("th",{parentName:"tr",align:null},"Read"),(0,a.kt)("th",{parentName:"tr",align:null},"Write"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Power"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"0x20")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"0xA0"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Red"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"0x21")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"0xA1"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Green"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"0x22")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"0xA2"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Blue"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"0x23")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"0xA3"))))),(0,a.kt)("p",null,"To get/set the LED color on the Beepy, you can read/write to the above registers over I2C. The values are in the range of ",(0,a.kt)("inlineCode",{parentName:"p"},"0x00")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"0xFF"),"."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: write addresses are the read address masked with ",(0,a.kt)("inlineCode",{parentName:"em"},"0x80"),".")),(0,a.kt)("p",null,"A value of 0 in the power register represents the LED's off state, while any other value represents on."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"To set the RGB values to red and turn the LED on from the command line:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Format:\n# i2cset -y [i2cbus] [chip-address] [data-address] value\ni2cset -y 1 0x1F 0xA1 0xFF\ni2cset -y 1 0x1F 0xA2 0x00\ni2cset -y 1 0x1F 0xA3 0x00\ni2cset -y 1 0x1F 0xA0 0xFF\n")))}m.isMDXComponent=!0}}]);