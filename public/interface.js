$(document).ready(function(){
	$('.userInput').on('submit', function(e){
		e.preventDefault();
		user = new User;
		user.addGitHubUsername($('#username').val());
	})
})
