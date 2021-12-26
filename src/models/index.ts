
export interface Movie {
    adult: boolean,
    backdrop_path: string,
    genre_ids: [number],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: false,
    vote_average: number,
    vote_count: number,
    status: string,
    revenue: number,
    production_countries: [productionCountries]
}


interface productionCountries {
    iso_3166_1: string,
    name: string
}


