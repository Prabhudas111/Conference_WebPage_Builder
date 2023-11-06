import React from "react";
// import { Typography, Card } from "@material-tailwind/react";

const TABLE_HEAD = ["#", "Session", "Speakers", "Time"];
 
const TABLE_ROWS = [
  {
    sno: "01",
    session:	"Breakfast And Opening Ceremony",
    speakers: "No",
    date:	"9:00 AM - 10:00 AM",
  },
  {
    sno: "02",
    session:	"Breakfast And Opening Ceremony",
    speakers: "No",
    date:	"9:00 AM - 10:00 AM",
  },
  {
    sno: "01",
    session:	"Breakfast And Opening Ceremony",
    speakers: "No",
    date:	"9:00 AM - 10:00 AM",
  },
  {
    sno: "02",
    session:	"Breakfast And Opening Ceremony",
    speakers: "No",
    date:	"9:00 AM - 10:00 AM",
  },
];


const EventDetails = () => {
  return (
    <div
      class="custom-padding relative box-border flex justify-center w-screen"
    >
      <img
        class="absolute left-0 top-0 z-0 custom-width h-auto align-middle box-border overflow-visible max-w-full "
        src="https://bdcoder.com/html/ict/images/left-img.png"
        alt=""
      ></img>
      <img
        class="absolute right-0 bottom-0 z-0 custom-width h-auto max-w-full align-middle overflow-clip-margin-content box-border overflow-clip"
        src="https://bdcoder.com/html/ict/images/right-img.png"
        alt=""
      ></img>

      <div className="content flex flex-col justify-center">
        <h3 class="bg-opacity-70 text-black text-3xl text-center font-medium mt-0 mb-3">
          EVENT <span className="text-red-500">SCHEDULES</span>
        </h3>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-black ">
            <thead class="text-xs text-gray-700 uppercase ">
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} scope="col" className="px-6 py-3 bg-red-600 text-white ">
                  {head}
                </th>
                ))}
                </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ sno, session, speakers, date}) => (
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <td
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                >
                  {sno}
                </td>
                <td class="px-6 py-4">{session}</td>
                <td class="px-6 py-4 bg-gray-50">{speakers}</td>
                <td class="px-6 py-4">{date}</td>
                </tr>
                
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
