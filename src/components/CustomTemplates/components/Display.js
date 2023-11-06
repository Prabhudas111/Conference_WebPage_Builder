import React from "react";

const Display = ({days,hours,minutes,seconds}) => {
  return (
    <div>
      <div class="uppercase block box-border" data-date="2024-12-30">
        <div class="inline-block m-0 mx-1 bg-choice-red border border-red-500 p-15 p-3 pt-12 min-w-[110px] rounded-2xl">
          <span class="block text-center text-base text-white">Days</span>
          <span class="block text-center text-4xl bg-red-500 p-15  text-white m-0 mx-2 rounded-2xl bg-transparent mt-2">
            {days}
          </span>
        </div>
        <div class="inline-block m-0 mx-1 bg-choice-red border border-red-500 p-15 p-3 pt-12 min-w-[110px] rounded-2xl">
          <span class="block text-center text-base text-white">Hours</span>
          <span class="block text-center text-4xl bg-red-500 p-15 text-white m-0 mx-2  rounded-2xl bg-transparent mt-2">
            {hours}
          </span>
        </div>
        <div class="inline-block m-0 mx-1 bg-choice-red border border-red-500 p-15 p-3 pt-12 min-w-[110px] rounded-2xl">
          <span class="block text-center text-base text-white">Minutes</span>
          <span class="block text-center text-4xl bg-red-500 p-15  text-white m-0 mx-2  rounded-2xl bg-transparent mt-2">
            {minutes}
          </span>
        </div>
        <div class="inline-block m-0 mx-1 bg-choice-red border border-red-500 p-15 p-3 pt-12 min-w-[110px] rounded-2xl">
          <span class="block text-center text-base text-white">seconds</span>
          <span class="block text-center text-4xl bg-red-500 p-15  text-white m-0 mx-2  rounded-2xl bg-transparent mt-2">
            {seconds}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Display;
