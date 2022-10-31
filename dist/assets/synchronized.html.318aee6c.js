import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,o as d,c,a as n,b as e,e as p,d as a}from"./app.d44b5444.js";const i={},r=p(`<h1 id="java\u4E2D\u7684synchronized\u9501\u7684\u5230\u5E95\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#java\u4E2D\u7684synchronized\u9501\u7684\u5230\u5E95\u662F\u4EC0\u4E48" aria-hidden="true">#</a> Java\u4E2D\u7684synchronized\u9501\u7684\u5230\u5E95\u662F\u4EC0\u4E48\uFF1F</h1><p>\u8FD9\u7BC7\u6587\u7AE0\u6211\u4EEC\u6765\u804A\u4E00\u804AJava\u591A\u7EBF\u7A0B\u91CC\u9762\u7684\u201C\u9501\u201D\u3002</p><p>\u9996\u5148\u9700\u8981\u660E\u786E\u7684\u4E00\u70B9\u662F\uFF1A<strong>Java\u591A\u7EBF\u7A0B\u7684\u9501\u90FD\u662F\u57FA\u4E8E\u5BF9\u8C61\u7684</strong>\uFF0CJava\u4E2D\u7684\u6BCF\u4E00\u4E2A\u5BF9\u8C61\u90FD\u53EF\u4EE5\u4F5C\u4E3A\u4E00\u4E2A\u9501\u3002</p><p>\u8FD8\u6709\u4E00\u70B9\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6211\u4EEC\u5E38\u542C\u5230\u7684<strong>\u7C7B\u9501</strong>\u5176\u5B9E\u4E5F\u662F\u5BF9\u8C61\u9501\u3002</p><p>Java\u7C7B\u53EA\u6709\u4E00\u4E2AClass\u5BF9\u8C61\uFF08\u53EF\u4EE5\u6709\u591A\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u591A\u4E2A\u5B9E\u4F8B\u5171\u4EAB\u8FD9\u4E2AClass\u5BF9\u8C61\uFF09\uFF0C\u800CClass\u5BF9\u8C61\u4E5F\u662F\u7279\u6B8A\u7684Java\u5BF9\u8C61\u3002\u6240\u4EE5\u6211\u4EEC\u5E38\u8BF4\u7684\u7C7B\u9501\uFF0C\u5176\u5B9E\u5C31\u662FClass\u5BF9\u8C61\u7684\u9501\u3002</p><h2 id="synchronized\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#synchronized\u5173\u952E\u5B57" aria-hidden="true">#</a> Synchronized\u5173\u952E\u5B57</h2><p>\u8BF4\u5230\u9501\uFF0C\u6211\u4EEC\u901A\u5E38\u4F1A\u8C08\u5230<code>synchronized</code>\u8FD9\u4E2A\u5173\u952E\u5B57\u3002\u5B83\u7FFB\u8BD1\u6210\u4E2D\u6587\u5C31\u662F\u201C\u540C\u6B65\u201D\u7684\u610F\u601D\u3002</p><p>\u6211\u4EEC\u901A\u5E38\u4F7F\u7528<code>synchronized</code>\u5173\u952E\u5B57\u6765\u7ED9\u4E00\u6BB5\u4EE3\u7801\u6216\u4E00\u4E2A\u65B9\u6CD5\u4E0A\u9501\u3002\u5B83\u901A\u5E38\u6709\u4EE5\u4E0B\u4E09\u79CD\u5F62\u5F0F\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u5173\u952E\u5B57\u5728\u5B9E\u4F8B\u65B9\u6CD5\u4E0A\uFF0C\u9501\u4E3A\u5F53\u524D\u5B9E\u4F8B</span>
<span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">instanceLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// code</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5173\u952E\u5B57\u5728\u9759\u6001\u65B9\u6CD5\u4E0A\uFF0C\u9501\u4E3A\u5F53\u524DClass\u5BF9\u8C61</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">classLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// code</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5173\u952E\u5B57\u5728\u4EE3\u7801\u5757\u4E0A\uFF0C\u9501\u4E3A\u62EC\u53F7\u91CC\u9762\u7684\u5BF9\u8C61</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">blockLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Object</span> o <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// code</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u8FD9\u91CC\u4ECB\u7ECD\u4E00\u4E0B\u201C\u4E34\u754C\u533A\u201D\u7684\u6982\u5FF5\u3002\u6240\u8C13\u201C\u4E34\u754C\u533A\u201D\uFF0C\u6307\u7684\u662F\u67D0\u4E00\u5757\u4EE3\u7801\u533A\u57DF\uFF0C\u5B83\u540C\u4E00\u65F6\u523B\u53EA\u80FD\u7531\u4E00\u4E2A\u7EBF\u7A0B\u6267\u884C\u3002\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u5982\u679C<code>synchronized</code>\u5173\u952E\u5B57\u5728\u65B9\u6CD5\u4E0A\uFF0C\u90A3\u4E34\u754C\u533A\u5C31\u662F\u6574\u4E2A\u65B9\u6CD5\u5185\u90E8\u3002\u800C\u5982\u679C\u662F\u4F7F\u7528synchronized\u4EE3\u7801\u5757\uFF0C\u90A3\u4E34\u754C\u533A\u5C31\u6307\u7684\u662F\u4EE3\u7801\u5757\u5185\u90E8\u7684\u533A\u57DF\u3002</p><p>\u901A\u8FC7\u4E0A\u9762\u7684\u4F8B\u5B50\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u4E0B\u9762\u8FD9\u4E24\u4E2A\u5199\u6CD5\u5176\u5B9E\u662F\u7B49\u4EF7\u7684\u4F5C\u7528\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u5173\u952E\u5B57\u5728\u5B9E\u4F8B\u65B9\u6CD5\u4E0A\uFF0C\u9501\u4E3A\u5F53\u524D\u5B9E\u4F8B</span>
<span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">instanceLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// code</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5173\u952E\u5B57\u5728\u4EE3\u7801\u5757\u4E0A\uFF0C\u9501\u4E3A\u62EC\u53F7\u91CC\u9762\u7684\u5BF9\u8C61</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">blockLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// code</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540C\u7406\uFF0C\u4E0B\u9762\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u4E5F\u5E94\u8BE5\u662F\u7B49\u4EF7\u7684\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u5173\u952E\u5B57\u5728\u9759\u6001\u65B9\u6CD5\u4E0A\uFF0C\u9501\u4E3A\u5F53\u524DClass\u5BF9\u8C61</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">classLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// code</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5173\u952E\u5B57\u5728\u4EE3\u7801\u5757\u4E0A\uFF0C\u9501\u4E3A\u62EC\u53F7\u91CC\u9762\u7684\u5BF9\u8C61</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">blockLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// code</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u51E0\u79CD\u9501" tabindex="-1"><a class="header-anchor" href="#\u51E0\u79CD\u9501" aria-hidden="true">#</a> \u51E0\u79CD\u9501</h2><p>Java 6 \u4E3A\u4E86\u51CF\u5C11\u83B7\u5F97\u9501\u548C\u91CA\u653E\u9501\u5E26\u6765\u7684\u6027\u80FD\u6D88\u8017\uFF0C\u5F15\u5165\u4E86\u201C\u504F\u5411\u9501\u201D\u548C\u201C\u8F7B\u91CF\u7EA7\u9501\u201C\u3002\u5728Java 6 \u4EE5\u524D\uFF0C\u6240\u6709\u7684\u9501\u90FD\u662F\u201D\u91CD\u91CF\u7EA7\u201C\u9501\u3002\u6240\u4EE5\u5728Java 6 \u53CA\u5176\u4EE5\u540E\uFF0C\u4E00\u4E2A\u5BF9\u8C61\u5176\u5B9E\u6709\u56DB\u79CD\u9501\u72B6\u6001\uFF0C\u5B83\u4EEC\u7EA7\u522B\u7531\u4F4E\u5230\u9AD8\u4F9D\u6B21\u662F\uFF1A</p><ol><li>\u65E0\u9501\u72B6\u6001</li><li>\u504F\u5411\u9501\u72B6\u6001</li><li>\u8F7B\u91CF\u7EA7\u9501\u72B6\u6001</li><li>\u91CD\u91CF\u7EA7\u9501\u72B6\u6001</li></ol><p>\u65E0\u9501\u5C31\u662F\u6CA1\u6709\u5BF9\u8D44\u6E90\u8FDB\u884C\u9501\u5B9A\uFF0C\u4EFB\u4F55\u7EBF\u7A0B\u90FD\u53EF\u4EE5\u5C1D\u8BD5\u53BB\u4FEE\u6539\u5B83\uFF0C\u65E0\u9501\u5728\u8FD9\u91CC\u4E0D\u518D\u7EC6\u8BB2\u3002</p><p>\u51E0\u79CD\u9501\u4F1A\u968F\u7740\u7ADE\u4E89\u60C5\u51B5\u9010\u6E10\u5347\u7EA7\uFF0C\u9501\u7684\u5347\u7EA7\u5F88\u5BB9\u6613\u53D1\u751F\uFF0C\u4F46\u662F\u9501\u964D\u7EA7\u53D1\u751F\u7684\u6761\u4EF6\u4F1A\u6BD4\u8F83\u82DB\u523B\uFF0C\u9501\u964D\u7EA7\u53D1\u751F\u5728Stop The World\u671F\u95F4\uFF0C\u5F53JVM\u8FDB\u5165\u5B89\u5168\u70B9\u7684\u65F6\u5019\uFF0C\u4F1A\u68C0\u67E5\u662F\u5426\u6709\u95F2\u7F6E\u7684\u9501\uFF0C\u7136\u540E\u8FDB\u884C\u964D\u7EA7\u3002</p><blockquote><p>\u5173\u4E8E\u9501\u964D\u7EA7\u6709\u4E24\u70B9\u8BF4\u660E\uFF1A</p><p>1.\u4E0D\u540C\u4E8E\u5927\u90E8\u5206\u6587\u7AE0\u8BF4\u9501\u4E0D\u80FD\u964D\u7EA7\uFF0C\u5B9E\u9645\u4E0AHotSpot JVM \u662F\u652F\u6301\u9501\u964D\u7EA7\u7684\uFF0C\u6587\u672B\u6709\u94FE\u63A5\u3002</p><p>2.\u4E0A\u9762\u63D0\u5230\u7684Stop The World\u671F\u95F4\uFF0C\u4EE5\u53CA\u5B89\u5168\u70B9\uFF0C\u8FD9\u4E9B\u77E5\u8BC6\u662F\u5C5E\u4E8EJVM\u7684\u77E5\u8BC6\u8303\u7574\uFF0C\u672C\u6587\u4E0D\u505A\u7EC6\u8BB2\u3002</p></blockquote><p>\u4E0B\u9762\u5206\u522B\u4ECB\u7ECD\u8FD9\u51E0\u79CD\u9501\u4EE5\u53CA\u5B83\u4EEC\u4E4B\u95F4\u7684\u5347\u7EA7\u3002</p><h3 id="java\u5BF9\u8C61\u5934" tabindex="-1"><a class="header-anchor" href="#java\u5BF9\u8C61\u5934" aria-hidden="true">#</a> Java\u5BF9\u8C61\u5934</h3><p>\u524D\u9762\u6211\u4EEC\u63D0\u5230\uFF0CJava\u7684\u9501\u90FD\u662F\u57FA\u4E8E\u5BF9\u8C61\u7684\u3002\u9996\u5148\u6211\u4EEC\u6765\u770B\u770B\u4E00\u4E2A\u5BF9\u8C61\u7684\u201C\u9501\u201D\u7684\u4FE1\u606F\u662F\u5B58\u653E\u5728\u4EC0\u4E48\u5730\u65B9\u7684\u3002</p><p>\u6BCF\u4E2AJava\u5BF9\u8C61\u90FD\u6709\u5BF9\u8C61\u5934\u3002\u5982\u679C\u662F\u975E\u6570\u7EC4\u7C7B\u578B\uFF0C\u5219\u75282\u4E2A\u5B57\u5BBD\u6765\u5B58\u50A8\u5BF9\u8C61\u5934\uFF0C\u5982\u679C\u662F\u6570\u7EC4\uFF0C\u5219\u4F1A\u75283\u4E2A\u5B57\u5BBD\u6765\u5B58\u50A8\u5BF9\u8C61\u5934\u3002\u572832\u4F4D\u5904\u7406\u5668\u4E2D\uFF0C\u4E00\u4E2A\u5B57\u5BBD\u662F32\u4F4D\uFF1B\u572864\u4F4D\u865A\u62DF\u673A\u4E2D\uFF0C\u4E00\u4E2A\u5B57\u5BBD\u662F64\u4F4D\u3002\u5BF9\u8C61\u5934\u7684\u5185\u5BB9\u5982\u4E0B\u8868\uFF1A</p><table><thead><tr><th>\u957F\u5EA6</th><th>\u5185\u5BB9</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>32/64bit</td><td>Mark Word</td><td>\u5B58\u50A8\u5BF9\u8C61\u7684hashCode\u6216\u9501\u4FE1\u606F\u7B49</td></tr><tr><td>32/64bit</td><td>Class Metadata Address</td><td>\u5B58\u50A8\u5230\u5BF9\u8C61\u7C7B\u578B\u6570\u636E\u7684\u6307\u9488</td></tr><tr><td>32/64bit</td><td>Array length</td><td>\u6570\u7EC4\u7684\u957F\u5EA6\uFF08\u5982\u679C\u662F\u6570\u7EC4\uFF09</td></tr></tbody></table><p>\u6211\u4EEC\u4E3B\u8981\u6765\u770B\u770BMark Word\u7684\u683C\u5F0F\uFF1A</p><table><thead><tr><th>\u9501\u72B6\u6001</th><th>29 bit \u6216 61 bit</th><th>1 bit \u662F\u5426\u662F\u504F\u5411\u9501\uFF1F</th><th>2 bit \u9501\u6807\u5FD7\u4F4D</th></tr></thead><tbody><tr><td>\u65E0\u9501</td><td></td><td>0</td><td>01</td></tr><tr><td>\u504F\u5411\u9501</td><td>\u7EBF\u7A0BID</td><td>1</td><td>01</td></tr><tr><td>\u8F7B\u91CF\u7EA7\u9501</td><td>\u6307\u5411\u6808\u4E2D\u9501\u8BB0\u5F55\u7684\u6307\u9488</td><td>\u6B64\u65F6\u8FD9\u4E00\u4F4D\u4E0D\u7528\u4E8E\u6807\u8BC6\u504F\u5411\u9501</td><td>00</td></tr><tr><td>\u91CD\u91CF\u7EA7\u9501</td><td>\u6307\u5411\u4E92\u65A5\u91CF\uFF08\u91CD\u91CF\u7EA7\u9501\uFF09\u7684\u6307\u9488</td><td>\u6B64\u65F6\u8FD9\u4E00\u4F4D\u4E0D\u7528\u4E8E\u6807\u8BC6\u504F\u5411\u9501</td><td>10</td></tr><tr><td>GC\u6807\u8BB0</td><td></td><td>\u6B64\u65F6\u8FD9\u4E00\u4F4D\u4E0D\u7528\u4E8E\u6807\u8BC6\u504F\u5411\u9501</td><td>11</td></tr></tbody></table><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u5F53\u5BF9\u8C61\u72B6\u6001\u4E3A\u504F\u5411\u9501\u65F6\uFF0C<code>Mark Word</code>\u5B58\u50A8\u7684\u662F\u504F\u5411\u7684\u7EBF\u7A0BID\uFF1B\u5F53\u72B6\u6001\u4E3A\u8F7B\u91CF\u7EA7\u9501\u65F6\uFF0C<code>Mark Word</code>\u5B58\u50A8\u7684\u662F\u6307\u5411\u7EBF\u7A0B\u6808\u4E2D<code>Lock Record</code>\u7684\u6307\u9488\uFF1B\u5F53\u72B6\u6001\u4E3A\u91CD\u91CF\u7EA7\u9501\u65F6\uFF0C<code>Mark Word</code>\u4E3A\u6307\u5411\u5806\u4E2D\u7684monitor\u5BF9\u8C61\u7684\u6307\u9488\u3002</p><h3 id="\u504F\u5411\u9501" tabindex="-1"><a class="header-anchor" href="#\u504F\u5411\u9501" aria-hidden="true">#</a> \u504F\u5411\u9501</h3><p>Hotspot\u7684\u4F5C\u8005\u7ECF\u8FC7\u4EE5\u5F80\u7684\u7814\u7A76\u53D1\u73B0\u5927\u591A\u6570\u60C5\u51B5\u4E0B<strong>\u9501\u4E0D\u4EC5\u4E0D\u5B58\u5728\u591A\u7EBF\u7A0B\u7ADE\u4E89\uFF0C\u800C\u4E14\u603B\u662F\u7531\u540C\u4E00\u7EBF\u7A0B\u591A\u6B21\u83B7\u5F97</strong>\uFF0C\u4E8E\u662F\u5F15\u5165\u4E86\u504F\u5411\u9501\u3002</p><p>\u504F\u5411\u9501\u4F1A\u504F\u5411\u4E8E\u7B2C\u4E00\u4E2A\u8BBF\u95EE\u9501\u7684\u7EBF\u7A0B\uFF0C\u5982\u679C\u5728\u63A5\u4E0B\u6765\u7684\u8FD0\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u8BE5\u9501\u6CA1\u6709\u88AB\u5176\u4ED6\u7684\u7EBF\u7A0B\u8BBF\u95EE\uFF0C\u5219\u6301\u6709\u504F\u5411\u9501\u7684\u7EBF\u7A0B\u5C06\u6C38\u8FDC\u4E0D\u9700\u8981\u89E6\u53D1\u540C\u6B65\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C<strong>\u504F\u5411\u9501\u5728\u8D44\u6E90\u65E0\u7ADE\u4E89\u60C5\u51B5\u4E0B\u6D88\u9664\u4E86\u540C\u6B65\u8BED\u53E5\uFF0C\u8FDECAS\u64CD\u4F5C\u90FD\u4E0D\u505A\u4E86\uFF0C\u63D0\u9AD8\u4E86\u7A0B\u5E8F\u7684\u8FD0\u884C\u6027\u80FD\u3002</strong></p><blockquote><p>\u5927\u767D\u8BDD\u5C31\u662F\u5BF9\u9501\u7F6E\u4E2A\u53D8\u91CF\uFF0C\u5982\u679C\u53D1\u73B0\u4E3Atrue\uFF0C\u4EE3\u8868\u8D44\u6E90\u65E0\u7ADE\u4E89\uFF0C\u5219\u65E0\u9700\u518D\u8D70\u5404\u79CD\u52A0\u9501/\u89E3\u9501\u6D41\u7A0B\u3002\u5982\u679C\u4E3Afalse\uFF0C\u4EE3\u8868\u5B58\u5728\u5176\u4ED6\u7EBF\u7A0B\u7ADE\u4E89\u8D44\u6E90\uFF0C\u90A3\u4E48\u5C31\u4F1A\u8D70\u540E\u9762\u7684\u6D41\u7A0B\u3002</p></blockquote><h4 id="\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> <strong>\u5B9E\u73B0\u539F\u7406</strong></h4><p>\u4E00\u4E2A\u7EBF\u7A0B\u5728\u7B2C\u4E00\u6B21\u8FDB\u5165\u540C\u6B65\u5757\u65F6\uFF0C\u4F1A\u5728\u5BF9\u8C61\u5934\u548C\u6808\u5E27\u4E2D\u7684\u9501\u8BB0\u5F55\u91CC\u5B58\u50A8\u9501\u7684\u504F\u5411\u7684\u7EBF\u7A0BID\u3002\u5F53\u4E0B\u6B21\u8BE5\u7EBF\u7A0B\u8FDB\u5165\u8FD9\u4E2A\u540C\u6B65\u5757\u65F6\uFF0C\u4F1A\u53BB\u68C0\u67E5\u9501\u7684Mark Word\u91CC\u9762\u662F\u4E0D\u662F\u653E\u7684\u81EA\u5DF1\u7684\u7EBF\u7A0BID\u3002</p><p>\u5982\u679C\u662F\uFF0C\u8868\u660E\u8BE5\u7EBF\u7A0B\u5DF2\u7ECF\u83B7\u5F97\u4E86\u9501\uFF0C\u4EE5\u540E\u8BE5\u7EBF\u7A0B\u5728\u8FDB\u5165\u548C\u9000\u51FA\u540C\u6B65\u5757\u65F6\u4E0D\u9700\u8981\u82B1\u8D39CAS\u64CD\u4F5C\u6765\u52A0\u9501\u548C\u89E3\u9501 \uFF1B\u5982\u679C\u4E0D\u662F\uFF0C\u5C31\u4EE3\u8868\u6709\u53E6\u4E00\u4E2A\u7EBF\u7A0B\u6765\u7ADE\u4E89\u8FD9\u4E2A\u504F\u5411\u9501\u3002\u8FD9\u4E2A\u65F6\u5019\u4F1A\u5C1D\u8BD5\u4F7F\u7528CAS\u6765\u66FF\u6362Mark Word\u91CC\u9762\u7684\u7EBF\u7A0BID\u4E3A\u65B0\u7EBF\u7A0B\u7684ID\uFF0C\u8FD9\u4E2A\u65F6\u5019\u8981\u5206\u4E24\u79CD\u60C5\u51B5\uFF1A</p><ul><li>\u6210\u529F\uFF0C\u8868\u793A\u4E4B\u524D\u7684\u7EBF\u7A0B\u4E0D\u5B58\u5728\u4E86\uFF0C Mark Word\u91CC\u9762\u7684\u7EBF\u7A0BID\u4E3A\u65B0\u7EBF\u7A0B\u7684ID\uFF0C\u9501\u4E0D\u4F1A\u5347\u7EA7\uFF0C\u4ECD\u7136\u4E3A\u504F\u5411\u9501\uFF1B</li><li>\u5931\u8D25\uFF0C\u8868\u793A\u4E4B\u524D\u7684\u7EBF\u7A0B\u4ECD\u7136\u5B58\u5728\uFF0C\u90A3\u4E48\u6682\u505C\u4E4B\u524D\u7684\u7EBF\u7A0B\uFF0C\u8BBE\u7F6E\u504F\u5411\u9501\u6807\u8BC6\u4E3A0\uFF0C\u5E76\u8BBE\u7F6E\u9501\u6807\u5FD7\u4F4D\u4E3A00\uFF0C\u5347\u7EA7\u4E3A\u8F7B\u91CF\u7EA7\u9501\uFF0C\u4F1A\u6309\u7167\u8F7B\u91CF\u7EA7\u9501\u7684\u65B9\u5F0F\u8FDB\u884C\u7ADE\u4E89\u9501\u3002</li></ul><blockquote><p>CAS: Compare and Swap</p><p>\u6BD4\u8F83\u5E76\u8BBE\u7F6E\u3002\u7528\u4E8E\u5728\u786C\u4EF6\u5C42\u9762\u4E0A\u63D0\u4F9B\u539F\u5B50\u6027\u64CD\u4F5C\u3002\u5728 Intel \u5904\u7406\u5668\u4E2D\uFF0C\u6BD4\u8F83\u5E76\u4EA4\u6362\u901A\u8FC7\u6307\u4EE4cmpxchg\u5B9E\u73B0\u3002 \u6BD4\u8F83\u662F\u5426\u548C\u7ED9\u5B9A\u7684\u6570\u503C\u4E00\u81F4\uFF0C\u5982\u679C\u4E00\u81F4\u5219\u4FEE\u6539\uFF0C\u4E0D\u4E00\u81F4\u5219\u4E0D\u4FEE\u6539\u3002</p></blockquote><p>\u7EBF\u7A0B\u7ADE\u4E89\u504F\u5411\u9501\u7684\u8FC7\u7A0B\u5982\u4E0B\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/synchronized-c223913c-6c10-4dd0-849c-5e8f981cba48.jpg" alt=""></p><p>\u56FE\u4E2D\u6D89\u53CA\u5230\u4E86lock record\u6307\u9488\u6307\u5411\u5F53\u524D\u5806\u6808\u4E2D\u7684\u6700\u8FD1\u4E00\u4E2Alock record\uFF0C\u662F\u8F7B\u91CF\u7EA7\u9501\u6309\u7167\u5148\u6765\u5148\u670D\u52A1\u7684\u6A21\u5F0F\u8FDB\u884C\u4E86\u8F7B\u91CF\u7EA7\u9501\u7684\u52A0\u9501\u3002</p><h4 id="\u64A4\u9500\u504F\u5411\u9501" tabindex="-1"><a class="header-anchor" href="#\u64A4\u9500\u504F\u5411\u9501" aria-hidden="true">#</a> \u64A4\u9500\u504F\u5411\u9501</h4><p>\u504F\u5411\u9501\u4F7F\u7528\u4E86\u4E00\u79CD<strong>\u7B49\u5230\u7ADE\u4E89\u51FA\u73B0\u624D\u91CA\u653E\u9501\u7684\u673A\u5236</strong>\uFF0C\u6240\u4EE5\u5F53\u5176\u4ED6\u7EBF\u7A0B\u5C1D\u8BD5\u7ADE\u4E89\u504F\u5411\u9501\u65F6\uFF0C \u6301\u6709\u504F\u5411\u9501\u7684\u7EBF\u7A0B\u624D\u4F1A\u91CA\u653E\u9501\u3002</p><p>\u504F\u5411\u9501\u5347\u7EA7\u6210\u8F7B\u91CF\u7EA7\u9501\u65F6\uFF0C\u4F1A\u6682\u505C\u62E5\u6709\u504F\u5411\u9501\u7684\u7EBF\u7A0B\uFF0C\u91CD\u7F6E\u504F\u5411\u9501\u6807\u8BC6\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u770B\u8D77\u6765\u5BB9\u6613\uFF0C\u5B9E\u5219\u5F00\u9500\u8FD8\u662F\u5F88\u5927\u7684\uFF0C\u5927\u6982\u7684\u8FC7\u7A0B\u5982\u4E0B\uFF1A</p><ol><li>\u5728\u4E00\u4E2A\u5B89\u5168\u70B9\uFF08\u5728\u8FD9\u4E2A\u65F6\u95F4\u70B9\u4E0A\u6CA1\u6709\u5B57\u8282\u7801\u6B63\u5728\u6267\u884C\uFF09\u505C\u6B62\u62E5\u6709\u9501\u7684\u7EBF\u7A0B\u3002</li><li>\u904D\u5386\u7EBF\u7A0B\u6808\uFF0C\u5982\u679C\u5B58\u5728\u9501\u8BB0\u5F55\u7684\u8BDD\uFF0C\u9700\u8981\u4FEE\u590D\u9501\u8BB0\u5F55\u548CMark Word\uFF0C\u4F7F\u5176\u53D8\u6210\u65E0\u9501\u72B6\u6001\u3002</li><li>\u5524\u9192\u88AB\u505C\u6B62\u7684\u7EBF\u7A0B\uFF0C\u5C06\u5F53\u524D\u9501\u5347\u7EA7\u6210\u8F7B\u91CF\u7EA7\u9501\u3002</li></ol><p>\u6240\u4EE5\uFF0C\u5982\u679C\u5E94\u7528\u7A0B\u5E8F\u91CC\u6240\u6709\u7684\u9501\u901A\u5E38\u5904\u4E8E\u7ADE\u4E89\u72B6\u6001\uFF0C\u90A3\u4E48\u504F\u5411\u9501\u5C31\u4F1A\u662F\u4E00\u79CD\u7D2F\u8D58\uFF0C\u5BF9\u4E8E\u8FD9\u79CD\u60C5\u51B5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4E00\u5F00\u59CB\u5C31\u628A\u504F\u5411\u9501\u8FD9\u4E2A\u9ED8\u8BA4\u529F\u80FD\u7ED9\u5173\u95ED\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token operator">-</span>XX<span class="token operator">:</span><span class="token class-name">UseBiasedLocking</span><span class="token operator">=</span><span class="token boolean">false</span>\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0B\u9762\u8FD9\u4E2A\u7ECF\u5178\u7684\u56FE\u603B\u7ED3\u4E86\u504F\u5411\u9501\u7684\u83B7\u5F97\u548C\u64A4\u9500\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/synchronized-23a5729f-71d5-44ce-af19-72ee20ae753e.png" alt=""></p><h3 id="\u8F7B\u91CF\u7EA7\u9501" tabindex="-1"><a class="header-anchor" href="#\u8F7B\u91CF\u7EA7\u9501" aria-hidden="true">#</a> \u8F7B\u91CF\u7EA7\u9501</h3><p>\u591A\u4E2A\u7EBF\u7A0B\u5728\u4E0D\u540C\u65F6\u6BB5\u83B7\u53D6\u540C\u4E00\u628A\u9501\uFF0C\u5373\u4E0D\u5B58\u5728\u9501\u7ADE\u4E89\u7684\u60C5\u51B5\uFF0C\u4E5F\u5C31\u6CA1\u6709\u7EBF\u7A0B\u963B\u585E\u3002\u9488\u5BF9\u8FD9\u79CD\u60C5\u51B5\uFF0CJVM\u91C7\u7528\u8F7B\u91CF\u7EA7\u9501\u6765\u907F\u514D\u7EBF\u7A0B\u7684\u963B\u585E\u4E0E\u5524\u9192\u3002</p><h4 id="\u8F7B\u91CF\u7EA7\u9501\u7684\u52A0\u9501" tabindex="-1"><a class="header-anchor" href="#\u8F7B\u91CF\u7EA7\u9501\u7684\u52A0\u9501" aria-hidden="true">#</a> \u8F7B\u91CF\u7EA7\u9501\u7684\u52A0\u9501</h4><p>JVM\u4F1A\u4E3A\u6BCF\u4E2A\u7EBF\u7A0B\u5728\u5F53\u524D\u7EBF\u7A0B\u7684\u6808\u5E27\u4E2D\u521B\u5EFA\u7528\u4E8E\u5B58\u50A8\u9501\u8BB0\u5F55\u7684\u7A7A\u95F4\uFF0C\u6211\u4EEC\u79F0\u4E3ADisplaced Mark Word\u3002\u5982\u679C\u4E00\u4E2A\u7EBF\u7A0B\u83B7\u5F97\u9501\u7684\u65F6\u5019\u53D1\u73B0\u662F\u8F7B\u91CF\u7EA7\u9501\uFF0C\u4F1A\u628A\u9501\u7684Mark Word\u590D\u5236\u5230\u81EA\u5DF1\u7684Displaced Mark Word\u91CC\u9762\u3002</p><p>\u7136\u540E\u7EBF\u7A0B\u5C1D\u8BD5\u7528CAS\u5C06\u9501\u7684Mark Word\u66FF\u6362\u4E3A\u6307\u5411\u9501\u8BB0\u5F55\u7684\u6307\u9488\u3002\u5982\u679C\u6210\u529F\uFF0C\u5F53\u524D\u7EBF\u7A0B\u83B7\u5F97\u9501\uFF0C\u5982\u679C\u5931\u8D25\uFF0C\u8868\u793AMark Word\u5DF2\u7ECF\u88AB\u66FF\u6362\u6210\u4E86\u5176\u4ED6\u7EBF\u7A0B\u7684\u9501\u8BB0\u5F55\uFF0C\u8BF4\u660E\u5728\u4E0E\u5176\u5B83\u7EBF\u7A0B\u7ADE\u4E89\u9501\uFF0C\u5F53\u524D\u7EBF\u7A0B\u5C31\u5C1D\u8BD5\u4F7F\u7528\u81EA\u65CB\u6765\u83B7\u53D6\u9501\u3002</p><blockquote><p>\u81EA\u65CB\uFF1A\u4E0D\u65AD\u5C1D\u8BD5\u53BB\u83B7\u53D6\u9501\uFF0C\u4E00\u822C\u7528\u5FAA\u73AF\u6765\u5B9E\u73B0\u3002</p></blockquote><p>\u81EA\u65CB\u662F\u9700\u8981\u6D88\u8017CPU\u7684\uFF0C\u5982\u679C\u4E00\u76F4\u83B7\u53D6\u4E0D\u5230\u9501\u7684\u8BDD\uFF0C\u90A3\u8BE5\u7EBF\u7A0B\u5C31\u4E00\u76F4\u5904\u5728\u81EA\u65CB\u72B6\u6001\uFF0C\u767D\u767D\u6D6A\u8D39CPU\u8D44\u6E90\u3002\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u6700\u7B80\u5355\u7684\u529E\u6CD5\u5C31\u662F\u6307\u5B9A\u81EA\u65CB\u7684\u6B21\u6570\uFF0C\u4F8B\u5982\u8BA9\u5176\u5FAA\u73AF10\u6B21\uFF0C\u5982\u679C\u8FD8\u6CA1\u83B7\u53D6\u5230\u9501\u5C31\u8FDB\u5165\u963B\u585E\u72B6\u6001\u3002</p><p>\u4F46\u662FJDK\u91C7\u7528\u4E86\u66F4\u806A\u660E\u7684\u65B9\u5F0F\u2014\u2014\u9002\u5E94\u6027\u81EA\u65CB\uFF0C\u7B80\u5355\u6765\u8BF4\u5C31\u662F\u7EBF\u7A0B\u5982\u679C\u81EA\u65CB\u6210\u529F\u4E86\uFF0C\u5219\u4E0B\u6B21\u81EA\u65CB\u7684\u6B21\u6570\u4F1A\u66F4\u591A\uFF0C\u5982\u679C\u81EA\u65CB\u5931\u8D25\u4E86\uFF0C\u5219\u81EA\u65CB\u7684\u6B21\u6570\u5C31\u4F1A\u51CF\u5C11\u3002</p><p>\u81EA\u65CB\u4E5F\u4E0D\u662F\u4E00\u76F4\u8FDB\u884C\u4E0B\u53BB\u7684\uFF0C\u5982\u679C\u81EA\u65CB\u5230\u4E00\u5B9A\u7A0B\u5EA6\uFF08\u548CJVM\u3001\u64CD\u4F5C\u7CFB\u7EDF\u76F8\u5173\uFF09\uFF0C\u4F9D\u7136\u6CA1\u6709\u83B7\u53D6\u5230\u9501\uFF0C\u79F0\u4E3A\u81EA\u65CB\u5931\u8D25\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u7EBF\u7A0B\u4F1A\u963B\u585E\u3002\u540C\u65F6\u8FD9\u4E2A\u9501\u5C31\u4F1A<strong>\u5347\u7EA7\u6210\u91CD\u91CF\u7EA7\u9501</strong>\u3002</p><p><strong>\u8F7B\u91CF\u7EA7\u9501\u7684\u91CA\u653E\uFF1A</strong></p><p>\u5728\u91CA\u653E\u9501\u65F6\uFF0C\u5F53\u524D\u7EBF\u7A0B\u4F1A\u4F7F\u7528CAS\u64CD\u4F5C\u5C06Displaced Mark Word\u7684\u5185\u5BB9\u590D\u5236\u56DE\u9501\u7684Mark Word\u91CC\u9762\u3002\u5982\u679C\u6CA1\u6709\u53D1\u751F\u7ADE\u4E89\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u590D\u5236\u7684\u64CD\u4F5C\u4F1A\u6210\u529F\u3002\u5982\u679C\u6709\u5176\u4ED6\u7EBF\u7A0B\u56E0\u4E3A\u81EA\u65CB\u591A\u6B21\u5BFC\u81F4\u8F7B\u91CF\u7EA7\u9501\u5347\u7EA7\u6210\u4E86\u91CD\u91CF\u7EA7\u9501\uFF0C\u90A3\u4E48CAS\u64CD\u4F5C\u4F1A\u5931\u8D25\uFF0C\u6B64\u65F6\u4F1A\u91CA\u653E\u9501\u5E76\u5524\u9192\u88AB\u963B\u585E\u7684\u7EBF\u7A0B\u3002</p><p>\u4E00\u5F20\u56FE\u8BF4\u660E\u52A0\u9501\u548C\u91CA\u653E\u9501\u7684\u8FC7\u7A0B\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/synchronized-1bb5f956-d3da-4e7b-b426-1d5d9314fe5b.png" alt=""></p><h3 id="\u91CD\u91CF\u7EA7\u9501" tabindex="-1"><a class="header-anchor" href="#\u91CD\u91CF\u7EA7\u9501" aria-hidden="true">#</a> \u91CD\u91CF\u7EA7\u9501</h3><p>\u91CD\u91CF\u7EA7\u9501\u4F9D\u8D56\u4E8E\u64CD\u4F5C\u7CFB\u7EDF\u7684\u4E92\u65A5\u91CF\uFF08mutex\uFF09 \u5B9E\u73B0\u7684\uFF0C\u800C\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\u7EBF\u7A0B\u95F4\u72B6\u6001\u7684\u8F6C\u6362\u9700\u8981\u76F8\u5BF9\u6BD4\u8F83\u957F\u7684\u65F6\u95F4\uFF0C\u6240\u4EE5\u91CD\u91CF\u7EA7\u9501\u6548\u7387\u5F88\u4F4E\uFF0C\u4F46\u88AB\u963B\u585E\u7684\u7EBF\u7A0B\u4E0D\u4F1A\u6D88\u8017CPU\u3002</p><p>\u524D\u9762\u8BF4\u5230\uFF0C\u6BCF\u4E00\u4E2A\u5BF9\u8C61\u90FD\u53EF\u4EE5\u5F53\u505A\u4E00\u4E2A\u9501\uFF0C\u5F53\u591A\u4E2A\u7EBF\u7A0B\u540C\u65F6\u8BF7\u6C42\u67D0\u4E2A\u5BF9\u8C61\u9501\u65F6\uFF0C\u5BF9\u8C61\u9501\u4F1A\u8BBE\u7F6E\u51E0\u79CD\u72B6\u6001\u7528\u6765\u533A\u5206\u8BF7\u6C42\u7684\u7EBF\u7A0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Contention List\uFF1A\u6240\u6709\u8BF7\u6C42\u9501\u7684\u7EBF\u7A0B\u5C06\u88AB\u9996\u5148\u653E\u7F6E\u5230\u8BE5\u7ADE\u4E89\u961F\u5217
Entry List\uFF1AContention List\u4E2D\u90A3\u4E9B\u6709\u8D44\u683C\u6210\u4E3A\u5019\u9009\u4EBA\u7684\u7EBF\u7A0B\u88AB\u79FB\u5230Entry List
Wait Set\uFF1A\u90A3\u4E9B\u8C03\u7528wait\u65B9\u6CD5\u88AB\u963B\u585E\u7684\u7EBF\u7A0B\u88AB\u653E\u7F6E\u5230Wait Set
OnDeck\uFF1A\u4EFB\u4F55\u65F6\u523B\u6700\u591A\u53EA\u80FD\u6709\u4E00\u4E2A\u7EBF\u7A0B\u6B63\u5728\u7ADE\u4E89\u9501\uFF0C\u8BE5\u7EBF\u7A0B\u79F0\u4E3AOnDeck
Owner\uFF1A\u83B7\u5F97\u9501\u7684\u7EBF\u7A0B\u79F0\u4E3AOwner
!Owner\uFF1A\u91CA\u653E\u9501\u7684\u7EBF\u7A0B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u4E00\u4E2A\u7EBF\u7A0B\u5C1D\u8BD5\u83B7\u5F97\u9501\u65F6\uFF0C\u5982\u679C\u8BE5\u9501\u5DF2\u7ECF\u88AB\u5360\u7528\uFF0C\u5219\u4F1A\u5C06\u8BE5\u7EBF\u7A0B\u5C01\u88C5\u6210\u4E00\u4E2A<code>ObjectWaiter</code>\u5BF9\u8C61\u63D2\u5165\u5230Contention List\u7684\u961F\u5217\u7684\u961F\u9996\uFF0C\u7136\u540E\u8C03\u7528<code>park</code>\u51FD\u6570\u6302\u8D77\u5F53\u524D\u7EBF\u7A0B\u3002</p><p>\u5F53\u7EBF\u7A0B\u91CA\u653E\u9501\u65F6\uFF0C\u4F1A\u4ECEContention List\u6216EntryList\u4E2D\u6311\u9009\u4E00\u4E2A\u7EBF\u7A0B\u5524\u9192\uFF0C\u88AB\u9009\u4E2D\u7684\u7EBF\u7A0B\u53EB\u505A<code>Heir presumptive</code>\u5373\u5047\u5B9A\u7EE7\u627F\u4EBA\uFF0C\u5047\u5B9A\u7EE7\u627F\u4EBA\u88AB\u5524\u9192\u540E\u4F1A\u5C1D\u8BD5\u83B7\u5F97\u9501\uFF0C\u4F46<code>synchronized</code>\u662F\u975E\u516C\u5E73\u7684\uFF0C\u6240\u4EE5\u5047\u5B9A\u7EE7\u627F\u4EBA\u4E0D\u4E00\u5B9A\u80FD\u83B7\u5F97\u9501\u3002\u8FD9\u662F\u56E0\u4E3A\u5BF9\u4E8E\u91CD\u91CF\u7EA7\u9501\uFF0C\u7EBF\u7A0B\u5148\u81EA\u65CB\u5C1D\u8BD5\u83B7\u5F97\u9501\uFF0C\u8FD9\u6837\u505A\u7684\u76EE\u7684\u662F\u4E3A\u4E86\u51CF\u5C11\u6267\u884C\u64CD\u4F5C\u7CFB\u7EDF\u540C\u6B65\u64CD\u4F5C\u5E26\u6765\u7684\u5F00\u9500\u3002\u5982\u679C\u81EA\u65CB\u4E0D\u6210\u529F\u518D\u8FDB\u5165\u7B49\u5F85\u961F\u5217\u3002\u8FD9\u5BF9\u90A3\u4E9B\u5DF2\u7ECF\u5728\u7B49\u5F85\u961F\u5217\u4E2D\u7684\u7EBF\u7A0B\u6765\u8BF4\uFF0C\u7A0D\u5FAE\u663E\u5F97\u4E0D\u516C\u5E73\uFF0C\u8FD8\u6709\u4E00\u4E2A\u4E0D\u516C\u5E73\u7684\u5730\u65B9\u662F\u81EA\u65CB\u7EBF\u7A0B\u53EF\u80FD\u4F1A\u62A2\u5360\u4E86Ready\u7EBF\u7A0B\u7684\u9501\u3002</p><p>\u5982\u679C\u7EBF\u7A0B\u83B7\u5F97\u9501\u540E\u8C03\u7528<code>Object.wait</code>\u65B9\u6CD5\uFF0C\u5219\u4F1A\u5C06\u7EBF\u7A0B\u52A0\u5165\u5230WaitSet\u4E2D\uFF0C\u5F53\u88AB<code>Object.notify</code>\u5524\u9192\u540E\uFF0C\u4F1A\u5C06\u7EBF\u7A0B\u4ECEWaitSet\u79FB\u52A8\u5230Contention List\u6216EntryList\u4E2D\u53BB\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5F53\u8C03\u7528\u4E00\u4E2A\u9501\u5BF9\u8C61\u7684<code>wait</code>\u6216<code>notify</code>\u65B9\u6CD5\u65F6\uFF0C<strong>\u5982\u5F53\u524D\u9501\u7684\u72B6\u6001\u662F\u504F\u5411\u9501\u6216\u8F7B\u91CF\u7EA7\u9501\u5219\u4F1A\u5148\u81A8\u80C0\u6210\u91CD\u91CF\u7EA7\u9501</strong>\u3002</p><h3 id="\u9501\u7684\u5347\u7EA7\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u9501\u7684\u5347\u7EA7\u6D41\u7A0B" aria-hidden="true">#</a> \u9501\u7684\u5347\u7EA7\u6D41\u7A0B</h3><p>\u6BCF\u4E00\u4E2A\u7EBF\u7A0B\u5728\u51C6\u5907\u83B7\u53D6\u5171\u4EAB\u8D44\u6E90\u65F6\uFF1A \u7B2C\u4E00\u6B65\uFF0C\u68C0\u67E5MarkWord\u91CC\u9762\u662F\u4E0D\u662F\u653E\u7684\u81EA\u5DF1\u7684ThreadId ,\u5982\u679C\u662F\uFF0C\u8868\u793A\u5F53\u524D\u7EBF\u7A0B\u662F\u5904\u4E8E \u201C\u504F\u5411\u9501\u201D \u3002</p><p>\u7B2C\u4E8C\u6B65\uFF0C\u5982\u679CMarkWord\u4E0D\u662F\u81EA\u5DF1\u7684ThreadId\uFF0C\u9501\u5347\u7EA7\uFF0C\u8FD9\u65F6\u5019\uFF0C\u7528CAS\u6765\u6267\u884C\u5207\u6362\uFF0C\u65B0\u7684\u7EBF\u7A0B\u6839\u636EMarkWord\u91CC\u9762\u73B0\u6709\u7684ThreadId\uFF0C\u901A\u77E5\u4E4B\u524D\u7EBF\u7A0B\u6682\u505C\uFF0C\u4E4B\u524D\u7EBF\u7A0B\u5C06Markword\u7684\u5185\u5BB9\u7F6E\u4E3A\u7A7A\u3002</p><p>\u7B2C\u4E09\u6B65\uFF0C\u4E24\u4E2A\u7EBF\u7A0B\u90FD\u628A\u9501\u5BF9\u8C61\u7684HashCode\u590D\u5236\u5230\u81EA\u5DF1\u65B0\u5EFA\u7684\u7528\u4E8E\u5B58\u50A8\u9501\u7684\u8BB0\u5F55\u7A7A\u95F4\uFF0C\u63A5\u7740\u5F00\u59CB\u901A\u8FC7CAS\u64CD\u4F5C\uFF0C \u628A\u9501\u5BF9\u8C61\u7684MarKword\u7684\u5185\u5BB9\u4FEE\u6539\u4E3A\u81EA\u5DF1\u65B0\u5EFA\u7684\u8BB0\u5F55\u7A7A\u95F4\u7684\u5730\u5740\u7684\u65B9\u5F0F\u7ADE\u4E89MarkWord\u3002</p><p>\u7B2C\u56DB\u6B65\uFF0C\u7B2C\u4E09\u6B65\u4E2D\u6210\u529F\u6267\u884CCAS\u7684\u83B7\u5F97\u8D44\u6E90\uFF0C\u5931\u8D25\u7684\u5219\u8FDB\u5165\u81EA\u65CB \u3002</p><p>\u7B2C\u4E94\u6B65\uFF0C\u81EA\u65CB\u7684\u7EBF\u7A0B\u5728\u81EA\u65CB\u8FC7\u7A0B\u4E2D\uFF0C\u6210\u529F\u83B7\u5F97\u8D44\u6E90(\u5373\u4E4B\u524D\u83B7\u7684\u8D44\u6E90\u7684\u7EBF\u7A0B\u6267\u884C\u5B8C\u6210\u5E76\u91CA\u653E\u4E86\u5171\u4EAB\u8D44\u6E90)\uFF0C\u5219\u6574\u4E2A\u72B6\u6001\u4F9D\u7136\u5904\u4E8E \u8F7B\u91CF\u7EA7\u9501\u7684\u72B6\u6001\uFF0C\u5982\u679C\u81EA\u65CB\u5931\u8D25 \u3002</p><p>\u7B2C\u516D\u6B65\uFF0C\u8FDB\u5165\u91CD\u91CF\u7EA7\u9501\u7684\u72B6\u6001\uFF0C\u8FD9\u4E2A\u65F6\u5019\uFF0C\u81EA\u65CB\u7684\u7EBF\u7A0B\u8FDB\u884C\u963B\u585E\uFF0C\u7B49\u5F85\u4E4B\u524D\u7EBF\u7A0B\u6267\u884C\u5B8C\u6210\u5E76\u5524\u9192\u81EA\u5DF1\u3002</p><h3 id="\u5404\u79CD\u9501\u7684\u4F18\u7F3A\u70B9\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#\u5404\u79CD\u9501\u7684\u4F18\u7F3A\u70B9\u5BF9\u6BD4" aria-hidden="true">#</a> \u5404\u79CD\u9501\u7684\u4F18\u7F3A\u70B9\u5BF9\u6BD4</h3><p>\u4E0B\u8868\u6765\u81EA\u300AJava\u5E76\u53D1\u7F16\u7A0B\u7684\u827A\u672F\u300B\uFF1A</p><table><thead><tr><th>\u9501</th><th>\u4F18\u70B9</th><th>\u7F3A\u70B9</th><th>\u9002\u7528\u573A\u666F</th></tr></thead><tbody><tr><td>\u504F\u5411\u9501</td><td>\u52A0\u9501\u548C\u89E3\u9501\u4E0D\u9700\u8981\u989D\u5916\u7684\u6D88\u8017\uFF0C\u548C\u6267\u884C\u975E\u540C\u6B65\u65B9\u6CD5\u6BD4\u4EC5\u5B58\u5728\u7EB3\u79D2\u7EA7\u7684\u5DEE\u8DDD\u3002</td><td>\u5982\u679C\u7EBF\u7A0B\u95F4\u5B58\u5728\u9501\u7ADE\u4E89\uFF0C\u4F1A\u5E26\u6765\u989D\u5916\u7684\u9501\u64A4\u9500\u7684\u6D88\u8017\u3002</td><td>\u9002\u7528\u4E8E\u53EA\u6709\u4E00\u4E2A\u7EBF\u7A0B\u8BBF\u95EE\u540C\u6B65\u5757\u573A\u666F\u3002</td></tr><tr><td>\u8F7B\u91CF\u7EA7\u9501</td><td>\u7ADE\u4E89\u7684\u7EBF\u7A0B\u4E0D\u4F1A\u963B\u585E\uFF0C\u63D0\u9AD8\u4E86\u7A0B\u5E8F\u7684\u54CD\u5E94\u901F\u5EA6\u3002</td><td>\u5982\u679C\u59CB\u7EC8\u5F97\u4E0D\u5230\u9501\u7ADE\u4E89\u7684\u7EBF\u7A0B\u4F7F\u7528\u81EA\u65CB\u4F1A\u6D88\u8017CPU\u3002</td><td>\u8FFD\u6C42\u54CD\u5E94\u65F6\u95F4\u3002\u540C\u6B65\u5757\u6267\u884C\u901F\u5EA6\u975E\u5E38\u5FEB\u3002</td></tr><tr><td>\u91CD\u91CF\u7EA7\u9501</td><td>\u7EBF\u7A0B\u7ADE\u4E89\u4E0D\u4F7F\u7528\u81EA\u65CB\uFF0C\u4E0D\u4F1A\u6D88\u8017CPU\u3002</td><td>\u7EBF\u7A0B\u963B\u585E\uFF0C\u54CD\u5E94\u65F6\u95F4\u7F13\u6162\u3002</td><td>\u8FFD\u6C42\u541E\u5410\u91CF\u3002\u540C\u6B65\u5757\u6267\u884C\u65F6\u95F4\u8F83\u957F\u3002</td></tr></tbody></table><hr>`,79),l=n("p",null,"\u7F16\u8F91\uFF1A\u6C89\u9ED8\u738B\u4E8C\uFF0C\u5185\u5BB9\u5927\u90E8\u5206\u6765\u6E90\u4EE5\u4E0B\u4E09\u4E2A\u5F00\u6E90\u4ED3\u5E93\uFF1A",-1),u={href:"http://concurrent.redspider.group/",target:"_blank",rel:"noopener noreferrer"},h=a("\u6DF1\u5165\u6D45\u51FA Java \u591A\u7EBF\u7A0B"),k={href:"https://github.com/CL0610/Java-concurrency",target:"_blank",rel:"noopener noreferrer"},v=a("\u5E76\u53D1\u7F16\u7A0B\u77E5\u8BC6\u603B\u7ED3"),b={href:"https://github.com/CoderLeixiaoshuai/java-eight-part",target:"_blank",rel:"noopener noreferrer"},m=a("Java\u516B\u80A1\u6587"),g=n("hr",null,null,-1),y=a("\u6700\u8FD1\u6574\u7406\u4E86\u4E00\u4EFD\u725B\u903C\u7684\u5B66\u4E60\u8D44\u6599\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8EJava\u57FA\u7840\u90E8\u5206\uFF08JVM\u3001Java\u96C6\u5408\u6846\u67B6\u3001\u591A\u7EBF\u7A0B\uFF09\uFF0C\u8FD8\u56CA\u62EC\u4E86 "),_=n("strong",null,"\u6570\u636E\u5E93\u3001\u8BA1\u7B97\u673A\u7F51\u7EDC\u3001\u7B97\u6CD5\u4E0E\u6570\u636E\u7ED3\u6784\u3001\u8BBE\u8BA1\u6A21\u5F0F\u3001\u6846\u67B6\u7C7BSpring\u3001Netty\u3001\u5FAE\u670D\u52A1\uFF08Dubbo\uFF0C\u6D88\u606F\u961F\u5217\uFF09 \u7F51\u5173",-1),f=a(" \u7B49\u7B49\u7B49\u7B49\u2026\u2026\u8BE6\u60C5\u6233\uFF1A"),w={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},C=a("\u53EF\u4EE5\u8BF4\u662F2022\u5E74\u5168\u7F51\u6700\u5168\u7684\u5B66\u4E60\u548C\u627E\u5DE5\u4F5C\u7684PDF\u8D44\u6E90\u4E86"),j=n("p",null,[a("\u5173\u6CE8\u4E8C\u54E5\u7684\u539F\u521B\u516C\u4F17\u53F7 "),n("strong",null,"\u6C89\u9ED8\u738B\u4E8C"),a("\uFF0C\u56DE\u590D"),n("strong",null,"111"),a(" \u5373\u53EF\u514D\u8D39\u9886\u53D6\u3002")],-1),x=n("p",null,[n("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:""})],-1);function M(W,J){const s=o("ExternalLinkIcon");return d(),c("div",null,[r,n("blockquote",null,[l,n("ul",null,[n("li",null,[n("a",u,[h,e(s)])]),n("li",null,[n("a",k,[v,e(s)])]),n("li",null,[n("a",b,[m,e(s)])])])]),g,n("p",null,[y,_,f,n("a",w,[C,e(s)])]),j,x])}var S=t(i,[["render",M],["__file","synchronized.html.vue"]]);export{S as default};
