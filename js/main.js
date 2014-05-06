/*! Casper 06-05-2014 */
function makeImagesResponsive(){var a=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,b=document.getElementsByTagName("body")[0].getElementsByTagName("img");if(0!==b.length){var c;c=b[0].hasAttribute?function(a,b){return a.hasAttribute(b)}:function(a,b){return null!==a.getAttribute(b)};for(var d=window.devicePixelRatio&&window.devicePixelRatio>=1.2?1:0,e=0;e<b.length;e++){var f=b[e],g=d&&c(f,"data-src2x")?"data-src2x":"data-src",h=d&&c(f,"data-src-base2x")?"data-src-base2x":"data-src-base";if(f.onload=function(){this.style.opacity="1"},c(f,g))for(var i=c(f,h)?f.getAttribute(h):"",j=f.getAttribute(g),k=j.split(","),l=0;l<k.length;l++){var m,n,o=k[l].replace(":","||").split("||"),p=o[0],q=o[1];if(-1!==p.indexOf("<"))if(m=p.split("<"),k[l-1]){var r=k[l-1].split(/:(.+)/),s=r[0].split("<");n=a<=m[1]&&a>s[1]}else n=a<=m[1];else if(m=p.split(">"),k[l+1]){var t=k[l+1].split(/:(.+)/),u=t[0].split(">");n=a>=m[1]&&a<u[1]}else n=a>=m[1];if(n){var v,w=-1!==q.indexOf("//")?1:0;v=1===w?q:i+q,f.src!==v&&f.setAttribute("src",v);break}}}}}!function(a){"use strict";a(document).ready(function(){a(".post-content").fitVids()})}(jQuery),function(a){"use strict";a.fn.fitVids=function(b){var c={customSelector:null};if(!document.getElementById("fit-vids-style")){var d=document.createElement("div"),e=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0],f="&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";d.className="fit-vids-style",d.id="fit-vids-style",d.style.display="none",d.innerHTML=f,e.parentNode.insertBefore(d,e)}return b&&a.extend(c,b),this.each(function(){var b=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];c.customSelector&&b.push(c.customSelector);var d=a(this).find(b.join(","));d=d.not("object object"),d.each(function(){var b=a(this);if(!("embed"===this.tagName.toLowerCase()&&b.parent("object").length||b.parent(".fluid-width-video-wrapper").length)){var c="object"===this.tagName.toLowerCase()||b.attr("height")&&!isNaN(parseInt(b.attr("height"),10))?parseInt(b.attr("height"),10):b.height(),d=isNaN(parseInt(b.attr("width"),10))?b.width():parseInt(b.attr("width"),10),e=c/d;if(!b.attr("id")){var f="fitvid"+Math.floor(999999*Math.random());b.attr("id",f)}b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),b.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto),function(){var a,b,c;if(a=document.getElementById("site-navigation"),a&&(b=a.getElementsByTagName("h1")[0],"undefined"!=typeof b)){if(c=a.getElementsByTagName("ul")[0],"undefined"==typeof c)return void(b.style.display="none");-1===c.className.indexOf("nav-menu")&&(c.className+=" nav-menu"),b.onclick=function(){-1!==a.className.indexOf("toggled")?a.className=a.className.replace(" toggled",""):a.className+=" toggled"}}}(),window.addEventListener?(window.addEventListener("load",makeImagesResponsive,!1),window.addEventListener("resize",makeImagesResponsive,!1)):(window.attachEvent("onload",makeImagesResponsive),window.attachEvent("onresize",makeImagesResponsive)),function(){var a=navigator.userAgent.toLowerCase().indexOf("webkit")>-1,b=navigator.userAgent.toLowerCase().indexOf("opera")>-1,c=navigator.userAgent.toLowerCase().indexOf("msie")>-1;if((a||b||c)&&"undefined"!=typeof document.getElementById){var d=window.addEventListener?"addEventListener":"attachEvent";window[d]("hashchange",function(){var a=document.getElementById(location.hash.substring(1));a&&(/^(?:a|select|input|button|textarea)$/i.test(a.tagName)||(a.tabIndex=-1),a.focus())},!1)}}();