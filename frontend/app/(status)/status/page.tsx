import Image from "next/image";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faSlack } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
export default function StatusPage() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="flex absolute -top-96 start-1/2 transform -tranneutral-x-1/2 overflow-hidden blur-3xl"
        >
          <div className="overflow-hidden bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl  w-[25rem] h-[44rem] rotate-[-60deg] transform -tranneutral-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
          <div className="overflow-hidden bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -tranneutral-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
        </div>
        <header className="sticky top-0 inset-x-0 flex flex-wrap overflow-hide sm:justify-start sm:flex-nowrap z-[48] w-full sm:w-auto text-sm py-2.5 sm:py-4">
          <nav
            className="flex basis-full justify-between items-center w-full sm:w-auto mx-auto px-4 sm:px-6 md:px-8"
            aria-label="Ambrosia Nav"
          >
            <div className="">
              <a
                className="flex-none text-xl font-semibold dark:text-white"
                href="/"
                aria-label="Ambrosia"
              >
                TeaClient Status™
              </a>
            </div>
            <div className="gap-2 flex items-center">
              <a
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 hover:-tranneutral-y-2 transition-transform hover:duration-150  dark:hover:text-gray-300"
                href="/About"
              >
                About
              </a>
              <a
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 hover:-tranneutral-y-2 transition-transform hover:duration-150  dark:hover:text-gray-300"
                href="/blog"
              >
                Blog
              </a>
              <a
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 hover:-tranneutral-y-2 transition-transform hover:duration-150  dark:hover:text-gray-300"
                href="https://docs.ambrosia.novabot.eu.org"
              >
                Docs
              </a>

              <a
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 hover:-tranneutral-y-2 transition-transform hover:duration-150  dark:hover:text-gray-300"
                href="https://status.ambrosia.novabot.eu.org"
              >
                Status
              </a>
            </div>
            <div className="gap-3">
              <button
                type="button"
                className="py-3 px-5 inline-flex mr-1 items-center gap-x-2 text-sm font-semibold rounded-lg duration-300 transition-all border-transparent hover:border hover:border-indigo-600 bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 "
              >
                Subscribe
              </button>
              <button
                type="button"
                className="py-3 px-5 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg duration-300 transition-all border-transparent hover:border hover:border-indigo-600 bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 "
              >
                Login
              </button>
            </div>
          </nav>
        </header>

        <div className="relative overflow-hidden">
          <div className="relative z-10 m-6 w-full sm:w-auto ">
            <div className="flex flex-col items-center gap-3 text-center lg:items-start lg:text-start">
              <div className="flex flex-col text-gray-800 dark:text-white ">
                <h1 className="text-2xl font-semibold block">
                  TeaClient Status
                </h1>
                <h4 className="text-gray-800/80 dark:text-white/80">
                  Current status of all TeaClient related services.
                </h4>
              </div>

              <div className="grid grid-cols-3 w-full">
                <div className="dark:border-zinc-900 border dark:bg-zinc-900/60 p-3 my-3 w-full rounded-md flex justify-between">
                  <div className="gap-2 flex items-center">
                    <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
                      RSS Issue
                    </h1>

                    <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full dark:bg-yellow-500/10 dark:text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6.701 2.25c.577-1 2.02-1 2.598 0l5.196 9a1.5 1.5 0 0 1-1.299 2.25H2.804a1.5 1.5 0 0 1-1.3-2.25l5.197-9ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Minor Outage
                    </span>
                  </div>
                  <span className="py-1 px-2 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Resolved
                  </span>

                </div>
              </div>

              <div className="grid grid-cols-3 gap-2  mt-2 mb-3 w-full ">
                <div className="p-4 w-full sm:w-auto  dark:border-zinc-900 border rounded-md flex justify-between items-center dark:bg-zinc-900/60">
                  <h1 className="text-[1.5rem] text-gray-800 dark:text-white ">
                    Teaclient
                  </h1>
                  <div>
                    <div className="flex h-full w-fit min-w-[80px] p-3 text-gray-800 dark:text-white  items-center justify-center rounded-md border border-input-border  text-center shadow-md bg-[#16C172] dark:bg-[#16C172]/25 dark:border dark:border-[#16C172]/60">
                      Ping 42
                    </div>
                  </div>
                </div>

                <div className="p-4 dark:border-zinc-900 border rounded-md flex justify-between items-center dark:bg-zinc-900/60">
                  <h1 className="text-[1.5rem] text-gray-800 dark:text-white ">
                    Teaclient Database
                  </h1>
                  <div>
                    <div className="flex h-full w-fit min-w-[80px] p-3 text-gray-800 dark:text-white  items-center justify-center rounded-md border border-input-border  text-center shadow-md bg-[#16C172] dark:bg-[#16C172]/25 dark:border dark:border-[#16C172]/60">
                      Ping 42
                    </div>
                  </div>
                </div>

                <div className="p-4 dark:border-zinc-900 border rounded-md flex w-full sm:w-auto  justify-between items-center dark:bg-zinc-900/60">
                  <h1 className="text-[1.5rem] text-gray-800 dark:text-white ">
                    Teaclient API
                  </h1>
                  <div>
                    <div className="flex h-full w-fit min-w-[80px] p-3 text-gray-800 dark:text-white  items-center justify-center rounded-md border border-input-border  text-center shadow-md bg-[#16C172] dark:bg-[#16C172]/25 dark:border dark:border-[#16C172]/60">
                      Ping 42
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
