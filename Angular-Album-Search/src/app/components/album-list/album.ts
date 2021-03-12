export class Album {
  public collectionName:string;
  public artistName:string;
  public artworkUrl100:string;
  
  constructor (collectionName:string, artistName:string, artworkUrl100:string){
    this.collectionName = collectionName,
    this.artistName = artistName,
    this.artworkUrl100 = artworkUrl100
  }
}