class Library {
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }

  addPlaylist(playlist){
    if (playlist instanceof Playlist) {
      this.playlists.push(playlist)
    }
  }
}

class Playlist {
  constructor(playlistName) {
    this.playlistName = playlistName;
    this.tracks = [];
  }

  addTrack(track) {
    if(track instanceof Track) {
      this.tracks.push(track)
    }
  }

  overallRating() {
    let totalRatings = 0;
    this.tracks.forEach(function(track) {
      totalRatings += track.rating;
    });
    return totalRatings/this.tracks.length;
  }
  
  totalDuration() {
    let totalSec = 0;
    this.tracks.forEach(function(track) {
      totalSec += track.duration;
    });
    return totalSec;
  }
}

class Track {
  constructor(title, rating, duration) {
    this.title = title;
    this.rating = rating;
    this.duration = duration;
  }
}

const myLibrary = new Library("Latin Music", "Cathleen");
const myPlaylist = new Playlist("Español, hombre")
myLibrary.addPlaylist(myPlaylist);
const track1 = new Track("Vaina Loca", 5, 256);
const track2 = new Track("Confía", 4, 234);
myPlaylist.addTrack(track1);
myPlaylist.addTrack(track2);
console.log(myPlaylist.overallRating());
console.log(myPlaylist.totalDuration());


