var GITHUB_TOKEN = "1860e17c99b5696fe8d9d39f63ddd180d44284ff"

function User(name) {
	this.name = name 
}

User.prototype.addGitHubUsername = function(username) {
	this.gitHubUsername = username;
	this.gitHubUrl 	= "https://api.github.com/users/" + username + "?access_token="+ GITHUB_TOKEN;
	this.getGitHubData(this);
	// this.repos = this.gitHubData.responseJSON.public_;
	// this.avatar	
}

// User.prototype.gitHubUrl = function(username,accessToken)

User.prototype.getGitHubData = function(callback) {
	$.get(this.gitHubUrl, function(user){
		 callback.followers(user.followers);
		 callback.login(user.login);
		 callback.repos(user.public_repos)
		 callback.avatar(user.avatar_url)	
	}).fail(function(){
            alert('Could not find this user.');
          }).always(function() {
            $('#username').val('');
          })
}
User.prototype.followers = function(followers) {
	this.followers = followers;
}
User.prototype.repos = function(repos) {
	this.repos = repos;
}
User.prototype.avatar = function(avatar) {
	this.avatar = avatar;
}

User.prototype.login = function(login) {
	this.login = login;
}