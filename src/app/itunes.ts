export interface iTunes {
    resultCount: number;
    results?: (ResultsEntity)[] | null;
  }
  export interface ResultsEntity {
    wrapperType: string;
    kind?: string | null;
    artistId?: number | null;
    collectionId: number;
    trackId?: number | null;
    artistName: string;
    collectionName: string;
    trackName?: string | null;
    collectionCensoredName: string;
    trackCensoredName?: string | null;
    artistViewUrl?: string | null;
    collectionViewUrl: string;
    trackViewUrl?: string | null;
    previewUrl?: string | null;
    artworkUrl30?: string | null;
    artworkUrl60: string;
    artworkUrl100: string;
    collectionPrice: number;
    trackPrice?: number | null;
    releaseDate: string;
    collectionExplicitness: string;
    trackExplicitness?: string | null;
    discCount?: number | null;
    discNumber?: number | null;
    trackCount: number;
    trackNumber?: number | null;
    trackTimeMillis?: number | null;
    country: string;
    currency: string;
    primaryGenreName: string;
    isStreamable?: boolean | null;
    collectionArtistId?: number | null;
    collectionArtistName?: string | null;
    collectionArtistViewUrl?: string | null;
    trackRentalPrice?: number | null;
    collectionHdPrice?: number | null;
    trackHdPrice?: number | null;
    trackHdRentalPrice?: number | null;
    contentAdvisoryRating?: string | null;
    longDescription?: string | null;
    shortDescription?: string | null;
    hasITunesExtras?: boolean | null;
    copyright?: string | null;
    description?: string | null;
    feedUrl?: string | null;
    artworkUrl600?: string | null;
    genreIds?: (string)[] | null;
    genres?: (string)[] | null;
  }
  