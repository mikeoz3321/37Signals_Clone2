$(document).ready(function(){
	

	$('#Basecamp').mouseenter(function(){
		$('#Header_1').replaceWith("<div id='Basecamp_H1'>\
			<h1>Basecamp is the project management tool you wish you had on your last project</h1>\
		</div>");
		
		$('#Header_2').replaceWith("<div id='Basecamp_H2'>\
			<h2>Are you still managing projects with email? Are you still using Excel for your to-do lists? Its time to upgrade to Basecamp. Manage projects and collaborate with your team and clients the modern way. </h2>\
		</div>");
		
		$('#Basecamp').append("<div id='arrow_base'>\
			<img src='arrow-left.png'/>\
		</div>");
		
		
		})

	$('#Basecamp').mouseleave(function(){
		$('#Basecamp_H1').replaceWith("<div id='Header_1'>\
			<h1>Making collaboration productive and enjoyable for people every day.</h1>\
		</div>");

		$('#Basecamp_H2').replaceWith("<div id='Header_2'>\
			<h2>Frustration-free web-apps for collaboration, sharing information, and making decisions.</h2>\
		</div>");

		$('#arrow_base').remove();
		
		})


	$('#Highrise').mouseenter(function(){
		$('#Header_1').replaceWith("<div id='Highrise_H1'>\
			<h1>Highrise remembers the important things about people you normally forget.</h1>\
		</div>");
		
		$('#Header_2').replaceWith("<div id='Highrise_H2'>\
			<h2>Keep a permanent record of people you do business with. Know who you talked to, when you talked to them, what was said and when to follow up next. Over 20,000,000 contacts are tracked using Highrise. </h2>\
		</div>");
		
		$('#Highrise').append("<div id='arrow_high'>\
			<img src='arrow-left.png'/>\
		</div>");
		
		
		})

	$('#Highrise').mouseleave(function(){
		$('#Highrise_H1').replaceWith("<div id='Header_1'>\
			<h1>Making collaboration productive and enjoyable for people every day.</h1>\
		</div>");

		$('#Highrise_H2').replaceWith("<div id='Header_2'>\
			<h2>Frustration-free web-apps for collaboration, sharing information, and making decisions.</h2>\
		</div>");

		$('#arrow_high').remove();
		
		})

	$('#Campfire').mouseenter(function(){
		$('#Header_1').replaceWith("<div id='Campfire_H1'>\
			<h1>From near or far, Campfire helps teams work together over the web in real-time.</h1>\
		</div>");
		
		$('#Header_2').replaceWith("<div id='Campfire_H2'>\
			<h2>Share ideas, discussions, concepts, images, code samples, videos, mockups, and documents in a real-time private chat room. It's game changing. We couldn't run our own business without Campfire. </h2>\
		</div>");
		
		$('#Campfire').append("<div id='arrow_camp'>\
			<img src='arrow-right.png'/>\
		</div>");
		
		
		})

	$('#Campfire').mouseleave(function(){
		$('#Campfire_H1').replaceWith("<div id='Header_1'>\
			<h1>Making collaboration productive and enjoyable for people every day.</h1>\
		</div>");

		$('#Campfire_H2').replaceWith("<div id='Header_2'>\
			<h2>Frustration-free web-apps for collaboration, sharing information, and making decisions.</h2>\
		</div>");

		$('#arrow_camp').remove();
		
		})

	



})