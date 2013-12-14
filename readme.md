isIE
====
**JavaScript to detect Internet Explorer and it's version number**

Yep, another way to do it and hopefully compliments the methods already out there, which include [html’s conditional classes](http://www.paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/), object detection, dynamically adding conditional comments and user agent sniffing (for the brave or naughty).

What I like about this script is it's just JavaScript, can be run immediately and anywhere in the HTML, and is small.

Demo
----
Download and use the demo or try <a href="http://dave-smith.info/GitHub/isIE/demo/">dave-smith.info/GitHub/isIE/demo/</a>

Compatibility
-------------

IE version and compatibility mode correctly identified in:
* 10 (Win8)
* 9 (Win7 SP1)
* 8 (WinXP SP3)
* 7 (Win Vista SP2)
* 6 (WinXP SP3)

If a browser or version isn't mentioned here then it hasn't been tested; more tests welcomed.


How it works
------------

isIE creates two variables:
* isIE: The browser major version number
* isIEmode: The compatibility mode major version number

isIE is calculated using [Conditional Compilation](http://msdn.microsoft.com/en-us/library/121hztk3%28v=vs.94%29.aspx), which could roughly translate as IE conditional comments in JavaScript. The key of which is @_jscript_version, a variable providing a version number which can be used to identify IE versions, see [Conditional Comments in JScript](http://en.wikipedia.org/wiki/Conditional_comment#Conditional_comments_in_JScript).

By default isIE is false, so all non-IE browsers get false. Only browsers that know Conditional Compilation comments set isIE to something else.

When IE is detected isIE is set to the major version number, for example IE 10 will set isIE = 10. The only exception to this is for all IE lte 5.5 which sets isIE = 5.

In testing I found that isIE gives the browser version even if the compatibility mode is changed, for example if IE 10 is used in IE 7 mode, then IE 10 will be the detected version. Hence isIEmode is also created as knowing both may be useful.

isIEmode is calcaulated using the proprietry object document.documentMode. By default this is set to isIE and overridden with the compatibility mode major version number when document.documentMode exists.

Seen elsewhere
--------------

* <a href="http://dean.edwards.name/weblog/2007/03/sniff/"><strong>Sniff!</strong><br/>http://dean.edwards.name/weblog/2007/03/sniff/</a><br />Dean Edward's blog post from 2007 where he used Conditional Compilation to show a super-short way of detecting whether the browser was IE or not, and <a href="http://dean.edwards.name/weblog/2007/03/sniff/#comment83590">comment 21</a> by Cristian Carlesso showing @jscriptversion to detect the version
* <a href="http://en.wikipedia.org/wiki/Conditional_comment#Conditional_comments_in_JScript"><strong>Conditional Comments</strong><br />http://en.wikipedia.org/wiki/Conditional_comment</a><br />Especially the section on Conditional Compilation near the bottom showing the version numbers given by @_jscript_version
* <a href="http://msdn.microsoft.com/en-us/library/121hztk3%28v=vs.94%29.aspx"><strong>Conditional Compilation (JavaScript)</strong><br />http://msdn.microsoft.com/en-us/library/121hztk3%28v=vs.94%29.aspx</a><br />Kind of helped, in the way that it confirmed it would probably work ish
* <a href="http://stackoverflow.com/questions/1843247/cc-on-and-ie6-detection"><strong>/*@cc_on and IE6 detection</strong><br />http://stackoverflow.com/questions/1843247/cc-on-and-ie6-detection</a><br />The problem laid out in this stack was the problem I set about working around
* <a href="http://tanalin.com/en/articles/ie-version-js/">**Internet Explorer (IE) version detection in JavaScript**<br />http://tanalin.com/en/articles/ie-version-js/</a><br />A brilliant write-up on the subject by Marat Tanalin, wish I'd seen this before


Thanks
------

There was a stackoverflow answer that mentioned Conditional Compilation and this got me started on the above, I can't find the stack again but I thank that person.


Created 2013 December 12
