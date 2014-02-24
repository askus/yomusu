var book_name = $("div.type02_p002 h1");
if( book_name.length <= 0 ){
	chrome.runtime.sendMessage({type:"books-article-information", error:"找不到書名."});
}else{
	var msg = {
		type: "books-article-information",
		name : book_name.first.text(),
		prize : $("strong.price01 b").text(),
		author : $("div.type02_p003 ul li a").first.text(), 
		url: document.URL
	}	
	chrome.runtime.sendMessage(msg);
}

$.getJSON()
