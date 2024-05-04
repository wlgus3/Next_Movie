"use client";

import React, {useState} from "react";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

type Props = {
  children: React.ReactNode;
};

function ReactQueryProvider({children}: Props) {
  const [client] = useState(
    new QueryClient({   //클라이언트 먼저 만들기 
      defaultOptions: {  // react-query 전역 설정
        queries: {
          refetchOnWindowFocus: false,
          retryOnMount: true,
          refetchOnReconnect: false,
          retry: false,
        },
      },
    })
  );
    //children 안에서는 전부 react-query 데이터 공유 가능
  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={process.env.NEXT_PUBLIC_MODE === 'local' }/>
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;