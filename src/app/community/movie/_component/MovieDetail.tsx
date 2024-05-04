"use client";
import { useQuery} from "@tanstack/react-query";
import { useParams } from "../../../../../node_modules/next/navigation";
import { getMovieDetail, getDetailMovie } from "@/api/index";
import Image from "next/image";

export default function MovieDetail() {
  const params = useParams();

  const movieId = params.id;
  const data = useQuery({ querKey: ["movieDetail", +movieId], queryFn: movieId ? () => getDetailMovie(+movieId) : undefined });
  const detailData=data.data
  console.log(data.data);
  return (
    <div>
      <Image alt="movie image" src={`https://image.tmdb.org/t/p/w500${detailData.poster_path}`} height={700} width={500} unoptimized={true} />
    </div>
  );
}
