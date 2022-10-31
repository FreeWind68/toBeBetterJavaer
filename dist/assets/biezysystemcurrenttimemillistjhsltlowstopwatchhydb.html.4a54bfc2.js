import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o,c,a as n,b as t,d as s,e as i}from"./app.d44b5444.js";const l={},u=n("p",null,"\u5927\u5BB6\u597D\uFF0C\u6211\u662F\u4E8C\u54E5\u5440\uFF01",-1),r=s("\u6628\u5929\uFF0C"),k={href:"https://mp.weixin.qq.com/s/3RVsFZ17F0JzoHCLKbQgGw",target:"_blank",rel:"noopener noreferrer"},d=s("\u4E8C\u54E5\u7684\u7F16\u7A0B\u661F\u7403"),m=s("\u91CC\u7684\u4E00\u4F4D\u7403\u53CB\u95EE\u6211\u80FD\u4E0D\u80FD\u7ED9\u4ED6\u89E3\u91CA\u4E00\u4E0B "),v=n("code",null,"@SpringBootApplication",-1),b=s(" \u6CE8\u89E3\u662F\u4EC0\u4E48\u610F\u601D\uFF0C\u8FD8\u6709 Spring Boot \u7684\u8FD0\u884C\u539F\u7406\uFF0C\u4E8E\u662F\u6211\u5C31\u5E26\u7740\u4ED6\u6252\u62C9\u4E86\u4E00\u4E0B\u8FD9\u4E2A\u6CE8\u89E3\u7684\u6E90\u7801\uFF0C\u8FD8\u6709 "),h=n("code",null,"SpringApplication",-1),g=s(" \u7C7B\u7684 "),w=n("code",null,"run()",-1),_=s(" \u65B9\u6CD5\u7684\u6E90\u7801\uFF0C\u4E00\u4E0B\u5B50\u4ED6\u5C31\u660E\u767D\u4E86\u3002"),f=i(`<p>\u4F60\u522B\u8BF4\uFF0C\u770B\u6E90\u7801\u7684\u8FC7\u7A0B\u8FD8\u771F\u7684\u662F\u633A\u6709\u8DA3\uFF0C\u8FD9\u4E0D\uFF0C\u6211\u5C31\u53D1\u73B0\u4E86\u4E00\u4E2A\u6709\u610F\u601D\u7684\u70B9\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ConfigurableApplicationContext</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token class-name">StopWatch</span> stopWatch <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StopWatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	stopWatch<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
	stopWatch<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Spring Boot \u662F\u7528 StopWatch \u6765\u7EDF\u8BA1\u8017\u65F6\u7684\uFF0C\u800C\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u4F1A\u7528 <code>System.currentTimeMillis()</code> \u6765\u7EDF\u8BA1\u8017\u65F6\uFF0C\u5BF9\u5427\uFF1F\u7F16\u7A0B\u55B5\u{1F431}\u5F00\u6E90\u9879\u76EE\u91CC\u5C31\u6709\u8FD9\u6837\u4E00\u6BB5\u4EE3\u7801\uFF0C\u5728\u5904\u7406\u7EDF\u4E00\u65E5\u5FD7\u5904\u7406\u5207\u9762\u7684\u65F6\u5019\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Around</span><span class="token punctuation">(</span><span class="token string">&quot;webLog()&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">doAround</span><span class="token punctuation">(</span><span class="token class-name">ProceedingJoinPoint</span> joinPoint<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
    <span class="token keyword">long</span> startTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">long</span> endTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    webLog<span class="token punctuation">.</span><span class="token function">setSpendTime</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>endTime <span class="token operator">-</span> startTime<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u6BD4\u4E4B\u4E0B\uFF0C\u6211\u4EEC\u5C31\u80FD\u53D1\u73B0\uFF0CJDK \u63D0\u4F9B\u7684 <code>System.currentTimeMillis()</code> \u6CA1\u6709 Spring \u63D0\u4F9B\u7684 StopWatch \u7B80\u6D01\u3001\u6E05\u6670\u3002</p><p>\u5C24\u5176\u662F\u5728\u591A\u4EFB\u52A1\u7684\u60C5\u51B5\u4E0B\uFF0CStopWatch \u7B80\u76F4\u597D\u7528\u5230\u7206\u{1F917}\uFF01</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u521B\u5EFA\u4E00\u4E2A StopWatch \u5B9E\u4F8B</span>
<span class="token class-name">StopWatch</span> sw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StopWatch</span><span class="token punctuation">(</span><span class="token string">&quot;\u6C89\u9ED8\u738B\u4E8C\u662F\u50BB X&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u5F00\u59CB\u8BA1\u65F6</span>
sw<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token string">&quot;\u4EFB\u52A11&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u505C\u6B62\u8BA1\u65F6</span>
sw<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u4EFB\u52A11\u8017\u65F6\uFF1A%d%s.\\n&quot;</span><span class="token punctuation">,</span> sw<span class="token punctuation">.</span><span class="token function">getLastTaskTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;ms&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

sw<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token string">&quot;\u4EFB\u52A12&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sw<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u4EFB\u52A12\u8017\u65F6\uFF1A%d%s.\\n&quot;</span><span class="token punctuation">,</span> sw<span class="token punctuation">.</span><span class="token function">getLastTaskTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;ms&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u4EFB\u52A1\u6570\u91CF\uFF1A%s\uFF0C\u603B\u8017\u65F6\uFF1A%ss.\\n&quot;</span><span class="token punctuation">,</span> sw<span class="token punctuation">.</span><span class="token function">getTaskCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> sw<span class="token punctuation">.</span><span class="token function">getTotalTimeSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u770B\u5230\u6CA1\uFF0C\u662F\u4E0D\u662F\u5F88\u7B80\u5355\uFF1F</p><ul><li>\u5148 new \u4E00\u4E2A StopWatch \u5BF9\u8C61</li><li>\u518D start \u5F00\u59CB\u8BA1\u65F6</li><li>\u7136\u540E stop \u505C\u6B62\u8BA1\u65F6</li><li>\u6700\u540E\u901A\u8FC7 <code>sw.getLastTaskTimeMillis()</code> \u5F97\u51FA\u65F6\u95F4\u5DEE</li></ul><p>\u5982\u679C\u6362\u6210 <code>System.currentTimeMillis()</code> \u5C31\u8981\u4E86\u8001\u547D\uFF0C\u5148\u5F97\u58F0\u660E\u597D\u51E0\u4E2A long \u578B\u7684\u5C40\u90E8\u53D8\u91CF\uFF0C\u7136\u540E\u8981\u7B2C\u4E8C\u4E2A\u51CF\u7B2C\u4E00\u4E2A\uFF0C\u7B2C\u4E09\u4E2A\u51CF\u7B2C\u4E8C\u4E2A\uFF0C\u7A0D\u5FAE\u7C97\u5FC3\u4E00\u70B9\uFF08\u5C24\u5176\u662F CV \u5927\u6CD5\uFF09\u65F6\uFF0C\u5F88\u5BB9\u6613\u641E\u9519\u3002</p><p>\u9664\u4E86\u53EF\u4EE5\u901A\u8FC7\u5C40\u90E8\u65F6\u95F4\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7 <code>sw.getTotalTimeSeconds()</code> \u83B7\u53D6\u603B\u7684\u8017\u65F6\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4EFB\u52A11\u8017\u65F6\uFF1A1002ms.
\u4EFB\u52A12\u8017\u65F6\uFF1A1105ms.
\u4EFB\u52A1\u6570\u91CF\uFF1A2\uFF0C\u603B\u8017\u65F6\uFF1A2.107820109s.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53E6\u5916\uFF0CStopWatch \u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E2A <code>sw.prettyPrint()</code> \u65B9\u6CD5\u4F9B\u6253\u5370\u51FA\u6F02\u4EAE\u7684\u683C\u5F0F\u5316\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>StopWatch &#39;\u6C89\u9ED8\u738B\u4E8C\u662F\u50BB X&#39;: running time = 2108529351 ns
---------------------------------------------
ns         %     Task name
---------------------------------------------
1004338467  048%  \u4EFB\u52A11
1104190884  052%  \u4EFB\u52A12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6709\u8017\u65F6\uFF0C\u6709\u5360\u7528\u767E\u5206\u6BD4\uFF0C\u8FD8\u6709\u4EFB\u52A1\u540D\uFF0C\u975E\u5E38\u6E05\u6670\u3002</p><p>\u9664\u4E86 Spring\uFF0Chutool \u5DE5\u5177\u5E93\u548C Apache common \u5DE5\u5177\u5305\u90FD\u63D0\u4F9B\u4E86\u5404\u81EA\u7684 StopWatch\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-biezysystemcurrenttimemillistjhsltlowstopwatchhydb-b4ca30f2-9e26-478c-b37c-062f5e3e0076.png" alt=""></p><p>\u67E5\u770B hutool \u5DE5\u5177\u5E93\u4E2D\u7684 StopWatch \u6E90\u7801\u53EF\u4EE5\u5F97\u51FA\uFF0C\u8BE5\u7C7B\u5176\u5B9E\u5C31\u6765\u81EA Spring \u7684 StopWatch.java\uFF0C\u7528\u6CD5\u4E5F\u5B8C\u5168\u4E00\u81F4\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-biezysystemcurrenttimemillistjhsltlowstopwatchhydb-cdc28804-8b8e-40fa-a2fe-88b9d2ec57c9.png" alt=""></p><p>\u8FD9\u8BF4\u660E hutool \u7684\u4F5C\u8005\u4E5F\u8BA4\u4E3A Spring \u7684 StopWatch \u5199\u5F97\u597D\uFF0C\u54C8\u54C8\u54C8\u{1F601}\u3002</p><p>\u4F7F\u7528 Beyond compare \u6BD4\u8F83\u540E\u4E5F\u80FD\u5F97\u51FA\uFF0C\u4E24\u8005\u9664\u4E86\u4E00\u4E2A\u4E2D\u6587\u6CE8\u91CA\uFF0C\u4E00\u4E2A\u82F1\u6587\u6CE8\u91CA\uFF0C\u4EE3\u7801\u51E0\u4E4E\u4E00\u6837\u3002setKeepTaskList \u65B9\u6CD5\u6709\u6BD4\u8F83\u5927\u7684\u4E0D\u540C\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-biezysystemcurrenttimemillistjhsltlowstopwatchhydb-529e5215-b41c-492f-8e7f-a223242a4120.png" alt=""></p><p>\u90A3\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5982\u679C\u4F60\u7684\u9879\u76EE\u4E2D\u6CA1\u6709\u4F7F\u7528 Spring \u5168\u5BB6\u6876\uFF0C\u53EA\u7528\u4E86 hutool \u5DE5\u5177\u5305\uFF0C\u90A3\u5C31\u53EF\u4EE5\u4F7F\u7528 hutool \u7684 StopWatch \u6765\u4EE3\u66FF <code>System.currentTimeMillis()</code>\u3002</p><p>\u901A\u8FC7\u5206\u6790 StopWatch \u7684 stop \u65B9\u6CD5\u6E90\u7801\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IllegalStateException</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>currentTaskName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalStateException</span><span class="token punctuation">(</span><span class="token string">&quot;Can&#39;t stop StopWatch: it&#39;s not running&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">final</span> <span class="token keyword">long</span> lastTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">nanoTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>startTimeNanos<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>totalTimeNanos <span class="token operator">+=</span> lastTime<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>lastTaskInfo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TaskInfo</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>currentTaskName<span class="token punctuation">,</span> lastTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>taskList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>taskList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>lastTaskInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token operator">++</span><span class="token keyword">this</span><span class="token punctuation">.</span>taskCount<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>currentTaskName <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u5B9E\u53EF\u4EE5\u53D1\u73B0\uFF0CStopWatch \u7684\u5185\u90E8\u662F\u901A\u8FC7 <code>System.nanoTime()</code> \u6765\u8BA1\u65F6\u7684\uFF0C\u672C\u8D28\u4E0A\u548C <code>System.currentTimeMillis()</code> \u5DEE\u522B\u5E76\u4E0D\u5927\u3002</p><p>nanoTime \u6BD4 currentTimeMillis \u7684\u7C92\u5EA6\u66F4\u7EC6\uFF0C\u524D\u8005\u662F\u4EE5\u7EB3\u79D2\u4E3A\u5355\u4F4D\uFF0C\u540E\u8005\u662F\u4EE5\u6BEB\u79D2\u4E3A\u5355\u4F4D\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-biezysystemcurrenttimemillistjhsltlowstopwatchhydb-a3823870-63a7-4154-9bb9-6994f09f0f39.png" alt=""></p><p>\u6CE8\u610F\u4E24\u8005\u90FD\u662F native \u65B9\u6CD5\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u503C\u7684\u7C92\u5EA6\u5176\u5B9E\u53D6\u51B3\u4E8E\u5E95\u5C42\u7684\u64CD\u4F5C\u7CFB\u7EDF\u3002</p><p><strong>\u770B\u5230\u8FD9\uFF0C\u5927\u5BB6\u53EF\u80FD\u4F1A\u604D\u7136\u5927\u609F\uFF0CStopWatch \u4E0D\u8FC7\u662F\u62AB\u7740\u4E00\u5C42\u5916\u8863\u7684 <code>System.currentTimeMillis()</code> \u561B</strong>\uFF1F</p><p>\u4F46\u5999\u5C31\u5999\u5728\uFF0C\u8FD9\u5C42\u5916\u8863\u8DB3\u591F\u7684\u6F02\u4EAE\uFF0C\u8DB3\u591F\u7684\u4F18\u96C5\u3002StopWatch \u53EF\u4EE5\u8BB0\u5F55\u6BCF\u4E2A\u5B50\u4EFB\u52A1\u7684\u540D\u79F0\uFF0C\u4EE5\u53CA\u6309\u683C\u5F0F\u5316\u6253\u5370\u7ED3\u679C\uFF0C\u5C24\u5176\u662F\u9488\u5BF9\u591A\u4EFB\u52A1\u7EDF\u8BA1\u65F6\u66F4\u53CB\u597D\u4E00\u70B9\u3002</p><p>\u5F53\u7136\u4E86\uFF0C\u9664\u4E86\u9009\u62E9 Spring \u548C hutool \u7684 StopWatch\uFF0CApache commons-lang3 \u7684 StopWatch \u4E5F\u662F\u4E00\u4E2A\u4E0D\u9519\u7684\u53EF\u9009\u9879\uFF0C\u66F4\u52A0\u7075\u6D3B\u591A\u53D8\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">StopWatch</span> sw <span class="token operator">=</span> <span class="token class-name">StopWatch</span><span class="token punctuation">.</span><span class="token function">createStarted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u8017\u65F6\uFF1A%dms.\\n&quot;</span><span class="token punctuation">,</span> sw<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4ED6\u4E24\u4E2A\u90FD\u662F\u901A\u8FC7 new \u6765\u521B\u5EFA StopWatch \u5BF9\u8C61\uFF0Ccommons-lang3 \u8FD8\u53EF\u4EE5\u901A\u8FC7 createStarted\uFF08\u521B\u5EFA\u5E76\u7ACB\u5373\u542F\u52A8\uFF09\u3001create\uFF08\u521B\u5EFA\uFF09\u6765\u5B8C\u6210\u3002</p><p>\u8FD8\u53EF\u4EE5\u8C03\u7528 suspend \u65B9\u6CD5\u6682\u505C\u8BA1\u65F6\u3001resume \u65B9\u6CD5\u6062\u590D\u8BA1\u65F6\u3001reset \u91CD\u65B0\u8BA1\u65F6\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u6682\u505C\u8BA1\u65F6</span>
sw<span class="token punctuation">.</span><span class="token function">suspend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6682\u505C\u8017\u65F6\uFF1A%dms.\\n&quot;</span><span class="token punctuation">,</span> sw<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6062\u590D\u8BA1\u65F6</span>
sw<span class="token punctuation">.</span><span class="token function">resume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6062\u590D\u8017\u65F6\uFF1A%dms.\\n&quot;</span><span class="token punctuation">,</span> sw<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u505C\u6B62\u8BA1\u65F6</span>
sw<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u603B\u8017\u65F6\uFF1A%dms.\\n&quot;</span><span class="token punctuation">,</span> sw<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u91CD\u7F6E\u8BA1\u65F6</span>
sw<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5F00\u59CB\u8BA1\u65F6</span>
sw<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u91CD\u7F6E\u8017\u65F6\uFF1A%dms.\\n&quot;</span><span class="token punctuation">,</span> sw<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ending" tabindex="-1"><a class="header-anchor" href="#ending" aria-hidden="true">#</a> ending</h2>`,37),y=s("\u6587\u672B\u7ED9\u81EA\u5DF1\u7684\u7F16\u7A0B\u661F\u7403\u6253\u4E2A\u5E7F\u544A\u3002\u4E00\u4E2A\u4EBA\u53EF\u4EE5\u8D70\u5F97\u5F88\u5FEB\uFF0C\u4F46\u4E00\u7FA4\u4EBA\u624D\u80FD\u8D70\u5F97\u66F4\u8FDC\u3002\u6B22\u8FCE\u52A0\u5165"),S={href:"https://mp.weixin.qq.com/s/3RVsFZ17F0JzoHCLKbQgGw",target:"_blank",rel:"noopener noreferrer"},j=s("\u4E8C\u54E5\u7684\u7F16\u7A0B\u661F\u7403"),T=s("\uFF0C\u91CC\u9762\u7684\u6BCF\u4E2A\u7403\u53CB\u90FD\u975E\u5E38\u7684\u53CB\u5584\uFF0C\u9664\u4E86\u9F13\u52B1\u4F60\uFF0C\u8FD8\u4F1A\u7ED9\u4F60\u63D0\u51FA\u5408\u7406\u7684\u5EFA\u8BAE\u3002"),q=n("p",null,[n("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-biezysystemcurrenttimemillistjhsltlowstopwatchhydb-7fc972ae-c530-4c91-a1ac-ef7c38494734.png",alt:""})],-1),x=n("p",null,"\u661F\u7403\u63D0\u4F9B\u7684\u4E09\u4EFD\u4E13\u5C5E\u4E13\u680F\u300AJava \u9762\u8BD5\u6307\u5357\u300B\u3001\u300A\u7F16\u7A0B\u55B5 \u{1F431}\uFF08Spring Boot+Vue \u524D\u540E\u7AEF\u5206\u79BB\uFF09\u5B9E\u6218\u9879\u76EE\u7B14\u8BB0\u300B\u3001\u300AJava \u7248 LeetCode \u5237\u9898\u7B14\u8BB0\u300B\uFF0C\u5E72\u8D27\u6EE1\u6EE1\uFF0C\u4EF7\u503C\u8FDE\u57CE\u3002",-1),W=n("p",null,[n("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-biezysystemcurrenttimemillistjhsltlowstopwatchhydb-e89d40c9-078b-4b2b-9367-2bd707a418fa.png",alt:""})],-1),L=n("p",null,[n("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-biezysystemcurrenttimemillistjhsltlowstopwatchhydb-1af7a5f6-312c-4ae9-ab77-3c359389c4a6.png",alt:""})],-1),z=s("\u5DF2\u7ECF\u6709 "),C=n("strong",null,"480 \u591A\u540D",-1),M=s(" \u5C0F\u4F19\u4F34\u52A0\u5165"),A={href:"https://mp.weixin.qq.com/s/3RVsFZ17F0JzoHCLKbQgGw",target:"_blank",rel:"noopener noreferrer"},N=s("\u4E8C\u54E5\u7684\u7F16\u7A0B\u661F\u7403"),V=s("\u4E86\uFF0C\u5982\u679C\u4F60\u4E5F\u9700\u8981\u4E00\u4E2A\u826F\u597D\u7684\u5B66\u4E60\u6C1B\u56F4\uFF0C"),B={href:"https://mp.weixin.qq.com/s/3RVsFZ17F0JzoHCLKbQgGw",target:"_blank",rel:"noopener noreferrer"},J=s("\u6233\u94FE\u63A5"),F=s("\u52A0\u5165\u6211\u4EEC\u7684\u5927\u5BB6\u5EAD\u5427\uFF01\u8FD9\u662F\u4E00\u4E2A Java \u5B66\u4E60\u6307\u5357 + \u7F16\u7A0B\u5B9E\u6218 + LeetCode \u5237\u9898\u7684\u79C1\u5BC6\u5708\u5B50\uFF0C\u4F60\u53EF\u4EE5\u5411\u4E8C\u54E5\u63D0\u95EE\u3001\u5E2E\u4F60\u5236\u5B9A\u5B66\u4E60\u8BA1\u5212\u3001\u8DDF\u7740\u4E8C\u54E5\u4E00\u8D77\u505A\u5B9E\u6218\u9879\u76EE\uFF0C\u51B2\u51B2\u51B2\u3002"),I=n("p",null,[n("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-biezysystemcurrenttimemillistjhsltlowstopwatchhydb-a60262ae-01dc-4e39-affb-b192ca2de1c4.png",alt:""})],-1),K=n("hr",null,null,-1),E=n("p",null,"\u6CA1\u6709\u4EC0\u4E48\u4F7F\u6211\u505C\u7559\u2014\u2014\u9664\u4E86\u76EE\u7684\uFF0C\u7EB5\u7136\u5CB8\u65C1\u6709\u73AB\u7470\u3001\u6709\u7EFF\u836B\u3001\u6709\u5B81\u9759\u7684\u6E2F\u6E7E\uFF0C\u6211\u662F\u4E0D\u7CFB\u4E4B\u821F\u3002",-1),P=n("p",null,[n("strong",null,"\u63A8\u8350\u9605\u8BFB"),s("\uFF1A")],-1),R={href:"https://mp.weixin.qq.com/s/KxUMq2YmlIBMbAeRwUm8JA",target:"_blank",rel:"noopener noreferrer"},G=s("\u6CA1\u5FC5\u8981\u4E3A\u5B9E\u4E60\u78B0\u7684\u5934\u7834\u8840\u6D41"),H={href:"https://mp.weixin.qq.com/s/PxgZkuA_SnAgG7xfwlKLgw",target:"_blank",rel:"noopener noreferrer"},Z=s("\u7F51\u7AD9\u6323\u4E86 200 \u7F8E\u5200\u540E\u7684\u611F\u89E6"),Q={href:"https://mp.weixin.qq.com/s/R13FkPipfEMKjqNaCL3UoA",target:"_blank",rel:"noopener noreferrer"},U=s("\u5728 IDEA \u91CC\u4E0B\u4E94\u5B50\u68CB\u4E0D\u8FC7\u5206\u5427\uFF1F"),D={href:"https://mp.weixin.qq.com/s/oBLUSnHOmzoVpCP1sacNbA",target:"_blank",rel:"noopener noreferrer"},O=s("\u987A\u5229\u5165\u804C\u4E86"),X=n("p",null,[n("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ruhfzddcfzf-da664b36-ac4c-4d16-a345-fc710462b515.jpg",alt:""})],-1);function Y($,nn){const a=p("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[r,n("a",k,[d,t(a)]),m,v,b,h,g,w,_]),f,n("p",null,[y,n("a",S,[j,t(a)]),T]),q,x,W,L,n("p",null,[z,C,M,n("a",A,[N,t(a)]),V,n("a",B,[J,t(a)]),F]),I,K,E,P,n("ul",null,[n("li",null,[n("a",R,[G,t(a)])]),n("li",null,[n("a",H,[Z,t(a)])]),n("li",null,[n("a",Q,[U,t(a)])]),n("li",null,[n("a",D,[O,t(a)])])]),X])}var tn=e(l,[["render",Y],["__file","biezysystemcurrenttimemillistjhsltlowstopwatchhydb.html.vue"]]);export{tn as default};
