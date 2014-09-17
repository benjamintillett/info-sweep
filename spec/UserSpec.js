var USER_DATA_DOUBLE = { 
      "login": "Jrmcneil",
      "followers": 21,
      "avatar_url": "https://avatars.githubusercontent.com/u/8350153?v=2",
      "public_repos": 17
};

describe('User', function() {
  
  beforeEach(function(){
    user = new User('Ben');
    // var fakeUser;
    // fakeUser = {
    //   getGitHubData: function() {
    //     return USER_DATA_DOUBLE;
    //   }
    // }  

    spyOn(user, "getGitHubData").and.returnValue(USER_DATA_DOUBLE)
  });


  it('can have a name', function() {
    expect(user.name).toEqual('Ben');
    });

  it('can add a GitHubUsername', function(){
  	user.addGitHubUsername("Jrmcneil")
  	expect(user.gitHubUsername).toEqual("Jrmcneil") 
  });
  it('has a the correct url', function(){
    user.addGitHubUsername("Jrmcneil")
    expect(user.gitHubUrl).toEqual("https://api.github.com/users/Jrmcneil?access_token=1860e17c99b5696fe8d9d39f63ddd180d44284ff") 
  });

  it("assign has a JSON_DATA_OBJECT",function() {
    expect(user.getGitHubData()).toEqual(USER_DATA_DOUBLE)
  });

  it("assigns the followers when username is added",function(){
    user.addGitHubUsername("Jrmcneil")
    expect(user.followers).toEqual(21)
  });

  it("assigns the reposirories when username is added",function(){
    user.addGitHubUsername("Jrmcneil")
    expect(user.repos).toEqual(17)
  });

  it('assigns the avatar when the username is added', function(){
    user.addGitHubUsername("Jrmcneil")
    expect(user.avatar).toEqual("https://avatars.githubusercontent.com/u/8350153?v=2")
  })

});














// describe("Player", function() {
//   var player;
//   var song;

//   beforeEach(function() {
//     player = new Player();
//     song = new Song();

//   });

//   it("should be able to play a Song", function() {
//     player.play(song);
//     expect(player.currentlyPlayingSong).toEqual(song);

//     //demonstrates use of custom matcher
//     expect(player).toBePlaying(song);
//   });

//   describe("when song has been paused", function() {
//     beforeEach(function() {
//       player.play(song);
//       player.pause();
//     });

//     it("should indicate that the song is currently paused", function() {
//       expect(player.isPlaying).toBeFalsy();

//       // demonstrates use of 'not' with a custom matcher
//       expect(player).not.toBePlaying(song);
//     });

//     it("should be possible to resume", function() {
//       player.resume();
//       expect(player.isPlaying).toBeTruthy();
//       expect(player.currentlyPlayingSong).toEqual(song);
//     });
//   });

//   // demonstrates use of spies to intercept and test method calls
//   it("tells the current song if the user has made it a favorite", function() {
//     spyOn(song, 'persistFavoriteStatus');

//     player.play(song);
//     player.makeFavorite();

//     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//   });

//   //demonstrates use of expected exceptions
//   describe("#resume", function() {
//     it("should throw an exception if song is already playing", function() {
//       player.play(song);

//       expect(function() {
//         player.resume();
//       }).toThrowError("song is already playing");
//     });
//   });
// });
