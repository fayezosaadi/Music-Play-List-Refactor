
  var library = {
    tracks: {
      t01: {
        id: "t01",
        name: "Code Monkey",
        artist: "Jonathan Coulton",
        album: "Thing a Week Three" },
      t02: { id: "t02",
        name: "Model View Controller",
        artist: "James Dempsey",
        album: "WWDC 2003"},
      t03: { id: "t03",
       name: "Four Thirty-Three",
       artist: "John Cage",
       album: "Woodstock 1952"}
     },
     playlists: {
      p01: {
        id: "p01",
        name: "Coding Music",
        tracks: ["t01", "t02"]
      },
      p02: { id: "p02",
        name: "Other Playlist",
        tracks: ["t03"]}
      },
      printPlaylists: function () {
        var list = this.playlists;
        var result = Object.keys(list).forEach(function(e){
          var str = e + ': ' + list[e].name + " - " + list[e].tracks.length + ' tracks';
          console.log(str);
        });
      },
      printTracks: function () {
        var list = this.tracks;
        var result = Object.keys(list).forEach(function(e){
          var str = e + ': ' + list[e].name + ' (' + list[e].album + ')';
          console.log(str);
        });
      },
      printPlaylist: function (playlistId) {
        var list = this.playlists[playlistId];
          var str = list.id + ': ' + list.name + " - " + list.tracks.length + " tracks";
          console.log(str);
      },
      addTrackToPlaylist: function (trackId, playlistId) {
        var oldPlaylist = this.playlists[playlistId];
        oldPlaylist.tracks.push(trackId);
      },
      uid: function() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        },
      addTrack: function (name, artist, album) {
        var uId = uid();
        var tracks = this.tracks;
        return tracks[uId] = {"id":uId, "name":name, "artist": artist, "album": album};
      },
      addPlaylist: function (name) {
        var uId = uid();
        var playlist = this.playlists;
        return playlist[uId] = {"id":uId, "name":name};
      },
      printSearchResults:function(query) {
        var list = this.tracks;
        if ( query.search(this) == -1 ){
          console.log("Pleas write a valid name, artist or album")
        }
        else{
        console.log(query + " list of tracks ");
        console.log(list);
        }
      }
  }

  library.printTracks();


