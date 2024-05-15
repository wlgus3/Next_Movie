"use client";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "../../../../../node_modules/next/navigation";
import { getMovieDetail, getDetailMovie, getCredits } from "@/api/index";
import Image from "next/image";
import styles from "./movieDetail.module.scss";
import RatingCircle from "./RatingCircle";
import CastSwiper from "./CastSwiper";
import { ConnectionClosedEvent } from "mongodb";
export default function MovieDetail() {
  const params = useParams();
  const movieId = params.id;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["movieDetail", movieId],
    queryFn: () => getDetailMovie(movieId),
    enabled: !!movieId, // movieId가 있을 때만 쿼리를 실행합니다.
  });

  if (isLoading) return <div>Loading...</div>; // 데이터 로딩 중 UI
  if (isError) return <div>Error loading movie details.</div>; // 오류 발생 시 UI
  if (!data) return <div>No movie data found.</div>; // 데이터가 없을 경우 UI

  const headerStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500${data.poster_path})`,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    opacity: 0.4,
    zIndex: -1,
  };

  return (
    <div>
      <div className={styles.header_wrapper}>
        {/* 배경용 div 추가 */}
        <div style={headerStyle}></div>
        <div className={styles.poster_wrapper}>
          <Image alt="movie image" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} height={280} width={200} unoptimized={true} />
        </div>
        <div className={styles.header_details}>
          <h2 className="text-xl font-bold mb-2">{data.original_title}</h2>
          <div className="mb-1">
            {data.genres.map((el) => {
              return <span key={el.id}> {el.name} / </span>;
            })}
            <span>{data.release_date}</span>
          </div>
          <div className="font-bold">개요</div>
          <div>
            <span>{data.overview}</span>
          </div>
          <div className="my-1 flex">
            <span className="mr-1">회원 평점</span>
            <RatingCircle rating={data.vote_average} />
          </div>
        </div>
      </div>
      <div className={styles.content_wrapper}>
        <h3 className="text-lg font-bold">주요 출연진</h3>
        <CastSwiper />
      </div>
    </div>
  );
}
