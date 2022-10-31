import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o as c,c as l,a as n,b as e,d as s,e as t}from"./app.d44b5444.js";const i={},r=n("p",null,[s("\u5C0F\u4E8C\u90A3\u5929\u53BB\u9762\u8BD5\uFF0C\u78B0\u5230\u4E86\u8FD9\u4E2A\u95EE\u9898\uFF1A\u201C"),n("strong",null,"instanceof \u5173\u952E\u5B57\u662F\u5982\u4F55\u5B9E\u73B0\u7684"),s("\uFF1F\u201D\u9762\u8BD5\u5B98\u5E0C\u671B\u4ED6\u80FD\u4ECE\u5E95\u5C42\u6765\u5206\u6790\u4E00\u4E0B\uFF0C\u7ED3\u679C\u5C0F\u4E8C\u6CA1\u7B54\u4E0A\u6765\uFF0C\u5C31\u6765\u95EE\u6211\u3002")],-1),u=n("p",null,"\u6211\u552F\u552F\u8BFA\u8BFA\uFF0C\u5F3A\u88C5\u9547\u5B9A\uFF0C\u53EA\u597D\u628A R \u5927\u7684\u4E00\u7BC7\u56DE\u7B54\u7529\u7ED9\u4E86\u4ED6\uFF0C\u5E76\u4E14\u53EE\u5631\u4ED6\uFF1A\u201C\u8BA4\u8BA4\u771F\u771F\u770B\uFF0C\u73A9\u5B8C\u540E\u8981\u662F\u8FD8\u4E0D\u660E\u767D\uFF0C\u518D\u6765\u95EE\u6211\u3002\u3002\u3002\u201D",-1),d=s("\u4F5C\u8005\uFF1ARednaxelaFX\uFF0C\u6574\u7406\uFF1A\u6C89\u9ED8\u738B\u4E8C\uFF0C\u94FE\u63A5\uFF1A"),k={href:"https://www.zhihu.com/question/21574535/answer/18998914",target:"_blank",rel:"noopener noreferrer"},v=s("https://www.zhihu.com/question/21574535/answer/18998914"),h=t(`<p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/basic-extra-meal/instanceof-jvm-b676fee6-bfd4-4ae9-9c7b-e488e345f775.gif" alt=""></p><hr><h2 id="\u573A\u666F\u4E00-\u6708\u85AA-3000-\u5143\u4E00\u4E0B\u7684\u7801\u519C\u804C\u4F4D" tabindex="-1"><a class="header-anchor" href="#\u573A\u666F\u4E00-\u6708\u85AA-3000-\u5143\u4E00\u4E0B\u7684\u7801\u519C\u804C\u4F4D" aria-hidden="true">#</a> \u573A\u666F\u4E00\uFF1A\u6708\u85AA 3000 \u5143\u4E00\u4E0B\u7684\u7801\u519C\u804C\u4F4D</h2><p>\u7528 Java \u4F2A\u4EE3\u7801\u6765\u8868\u73B0instanceof\u5173\u952E\u5B57\u5728Java\u8BED\u8A00\u89C4\u8303\u6240\u63CF\u8FF0\u7684\u8FD0\u884C\u65F6\u8BED\u4E49\uFF0C\u662F\u8FD9\u6837\u7684\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// obj instanceof T</span>
<span class="token keyword">boolean</span> result<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  result <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token class-name">T</span> temp <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">)</span> obj<span class="token punctuation">;</span> <span class="token comment">// checkcast</span>
      result <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ClassCastException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7528\u4E2D\u6587\u8BF4\u5C31\u662F\uFF1A\u5982\u679C\u6709\u8868\u8FBE\u5F0F <code>obj instanceof T</code>\uFF0C\u90A3\u4E48\u5982\u679C obj \u4E0D\u4E3A null \u5E76\u4E14 (T) obj \u4E0D\u629B ClassCastException \u5F02\u5E38\u5219\u8BE5\u8868\u8FBE\u5F0F\u503C\u4E3A true \uFF0C\u5426\u5219\u503C\u4E3A false \u3002</p><p>\u5982\u679C\u9762\u8BD5\u5B98\u8BF4\u201C\u8FD9\u4E0D\u662F\u5E9F\u8BDD\u561B\u201D\uFF0C\u8FDB\u5165\u573A\u666F\u4E8C\u3002</p><h2 id="\u573A\u666F\u4E8C-\u6708\u85AA6000-8000\u7684java\u7814\u53D1\u804C\u4F4D" tabindex="-1"><a class="header-anchor" href="#\u573A\u666F\u4E8C-\u6708\u85AA6000-8000\u7684java\u7814\u53D1\u804C\u4F4D" aria-hidden="true">#</a> \u573A\u666F\u4E8C\uFF1A\u6708\u85AA6000-8000\u7684Java\u7814\u53D1\u804C\u4F4D</h2><p>JVM\u6709\u4E00\u6761\u540D\u4E3A instanceof \u7684\u6307\u4EE4\uFF0C\u800CJava\u6E90\u7801\u7F16\u8BD1\u5230Class\u6587\u4EF6\u65F6\u4F1A\u628AJava\u8BED\u8A00\u4E2D\u7684 instanceof \u8FD0\u7B97\u7B26\u6620\u5C04\u5230JVM\u7684 instanceof \u6307\u4EE4\u4E0A\u3002</p><p>javac\u662F\u8FD9\u6837\u505A\u7684\uFF1A</p>`,10),m=n("li",null,'instanceof \u662Fjavac\u80FD\u8BC6\u522B\u7684\u4E00\u4E2A\u5173\u952E\u5B57\uFF0C\u5BF9\u5E94\u5230Token.INSTANCEOF\u7684token\u7C7B\u578B\u3002\u505A\u8BCD\u6CD5\u5206\u6790\u7684\u65F6\u5019\u626B\u63CF\u5230"instanceof"\u5173\u952E\u5B57\u5C31\u6620\u5C04\u5230\u4E86\u4E00\u4E2AToken.INSTANCEOF token\u3002',-1),b=s("\u8BE5\u7F16\u8BD1\u5668\u7684\u62BD\u8C61\u8BED\u6CD5\u6811\u8282\u70B9\u6709\u4E00\u4E2AJCTree.JCInstanceOf\u7C7B\u7528\u4E8E\u8868\u793Ainstanceof\u8FD0\u7B97\u3002\u505A\u8BED\u6CD5\u5206\u6790\u7684\u65F6\u5019\u89E3\u6790\u5230"),_={href:"https://tobebetterjavaer.com/basic-extra-meal/instanceof.html",target:"_blank",rel:"noopener noreferrer"},f=s("instanceof\u8FD0\u7B97\u7B26"),j=s("\u5C31\u4F1A\u751F\u6210\u8FD9\u4E2AJCTree.JCInstanceof\u7C7B\u578B\u7684\u8282\u70B9\u3002"),g=n("li",null,"\u4E2D\u9014\u8FD8\u5F97\u6839\u636EJava\u8BED\u8A00\u89C4\u8303\u5BF9instanceof\u8FD0\u7B97\u7B26\u7684\u7F16\u8BD1\u65F6\u68C0\u67E5\u7684\u89C4\u5B9A\u628A\u6709\u95EE\u9898\u7684\u60C5\u51B5\u627E\u51FA\u6765\u3002",-1),y=n("li",null,"\u5230\u6700\u540E\u751F\u6210\u5B57\u8282\u7801\u7684\u65F6\u5019\u4E3AJCTree.JCInstanceof\u8282\u70B9\u751F\u6210instanceof\u5B57\u8282\u7801\u6307\u4EE4\u3002",-1),w=t('<p>\u56DE\u7B54\u5230\u8FD9\u5C42\u9762\u5C31\u5DF2\u7ECF\u80FD\u89E3\u51B3\u597D\u4E9B\u5B9E\u9645\u95EE\u9898\u4E86\uFF0C\u5982\u679C\u9762\u8BD5\u5B98\u8FD8\u8BF4\uFF0C\u201C\u8FD9\u4E0D\u8FD8\u662F\u5E9F\u8BDD\u561B\u201D\uFF0C\u8FDB\u5165\u573A\u666F\u4E09\u3002</p><h2 id="\u573A\u666F\u4E09-\u6708\u85AA10000\u7684java\u9AD8\u7EA7\u7814\u53D1\u804C\u4F4D" tabindex="-1"><a class="header-anchor" href="#\u573A\u666F\u4E09-\u6708\u85AA10000\u7684java\u9AD8\u7EA7\u7814\u53D1\u804C\u4F4D" aria-hidden="true">#</a> \u573A\u666F\u4E09\uFF1A\u6708\u85AA10000\u7684Java\u9AD8\u7EA7\u7814\u53D1\u804C\u4F4D</h2><p>\u5148\u7B80\u5355\u4ECB\u7ECD\u4E00\u4E0Binstanceof\u7684\u5B57\u8282\u7801\uFF1A</p><ul><li>\u64CD\u4F5C\uFF1A\u786E\u5B9A\u5BF9\u8C61\u662F\u5426\u4E3A\u7ED9\u5B9A\u7684\u7C7B\u578B</li><li>\u6307\u4EE4\u683C\u5F0F\uFF1Ainstanceof|indexbyte1|indexbyte2</li><li>\u6307\u4EE4\u6267\u884C\u524D\u540E\u7684\u6808\u9876\u72B6\u6001\uFF1A <ul><li>\u2026\u2026\uFF0Cobjectref=&gt;</li><li>\u2026\u2026\uFF0Cresult</li></ul></li></ul><p>\u518D\u7B80\u5355\u63CF\u8FF0\u4E0B\uFF1Aindexbyte1\u548Cindexbyte2\u7528\u4E8E\u6784\u9020\u5BF9\u5F53\u524D\u7C7B\u7684\u5E38\u91CF\u6C60\u7684\u7D22\u5F15\uFF0Cobjectref\u4E3Areference\u7C7B\u578B\uFF0C\u53EF\u4EE5\u662F\u67D0\u4E2A\u7C7B\uFF0C\u6570\u7EC4\u7684\u5B9E\u4F8B\u6216\u8005\u662F\u63A5\u53E3\u3002</p><p>\u57FA\u672C\u7684\u5B9E\u73B0\u8FC7\u7A0B\uFF1A\u5BF9indexbyte1\u548Cindexbyte2\u6784\u9020\u7684\u5E38\u91CF\u6C60\u7D22\u5F15\u8FDB\u884C\u89E3\u6790\uFF0C\u7136\u540E\u6839\u636Ejava\u89C4\u8303\u5224\u65AD\u89E3\u6790\u7684\u7C7B\u662F\u4E0D\u662Fobjectref\u7684\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u6700\u540E\u5728\u6808\u9876\u5199\u5165\u7ED3\u679C\u3002</p><p>\u57FA\u672C\u4E0A\u5C31\u662F\u6839\u636E\u89C4\u8303\u6765 YY \u4E0B\u5B9E\u73B0\uFF0C\u5C31\u80FD\u516B\u4E5D\u4E0D\u79BB\u5341\u8499\u6DF7\u8FC7\u5173\u4E86\u3002</p><p>\u5982\u679C\u9762\u8BD5\u5B98\u8FD8\u4E0D\u6EE1\u610F\uFF0C\u8FDB\u5165\u573A\u666F\u56DB\u3002</p><h2 id="\u573A\u666F\u56DB-\u6708\u85AA10000\u4EE5\u4E0A\u7684java\u8D44\u6DF1\u7814\u53D1\u804C\u4F4D" tabindex="-1"><a class="header-anchor" href="#\u573A\u666F\u56DB-\u6708\u85AA10000\u4EE5\u4E0A\u7684java\u8D44\u6DF1\u7814\u53D1\u804C\u4F4D" aria-hidden="true">#</a> \u573A\u666F\u56DB\uFF1A\u6708\u85AA10000\u4EE5\u4E0A\u7684Java\u8D44\u6DF1\u7814\u53D1\u804C\u4F4D</h2><p>\u8FD9\u4E2A\u5C97\u4F4D\u6CE8\u91CD\u6027\u80FD\u8C03\u4F18\u4EC0\u4E48\u7684\uFF0CR \u5927\u8BF4\u53EF\u4EE5\u4E0A\u8BBA\u6587\u4E86\uFF1A</p>',10),x={href:"https://dl.acm.org/doi/10.1145/583810.583821",target:"_blank",rel:"noopener noreferrer"},J=s("https://dl.acm.org/doi/10.1145/583810.583821"),C=t(`<p>\u8BBA\u6587\u6211\u4E5F\u770B\u4E0D\u61C2\uFF0C\u6240\u4EE5\u8FD9\u91CC\u5C31\u4E0D BB \u4E86\u3002\uFF08\u9003</p><p>\u7BC7\u8BBA\u6587\u63CF\u8FF0\u4E86HotSpot VM\u505A\u5B50\u7C7B\u578B\u5224\u65AD\u7684\u7B97\u6CD5\uFF0C\u8FD9\u91CC\u7B80\u5355\u8865\u5145\u4E00\u4E0BJDK6\u81F3\u4ECA\u7684HotSpot VM\u5B9E\u9645\u91C7\u7528\u7684\u7B97\u6CD5\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">S</span><span class="token punctuation">.</span><span class="token function">is_subtype_of</span><span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">)</span> <span class="token operator">:</span><span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> off <span class="token operator">=</span> <span class="token class-name">T</span><span class="token punctuation">.</span>offset<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">S</span> <span class="token operator">==</span> <span class="token class-name">T</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">T</span> <span class="token operator">==</span> <span class="token class-name">S</span><span class="token punctuation">[</span>off<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>off <span class="token operator">!=</span> <span class="token operator">&amp;</span>cache<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token class-name">S</span><span class="token punctuation">.</span><span class="token function">scan_secondary_subtype_array</span><span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">S</span><span class="token punctuation">.</span>cache <span class="token operator">=</span> <span class="token class-name">T</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HotSpot VM\u7684\u4E24\u4E2A\u7F16\u8BD1\u5668\uFF0CClient Compiler (C1) \u4E0E Server Compiler (C2) \u5404\u81EA\u5BF9\u5B50\u7C7B\u578B\u5224\u65AD\u7684\u5B9E\u73B0\u6709\u66F4\u8FDB\u4E00\u6B65\u7684\u4F18\u5316\u3002\u5B9E\u9645\u4E0A\u5728JVM\u91CC\uFF0Cinstanceof\u7684\u529F\u80FD\u5C31\u5B9E\u73B0\u4E864\u4EFD\uFF0CVM runtime\u3001\u89E3\u91CA\u5668\u3001C1\u3001C2\u5404\u4E00\u4EFD\u3002</p><p>VM runtime\u7684\uFF1A</p>`,5),T={href:"http://hg.openjdk.java.net/jdk7u/jdk7u/hotspot/file/tip/src/share/vm/oops/oop.inline.hpp",target:"_blank",rel:"noopener noreferrer"},S=s("http://hg.openjdk.java.net/jdk7u/jdk7u/hotspot/file/tip/src/share/vm/oops/oop.inline.hpp"),V=n("p",null,"\u5206\u4EAB\u7684\u6700\u540E\uFF0C\u4E8C\u54E5\u7B80\u5355\u6765\u8BF4\u4E00\u4E0B\u3002",-1),M=n("p",null,"\u8FD9\u4E2A\u95EE\u9898\u6D89\u53CA\u8BED\u6CD5\u7EC6\u8282\uFF0C\u6D89\u53CAjvm\u5B9E\u73B0\uFF0C\u6D89\u53CA\u7F16\u8BD1\u5668\uFF0C\u8FD8\u6D89\u53CA\u4E00\u70B9\u70B9\u6570\u636E\u7ED3\u6784\u8BBE\u8BA1\uFF0C\u6BD4\u8F83\u8003\u9A8C\u4E00\u4E2A Java \u7A0B\u5E8F\u5458\u7684\u5185\u529F\uFF0C\u5982\u679C\u8981\u56DE\u7B54\u5230\u8BBA\u6587\u7684\u7A0B\u5EA6\uFF0C\u90A3\u771F\u7684\u662F\uFF0C\u9762\u8BD5\u5B98\u4E5F\u5F97\u63D0\u524D\u5907\u597D\u77E5\u8BC6\u70B9\uFF0C\u4E0D\u7136\u5E94\u8058\u8005\u7684\u56DE\u7B54\u5565\u4E5F\u542C\u4E0D\u61C2\u5C31\u633A\u5C34\u5C2C\u7684\u3002",-1),N=n("p",null,"\u53CD\u6B63 R \u5927\u56DE\u7B54\u91CC\u7684\u5F88\u591A\u7EC6\u8282\u6211\u90FD\u662F\u7B2C\u4E00\u6B21\u542C\uFF0C\u9003\u4E86\u9003\u4E86\u3002\u3002\u3002\u3002\u3002\u3002",-1),E=n("hr",null,null,-1),I=s("\u6700\u8FD1\u6574\u7406\u4E86\u4E00\u4EFD\u725B\u903C\u7684\u5B66\u4E60\u8D44\u6599\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8EJava\u57FA\u7840\u90E8\u5206\uFF08JVM\u3001Java\u96C6\u5408\u6846\u67B6\u3001\u591A\u7EBF\u7A0B\uFF09\uFF0C\u8FD8\u56CA\u62EC\u4E86 "),q=n("strong",null,"\u6570\u636E\u5E93\u3001\u8BA1\u7B97\u673A\u7F51\u7EDC\u3001\u7B97\u6CD5\u4E0E\u6570\u636E\u7ED3\u6784\u3001\u8BBE\u8BA1\u6A21\u5F0F\u3001\u6846\u67B6\u7C7BSpring\u3001Netty\u3001\u5FAE\u670D\u52A1\uFF08Dubbo\uFF0C\u6D88\u606F\u961F\u5217\uFF09 \u7F51\u5173",-1),B=s(" \u7B49\u7B49\u7B49\u7B49\u2026\u2026\u8BE6\u60C5\u6233\uFF1A"),F={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},R=s("\u53EF\u4EE5\u8BF4\u662F2022\u5E74\u5168\u7F51\u6700\u5168\u7684\u5B66\u4E60\u548C\u627E\u5DE5\u4F5C\u7684PDF\u8D44\u6E90\u4E86"),z=n("p",null,[s("\u5173\u6CE8\u4E8C\u54E5\u7684\u539F\u521B\u516C\u4F17\u53F7 "),n("strong",null,"\u6C89\u9ED8\u738B\u4E8C"),s("\uFF0C\u56DE\u590D"),n("strong",null,"111"),s(" \u5373\u53EF\u514D\u8D39\u9886\u53D6\u3002")],-1),D=n("p",null,[n("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:""})],-1);function H(O,A){const a=p("ExternalLinkIcon");return c(),l("div",null,[r,u,n("blockquote",null,[n("p",null,[d,n("a",k,[v,e(a)])])]),h,n("ul",null,[m,n("li",null,[b,n("a",_,[f,e(a)]),j]),g,y]),w,n("blockquote",null,[n("p",null,[n("a",x,[J,e(a)])])]),C,n("blockquote",null,[n("p",null,[n("a",T,[S,e(a)])])]),V,M,N,E,n("p",null,[I,q,B,n("a",F,[R,e(a)])]),z,D])}var K=o(i,[["render",H],["__file","instanceof-jvm.html.vue"]]);export{K as default};
