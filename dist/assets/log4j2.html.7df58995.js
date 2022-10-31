import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as s,e}from"./app.d44b5444.js";const t={},l=e(`<p>Log4j 2\uFF0C\u987E\u540D\u601D\u4E49\uFF0C\u5B83\u5C31\u662F Log4j \u7684\u5347\u7EA7\u7248\uFF0C\u5C31\u597D\u50CF\u624B\u673A\u91CC\u9762\u7684 Pro \u7248\u3002\u6211\u4F5C\u4E3A\u4E00\u4E2A\u5199\u6587\u7AE0\u65B9\u9762\u7684\u5DE5\u5177\u4EBA\uFF0C\u6216\u8005\u53EB\u6253\u5DE5\u4EBA\uFF0C\u600E\u4E48\u80FD\u4E0D\u5199\u5B8C\u8FD9\u6700\u540E\u4E00\u7BC7\u3002</p><p>Log4j\u3001SLF4J\u3001Logback \u662F\u4E00\u4E2A\u7239\u2014\u2014Ceki Gulcu\uFF0C\u4F46 Log4j 2 \u5374\u662F\u4F8B\u5916\uFF0C\u5B83\u662F Apache \u57FA\u91D1\u4F1A\u7684\u4EA7\u54C1\u3002</p><p>SLF4J \u548C Logback \u4F5C\u4E3A Log4j \u7684\u66FF\u4EE3\u54C1\uFF0C\u5728\u5F88\u591A\u65B9\u9762\u90FD\u505A\u4E86\u5FC5\u8981\u7684\u6539\u8FDB\uFF0C\u90A3\u4E3A\u4EC0\u4E48\u8FD8\u9700\u8981 Log4j 2 \u5462\uFF1F\u6211\u53EA\u80FD\u8BF4 Apache \u57FA\u91D1\u4F1A\u7684\u5F00\u53D1\u4EBA\u5458\u5F88\u95F2\uFF0C\u4E0D\uFF0C\u5F88\u62FC\uFF0C\u8981\u4E0D\u662F\u4ED6\u4EEC\u8FD9\u79CD\u7CBE\u76CA\u6C42\u7CBE\u7684\u7CBE\u795E\uFF0C\u8FD9\u4E2A\u7F16\u7A0B\u7684\u4E16\u754C\u8BE5\u6709\u591A\u67AF\u71E5\uFF0C\u6BD5\u7ADF\u5C11\u4E86\u5F88\u591A\u53EF\u4EE5\u7528\u201C\u62FF\u6765\u5C31\u7528\u201D\u7684\u8F6E\u5B50\u554A\u3002</p><p>\u4E0A\u4E00\u7BC7\u4E5F\u8BF4\u4E86\uFF0C\u8001\u677F\u4E0B\u6B7B\u547D\u4EE4\u8981\u6211\u628A\u65E5\u5FD7\u7CFB\u7EDF\u5207\u6362\u5230 Logback\uFF0C\u6211\u987A\u5229\u4EA4\u5DEE\u4E86\uFF0C\u8001\u677F\u5F88\u5F00\u5FC3\uFF0C\u5938\u6211\u8FD9\u4E2A\u6253\u5DE5\u4EBA\u5F88\u656C\u4E1A\u3002\u4E3A\u4E86\u8868\u8FBE\u5BF9\u8001\u677F\u7684\u8FD9\u4EFD\u611F\u8C22\uFF0C\u6211\u51B3\u5B9A\u5077\u5077\u6478\u6478\u5730\u8BD5\u6C34\u4E00\u4E0B Log4j 2\uFF0C\u5C3D\u7BA1\u5B83\u8FD8\u4E0D\u662F\u4E2A\u6210\u54C1\uFF0C\u53EF\u80FD\u4F1A\u4F1A\u9879\u76EE\u5E26\u6765\u4E00\u5B9A\u7684\u9690\u60A3\u3002\u4F46\u8C01\u8BA9\u54B1\u662F\u4E00\u4E2A\u656C\u5C97\u7231\u4E1A\u7684\u6253\u5DE5\u4EBA\u5462\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/log4j2-a9461265-7652-4512-9219-6b3e82392415.png" alt=""></p><h3 id="_01\u3001log4j-2-\u5F3A\u5728\u54EA" tabindex="-1"><a class="header-anchor" href="#_01\u3001log4j-2-\u5F3A\u5728\u54EA" aria-hidden="true">#</a> 01\u3001Log4j 2 \u5F3A\u5728\u54EA</h3><p>1\uFF09\u5728\u591A\u7EBF\u7A0B\u573A\u666F\u4E0B\uFF0CLog4j 2 \u7684\u541E\u5410\u91CF\u6BD4 Logback \u9AD8\u51FA\u4E86 10 \u500D\uFF0C\u5EF6\u8FDF\u964D\u4F4E\u4E86\u51E0\u4E2A\u6570\u91CF\u7EA7\u3002\u8FD9\u8BDD\u542C\u8D77\u6765\u50CF\u5439\u725B\uFF0C\u53CD\u6B63\u662F Log4j 2 \u5B98\u65B9\u81EA\u5DF1\u5439\u7684\u3002</p><p>Log4j 2 \u7684\u5F02\u6B65 Logger \u4F7F\u7528\u7684\u662F\u65E0\u9501\u6570\u636E\u7ED3\u6784\uFF0C\u800C Logback \u548C Log4j \u7684\u5F02\u6B65 Logger \u4F7F\u7528\u7684\u662F ArrayBlockingQueue\u3002\u5BF9\u4E8E\u963B\u585E\u961F\u5217\uFF0C\u591A\u7EBF\u7A0B\u5E94\u7528\u7A0B\u5E8F\u5728\u5C1D\u8BD5\u4F7F\u65E5\u5FD7\u4E8B\u4EF6\u5165\u961F\u65F6\u901A\u5E38\u4F1A\u9047\u5230\u9501\u4E89\u7528\u3002</p><p>\u4E0B\u56FE\u8BF4\u660E\u4E86\u591A\u7EBF\u7A0B\u65B9\u6848\u4E2D\u65E0\u9501\u6570\u636E\u7ED3\u6784\u5BF9\u541E\u5410\u91CF\u7684\u5F71\u54CD\u3002 Log4j 2 \u968F\u7740\u7EBF\u7A0B\u6570\u91CF\u7684\u6269\u5C55\u800C\u66F4\u597D\u5730\u6269\u5C55\uFF1A\u5177\u6709\u66F4\u591A\u7EBF\u7A0B\u7684\u5E94\u7528\u7A0B\u5E8F\u53EF\u4EE5\u8BB0\u5F55\u66F4\u591A\u7684\u65E5\u5FD7\u3002\u5176\u4ED6\u65E5\u5FD7\u8BB0\u5F55\u5E93\u7531\u4E8E\u5B58\u5728\u9501\u7ADE\u4E89\u7684\u5173\u7CFB\uFF0C\u5728\u8BB0\u5F55\u66F4\u591A\u7EBF\u7A0B\u65F6\uFF0C\u603B\u541E\u5410\u91CF\u4FDD\u6301\u6052\u5B9A\u6216\u4E0B\u964D\u3002\u8FD9\u610F\u5473\u7740\u4F7F\u7528\u5176\u4ED6\u65E5\u5FD7\u8BB0\u5F55\u5E93\uFF0C\u6BCF\u4E2A\u5355\u72EC\u7684\u7EBF\u7A0B\u5C06\u80FD\u591F\u51CF\u5C11\u65E5\u5FD7\u8BB0\u5F55\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/log4j2-43f0b03d-5c4a-4af3-9e4c-177956246740.png" alt=""></p><p>\u6027\u80FD\u65B9\u9762\u662F Log4j 2 \u7684\u6700\u5927\u4EAE\u70B9\uFF0C\u81F3\u4E8E\u5176\u4ED6\u65B9\u9762\u7684\u4E00\u4E9B\u4F18\u52BF\uFF0C\u6BD4\u5982\u8BF4\u4E0B\u9762\u8FD9\u4E9B\uFF0C\u53EF\u4EE5\u5FFD\u7565\u4E0D\u8BA1\uFF0C\u6587\u5B57\u6709\u591A\u77ED\u5C31\u4EE3\u8868\u5B83\u6709\u591A\u4E0D\u91CD\u8981\u3002</p><p>2\uFF09Log4j 2 \u53EF\u4EE5\u51CF\u5C11\u5783\u573E\u6536\u96C6\u5668\u7684\u538B\u529B\u3002</p><p>3\uFF09\u652F\u6301 Lambda \u8868\u8FBE\u5F0F\u3002</p><p>4\uFF09\u652F\u6301\u81EA\u52A8\u91CD\u8F7D\u914D\u7F6E\u3002</p><h3 id="_02\u3001log4j-2-\u4F7F\u7528\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_02\u3001log4j-2-\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a> 02\u3001Log4j 2 \u4F7F\u7528\u793A\u4F8B</h3><p>\u5E9F\u8BDD\u4E0D\u591A\u8BF4\uFF0C\u76F4\u63A5\u5B9E\u64CD\u5F00\u5E72\u3002\u7406\u8BBA\u77E5\u8BC6\u6709\u7528\uFF0C\u4F46\u4E0D\u5982\u4E0A\u624B\u5B9E\u64CD\u4E00\u628A\uFF0C\u8FD9\u4E5F\u662F\u6211\u591A\u5E74\u517B\u6210\u7684\u4E00\u4E2A\u201C\u4E0D\u90A3\u4E48\u826F\u597D\u201D\u7684\u7F16\u7A0B\u4E60\u60EF\uFF1A\u5728\u5B9E\u64CD\u4E2D\u53D1\u73B0\u95EE\u9898\uFF0C\u89E3\u51B3\u95EE\u9898\uFF0C\u5BFB\u627E\u7406\u8BBA\u57FA\u7840\u3002</p><p><strong>\u7B2C\u4E00\u6B65</strong>\uFF0C\u5728 pom.xml \u6587\u4EF6\u4E2D\u6DFB\u52A0 Log4j 2 \u7684\u4F9D\u8D56\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.logging.log4j<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>log4j-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.logging.log4j<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>log4j-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uFF08\u8FD9\u4E2A artifactId \u8FD8\u662F log4j\uFF0C\u6CA1\u6709\u4F53\u73B0\u51FA\u6765 2\uFF0C\u800C\u5728 version \u4E2D\u4F53\u73B0\uFF0C\u591A\u5C11\u53EB\u4EBA\u8BEF\u4EE5\u4E3A\u662F log4j\uFF09</p><p><strong>\u7B2C\u4E8C\u6B65</strong>\uFF0C\u6765\u4E2A\u6700\u7B80\u5355\u7684\u6D4B\u8BD5\u7528\u4F8B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>logging<span class="token punctuation">.</span>log4j<span class="token punctuation">.</span></span><span class="token class-name">LogManager</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>logging<span class="token punctuation">.</span>log4j<span class="token punctuation">.</span></span><span class="token class-name">Logger</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">LogManager</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">Demo</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;log4j2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C Demo \u7C7B\uFF0C\u53EF\u4EE5\u5728\u63A7\u5236\u53F0\u770B\u5230\u4EE5\u4E0B\u4FE1\u606F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ERROR StatusLogger No log4j2 configuration file found. Using default configuration: logging only errors to the console.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Log4j 2 \u7ADF\u7136\u6CA1\u6709\u5728\u63A7\u5236\u53F0\u6253\u5370\u201C log4j2\u201D\uFF0C\u8FD8\u62B1\u6028\u6211\u4EEC\u6CA1\u6709\u4E3A\u5B83\u6307\u5B9A\u914D\u7F6E\u6587\u4EF6\u3002\u5728\u8FD9\u4E00\u70B9\u4E0A\uFF0C\u6211\u5C31\u89C9\u5F97\u5B83\u6CA1\u6709 Logback \u597D\uFF0C\u6BD5\u7ADF\u4EBA\u5BB6\u4F1A\u8F93\u51FA\u3002</p><p>\u8FD9\u5BF9\u4E8E\u65B0\u624B\u6765\u8BF4\uFF0C\u5F88\u4E0D\u53CB\u597D\uFF0C\u56E0\u4E3A\u65B0\u624B\u5728\u9047\u5230\u8FD9\u79CD\u60C5\u51B5\u7684\u65F6\u5019\uFF0C\u5F80\u5F80\u4E0D\u77E5\u6240\u63AA\u3002\u65E5\u5FD7\u91CC\u9762\u867D\u7136\u4F53\u73B0\u4E86 ERROR\uFF0C\u4F46\u4EE3\u7801\u5E76\u6CA1\u6709\u7F16\u8BD1\u51FA\u9519\u6216\u8005\u8FD0\u884C\u51FA\u9519\uFF0C\u51ED\u4EC0\u4E48\u4F60\u4E0D\u8F93\u51FA\uFF1F</p><p>\u90A3\u4F5C\u4E3A\u7F16\u7A0B\u8001\u9E1F\u6765\u8BF4\uFF0C\u6211\u5F97\u544A\u8BC9\u4F60\uFF0C\u8FD9\u65F6\u5019\u6700\u597D\u63A2\u7A76\u4E00\u4E0B\u4E3A\u4EC0\u4E48\u3002\u600E\u4E48\u505A\u5462\uFF1F</p><p>\u6211\u4EEC\u53EF\u4EE5\u590D\u5236\u4E00\u4E0B\u65E5\u5FD7\u4FE1\u606F\u4E2D\u7684\u5173\u952E\u5B57\uFF0C\u6BD4\u5982\u8BF4\uFF1A\u201CNo log4j2 configuration file found\u201D\uFF0C\u7136\u540E\u5728 Intellij IDEA \u4E2D\u641C\u4E00\u4E0B\uFF0C\u5982\u679C\u4F60\u4E0B\u8F7D\u4E86\u6E90\u7801\u548C\u6587\u6863\u7684\u8BDD\uFF0C\u4E0D\u9664\u610F\u5916\uFF0C\u4F60\u4F1A\u5728 ConfigurationFactory \u7C7B\u4E2D\u641C\u5230\u8FD9\u6BB5\u8BDD\u3002</p><p>\u53EF\u4EE5\u5728\u65B9\u6CD5\u4E2D\u6253\u4E2A\u65AD\u70B9\uFF0C\u7136\u540E debug \u4E00\u4E0B\uFF0C\u4F60\u5C31\u4F1A\u770B\u5230\u4E0B\u56FE\u4E2D\u7684\u5185\u5BB9\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/log4j2-4ba440d9-c0b6-4ad2-b538-9d303cc99d90.png" alt=""></p><p>\u901A\u8FC7\u6E90\u7801\uFF0C\u4F60\u53EF\u4EE5\u770B\u5F97\u5230\uFF0CLog4j 2 \u4F1A\u53BB\u5BFB\u627E 4 \u79CD\u7C7B\u578B\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u540E\u7F00\u5206\u522B\u662F properties\u3001yaml\u3001json \u548C xml\u3002\u524D\u7F00\u662F log4j2-test \u6216\u8005 log4j2\u3002</p><p>\u5F97\u5230\u8FD9\u4E2A\u63D0\u793A\u540E\uFF0C\u5C31\u53EF\u4EE5\u8FDB\u884C\u7B2C\u4E09\u6B65\u4E86\u3002</p><p>**\u7B2C\u4E09\u6B65\uFF0C**\u5728 resource \u76EE\u5F55\u4E0B\u589E\u52A0 log4j2-test.xml \u6587\u4EF6\uFF08\u65B9\u4FBF\u548C Logback \u505A\u5BF9\u6BD4\uFF09\uFF0C\u5185\u5BB9\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Configuration</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Appenders</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Console</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Console<span class="token punctuation">&quot;</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SYSTEM_OUT<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PatternLayout</span> <span class="token attr-name">pattern</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>%d{HH:mm:ss.SSS} [%t] %-5level %logger{36} - %msg%n<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Console</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Appenders</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Loggers</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Root</span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>DEBUG<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AppenderRef</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Console<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Root</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Loggers</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Configuration</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Log4j 2 \u7684\u914D\u7F6E\u6587\u4EF6\u683C\u5F0F\u548C Logback \u6709\u70B9\u76F8\u4F3C\uFF0C\u57FA\u672C\u7684\u7ED3\u6784\u4E3A <code>&lt; Configuration&gt;</code> \u5143\u7D20\uFF0C\u5305\u542B 0 \u6216\u591A\u4E2A <code>&lt; Appenders&gt;</code> \u5143\u7D20\uFF0C\u5176\u540E\u8DDF 0 \u6216\u591A\u4E2A <code>&lt; Loggers&gt;</code> \u5143\u7D20\uFF0C\u91CC\u9762\u518D\u8DDF\u6700\u591A\u53EA\u80FD\u5B58\u5728\u4E00\u4E2A\u7684 <code>&lt; Root&gt;</code> \u5143\u7D20\u3002</p><p><strong>1\uFF09\u914D\u7F6E appender</strong>\uFF0C\u4E5F\u5C31\u662F\u914D\u7F6E\u65E5\u5FD7\u7684\u8F93\u51FA\u76EE\u7684\u5730\u3002</p><p>\u6709 Console\uFF0C\u5178\u578B\u7684\u63A7\u5236\u53F0\u914D\u7F6E\u4FE1\u606F\u4E0A\u9762\u4F60\u4E5F\u770B\u5230\u4E86\uFF0C\u6211\u6765\u7B80\u5355\u89E3\u91CA\u4E00\u4E0B\u91CC\u9762 pattern \u7684\u683C\u5F0F\uFF1A</p><ul><li><p><code>%d{HH:mm:ss.SSS}</code> \u8868\u793A\u8F93\u51FA\u5230\u6BEB\u79D2\u7684\u65F6\u95F4</p></li><li><p><code>%t</code> \u8F93\u51FA\u5F53\u524D\u7EBF\u7A0B\u540D\u79F0</p></li><li><p><code>%-5level</code> \u8F93\u51FA\u65E5\u5FD7\u7EA7\u522B\uFF0C-5 \u8868\u793A\u5DE6\u5BF9\u9F50\u5E76\u4E14\u56FA\u5B9A\u8F93\u51FA 5 \u4E2A\u5B57\u7B26\uFF0C\u5982\u679C\u4E0D\u8DB3\u5728\u53F3\u8FB9\u8865\u7A7A\u683C</p></li><li><p><code>%logger</code> \u8F93\u51FA logger \u540D\u79F0\uFF0C\u6700\u591A 36 \u4E2A\u5B57\u7B26</p></li><li><p><code>%msg</code> \u65E5\u5FD7\u6587\u672C</p></li><li><p><code>%n</code> \u6362\u884C</p></li></ul><p>\u987A\u5E26\u8865\u5145\u4E00\u4E0B\u5176\u4ED6\u5E38\u7528\u7684\u5360\u4F4D\u7B26\uFF1A</p><ul><li><p><code>%F</code> \u8F93\u51FA\u6240\u5728\u7684\u7C7B\u6587\u4EF6\u540D\uFF0C\u5982 Demo.java</p></li><li><p><code>%L</code> \u8F93\u51FA\u884C\u53F7</p></li><li><p><code>%M</code> \u8F93\u51FA\u6240\u5728\u65B9\u6CD5\u540D</p></li><li><p><code>%l</code> \u8F93\u51FA\u8BED\u53E5\u6240\u5728\u7684\u884C\u6570, \u5305\u62EC\u7C7B\u540D\u3001\u65B9\u6CD5\u540D\u3001\u6587\u4EF6\u540D\u3001\u884C\u6570</p></li><li><p><code>%p</code> \u8F93\u51FA\u65E5\u5FD7\u7EA7\u522B</p></li><li><p><code>%c</code> \u8F93\u51FA\u5305\u540D\uFF0C\u5982\u679C\u540E\u9762\u8DDF\u6709 <code>{length.}</code> \u53C2\u6570\uFF0C\u6BD4\u5982\u8BF4 <code>%c{1.}</code>\uFF0C\u5B83\u5C06\u8F93\u51FA\u62A5\u540D\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26\uFF0C\u5982 <code>com.itwanger</code> \u7684\u5B9E\u9645\u62A5\u540D\u5C06\u53EA\u8F93\u51FA <code>c.i</code></p></li></ul><p>\u518D\u6B21\u8FD0\u884C Demo \u7C7B\uFF0C\u5C31\u53EF\u4EE5\u5728\u63A7\u5236\u53F0\u770B\u5230\u6253\u5370\u7684\u65E5\u5FD7\u4FE1\u606F\u4E86\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>10:14:04.657 [main] DEBUG com.itwanger.Demo - log4j2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2\uFF09\u914D\u7F6E Loggers</strong>\uFF0C\u6307\u5B9A Root \u7684\u65E5\u5FD7\u7EA7\u522B\uFF0C\u5E76\u4E14\u6307\u5B9A\u5177\u4F53\u542F\u7528\u54EA\u4E00\u4E2A Appenders\u3002</p><p><strong>3\uFF09\u81EA\u52A8\u91CD\u8F7D\u914D\u7F6E</strong>\u3002</p><p>Logback \u652F\u6301\u81EA\u52A8\u91CD\u8F7D\u914D\u7F6E\uFF0CLog4j 2 \u4E5F\u652F\u6301\uFF0C\u90A3\u60F3\u8981\u542F\u7528\u8FD9\u4E2A\u529F\u80FD\u4E5F\u975E\u5E38\u7B80\u5355\uFF0C\u53EA\u9700\u8981\u5728 Configuration \u5143\u7D20\u4E0A\u6DFB\u52A0 <code>monitorInterval</code> \u5C5E\u6027\u5373\u53EF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;Configuration monitorInterval=&quot;30&quot;&gt;
...
&lt;/Configuration&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\u503C\u8981\u8BBE\u7F6E\u6210\u975E\u96F6\uFF0C\u4E0A\u4F8B\u4E2D\u7684\u610F\u601D\u662F\u81F3\u5C11 30 \u79D2\u540E\u68C0\u67E5\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u66F4\u6539\u3002\u6700\u5C0F\u95F4\u9694\u4E3A 5 \u79D2\u3002</p><h3 id="_03\u3001async-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_03\u3001async-\u793A\u4F8B" aria-hidden="true">#</a> 03\u3001Async \u793A\u4F8B</h3><p>\u9664\u4E86 Console\uFF0C\u8FD8\u6709 Async\uFF0C\u53EF\u4EE5\u914D\u5408\u6587\u4EF6\u7684\u65B9\u5F0F\u6765\u5F02\u6B65\u5199\u5165\uFF0C\u5178\u578B\u7684\u914D\u7F6E\u4FE1\u606F\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;Configuration&gt;
  &lt;Appenders&gt;
    &lt;File name=&quot;DebugFile&quot; fileName=&quot;debug.log&quot;&gt;
      &lt;PatternLayout&gt;
        &lt;Pattern&gt;%d %p %c [%t] %m%n&lt;/Pattern&gt;
      &lt;/PatternLayout&gt;
    &lt;/File&gt;
    &lt;Async name=&quot;Async&quot;&gt;
      &lt;AppenderRef ref=&quot;DebugFile&quot;/&gt;
    &lt;/Async&gt;
  &lt;/Appenders&gt;
  &lt;Loggers&gt;
    &lt;Root level=&quot;debug&quot;&gt;
      &lt;AppenderRef ref=&quot;Async&quot;/&gt;
    &lt;/Root&gt;
  &lt;/Loggers&gt;
&lt;/Configuration&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u6BD4 Logback \u7684\u914D\u7F6E\u6587\u4EF6\u6765\u770B\uFF0CLog4j 2 \u771F\u7684\u590D\u6742\u4E86\u4E00\u4E9B\uFF0C\u4E0D\u592A\u597D\u7528\uFF0C\u5C31\u8FD9\u4E48\u76F4\u767D\u5730\u8BF4\u5427\uFF01\u4F46\u81EA\u5DF1\u7EA6\u7684\uFF0C\u542B\u7740\u6CEA\u4E5F\u5F97\u6253\u5B8C\u554A\u3002\u628A\u8FD9\u4E2A Async \u52A0\u5165\u5230 Appenders\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;Configuration&gt;
    &lt;Appenders&gt;
        &lt;Console name=&quot;Console&quot; target=&quot;SYSTEM_OUT&quot;&gt;
            &lt;PatternLayout pattern=&quot;%d{HH:mm:ss.SSS} [%t] %-5level %logger{36} - %msg%n&quot;/&gt;
        &lt;/Console&gt;
        &lt;File name=&quot;DebugFile&quot; fileName=&quot;debug.log&quot;&gt;
            &lt;PatternLayout&gt;
                &lt;Pattern&gt;%d %p %c [%t] %m%n&lt;/Pattern&gt;
            &lt;/PatternLayout&gt;
        &lt;/File&gt;
        &lt;Async name=&quot;Async&quot;&gt;
            &lt;AppenderRef ref=&quot;DebugFile&quot;/&gt;
        &lt;/Async&gt;
    &lt;/Appenders&gt;
    &lt;Loggers&gt;
        &lt;Root level=&quot;DEBUG&quot;&gt;
            &lt;AppenderRef ref=&quot;Console&quot;/&gt;
            &lt;AppenderRef ref=&quot;Async&quot;/&gt;
        &lt;/Root&gt;
    &lt;/Loggers&gt;
&lt;/Configuration&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u518D\u6B21\u8FD0\u884C Demo \u7C7B\uFF0C\u53EF\u4EE5\u5728\u9879\u76EE\u6839\u8DEF\u5F84\u4E0B\u770B\u5230\u4E00\u4E2A debug.log \u6587\u4EF6\uFF0C\u5185\u5BB9\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>2020-10-30 09:35:49,705 DEBUG com.itwanger.Demo [main] log4j2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_04\u3001rollingfile-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_04\u3001rollingfile-\u793A\u4F8B" aria-hidden="true">#</a> 04\u3001RollingFile \u793A\u4F8B</h3><p>\u5F53\u7136\u4E86\uFF0CLog4j \u548C Logback \u6211\u4EEC\u90FD\u914D\u7F6E\u4E86 RollingFile\uFF0CLog4j 2 \u4E5F\u5C11\u4E0D\u4E86\u3002RollingFile \u4F1A\u6839\u636E Triggering\uFF08\u89E6\u53D1\uFF09\u7B56\u7565\u548C Rollover\uFF08\u8FC7\u6E21\uFF09\u7B56\u7565\u6765\u8FDB\u884C\u65E5\u5FD7\u6587\u4EF6\u6EDA\u52A8\u3002\u5982\u679C\u6CA1\u6709\u914D\u7F6E Rollover\uFF0C\u5219\u4F7F\u7528 DefaultRolloverStrategy \u6765\u4F5C\u4E3A RollingFile \u7684\u9ED8\u8BA4\u914D\u7F6E\u3002</p><p>\u89E6\u53D1\u7B56\u7565\u5305\u542B\u6709\uFF0C\u57FA\u4E8E cron \u8868\u8FBE\u5F0F\uFF08\u6E90\u4E8E\u5E0C\u814A\u8BED\uFF0C\u65F6\u95F4\u7684\u610F\u601D\uFF0C\u7528\u6765\u914D\u7F6E\u5B9A\u671F\u6267\u884C\u4EFB\u52A1\u7684\u65F6\u95F4\u683C\u5F0F\uFF09\u7684 CronTriggeringPolicy\uFF1B\u57FA\u4E8E\u6587\u4EF6\u5927\u5C0F\u7684 SizeBasedTriggeringPolicy\uFF1B\u57FA\u4E8E\u65F6\u95F4\u7684 TimeBasedTriggeringPolicy\u3002</p><p>\u8FC7\u6E21\u7B56\u7565\u5305\u542B\u6709\uFF0C\u9ED8\u8BA4\u7684\u8FC7\u6E21\u7B56\u7565 DefaultRolloverStrategy\uFF0C\u76F4\u63A5\u5199\u5165\u7684 DirectWriteRolloverStrategy\u3002\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u91C7\u7528\u9ED8\u8BA4\u7684\u8FC7\u6E21\u7B56\u7565\u5373\u53EF\uFF0C\u5B83\u5DF2\u7ECF\u8DB3\u591F\u5F3A\u5927\u3002</p><p>\u6765\u770B\u7B2C\u4E00\u4E2A\u57FA\u4E8E SizeBasedTriggeringPolicy \u548C TimeBasedTriggeringPolicy \u7B56\u7565\uFF0C\u4EE5\u53CA\u7F3A\u7701 DefaultRolloverStrategy \u7B56\u7565\u7684\u914D\u7F6E\u793A\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;Configuration&gt;
  &lt;Appenders&gt;
    &lt;RollingFile name=&quot;RollingFile&quot; fileName=&quot;rolling.log&quot;
                 filePattern=&quot;rolling-%d{yyyy-MM-dd}-%i.log&quot;&gt;
      &lt;PatternLayout&gt;
        &lt;Pattern&gt;%d %p %c{1.} [%t] %m%n&lt;/Pattern&gt;
      &lt;/PatternLayout&gt;
      &lt;Policies&gt;
        &lt;SizeBasedTriggeringPolicy size=&quot;1 KB&quot;/&gt;
      &lt;/Policies&gt;
    &lt;/RollingFile&gt;
  &lt;/Appenders&gt;
  &lt;Loggers&gt;
    &lt;Root level=&quot;debug&quot;&gt;
      &lt;AppenderRef ref=&quot;RollingFile&quot;/&gt;
    &lt;/Root&gt;
  &lt;/Loggers&gt;
&lt;/Configuration&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3A\u4E86\u9A8C\u8BC1\u6587\u4EF6\u7684\u6EDA\u52A8\u7B56\u7565\uFF0C\u6211\u4EEC\u8C03\u6574\u4E00\u4E0B Demo \u7C7B\uFF0C\u8BA9\u5B83\u591A\u6253\u5370\u70B9\u65E5\u5FD7\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>for (int i = 1;i &lt; 20; i++) {
    logger.debug(&quot;\u5FAE\u4FE1\u641C\u7D22\u300C{}\u300D\uFF0C\u56DE\u590D\u5173\u952E\u5B57\u300C{}\u300D\uFF0C\u6709\u60CA\u559C\u54E6&quot;,&quot;\u6C89\u9ED8\u738B\u4E8C&quot;, &quot;java&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u518D\u6B21\u8FD0\u884C Demo \u7C7B\uFF0C\u53EF\u4EE5\u770B\u5230\u6839\u76EE\u5F55\u4E0B\u591A\u4E86 3 \u4E2A\u65E5\u5FD7\u6587\u4EF6\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/log4j2-07af98ca-cf94-427e-adb6-bd935e32a8d0.png" alt=""></p><p>\u7ED3\u5408\u65E5\u5FD7\u6587\u4EF6\u540D\uFF0C\u518D\u6765\u770B RollingFile \u7684\u914D\u7F6E\uFF0C\u5C31\u5F88\u5BB9\u6613\u7406\u89E3\u4E86\u3002</p><p>1\uFF09fileName \u7528\u6765\u6307\u5B9A\u6587\u4EF6\u540D\u3002</p><p>2\uFF09filePattern \u7528\u6765\u6307\u5B9A\u6587\u4EF6\u540D\u7684\u6A21\u5F0F\uFF0C\u5B83\u53D6\u51B3\u4E8E\u8FC7\u6E21\u7B56\u7565\u3002</p><p>\u7531\u4E8E\u914D\u7F6E\u6587\u4EF6\u4E2D\u6CA1\u6709\u663E\u5F0F\u6307\u5B9A\u8FC7\u6E21\u7B56\u7565\uFF0C\u56E0\u6B64 RollingFile \u4F1A\u542F\u7528\u9ED8\u8BA4\u7684 DefaultRolloverStrategy\u3002</p><p>\u5148\u6765\u770B\u4E00\u4E0B DefaultRolloverStrategy \u7684\u5C5E\u6027\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/log4j2-32b853ce-8beb-496b-b66f-31b650c257ab.png" alt=""></p><p>\u518D\u6765\u770B filePattern \u7684\u503C <code>rolling-%d{yyyy-MM-dd}-%i.log</code>\uFF0C\u5176\u4E2D <code>%d{yyyy-MM-dd}</code> \u5F88\u597D\u7406\u89E3\uFF0C\u5C31\u662F\u5E74\u6708\u65E5\uFF1B\u5176\u4E2D <code>%i</code> \u662F\u4EC0\u4E48\u610F\u601D\u5462\uFF1F</p><p>\u7B2C\u4E00\u4E2A\u65E5\u5FD7\u6587\u4EF6\u540D\u4E3A rolling.log\uFF08\u6700\u8FD1\u7684\u65E5\u5FD7\u653E\u5728\u8FD9\u4E2A\u91CC\u9762\uFF09\uFF0C\u7B2C\u4E8C\u4E2A\u6587\u4EF6\u540D\u9664\u53BB\u65E5\u671F\u4E3A rolling-1.log\uFF0C\u7B2C\u4E8C\u4E2A\u6587\u4EF6\u540D\u9664\u53BB\u65E5\u671F\u4E3A rolling-2.log\uFF0C\u6839\u636E\u8FD9\u4E9B\u4FE1\u606F\uFF0C\u4F60\u80FD\u731C\u5230\u5176\u4E2D\u7684\u89C4\u5F8B\u5417\uFF1F</p><p>\u5176\u5B9E\u548C DefaultRolloverStrategy \u4E2D\u7684 max \u5C5E\u6027\u6709\u5173\uFF0C\u76EE\u524D\u4F7F\u7528\u7684\u9ED8\u8BA4\u503C\uFF0C\u4E5F\u5C31\u662F 7\uFF0C\u90A3\u5C31\u5F53 rolling-8.log \u8981\u751F\u6210\u7684\u65F6\u5019\uFF0C\u5220\u9664 rolling-1.log\u3002\u53EF\u4EE5\u8C03\u6574 Demo \u4E2D\u7684\u65E5\u5FD7\u8F93\u51FA\u91CF\u6765\u8FDB\u884C\u9A8C\u8BC1\u3002</p><p>3\uFF09SizeBasedTriggeringPolicy\uFF0C\u57FA\u4E8E\u65E5\u5FD7\u6587\u4EF6\u5927\u5C0F\u7684\u65F6\u95F4\u7B56\u7565\uFF0C\u5927\u5C0F\u4EE5\u5B57\u8282\u4E3A\u5355\u4F4D\uFF0C\u540E\u7F00\u53EF\u4EE5\u662F KB\uFF0CMB \u6216 GB\uFF0C\u4F8B\u5982 20 MB\u3002</p><p>\u518D\u6765\u770B\u4E00\u4E2A\u65E5\u5FD7\u6587\u4EF6\u538B\u7F29\u7684\u793A\u4F8B\uFF0C\u6765\u770B\u914D\u7F6E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;RollingFile name=&quot;RollingFileGZ&quot; fileName=&quot;gz/rolling.log&quot;
             filePattern=&quot;gz/%d{yyyy-MM-dd-HH}-%i.rolling.gz&quot;&gt;
    &lt;PatternLayout&gt;
        &lt;Pattern&gt;%d %p %c{1.} [%t] %m%n&lt;/Pattern&gt;
    &lt;/PatternLayout&gt;
    &lt;Policies&gt;
        &lt;SizeBasedTriggeringPolicy size=&quot;1 KB&quot;/&gt;
    &lt;/Policies&gt;
&lt;/RollingFile&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>fileName \u7684\u5C5E\u6027\u503C\u4E2D\u5305\u542B\u4E86\u4E00\u4E2A\u76EE\u5F55 gz\uFF0C\u4E5F\u5C31\u662F\u8BF4\u65E5\u5FD7\u6587\u4EF6\u90FD\u5C06\u653E\u5728\u8FD9\u4E2A\u76EE\u5F55\u4E0B\u3002</p></li><li><p>filePattern \u7684\u5C5E\u6027\u503C\u4E2D\u589E\u52A0\u4E86\u4E00\u4E2A gz \u7684\u540E\u7F00\uFF0C\u8FD9\u5C31\u8868\u660E\u65E5\u5FD7\u6587\u4EF6\u8981\u8FDB\u884C\u538B\u7F29\u4E86\uFF0C\u8FD8\u53EF\u4EE5\u662F zip \u683C\u5F0F\u3002</p></li></ul><p>\u8FD0\u884C Demo \u540E\uFF0C\u53EF\u4EE5\u5728 gz \u76EE\u5F55\u4E0B\u770B\u5230\u4EE5\u4E0B\u6587\u4EF6\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/log4j2-1b04167d-a11f-4447-9062-cb3cdd59aa73.png" alt=""></p><p>\u5230\u6B64\u4E3A\u6B62\uFF0CLog4j 2 \u7684\u57FA\u672C\u4F7F\u7528\u793A\u4F8B\u5C31\u5DF2\u7ECF\u5B8C\u6210\u4E86\u3002\u6D4B\u8BD5\u73AF\u5883\u641E\u5B9A\uFF0C\u6211\u53BB\u95EE\u4E00\u4E0B\u8001\u677F\uFF0C\u8981\u4E0D\u8981\u5728\u751F\u4EA7\u73AF\u5883\u4E0B\u4F7F\u7528 Log4j 2\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png" alt=""></p>`,80),o=[l];function i(p,c){return a(),s("div",null,o)}var d=n(t,[["render",i],["__file","log4j2.html.vue"]]);export{d as default};
