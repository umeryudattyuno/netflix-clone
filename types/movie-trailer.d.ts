// types/movie-trailer.d.ts
declare module 'movie-trailer' {
  export default function movieTrailer(
    movieName: string,
    options?: { [key: string]: any },
    callback?: (error: Error | null, url: string | null) => void
  ): Promise<string>;
}
