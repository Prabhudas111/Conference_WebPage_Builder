import "./Homepage.css";
import CountdownTimer from "./components/Countdown";
import EventDetails from "./components/EventDetails";
import NavbarSection from "./components/NavbarSection";
import React, { useState, useContext, useEffect } from "react";
import formContext from "../../context/forms/formContext";
import AddQuery from "../QueryDetails/AddQuery";
import ShowQuery from "../QueryDetails/ShowQuery";
import showAlert from "../Alert";

const Template = () => {
  const [id, setId] = useState("");
  useEffect(() => {
    const currentUrl = window.location.href;
    const urlParts = currentUrl.split("/");
    const newId = urlParts[urlParts.length - 1];
    setId(newId);
    // console.log(id);
  }, []);

  const context = useContext(formContext);
  const { forms, getFormsall } = context;

  useEffect(() => {
    getFormsall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredForm = forms.find((form) => form._id === id);

  if (!filteredForm || !filteredForm.speakers) {
    return <h1 className="text-red-600">Loading...</h1>;
  }

  const speakers = filteredForm.speakers.split(",").map((item) => {
    const [name, designation, img] = item.split("#");
    return {
      name,
      img, // Replace with the actual image link
      designation,
    };
  });

  console.log(speakers);

  console.log(speakers);

  const str = filteredForm.dateTime;
  const [dateStr, timeStr] = str.split(":");
  const [day, month, year] = dateStr.split("-");
  const [hour, min] = timeStr.split("-");
  const targetDate = new Date(`${month}-${day}-${year} 00:00:00`);

  const [contact, mail] = filteredForm.contactInfo.split("#");

  return (
    <div className="overflow-hidden ">
      <NavbarSection />
      <section class="main-banner">
        <div class="max-w-full mx-auto px-10 box-border">
          <div class="mx-auto px-10 box-border flex flex-wrap">
            <div class="px-10 flex-shrink-0 w-full block">
              <div class="pt-64 pb-48 text-center  box-border block">
                <h1 class="bg-black bg-opacity-70 rounded-r-2xl border-b-2 border-red-600 inline-block mb-6 pr-10 ml-32 text-white text-6xl font-bold mt-0">
                  <span class="bg-red-700 custom-border-radius inline-block p-4 relative left-[-137px] border-b border-red-500 mr-[-102px] ">
                    01
                    <sup class="text-base align-top relative top-2 right-[-3px] line-height-[0]">
                      ST
                    </sup>
                  </span>
                  {filteredForm.title}
                </h1>
                <h3 class="text-5xl capitalize italic mb-3 text-red-500">
                  {targetDate.toLocaleString("default", { month: "long" })}{" "}
                  {targetDate.getDate()}
                  {", "} {targetDate.getFullYear()}
                </h3>

                <h4 class="mb-8 text-white text-base leading-6 font-medium mt-0 pb-0 uppercase tracking-wide">
                  {filteredForm.location}
                </h4>
                <div className="timer">
                  <CountdownTimer
                    year={year}
                    month={month}
                    day={day}
                    hour={hour}
                    min={min}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about */}

      <section class="custom-padding relative box-border" id="about">
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
        <div class="max-w-screen-lg mx-auto px-6 ">
          <div class="flex flex-wrap mt-[calc(-1 * var(--bs-gutter-y))] ml-[calc(-.625 * var(--bs-gutter-x))] mr-[calc(-.625 * var(--bs-gutter-x))] box-border">
            <div class="px-[calc(var(--bs-gutter-x) * .625)] flex-none w-full block max-w-full mt-[var(--bs-gutter-y)]">
              <div class="mb-30 text-center! block box-border">
                <h3 class="text-3xl mb-6  text-black leading-1.2 font-medium mt-0 p-0 uppercase tracking-normal block my-4 mx-0">
                  Few words about
                  <span class=" whitespace-pre text-red-500 box-border">
                    {" "}
                    NIT SILCHAR{" "}
                  </span>
                  conference website
                </h3>
                <p class="m-0 p-0 box-border block my-4 mx-0 font-sans font-normal text-base leading-6 text-gray-700">
                  {filteredForm.description}{" "}
                </p>
              </div>
              <div class="flex items-center justify-center mx-[-7.5px] pt-36 box-border">
                {/* bg-gray-100 */}
                <div class="bg-customcolour p-10 md:p-2 mx-1.5 my-0 md:my-7.5 relative rounded-md">
                  <span class="bg-red-600 rounded-full text-white text-center text-xl font-medium absolute top-[-85px] left-1/2 transform -translate-x-1/2 w-14 h-14 flex items-center justify-center">
                    1
                  </span>
                  <h4 class="leading-5 font-medium mt-0 text-red-600 text-sm relative mb-3 p-0 uppercase tracking-normal block space-y-6">
                    What is freelancing?
                  </h4>
                  <p class="text-xs">
                    Consectetur adipiscing elitost. praesent nisl lorem, id
                    pellen tesque at, vesti bulum ut arcu.
                  </p>
                  <div class="after absolute bg-red-500 w-30 h-2 left-1/2 transform -translate-x-1/2 bottom-[-15px]"></div>
                </div>

                <div class="bg-customcolour p-10 md:p-2 mx-1.5 my-0 md:my-7.5 relative rounded-md">
                  <span class="bg-red-600 rounded-full text-white text-center text-xl  font-medium absolute top-[-85px] left-1/2 transform -translate-x-1/2 w-14 h-14 flex items-center justify-center">
                    2
                  </span>
                  <h4 class="leading-5 font-medium mt-0 text-red-600 text-sm relative mb-3 p-0 uppercase tracking-normal block space-y-6">
                    WHAT IS WEB DESIGN ?
                  </h4>
                  <p class="text-xs">
                    Consectetur adipiscing elitost. praesent nisl lorem, id
                    pellen tesque at, vesti bulum ut arcu. Curabitur erat
                    libero.
                  </p>
                  <div class="before absolute border-t-2 border-dashed border-red-500 right-1/2 top-[-61px] w-full z-[-1]"></div>
                  <div class="after absolute bg-red-500 w-30 h-2 left-1/2 transform -translate-x-1/2 bottom-[-15px]"></div>
                </div>

                <div class="bg-customcolour p-10 md:p-2 mx-1.5 my-0 md:my-7.5 relative rounded-md">
                  <span class="bg-red-600 rounded-full text-white text-center text-xl  font-medium absolute top-[-85px] left-1/2 transform -translate-x-1/2 w-14 h-14 flex items-center justify-center">
                    3
                  </span>
                  <h4 class="leading-5 font-medium mt-0 text-red-600 text-sm relative mb-3 p-0 uppercase tracking-normal block space-y-6">
                    WHAT IS DEVELOPMENT?
                  </h4>
                  <p class="text-xs">
                    Consectetur adipiscing elitost. praesent nisl lorem, id
                    pellen tesque at, vesti bulum ut arcu. Curabitur erat
                    libero.
                  </p>
                  <div class="before absolute border-t-2 border-dashed border-red-500 right-1/2 top-[-61px] w-full z-[-1]"></div>
                  <div class="after absolute bg-red-500 w-30 h-2 left-1/2 transform -translate-x-1/2 bottom-[-15px]"></div>
                </div>

                <div class="bg-customcolour p-10 md:p-2 mx-1.5 my-0 md:my-7.5 relative rounded-md">
                  <span class="bg-red-600 rounded-full text-white text-center text-xl  font-medium absolute top-[-85px] left-1/2 transform -translate-x-1/2 w-14 h-14 flex items-center justify-center">
                    4
                  </span>
                  <h4 class="leading-5 font-medium mt-0 text-red-600 text-sm relative mb-3 p-0 uppercase tracking-normal block space-y-6">
                    WHAT IS HOSTING?
                  </h4>
                  <p class="text-xs">
                    Consectetur adipiscing elitost.praesent nisl lorem, id
                    pellen tesque at, vesti bulum ut arcu.Curabitur erat libero.
                  </p>
                  <div class="before absolute border-t-2 border-dashed border-red-500 right-1/2 top-[-61px] w-full z-[-1]"></div>
                  <div class="after absolute bg-red-500 w-30 h-2 left-1/2 transform -translate-x-1/2 bottom-[-15px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* speakers */}

      <section className="secondary-banner" id="speakers">
        <div class="max-w-1170 mx-auto px-10 box-border">
          <div class="mx-auto px-10 box-border flex flex-wrap">
            <div class="px-10 flex-shrink-0 w-full block">
              <div class="pt-5 text-center  box-border block">
                <h3 class="bg-opacity-70 text-grey-400 text-3xl font-bold mt-0 mb-3">
                  OUR HONORABLE <span className="text-red-500">SPEAKERS</span>
                </h3>
                <div className="speakers flex flex-row py-7 mb-5">
                  <div className="grid gap-5 lg:grid-cols-4">
                    {speakers.map((items, key) => (
                      <div
                        className="w-full rounded-lg shadow-md bg-white border border-gray-200"
                        key={key}
                      >
                        <img
                          className="rounded-full mr-6 pl-2 h-60 pt-2"
                          src={items.img}
                          alt="speaker"
                        />
                        <div className="p-4">
                          <button className="px-4 py-2 text-sm text-white bg-red-500 hover:bg-red-700 rounded">
                            <h4 className="text-xl font-semibold text-white pb-2">
                              {items.name}
                            </h4>
                            {items.designation}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <div className="events" id="schedules">
        <EventDetails />
      </div>
      {/* contact */}

      <section className="contact-section" id="contact">
        <div class="custom-padding relative box-border">
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

          <div class="max-w-screen-lg mx-auto px-6">
            <div class="flex flex-wrap mt-[calc(-1 * var(--bs-gutter-y))] ml-[calc(-.625 * var(--bs-gutter-x))] mr-[calc(-.625 * var(--bs-gutter-x))] box-border">
              <div class="pr-[calc(var(--bs-gutter-x) * .625)] pl-[calc(var(--bs-gutter-x) * .625)] flex-none w-1/2 max-w-full mt-[var(--bs-gutter-y)] box-border block">
                <div class="mb-20 text-left box-border block">
                  <h2 class="text-3xl mb-0 text-black leading-6 font-medium mt-0 p-0 uppercase tracking-normal block my-5 mx-0">
                    Contact
                    <span class="text-red-500 box-border"> us</span>
                  </h2>
                </div>
              </div>
              <div class="flex-none w-2/3 md:w-5/6 lg:w-2/3 xl:w-2/3 pr-10 pl-10 max-w-full block box-border mt-4">
                <div class="block box-border ">
                  <form
                    class="block mt-0 box-border text-left "
                    style={{ backgroundColor: "initial", padding: "initial" }}
                    id="ajax-contact"
                    method="post"
                    action="php/contact.php"
                  >
                    <div class="mx-[-0.625rem] flex flex-wrap mt-[-3rem] box-border ">
                      <div class="flex-none w-1/2 custom-pad max-w-full mt-[var(--bs-gutter-y)] block box-border">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          class="custom-div form-control"
                          placeholder="Your Name"
                          required=""
                          fdprocessedid="oabdr"
                        ></input>
                      </div>

                      <div class="flex-none w-1/2 custom-pad max-w-full mt-[var(--bs-gutter-y)] block box-border">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          class="custom-div form-control"
                          placeholder="Your Email"
                          required=""
                          fdprocessedid="abzjnh"
                        ></input>
                      </div>
                      <div class="custom-pad flex-none w-full max-w-full mt-[var(--bs-gutter-y)] block">
                        <input
                          type="text"
                          name="subject"
                          class="custom-div form-control"
                          placeholder="Subject"
                          id="subject"
                          required=""
                          fdprocessedid="mw5xxt"
                        ></input>
                      </div>
                      <div class="col-md-12">
                        <div class="contact-textarea">
                          <textarea
                            class="custom-div2 form-control"
                            rows="5"
                            placeholder="Write Message"
                            id="message"
                            name="message"
                            required=""
                          ></textarea>
                          {/* <button class=" custom-div3 " type="submit" value="Submit Form" fdprocessedid="g2zztd" >Send Message</button> */}
                          <button
                            class="border-none bg-red-600 uppercase rounded-full py-3 px-8 text-sm relative overflow-hidden transition duration-300 hover:scale-105 hover:shadow-lg btn primary hover:bg-gray-800 text-white"
                            type="submit"
                            value="Submit Form"
                          >
                            Send Message
                            <span class="absolute top-1/2 left-1/2 w-full h-full bg-transparent opacity-0 transform -translate-x-1/2 -translate-y-1/2 rotate-45 transition duration-300"></span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div id="form-messages"></div>
                  </form>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="row contact-cols-two mt-5 ">
                  <div class="col-md-6 col-lg-12">
                    <div class="flex mb-6  rounded-lg text-center">
                      <i
                        class="fa fa-envelope-o custom-mail hover:bg-red-600 hover:text-white "
                        aria-hidden="true"
                      ></i>
                      <div class="info-content">
                        <p class="mb-2 mt-0 ">{mail}</p>
                        <p class="mb-2 mt-0 ">{mail}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-12">
                    <div class="flex mb-6  rounded-lg text-center">
                      <i
                        class="fa fa-phone custom-mail hover:bg-red-600 hover:text-white "
                        aria-hidden="true"
                      ></i>
                      <div class="info-content">
                        <p class="mb-2 mt-0 ">+91-{contact}</p>
                        <p class="mb-2 mt-0 ">+91-{contact}</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6 col-lg-12">
                    <div class="flex mb-6  rounded-lg text-center">
                      <i
                        class="fa fa-map-marker custom-mail hover:bg-red-600 hover:text-white "
                        aria-hidden="true"
                      ></i>
                      <div class="info-content">
                        <p class="my-30 mt-0">
                          {filteredForm.location}
                          Australia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-gray-800" id="query">
        <div class="max-w-screen-xl px-4 py-12 mx-auto  overflow-hidden sm:px-6 lg:px-8">
          <AddQuery showAlert={showAlert} id={id} title={filteredForm.title} />
          <ShowQuery showAlert={showAlert} id={id} />
          <div class="flex justify-center ">
            <a href="/" class="text-gray-400 hover:text-blue-500">
              <span class="sr-only">Facebook</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="/" class="text-gray-400 hover:text-pink-500">
              <span class="sr-only">Instagram</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="/" class="text-gray-400 hover:text-blue-500">
              <span class="sr-only">Twitter</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="/" class="text-gray-400 hover:text-black">
              <span class="sr-only">GitHub</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="/" class="text-gray-400 hover:text-pink-500">
              <span class="sr-only">Dribbble</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          <p class="mt-8 text-base leading-6 text-center text-gray-400 hover:text-red-600">
            © 2023.Designed By NIT SILCHAR. All Rights Reserved.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Template;
