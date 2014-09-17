$(document).ready(function(){
	$('.userInput').on('submit', function(e){
		e.preventDefault();
		user = new User;
		user.addGitHubUsername($('#username').val(),function(user){
			console.log(user.showFollowers()) 
			var template = $('#userSection').html();
			$('#sampleArea').append(Mustache.render(template,user));
		});
			
		
		
		
	})
});




// var person = { followers: user.followers,
// 				login: user.gitHubUsername.toString(),
// 				repos: user.repos,
// 				avatar: user.avatar};
