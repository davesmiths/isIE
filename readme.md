isIE
====
**JavaScript to detect Internet Explorer and it's version number**

Yep, another way to do it but hopefully compliment the many ways we have at the mo, which include <a href="http://www.paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/">Conditional stylesheets vs CSS hacks? Answer: Neither! - Paul Irish</a>, object detection, dynamically adding conditional comments and user agent sniffing (for the brave or naughty).

What I like about this script is it's just JavaScript, can be run immediately and anywhere in the HTML, and is small.

... and hopefully will have a short lifespan as we start to forget about old IEs.


Demo
----
Download and use the demo or try <a href="http://dave-smith.info/GitHub/isIE/demo/">dave-smith.info/GitHub/isIE/demo/</a>

Compatibility
-------------

IE version correctly identified in: 10 (Win8), 9 (Win7), 8 (WinXP), 7 (Win Vista), 6 (WinXP)

All non-IE browsers get isIE = false. Only browsers that know Conditional Compilation comments set isIE to a value other than false and as far as I know only IE knows. So the possibility of a false positive is extremely low if not zero.

In testing I found that the script detects the browser version even if the compatibility mode is changed (in IE 10, 9 and 8), for example if IE 10 is used in IE 7 mode, then IE 10 will be the detected version.

If a browser or version isn't mentioned here then it hasn't been tested; more tests welcomed.


How it works
------------

Makes use of <a href="http://msdn.microsoft.com/en-us/library/121hztk3%28v=vs.94%29.aspx">JavaScript Conditional Compilation</a>, which is roughly IE conditional comments for JavaScript. The script revolves around @_jscript_version, a variable providing a version number which can be used to identify IE versions, see <a href="http://en.wikipedia.org/wiki/Conditional_comment#Conditional_comments_in_JScript">Conditional Comments in JScript</a>.


Seen elsewhere
--------------

* <a href="http://dean.edwards.name/weblog/2007/03/sniff/"><strong>Sniff!</strong><br/>http://dean.edwards.name/weblog/2007/03/sniff/</a><br />Dean Edward's blog post from 2007 where he used Conditional Compilation to show a super-short way of detecting whether the browser was IE or not, and <a href="http://dean.edwards.name/weblog/2007/03/sniff/#comment83590">comment 21</a> by Cristian Carlesso showing version detection
* <a href="http://en.wikipedia.org/wiki/Conditional_comment#Conditional_comments_in_JScript"><strong>Conditional Comments</strong><br />http://en.wikipedia.org/wiki/Conditional_comment</a><br />Especially the section on Conditional Compilation near the bottom showing the version numbers given by @_jscript_version
* <a href="http://msdn.microsoft.com/en-us/library/121hztk3%28v=vs.94%29.aspx"><strong>Conditional Compilation (JavaScript)</strong><br />http://msdn.microsoft.com/en-us/library/121hztk3%28v=vs.94%29.aspx</a><br />Kind of helped, in the way that it confirmed it would probably work ish
* <a href="http://stackoverflow.com/questions/1843247/cc-on-and-ie6-detection"><strong>/*@cc_on and IE6 detection</strong><br />http://stackoverflow.com/questions/1843247/cc-on-and-ie6-detection</a><br />The problem laid out in this stack was the problem I set about working around


Thanks
------

There was a stackoverflow answer that mentioned Conditional Compilation and this got me started on the above, I can't find the stack again but I thank that person.


Created 2013 December 12
