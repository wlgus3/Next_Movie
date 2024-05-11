"use client";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "../../../../../node_modules/next/navigation";
import { getMovieDetail, getDetailMovie } from "@/api/index";
import Image from "next/image";

export default function MovieDetail() {
  const params = useParams();

  const movieId = params.id;
  const response = useQuery({ querKey: ["movieDetail", +movieId], queryFn: movieId ? () => getDetailMovie(+movieId) : undefined });
  const data = response.data;
  console.log(response.data);
  return (
    <div>
      <div className="detail-brief">
        <div className="text-lg font-bold">{data.title}</div>
        <div>
          {data.genres.map((el) => {
            return <span> {el.name} /</span>;
          })}
          <span>{data.release_date}</span>
        </div>
        <Image alt="movie image" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} height={280} width={200} unoptimized={true} />

      </div>
      <div className="detail_description">
        <div>
          <span>개요</span><span>{data.overview}</span>
        </div>
      </div>
    </div>
  );
}
