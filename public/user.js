var GITHUB_TOKEN = "1860e17c99b5696fe8d9d39f63ddd180d44284ff"

var userHash = {}

function User(name) {
	this.name = name;
}

User.prototype.addGitHubUsername = function(username) {
	this.gitHubUsername = username;
	this.gitHubUrl 	= "https://api.github.com/users/" + username + "?access_token="+ GITHUB_TOKEN;
	return this.getGitHubData(this)
};

// User.prototype.gitHubUrl = function(username,accessToken)

User.prototype.getGitHubData = function(callback) {
	$.get(this.gitHubUrl, function(user){
		 callback.followers(user.followers);
		 callback.repos(user.public_repos); 
		 callback.avatar(user.avatar_url);
		 var template = $('#userSection').html();
		$('#sampleArea').append(Mustache.render(template,user));
	}).fail(function(){
         alert('Could not find this user.');
    }).always(function() {
         $('#username').val('');
    })
    return userHash
}
User.prototype.followers = function(followers) {
	this.followers = followers;
	userHash['followers'] = followers
}
User.prototype.repos = function(repos) {
	this.repos = repos;
	userHash['repos'] = repos
}
User.prototype.avatar = function(avatar) {
	this.avatar = avatar;
	userHash['avatar'] = avatar
}

User.prototype.login = function(login) {
	this.login = login;
	userHash['login'] = login
}
