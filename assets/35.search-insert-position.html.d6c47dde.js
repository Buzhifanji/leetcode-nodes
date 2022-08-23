import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as p,a as n,b as o,d as s,e as c,r as l}from"./app.9118c6a3.js";const i={},r=s(`<h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u7ED9\u5B9A\u4E00\u4E2A\u6392\u5E8F\u6570\u7EC4\u548C\u4E00\u4E2A\u76EE\u6807\u503C\uFF0C\u5728\u6570\u7EC4\u4E2D\u627E\u5230\u76EE\u6807\u503C\uFF0C\u5E76\u8FD4\u56DE\u5176\u7D22\u5F15\u3002\u5982\u679C\u76EE\u6807\u503C\u4E0D\u5B58\u5728\u4E8E\u6570\u7EC4\u4E2D\uFF0C\u8FD4\u56DE\u5B83\u5C06\u4F1A\u88AB\u6309\u987A\u5E8F\u63D2\u5165\u7684\u4F4D\u7F6E\u3002</p><p>\u8BF7\u5FC5\u987B\u4F7F\u7528\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A <code>O(log n)</code> \u7684\u7B97\u6CD5\u3002</p><p><strong>\u4F8B\u5B501</strong></p><div class="language-console ext-console line-numbers-mode"><pre class="language-console"><code>\u8F93\u5165: nums = [1,3,5,6], target = 5
\u8F93\u51FA: 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4F8B\u5B502</strong></p><div class="language-console ext-console line-numbers-mode"><pre class="language-console"><code>\u8F93\u5165: nums = [1,3,5,6], target = 2
\u8F93\u51FA: 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9898\u76EE\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE\u94FE\u63A5" aria-hidden="true">#</a> \u9898\u76EE\u94FE\u63A5</h2>`,8),u={href:"https://leetcode.cn/problems/search-insert-position/",target:"_blank",rel:"noopener noreferrer"},d=c("https://leetcode.cn/problems/search-insert-position/"),k=s(`<h2 id="\u9898\u76EE\u5927\u610F" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE\u5927\u610F" aria-hidden="true">#</a> \u9898\u76EE\u5927\u610F</h2><p>\u5728\u4E00\u4E2A<strong>\u65E0\u91CD\u590D\u5143\u7D20\u7684\u5347\u5E8F</strong>\u6570\u7EC4\u4E2D\u627E\u5230\u67E5\u627E\u4E00\u4E2A\u6307\u5B9A\u503C\uFF0C\u5982\u679C\u627E\u5230\u4E86\uFF0C\u76F4\u63A5\u8FD4\u56DE\u5BF9\u5E94\u7684\u7D22\u5F15\uFF0C\u5982\u679C\u6CA1\u6709\u627E\u5230\u5C31\u8FD4\u56DE\u63D2\u5165\u4F4D\u7F6E\u7684\u7D22\u5F15</p><h2 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a> \u89E3\u9898\u601D\u8DEF</h2><p>\u56E0\u4E3A\u662F\u6709\u5E8F\u6570\u7EC4\uFF0C\u6240\u4EE5\u67E5\u627E\u65B9\u5F0F\u662F\u4E8C\u5206\u67E5\u627E\uFF0C\u6BCF\u6B21\u53D6\u4E2D\u4F4D\u6570\u7684\u503C\u53BB\u5224\u65AD\u662F\u5426\u6EE1\u8DB3\u6761\u4EF6\uFF0C\u4E0D\u6EE1\u8DB3\u65F6\u76F4\u63A5\u4E22\u5F03\u4E00\u534A\u6570\u636E\uFF0C\u53E6\u4E00\u534A\u6570\u636E\u7EE7\u7EED\u4E8C\u5206\u67E5\u627E\u3002 \u8FD9\u9898\u5C31\u662F\u5178\u578B\u7684<strong>\u4E8C\u5206\u67E5\u627E</strong>\u8FD0\u7528\u3002</p><h2 id="\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a> \u4EE3\u7801</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">searchInsert</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> right <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> n<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6C42\u4E2D\u4F4D\u6570</span>
    <span class="token keyword">let</span> middle <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> left<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&lt;=</span> nums<span class="token punctuation">[</span>middle<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result <span class="token operator">=</span> middle<span class="token punctuation">;</span>
      right <span class="token operator">=</span> middle <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      left <span class="token operator">=</span> middle <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function m(v,h){const a=l("ExternalLinkIcon");return t(),p("div",null,[r,n("p",null,[n("a",u,[d,o(a)])]),k])}var _=e(i,[["render",m],["__file","35.search-insert-position.html.vue"]]);export{_ as default};
