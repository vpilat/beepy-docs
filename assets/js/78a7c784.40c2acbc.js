"use strict";(self.webpackChunkbeepy=self.webpackChunkbeepy||[]).push([[985],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(a),u=i,k=m["".concat(p,".").concat(u)]||m[u]||y[u]||l;return a?r.createElement(k,n(n({ref:t},d),{},{components:a})):r.createElement(k,n({ref:t},d))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,n=new Array(l);n[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:i,n[1]=o;for(var s=2;s<l;s++)n[s]=a[s];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(7462),i=(a(7294),a(3905));const l={sidebar_position:1},n="Keyboard Firmware",o={unversionedId:"firmware/keyboard",id:"firmware/keyboard",title:"Keyboard Firmware",description:"The keyboard firmware is a fork of i2cpuppet with a few additional features to support the Beepy.",source:"@site/docs/firmware/keyboard.md",sourceDirName:"firmware",slug:"/firmware/keyboard",permalink:"/docs/firmware/keyboard",draft:!1,editUrl:"https://github.com/sqfmi/beepy-docs/blob/main/docs/firmware/keyboard.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Firmware",permalink:"/docs/category/firmware"},next:{title:"Power Management & Battery",permalink:"/docs/firmware/power"}},p={},s=[{value:"Basic key mappings",id:"basic-key-mappings",level:2},{value:"Alt and Sym modifiers",id:"alt-and-sym-modifiers",level:2},{value:"Symbol key map",id:"symbol-key-map",level:3},{value:"Sticky modifier keys",id:"sticky-modifier-keys",level:3},{value:"Meta mode",id:"meta-mode",level:2},{value:"<code>sysfs</code> Interface",id:"sysfs-interface",level:2},{value:"Module parameters",id:"module-parameters",level:2},{value:"Custom Keymap",id:"custom-keymap",level:2}],d={toc:s},m="wrapper";function y(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"keyboard-firmware"},"Keyboard Firmware"),(0,i.kt)("p",null,"The keyboard firmware is a fork of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/solderparty/i2c_puppet"},"i2c_puppet")," with a few additional features to support the Beepy."),(0,i.kt)("p",null,"You can download the latest version of the Beepy firmware here: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ardangelo/beepberry-rp2040/releases/latest/download/i2c_puppet.uf2"},"https://github.com/ardangelo/beepberry-rp2040/releases/latest/download/i2c_puppet.uf2")),(0,i.kt)("h2",{id:"basic-key-mappings"},"Basic key mappings"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Call is mapped to Control"),(0,i.kt)("li",{parentName:"ul"},'"Berry" key is mapped to Tmux prefix (customize the prefix in the keymap file)'),(0,i.kt)("li",{parentName:"ul"},"Touchpad click enters Meta mode (see the section on Meta mode). Double click enters touchpad scroll mode"),(0,i.kt)("li",{parentName:"ul"},"Back is mapped to Escape"),(0,i.kt)("li",{parentName:"ul"},'Holding "End Call" safely shuts down the Pi'),(0,i.kt)("li",{parentName:"ul"},"Physical Alt is mapped to symbols printed on the keycap"),(0,i.kt)("li",{parentName:"ul"},"Symbol is mapped to AltGr (Right Alt), mapped to more symbols via the keymap file"),(0,i.kt)("li",{parentName:"ul"},"Physical Alt + Enter is mapped to Tab")),(0,i.kt)("h2",{id:"alt-and-sym-modifiers"},"Alt and Sym modifiers"),(0,i.kt)("p",null,"The alternate symbols printed directly on the Beepy keys are triggered by pressing the physical Alt key, then the key on which the symbol is printed. For additional symbols not printed directly on the keys, the Sym key is used."),(0,i.kt)("h3",{id:"symbol-key-map"},"Symbol key map"),(0,i.kt)("img",{src:"/img/symbol-keys.png",width:"100%"}),(0,i.kt)("h3",{id:"sticky-modifier-keys"},"Sticky modifier keys"),(0,i.kt)("p",null,"The keyboard driver supports sticky modifier keys. Holding a modifier key (Shift, Alt, Sym) while typing an alpha keys will apply the modifier to all alpha keys until the modifier is released."),(0,i.kt)("p",null,"One press and release of the modifier will enter sticky mode, applying the modifier to the next alpha key only. If the same modifier key is pressed and released again in sticky mode, it will be canceled."),(0,i.kt)("p",null,"Visual mode indicators are drawn in the top right corner of the display, with indicators for Shift, Physical Alt, Control, Alt, Symbol, and Meta mode."),(0,i.kt)("h2",{id:"meta-mode"},"Meta mode"),(0,i.kt)("p",null,"Meta mode is a modal layer that assists in rapidly moving the cursor and scrolling with single keypresses. To enter Meta mode, click the touchpad button once. Then, the following keymap is applied, staying in Meta mode until dismissed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"E: up, S: down, W: left, D: right",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Why not WASD? This way, you can place your thumb in the middle of all four of these keys, and more fluidly move the cursor without mistyping"))),(0,i.kt)("li",{parentName:"ul"},"R: Home, F: End, O: PageUp, P: PageDown"),(0,i.kt)("li",{parentName:"ul"},"Q: Alt+Left (back one word), A: Alt+Right (forward one word)"),(0,i.kt)("li",{parentName:"ul"},"T: Tab (dismisses Meta mode)"),(0,i.kt)("li",{parentName:"ul"},"X: Apply Control to next key (dismisses Meta mode)"),(0,i.kt)("li",{parentName:"ul"},"C: Apply Alt to next key (dismisses Meta mode)"),(0,i.kt)("li",{parentName:"ul"},"0: Toggle display black/white inversion"),(0,i.kt)("li",{parentName:"ul"},"N: Decrease keyboard backlight brightness"),(0,i.kt)("li",{parentName:"ul"},"M: Increase keyboard backlight brightness"),(0,i.kt)("li",{parentName:"ul"},"$: Toggle keyboard backlight"),(0,i.kt)("li",{parentName:"ul"},"Touchpad click (while in Meta mode): Enable touchpad scroll mode (up and down arrrow keys)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Other Meta mode keys will continue to work as normal"),(0,i.kt)("li",{parentName:"ul"},"Exiting meta mode will also exit touchpad scroll mode"),(0,i.kt)("li",{parentName:"ul"},"Subsequent clicks of the touchpad will type Enter."))),(0,i.kt)("li",{parentName:"ul"},'Esc: ("Back" button): exit meta mode')),(0,i.kt)("p",null,"Typing any other key while in Meta mode will exit Meta mode and send the key as if it was typed normally."),(0,i.kt)("h2",{id:"sysfs-interface"},(0,i.kt)("inlineCode",{parentName:"h2"},"sysfs")," Interface"),(0,i.kt)("p",null,"The following sysfs entries are available under ",(0,i.kt)("inlineCode",{parentName:"p"},"/sys/firmware/beepy"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"led"),": 0 to disable LED, 1 to enable. Write-only"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"led_red"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"led_green"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"led_blue"),": set LED color intensity from 0 to 255. Write- only"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"keyboard_backlight"),": set keyboard brightness from 0 to 255. Write-only"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"battery_raw"),": raw numerical battery level as reported by firmware. Read-only"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"battery_volts"),": battery voltage estimation. Read-only"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"battery_percent"),": battery percentage estimation. Read-only")),(0,i.kt)("h2",{id:"module-parameters"},"Module parameters"),(0,i.kt)("p",null,"Write to ",(0,i.kt)("inlineCode",{parentName:"p"},"/sys/module/beepy_kbd/parameters/<param>")," to set, or unload and reload the module with ",(0,i.kt)("inlineCode",{parentName:"p"},"beepy-kbd param=val"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"touchpad"),": one of ",(0,i.kt)("inlineCode",{parentName:"li"},"meta")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"keys"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"meta"),": default, will use the touchpad button to enable or disable Meta mode"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"keys"),": touchpad always on, swiping sends arrow keys, clicking sends Enter")))),(0,i.kt)("h2",{id:"custom-keymap"},"Custom Keymap"),(0,i.kt)("p",null,'The Alt and Sym keymaps and the Tmux prefix sent by the "Berry" key can be edited in the file ',(0,i.kt)("inlineCode",{parentName:"p"},"/usr/share/kbd/keymaps/beepy-kbd.map"),". To reapply the keymap without rebooting, run ",(0,i.kt)("inlineCode",{parentName:"p"},"loadkeys /usr/share/kbd/keymaps/beepy-kbd.map"),"."))}y.isMDXComponent=!0}}]);