// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation, Scrollbar, Pagination } from "swiper/modules";
// import { useParams } from "../../../../../node_modules/next/navigation";
// import Image from "next/image";
// import styles from "./castSwiper.module.scss";
// import { useQuery } from "@tanstack/react-query";
// import { getCredits } from "@/api/index";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// export default function CastSwiper() {
//   const params = useParams();

//   const movieId = params.id;

//   const {
//     data: credits,
//     isLoading,
//     isError,
//   } = useQuery({
//     queryKey: ["credits", +movieId],
//     queryFn: () => getCredits(+movieId),
//     enabled: !!movieId,
//   });
//   if (isLoading) return <div>Loading...</div>; // 데이터 로딩 중 UI
//   if (isError) return <div>Error loading movie details.</div>; // 오류 발생 시 UI
//   if (!credits) return <div>No movie data found.</div>; // 데이터가 없을 경우 UI

//   return (
//     <Swiper
//       slidesPerView={3}
//       spaceBetween={30}
//       pagination={{
//         clickable: true,
//       }}
//       modules={[Pagination]}
//     >
//       {credits?.cast.map(
//         (credit) =>
//           credit?.profile_path && (
//             <SwiperSlide key={credit?.id}>
//               <div className={styles.poster_container}>
//                 <Image src={`https://image.tmdb.org/t/p/w500${credit.profile_path}`} alt="cast" height={280} width={200} unoptimized={true} />
//               </div>
//               <div className="font-bold">{credit.name}</div>
//               <div>{credit.character}</div>
//             </SwiperSlide>
//           )
//       )}
//     </Swiper>
//   );
// }

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Pagination } from "swiper/modules";
import { useParams } from "../../../../../node_modules/next/navigation";
import Image from "next/image";
import styles from "./castSwiper.module.scss";
import { useQuery } from "@tanstack/react-query";
import { getCredits } from "@/api/index";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default function CastSwiper() {
  const params = useParams();

  const movieId = params.id;

  const {
    data: credits,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["credits", +movieId],
    queryFn: () => getCredits(+movieId),
    enabled: !!movieId,
  });
  if (isLoading) return <div>Loading...</div>; // 데이터 로딩 중 UI
  if (isError) return <div>Error loading movie details.</div>; // 오류 발생 시 UI
  if (!credits) return <div>No movie data found.</div>; // 데이터가 없을 경우 UI

  return (
    <Swiper modules={[Navigation]} slidesPerView={10} spaceBetween={10} navigation>
      {credits?.cast.map((credit) => (
        <SwiperSlide key={credit?.id} style={{ width: "10%" }}>
          <div>
            <div className={styles.poster_container}>
              <Image src={`https://image.tmdb.org/t/p/w500${credit.profile_path}`} alt="cast" height={280} width={200} unoptimized={true} />
            </div>
            <div className="font-bold">{credit.name}</div>
            <div>{credit.character}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
