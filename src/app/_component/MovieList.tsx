
"use client";
import { useInfiniteQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { getMovieList } from "@/api/index";
import Image from "next/image"; 
import Link from "next/link";
import styles from "./movieList.module.scss";

export default function MovieList() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({  //argument 타입을 객체형으로만 작성가능 https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object
    queryKey: ['movieList'],
    queryFn: async ({ pageParam = 1 }) => {
      const res = await getMovieList(pageParam);
      return { results: res.results, nextPage: pageParam + 1, totalPages: res.total_pages };
    },
    getNextPageParam: (lastPage) => {
      return lastPage.nextPage <= lastPage.totalPages ? lastPage.nextPage : undefined;
    },
  });
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 500) {
        if (hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasNextPage, fetchNextPage, isFetchingNextPage]);

  return (
    <div className={styles.movie_list_container}>
      <div className={styles.itemWrap}>
        {data?.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.results.map((movie) => (
              <div className={styles.poster} key={movie.id}>
                <Link href={`/community/movie/${movie.id}`}>
                  <Image
                    alt="movie image"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    height={700}
                    width={500}
                    unoptimized={true}
                  />
                </Link>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
