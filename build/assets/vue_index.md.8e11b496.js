import{_ as e,c as t,o as d,a as l}from"./app.1d81710d.js";var o="/build/assets/lifecycle.16e4c08e.png";const f=JSON.parse('{"title":"Vue","description":"","frontmatter":{},"headers":[{"level":2,"title":"1\u3001\u751F\u547D\u5468\u671F","slug":"_1\u3001\u751F\u547D\u5468\u671F"},{"level":2,"title":"2\u3001\u8BED\u6CD5","slug":"_2\u3001\u8BED\u6CD5"},{"level":2,"title":"3\u3001\u6982\u5FF5","slug":"_3\u3001\u6982\u5FF5"},{"level":2,"title":"4\u3001Vue2 \u548C Vue3 \u7684\u533A\u522B","slug":"_4\u3001vue2-\u548C-vue3-\u7684\u533A\u522B"},{"level":2,"title":"5\u3001\u7EC4\u4EF6\u901A\u4FE1","slug":"_5\u3001\u7EC4\u4EF6\u901A\u4FE1"},{"level":2,"title":"6\u3001\u63D2\u69FD","slug":"_6\u3001\u63D2\u69FD"},{"level":2,"title":"7\u3001\u81EA\u5B9A\u4E49\u6307\u4EE4","slug":"_7\u3001\u81EA\u5B9A\u4E49\u6307\u4EE4"},{"level":2,"title":"8\u3001nextTick","slug":"_8\u3001nexttick"},{"level":2,"title":"9\u3001Vue2\u54CD\u5E94\u5F0F\u539F\u7406","slug":"_9\u3001vue2\u54CD\u5E94\u5F0F\u539F\u7406"}],"relativePath":"vue/index.md"}'),i={name:"vue/index.md"},c=l('<h1 id="vue" tabindex="-1">Vue <a class="header-anchor" href="#vue" aria-hidden="true">#</a></h1><h2 id="_1\u3001\u751F\u547D\u5468\u671F" tabindex="-1">1\u3001\u751F\u547D\u5468\u671F <a class="header-anchor" href="#_1\u3001\u751F\u547D\u5468\u671F" aria-hidden="true">#</a></h2><table><thead><tr><th>Vue2</th><th style="text-align:center;">Vue3</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>beforeCreate</td><td style="text-align:center;">-</td><td>\u5B9E\u4F8B\u521B\u5EFA\u524D</td></tr><tr><td>created</td><td style="text-align:center;">-</td><td>\u5B9E\u4F8B\u521B\u5EFA\u540E</td></tr><tr><td>beforeMount</td><td style="text-align:center;">onBeforeMount</td><td>DOM \u6302\u8F7D\u524D\u8C03\u7528</td></tr><tr><td>mounted</td><td style="text-align:center;">onMounted</td><td>DOM\u6302\u8F7D\u5B8C\u6210\u8C03\u7528</td></tr><tr><td>beforeUpdate</td><td style="text-align:center;">onBeforeUpdate</td><td>\u6570\u636E\u66F4\u65B0\u4E4B\u524D\u8C03\u7528</td></tr><tr><td>updated</td><td style="text-align:center;">onUpdated</td><td>\u6570\u636E\u66F4\u65B0\u540E\u8C03\u7528</td></tr><tr><td>beforeDestroy</td><td style="text-align:center;">onBeforeUnmount</td><td>\u7EC4\u4EF6\u9500\u6BC1\u524D\u8C03\u7528</td></tr><tr><td>destroted</td><td style="text-align:center;">onUnmounted</td><td>\u7EC4\u4EF6\u9500\u6BC1\u5B8C\u6210\u8C03\u7528</td></tr></tbody></table><blockquote><p>\u6D41\u7A0B\u56FE</p></blockquote><p><img src="'+o+'" alt=""></p><h2 id="_2\u3001\u8BED\u6CD5" tabindex="-1">2\u3001\u8BED\u6CD5 <a class="header-anchor" href="#_2\u3001\u8BED\u6CD5" aria-hidden="true">#</a></h2><ul><li><p>\u63D2\u503C\u8868\u8FBE\u5F0F</p></li><li><p>\u6307\u4EE4</p><ul><li><code>v-text</code></li><li><code>v-html</code></li><li><code>v-on</code> \u652F\u6301\u4FEE\u9970\u7B26</li><li><code>v-bind</code></li></ul></li><li><p>computed \u548C watch</p><ul><li><code>computed</code> \u662F\u8BA1\u7B97\u5C5E\u6027\uFF0C\u7528\u4E8E\u5F53\u4E00\u4E2A\u5143\u7D20\u53D7\u5230\u591A\u4E2A\u5143\u7D20\u5F71\u54CD\u7684\u60C5\u51B5\u3002</li><li><code>watch</code> \u662F\u4FA6\u542C\u5668\uFF0C\u7528\u4E8E\u5BF9\u67D0\u4E2A\u5C5E\u6027\u53D8\u5316\u9700\u8981\u505A\u51FA\u4E00\u4E9B\u5904\u7406\u7684\u65F6\u5019\u4F7F\u7528\u3002</li><li><code>computed</code> \u6709\u7F13\u5B58\u3002</li><li><code>watch</code> \u5728\u9875\u9762\u9996\u6B21\u52A0\u8F7D\u65F6\u4E0D\u6267\u884C\uFF0C\u9700\u8981\u8BBE\u7F6E\u7ACB\u5373\u76D1\u542C\u624D\u4F1A\u6267\u884C\u3002\u8BBE\u7F6E\u6DF1\u5EA6\u76D1\u542C\u624D\u4F1A\u76D1\u542C\u591A\u5C42\u7EA7\u5C5E\u6027\u53D8\u5316\u3002</li></ul></li><li><p>class \u548C style \u7ED1\u5B9A</p></li><li><p>\u6761\u4EF6\u6E32\u67D3\uFF08<code>v-if</code>\uFF09\u3001\u5217\u8868\u6E32\u67D3\uFF08<code>v-for</code>\uFF09</p><ol><li><p><code>v-show</code> \u548C <code>v-if</code> \u7684\u533A\u522B</p><ul><li><code>v-show</code> \u901A\u8FC7\u63A7\u5236DOM \u5143\u7D20\u7684display \u5C5E\u6027\uFF0C\u800C<code>v-if</code> \u5219\u662FDOM \u5143\u7D20\u662F\u5426\u521B\u5EFA\u3002</li><li>\u9891\u7E41\u5207\u6362\u72B6\u6001\u7684\u5730\u65B9\u4F7F\u7528<code>v-show</code> \u8F83\u597D\u3002</li></ul></li><li><p><code>v-if</code> \u548C <code>v-for</code> \u7684\u4F18\u5148\u7EA7</p><ul><li>Vue2 \u4E2D<code>v-for</code> \u7684\u4F18\u5148\u7EA7\u66F4\u9AD8\uFF0C\u540C\u65F6\u4F7F\u7528\u7684\u8BDD\u4F1A\u5148\u5FAA\u73AF\u3001\u518D\u5224\u65AD\uFF0C\u5BFC\u81F4\u65E0\u8BBA\u662F\u5426\u9700\u8981\u5C55\u793A\u67D0\u5143\u7D20\uFF0C\u90FD\u4F1A\u5148\u904D\u5386\u6574\u4E2A\u6570\u7EC4\u3002</li><li>Vue3 \u4E2D<code>v-if</code> \u7684\u4F18\u5148\u7EA7\u4F1A\u66F4\u9AD8\uFF0C\u540C\u65F6\u4F7F\u7528\u7684\u8BDD\u4F1A\u62A5\u9519\u3002\u56E0\u4E3A<code>v-if</code> \u5148\u6267\u884C\u7684\u65F6\u5019\u8FD8\u6CA1\u6709\u62FF\u5230\u8FD9\u4E2A\u6570\u7EC4\u3002</li></ul></li></ol></li><li><p>\u8868\u5355\u8F93\u5165\u7ED1\u5B9A</p><ul><li><code>v-model</code></li></ul></li></ul><h2 id="_3\u3001\u6982\u5FF5" tabindex="-1">3\u3001\u6982\u5FF5 <a class="header-anchor" href="#_3\u3001\u6982\u5FF5" aria-hidden="true">#</a></h2><ul><li><p>\u7EC4\u4EF6</p></li><li><p>\u63D2\u69FD</p></li><li><p>\u63D2\u4EF6</p></li><li><p>mixin</p></li><li><p>\u6DF1\u5165\u54CD\u5E94\u5F0F\u539F\u7406</p></li><li><p>\u4E0D\u540C\u6784\u5EFA\u7248\u672C\u7684Vue</p></li></ul><h2 id="_4\u3001vue2-\u548C-vue3-\u7684\u533A\u522B" tabindex="-1">4\u3001Vue2 \u548C Vue3 \u7684\u533A\u522B <a class="header-anchor" href="#_4\u3001vue2-\u548C-vue3-\u7684\u533A\u522B" aria-hidden="true">#</a></h2><ul><li><p>\u5199\u6CD5\u4E0A\uFF1A</p><ul><li>Vue2 \u91C7\u7528 <code>options Api</code>\uFF0CVue3 \u5219\u662F <code>composition Api</code>\u3002</li></ul><p><code>options Api</code> \u4E2D<code>methods</code>\u3001<code>data</code>\u7B49\u90FD\u662F\u5206\u6563\u7684\u3002\u800C <code>composition Api</code>\u4E2D\u6839\u636E\u903B\u8F91\u529F\u80FD\u6765\u7EC4\u7EC7\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u4E00\u4E2A\u529F\u80FD\u6240\u5B9A\u4E49\u7684<code>methods</code>\u3001<code>data</code>\u7B49\u4F1A\u653E\u5728\u4E00\u8D77\u3002</p><ul><li>Vue2 \u4E2D\u54CD\u5E94\u5F0F\u6570\u636E\u653E\u5728 <code>data</code> \u51FD\u6570\u91CC,Vue3 \u4F7F\u7528<code>ref</code>\u548C <code>reactive</code> \u5C06\u6570\u636E\u58F0\u660E\u4E3A\u54CD\u5E94\u5F0F\u3002</li></ul></li><li><p>\u54CD\u5E94\u5F0F\u539F\u7406\uFF1A</p><ul><li>Vue2 \u662F\u901A\u8FC7<code>Object.defineProperty</code> \u5BF9\u6570\u636E\u8FDB\u884C\u52AB\u6301\u5B9E\u73B0\u3002\u800CVue3 \u662F\u901A\u8FC7\u4F7F\u7528<code>Proxy</code> \u5BF9\u6570\u636E\u4EE3\u7406\u5B9E\u73B0\u7684\u3002</li></ul></li><li><p>\u751F\u547D\u5468\u671F\uFF1A</p><ul><li>Vue3 \u5C06<code>beforeCreate</code> \u548C <code>created</code> \u5408\u5E76\u5230\u4E86<code>setup</code> \u51FD\u6570\u91CC\u3002</li></ul></li><li><p>\u6839\u8282\u70B9\uFF1A</p><ul><li>Vue2 \u53EA\u5141\u8BB8\u6709\u4E00\u4E2A\u6839\u8282\u70B9,Vue3 \u4E0D\u505A\u8981\u6C42\u3002</li></ul></li><li><p>\u5185\u7F6E\u7EC4\u4EF6</p><ul><li>Vue3 \u65B0\u589E\u4E86\u4F20\u9001\u7EC4\u4EF6<code>Teleport</code> \u548C\u5F02\u6B65\u4F9D\u8D56\u5904\u7406\u7EC4\u4EF6<code>Supense</code></li></ul></li></ul><h2 id="_5\u3001\u7EC4\u4EF6\u901A\u4FE1" tabindex="-1">5\u3001\u7EC4\u4EF6\u901A\u4FE1 <a class="header-anchor" href="#_5\u3001\u7EC4\u4EF6\u901A\u4FE1" aria-hidden="true">#</a></h2><table><thead><tr><th>\u65B9\u5F0F</th><th>Vue2</th><th>Vue3</th></tr></thead><tbody><tr><td>\u7236\u4F20\u5B50</td><td>props</td><td>props</td></tr><tr><td>\u5B50\u4F20\u7236</td><td>$emit</td><td>emits</td></tr><tr><td>\u7236\u4F20\u5B50</td><td>$attr</td><td>attrs</td></tr><tr><td>\u5B50\u4F20\u7236</td><td>$listeners</td><td>-\uFF08\u5408\u5E76\u5230attr\uFF09</td></tr><tr><td>\u7956\u5148\u4F20\u5B50\u5B59</td><td>provide/inject</td><td>provide/inject</td></tr><tr><td>\u5B50\u7EC4\u4EF6\u8BBF\u95EE\u7236\u7EC4\u4EF6</td><td>$parent</td><td>-</td></tr><tr><td>\u7236\u7EC4\u4EF6\u8BBF\u95EE\u5B50\u7EC4\u4EF6</td><td>$children</td><td>-</td></tr><tr><td>\u8BBF\u95EE\u7EC4\u4EF6</td><td>$ref</td><td>ref</td></tr><tr><td>\u8DE8\u7EC4\u4EF6</td><td>EventBus</td><td>mitt</td></tr></tbody></table><h2 id="_6\u3001\u63D2\u69FD" tabindex="-1">6\u3001\u63D2\u69FD <a class="header-anchor" href="#_6\u3001\u63D2\u69FD" aria-hidden="true">#</a></h2><h2 id="_7\u3001\u81EA\u5B9A\u4E49\u6307\u4EE4" tabindex="-1">7\u3001\u81EA\u5B9A\u4E49\u6307\u4EE4 <a class="header-anchor" href="#_7\u3001\u81EA\u5B9A\u4E49\u6307\u4EE4" aria-hidden="true">#</a></h2><h2 id="_8\u3001nexttick" tabindex="-1">8\u3001nextTick <a class="header-anchor" href="#_8\u3001nexttick" aria-hidden="true">#</a></h2><ul><li><p>Vue \u5B98\u65B9\u89E3\u91CA\uFF1A</p><p>\u5728\u4E0B\u6B21DOM \u66F4\u65B0\u5FAA\u73AF\u7ED3\u675F\u4E4B\u540E\u6267\u884C\u5EF6\u8FDF\u56DE\u8C03\u3002\u5728\u4FEE\u6539\u6570\u636E\u4E4B\u540E\u7ACB\u5373\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u83B7\u53D6\u66F4\u65B0\u540E\u7684DOM\u3002</p></li><li><p>\u7406\u89E3\uFF1A</p><p>Vue \u4FEE\u6539<code>data</code> \u5E76\u4E0D\u4F1A\u7ACB\u5373\u89E6\u53D1DOM \u66F4\u65B0\uFF0C\u800C\u662F\u628A\u9700\u8981\u66F4\u65B0\u7684<code>watcher</code> \u52A0\u5165\u5230\u961F\u5217\u4E2D\uFF0C\u7136\u540E\u5728\u5408\u9002\u7684\u65F6\u673A\u5728<code>nextTick</code>\u4E2D\u8C03\u7528\u8FD9\u4E9B<code>watcher</code> \u7684\u66F4\u65B0\u51FD\u6570\u8FDB\u884CDOM \u66F4\u65B0\u3002\u6240\u4EE5\u5728<code>data</code> \u521A\u88AB\u4FEE\u6539\u7684\u65F6\u5019\uFF0C\u7528\u6237\u662F\u83B7\u53D6\u4E0D\u5230\u66F4\u65B0\u540E\u7684DOM \u7684\uFF0C\u8FD9\u65F6\u5019\u4FBF\u9700\u8981\u8C03\u7528<code>nextTick</code> \u51FD\u6570\u83B7\u53D6\u66F4\u65B0\u540E\u7684DOM\u3002</p></li></ul><h2 id="_9\u3001vue2\u54CD\u5E94\u5F0F\u539F\u7406" tabindex="-1">9\u3001Vue2\u54CD\u5E94\u5F0F\u539F\u7406 <a class="header-anchor" href="#_9\u3001vue2\u54CD\u5E94\u5F0F\u539F\u7406" aria-hidden="true">#</a></h2><ol><li><p>Vue2 \u7684\u54CD\u5E94\u5F0F\u539F\u7406\u662F\u6839\u636E<code>Object.defineProperty</code> \u8FD9\u4E2Aapi \u6765\u5BF9\u6570\u636E\u8FDB\u884C<strong>\u52AB\u6301</strong>\u5E76\u7ED3\u5408<strong>\u53D1\u5E03\u8005-\u8BA2\u9605\u8005</strong>\u6A21\u5F0F\u5B9E\u73B0\u7684\u3002</p></li><li><p>\u9996\u5148\u4F1A\u4F7F\u7528<code>Object.defineProperty</code> \u7684<code>get</code> \u51FD\u6570\u6765\u5BF9Vue \u4E2D\u7684<code>data</code> \u4E2D\u7684\u6240\u6709\u5C5E\u6027\u8FDB\u884C\u8BBF\u95EE\u52AB\u6301\uFF0C\u4E2D\u95F4\u4F1A\u6D89\u53CA\u5230<code>data</code> \u4E2D\u66F4\u6DF1\u5C42\u6B21\u7684\u5C5E\u6027\u9700\u8981\u9012\u5F52\u8C03\u7528\u52AB\u6301\u65B9\u6CD5\u3002\u8FD9\u91CC\u662F\u901A\u8FC7\u4E00\u4E2A<code>Observer</code> \u7C7B\u5B9E\u73B0\u7684\u3002</p></li><li><p>\u52AB\u6301\u5230\u6BCF\u4E00\u4E2A\u5C5E\u6027\u540E\u4F1A\u7ED9\u8FD9\u4E2A\u5C5E\u6027\u7ED1\u5B9A\u591A\u4E2A\u8BA2\u9605\u8005<code>watcher</code>\uFF0C\u56E0\u4E3A\u4E00\u4E2A\u5C5E\u6027\u53EF\u80FD\u88AB\u7528\u5728\u5F88\u591A\u5730\u65B9\uFF1B\u800C\u8FD9\u4E2A<code>watcher</code> \u4E2D\u5219\u5305\u542B\u66F4\u65B0\u89C6\u56FE\u7684\u51FD\u6570<code>update</code>\u3002</p></li><li></li></ol>',19),r=[c];function a(u,n,p,h,s,_){return d(),t("div",null,r)}var x=e(i,[["render",a]]);export{f as __pageData,x as default};