describe('User', function() {
  
  beforeEach(function(){
    user = new User('Ben');
  });

  it('can have a name', function() {
    expect(user.name).toEqual('Ben');
    });

  it('can add a GitHubUsername', function(){
  	user.addGitHubUsername("Jrmcneil")
  	expect(user.gitHubUsername).toEqual("Jrmcneil") 
  });

  it('can add a GitHubUsername', function(){
    user.addGitHubUserToken(ENV["GITHUB_TOKEN"])
    expect(user.gitHubUserToken).toEqual("1860e17c99b5696fe8d9d39f63ddd180d44284ff") 
  });

  // it('has the correct URL', function(){
  //   user.addGitHubUsername("Jrmcneil")
  //   user.a
  // })

  // it('can show its GitHub followers', function() {
  //   user.addGitHubUsername("Jrmcneil")
  //   expect(user.gitHubFollowers).not.toBe(undefined)
  // });

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
