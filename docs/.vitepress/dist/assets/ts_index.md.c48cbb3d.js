import{_ as s,c as a,o as n,a as l}from"./app.6f01185c.js";const i=JSON.parse('{"title":"TypeScript","description":"","frontmatter":{},"headers":[{"level":2,"title":"1\u3001\u5F3A\u7C7B\u578B Vs \u5F31\u7C7B\u578B","slug":"_1\u3001\u5F3A\u7C7B\u578B-vs-\u5F31\u7C7B\u578B"},{"level":2,"title":"2\u3001\u9759\u6001\u7C7B\u578B \u4E0E \u52A8\u6001\u7C7B\u578B","slug":"_2\u3001\u9759\u6001\u7C7B\u578B-\u4E0E-\u52A8\u6001\u7C7B\u578B"},{"level":2,"title":"3\u3001\u7C7B\u578B\u7B80\u4ECB","slug":"_3\u3001\u7C7B\u578B\u7B80\u4ECB"}],"relativePath":"ts/index.md"}'),p={name:"ts/index.md"},o=l(`<h1 id="typescript" tabindex="-1">TypeScript <a class="header-anchor" href="#typescript" aria-hidden="true">#</a></h1><h2 id="_1\u3001\u5F3A\u7C7B\u578B-vs-\u5F31\u7C7B\u578B" tabindex="-1">1\u3001\u5F3A\u7C7B\u578B Vs \u5F31\u7C7B\u578B <a class="header-anchor" href="#_1\u3001\u5F3A\u7C7B\u578B-vs-\u5F31\u7C7B\u578B" aria-hidden="true">#</a></h2><p>\u5F3A\u7C7B\u578B\u4E0D\u5141\u8BB8\u968F\u610F\u7684\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362\uFF0C\u800C\u5F31\u7C7B\u578B\u662F\u5141\u8BB8\u7684\u3002</p><p>\u5982:</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">100</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// js \u7ED3\u679C\u4E3A 50 \uFF0Cts \u4F1A\u62A5\u9519</span></span>
<span class="line"></span></code></pre></div><p>\u5F31\u7C7B\u578B\u7684\u95EE\u9898\uFF1A</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">    obj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u8FD0\u884C\u65F6\u624D\u4F1A\u62A5\u9519</span></span>
<span class="line"></span></code></pre></div><h2 id="_2\u3001\u9759\u6001\u7C7B\u578B-\u4E0E-\u52A8\u6001\u7C7B\u578B" tabindex="-1">2\u3001\u9759\u6001\u7C7B\u578B \u4E0E \u52A8\u6001\u7C7B\u578B <a class="header-anchor" href="#_2\u3001\u9759\u6001\u7C7B\u578B-\u4E0E-\u52A8\u6001\u7C7B\u578B" aria-hidden="true">#</a></h2><p>\u53D8\u91CF\u7684\u7C7B\u578B\u662F\u56FA\u5B9A\u7684\uFF0C\u5728\u7F16\u8BD1\u65F6\u786E\u5B9A\u7C7B\u578B\u3002</p><p>\u53D8\u91CF\u7C7B\u578B\u53EF\u53D8\uFF0C\u5728\u8FD0\u884C\u65F6\u786E\u5B9A\u7C7B\u578B\u3002</p><h2 id="_3\u3001\u7C7B\u578B\u7B80\u4ECB" tabindex="-1">3\u3001\u7C7B\u578B\u7B80\u4ECB <a class="header-anchor" href="#_3\u3001\u7C7B\u578B\u7B80\u4ECB" aria-hidden="true">#</a></h2><ul><li>\u57FA\u672C\u7C7B\u578B</li></ul><p>string \u3001number \u3001boolean \u3001void \u3001null \u3001undefined \u3001 symbol</p><ul><li>object</li></ul><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> foo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">object</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// [] function() {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">zs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u7528\u63A5\u53E3\u66F4\u597D</span></span>
<span class="line"></span></code></pre></div><ul><li>array</li></ul><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> arr1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> arr2</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;">[] </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><ul><li>tuple</li></ul><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> tuple</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">zs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><ul><li>enum</li></ul><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">status</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        Draft </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        UnPublish </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        Publish </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u65E2\u80FD\u901A\u8FC7\u952E\u53D6\u5230\u503C\uFF0C\u4E5F\u80FD\u901A\u8FC7\u503C\u5F97\u5230\u952E</span></span>
<span class="line"></span></code></pre></div><ul><li>function</li></ul><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">func1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">func1</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u53EF\u9009\u53C2\u6570\u4E5F\u53EF\u7528es6\u9ED8\u8BA4\u503C\u7684\u65B9\u5F0F\uFF0C\u6CE8\u610F\uFF0C\u653E\u6700\u540E</span></span>
<span class="line"></span></code></pre></div>`,23),e=[o];function c(t,r,y,C,D,A){return n(),a("div",null,e)}var d=s(p,[["render",c]]);export{i as __pageData,d as default};
