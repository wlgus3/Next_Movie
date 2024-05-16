"use client"

import { Input } from "@chakra-ui/react";
import { useState } from "react";
import SearchFilter from "../_component/SearchFilter";
export default function MovieCommunity() {

  const [filterData, setFilterData]= useState({})
    return (
      <main className="flex p-4 w-dvw">
        <SearchFilter setFilterData={setFilterData} />
        <div>asdfasdf</div>
      </main>
    );
  }
  