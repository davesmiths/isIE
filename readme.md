isIE
====
**JavaScript to detect Internet Explorer and it's version number**

Yep, another way to do it and hopefully compliments the methods already out there, which include [html’s conditional classes](http://www.paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/), object detection, dynamically adding conditional comments and user agent sniffing (for the brave or naughty).

What I like about this script is it's just JavaScript, can be run immediately and anywhere in the HTML, and is small.

... hopefully it will have a short lifespan as we start to forget about old IEs.


Demo
----
Download and use the demo or try <a href="http://dave-smith.info/GitHub/isIE/demo/">dave-smith.info/GitHub/isIE/demo/</a>

Compatibility
-------------

IE version correctly identified in: 10 (Win8), 9 (Win7), 8 (WinXP SP3), 7 (Win Vista SP2), 6 (WinXP SP3)

In testing I found that the script detects the browser version even if the compatibility mode is changed (in IE 10, 9 and 8), for example if IE 10 is used in IE 7 mode, then IE 10 will be the detected version.

If a browser or version isn't mentioned here then it hasn't been tested; more tests welcomed.


How it works
------------

Makes use of [Conditional Compilation](http://msdn.microsoft.com/en-us/library/121hztk3%28v=vs.94%29.aspx), which could roughly translate as IE conditional comments in JavaScript. The key of which is @_jscript_version, a variable providing a version number which can be used to identify IE versions, see [Conditional Comments in JScript](http://en.wikipedia.org/wiki/Conditional_comment#Conditional_comments_in_JScript).

The variable isIE is outputted by the script. By default this is false, so all non-IE browsers will get isIE = false. Only browsers that know Conditional Compilation comments set isIE to a value other than false.

When IE is detected isIE is set to the major version number, for example IE 10 will set isIE = 10. The only exception to this is for all IE less than 6 which sets isIE = 5.

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
