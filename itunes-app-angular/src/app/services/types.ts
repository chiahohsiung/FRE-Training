export class Result {
  public like: boolean = false;
  // likeVal: string = this.like ? 'Favorite' : 'FavoriteBorder';
  constructor(
    public likeVal = 'FavoriteBorder',
    public genre: string,
    public artistId: number,
    public artistName: string,
    public artistViewUrl: string,
    public artworkUrl60: string,
    public artworkUrl100: string,
    public artwork: string,
    public collectionCensoredName: string,
    public collectionExplicitness: string,
    public collectionId: number,
    public collectionName: string,
    public collectionPrice: number,
    public collectionViewUrl: string,
    public contentAdvisoryRating: string,
    public copyright: string,
    public country: string,
    public currency: string,
    public primaryGenreName: string,
    public releaseDate: string,
    public trackCount: number,
    public wrapperType: string
  ) {}
}
