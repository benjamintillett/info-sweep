var GITHUB_TOKEN = "1860e17c99b5696fe8d9d39f63ddd180d44284ff"

function User(name) {
	this.name = name 
}

User.prototype.addGitHubUsername = function(username) {
	this.gitHubUsername = username;
	this.gitHubUrl = "https://api.github.com/users/" + username + "?access_token="+ GITHUB_TOKEN
	this.followers = this.getGitHubData().followers
}

// User.prototype.gitHubUrl = function(username,accessToken)

User.prototype.getGitHubData = function(url) {
	// return  $.get(url, function(user){
	return 1	
	// })
}
