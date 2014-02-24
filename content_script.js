var book_name = $("div.type02_p002 h1");
if( book_name.length <= 0 ){
	chrome.runtime.sendMessage({type:"books-article-information", error:"找不到書名."});
}else{
	var msg = {
		type: "books-article-information",
		name : book_name.first().text(),
		prize : $("strong.price01 b").text(),
		author : $("div.type02_p003 ul li a").first().text(), 
		url: document.URL
	}	
	chrome.runtime.sendMessage(msg);
}

var be_url = "http://askus.github.io/yomusu/data/readmoo.com.sample1.json";
var data = {"url": document.URL };


$.getJSON( be_url,data ).done(function(msgs ){
		var text = '<div class="e-book">'; 
		for( var i =0; i < msgs.data.length ; i++  ){
			var data = msgs.data[i]; 
			text += '<p><a href="'+data.link+'">' + data.source + ":"+ data.prize+ '元</a></p>';
		}
		text += '</div>';
		$("div.transport_info").append( text );
	}).fail(function(jqXHR, textStatus) {
			console.log( textStatus);
	});
