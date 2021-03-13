export class Album {

    artist: string;
    coverImg: string;
    title: string;

    constructor(albumArtist: string, albumCover: string, albumTitle: string) { 
        this.artist = albumArtist;
        this.coverImg = albumCover;
        this.title = albumTitle;
    }
}