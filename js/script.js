//carissa's lucy set
//http://api.flickr.com/services/feeds/photoset.gne?set=72157628702575473&nsid=27134490@N00&lang=en-us
//my instagram set
//http://api.flickr.com/services/feeds/photoset.gne?set=72157629163178947&nsid=55728664@N00&lang=en-us
$(function() {
	$.getJSON("http://api.flickr.com/services/feeds/photoset.gne?set=72157629163178947&nsid=55728664@N00&lang=en-us&format=json&jsoncallback=?", function(data){
		var items = data.items;
		var i = 1;
		$.each(items, function(i,item) {
			if (i < 4) {
				$('<img style="height: 240px; width: 240px;">').attr("src", item.media.m).prependTo("#pictures0"); //.replace(/_m.(\w{3})/, ".$1")
			} else {
				$('<img style="height: 240px; width: 240px;">').attr("src", item.media.m).prependTo("#pictures1"); //.replace(/_m.(\w{3})/, ".$1")
			}
			i++;
		});
	});
});