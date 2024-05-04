import MovieList from "./_component/MovieList";
export default function Home() {
  return (
    <main className="flex-column min-h-screen p-7 w-dvw">
      <div className="text-lg font-bold pb-2">What's Popular</div>
      <MovieList/>
    </main>
  );
}
