export interface Game {
  id:string,
  background_image: string;
  background_image_additional: string;
  name: string;
  released: string;
  metacritic_url: string;
  website: string;
  description: string;
  metacritic: number;
  genres: Array<Genre>;
  parent_platforms: Array<ParentPlatform>;
  playtime: number;
  publishers: Array<Publisher>;
  rating: number;
  ratings: Array<Rating>;
  screenshots: Array<Screenshot>;
  trailers: Array<Trailer>;
}

interface Genre {
  name: string;
}

interface ParentPlatform {
  platform: {
    name: string;
    slug:string
  };
}

interface Publisher {
  name: string;
}

interface Rating {
  id: number;
  count: number;
  title: string;
}

interface Screenshot {
  image: string;
}

interface Trailer {
  data: {
    max: string;
  };
}
