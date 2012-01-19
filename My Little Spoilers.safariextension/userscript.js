// ==UserScript==
// @name           My Little Spoilers
// @namespace      http://www.reddit.com/r/mylittlepony/
// @description    Includes the spoiler thumbnail on /r/mylittlepony posts when browsing the front page.
// @author         badjokemostlikely
// @version        1.1
//
// @include        http://www.reddit.com/*
// @include        http://www.reddit.com/r/all
// @include        http://www.reddit.com/r/random
// @include        http://www.reddit.com/r/friends
//
// @exclude        http://www.reddit.com/r/*
// @exclude        http://www.reddit.com/message/*
// @exclude        http://www.reddit.com/prefs/*
//
// @icon           http://i.imgur.com/ZzZRI.png
// @iconURL        http://i.imgur.com/ZzZRI.png
// ==/UserScript==

var myLittleSpoilers = function(context) {
	Array.prototype.slice.call(context.querySelectorAll(".over18"), 0).forEach(function(post) {
		var sub = post.querySelector(".subreddit");
		if (sub && sub.href == 'http://www.reddit.com/r/mylittlepony/') {
			// Hiding the big ugly NSFW stamp.
			post.querySelector(".nsfw-stamp").style.display = 'none';
			
			// Changing the thumbnail
			var thumb = post.querySelector('.thumbnail');
			thumb.style.backgroundImage    = "url(http://thumbs.reddit.com/t5_2s8bl_35.png)";
			thumb.style.backgroundPosition = "0 0";
		}
	});
}

// Never ending reddit support... should probably check if it's actually RES or some other event.
document.addEventListener('DOMNodeInserted', function (event) {
	var node = event.target;
	if (node.nodeType == Node.ELEMENT_NODE) {
		myLittleSpoilers(node);
	}
})

myLittleSpoilers(document);
