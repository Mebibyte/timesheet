var snowsrc="money.png"
var no = 30;
var hidesnowtime = 0;
var snowdistance = "pageheight";

///////////Stop Config//////////////////////////////////

var ie4up = (document.all) ? 1 : 0;
var ns6up = (document.getElementById && !document.all) ? 1 : 0;

function iecompattest(){
  return (document.compatMode && document.compatMode != "BackCompat") ? document.documentElement : document.body
}

var dx, xp, yp;    // coordinate and position variables
var am, stx, sty;  // amplitude and step variables
var i, doc_width = 800, doc_height = 600; 
var rotateDegrees = 0;

if (ns6up) {
  doc_width = self.innerWidth;
  doc_height = self.innerHeight;
} else if (ie4up) {
  doc_width = iecompattest().clientWidth;
  doc_height = iecompattest().clientHeight;
}

dx = new Array();
xp = new Array();
yp = new Array();
am = new Array();
stx = new Array();
sty = new Array();
if (enableSnow) {
  for (i = 0; i < no; ++ i) {  
    dx[i] = 0;                        // set coordinate variables
    xp[i] = Math.random() * (doc_width - 50);  // set position variables
    yp[i] = Math.random() * doc_height;
    am[i] = Math.random() * 20;         // set amplitude variables
    stx[i] = 0.02 + Math.random() / 10; // set step variables
    sty[i] = 0.7 + Math.random();     // set step variables
    if (ie4up||ns6up) {
      document.write("<div id=\"dot" + i + "\" class=\"money\" style=\"POSITION: absolute; Z-INDEX: " + i + "; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><img src='" + snowsrc + "' border=\"0\"><\/div>");
    }
  }
}

function snowIE_NS6() {  // IE and NS6 main animation function
  doc_width = ns6up ? window.innerWidth - 10 : iecompattest().clientWidth - 10;
      doc_height = (window.innerHeight && snowdistance == "windowheight") ? window.innerHeight : 
      (ie4up && snowdistance == "windowheight") ?  iecompattest().clientHeight : 
      (ie4up && !window.opera && snowdistance == "pageheight") ? iecompattest().scrollHeight : 
      iecompattest().offsetHeight;
  for (i = 0; i < no; ++ i) {  // iterate for every dot
    yp[i] += sty[i] * (((i % 20) + 2) / 7);
    if (yp[i] > doc_height + 100) {
      xp[i] = Math.random() * (doc_width - am[i] - 50);
      yp[i] = -100;
      stx[i] = 0.02 + Math.random() / 10;
      sty[i] = 0.7 + Math.random();
    }
    dx[i] += stx[i] / 2;
    var dot = document.getElementById("dot" + i);
    rotateDegrees += 0.15;
    rotateDegrees %= 3600;
    var transformation = "translateZ(" + ((i % 20) * 100) + "px) translateY(" + yp[i] + "px) translateX(" + (xp[i] + am[i] * Math.sin(dx[i])) + "px) rotateX(" + (((i % 20) * 30) + rotateDegrees / 10) + "deg) rotateY(" + (((i % 20) * 30) + rotateDegrees / 5) + "deg) scale(" + (((i % 20)/15) + 0.5) + ", " + (((i % 20)/15) + 0.5) + ")";
    dot.style.webkitTransform = transformation;
    dot.style.MozTransform = transformation;
    dot.style.msTransform = transformation;
    dot.style.OTransform = transformation;
    dot.style.transform = transformation;

  }
  snowtimer = setTimeout("snowIE_NS6()", 10);
}

function hidesnow(){
    if (window.snowtimer) clearTimeout(snowtimer);
    for (i = 0; i < no; i++) document.getElementById("dot"+i).style.visibility="hidden";
}
        

if (enableSnow && (ie4up || ns6up)) {
  snowIE_NS6();
  if (hidesnowtime > 0)
    setTimeout("hidesnow()", hidesnowtime * 1000);
}