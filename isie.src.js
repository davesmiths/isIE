/* github.com/davesmiths/isIE */
var isIE = false
    ,isIEmode
;
/*@cc_on isIE = @_jscript_version;@*/
if (isIE !== false) {
   if (isIE == 5.8)
       isIE = 8;
   else if (isIE == 5.7 && window.XMLHttpRequest)
       isIE = 7;
   else if (isIE == 5.7 || isIE == 5.6)
       isIE = 6;
   else if (isIE <= 5.5)
       isIE = 5;
   isIEmode = isIE;
   if (document.documentMode)
       isIEmode = document.documentMode;
}
