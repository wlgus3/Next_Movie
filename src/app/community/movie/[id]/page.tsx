import { getMovieDetail, getDetailMovie } from "@/api/index";
import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import MovieDetail from "../_component/MovieDetail";

export default async function page({ params: { id: movieId } }: { params: { id: number } }) {
  const queryClient = new QueryClient();

  //아래의 의미 : 이 key를 갖고있을때 이 Fn을 실행해라
  await queryClient.prefetchQuery({ querKey: ["movieDetail", +movieId], qeuryFn: movieId ? () => getDetailMovie(+movieId) : undefined });
  const dehydratedState = dehydrate(queryClient);

  queryClient.getQueryData(["movieDetail"]);
  return (
    <main className="flex min-h-screen p-7">
      <HydrationBoundary state={dehydratedState}>
        <div className="flex-column">
          <div className="text-lg font-bold pb-2">MovieDetail</div>
          <MovieDetail />
        </div>
      </HydrationBoundary>
    </main>
  );
}
