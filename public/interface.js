$(document).ready(function(){
	$('.userInput').on('submit', function(e){
		e.preventDefault();
		user = new User;
		
		user.addGitHubUsername($('#username').val());
			// var template = $('#userSection').html();
			// $('#sampleArea').append(Mustache.render(template,user))
			// console.log(user)
		});
});




// var person = { followers: user.followers,
// 				login: user.gitHubUsername.toString(),
// 				repos: user.repos,
// 				avatar: user.avatar};
