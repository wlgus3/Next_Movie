'use client'

import { Input, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Flex } from "@chakra-ui/react";
import DatePicker from "react-datepicker";

export default function SearchFilter(setFilterData) {
  return (
    <div className="flex-column p-3 w-1/4">
      <div className="text-lg p-3 ">키워드</div>
      <Input placeholder="Basic usage"></Input>
      <div className="text-lg p-3 ">상영시간</div>
      <RangeSlider aria-label={["min", "max"]} defaultValue={[0, 100]}>
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
      <div className="text-lg p-3 ">개봉일자</div>
        <span>from</span>
        <DatePicker />
        <span>to</span>
        <DatePicker />
    </div>
  );
}
  