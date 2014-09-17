function User(name) {
	this.name = name 
}

User.prototype.addGitHubUsername = function(username) {
	this.gitHubUsername = username;
}

// User.prototype.gitHubUrl = function(username,accessToken)

// User.prototype.gitHubFollowers = function(url) {
// 	$.get(url, function(user){
// 		user.followers;
// 	})
// }