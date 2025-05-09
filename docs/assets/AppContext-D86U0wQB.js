import{r as Nt,j as Bi}from"./index-C1EkbQ29.js";import{H as Yu}from"./HomeComponent-BLC64H09.js";import{A as Xu}from"./types-CkK8cJpl.js";const Ju=()=>{};var qi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=function(r){const t=[];let e=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Zu=function(r){const t=[];let e=0,n=0;for(;e<r.length;){const i=r[e++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){const o=r[e++];t[n++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=r[e++],u=r[e++],c=r[e++],d=((i&7)<<18|(o&63)<<12|(u&63)<<6|c&63)-65536;t[n++]=String.fromCharCode(55296+(d>>10)),t[n++]=String.fromCharCode(56320+(d&1023))}else{const o=r[e++],u=r[e++];t[n++]=String.fromCharCode((i&15)<<12|(o&63)<<6|u&63)}}return t.join("")},Xo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const o=r[i],u=i+1<r.length,c=u?r[i+1]:0,d=i+2<r.length,f=d?r[i+2]:0,_=o>>2,I=(o&3)<<4|c>>4;let R=(c&15)<<2|f>>6,S=f&63;d||(S=64,u||(R=64)),n.push(e[_],e[I],e[R],e[S])}return n.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(Yo(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):Zu(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const o=e[r.charAt(i++)],c=i<r.length?e[r.charAt(i)]:0;++i;const f=i<r.length?e[r.charAt(i)]:64;++i;const I=i<r.length?e[r.charAt(i)]:64;if(++i,o==null||c==null||f==null||I==null)throw new tl;const R=o<<2|c>>4;if(n.push(R),f!==64){const S=c<<4&240|f>>2;if(n.push(S),I!==64){const N=f<<6&192|I;n.push(N)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class tl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const el=function(r){const t=Yo(r);return Xo.encodeByteArray(t,!0)},zn=function(r){return el(r).replace(/\./g,"")},nl=function(r){try{return Xo.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=()=>rl().__FIREBASE_DEFAULTS__,il=()=>{if(typeof process>"u"||typeof qi>"u")return;const r=qi.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},ol=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&nl(r[1]);return t&&JSON.parse(t)},_s=()=>{try{return Ju()||sl()||il()||ol()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},al=r=>{var t,e;return(e=(t=_s())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[r]},ul=r=>{const t=al(r);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},Jo=()=>{var r;return(r=_s())===null||r===void 0?void 0:r.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",i=r.iat||0,o=r.sub||r.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},r);return[zn(JSON.stringify(e)),zn(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dl(){var r;const t=(r=_s())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fl(){return!dl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pl(){try{return typeof indexedDB=="object"}catch{return!1}}function ml(){return new Promise((r,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl="FirebaseError";class Re extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=gl,Object.setPrototypeOf(this,Re.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zo.prototype.create)}}class Zo{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],u=o?_l(o,n):"Error",c=`${this.serviceName}: ${u} (${i}).`;return new Re(i,c,n)}}function _l(r,t){return r.replace(yl,(e,n)=>{const i=t[n];return i!=null?String(i):`<${n}?>`})}const yl=/\{\$([^}]+)}/g;function Gn(r,t){if(r===t)return!0;const e=Object.keys(r),n=Object.keys(t);for(const i of e){if(!n.includes(i))return!1;const o=r[i],u=t[i];if(ji(o)&&ji(u)){if(!Gn(o,u))return!1}else if(o!==u)return!1}for(const i of n)if(!e.includes(i))return!1;return!0}function ji(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(r){return r&&r._delegate?r._delegate:r}class rn{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new ll;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Il(t))try{this.getOrInitializeService({instanceIdentifier:te})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});n.resolve(o)}catch{}}}}clearInstance(t=te){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=te){return this.instances.has(t)}getOptions(t=te){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[o,u]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);n===c&&u.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),o=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;o.add(t),this.onInitCallbacks.set(i,o);const u=this.instances.get(i);return u&&t(u,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Tl(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=te){return this.component?this.component.multipleInstances?t:te:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Tl(r){return r===te?void 0:r}function Il(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new vl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(B||(B={}));const wl={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},Rl=B.INFO,Cl={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},Sl=(r,t,...e)=>{if(t<r.logLevel)return;const n=new Date().toISOString(),i=Cl[t];if(i)console[i](`[${n}]  ${r.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ta{constructor(t){this.name=t,this._logLevel=Rl,this._logHandler=Sl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in B))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?wl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...t),this._logHandler(this,B.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...t),this._logHandler(this,B.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,B.INFO,...t),this._logHandler(this,B.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,B.WARN,...t),this._logHandler(this,B.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...t),this._logHandler(this,B.ERROR,...t)}}const Pl=(r,t)=>t.some(e=>r instanceof e);let $i,zi;function Vl(){return $i||($i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bl(){return zi||(zi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ea=new WeakMap,Kr=new WeakMap,na=new WeakMap,Fr=new WeakMap,ys=new WeakMap;function Dl(r){const t=new Promise((e,n)=>{const i=()=>{r.removeEventListener("success",o),r.removeEventListener("error",u)},o=()=>{e(qt(r.result)),i()},u=()=>{n(r.error),i()};r.addEventListener("success",o),r.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&ea.set(e,r)}).catch(()=>{}),ys.set(t,r),t}function Nl(r){if(Kr.has(r))return;const t=new Promise((e,n)=>{const i=()=>{r.removeEventListener("complete",o),r.removeEventListener("error",u),r.removeEventListener("abort",u)},o=()=>{e(),i()},u=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",o),r.addEventListener("error",u),r.addEventListener("abort",u)});Kr.set(r,t)}let Qr={get(r,t,e){if(r instanceof IDBTransaction){if(t==="done")return Kr.get(r);if(t==="objectStoreNames")return r.objectStoreNames||na.get(r);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return qt(r[t])},set(r,t,e){return r[t]=e,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function kl(r){Qr=r(Qr)}function Ol(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=r.call(Ur(this),t,...e);return na.set(n,t.sort?t.sort():[t]),qt(n)}:bl().includes(r)?function(...t){return r.apply(Ur(this),t),qt(ea.get(this))}:function(...t){return qt(r.apply(Ur(this),t))}}function xl(r){return typeof r=="function"?Ol(r):(r instanceof IDBTransaction&&Nl(r),Pl(r,Vl())?new Proxy(r,Qr):r)}function qt(r){if(r instanceof IDBRequest)return Dl(r);if(Fr.has(r))return Fr.get(r);const t=xl(r);return t!==r&&(Fr.set(r,t),ys.set(t,r)),t}const Ur=r=>ys.get(r);function Ml(r,t,{blocked:e,upgrade:n,blocking:i,terminated:o}={}){const u=indexedDB.open(r,t),c=qt(u);return n&&u.addEventListener("upgradeneeded",d=>{n(qt(u.result),d.oldVersion,d.newVersion,qt(u.transaction),d)}),e&&u.addEventListener("blocked",d=>e(d.oldVersion,d.newVersion,d)),c.then(d=>{o&&d.addEventListener("close",()=>o()),i&&d.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const Ll=["get","getKey","getAll","getAllKeys","count"],Fl=["put","add","delete","clear"],Br=new Map;function Gi(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Br.get(t))return Br.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,i=Fl.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Ll.includes(e)))return;const o=async function(u,...c){const d=this.transaction(u,i?"readwrite":"readonly");let f=d.store;return n&&(f=f.index(c.shift())),(await Promise.all([f[e](...c),i&&d.done]))[0]};return Br.set(t,o),o}kl(r=>({...r,get:(t,e,n)=>Gi(t,e)||r.get(t,e,n),has:(t,e)=>!!Gi(t,e)||r.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Bl(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function Bl(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Wr="@firebase/app",Hi="0.11.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new ta("@firebase/app"),ql="@firebase/app-compat",jl="@firebase/analytics-compat",$l="@firebase/analytics",zl="@firebase/app-check-compat",Gl="@firebase/app-check",Hl="@firebase/auth",Kl="@firebase/auth-compat",Ql="@firebase/database",Wl="@firebase/data-connect",Yl="@firebase/database-compat",Xl="@firebase/functions",Jl="@firebase/functions-compat",Zl="@firebase/installations",tc="@firebase/installations-compat",ec="@firebase/messaging",nc="@firebase/messaging-compat",rc="@firebase/performance",sc="@firebase/performance-compat",ic="@firebase/remote-config",oc="@firebase/remote-config-compat",ac="@firebase/storage",uc="@firebase/storage-compat",lc="@firebase/firestore",cc="@firebase/vertexai",hc="@firebase/firestore-compat",dc="firebase",fc="11.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr="[DEFAULT]",pc={[Wr]:"fire-core",[ql]:"fire-core-compat",[$l]:"fire-analytics",[jl]:"fire-analytics-compat",[Gl]:"fire-app-check",[zl]:"fire-app-check-compat",[Hl]:"fire-auth",[Kl]:"fire-auth-compat",[Ql]:"fire-rtdb",[Wl]:"fire-data-connect",[Yl]:"fire-rtdb-compat",[Xl]:"fire-fn",[Jl]:"fire-fn-compat",[Zl]:"fire-iid",[tc]:"fire-iid-compat",[ec]:"fire-fcm",[nc]:"fire-fcm-compat",[rc]:"fire-perf",[sc]:"fire-perf-compat",[ic]:"fire-rc",[oc]:"fire-rc-compat",[ac]:"fire-gcs",[uc]:"fire-gcs-compat",[lc]:"fire-fst",[hc]:"fire-fst-compat",[cc]:"fire-vertex","fire-js":"fire-js",[dc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=new Map,mc=new Map,Xr=new Map;function Ki(r,t){try{r.container.addComponent(t)}catch(e){kt.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,e)}}function Kn(r){const t=r.name;if(Xr.has(t))return kt.debug(`There were multiple attempts to register component ${t}.`),!1;Xr.set(t,r);for(const e of Hn.values())Ki(e,r);for(const e of mc.values())Ki(e,r);return!0}function gc(r,t){const e=r.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),r.container.getProvider(t)}function _c(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jt=new Zo("app","Firebase",yc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw jt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc=fc;function ra(r,t={}){let e=r;typeof t!="object"&&(t={name:t});const n=Object.assign({name:Yr,automaticDataCollectionEnabled:!1},t),i=n.name;if(typeof i!="string"||!i)throw jt.create("bad-app-name",{appName:String(i)});if(e||(e=Jo()),!e)throw jt.create("no-options");const o=Hn.get(i);if(o){if(Gn(e,o.options)&&Gn(n,o.config))return o;throw jt.create("duplicate-app",{appName:i})}const u=new Al(i);for(const d of Xr.values())u.addComponent(d);const c=new Ec(e,n,u);return Hn.set(i,c),c}function Tc(r=Yr){const t=Hn.get(r);if(!t&&r===Yr&&Jo())return ra();if(!t)throw jt.create("no-app",{appName:r});return t}function pe(r,t,e){var n;let i=(n=pc[r])!==null&&n!==void 0?n:r;e&&(i+=`-${e}`);const o=i.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const c=[`Unable to register library "${i}" with version "${t}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&u&&c.push("and"),u&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),kt.warn(c.join(" "));return}Kn(new rn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="firebase-heartbeat-database",Ac=1,sn="firebase-heartbeat-store";let qr=null;function sa(){return qr||(qr=Ml(Ic,Ac,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(sn)}catch(e){console.warn(e)}}}}).catch(r=>{throw jt.create("idb-open",{originalErrorMessage:r.message})})),qr}async function wc(r){try{const e=(await sa()).transaction(sn),n=await e.objectStore(sn).get(ia(r));return await e.done,n}catch(t){if(t instanceof Re)kt.warn(t.message);else{const e=jt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});kt.warn(e.message)}}}async function Qi(r,t){try{const n=(await sa()).transaction(sn,"readwrite");await n.objectStore(sn).put(t,ia(r)),await n.done}catch(e){if(e instanceof Re)kt.warn(e.message);else{const n=jt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});kt.warn(n.message)}}}function ia(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=1024,Cc=30;class Sc{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Vc(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Wi();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>Cc){const u=bc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){kt.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Wi(),{heartbeatsToSend:n,unsentEntries:i}=Pc(this._heartbeatsCache.heartbeats),o=zn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return kt.warn(e),""}}}function Wi(){return new Date().toISOString().substring(0,10)}function Pc(r,t=Rc){const e=[];let n=r.slice();for(const i of r){const o=e.find(u=>u.agent===i.agent);if(o){if(o.dates.push(i.date),Yi(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Yi(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class Vc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pl()?ml().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await wc(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qi(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qi(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Yi(r){return zn(JSON.stringify({version:2,heartbeats:r})).length}function bc(r){if(r.length===0)return-1;let t=0,e=r[0].date;for(let n=1;n<r.length;n++)r[n].date<e&&(e=r[n].date,t=n);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(r){Kn(new rn("platform-logger",t=>new Ul(t),"PRIVATE")),Kn(new rn("heartbeat",t=>new Sc(t),"PRIVATE")),pe(Wr,Hi,r),pe(Wr,Hi,"esm2017"),pe("fire-js","")}Dc("");var Nc="firebase",kc="11.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pe(Nc,kc,"app");var Xi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $t,oa;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function g(){}g.prototype=p.prototype,v.D=p.prototype,v.prototype=new g,v.prototype.constructor=v,v.C=function(y,E,A){for(var m=Array(arguments.length-2),Vt=2;Vt<arguments.length;Vt++)m[Vt-2]=arguments[Vt];return p.prototype[E].apply(y,m)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,p,g){g||(g=0);var y=Array(16);if(typeof p=="string")for(var E=0;16>E;++E)y[E]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(E=0;16>E;++E)y[E]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=v.g[0],g=v.g[1],E=v.g[2];var A=v.g[3],m=p+(A^g&(E^A))+y[0]+3614090360&4294967295;p=g+(m<<7&4294967295|m>>>25),m=A+(E^p&(g^E))+y[1]+3905402710&4294967295,A=p+(m<<12&4294967295|m>>>20),m=E+(g^A&(p^g))+y[2]+606105819&4294967295,E=A+(m<<17&4294967295|m>>>15),m=g+(p^E&(A^p))+y[3]+3250441966&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(A^g&(E^A))+y[4]+4118548399&4294967295,p=g+(m<<7&4294967295|m>>>25),m=A+(E^p&(g^E))+y[5]+1200080426&4294967295,A=p+(m<<12&4294967295|m>>>20),m=E+(g^A&(p^g))+y[6]+2821735955&4294967295,E=A+(m<<17&4294967295|m>>>15),m=g+(p^E&(A^p))+y[7]+4249261313&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(A^g&(E^A))+y[8]+1770035416&4294967295,p=g+(m<<7&4294967295|m>>>25),m=A+(E^p&(g^E))+y[9]+2336552879&4294967295,A=p+(m<<12&4294967295|m>>>20),m=E+(g^A&(p^g))+y[10]+4294925233&4294967295,E=A+(m<<17&4294967295|m>>>15),m=g+(p^E&(A^p))+y[11]+2304563134&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(A^g&(E^A))+y[12]+1804603682&4294967295,p=g+(m<<7&4294967295|m>>>25),m=A+(E^p&(g^E))+y[13]+4254626195&4294967295,A=p+(m<<12&4294967295|m>>>20),m=E+(g^A&(p^g))+y[14]+2792965006&4294967295,E=A+(m<<17&4294967295|m>>>15),m=g+(p^E&(A^p))+y[15]+1236535329&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(E^A&(g^E))+y[1]+4129170786&4294967295,p=g+(m<<5&4294967295|m>>>27),m=A+(g^E&(p^g))+y[6]+3225465664&4294967295,A=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(A^p))+y[11]+643717713&4294967295,E=A+(m<<14&4294967295|m>>>18),m=g+(A^p&(E^A))+y[0]+3921069994&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(E^A&(g^E))+y[5]+3593408605&4294967295,p=g+(m<<5&4294967295|m>>>27),m=A+(g^E&(p^g))+y[10]+38016083&4294967295,A=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(A^p))+y[15]+3634488961&4294967295,E=A+(m<<14&4294967295|m>>>18),m=g+(A^p&(E^A))+y[4]+3889429448&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(E^A&(g^E))+y[9]+568446438&4294967295,p=g+(m<<5&4294967295|m>>>27),m=A+(g^E&(p^g))+y[14]+3275163606&4294967295,A=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(A^p))+y[3]+4107603335&4294967295,E=A+(m<<14&4294967295|m>>>18),m=g+(A^p&(E^A))+y[8]+1163531501&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(E^A&(g^E))+y[13]+2850285829&4294967295,p=g+(m<<5&4294967295|m>>>27),m=A+(g^E&(p^g))+y[2]+4243563512&4294967295,A=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(A^p))+y[7]+1735328473&4294967295,E=A+(m<<14&4294967295|m>>>18),m=g+(A^p&(E^A))+y[12]+2368359562&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(g^E^A)+y[5]+4294588738&4294967295,p=g+(m<<4&4294967295|m>>>28),m=A+(p^g^E)+y[8]+2272392833&4294967295,A=p+(m<<11&4294967295|m>>>21),m=E+(A^p^g)+y[11]+1839030562&4294967295,E=A+(m<<16&4294967295|m>>>16),m=g+(E^A^p)+y[14]+4259657740&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(g^E^A)+y[1]+2763975236&4294967295,p=g+(m<<4&4294967295|m>>>28),m=A+(p^g^E)+y[4]+1272893353&4294967295,A=p+(m<<11&4294967295|m>>>21),m=E+(A^p^g)+y[7]+4139469664&4294967295,E=A+(m<<16&4294967295|m>>>16),m=g+(E^A^p)+y[10]+3200236656&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(g^E^A)+y[13]+681279174&4294967295,p=g+(m<<4&4294967295|m>>>28),m=A+(p^g^E)+y[0]+3936430074&4294967295,A=p+(m<<11&4294967295|m>>>21),m=E+(A^p^g)+y[3]+3572445317&4294967295,E=A+(m<<16&4294967295|m>>>16),m=g+(E^A^p)+y[6]+76029189&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(g^E^A)+y[9]+3654602809&4294967295,p=g+(m<<4&4294967295|m>>>28),m=A+(p^g^E)+y[12]+3873151461&4294967295,A=p+(m<<11&4294967295|m>>>21),m=E+(A^p^g)+y[15]+530742520&4294967295,E=A+(m<<16&4294967295|m>>>16),m=g+(E^A^p)+y[2]+3299628645&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(E^(g|~A))+y[0]+4096336452&4294967295,p=g+(m<<6&4294967295|m>>>26),m=A+(g^(p|~E))+y[7]+1126891415&4294967295,A=p+(m<<10&4294967295|m>>>22),m=E+(p^(A|~g))+y[14]+2878612391&4294967295,E=A+(m<<15&4294967295|m>>>17),m=g+(A^(E|~p))+y[5]+4237533241&4294967295,g=E+(m<<21&4294967295|m>>>11),m=p+(E^(g|~A))+y[12]+1700485571&4294967295,p=g+(m<<6&4294967295|m>>>26),m=A+(g^(p|~E))+y[3]+2399980690&4294967295,A=p+(m<<10&4294967295|m>>>22),m=E+(p^(A|~g))+y[10]+4293915773&4294967295,E=A+(m<<15&4294967295|m>>>17),m=g+(A^(E|~p))+y[1]+2240044497&4294967295,g=E+(m<<21&4294967295|m>>>11),m=p+(E^(g|~A))+y[8]+1873313359&4294967295,p=g+(m<<6&4294967295|m>>>26),m=A+(g^(p|~E))+y[15]+4264355552&4294967295,A=p+(m<<10&4294967295|m>>>22),m=E+(p^(A|~g))+y[6]+2734768916&4294967295,E=A+(m<<15&4294967295|m>>>17),m=g+(A^(E|~p))+y[13]+1309151649&4294967295,g=E+(m<<21&4294967295|m>>>11),m=p+(E^(g|~A))+y[4]+4149444226&4294967295,p=g+(m<<6&4294967295|m>>>26),m=A+(g^(p|~E))+y[11]+3174756917&4294967295,A=p+(m<<10&4294967295|m>>>22),m=E+(p^(A|~g))+y[2]+718787259&4294967295,E=A+(m<<15&4294967295|m>>>17),m=g+(A^(E|~p))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(E+(m<<21&4294967295|m>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+A&4294967295}n.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var g=p-this.blockSize,y=this.B,E=this.h,A=0;A<p;){if(E==0)for(;A<=g;)i(this,v,A),A+=this.blockSize;if(typeof v=="string"){for(;A<p;)if(y[E++]=v.charCodeAt(A++),E==this.blockSize){i(this,y),E=0;break}}else for(;A<p;)if(y[E++]=v[A++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=p},n.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var g=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=g&255,g/=256;for(this.u(v),v=Array(16),p=g=0;4>p;++p)for(var y=0;32>y;y+=8)v[g++]=this.g[p]>>>y&255;return v};function o(v,p){var g=c;return Object.prototype.hasOwnProperty.call(g,v)?g[v]:g[v]=p(v)}function u(v,p){this.h=p;for(var g=[],y=!0,E=v.length-1;0<=E;E--){var A=v[E]|0;y&&A==p||(g[E]=A,y=!1)}this.g=g}var c={};function d(v){return-128<=v&&128>v?o(v,function(p){return new u([p|0],0>p?-1:0)}):new u([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return I;if(0>v)return D(f(-v));for(var p=[],g=1,y=0;v>=g;y++)p[y]=v/g|0,g*=4294967296;return new u(p,0)}function _(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return D(_(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=f(Math.pow(p,8)),y=I,E=0;E<v.length;E+=8){var A=Math.min(8,v.length-E),m=parseInt(v.substring(E,E+A),p);8>A?(A=f(Math.pow(p,A)),y=y.j(A).add(f(m))):(y=y.j(g),y=y.add(f(m)))}return y}var I=d(0),R=d(1),S=d(16777216);r=u.prototype,r.m=function(){if(x(this))return-D(this).m();for(var v=0,p=1,g=0;g<this.g.length;g++){var y=this.i(g);v+=(0<=y?y:4294967296+y)*p,p*=4294967296}return v},r.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(N(this))return"0";if(x(this))return"-"+D(this).toString(v);for(var p=f(Math.pow(v,6)),g=this,y="";;){var E=rt(g,p).g;g=X(g,E.j(p));var A=((0<g.g.length?g.g[0]:g.h)>>>0).toString(v);if(g=E,N(g))return A+y;for(;6>A.length;)A="0"+A;y=A+y}},r.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function N(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function x(v){return v.h==-1}r.l=function(v){return v=X(this,v),x(v)?-1:N(v)?0:1};function D(v){for(var p=v.g.length,g=[],y=0;y<p;y++)g[y]=~v.g[y];return new u(g,~v.h).add(R)}r.abs=function(){return x(this)?D(this):this},r.add=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],y=0,E=0;E<=p;E++){var A=y+(this.i(E)&65535)+(v.i(E)&65535),m=(A>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);y=m>>>16,A&=65535,m&=65535,g[E]=m<<16|A}return new u(g,g[g.length-1]&-2147483648?-1:0)};function X(v,p){return v.add(D(p))}r.j=function(v){if(N(this)||N(v))return I;if(x(this))return x(v)?D(this).j(D(v)):D(D(this).j(v));if(x(v))return D(this.j(D(v)));if(0>this.l(S)&&0>v.l(S))return f(this.m()*v.m());for(var p=this.g.length+v.g.length,g=[],y=0;y<2*p;y++)g[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<v.g.length;E++){var A=this.i(y)>>>16,m=this.i(y)&65535,Vt=v.i(E)>>>16,be=v.i(E)&65535;g[2*y+2*E]+=m*be,K(g,2*y+2*E),g[2*y+2*E+1]+=A*be,K(g,2*y+2*E+1),g[2*y+2*E+1]+=m*Vt,K(g,2*y+2*E+1),g[2*y+2*E+2]+=A*Vt,K(g,2*y+2*E+2)}for(y=0;y<p;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=p;y<2*p;y++)g[y]=0;return new u(g,0)};function K(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function H(v,p){this.g=v,this.h=p}function rt(v,p){if(N(p))throw Error("division by zero");if(N(v))return new H(I,I);if(x(v))return p=rt(D(v),p),new H(D(p.g),D(p.h));if(x(p))return p=rt(v,D(p)),new H(D(p.g),p.h);if(30<v.g.length){if(x(v)||x(p))throw Error("slowDivide_ only works with positive integers.");for(var g=R,y=p;0>=y.l(v);)g=Pt(g),y=Pt(y);var E=it(g,1),A=it(y,1);for(y=it(y,2),g=it(g,2);!N(y);){var m=A.add(y);0>=m.l(v)&&(E=E.add(g),A=m),y=it(y,1),g=it(g,1)}return p=X(v,E.j(p)),new H(E,p)}for(E=I;0<=v.l(p);){for(g=Math.max(1,Math.floor(v.m()/p.m())),y=Math.ceil(Math.log(g)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),A=f(g),m=A.j(p);x(m)||0<m.l(v);)g-=y,A=f(g),m=A.j(p);N(A)&&(A=R),E=E.add(A),v=X(v,m)}return new H(E,v)}r.A=function(v){return rt(this,v).h},r.and=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)&v.i(y);return new u(g,this.h&v.h)},r.or=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)|v.i(y);return new u(g,this.h|v.h)},r.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)^v.i(y);return new u(g,this.h^v.h)};function Pt(v){for(var p=v.g.length+1,g=[],y=0;y<p;y++)g[y]=v.i(y)<<1|v.i(y-1)>>>31;return new u(g,v.h)}function it(v,p){var g=p>>5;p%=32;for(var y=v.g.length-g,E=[],A=0;A<y;A++)E[A]=0<p?v.i(A+g)>>>p|v.i(A+g+1)<<32-p:v.i(A+g);return new u(E,v.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,oa=n,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=_,$t=u}).apply(typeof Xi<"u"?Xi:typeof self<"u"?self:typeof window<"u"?window:{});var kn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var aa,Ye,ua,Un,Jr,la,ca,ha;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,l){return s==Array.prototype||s==Object.prototype||(s[a]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof kn=="object"&&kn];for(var a=0;a<s.length;++a){var l=s[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=e(this);function i(s,a){if(a)t:{var l=n;s=s.split(".");for(var h=0;h<s.length-1;h++){var T=s[h];if(!(T in l))break t;l=l[T]}s=s[s.length-1],h=l[s],a=a(h),a!=h&&a!=null&&t(l,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var l=0,h=!1,T={next:function(){if(!h&&l<s.length){var w=l++;return{value:a(w,s[w]),done:!1}}return h=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function d(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function _(s,a,l){return s.call.apply(s.bind,arguments)}function I(s,a,l){if(!s)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,h),s.apply(a,T)}}return function(){return s.apply(a,arguments)}}function R(s,a,l){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:I,R.apply(null,arguments)}function S(s,a){var l=Array.prototype.slice.call(arguments,1);return function(){var h=l.slice();return h.push.apply(h,arguments),s.apply(this,h)}}function N(s,a){function l(){}l.prototype=a.prototype,s.aa=a.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(h,T,w){for(var P=Array(arguments.length-2),z=2;z<arguments.length;z++)P[z-2]=arguments[z];return a.prototype[T].apply(h,P)}}function x(s){const a=s.length;if(0<a){const l=Array(a);for(let h=0;h<a;h++)l[h]=s[h];return l}return[]}function D(s,a){for(let l=1;l<arguments.length;l++){const h=arguments[l];if(d(h)){const T=s.length||0,w=h.length||0;s.length=T+w;for(let P=0;P<w;P++)s[T+P]=h[P]}else s.push(h)}}class X{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function K(s){return/^[\s\xa0]*$/.test(s)}function H(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function rt(s){return rt[" "](s),s}rt[" "]=function(){};var Pt=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function it(s,a,l){for(const h in s)a.call(l,s[h],h,s)}function v(s,a){for(const l in s)a.call(void 0,s[l],l,s)}function p(s){const a={};for(const l in s)a[l]=s[l];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let l,h;for(let T=1;T<arguments.length;T++){h=arguments[T];for(l in h)s[l]=h[l];for(let w=0;w<g.length;w++)l=g[w],Object.prototype.hasOwnProperty.call(h,l)&&(s[l]=h[l])}}function E(s){var a=1;s=s.split(":");const l=[];for(;0<a&&s.length;)l.push(s.shift()),a--;return s.length&&l.push(s.join(":")),l}function A(s){c.setTimeout(()=>{throw s},0)}function m(){var s=pr;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Vt{constructor(){this.h=this.g=null}add(a,l){const h=be.get();h.set(a,l),this.h?this.h.next=h:this.g=h,this.h=h}}var be=new X(()=>new mu,s=>s.reset());class mu{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let De,Ne=!1,pr=new Vt,Bs=()=>{const s=c.Promise.resolve(void 0);De=()=>{s.then(gu)}};var gu=()=>{for(var s;s=m();){try{s.h.call(s.g)}catch(l){A(l)}var a=be;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}Ne=!1};function xt(){this.s=this.s,this.C=this.C}xt.prototype.s=!1,xt.prototype.ma=function(){this.s||(this.s=!0,this.N())},xt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function lt(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};var _u=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return s}();function ke(s,a){if(lt.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,h=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(Pt){t:{try{rt(a.nodeName);var T=!0;break t}catch{}T=!1}T||(a=null)}}else l=="mouseover"?a=s.fromElement:l=="mouseout"&&(a=s.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:yu[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&ke.aa.h.call(this)}}N(ke,lt);var yu={2:"touch",3:"pen",4:"mouse"};ke.prototype.h=function(){ke.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var pn="closure_listenable_"+(1e6*Math.random()|0),Eu=0;function vu(s,a,l,h,T){this.listener=s,this.proxy=null,this.src=a,this.type=l,this.capture=!!h,this.ha=T,this.key=++Eu,this.da=this.fa=!1}function mn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function gn(s){this.src=s,this.g={},this.h=0}gn.prototype.add=function(s,a,l,h,T){var w=s.toString();s=this.g[w],s||(s=this.g[w]=[],this.h++);var P=gr(s,a,h,T);return-1<P?(a=s[P],l||(a.fa=!1)):(a=new vu(a,this.src,w,!!h,T),a.fa=l,s.push(a)),a};function mr(s,a){var l=a.type;if(l in s.g){var h=s.g[l],T=Array.prototype.indexOf.call(h,a,void 0),w;(w=0<=T)&&Array.prototype.splice.call(h,T,1),w&&(mn(a),s.g[l].length==0&&(delete s.g[l],s.h--))}}function gr(s,a,l,h){for(var T=0;T<s.length;++T){var w=s[T];if(!w.da&&w.listener==a&&w.capture==!!l&&w.ha==h)return T}return-1}var _r="closure_lm_"+(1e6*Math.random()|0),yr={};function qs(s,a,l,h,T){if(Array.isArray(a)){for(var w=0;w<a.length;w++)qs(s,a[w],l,h,T);return null}return l=zs(l),s&&s[pn]?s.K(a,l,f(h)?!!h.capture:!1,T):Tu(s,a,l,!1,h,T)}function Tu(s,a,l,h,T,w){if(!a)throw Error("Invalid event type");var P=f(T)?!!T.capture:!!T,z=vr(s);if(z||(s[_r]=z=new gn(s)),l=z.add(a,l,h,P,w),l.proxy)return l;if(h=Iu(),l.proxy=h,h.src=s,h.listener=l,s.addEventListener)_u||(T=P),T===void 0&&(T=!1),s.addEventListener(a.toString(),h,T);else if(s.attachEvent)s.attachEvent($s(a.toString()),h);else if(s.addListener&&s.removeListener)s.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Iu(){function s(l){return a.call(s.src,s.listener,l)}const a=Au;return s}function js(s,a,l,h,T){if(Array.isArray(a))for(var w=0;w<a.length;w++)js(s,a[w],l,h,T);else h=f(h)?!!h.capture:!!h,l=zs(l),s&&s[pn]?(s=s.i,a=String(a).toString(),a in s.g&&(w=s.g[a],l=gr(w,l,h,T),-1<l&&(mn(w[l]),Array.prototype.splice.call(w,l,1),w.length==0&&(delete s.g[a],s.h--)))):s&&(s=vr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=gr(a,l,h,T)),(l=-1<s?a[s]:null)&&Er(l))}function Er(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[pn])mr(a.i,s);else{var l=s.type,h=s.proxy;a.removeEventListener?a.removeEventListener(l,h,s.capture):a.detachEvent?a.detachEvent($s(l),h):a.addListener&&a.removeListener&&a.removeListener(h),(l=vr(a))?(mr(l,s),l.h==0&&(l.src=null,a[_r]=null)):mn(s)}}}function $s(s){return s in yr?yr[s]:yr[s]="on"+s}function Au(s,a){if(s.da)s=!0;else{a=new ke(a,this);var l=s.listener,h=s.ha||s.src;s.fa&&Er(s),s=l.call(h,a)}return s}function vr(s){return s=s[_r],s instanceof gn?s:null}var Tr="__closure_events_fn_"+(1e9*Math.random()>>>0);function zs(s){return typeof s=="function"?s:(s[Tr]||(s[Tr]=function(a){return s.handleEvent(a)}),s[Tr])}function ct(){xt.call(this),this.i=new gn(this),this.M=this,this.F=null}N(ct,xt),ct.prototype[pn]=!0,ct.prototype.removeEventListener=function(s,a,l,h){js(this,s,a,l,h)};function gt(s,a){var l,h=s.F;if(h)for(l=[];h;h=h.F)l.push(h);if(s=s.M,h=a.type||a,typeof a=="string")a=new lt(a,s);else if(a instanceof lt)a.target=a.target||s;else{var T=a;a=new lt(h,s),y(a,T)}if(T=!0,l)for(var w=l.length-1;0<=w;w--){var P=a.g=l[w];T=_n(P,h,!0,a)&&T}if(P=a.g=s,T=_n(P,h,!0,a)&&T,T=_n(P,h,!1,a)&&T,l)for(w=0;w<l.length;w++)P=a.g=l[w],T=_n(P,h,!1,a)&&T}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var l=s.g[a],h=0;h<l.length;h++)mn(l[h]);delete s.g[a],s.h--}}this.F=null},ct.prototype.K=function(s,a,l,h){return this.i.add(String(s),a,!1,l,h)},ct.prototype.L=function(s,a,l,h){return this.i.add(String(s),a,!0,l,h)};function _n(s,a,l,h){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,w=0;w<a.length;++w){var P=a[w];if(P&&!P.da&&P.capture==l){var z=P.listener,ot=P.ha||P.src;P.fa&&mr(s.i,P),T=z.call(ot,h)!==!1&&T}}return T&&!h.defaultPrevented}function Gs(s,a,l){if(typeof s=="function")l&&(s=R(s,l));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(s,a||0)}function Hs(s){s.g=Gs(()=>{s.g=null,s.i&&(s.i=!1,Hs(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class wu extends xt{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Hs(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Oe(s){xt.call(this),this.h=s,this.g={}}N(Oe,xt);var Ks=[];function Qs(s){it(s.g,function(a,l){this.g.hasOwnProperty(l)&&Er(a)},s),s.g={}}Oe.prototype.N=function(){Oe.aa.N.call(this),Qs(this)},Oe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ir=c.JSON.stringify,Ru=c.JSON.parse,Cu=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function Ar(){}Ar.prototype.h=null;function Ws(s){return s.h||(s.h=s.i())}function Ys(){}var xe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function wr(){lt.call(this,"d")}N(wr,lt);function Rr(){lt.call(this,"c")}N(Rr,lt);var Yt={},Xs=null;function yn(){return Xs=Xs||new ct}Yt.La="serverreachability";function Js(s){lt.call(this,Yt.La,s)}N(Js,lt);function Me(s){const a=yn();gt(a,new Js(a))}Yt.STAT_EVENT="statevent";function Zs(s,a){lt.call(this,Yt.STAT_EVENT,s),this.stat=a}N(Zs,lt);function _t(s){const a=yn();gt(a,new Zs(a,s))}Yt.Ma="timingevent";function ti(s,a){lt.call(this,Yt.Ma,s),this.size=a}N(ti,lt);function Le(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},a)}function Fe(){this.g=!0}Fe.prototype.xa=function(){this.g=!1};function Su(s,a,l,h,T,w){s.info(function(){if(s.g)if(w)for(var P="",z=w.split("&"),ot=0;ot<z.length;ot++){var $=z[ot].split("=");if(1<$.length){var ht=$[0];$=$[1];var dt=ht.split("_");P=2<=dt.length&&dt[1]=="type"?P+(ht+"="+$+"&"):P+(ht+"=redacted&")}}else P=null;else P=w;return"XMLHTTP REQ ("+h+") [attempt "+T+"]: "+a+`
`+l+`
`+P})}function Pu(s,a,l,h,T,w,P){s.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+T+"]: "+a+`
`+l+`
`+w+" "+P})}function oe(s,a,l,h){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+bu(s,l)+(h?" "+h:"")})}function Vu(s,a){s.info(function(){return"TIMEOUT: "+a})}Fe.prototype.info=function(){};function bu(s,a){if(!s.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var h=l[s];if(!(2>h.length)){var T=h[1];if(Array.isArray(T)&&!(1>T.length)){var w=T[0];if(w!="noop"&&w!="stop"&&w!="close")for(var P=1;P<T.length;P++)T[P]=""}}}}return Ir(l)}catch{return a}}var En={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ei={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cr;function vn(){}N(vn,Ar),vn.prototype.g=function(){return new XMLHttpRequest},vn.prototype.i=function(){return{}},Cr=new vn;function Mt(s,a,l,h){this.j=s,this.i=a,this.l=l,this.R=h||1,this.U=new Oe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ni}function ni(){this.i=null,this.g="",this.h=!1}var ri={},Sr={};function Pr(s,a,l){s.L=1,s.v=wn(bt(a)),s.m=l,s.P=!0,si(s,null)}function si(s,a){s.F=Date.now(),Tn(s),s.A=bt(s.v);var l=s.A,h=s.R;Array.isArray(h)||(h=[String(h)]),yi(l.i,"t",h),s.C=0,l=s.j.J,s.h=new ni,s.g=Mi(s.j,l?a:null,!s.m),0<s.O&&(s.M=new wu(R(s.Y,s,s.g),s.O)),a=s.U,l=s.g,h=s.ca;var T="readystatechange";Array.isArray(T)||(T&&(Ks[0]=T.toString()),T=Ks);for(var w=0;w<T.length;w++){var P=qs(l,T[w],h||a.handleEvent,!1,a.h||a);if(!P)break;a.g[P.key]=P}a=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),Me(),Su(s.i,s.u,s.A,s.l,s.R,s.m)}Mt.prototype.ca=function(s){s=s.target;const a=this.M;a&&Dt(s)==3?a.j():this.Y(s)},Mt.prototype.Y=function(s){try{if(s==this.g)t:{const dt=Dt(this.g);var a=this.g.Ba();const le=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||Ri(this.g)))){this.J||dt!=4||a==7||(a==8||0>=le?Me(3):Me(2)),Vr(this);var l=this.g.Z();this.X=l;e:if(ii(this)){var h=Ri(this.g);s="";var T=h.length,w=Dt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xt(this),Ue(this);var P="";break e}this.h.i=new c.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,s+=this.h.i.decode(h[a],{stream:!(w&&a==T-1)});h.length=0,this.h.g+=s,this.C=0,P=this.h.g}else P=this.g.oa();if(this.o=l==200,Pu(this.i,this.u,this.A,this.l,this.R,dt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var z,ot=this.g;if((z=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(z)){var $=z;break e}}$=null}if(l=$)oe(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,br(this,l);else{this.o=!1,this.s=3,_t(12),Xt(this),Ue(this);break t}}if(this.P){l=!0;let It;for(;!this.J&&this.C<P.length;)if(It=Du(this,P),It==Sr){dt==4&&(this.s=4,_t(14),l=!1),oe(this.i,this.l,null,"[Incomplete Response]");break}else if(It==ri){this.s=4,_t(15),oe(this.i,this.l,P,"[Invalid Chunk]"),l=!1;break}else oe(this.i,this.l,It,null),br(this,It);if(ii(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||P.length!=0||this.h.h||(this.s=1,_t(16),l=!1),this.o=this.o&&l,!l)oe(this.i,this.l,P,"[Invalid Chunked Response]"),Xt(this),Ue(this);else if(0<P.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+P.length),Mr(ht),ht.M=!0,_t(11))}}else oe(this.i,this.l,P,null),br(this,P);dt==4&&Xt(this),this.o&&!this.J&&(dt==4?Ni(this.j,this):(this.o=!1,Tn(this)))}else Qu(this.g),l==400&&0<P.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),Xt(this),Ue(this)}}}catch{}finally{}};function ii(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Du(s,a){var l=s.C,h=a.indexOf(`
`,l);return h==-1?Sr:(l=Number(a.substring(l,h)),isNaN(l)?ri:(h+=1,h+l>a.length?Sr:(a=a.slice(h,h+l),s.C=h+l,a)))}Mt.prototype.cancel=function(){this.J=!0,Xt(this)};function Tn(s){s.S=Date.now()+s.I,oi(s,s.I)}function oi(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Le(R(s.ba,s),a)}function Vr(s){s.B&&(c.clearTimeout(s.B),s.B=null)}Mt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Vu(this.i,this.A),this.L!=2&&(Me(),_t(17)),Xt(this),this.s=2,Ue(this)):oi(this,this.S-s)};function Ue(s){s.j.G==0||s.J||Ni(s.j,s)}function Xt(s){Vr(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,Qs(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function br(s,a){try{var l=s.j;if(l.G!=0&&(l.g==s||Dr(l.h,s))){if(!s.K&&Dr(l.h,s)&&l.G==3){try{var h=l.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var T=h;if(T[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)bn(l),Pn(l);else break t;xr(l),_t(18)}}else l.za=T[1],0<l.za-l.T&&37500>T[2]&&l.F&&l.v==0&&!l.C&&(l.C=Le(R(l.Za,l),6e3));if(1>=li(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Zt(l,11)}else if((s.K||l.g==s)&&bn(l),!K(a))for(T=l.Da.g.parse(a),a=0;a<T.length;a++){let $=T[a];if(l.T=$[0],$=$[1],l.G==2)if($[0]=="c"){l.K=$[1],l.ia=$[2];const ht=$[3];ht!=null&&(l.la=ht,l.j.info("VER="+l.la));const dt=$[4];dt!=null&&(l.Aa=dt,l.j.info("SVER="+l.Aa));const le=$[5];le!=null&&typeof le=="number"&&0<le&&(h=1.5*le,l.L=h,l.j.info("backChannelRequestTimeoutMs_="+h)),h=l;const It=s.g;if(It){const Nn=It.g?It.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Nn){var w=h.h;w.g||Nn.indexOf("spdy")==-1&&Nn.indexOf("quic")==-1&&Nn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Nr(w,w.h),w.h=null))}if(h.D){const Lr=It.g?It.g.getResponseHeader("X-HTTP-Session-Id"):null;Lr&&(h.ya=Lr,G(h.I,h.D,Lr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),h=l;var P=s;if(h.qa=xi(h,h.J?h.ia:null,h.W),P.K){ci(h.h,P);var z=P,ot=h.L;ot&&(z.I=ot),z.B&&(Vr(z),Tn(z)),h.g=P}else bi(h);0<l.i.length&&Vn(l)}else $[0]!="stop"&&$[0]!="close"||Zt(l,7);else l.G==3&&($[0]=="stop"||$[0]=="close"?$[0]=="stop"?Zt(l,7):Or(l):$[0]!="noop"&&l.l&&l.l.ta($),l.v=0)}}Me(4)}catch{}}var Nu=class{constructor(s,a){this.g=s,this.map=a}};function ai(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ui(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function li(s){return s.h?1:s.g?s.g.size:0}function Dr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Nr(s,a){s.g?s.g.add(a):s.h=a}function ci(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}ai.prototype.cancel=function(){if(this.i=hi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function hi(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const l of s.g.values())a=a.concat(l.D);return a}return x(s.i)}function ku(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(d(s)){for(var a=[],l=s.length,h=0;h<l;h++)a.push(s[h]);return a}a=[],l=0;for(h in s)a[l++]=s[h];return a}function Ou(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(d(s)||typeof s=="string"){var a=[];s=s.length;for(var l=0;l<s;l++)a.push(l);return a}a=[],l=0;for(const h in s)a[l++]=h;return a}}}function di(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(d(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var l=Ou(s),h=ku(s),T=h.length,w=0;w<T;w++)a.call(void 0,h[w],l&&l[w],s)}var fi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xu(s,a){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var h=s[l].indexOf("="),T=null;if(0<=h){var w=s[l].substring(0,h);T=s[l].substring(h+1)}else w=s[l];a(w,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Jt(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Jt){this.h=s.h,In(this,s.j),this.o=s.o,this.g=s.g,An(this,s.s),this.l=s.l;var a=s.i,l=new je;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),pi(this,l),this.m=s.m}else s&&(a=String(s).match(fi))?(this.h=!1,In(this,a[1]||"",!0),this.o=Be(a[2]||""),this.g=Be(a[3]||"",!0),An(this,a[4]),this.l=Be(a[5]||"",!0),pi(this,a[6]||"",!0),this.m=Be(a[7]||"")):(this.h=!1,this.i=new je(null,this.h))}Jt.prototype.toString=function(){var s=[],a=this.j;a&&s.push(qe(a,mi,!0),":");var l=this.g;return(l||a=="file")&&(s.push("//"),(a=this.o)&&s.push(qe(a,mi,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(qe(l,l.charAt(0)=="/"?Fu:Lu,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",qe(l,Bu)),s.join("")};function bt(s){return new Jt(s)}function In(s,a,l){s.j=l?Be(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function An(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function pi(s,a,l){a instanceof je?(s.i=a,qu(s.i,s.h)):(l||(a=qe(a,Uu)),s.i=new je(a,s.h))}function G(s,a,l){s.i.set(a,l)}function wn(s){return G(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Be(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function qe(s,a,l){return typeof s=="string"?(s=encodeURI(s).replace(a,Mu),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Mu(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var mi=/[#\/\?@]/g,Lu=/[#\?:]/g,Fu=/[#\?]/g,Uu=/[#\?@]/g,Bu=/#/g;function je(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Lt(s){s.g||(s.g=new Map,s.h=0,s.i&&xu(s.i,function(a,l){s.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}r=je.prototype,r.add=function(s,a){Lt(this),this.i=null,s=ae(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(a),this.h+=1,this};function gi(s,a){Lt(s),a=ae(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function _i(s,a){return Lt(s),a=ae(s,a),s.g.has(a)}r.forEach=function(s,a){Lt(this),this.g.forEach(function(l,h){l.forEach(function(T){s.call(a,T,h,this)},this)},this)},r.na=function(){Lt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let h=0;h<a.length;h++){const T=s[h];for(let w=0;w<T.length;w++)l.push(a[h])}return l},r.V=function(s){Lt(this);let a=[];if(typeof s=="string")_i(this,s)&&(a=a.concat(this.g.get(ae(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)a=a.concat(s[l])}return a},r.set=function(s,a){return Lt(this),this.i=null,s=ae(this,s),_i(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},r.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function yi(s,a,l){gi(s,a),0<l.length&&(s.i=null,s.g.set(ae(s,a),x(l)),s.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var h=a[l];const w=encodeURIComponent(String(h)),P=this.V(h);for(h=0;h<P.length;h++){var T=w;P[h]!==""&&(T+="="+encodeURIComponent(String(P[h]))),s.push(T)}}return this.i=s.join("&")};function ae(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function qu(s,a){a&&!s.j&&(Lt(s),s.i=null,s.g.forEach(function(l,h){var T=h.toLowerCase();h!=T&&(gi(this,h),yi(this,T,l))},s)),s.j=a}function ju(s,a){const l=new Fe;if(c.Image){const h=new Image;h.onload=S(Ft,l,"TestLoadImage: loaded",!0,a,h),h.onerror=S(Ft,l,"TestLoadImage: error",!1,a,h),h.onabort=S(Ft,l,"TestLoadImage: abort",!1,a,h),h.ontimeout=S(Ft,l,"TestLoadImage: timeout",!1,a,h),c.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=s}else a(!1)}function $u(s,a){const l=new Fe,h=new AbortController,T=setTimeout(()=>{h.abort(),Ft(l,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:h.signal}).then(w=>{clearTimeout(T),w.ok?Ft(l,"TestPingServer: ok",!0,a):Ft(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),Ft(l,"TestPingServer: error",!1,a)})}function Ft(s,a,l,h,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),h(l)}catch{}}function zu(){this.g=new Cu}function Gu(s,a,l){const h=l||"";try{di(s,function(T,w){let P=T;f(T)&&(P=Ir(T)),a.push(h+w+"="+encodeURIComponent(P))})}catch(T){throw a.push(h+"type="+encodeURIComponent("_badmap")),T}}function Rn(s){this.l=s.Ub||null,this.j=s.eb||!1}N(Rn,Ar),Rn.prototype.g=function(){return new Cn(this.l,this.j)},Rn.prototype.i=function(s){return function(){return s}}({});function Cn(s,a){ct.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Cn,ct),r=Cn.prototype,r.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,ze(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$e(this)),this.readyState=0},r.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,ze(this)),this.g&&(this.readyState=3,ze(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ei(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ei(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}r.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?$e(this):ze(this),this.readyState==3&&Ei(this)}},r.Ra=function(s){this.g&&(this.response=this.responseText=s,$e(this))},r.Qa=function(s){this.g&&(this.response=s,$e(this))},r.ga=function(){this.g&&$e(this)};function $e(s){s.readyState=4,s.l=null,s.j=null,s.v=null,ze(s)}r.setRequestHeader=function(s,a){this.u.append(s,a)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=a.next();return s.join(`\r
`)};function ze(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Cn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function vi(s){let a="";return it(s,function(l,h){a+=h,a+=":",a+=l,a+=`\r
`}),a}function kr(s,a,l){t:{for(h in l){var h=!1;break t}h=!0}h||(l=vi(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):G(s,a,l))}function W(s){ct.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(W,ct);var Hu=/^https?$/i,Ku=["POST","PUT"];r=W.prototype,r.Ha=function(s){this.J=s},r.ea=function(s,a,l,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cr.g(),this.v=this.o?Ws(this.o):Ws(Cr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(w){Ti(this,w);return}if(s=l||"",l=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var T in h)l.set(T,h[T]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const w of h.keys())l.set(w,h.get(w));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(l.keys()).find(w=>w.toLowerCase()=="content-type"),T=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Ku,a,void 0))||h||T||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,P]of l)this.g.setRequestHeader(w,P);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wi(this),this.u=!0,this.g.send(s),this.u=!1}catch(w){Ti(this,w)}};function Ti(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,Ii(s),Sn(s)}function Ii(s){s.A||(s.A=!0,gt(s,"complete"),gt(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,gt(this,"complete"),gt(this,"abort"),Sn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Sn(this,!0)),W.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Ai(this):this.bb())},r.bb=function(){Ai(this)};function Ai(s){if(s.h&&typeof u<"u"&&(!s.v[1]||Dt(s)!=4||s.Z()!=2)){if(s.u&&Dt(s)==4)Gs(s.Ea,0,s);else if(gt(s,"readystatechange"),Dt(s)==4){s.h=!1;try{const P=s.Z();t:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var h;if(h=P===0){var T=String(s.D).match(fi)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),h=!Hu.test(T?T.toLowerCase():"")}l=h}if(l)gt(s,"complete"),gt(s,"success");else{s.m=6;try{var w=2<Dt(s)?s.g.statusText:""}catch{w=""}s.l=w+" ["+s.Z()+"]",Ii(s)}}finally{Sn(s)}}}}function Sn(s,a){if(s.g){wi(s);const l=s.g,h=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||gt(s,"ready");try{l.onreadystatechange=h}catch{}}}function wi(s){s.I&&(c.clearTimeout(s.I),s.I=null)}r.isActive=function(){return!!this.g};function Dt(s){return s.g?s.g.readyState:0}r.Z=function(){try{return 2<Dt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Ru(a)}};function Ri(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Qu(s){const a={};s=(s.g&&2<=Dt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<s.length;h++){if(K(s[h]))continue;var l=E(s[h]);const T=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const w=a[T]||[];a[T]=w,w.push(l)}v(a,function(h){return h.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ge(s,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||a}function Ci(s){this.Aa=0,this.i=[],this.j=new Fe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ge("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ge("baseRetryDelayMs",5e3,s),this.cb=Ge("retryDelaySeedMs",1e4,s),this.Wa=Ge("forwardChannelMaxRetries",2,s),this.wa=Ge("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new ai(s&&s.concurrentRequestLimit),this.Da=new zu,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Ci.prototype,r.la=8,r.G=1,r.connect=function(s,a,l,h){_t(0),this.W=s,this.H=a||{},l&&h!==void 0&&(this.H.OSID=l,this.H.OAID=h),this.F=this.X,this.I=xi(this,null,this.W),Vn(this)};function Or(s){if(Si(s),s.G==3){var a=s.U++,l=bt(s.I);if(G(l,"SID",s.K),G(l,"RID",a),G(l,"TYPE","terminate"),He(s,l),a=new Mt(s,s.j,a),a.L=2,a.v=wn(bt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=Mi(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Tn(a)}Oi(s)}function Pn(s){s.g&&(Mr(s),s.g.cancel(),s.g=null)}function Si(s){Pn(s),s.u&&(c.clearTimeout(s.u),s.u=null),bn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function Vn(s){if(!ui(s.h)&&!s.s){s.s=!0;var a=s.Ga;De||Bs(),Ne||(De(),Ne=!0),pr.add(a,s),s.B=0}}function Wu(s,a){return li(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Le(R(s.Ga,s,a),ki(s,s.B)),s.B++,!0)}r.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const T=new Mt(this,this.j,s);let w=this.o;if(this.S&&(w?(w=p(w),y(w,this.S)):w=this.S),this.m!==null||this.O||(T.H=w,w=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var h=this.i[l];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=Vi(this,T,a),l=bt(this.I),G(l,"RID",s),G(l,"CVER",22),this.D&&G(l,"X-HTTP-Session-Id",this.D),He(this,l),w&&(this.O?a="headers="+encodeURIComponent(String(vi(w)))+"&"+a:this.m&&kr(l,this.m,w)),Nr(this.h,T),this.Ua&&G(l,"TYPE","init"),this.P?(G(l,"$req",a),G(l,"SID","null"),T.T=!0,Pr(T,l,null)):Pr(T,l,a),this.G=2}}else this.G==3&&(s?Pi(this,s):this.i.length==0||ui(this.h)||Pi(this))};function Pi(s,a){var l;a?l=a.l:l=s.U++;const h=bt(s.I);G(h,"SID",s.K),G(h,"RID",l),G(h,"AID",s.T),He(s,h),s.m&&s.o&&kr(h,s.m,s.o),l=new Mt(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),a&&(s.i=a.D.concat(s.i)),a=Vi(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Nr(s.h,l),Pr(l,h,a)}function He(s,a){s.H&&it(s.H,function(l,h){G(a,h,l)}),s.l&&di({},function(l,h){G(a,h,l)})}function Vi(s,a,l){l=Math.min(s.i.length,l);var h=s.l?R(s.l.Na,s.l,s):null;t:{var T=s.i;let w=-1;for(;;){const P=["count="+l];w==-1?0<l?(w=T[0].g,P.push("ofs="+w)):w=0:P.push("ofs="+w);let z=!0;for(let ot=0;ot<l;ot++){let $=T[ot].g;const ht=T[ot].map;if($-=w,0>$)w=Math.max(0,T[ot].g-100),z=!1;else try{Gu(ht,P,"req"+$+"_")}catch{h&&h(ht)}}if(z){h=P.join("&");break t}}}return s=s.i.splice(0,l),a.D=s,h}function bi(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;De||Bs(),Ne||(De(),Ne=!0),pr.add(a,s),s.v=0}}function xr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Le(R(s.Fa,s),ki(s,s.v)),s.v++,!0)}r.Fa=function(){if(this.u=null,Di(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Le(R(this.ab,this),s)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),Pn(this),Di(this))};function Mr(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function Di(s){s.g=new Mt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=bt(s.qa);G(a,"RID","rpc"),G(a,"SID",s.K),G(a,"AID",s.T),G(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&G(a,"TO",s.ja),G(a,"TYPE","xmlhttp"),He(s,a),s.m&&s.o&&kr(a,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=wn(bt(a)),l.m=null,l.P=!0,si(l,s)}r.Za=function(){this.C!=null&&(this.C=null,Pn(this),xr(this),_t(19))};function bn(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function Ni(s,a){var l=null;if(s.g==a){bn(s),Mr(s),s.g=null;var h=2}else if(Dr(s.h,a))l=a.D,ci(s.h,a),h=1;else return;if(s.G!=0){if(a.o)if(h==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var T=s.B;h=yn(),gt(h,new ti(h,l)),Vn(s)}else bi(s);else if(T=a.s,T==3||T==0&&0<a.X||!(h==1&&Wu(s,a)||h==2&&xr(s)))switch(l&&0<l.length&&(a=s.h,a.i=a.i.concat(l)),T){case 1:Zt(s,5);break;case 4:Zt(s,10);break;case 3:Zt(s,6);break;default:Zt(s,2)}}}function ki(s,a){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*a}function Zt(s,a){if(s.j.info("Error code "+a),a==2){var l=R(s.fb,s),h=s.Xa;const T=!h;h=new Jt(h||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||In(h,"https"),wn(h),T?ju(h.toString(),l):$u(h.toString(),l)}else _t(2);s.G=0,s.l&&s.l.sa(a),Oi(s),Si(s)}r.fb=function(s){s?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function Oi(s){if(s.G=0,s.ka=[],s.l){const a=hi(s.h);(a.length!=0||s.i.length!=0)&&(D(s.ka,a),D(s.ka,s.i),s.h.i.length=0,x(s.i),s.i.length=0),s.l.ra()}}function xi(s,a,l){var h=l instanceof Jt?bt(l):new Jt(l);if(h.g!="")a&&(h.g=a+"."+h.g),An(h,h.s);else{var T=c.location;h=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var w=new Jt(null);h&&In(w,h),a&&(w.g=a),T&&An(w,T),l&&(w.l=l),h=w}return l=s.D,a=s.ya,l&&a&&G(h,l,a),G(h,"VER",s.la),He(s,h),h}function Mi(s,a,l){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new W(new Rn({eb:l})):new W(s.pa),a.Ha(s.J),a}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Li(){}r=Li.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Dn(){}Dn.prototype.g=function(s,a){return new Tt(s,a)};function Tt(s,a){ct.call(this),this.g=new Ci(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!K(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!K(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new ue(this)}N(Tt,ct),Tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){Or(this.g)},Tt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=Ir(s),s=l);a.i.push(new Nu(a.Ya++,s)),a.G==3&&Vn(a)},Tt.prototype.N=function(){this.g.l=null,delete this.j,Or(this.g),delete this.g,Tt.aa.N.call(this)};function Fi(s){wr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const l in a){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}N(Fi,wr);function Ui(){Rr.call(this),this.status=1}N(Ui,Rr);function ue(s){this.g=s}N(ue,Li),ue.prototype.ua=function(){gt(this.g,"a")},ue.prototype.ta=function(s){gt(this.g,new Fi(s))},ue.prototype.sa=function(s){gt(this.g,new Ui)},ue.prototype.ra=function(){gt(this.g,"b")},Dn.prototype.createWebChannel=Dn.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,ha=function(){return new Dn},ca=function(){return yn()},la=Yt,Jr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},En.NO_ERROR=0,En.TIMEOUT=8,En.HTTP_ERROR=6,Un=En,ei.COMPLETE="complete",ua=ei,Ys.EventType=xe,xe.OPEN="a",xe.CLOSE="b",xe.ERROR="c",xe.MESSAGE="d",ct.prototype.listen=ct.prototype.K,Ye=Ys,W.prototype.listenOnce=W.prototype.L,W.prototype.getLastError=W.prototype.Ka,W.prototype.getLastErrorCode=W.prototype.Ba,W.prototype.getStatus=W.prototype.Z,W.prototype.getResponseJson=W.prototype.Oa,W.prototype.getResponseText=W.prototype.oa,W.prototype.send=W.prototype.ea,W.prototype.setWithCredentials=W.prototype.Ha,aa=W}).apply(typeof kn<"u"?kn:typeof self<"u"?self:typeof window<"u"?window:{});const Ji="@firebase/firestore",Zi="4.7.11";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ce="11.6.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se=new ta("@firebase/firestore");function ce(){return se.logLevel}function b(r,...t){if(se.logLevel<=B.DEBUG){const e=t.map(Es);se.debug(`Firestore (${Ce}): ${r}`,...e)}}function Ot(r,...t){if(se.logLevel<=B.ERROR){const e=t.map(Es);se.error(`Firestore (${Ce}): ${r}`,...e)}}function ye(r,...t){if(se.logLevel<=B.WARN){const e=t.map(Es);se.warn(`Firestore (${Ce}): ${r}`,...e)}}function Es(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,da(r,n,e)}function da(r,t,e){let n=`FIRESTORE (${Ce}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw Ot(n),new Error(n)}function Q(r,t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,r||da(t,i,n)}function q(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends Re{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Oc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(pt.UNAUTHENTICATED))}shutdown(){}}class xc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Mc{constructor(t){this.t=t,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Q(this.o===void 0,42304);let n=this.i;const i=d=>this.i!==n?(n=this.i,e(d)):Promise.resolve();let o=new ne;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ne,t.enqueueRetryable(()=>i(this.currentUser))};const u=()=>{const d=o;t.enqueueRetryable(async()=>{await d.promise,await i(this.currentUser)})},c=d=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(d=>c(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?c(d):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ne)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Q(typeof n.accessToken=="string",31837,{l:n}),new fa(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Q(t===null||typeof t=="string",2055,{h:t}),new pt(t)}}class Lc{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Fc{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new Lc(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class to{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Uc{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,_c(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){Q(this.o===void 0,3512);const n=o=>{o.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.m;return this.m=o.token,b("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const i=o=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new to(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Q(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new to(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=Bc(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%62))}return n}}function F(r,t){return r<t?-1:r>t?1:0}function Zr(r,t){let e=0;for(;e<r.length&&e<t.length;){const n=r.codePointAt(e),i=t.codePointAt(e);if(n!==i){if(n<128&&i<128)return F(n,i);{const o=pa(),u=jc(o.encode(eo(r,e)),o.encode(eo(t,e)));return u!==0?u:F(n,i)}}e+=n>65535?2:1}return F(r.length,t.length)}function eo(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function jc(r,t){for(let e=0;e<r.length&&e<t.length;++e)if(r[e]!==t[e])return F(r[e],t[e]);return F(r.length,t.length)}function Ee(r,t,e){return r.length===t.length&&r.every((n,i)=>e(n,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=-62135596800,ro=1e6;class vt{static now(){return vt.fromMillis(Date.now())}static fromDate(t){return vt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*ro);return new vt(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<no)throw new k(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ro}_compareTo(t){return this.seconds===t.seconds?F(this.nanoseconds,t.nanoseconds):F(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-no;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{static fromTimestamp(t){return new M(t)}static min(){return new M(new vt(0,0))}static max(){return new M(new vt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so="__name__";class At{constructor(t,e,n){e===void 0?e=0:e>t.length&&L(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&L(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return At.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof At?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=At.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return F(t.length,e.length)}static compareSegments(t,e){const n=At.isNumericId(t),i=At.isNumericId(e);return n&&!i?-1:!n&&i?1:n&&i?At.extractNumericId(t).compare(At.extractNumericId(e)):Zr(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return $t.fromString(t.substring(4,t.length-2))}}class Y extends At{construct(t,e,n){return new Y(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new k(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(i=>i.length>0))}return new Y(e)}static emptyPath(){return new Y([])}}const $c=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends At{construct(t,e,n){return new yt(t,e,n)}static isValidIdentifier(t){return $c.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===so}static keyField(){return new yt([so])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new k(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let u=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new k(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[i+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new k(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=d,i+=2}else c==="`"?(u=!u,i++):c!=="."||u?(n+=c,i++):(o(),i++)}if(o(),u)throw new k(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new yt(e)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(Y.fromString(t))}static fromName(t){return new O(Y.fromString(t).popFirst(5))}static empty(){return new O(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new Y(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=-1;function zc(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=M.fromTimestamp(n===1e9?new vt(e+1,0):new vt(e,n));return new zt(i,O.empty(),t)}function Gc(r){return new zt(r.readTime,r.key,on)}class zt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new zt(M.min(),O.empty(),on)}static max(){return new zt(M.max(),O.empty(),on)}}function Hc(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(r.documentKey,t.documentKey),e!==0?e:F(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nr(r){if(r.code!==V.FAILED_PRECONDITION||r.message!==Kc)throw r;b("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,n)=>{e(t)})}static reject(t){return new C((e,n)=>{n(t)})}static waitFor(t){return new C((e,n)=>{let i=0,o=0,u=!1;t.forEach(c=>{++i,c.next(()=>{++o,u&&o===i&&e()},d=>n(d))}),u=!0,o===i&&e()})}static or(t){let e=C.resolve(!1);for(const n of t)e=e.next(i=>i?C.resolve(i):n());return e}static forEach(t,e){const n=[];return t.forEach((i,o)=>{n.push(e.call(this,i,o))}),this.waitFor(n)}static mapArray(t,e){return new C((n,i)=>{const o=t.length,u=new Array(o);let c=0;for(let d=0;d<o;d++){const f=d;e(t[f]).next(_=>{u[f]=_,++c,c===o&&n(u)},_=>i(_))}})}static doWhile(t,e){return new C((n,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):n()};o()})}}function Wc(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Se(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ue(n),this.ce=n=>e.writeSequenceNumber(n))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}rr.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc=-1;function sr(r){return r==null}function ts(r){return r===0&&1/r==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma="";function Xc(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=io(t)),t=Jc(r.get(e),t);return io(t)}function Jc(r,t){let e=t;const n=r.length;for(let i=0;i<n;i++){const o=r.charAt(i);switch(o){case"\0":e+="";break;case ma:e+="";break;default:e+=o}}return e}function io(r){return r+ma+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function cn(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Zc(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,e){this.comparator=t,this.root=e||at.EMPTY}insert(t,e){return new Z(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,at.BLACK,null,null))}remove(t){return new Z(this.comparator,this.root.remove(t,this.comparator).copy(null,null,at.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new On(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new On(this.root,t,this.comparator,!1)}getReverseIterator(){return new On(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new On(this.root,t,this.comparator,!0)}}class On{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class at{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??at.RED,this.left=i??at.EMPTY,this.right=o??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new at(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return at.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw L(43730,{key:this.key,value:this.value});if(this.right.isRed())throw L(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw L(27949);return t+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw L(57766)}get value(){throw L(16141)}get color(){throw L(16727)}get left(){throw L(29726)}get right(){throw L(36894)}copy(t,e,n,i,o){return this}insert(t,e,n){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.comparator=t,this.data=new Z(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ao(this.data.getIterator())}getIteratorFrom(t){return new ao(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof nt)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new nt(this.comparator);return e.data=t,e}}class ao{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(t){this.fields=t,t.sort(yt.comparator)}static empty(){return new Ut([])}unionWith(t){let e=new nt(yt.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Ut(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ee(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ga("Invalid base64 string: "+o):o}}(t);return new ut(e)}static fromUint8Array(t){const e=function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o}(t);return new ut(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return F(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const th=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gt(r){if(Q(!!r,39018),typeof r=="string"){let t=0;const e=th.exec(r);if(Q(!!e,46558,{timestamp:r}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:J(r.seconds),nanos:J(r.nanos)}}function J(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ht(r){return typeof r=="string"?ut.fromBase64String(r):ut.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a="server_timestamp",ya="__type__",Ea="__previous_value__",va="__local_write_time__";function vs(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[ya])===null||e===void 0?void 0:e.stringValue)===_a}function ir(r){const t=r.mapValue.fields[Ea];return vs(t)?ir(t):t}function an(r){const t=Gt(r.mapValue.fields[va].timestampValue);return new vt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(t,e,n,i,o,u,c,d,f){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=d,this.useFetchStreams=f}}const Qn="(default)";class un{constructor(t,e){this.projectId=t,this.database=e||Qn}static empty(){return new un("","")}get isDefaultDatabase(){return this.database===Qn}isEqual(t){return t instanceof un&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh="__type__",rh="__max__",xn={mapValue:{}},sh="__vector__",es="value";function Kt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?vs(r)?4:oh(r)?9007199254740991:ih(r)?10:11:L(28295,{value:r})}function Ct(r,t){if(r===t)return!0;const e=Kt(r);if(e!==Kt(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return an(r).isEqual(an(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=Gt(i.timestampValue),c=Gt(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(i,o){return Ht(i.bytesValue).isEqual(Ht(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(i,o){return J(i.geoPointValue.latitude)===J(o.geoPointValue.latitude)&&J(i.geoPointValue.longitude)===J(o.geoPointValue.longitude)}(r,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return J(i.integerValue)===J(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=J(i.doubleValue),c=J(o.doubleValue);return u===c?ts(u)===ts(c):isNaN(u)&&isNaN(c)}return!1}(r,t);case 9:return Ee(r.arrayValue.values||[],t.arrayValue.values||[],Ct);case 10:case 11:return function(i,o){const u=i.mapValue.fields||{},c=o.mapValue.fields||{};if(oo(u)!==oo(c))return!1;for(const d in u)if(u.hasOwnProperty(d)&&(c[d]===void 0||!Ct(u[d],c[d])))return!1;return!0}(r,t);default:return L(52216,{left:r})}}function ln(r,t){return(r.values||[]).find(e=>Ct(e,t))!==void 0}function ve(r,t){if(r===t)return 0;const e=Kt(r),n=Kt(t);if(e!==n)return F(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return F(r.booleanValue,t.booleanValue);case 2:return function(o,u){const c=J(o.integerValue||o.doubleValue),d=J(u.integerValue||u.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1}(r,t);case 3:return uo(r.timestampValue,t.timestampValue);case 4:return uo(an(r),an(t));case 5:return Zr(r.stringValue,t.stringValue);case 6:return function(o,u){const c=Ht(o),d=Ht(u);return c.compareTo(d)}(r.bytesValue,t.bytesValue);case 7:return function(o,u){const c=o.split("/"),d=u.split("/");for(let f=0;f<c.length&&f<d.length;f++){const _=F(c[f],d[f]);if(_!==0)return _}return F(c.length,d.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,u){const c=F(J(o.latitude),J(u.latitude));return c!==0?c:F(J(o.longitude),J(u.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return lo(r.arrayValue,t.arrayValue);case 10:return function(o,u){var c,d,f,_;const I=o.fields||{},R=u.fields||{},S=(c=I[es])===null||c===void 0?void 0:c.arrayValue,N=(d=R[es])===null||d===void 0?void 0:d.arrayValue,x=F(((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0,((_=N==null?void 0:N.values)===null||_===void 0?void 0:_.length)||0);return x!==0?x:lo(S,N)}(r.mapValue,t.mapValue);case 11:return function(o,u){if(o===xn.mapValue&&u===xn.mapValue)return 0;if(o===xn.mapValue)return 1;if(u===xn.mapValue)return-1;const c=o.fields||{},d=Object.keys(c),f=u.fields||{},_=Object.keys(f);d.sort(),_.sort();for(let I=0;I<d.length&&I<_.length;++I){const R=Zr(d[I],_[I]);if(R!==0)return R;const S=ve(c[d[I]],f[_[I]]);if(S!==0)return S}return F(d.length,_.length)}(r.mapValue,t.mapValue);default:throw L(23264,{Pe:e})}}function uo(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return F(r,t);const e=Gt(r),n=Gt(t),i=F(e.seconds,n.seconds);return i!==0?i:F(e.nanos,n.nanos)}function lo(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const o=ve(e[i],n[i]);if(o)return o}return F(e.length,n.length)}function Te(r){return ns(r)}function ns(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=Gt(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return Ht(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return O.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=ns(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of n)o?o=!1:i+=",",i+=`${u}:${ns(e.fields[u])}`;return i+"}"}(r.mapValue):L(61005,{value:r})}function Bn(r){switch(Kt(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ir(r);return t?16+Bn(t):16;case 5:return 2*r.stringValue.length;case 6:return Ht(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,o)=>i+Bn(o),0)}(r.arrayValue);case 10:case 11:return function(n){let i=0;return cn(n.fields,(o,u)=>{i+=o.length+Bn(u)}),i}(r.mapValue);default:throw L(13486,{value:r})}}function rs(r){return!!r&&"integerValue"in r}function Ts(r){return!!r&&"arrayValue"in r}function co(r){return!!r&&"nullValue"in r}function ho(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function jr(r){return!!r&&"mapValue"in r}function ih(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[nh])===null||e===void 0?void 0:e.stringValue)===sh}function Ze(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return cn(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Ze(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ze(r.arrayValue.values[e]);return t}return Object.assign({},r)}function oh(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===rh}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!jr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ze(e)}setAll(t){let e=yt.emptyPath(),n={},i=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const d=this.getFieldsMap(e);this.applyChanges(d,n,i),n={},i=[],e=c.popLast()}u?n[c.lastSegment()]=Ze(u):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());jr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ct(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];jr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){cn(e,(i,o)=>t[i]=o);for(const i of n)delete t[i]}clone(){return new wt(Ze(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t,e,n,i,o,u,c){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new mt(t,0,M.min(),M.min(),M.min(),wt.empty(),0)}static newFoundDocument(t,e,n,i){return new mt(t,1,e,M.min(),n,i,0)}static newNoDocument(t,e){return new mt(t,2,e,M.min(),M.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new mt(t,3,e,M.min(),M.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(M.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=M.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof mt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(t,e){this.position=t,this.inclusive=e}}function fo(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],u=r.position[i];if(o.field.isKeyField()?n=O.comparator(O.fromName(u.referenceValue),e.key):n=ve(u,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function po(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Ct(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(t,e="asc"){this.field=t,this.dir=e}}function ah(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{}class et extends Ta{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new lh(t,e,n):e==="array-contains"?new dh(t,n):e==="in"?new fh(t,n):e==="not-in"?new ph(t,n):e==="array-contains-any"?new mh(t,n):new et(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new ch(t,n):new hh(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(ve(e,this.value)):e!==null&&Kt(this.value)===Kt(e)&&this.matchesComparison(ve(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class St extends Ta{constructor(t,e){super(),this.filters=t,this.op=e,this.Te=null}static create(t,e){return new St(t,e)}matches(t){return Ia(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Ia(r){return r.op==="and"}function Aa(r){return uh(r)&&Ia(r)}function uh(r){for(const t of r.filters)if(t instanceof St)return!1;return!0}function ss(r){if(r instanceof et)return r.field.canonicalString()+r.op.toString()+Te(r.value);if(Aa(r))return r.filters.map(t=>ss(t)).join(",");{const t=r.filters.map(e=>ss(e)).join(",");return`${r.op}(${t})`}}function wa(r,t){return r instanceof et?function(n,i){return i instanceof et&&n.op===i.op&&n.field.isEqual(i.field)&&Ct(n.value,i.value)}(r,t):r instanceof St?function(n,i){return i instanceof St&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,u,c)=>o&&wa(u,i.filters[c]),!0):!1}(r,t):void L(19439)}function Ra(r){return r instanceof et?function(e){return`${e.field.canonicalString()} ${e.op} ${Te(e.value)}`}(r):r instanceof St?function(e){return e.op.toString()+" {"+e.getFilters().map(Ra).join(" ,")+"}"}(r):"Filter"}class lh extends et{constructor(t,e,n){super(t,e,n),this.key=O.fromName(n.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class ch extends et{constructor(t,e){super(t,"in",e),this.keys=Ca("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class hh extends et{constructor(t,e){super(t,"not-in",e),this.keys=Ca("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ca(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>O.fromName(n.referenceValue))}class dh extends et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ts(e)&&ln(e.arrayValue,this.value)}}class fh extends et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&ln(this.value.arrayValue,e)}}class ph extends et{constructor(t,e){super(t,"not-in",e)}matches(t){if(ln(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!ln(this.value.arrayValue,e)}}class mh extends et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ts(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>ln(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(t,e=null,n=[],i=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=u,this.endAt=c,this.Ie=null}}function mo(r,t=null,e=[],n=[],i=null,o=null,u=null){return new gh(r,t,e,n,i,o,u)}function Is(r){const t=q(r);if(t.Ie===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>ss(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),sr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Te(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Te(n)).join(",")),t.Ie=e}return t.Ie}function As(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!ah(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!wa(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!po(r.startAt,t.startAt)&&po(r.endAt,t.endAt)}function is(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(t,e=null,n=[],i=[],o=null,u="F",c=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=d,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function _h(r,t,e,n,i,o,u,c){return new or(r,t,e,n,i,o,u,c)}function Sa(r){return new or(r)}function go(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function yh(r){return r.collectionGroup!==null}function tn(r){const t=q(r);if(t.Ee===null){t.Ee=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ee.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new nt(yt.comparator);return u.filters.forEach(d=>{d.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ee.push(new Yn(o,n))}),e.has(yt.keyField().canonicalString())||t.Ee.push(new Yn(yt.keyField(),n))}return t.Ee}function Rt(r){const t=q(r);return t.de||(t.de=Eh(t,tn(r))),t.de}function Eh(r,t){if(r.limitType==="F")return mo(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Yn(i.field,o)});const e=r.endAt?new Wn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Wn(r.startAt.position,r.startAt.inclusive):null;return mo(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function os(r,t,e){return new or(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function ar(r,t){return As(Rt(r),Rt(t))&&r.limitType===t.limitType}function Pa(r){return`${Is(Rt(r))}|lt:${r.limitType}`}function he(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>Ra(i)).join(", ")}]`),sr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Te(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Te(i)).join(",")),`Target(${n})`}(Rt(r))}; limitType=${r.limitType})`}function ur(r,t){return t.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):O.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,i){for(const o of tn(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(r,t)&&function(n,i){return!(n.startAt&&!function(u,c,d){const f=fo(u,c,d);return u.inclusive?f<=0:f<0}(n.startAt,tn(n),i)||n.endAt&&!function(u,c,d){const f=fo(u,c,d);return u.inclusive?f>=0:f>0}(n.endAt,tn(n),i))}(r,t)}function vh(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Va(r){return(t,e)=>{let n=!1;for(const i of tn(r)){const o=Th(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function Th(r,t,e){const n=r.field.isKeyField()?O.comparator(t.key,e.key):function(o,u,c){const d=u.data.field(o),f=c.data.field(o);return d!==null&&f!==null?ve(d,f):L(42886)}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return L(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){cn(this.inner,(e,n)=>{for(const[i,o]of n)t(i,o)})}isEmpty(){return Zc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih=new Z(O.comparator);function Qt(){return Ih}const ba=new Z(O.comparator);function Xe(...r){let t=ba;for(const e of r)t=t.insert(e.key,e);return t}function Ah(r){let t=ba;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function ee(){return en()}function Da(){return en()}function en(){return new ie(r=>r.toString(),(r,t)=>r.isEqual(t))}const wh=new nt(O.comparator);function j(...r){let t=wh;for(const e of r)t=t.add(e);return t}const Rh=new nt(F);function Ch(){return Rh}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ts(t)?"-0":t}}function Ph(r){return{integerValue:""+r}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this._=void 0}}function Vh(r,t,e){return r instanceof as?function(i,o){const u={fields:{[ya]:{stringValue:_a},[va]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&vs(o)&&(o=ir(o)),o&&(u.fields[Ea]=o),{mapValue:u}}(e,t):r instanceof Xn?Na(r,t):r instanceof Jn?ka(r,t):function(i,o){const u=Dh(i,o),c=_o(u)+_o(i.Re);return rs(u)&&rs(i.Re)?Ph(c):Sh(i.serializer,c)}(r,t)}function bh(r,t,e){return r instanceof Xn?Na(r,t):r instanceof Jn?ka(r,t):e}function Dh(r,t){return r instanceof us?function(n){return rs(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class as extends lr{}class Xn extends lr{constructor(t){super(),this.elements=t}}function Na(r,t){const e=Oa(t);for(const n of r.elements)e.some(i=>Ct(i,n))||e.push(n);return{arrayValue:{values:e}}}class Jn extends lr{constructor(t){super(),this.elements=t}}function ka(r,t){let e=Oa(t);for(const n of r.elements)e=e.filter(i=>!Ct(i,n));return{arrayValue:{values:e}}}class us extends lr{constructor(t,e){super(),this.serializer=t,this.Re=e}}function _o(r){return J(r.integerValue||r.doubleValue)}function Oa(r){return Ts(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function Nh(r,t){return r.field.isEqual(t.field)&&function(n,i){return n instanceof Xn&&i instanceof Xn||n instanceof Jn&&i instanceof Jn?Ee(n.elements,i.elements,Ct):n instanceof us&&i instanceof us?Ct(n.Re,i.Re):n instanceof as&&i instanceof as}(r.transform,t.transform)}class re{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new re}static exists(t){return new re(void 0,t)}static updateTime(t){return new re(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function qn(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class ws{}function xa(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Oh(r.key,re.none()):new Rs(r.key,r.data,re.none());{const e=r.data,n=wt.empty();let i=new nt(yt.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?n.delete(o):n.set(o,u),i=i.add(o)}return new cr(r.key,n,new Ut(i.toArray()),re.none())}}function kh(r,t,e){r instanceof Rs?function(i,o,u){const c=i.value.clone(),d=Eo(i.fieldTransforms,o,u.transformResults);c.setAll(d),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(r,t,e):r instanceof cr?function(i,o,u){if(!qn(i.precondition,o))return void o.convertToUnknownDocument(u.version);const c=Eo(i.fieldTransforms,o,u.transformResults),d=o.data;d.setAll(Ma(i)),d.setAll(c),o.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(r,t,e):function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function nn(r,t,e,n){return r instanceof Rs?function(o,u,c,d){if(!qn(o.precondition,u))return c;const f=o.value.clone(),_=vo(o.fieldTransforms,d,u);return f.setAll(_),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null}(r,t,e,n):r instanceof cr?function(o,u,c,d){if(!qn(o.precondition,u))return c;const f=vo(o.fieldTransforms,d,u),_=u.data;return _.setAll(Ma(o)),_.setAll(f),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(I=>I.field))}(r,t,e,n):function(o,u,c){return qn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(r,t,e)}function yo(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Ee(n,i,(o,u)=>Nh(o,u))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Rs extends ws{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class cr extends ws{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ma(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function Eo(r,t,e){const n=new Map;Q(r.length===e.length,32656,{Ve:e.length,me:r.length});for(let i=0;i<e.length;i++){const o=r[i],u=o.transform,c=t.data.field(o.field);n.set(o.field,bh(u,c,e[i]))}return n}function vo(r,t,e){const n=new Map;for(const i of r){const o=i.transform,u=e.data.field(i.field);n.set(i.field,Vh(o,u,t))}return n}class Oh extends ws{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&kh(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=nn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=nn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Da();return this.mutations.forEach(i=>{const o=t.get(i.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(i.key)?null:c;const d=xa(u,c);d!==null&&n.set(i.key,d),u.isValidDocument()||u.convertToNoDocument(M.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),j())}isEqual(t){return this.batchId===t.batchId&&Ee(this.mutations,t.mutations,(e,n)=>yo(e,n))&&Ee(this.baseMutations,t.baseMutations,(e,n)=>yo(e,n))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,U;function La(r){if(r===void 0)return Ot("GRPC error has no .code"),V.UNKNOWN;switch(r){case tt.OK:return V.OK;case tt.CANCELLED:return V.CANCELLED;case tt.UNKNOWN:return V.UNKNOWN;case tt.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case tt.INTERNAL:return V.INTERNAL;case tt.UNAVAILABLE:return V.UNAVAILABLE;case tt.UNAUTHENTICATED:return V.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case tt.NOT_FOUND:return V.NOT_FOUND;case tt.ALREADY_EXISTS:return V.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return V.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case tt.ABORTED:return V.ABORTED;case tt.OUT_OF_RANGE:return V.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return V.UNIMPLEMENTED;case tt.DATA_LOSS:return V.DATA_LOSS;default:return L(39323,{code:r})}}(U=tt||(tt={}))[U.OK=0]="OK",U[U.CANCELLED=1]="CANCELLED",U[U.UNKNOWN=2]="UNKNOWN",U[U.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",U[U.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",U[U.NOT_FOUND=5]="NOT_FOUND",U[U.ALREADY_EXISTS=6]="ALREADY_EXISTS",U[U.PERMISSION_DENIED=7]="PERMISSION_DENIED",U[U.UNAUTHENTICATED=16]="UNAUTHENTICATED",U[U.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",U[U.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",U[U.ABORTED=10]="ABORTED",U[U.OUT_OF_RANGE=11]="OUT_OF_RANGE",U[U.UNIMPLEMENTED=12]="UNIMPLEMENTED",U[U.INTERNAL=13]="INTERNAL",U[U.UNAVAILABLE=14]="UNAVAILABLE",U[U.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh=new $t([4294967295,4294967295],0);function To(r){const t=pa().encode(r),e=new oa;return e.update(t),new Uint8Array(e.digest())}function Io(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new $t([e,n],0),new $t([i,o],0)]}class Cs{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Je(`Invalid padding: ${e}`);if(n<0)throw new Je(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Je(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Je(`Invalid padding when bitmap length is 0: ${e}`);this.pe=8*t.length-e,this.ye=$t.fromNumber(this.pe)}we(t,e,n){let i=t.add(e.multiply($t.fromNumber(n)));return i.compare(Fh)===1&&(i=new $t([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ye).toNumber()}be(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const e=To(t),[n,i]=Io(e);for(let o=0;o<this.hashCount;o++){const u=this.we(n,i,o);if(!this.be(u))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new Cs(o,i,e);return n.forEach(c=>u.insert(c)),u}insert(t){if(this.pe===0)return;const e=To(t),[n,i]=Io(e);for(let o=0;o<this.hashCount;o++){const u=this.we(n,i,o);this.Se(u)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Je extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,hn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new hr(M.min(),i,new Z(F),Qt(),j())}}class hn{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new hn(n,e,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t,e,n,i){this.De=t,this.removedTargetIds=e,this.key=n,this.ve=i}}class Fa{constructor(t,e){this.targetId=t,this.Ce=e}}class Ua{constructor(t,e,n=ut.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Ao{constructor(){this.Fe=0,this.Me=wo(),this.xe=ut.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=j(),e=j(),n=j();return this.Me.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:L(38017,{changeType:o})}}),new hn(this.xe,this.Oe,t,e,n)}Qe(){this.Ne=!1,this.Me=wo()}$e(t,e){this.Ne=!0,this.Me=this.Me.insert(t,e)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,Q(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class Uh{constructor(t){this.ze=t,this.je=new Map,this.He=Qt(),this.Je=Mn(),this.Ye=Mn(),this.Ze=new Z(F)}Xe(t){for(const e of t.De)t.ve&&t.ve.isFoundDocument()?this.et(e,t.ve):this.tt(e,t.key,t.ve);for(const e of t.removedTargetIds)this.tt(e,t.key,t.ve)}nt(t){this.forEachTarget(t,e=>{const n=this.rt(e);switch(t.state){case 0:this.it(e)&&n.ke(t.resumeToken);break;case 1:n.We(),n.Be||n.Qe(),n.ke(t.resumeToken);break;case 2:n.We(),n.Be||this.removeTarget(e);break;case 3:this.it(e)&&(n.Ge(),n.ke(t.resumeToken));break;case 4:this.it(e)&&(this.st(e),n.ke(t.resumeToken));break;default:L(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.je.forEach((n,i)=>{this.it(i)&&e(i)})}ot(t){const e=t.targetId,n=t.Ce.count,i=this._t(e);if(i){const o=i.target;if(is(o))if(n===0){const u=new O(o.path);this.tt(e,u,mt.newNoDocument(u,M.min()))}else Q(n===1,20013,{expectedCount:n});else{const u=this.ut(e);if(u!==n){const c=this.ct(t),d=c?this.lt(c,t,u):1;if(d!==0){this.st(e);const f=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,f)}}}}}ct(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let u,c;try{u=Ht(n).toUint8Array()}catch(d){if(d instanceof ga)return ye("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{c=new Cs(u,i,o)}catch(d){return ye(d instanceof Je?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return c.pe===0?null:c}lt(t,e,n){return e.Ce.count===n-this.Tt(t,e.targetId)?0:2}Tt(t,e){const n=this.ze.getRemoteKeysForTarget(e);let i=0;return n.forEach(o=>{const u=this.ze.Pt(),c=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.tt(e,o,null),i++)}),i}It(t){const e=new Map;this.je.forEach((o,u)=>{const c=this._t(u);if(c){if(o.current&&is(c.target)){const d=new O(c.target.path);this.Et(d).has(u)||this.dt(u,d)||this.tt(u,d,mt.newNoDocument(d,t))}o.Le&&(e.set(u,o.qe()),o.Qe())}});let n=j();this.Ye.forEach((o,u)=>{let c=!0;u.forEachWhile(d=>{const f=this._t(d);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(o))}),this.He.forEach((o,u)=>u.setReadTime(t));const i=new hr(t,e,this.Ze,this.He,n);return this.He=Qt(),this.Je=Mn(),this.Ye=Mn(),this.Ze=new Z(F),i}et(t,e){if(!this.it(t))return;const n=this.dt(t,e.key)?2:0;this.rt(t).$e(e.key,n),this.He=this.He.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.Ye=this.Ye.insert(e.key,this.At(e.key).add(t))}tt(t,e,n){if(!this.it(t))return;const i=this.rt(t);this.dt(t,e)?i.$e(e,1):i.Ue(e),this.Ye=this.Ye.insert(e,this.At(e).delete(t)),this.Ye=this.Ye.insert(e,this.At(e).add(t)),n&&(this.He=this.He.insert(e,n))}removeTarget(t){this.je.delete(t)}ut(t){const e=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let e=this.je.get(t);return e||(e=new Ao,this.je.set(t,e)),e}At(t){let e=this.Ye.get(t);return e||(e=new nt(F),this.Ye=this.Ye.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new nt(F),this.Je=this.Je.insert(t,e)),e}it(t){const e=this._t(t)!==null;return e||b("WatchChangeAggregator","Detected inactive target",t),e}_t(t){const e=this.je.get(t);return e&&e.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new Ao),this.ze.getRemoteKeysForTarget(t).forEach(e=>{this.tt(t,e,null)})}dt(t,e){return this.ze.getRemoteKeysForTarget(t).has(e)}}function Mn(){return new Z(O.comparator)}function wo(){return new Z(O.comparator)}const Bh={asc:"ASCENDING",desc:"DESCENDING"},qh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},jh={and:"AND",or:"OR"};class $h{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ls(r,t){return r.useProto3Json||sr(t)?t:{value:t}}function zh(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Gh(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function me(r){return Q(!!r,49232),M.fromTimestamp(function(e){const n=Gt(e);return new vt(n.seconds,n.nanos)}(r))}function Hh(r,t){return cs(r,t).canonicalString()}function cs(r,t){const e=function(i){return new Y(["projects",i.projectId,"databases",i.database])}(r).child("documents");return t===void 0?e:e.child(t)}function Ba(r){const t=Y.fromString(r);return Q(Ga(t),10190,{key:t.toString()}),t}function $r(r,t){const e=Ba(t);if(e.get(1)!==r.databaseId.projectId)throw new k(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new k(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new O(ja(e))}function qa(r,t){return Hh(r.databaseId,t)}function Kh(r){const t=Ba(r);return t.length===4?Y.emptyPath():ja(t)}function Ro(r){return new Y(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function ja(r){return Q(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Qh(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:L(39313,{state:f})}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(f,_){return f.useProto3Json?(Q(_===void 0||typeof _=="string",58123),ut.fromBase64String(_||"")):(Q(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),ut.fromUint8Array(_||new Uint8Array))}(r,t.targetChange.resumeToken),u=t.targetChange.cause,c=u&&function(f){const _=f.code===void 0?V.UNKNOWN:La(f.code);return new k(_,f.message||"")}(u);e=new Ua(n,i,o,c||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=$r(r,n.document.name),o=me(n.document.updateTime),u=n.document.createTime?me(n.document.createTime):M.min(),c=new wt({mapValue:{fields:n.document.fields}}),d=mt.newFoundDocument(i,o,u,c),f=n.targetIds||[],_=n.removedTargetIds||[];e=new jn(f,_,d.key,d)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=$r(r,n.document),o=n.readTime?me(n.readTime):M.min(),u=mt.newNoDocument(i,o),c=n.removedTargetIds||[];e=new jn([],c,u.key,u)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=$r(r,n.document),o=n.removedTargetIds||[];e=new jn([],o,i,null)}else{if(!("filter"in t))return L(11601,{Vt:t});{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,u=new Lh(i,o),c=n.targetId;e=new Fa(c,u)}}return e}function Wh(r,t){return{documents:[qa(r,t.path)]}}function Yh(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=qa(r,i);const o=function(f){if(f.length!==0)return za(St.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(f){if(f.length!==0)return f.map(_=>function(R){return{field:de(R.field),direction:Zh(R.dir)}}(_))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const c=ls(r,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{gt:e,parent:i}}function Xh(r){let t=Kh(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){Q(n===1,65062);const _=e.from[0];_.allDescendants?i=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=function(I){const R=$a(I);return R instanceof St&&Aa(R)?R.getFilters():[R]}(e.where));let u=[];e.orderBy&&(u=function(I){return I.map(R=>function(N){return new Yn(fe(N.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(R))}(e.orderBy));let c=null;e.limit&&(c=function(I){let R;return R=typeof I=="object"?I.value:I,sr(R)?null:R}(e.limit));let d=null;e.startAt&&(d=function(I){const R=!!I.before,S=I.values||[];return new Wn(S,R)}(e.startAt));let f=null;return e.endAt&&(f=function(I){const R=!I.before,S=I.values||[];return new Wn(S,R)}(e.endAt)),_h(t,i,u,o,c,"F",d,f)}function Jh(r,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L(28987,{purpose:i})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function $a(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=fe(e.unaryFilter.field);return et.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=fe(e.unaryFilter.field);return et.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=fe(e.unaryFilter.field);return et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=fe(e.unaryFilter.field);return et.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return L(61313);default:return L(60726)}}(r):r.fieldFilter!==void 0?function(e){return et.create(fe(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return L(58110);default:return L(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return St.create(e.compositeFilter.filters.map(n=>$a(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L(1026)}}(e.compositeFilter.op))}(r):L(30097,{filter:r})}function Zh(r){return Bh[r]}function td(r){return qh[r]}function ed(r){return jh[r]}function de(r){return{fieldPath:r.canonicalString()}}function fe(r){return yt.fromServerFormat(r.fieldPath)}function za(r){return r instanceof et?function(e){if(e.op==="=="){if(ho(e.value))return{unaryFilter:{field:de(e.field),op:"IS_NAN"}};if(co(e.value))return{unaryFilter:{field:de(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ho(e.value))return{unaryFilter:{field:de(e.field),op:"IS_NOT_NAN"}};if(co(e.value))return{unaryFilter:{field:de(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:de(e.field),op:td(e.op),value:e.value}}}(r):r instanceof St?function(e){const n=e.getFilters().map(i=>za(i));return n.length===1?n[0]:{compositeFilter:{op:ed(e.op),filters:n}}}(r):L(54877,{filter:r})}function Ga(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t,e,n,i,o=M.min(),u=M.min(),c=ut.EMPTY_BYTE_STRING,d=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c,this.expectedCount=d}withSequenceNumber(t){return new Bt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(t){this.wt=t}}function rd(r){const t=Xh({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?os(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(){this.yn=new id}addToCollectionParentIndex(t,e){return this.yn.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.yn.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(zt.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(zt.min())}updateCollectionGroup(t,e,n){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class id{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new nt(Y.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new nt(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ha=41943040;class Et{static withCacheSize(t){return new Et(t,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(Ha,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t){this.nr=t}next(){return this.nr+=2,this.nr}static rr(){return new Ie(0)}static ir(){return new Ie(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So="LruGarbageCollector",od=1048576;function Po([r,t],[e,n]){const i=F(r,e);return i===0?F(t,n):i}class ad{constructor(t){this.cr=t,this.buffer=new nt(Po),this.lr=0}hr(){return++this.lr}Pr(t){const e=[t,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();Po(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class ud{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(t){b(So,`Garbage collection scheduled in ${t}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Se(e)?b(So,"Ignoring IndexedDB error during garbage collection: ",e):await nr(e)}await this.Ir(3e5)})}}class ld{constructor(t,e){this.Er=t,this.params=e}calculateTargetCount(t,e){return this.Er.dr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return C.resolve(rr.le);const n=new ad(e);return this.Er.forEachTarget(t,i=>n.Pr(i.sequenceNumber)).next(()=>this.Er.Ar(t,i=>n.Pr(i))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.Er.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Er.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(b("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(Co)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(b("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Co):this.Rr(t,e))}getCacheSize(t){return this.Er.getCacheSize(t)}Rr(t,e){let n,i,o,u,c,d,f;const _=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(I=>(I>this.params.maximumSequenceNumbersToCollect?(b("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),i=this.params.maximumSequenceNumbersToCollect):i=I,u=Date.now(),this.nthSequenceNumber(t,i))).next(I=>(n=I,c=Date.now(),this.removeTargets(t,n,e))).next(I=>(o=I,d=Date.now(),this.removeOrphanedDocuments(t,n))).next(I=>(f=Date.now(),ce()<=B.DEBUG&&b("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-_}ms
	Determined least recently used ${i} in `+(c-u)+`ms
	Removed ${o} targets in `+(d-c)+`ms
	Removed ${I} documents in `+(f-d)+`ms
Total Duration: ${f-_}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:I})))}}function cd(r,t){return new ld(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(){this.changes=new ie(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,mt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?C.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(n!==null&&nn(n.mutation,i,Ut.empty(),vt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,j()).next(()=>n))}getLocalViewOfDocuments(t,e,n=j()){const i=ee();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(o=>{let u=Xe();return o.forEach((c,d)=>{u=u.insert(c,d.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const n=ee();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,j()))}populateOverlays(t,e,n){const i=[];return n.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,n,i){let o=Qt();const u=en(),c=function(){return en()}();return e.forEach((d,f)=>{const _=n.get(f.key);i.has(f.key)&&(_===void 0||_.mutation instanceof cr)?o=o.insert(f.key,f):_!==void 0?(u.set(f.key,_.mutation.getFieldMask()),nn(_.mutation,f,_.mutation.getFieldMask(),vt.now())):u.set(f.key,Ut.empty())}),this.recalculateAndSaveOverlays(t,o).next(d=>(d.forEach((f,_)=>u.set(f,_)),e.forEach((f,_)=>{var I;return c.set(f,new dd(_,(I=u.get(f))!==null&&I!==void 0?I:null))}),c))}recalculateAndSaveOverlays(t,e){const n=en();let i=new Z((u,c)=>u-c),o=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(d=>{const f=e.get(d);if(f===null)return;let _=n.get(d)||Ut.empty();_=c.applyToLocalView(f,_),n.set(d,_);const I=(i.get(c.batchId)||j()).add(d);i=i.insert(c.batchId,I)})}).next(()=>{const u=[],c=i.getReverseIterator();for(;c.hasNext();){const d=c.getNext(),f=d.key,_=d.value,I=Da();_.forEach(R=>{if(!o.has(R)){const S=xa(e.get(R),n.get(R));S!==null&&I.set(R,S),o=o.add(R)}}),u.push(this.documentOverlayCache.saveOverlays(t,f,I))}return C.waitFor(u)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,i){return function(u){return O.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):yh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):C.resolve(ee());let c=on,d=o;return u.next(f=>C.forEach(f,(_,I)=>(c<I.largestBatchId&&(c=I.largestBatchId),o.get(_)?C.resolve():this.remoteDocumentCache.getEntry(t,_).next(R=>{d=d.insert(_,R)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,d,f,j())).next(_=>({batchId:c,changes:Ah(_)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(n=>{let i=Xe();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let u=Xe();return this.indexManager.getCollectionParents(t,o).next(c=>C.forEach(c,d=>{const f=function(I,R){return new or(R,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,n,i).next(_=>{_.forEach((I,R)=>{u=u.insert(I,R)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i))).next(u=>{o.forEach((d,f)=>{const _=f.getKey();u.get(_)===null&&(u=u.insert(_,mt.newInvalidDocument(_)))});let c=Xe();return u.forEach((d,f)=>{const _=o.get(d);_!==void 0&&nn(_.mutation,f,Ut.empty(),vt.now()),ur(e,f)&&(c=c.insert(d,f))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(t){this.serializer=t,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(t,e){return C.resolve(this.Fr.get(e))}saveBundleMetadata(t,e){return this.Fr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:me(i.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.Mr.get(e))}saveNamedQuery(t,e){return this.Mr.set(e.name,function(i){return{name:i.name,query:rd(i.bundledQuery),readTime:me(i.readTime)}}(e)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(){this.overlays=new Z(O.comparator),this.Or=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ee();return C.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((i,o)=>{this.St(t,e,o)}),C.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Or.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Or.delete(n)),C.resolve()}getOverlaysForCollection(t,e,n){const i=ee(),o=e.length+1,u=new O(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const d=c.getNext().value,f=d.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&d.largestBatchId>n&&i.set(d.getKey(),d)}return C.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new Z((f,_)=>f-_);const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>n){let _=o.get(f.largestBatchId);_===null&&(_=ee(),o=o.insert(f.largestBatchId,_)),_.set(f.getKey(),f)}}const c=ee(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((f,_)=>c.set(f,_)),!(c.size()>=i)););return C.resolve(c)}St(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const u=this.Or.get(i.largestBatchId).delete(n.key);this.Or.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(n.key,new Mh(e,n));let o=this.Or.get(e);o===void 0&&(o=j(),this.Or.set(e,o)),this.Or.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(){this.Nr=new nt(st.Br),this.Lr=new nt(st.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(t,e){const n=new st(t,e);this.Nr=this.Nr.add(n),this.Lr=this.Lr.add(n)}qr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Qr(new st(t,e))}$r(t,e){t.forEach(n=>this.removeReference(n,e))}Ur(t){const e=new O(new Y([])),n=new st(e,t),i=new st(e,t+1),o=[];return this.Lr.forEachInRange([n,i],u=>{this.Qr(u),o.push(u.key)}),o}Kr(){this.Nr.forEach(t=>this.Qr(t))}Qr(t){this.Nr=this.Nr.delete(t),this.Lr=this.Lr.delete(t)}Wr(t){const e=new O(new Y([])),n=new st(e,t),i=new st(e,t+1);let o=j();return this.Lr.forEachInRange([n,i],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new st(t,0),n=this.Nr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class st{constructor(t,e){this.key=t,this.Gr=e}static Br(t,e){return O.comparator(t.key,e.key)||F(t.Gr,e.Gr)}static kr(t,e){return F(t.Gr,e.Gr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Jn=1,this.zr=new nt(st.Br)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new xh(o,e,n,i);this.mutationQueue.push(u);for(const c of i)this.zr=this.zr.add(new st(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return C.resolve(u)}lookupMutationBatch(t,e){return C.resolve(this.jr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.Hr(n),o=i<0?0:i;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?Yc:this.Jn-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new st(e,0),i=new st(e,Number.POSITIVE_INFINITY),o=[];return this.zr.forEachInRange([n,i],u=>{const c=this.jr(u.Gr);o.push(c)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new nt(F);return e.forEach(i=>{const o=new st(i,0),u=new st(i,Number.POSITIVE_INFINITY);this.zr.forEachInRange([o,u],c=>{n=n.add(c.Gr)})}),C.resolve(this.Jr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;O.isDocumentKey(o)||(o=o.child(""));const u=new st(new O(o),0);let c=new nt(F);return this.zr.forEachWhile(d=>{const f=d.key.path;return!!n.isPrefixOf(f)&&(f.length===i&&(c=c.add(d.Gr)),!0)},u),C.resolve(this.Jr(c))}Jr(t){const e=[];return t.forEach(n=>{const i=this.jr(n);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){Q(this.Yr(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.zr;return C.forEach(e.mutations,i=>{const o=new st(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.zr=n})}Xn(t){}containsKey(t,e){const n=new st(e,0),i=this.zr.firstAfterOrEqual(n);return C.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}Yr(t,e){return this.Hr(t)}Hr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}jr(t){const e=this.Hr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(t){this.Zr=t,this.docs=function(){return new Z(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,u=this.Zr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return C.resolve(n?n.document.mutableCopy():mt.newInvalidDocument(e))}getEntries(t,e){let n=Qt();return e.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():mt.newInvalidDocument(i))}),C.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=Qt();const u=e.path,c=new O(u.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(c);for(;d.hasNext();){const{key:f,value:{document:_}}=d.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||Hc(Gc(_),n)<=0||(i.has(_.key)||ur(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,n,i){L(9500)}Xr(t,e){return C.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new Ed(this)}getSize(t){return C.resolve(this.size)}}class Ed extends hd{constructor(t){super(),this.vr=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.vr.addEntry(t,i)):this.vr.removeEntry(n)}),C.waitFor(e)}getFromCache(t,e){return this.vr.getEntry(t,e)}getAllFromCache(t,e){return this.vr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(t){this.persistence=t,this.ei=new ie(e=>Is(e),As),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.ti=0,this.ni=new Ss,this.targetCount=0,this.ri=Ie.rr()}forEachTarget(t,e){return this.ei.forEach((n,i)=>e(i)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.ti)}allocateTargetId(t){return this.highestTargetId=this.ri.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.ti&&(this.ti=e),C.resolve()}ar(t){this.ei.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ri=new Ie(e),this.highestTargetId=e),t.sequenceNumber>this.ti&&(this.ti=t.sequenceNumber)}addTargetData(t,e){return this.ar(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.ar(e),C.resolve()}removeTargetData(t,e){return this.ei.delete(e.target),this.ni.Ur(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.ei.forEach((u,c)=>{c.sequenceNumber<=e&&n.get(c.targetId)===null&&(this.ei.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),C.waitFor(o).next(()=>i)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const n=this.ei.get(e)||null;return C.resolve(n)}addMatchingKeys(t,e,n){return this.ni.qr(e,n),C.resolve()}removeMatchingKeys(t,e,n){this.ni.$r(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(u=>{o.push(i.markPotentiallyOrphaned(t,u))}),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.ni.Ur(e),C.resolve()}getMatchingKeysForTargetId(t,e){const n=this.ni.Wr(e);return C.resolve(n)}containsKey(t,e){return C.resolve(this.ni.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(t,e){this.ii={},this.overlays={},this.si=new rr(0),this.oi=!1,this.oi=!0,this._i=new gd,this.referenceDelegate=t(this),this.ai=new vd(this),this.indexManager=new sd,this.remoteDocumentCache=function(i){return new yd(i)}(n=>this.referenceDelegate.ui(n)),this.serializer=new nd(e),this.ci=new pd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new md,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ii[t.toKey()];return n||(n=new _d(e,this.referenceDelegate),this.ii[t.toKey()]=n),n}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(t,e,n){b("MemoryPersistence","Starting transaction:",t);const i=new Td(this.si.next());return this.referenceDelegate.li(),n(i).next(o=>this.referenceDelegate.hi(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Pi(t,e){return C.or(Object.values(this.ii).map(n=>()=>n.containsKey(t,e)))}}class Td extends Qc{constructor(t){super(),this.currentSequenceNumber=t}}class Ps{constructor(t){this.persistence=t,this.Ti=new Ss,this.Ii=null}static Ei(t){return new Ps(t)}get di(){if(this.Ii)return this.Ii;throw L(60996)}addReference(t,e,n){return this.Ti.addReference(n,e),this.di.delete(n.toString()),C.resolve()}removeReference(t,e,n){return this.Ti.removeReference(n,e),this.di.add(n.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),C.resolve()}removeTarget(t,e){this.Ti.Ur(e.targetId).forEach(i=>this.di.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.di.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}li(){this.Ii=new Set}hi(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.di,n=>{const i=O.fromPath(n);return this.Ai(t,i).next(o=>{o||e.removeEntry(i,M.min())})}).next(()=>(this.Ii=null,e.apply(t)))}updateLimboDocument(t,e){return this.Ai(t,e).next(n=>{n?this.di.delete(e.toString()):this.di.add(e.toString())})}ui(t){return 0}Ai(t,e){return C.or([()=>C.resolve(this.Ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Pi(t,e)])}}class Zn{constructor(t,e){this.persistence=t,this.Ri=new ie(n=>Xc(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=cd(this,e)}static Ei(t,e){return new Zn(t,e)}li(){}hi(t){return C.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.Vr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(i=>n+i))}Vr(t){let e=0;return this.Ar(t,n=>{e++}).next(()=>e)}Ar(t,e){return C.forEach(this.Ri,(n,i)=>this.gr(t,n,i).next(o=>o?C.resolve():e(i)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.Xr(t,u=>this.gr(t,u,e).next(c=>{c||(n++,o.removeEntry(u,M.min()))})).next(()=>o.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.Ri.set(e,t.currentSequenceNumber),C.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.Ri.set(n,t.currentSequenceNumber),C.resolve()}removeReference(t,e,n){return this.Ri.set(n,t.currentSequenceNumber),C.resolve()}updateLimboDocument(t,e){return this.Ri.set(e,t.currentSequenceNumber),C.resolve()}ui(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Bn(t.data.value)),e}gr(t,e,n){return C.or([()=>this.persistence.Pi(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.Ri.get(e);return C.resolve(i!==void 0&&i>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.ls=n,this.hs=i}static Ps(t,e){let n=j(),i=j();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Vs(t,e.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return fl()?8:Wc(hl())>0?6:4}()}initialize(t,e){this.As=t,this.indexManager=e,this.Ts=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.Rs(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.Vs(t,e,i,n).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new Id;return this.fs(t,e,u).next(c=>{if(o.result=c,this.Is)return this.gs(t,e,u,c.size)})}).next(()=>o.result)}gs(t,e,n,i){return n.documentReadCount<this.Es?(ce()<=B.DEBUG&&b("QueryEngine","SDK will not create cache indexes for query:",he(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),C.resolve()):(ce()<=B.DEBUG&&b("QueryEngine","Query:",he(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.ds*i?(ce()<=B.DEBUG&&b("QueryEngine","The SDK decides to create cache indexes for query:",he(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Rt(e))):C.resolve())}Rs(t,e){if(go(e))return C.resolve(null);let n=Rt(e);return this.indexManager.getIndexType(t,n).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=os(e,null,"F"),n=Rt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const u=j(...o);return this.As.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,n).next(d=>{const f=this.ps(e,c);return this.ys(e,f,u,d.readTime)?this.Rs(t,os(e,null,"F")):this.ws(t,f,e,d)}))})))}Vs(t,e,n,i){return go(e)||i.isEqual(M.min())?C.resolve(null):this.As.getDocuments(t,n).next(o=>{const u=this.ps(e,o);return this.ys(e,u,n,i)?C.resolve(null):(ce()<=B.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),he(e)),this.ws(t,u,e,zc(i,on)).next(c=>c))})}ps(t,e){let n=new nt(Va(t));return e.forEach((i,o)=>{ur(t,o)&&(n=n.add(o))}),n}ys(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}fs(t,e,n){return ce()<=B.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",he(e)),this.As.getDocumentsMatchingQuery(t,e,zt.min(),n)}ws(t,e,n,i){return this.As.getDocumentsMatchingQuery(t,n,i).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs="LocalStore",wd=3e8;class Rd{constructor(t,e,n,i){this.persistence=t,this.bs=e,this.serializer=i,this.Ss=new Z(F),this.Ds=new ie(o=>Is(o),As),this.vs=new Map,this.Cs=t.getRemoteDocumentCache(),this.ai=t.getTargetCache(),this.ci=t.getBundleCache(),this.Fs(n)}Fs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new fd(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ss))}}function Cd(r,t,e,n){return new Rd(r,t,e,n)}async function Qa(r,t){const e=q(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,e.Fs(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const u=[],c=[];let d=j();for(const f of i){u.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}for(const f of o){c.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}return e.localDocuments.getDocuments(n,d).next(f=>({Ms:f,removedBatchIds:u,addedBatchIds:c}))})})}function Wa(r){const t=q(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.ai.getLastRemoteSnapshotVersion(e))}function Sd(r,t){const e=q(r),n=t.snapshotVersion;let i=e.Ss;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.Cs.newChangeBuffer({trackRemovals:!0});i=e.Ss;const c=[];t.targetChanges.forEach((_,I)=>{const R=i.get(I);if(!R)return;c.push(e.ai.removeMatchingKeys(o,_.removedDocuments,I).next(()=>e.ai.addMatchingKeys(o,_.addedDocuments,I)));let S=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(I)!==null?S=S.withResumeToken(ut.EMPTY_BYTE_STRING,M.min()).withLastLimboFreeSnapshotVersion(M.min()):_.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(_.resumeToken,n)),i=i.insert(I,S),function(x,D,X){return x.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=wd?!0:X.addedDocuments.size+X.modifiedDocuments.size+X.removedDocuments.size>0}(R,S,_)&&c.push(e.ai.updateTargetData(o,S))});let d=Qt(),f=j();if(t.documentUpdates.forEach(_=>{t.resolvedLimboDocuments.has(_)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))}),c.push(Pd(o,u,t.documentUpdates).next(_=>{d=_.xs,f=_.Os})),!n.isEqual(M.min())){const _=e.ai.getLastRemoteSnapshotVersion(o).next(I=>e.ai.setTargetsMetadata(o,o.currentSequenceNumber,n));c.push(_)}return C.waitFor(c).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,d,f)).next(()=>d)}).then(o=>(e.Ss=i,o))}function Pd(r,t,e){let n=j(),i=j();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let u=Qt();return e.forEach((c,d)=>{const f=o.get(c);d.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(c)),d.isNoDocument()&&d.version.isEqual(M.min())?(t.removeEntry(c,d.readTime),u=u.insert(c,d)):!f.isValidDocument()||d.version.compareTo(f.version)>0||d.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(d),u=u.insert(c,d)):b(bs,"Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",d.version)}),{xs:u,Os:i}})}function Vd(r,t){const e=q(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return e.ai.getTargetData(n,t).next(o=>o?(i=o,C.resolve(i)):e.ai.allocateTargetId(n).next(u=>(i=new Bt(t,u,"TargetPurposeListen",n.currentSequenceNumber),e.ai.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=e.Ss.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ss=e.Ss.insert(n.targetId,n),e.Ds.set(t,n.targetId)),n})}async function hs(r,t,e){const n=q(r),i=n.Ss.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,u=>n.persistence.referenceDelegate.removeTarget(u,i))}catch(u){if(!Se(u))throw u;b(bs,`Failed to update sequence numbers for target ${t}: ${u}`)}n.Ss=n.Ss.remove(t),n.Ds.delete(i.target)}function Vo(r,t,e){const n=q(r);let i=M.min(),o=j();return n.persistence.runTransaction("Execute query","readwrite",u=>function(d,f,_){const I=q(d),R=I.Ds.get(_);return R!==void 0?C.resolve(I.Ss.get(R)):I.ai.getTargetData(f,_)}(n,u,Rt(t)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.ai.getMatchingKeysForTargetId(u,c.targetId).next(d=>{o=d})}).next(()=>n.bs.getDocumentsMatchingQuery(u,t,e?i:M.min(),e?o:j())).next(c=>(bd(n,vh(t),c),{documents:c,Ns:o})))}function bd(r,t,e){let n=r.vs.get(t)||M.min();e.forEach((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.vs.set(t,n)}class bo{constructor(){this.activeTargetIds=Ch()}$s(t){this.activeTargetIds=this.activeTargetIds.add(t)}Us(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Qs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Dd{constructor(){this.So=new bo,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.So.$s(t),this.Do[t]||"not-current"}updateQueryState(t,e,n){this.Do[t]=e}removeLocalQueryTarget(t){this.So.Us(t)}isLocalQueryTarget(t){return this.So.activeTargetIds.has(t)}clearQueryState(t){delete this.Do[t]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(t){return this.So.activeTargetIds.has(t)}start(){return this.So=new bo,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{vo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do="ConnectivityMonitor";class No{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(t){this.Oo.push(t)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){b(Do,"Network connectivity changed: AVAILABLE");for(const t of this.Oo)t(0)}xo(){b(Do,"Network connectivity changed: UNAVAILABLE");for(const t of this.Oo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ln=null;function ds(){return Ln===null?Ln=function(){return 268435456+Math.round(2147483648*Math.random())}():Ln++,"0x"+Ln.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="RestConnection",kd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Od{get Bo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Lo=e+"://"+t.host,this.ko=`projects/${n}/databases/${i}`,this.qo=this.databaseId.database===Qn?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Qo(t,e,n,i,o){const u=ds(),c=this.$o(t,e.toUriEncodedString());b(zr,`Sending RPC '${t}' ${u}:`,c,n);const d={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};return this.Uo(d,i,o),this.Ko(t,c,d,n).then(f=>(b(zr,`Received RPC '${t}' ${u}: `,f),f),f=>{throw ye(zr,`RPC '${t}' ${u} failed with error: `,f,"url: ",c,"request:",n),f})}Wo(t,e,n,i,o,u){return this.Qo(t,e,n,i,o)}Uo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ce}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),n&&n.headers.forEach((i,o)=>t[o]=i)}$o(t,e){const n=kd[t];return`${this.Lo}/v1/${e}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(t){this.Go=t.Go,this.zo=t.zo}jo(t){this.Ho=t}Jo(t){this.Yo=t}Zo(t){this.Xo=t}onMessage(t){this.e_=t}close(){this.zo()}send(t){this.Go(t)}t_(){this.Ho()}n_(){this.Yo()}r_(t){this.Xo(t)}i_(t){this.e_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="WebChannelConnection";class Md extends Od{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ko(t,e,n,i){const o=ds();return new Promise((u,c)=>{const d=new aa;d.setWithCredentials(!0),d.listenOnce(ua.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Un.NO_ERROR:const _=d.getResponseJson();b(ft,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(_)),u(_);break;case Un.TIMEOUT:b(ft,`RPC '${t}' ${o} timed out`),c(new k(V.DEADLINE_EXCEEDED,"Request time out"));break;case Un.HTTP_ERROR:const I=d.getStatus();if(b(ft,`RPC '${t}' ${o} failed with status:`,I,"response text:",d.getResponseText()),I>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const S=R==null?void 0:R.error;if(S&&S.status&&S.message){const N=function(D){const X=D.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(X)>=0?X:V.UNKNOWN}(S.status);c(new k(N,S.message))}else c(new k(V.UNKNOWN,"Server responded with status "+d.getStatus()))}else c(new k(V.UNAVAILABLE,"Connection failed."));break;default:L(9055,{s_:t,streamId:o,o_:d.getLastErrorCode(),__:d.getLastError()})}}finally{b(ft,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(i);b(ft,`RPC '${t}' ${o} sending request:`,i),d.send(e,"POST",f,n,15)})}a_(t,e,n){const i=ds(),o=[this.Lo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=ha(),c=ca(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(d.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(d.useFetchStreams=!0),this.Uo(d.initMessageHeaders,e,n),d.encodeInitMessageHeaders=!0;const _=o.join("");b(ft,`Creating RPC '${t}' stream ${i}: ${_}`,d);const I=u.createWebChannel(_,d);let R=!1,S=!1;const N=new xd({Go:D=>{S?b(ft,`Not sending because RPC '${t}' stream ${i} is closed:`,D):(R||(b(ft,`Opening RPC '${t}' stream ${i} transport.`),I.open(),R=!0),b(ft,`RPC '${t}' stream ${i} sending:`,D),I.send(D))},zo:()=>I.close()}),x=(D,X,K)=>{D.listen(X,H=>{try{K(H)}catch(rt){setTimeout(()=>{throw rt},0)}})};return x(I,Ye.EventType.OPEN,()=>{S||(b(ft,`RPC '${t}' stream ${i} transport opened.`),N.t_())}),x(I,Ye.EventType.CLOSE,()=>{S||(S=!0,b(ft,`RPC '${t}' stream ${i} transport closed`),N.r_())}),x(I,Ye.EventType.ERROR,D=>{S||(S=!0,ye(ft,`RPC '${t}' stream ${i} transport errored. Name:`,D.name,"Message:",D.message),N.r_(new k(V.UNAVAILABLE,"The operation could not be completed")))}),x(I,Ye.EventType.MESSAGE,D=>{var X;if(!S){const K=D.data[0];Q(!!K,16349);const H=K,rt=(H==null?void 0:H.error)||((X=H[0])===null||X===void 0?void 0:X.error);if(rt){b(ft,`RPC '${t}' stream ${i} received error:`,rt);const Pt=rt.status;let it=function(g){const y=tt[g];if(y!==void 0)return La(y)}(Pt),v=rt.message;it===void 0&&(it=V.INTERNAL,v="Unknown error status: "+Pt+" with message "+rt.message),S=!0,N.r_(new k(it,v)),I.close()}else b(ft,`RPC '${t}' stream ${i} received:`,K),N.i_(K)}}),x(c,la.STAT_EVENT,D=>{D.stat===Jr.PROXY?b(ft,`RPC '${t}' stream ${i} detected buffering proxy`):D.stat===Jr.NOPROXY&&b(ft,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.n_()},0),N}}function Gr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(r){return new $h(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(t,e,n=1e3,i=1.5,o=6e4){this.bi=t,this.timerId=e,this.u_=n,this.c_=i,this.l_=o,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(t){this.cancel();const e=Math.floor(this.h_+this.d_()),n=Math.max(0,Date.now()-this.T_),i=Math.max(0,e-n);i>0&&b("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.h_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,i,()=>(this.T_=Date.now(),t())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko="PersistentStream";class Ld{constructor(t,e,n,i,o,u,c,d){this.bi=t,this.R_=n,this.V_=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=d,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new Xa(t,e)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(t){this.M_(),this.stream.send(t)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(t,e){this.M_(),this.x_(),this.y_.cancel(),this.m_++,t!==4?this.y_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(Ot(e.toString()),Ot("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zo(e)}O_(){}auth(){this.state=1;const t=this.N_(this.m_),e=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.m_===e&&this.B_(n,i)},n=>{t(()=>{const i=new k(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.L_(i)})})}B_(t,e){const n=this.N_(this.m_);this.stream=this.k_(t,e),this.stream.jo(()=>{n(()=>this.listener.jo())}),this.stream.Jo(()=>{n(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(i=>{n(()=>this.L_(i))}),this.stream.onMessage(i=>{n(()=>++this.p_==1?this.q_(i):this.onNext(i))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(t){return b(ko,`close with error: ${t}`),this.stream=null,this.close(4,t)}N_(t){return e=>{this.bi.enqueueAndForget(()=>this.m_===t?e():(b(ko,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Fd extends Ld{constructor(t,e,n,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}k_(t,e){return this.connection.a_("Listen",t,e)}q_(t){return this.onNext(t)}onNext(t){this.y_.reset();const e=Qh(this.serializer,t),n=function(o){if(!("targetChange"in o))return M.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?M.min():u.readTime?me(u.readTime):M.min()}(t);return this.listener.Q_(e,n)}U_(t){const e={};e.database=Ro(this.serializer),e.addTarget=function(o,u){let c;const d=u.target;if(c=is(d)?{documents:Wh(o,d)}:{query:Yh(o,d).gt},c.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){c.resumeToken=Gh(o,u.resumeToken);const f=ls(o,u.expectedCount);f!==null&&(c.expectedCount=f)}else if(u.snapshotVersion.compareTo(M.min())>0){c.readTime=zh(o,u.snapshotVersion.toTimestamp());const f=ls(o,u.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const n=Jh(this.serializer,t);n&&(e.labels=n),this.F_(e)}K_(t){const e={};e.database=Ro(this.serializer),e.removeTarget=t,this.F_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{}class Bd extends Ud{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.J_=!1}Y_(){if(this.J_)throw new k(V.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(t,e,n,i){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Qo(t,cs(e,n),i,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(V.UNKNOWN,o.toString())})}Wo(t,e,n,i,o){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.Wo(t,cs(e,n),i,u,c,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new k(V.UNKNOWN,u.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class qd{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(t){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.na("Offline")))}set(t){this.sa(),this.Z_=0,t==="Online"&&(this.ea=!1),this.na(t)}na(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ra(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(Ot(e),this.ea=!1):b("OnlineStateTracker",e)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae="RemoteStore";class jd{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=o,this.ca.vo(u=>{n.enqueueAndForget(async()=>{fn(this)&&(b(Ae,"Restarting streams for network reachability change."),await async function(d){const f=q(d);f.aa.add(4),await dn(f),f.la.set("Unknown"),f.aa.delete(4),await dr(f)}(this))})}),this.la=new qd(n,i)}}async function dr(r){if(fn(r))for(const t of r.ua)await t(!0)}async function dn(r){for(const t of r.ua)await t(!1)}function Ja(r,t){const e=q(r);e._a.has(t.targetId)||(e._a.set(t.targetId,t),Os(e)?ks(e):Pe(e).b_()&&Ns(e,t))}function Ds(r,t){const e=q(r),n=Pe(e);e._a.delete(t),n.b_()&&Za(e,t),e._a.size===0&&(n.b_()?n.v_():fn(e)&&e.la.set("Unknown"))}function Ns(r,t){if(r.ha.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(M.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Pe(r).U_(t)}function Za(r,t){r.ha.Ke(t),Pe(r).K_(t)}function ks(r){r.ha=new Uh({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>r._a.get(t)||null,Pt:()=>r.datastore.serializer.databaseId}),Pe(r).start(),r.la.ta()}function Os(r){return fn(r)&&!Pe(r).w_()&&r._a.size>0}function fn(r){return q(r).aa.size===0}function tu(r){r.ha=void 0}async function $d(r){r.la.set("Online")}async function zd(r){r._a.forEach((t,e)=>{Ns(r,t)})}async function Gd(r,t){tu(r),Os(r)?(r.la.ia(t),ks(r)):r.la.set("Unknown")}async function Hd(r,t,e){if(r.la.set("Online"),t instanceof Ua&&t.state===2&&t.cause)try{await async function(i,o){const u=o.cause;for(const c of o.targetIds)i._a.has(c)&&(await i.remoteSyncer.rejectListen(c,u),i._a.delete(c),i.ha.removeTarget(c))}(r,t)}catch(n){b(Ae,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Oo(r,n)}else if(t instanceof jn?r.ha.Xe(t):t instanceof Fa?r.ha.ot(t):r.ha.nt(t),!e.isEqual(M.min()))try{const n=await Wa(r.localStore);e.compareTo(n)>=0&&await function(o,u){const c=o.ha.It(u);return c.targetChanges.forEach((d,f)=>{if(d.resumeToken.approximateByteSize()>0){const _=o._a.get(f);_&&o._a.set(f,_.withResumeToken(d.resumeToken,u))}}),c.targetMismatches.forEach((d,f)=>{const _=o._a.get(d);if(!_)return;o._a.set(d,_.withResumeToken(ut.EMPTY_BYTE_STRING,_.snapshotVersion)),Za(o,d);const I=new Bt(_.target,d,f,_.sequenceNumber);Ns(o,I)}),o.remoteSyncer.applyRemoteEvent(c)}(r,e)}catch(n){b(Ae,"Failed to raise snapshot:",n),await Oo(r,n)}}async function Oo(r,t,e){if(!Se(t))throw t;r.aa.add(1),await dn(r),r.la.set("Offline"),e||(e=()=>Wa(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{b(Ae,"Retrying IndexedDB access"),await e(),r.aa.delete(1),await dr(r)})}async function xo(r,t){const e=q(r);e.asyncQueue.verifyOperationInProgress(),b(Ae,"RemoteStore received new credentials");const n=fn(e);e.aa.add(3),await dn(e),n&&e.la.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.aa.delete(3),await dr(e)}async function Kd(r,t){const e=q(r);t?(e.aa.delete(2),await dr(e)):t||(e.aa.add(2),await dn(e),e.la.set("Unknown"))}function Pe(r){return r.Pa||(r.Pa=function(e,n,i){const o=q(e);return o.Y_(),new Fd(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{jo:$d.bind(null,r),Jo:zd.bind(null,r),Zo:Gd.bind(null,r),Q_:Hd.bind(null,r)}),r.ua.push(async t=>{t?(r.Pa.D_(),Os(r)?ks(r):r.la.set("Unknown")):(await r.Pa.stop(),tu(r))})),r.Pa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new ne,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const u=Date.now()+n,c=new xs(t,e,u,i,o);return c.start(n),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function eu(r,t){if(Ot("AsyncQueue",`${t}: ${r}`),Se(r))return new k(V.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{static emptySet(t){return new ge(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||O.comparator(e.key,n.key):(e,n)=>O.comparator(e.key,n.key),this.keyedMap=Xe(),this.sortedSet=new Z(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ge)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new ge;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(){this.Ia=new Z(O.comparator)}track(t){const e=t.doc.key,n=this.Ia.get(e);n?t.type!==0&&n.type===3?this.Ia=this.Ia.insert(e,t):t.type===3&&n.type!==1?this.Ia=this.Ia.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.Ia=this.Ia.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.Ia=this.Ia.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.Ia=this.Ia.remove(e):t.type===1&&n.type===2?this.Ia=this.Ia.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.Ia=this.Ia.insert(e,{type:2,doc:t.doc}):L(63341,{Vt:t,Ea:n}):this.Ia=this.Ia.insert(e,t)}da(){const t=[];return this.Ia.inorderTraversal((e,n)=>{t.push(n)}),t}}class we{constructor(t,e,n,i,o,u,c,d,f){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=d,this.hasCachedResults=f}static fromInitialDocuments(t,e,n,i,o){const u=[];return e.forEach(c=>{u.push({type:0,doc:c})}),new we(t,e,ge.emptySet(e),u,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ar(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(t=>t.ma())}}class Wd{constructor(){this.queries=Lo(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(e,n){const i=q(e),o=i.queries;i.queries=Lo(),o.forEach((u,c)=>{for(const d of c.Ra)d.onError(n)})})(this,new k(V.ABORTED,"Firestore shutting down"))}}function Lo(){return new ie(r=>Pa(r),ar)}async function Yd(r,t){const e=q(r);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.Va()&&t.ma()&&(n=2):(o=new Qd,n=t.ma()?0:1);try{switch(n){case 0:o.Aa=await e.onListen(i,!0);break;case 1:o.Aa=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const c=eu(u,`Initialization of query '${he(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.Ra.push(t),t.ga(e.onlineState),o.Aa&&t.pa(o.Aa)&&Ms(e)}async function Xd(r,t){const e=q(r),n=t.query;let i=3;const o=e.queries.get(n);if(o){const u=o.Ra.indexOf(t);u>=0&&(o.Ra.splice(u,1),o.Ra.length===0?i=t.ma()?0:1:!o.Va()&&t.ma()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Jd(r,t){const e=q(r);let n=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const c of u.Ra)c.pa(i)&&(n=!0);u.Aa=i}}n&&Ms(e)}function Zd(r,t,e){const n=q(r),i=n.queries.get(t);if(i)for(const o of i.Ra)o.onError(e);n.queries.delete(t)}function Ms(r){r.fa.forEach(t=>{t.next()})}var fs,Fo;(Fo=fs||(fs={})).ya="default",Fo.Cache="cache";class tf{constructor(t,e,n){this.query=t,this.wa=e,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=n||{}}pa(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new we(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ba?this.Da(t)&&(this.wa.next(t),e=!0):this.va(t,this.onlineState)&&(this.Ca(t),e=!0),this.Sa=t,e}onError(t){this.wa.error(t)}ga(t){this.onlineState=t;let e=!1;return this.Sa&&!this.ba&&this.va(this.Sa,t)&&(this.Ca(this.Sa),e=!0),e}va(t,e){if(!t.fromCache||!this.ma())return!0;const n=e!=="Offline";return(!this.options.Fa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Da(t){if(t.docChanges.length>0)return!0;const e=this.Sa&&this.Sa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Ca(t){t=we.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ba=!0,this.wa.next(t)}ma(){return this.options.source!==fs.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(t){this.key=t}}class ru{constructor(t){this.key=t}}class ef{constructor(t,e){this.query=t,this.qa=e,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=j(),this.mutatedKeys=j(),this.Ua=Va(t),this.Ka=new ge(this.Ua)}get Wa(){return this.qa}Ga(t,e){const n=e?e.za:new Mo,i=e?e.Ka:this.Ka;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,c=!1;const d=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((_,I)=>{const R=i.get(_),S=ur(this.query,I)?I:null,N=!!R&&this.mutatedKeys.has(R.key),x=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;R&&S?R.data.isEqual(S.data)?N!==x&&(n.track({type:3,doc:S}),D=!0):this.ja(R,S)||(n.track({type:2,doc:S}),D=!0,(d&&this.Ua(S,d)>0||f&&this.Ua(S,f)<0)&&(c=!0)):!R&&S?(n.track({type:0,doc:S}),D=!0):R&&!S&&(n.track({type:1,doc:R}),D=!0,(d||f)&&(c=!0)),D&&(S?(u=u.add(S),o=x?o.add(_):o.delete(_)):(u=u.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),o=o.delete(_.key),n.track({type:1,doc:_})}return{Ka:u,za:n,ys:c,mutatedKeys:o}}ja(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.Ka;this.Ka=t.Ka,this.mutatedKeys=t.mutatedKeys;const u=t.za.da();u.sort((_,I)=>function(S,N){const x=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L(20277,{Vt:D})}};return x(S)-x(N)}(_.type,I.type)||this.Ua(_.doc,I.doc)),this.Ha(n),i=i!=null&&i;const c=e&&!i?this.Ja():[],d=this.$a.size===0&&this.current&&!i?1:0,f=d!==this.Qa;return this.Qa=d,u.length!==0||f?{snapshot:new we(this.query,t.Ka,o,u,t.mutatedKeys,d===0,f,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ya:c}:{Ya:c}}ga(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new Mo,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(t){return!this.qa.has(t)&&!!this.Ka.has(t)&&!this.Ka.get(t).hasLocalMutations}Ha(t){t&&(t.addedDocuments.forEach(e=>this.qa=this.qa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.qa=this.qa.delete(e)),this.current=t.current)}Ja(){if(!this.current)return[];const t=this.$a;this.$a=j(),this.Ka.forEach(n=>{this.Za(n.key)&&(this.$a=this.$a.add(n.key))});const e=[];return t.forEach(n=>{this.$a.has(n)||e.push(new ru(n))}),this.$a.forEach(n=>{t.has(n)||e.push(new nu(n))}),e}Xa(t){this.qa=t.Ns,this.$a=j();const e=this.Ga(t.documents);return this.applyChanges(e,!0)}eu(){return we.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const Ls="SyncEngine";class nf{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class rf{constructor(t){this.key=t,this.tu=!1}}class sf{constructor(t,e,n,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.nu={},this.ru=new ie(c=>Pa(c),ar),this.iu=new Map,this.su=new Set,this.ou=new Z(O.comparator),this._u=new Map,this.au=new Ss,this.uu={},this.cu=new Map,this.lu=Ie.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function of(r,t,e=!0){const n=uu(r);let i;const o=n.ru.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.eu()):i=await su(n,t,e,!0),i}async function af(r,t){const e=uu(r);await su(e,t,!0,!1)}async function su(r,t,e,n){const i=await Vd(r.localStore,Rt(t)),o=i.targetId,u=r.sharedClientState.addLocalQueryTarget(o,e);let c;return n&&(c=await uf(r,t,o,u==="current",i.resumeToken)),r.isPrimaryClient&&e&&Ja(r.remoteStore,i),c}async function uf(r,t,e,n,i){r.Pu=(I,R,S)=>async function(x,D,X,K){let H=D.view.Ga(X);H.ys&&(H=await Vo(x.localStore,D.query,!1).then(({documents:v})=>D.view.Ga(v,H)));const rt=K&&K.targetChanges.get(D.targetId),Pt=K&&K.targetMismatches.get(D.targetId)!=null,it=D.view.applyChanges(H,x.isPrimaryClient,rt,Pt);return Bo(x,D.targetId,it.Ya),it.snapshot}(r,I,R,S);const o=await Vo(r.localStore,t,!0),u=new ef(t,o.Ns),c=u.Ga(o.documents),d=hn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),f=u.applyChanges(c,r.isPrimaryClient,d);Bo(r,e,f.Ya);const _=new nf(t,e,u);return r.ru.set(t,_),r.iu.has(e)?r.iu.get(e).push(t):r.iu.set(e,[t]),f.snapshot}async function lf(r,t,e){const n=q(r),i=n.ru.get(t),o=n.iu.get(i.targetId);if(o.length>1)return n.iu.set(i.targetId,o.filter(u=>!ar(u,t))),void n.ru.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await hs(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),e&&Ds(n.remoteStore,i.targetId),ps(n,i.targetId)}).catch(nr)):(ps(n,i.targetId),await hs(n.localStore,i.targetId,!0))}async function cf(r,t){const e=q(r),n=e.ru.get(t),i=e.iu.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Ds(e.remoteStore,n.targetId))}async function iu(r,t){const e=q(r);try{const n=await Sd(e.localStore,t);t.targetChanges.forEach((i,o)=>{const u=e._u.get(o);u&&(Q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?u.tu=!0:i.modifiedDocuments.size>0?Q(u.tu,14607):i.removedDocuments.size>0&&(Q(u.tu,42227),u.tu=!1))}),await au(e,n,t)}catch(n){await nr(n)}}function Uo(r,t,e){const n=q(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.ru.forEach((o,u)=>{const c=u.view.ga(t);c.snapshot&&i.push(c.snapshot)}),function(u,c){const d=q(u);d.onlineState=c;let f=!1;d.queries.forEach((_,I)=>{for(const R of I.Ra)R.ga(c)&&(f=!0)}),f&&Ms(d)}(n.eventManager,t),i.length&&n.nu.Q_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function hf(r,t,e){const n=q(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n._u.get(t),o=i&&i.key;if(o){let u=new Z(O.comparator);u=u.insert(o,mt.newNoDocument(o,M.min()));const c=j().add(o),d=new hr(M.min(),new Map,new Z(F),u,c);await iu(n,d),n.ou=n.ou.remove(o),n._u.delete(t),Fs(n)}else await hs(n.localStore,t,!1).then(()=>ps(n,t,e)).catch(nr)}function ps(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.iu.get(t))r.ru.delete(n),e&&r.nu.Tu(n,e);r.iu.delete(t),r.isPrimaryClient&&r.au.Ur(t).forEach(n=>{r.au.containsKey(n)||ou(r,n)})}function ou(r,t){r.su.delete(t.path.canonicalString());const e=r.ou.get(t);e!==null&&(Ds(r.remoteStore,e),r.ou=r.ou.remove(t),r._u.delete(e),Fs(r))}function Bo(r,t,e){for(const n of e)n instanceof nu?(r.au.addReference(n.key,t),df(r,n)):n instanceof ru?(b(Ls,"Document no longer in limbo: "+n.key),r.au.removeReference(n.key,t),r.au.containsKey(n.key)||ou(r,n.key)):L(19791,{Iu:n})}function df(r,t){const e=t.key,n=e.path.canonicalString();r.ou.get(e)||r.su.has(n)||(b(Ls,"New document in limbo: "+e),r.su.add(n),Fs(r))}function Fs(r){for(;r.su.size>0&&r.ou.size<r.maxConcurrentLimboResolutions;){const t=r.su.values().next().value;r.su.delete(t);const e=new O(Y.fromString(t)),n=r.lu.next();r._u.set(n,new rf(e)),r.ou=r.ou.insert(e,n),Ja(r.remoteStore,new Bt(Rt(Sa(e.path)),n,"TargetPurposeLimboResolution",rr.le))}}async function au(r,t,e){const n=q(r),i=[],o=[],u=[];n.ru.isEmpty()||(n.ru.forEach((c,d)=>{u.push(n.Pu(d,t,e).then(f=>{var _;if((f||e)&&n.isPrimaryClient){const I=f?!f.fromCache:(_=e==null?void 0:e.targetChanges.get(d.targetId))===null||_===void 0?void 0:_.current;n.sharedClientState.updateQueryState(d.targetId,I?"current":"not-current")}if(f){i.push(f);const I=Vs.Ps(d.targetId,f);o.push(I)}}))}),await Promise.all(u),n.nu.Q_(i),await async function(d,f){const _=q(d);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>C.forEach(f,R=>C.forEach(R.ls,S=>_.persistence.referenceDelegate.addReference(I,R.targetId,S)).next(()=>C.forEach(R.hs,S=>_.persistence.referenceDelegate.removeReference(I,R.targetId,S)))))}catch(I){if(!Se(I))throw I;b(bs,"Failed to update sequence numbers: "+I)}for(const I of f){const R=I.targetId;if(!I.fromCache){const S=_.Ss.get(R),N=S.snapshotVersion,x=S.withLastLimboFreeSnapshotVersion(N);_.Ss=_.Ss.insert(R,x)}}}(n.localStore,o))}async function ff(r,t){const e=q(r);if(!e.currentUser.isEqual(t)){b(Ls,"User change. New user:",t.toKey());const n=await Qa(e.localStore,t);e.currentUser=t,function(o,u){o.cu.forEach(c=>{c.forEach(d=>{d.reject(new k(V.CANCELLED,u))})}),o.cu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await au(e,n.Ms)}}function pf(r,t){const e=q(r),n=e._u.get(t);if(n&&n.tu)return j().add(n.key);{let i=j();const o=e.iu.get(t);if(!o)return i;for(const u of o){const c=e.ru.get(u);i=i.unionWith(c.view.Wa)}return i}}function uu(r){const t=q(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=iu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=pf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=hf.bind(null,t),t.nu.Q_=Jd.bind(null,t.eventManager),t.nu.Tu=Zd.bind(null,t.eventManager),t}class tr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Ya(t.databaseInfo.databaseId),this.sharedClientState=this.Au(t),this.persistence=this.Ru(t),await this.persistence.start(),this.localStore=this.Vu(t),this.gcScheduler=this.mu(t,this.localStore),this.indexBackfillerScheduler=this.fu(t,this.localStore)}mu(t,e){return null}fu(t,e){return null}Vu(t){return Cd(this.persistence,new Ad,t.initialUser,this.serializer)}Ru(t){return new Ka(Ps.Ei,this.serializer)}Au(t){return new Dd}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}tr.provider={build:()=>new tr};class mf extends tr{constructor(t){super(),this.cacheSizeBytes=t}mu(t,e){Q(this.persistence.referenceDelegate instanceof Zn,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new ud(n,t.asyncQueue,e)}Ru(t){const e=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new Ka(n=>Zn.Ei(n,e),this.serializer)}}class ms{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Uo(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=ff.bind(null,this.syncEngine),await Kd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Wd}()}createDatastore(t){const e=Ya(t.databaseInfo.databaseId),n=function(o){return new Md(o)}(t.databaseInfo);return function(o,u,c,d){return new Bd(o,u,c,d)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,i,o,u,c){return new jd(n,i,o,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Uo(this.syncEngine,e,0),function(){return No.C()?new No:new Nd}())}createSyncEngine(t,e){return function(i,o,u,c,d,f,_){const I=new sf(i,o,u,c,d,f);return _&&(I.hu=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=q(i);b(Ae,"RemoteStore shutting down."),o.aa.add(5),await dn(o),o.ca.shutdown(),o.la.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}ms.provider={build:()=>new ms};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.pu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.pu(this.observer.error,t):Ot("Uncaught Error in snapshot listener:",t.toString()))}yu(){this.muted=!0}pu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="FirestoreClient";class _f{constructor(t,e,n,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=qc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async u=>{b(Wt,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(n,u=>(b(Wt,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ne;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=eu(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Hr(r,t){r.asyncQueue.verifyOperationInProgress(),b(Wt,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await Qa(t.localStore,i),n=i)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function qo(r,t){r.asyncQueue.verifyOperationInProgress();const e=await yf(r);b(Wt,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>xo(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>xo(t.remoteStore,i)),r._onlineComponents=t}async function yf(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){b(Wt,"Using user provided OfflineComponentProvider");try{await Hr(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;ye("Error using user provided cache. Falling back to memory cache: "+e),await Hr(r,new tr)}}else b(Wt,"Using default OfflineComponentProvider"),await Hr(r,new mf(void 0));return r._offlineComponents}async function Ef(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(b(Wt,"Using user provided OnlineComponentProvider"),await qo(r,r._uninitializedComponentsProvider._online)):(b(Wt,"Using default OnlineComponentProvider"),await qo(r,new ms))),r._onlineComponents}async function vf(r){const t=await Ef(r),e=t.eventManager;return e.onListen=of.bind(null,t.syncEngine),e.onUnlisten=lf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=af.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=cf.bind(null,t.syncEngine),e}function Tf(r,t,e={}){const n=new ne;return r.asyncQueue.enqueueAndForget(async()=>function(o,u,c,d,f){const _=new gf({next:R=>{_.yu(),u.enqueueAndForget(()=>Xd(o,I)),R.fromCache&&d.source==="server"?f.reject(new k(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(R)},error:R=>f.reject(R)}),I=new tf(c,_,{includeMetadataChanges:!0,Fa:!0});return Yd(o,I)}(await vf(r),r.asyncQueue,t,e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(r,t,e){if(!e)throw new k(V.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Af(r,t,e,n){if(t===!0&&n===!0)throw new k(V.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function $o(r){if(O.isDocumentKey(r))throw new k(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function wf(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":L(12329,{type:typeof r})}function gs(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new k(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=wf(r);throw new k(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu="firestore.googleapis.com",zo=!0;class Go{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new k(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=cu,this.ssl=zo}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:zo;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Ha;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<od)throw new k(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Af("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lu((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new k(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new k(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new k(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Us{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Go({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new k(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Go(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Oc;switch(n.type){case"firstParty":return new Fc(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new k(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=jo.get(e);n&&(b("ComponentProvider","Removing Datastore"),jo.delete(e),n.terminate())}(this),Promise.resolve()}}function Rf(r,t,e,n={}){var i;const o=(r=gs(r,Us))._getSettings(),u=Object.assign(Object.assign({},o),{emulatorOptions:r._getEmulatorOptions()}),c=`${t}:${e}`;o.host!==cu&&o.host!==c&&ye("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},o),{host:c,ssl:!1,emulatorOptions:n});if(!Gn(d,u)&&(r._setSettings(d),n.mockUserToken)){let f,_;if(typeof n.mockUserToken=="string")f=n.mockUserToken,_=pt.MOCK_USER;else{f=cl(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const I=n.mockUserToken.sub||n.mockUserToken.user_id;if(!I)throw new k(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new pt(I)}r._authCredentials=new xc(new fa(f,_))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new fr(this.firestore,t,this._query)}}class Ve{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _e(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ve(this.firestore,t,this._key)}}class _e extends fr{constructor(t,e,n){super(t,e,Sa(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ve(this.firestore,null,new O(t))}withConverter(t){return new _e(this.firestore,t,this._path)}}function Ke(r,t,...e){if(r=El(r),If("collection","path",t),r instanceof Us){const n=Y.fromString(t,...e);return $o(n),new _e(r,null,n)}{if(!(r instanceof Ve||r instanceof _e))throw new k(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Y.fromString(t,...e));return $o(n),new _e(r.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho="AsyncQueue";class Ko{constructor(t=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new Xa(this,"async_queue_retry"),this.ju=()=>{const n=Gr();n&&b(Ho,"Visibility state changed to "+n.visibilityState),this.y_.A_()},this.Hu=t;const e=Gr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ju(),this.Yu(t)}enterRestrictedMode(t){if(!this.$u){this.$u=!0,this.Gu=t||!1;const e=Gr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.ju)}}enqueue(t){if(this.Ju(),this.$u)return new Promise(()=>{});const e=new ne;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qu.push(t),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(t){if(!Se(t))throw t;b(Ho,"Operation failed with retryable error: "+t)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(t){const e=this.Hu.then(()=>(this.Wu=!0,t().catch(n=>{throw this.Ku=n,this.Wu=!1,Ot("INTERNAL UNHANDLED ERROR: ",Qo(n)),n}).then(n=>(this.Wu=!1,n))));return this.Hu=e,e}enqueueAfterDelay(t,e,n){this.Ju(),this.zu.indexOf(t)>-1&&(e=0);const i=xs.createAndSchedule(this,t,e,n,o=>this.Xu(o));return this.Uu.push(i),i}Ju(){this.Ku&&L(47125,{ec:Qo(this.Ku)})}verifyOperationInProgress(){}async tc(){let t;do t=this.Hu,await t;while(t!==this.Hu)}nc(t){for(const e of this.Uu)if(e.timerId===t)return!0;return!1}rc(t){return this.tc().then(()=>{this.Uu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.Uu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.tc()})}sc(t){this.zu.push(t)}Xu(t){const e=this.Uu.indexOf(t);this.Uu.splice(e,1)}}function Qo(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class hu extends Us{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new Ko,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ko(t),this._firestoreClient=void 0,await t}}}function Cf(r,t){const e=typeof r=="object"?r:Tc(),n=typeof r=="string"?r:Qn,i=gc(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=ul("firestore");o&&Rf(i,...o)}return i}function Sf(r){if(r._terminated)throw new k(V.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Pf(r),r._firestoreClient}function Pf(r){var t,e,n;const i=r._freezeSettings(),o=function(c,d,f,_){return new eh(c,d,f,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,lu(_.experimentalLongPollingOptions),_.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new _f(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&function(c){const d=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(d),_online:d}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t){this._byteString=t}static fromBase64String(t){try{return new er(ut.fromBase64String(t))}catch(e){throw new k(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new er(ut.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return F(this._lat,t._lat)||F(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0}(this._values,t._values)}}const Df=new RegExp("[~\\*/\\[\\]]");function Nf(r,t,e){if(t.search(Df)>=0)throw Wo(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r);try{return new du(...t.split("."))._internalPath}catch{throw Wo(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r)}}function Wo(r,t,e,n,i){let o=`Function ${t}() called with invalid data`;o+=". ";let u="";return new k(V.INVALID_ARGUMENT,o+r+u)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new kf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(pu("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class kf extends fu{data(){return super.data()}}function pu(r,t){return typeof t=="string"?Nf(r,t):t instanceof du?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new k(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xf{convertValue(t,e="none"){switch(Kt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return J(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ht(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw L(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return cn(t,(i,o)=>{n[i]=this.convertValue(o,e)}),n}convertVectorValue(t){var e,n,i;const o=(i=(n=(e=t.fields)===null||e===void 0?void 0:e[es].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(u=>J(u.doubleValue));return new bf(o)}convertGeoPoint(t){return new Vf(J(t.latitude),J(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ir(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(an(t));default:return null}}convertTimestamp(t){const e=Gt(t);return new vt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Y.fromString(t);Q(Ga(n),9688,{name:t});const i=new un(n.get(1),n.get(3)),o=new O(n.popFirst(5));return i.isEqual(e)||Ot(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Mf extends fu{constructor(t,e,n,i,o,u){super(t,e,n,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new $n(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(pu("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class $n extends Mf{data(t={}){return super.data(t)}}class Lf{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Fn(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new $n(this._firestore,this._userDataWriter,n.key,n,new Fn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new k(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map(c=>{const d=new $n(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Fn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:d,oldIndex:-1,newIndex:u++}})}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const d=new $n(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Fn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,_=-1;return c.type!==0&&(f=u.indexOf(c.doc.key),u=u.delete(c.doc.key)),c.type!==1&&(u=u.add(c.doc),_=u.indexOf(c.doc.key)),{type:Ff(c.type),doc:d,oldIndex:f,newIndex:_}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Ff(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L(61501,{type:r})}}class Uf extends xf{constructor(t){super(),this.firestore=t}convertBytes(t){return new er(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ve(this.firestore,null,e)}}function Qe(r){r=gs(r,fr);const t=gs(r.firestore,hu),e=Sf(t),n=new Uf(t);return Of(r._query),Tf(e,r._query).then(i=>new Lf(t,n,r,i))}(function(t,e=!0){(function(i){Ce=i})(vc),Kn(new rn("firestore",(n,{instanceIdentifier:i,options:o})=>{const u=n.getProvider("app").getImmediate(),c=new hu(new Mc(n.getProvider("auth-internal")),new Uc(u,n.getProvider("app-check-internal")),function(f,_){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new k(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new un(f.options.projectId,_)}(u,i),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),pe(Ji,Zi,t),pe(Ji,Zi,"esm2017")})();const Bf={apiKey:"AIzaSyCCCgDWhO9wZ0iHlq6-Navg1wpsNzUYR_0",authDomain:"portfolio-8f71f.firebaseapp.com",projectId:"portfolio-8f71f",storageBucket:"portfolio-8f71f.firebasestorage.app",messagingSenderId:"833561835280",appId:"1:833561835280:web:d02f733e36fe85e38c9795"},qf=ra(Bf),We=Cf(qf),Hf=({children:r})=>{const[t,e]=Nt.useState(Bi.jsx(Yu,{})),[n,i]=Nt.useState({resumeUrl:null,homeContent:null,skills:null,experiences:null,projects:null}),o=Nt.useRef(!1);Nt.useEffect(()=>{(async()=>{try{if(o.current)return;const[R,S,N,x,D]=await Promise.all([u(),c(),d(),f(),_()]);i({resumeUrl:R,homeContent:S,skills:N,experiences:x,projects:D})}catch(R){console.error("Error Loading App Data:",R),i({resumeUrl:"#",homeContent:[],skills:[],experiences:[],projects:[]})}finally{console.log(o.current?"Loading Data again...":"Loading Data..."),o.current=!0}})()},[]);const u=Nt.useCallback(async()=>{try{const I=await Qe(Ke(We,"resume"));if(!I.empty){const R=I.docs[0].data();return console.log("Data: ",R),R.url}}catch(I){console.error("Error fetching home content:",I)}return"#"},[]),c=Nt.useCallback(async()=>{try{const I=await Qe(Ke(We,"home"));if(!I.empty){const R=I.docs[0].data();return Object.values(R)}}catch(I){console.error("Error fetching home content:",I)}return[]},[]),d=Nt.useCallback(async()=>{try{const I=await Qe(Ke(We,"skills"));if(!I.empty)return I.docs.map(S=>S.data())}catch(I){console.error("Error fetching skills:",I)}return[]},[]),f=Nt.useCallback(async()=>{try{const I=await Qe(Ke(We,"experience"));if(!I.empty)return I.docs.map(S=>S.data())}catch(I){console.error("Error fetching experiences:",I)}return[]},[]),_=Nt.useCallback(async()=>{try{const I=await Qe(Ke(We,"projects"));if(!I.empty)return I.docs.map(S=>S.data())}catch(I){console.error("Error fetching projects:",I)}return[]},[]);return Bi.jsx(Xu.Provider,{value:{element:t,setElement:e,state:n},children:r})};export{Hf as default};
