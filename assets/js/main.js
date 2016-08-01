$(document).ready(function(){
	var urlJSON = "http://localhost/made-by-girls/assets/js/girls.json"
	var loadError = function(){
		console.log(arguments)
	};
	var loadSuccess = function(girl){
		var html = [];
		$.each(girl, function(index, girl){
			html.push("<div class='box'>");
			html.push("<h3>"+girl.nomeLoja+"</h3>");
			html.push("<div class='email'>"+girl.email+"</div>");
			html.push("<div class='ctto'>"+girl.ctto+"</div>");
			html.push("<div class='url'>"+girl.url+"</div>");
			html.push("</div>");
			$('.itens').empty().append($(html.join("")));
		});
	};
	 var getGirls = function(){
	 	$.ajax({
	 		url: urlJSON,
	 		dataType: "json",
	 		error: loadError,
	 		success: loadSuccess
	 	})
	};
	 getGirls();
	 var init = function(){}

});
