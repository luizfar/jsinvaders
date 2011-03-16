beforeEach(function() {
  this.addMatchers({
    toBeEqual: function(expectedObject) {
      var object = this.actual;
      return object.equals(expectedObject);
    },
    toBePlaying: function(expectedSong) {
      var player = this.actual;
      return player.currentlyPlayingSong === expectedSong
          && player.isPlaying;
    }
  })
});