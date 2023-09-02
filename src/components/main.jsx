import React, { useState, useEffect } from "react";

export default function Main() {
  const [quoteData, setQuoteData] = useState({
    content: "Loading...",
    author: "Loading...",
  });

  const updateQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      if (response.ok) {
        setQuoteData({
          content: data.content,
          author: data.author,
        });
      } else {
        setQuoteData({
          content: "An error occurred",
          author: "",
        });
        console.log(data);
      }
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    updateQuote();
  }, []);

  return (
    <div className="main">
      {/* <section className="px-6 pt-16 dark:bg-gray-800 dark:text-gray-100 h-screen">
        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
          <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
            <h1 className="text-5xl font-extrabold dark:text-gray-50">
              React FETCH
            </h1>
            <p className="my-8">
              <span className="font-medium dark:text-gray-50">
                Modular and versatile.
              </span>
              Fugit vero facilis dolor sit neque cupiditate minus esse accusamus
              cumque at.
            </p>
            <div className="self-stretch space-y-3">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={updateQuote}
              >
                Get New Quote
              </button>
              <div className="p-4">
                <div className="mt-4">
                  <div className="bg-slate-500 p-4 rounded shadow-md">
                    <blockquote>
                      <p className="text-lg">{quoteData.content}</p>
                      <cite className="block text-right mt-2">
                        {quoteData.author}
                      </cite>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="https://source.unsplash.com/random/480x360"
            alt=""
            className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500"
          />
        </div>
      </section> */}
      <div className="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
        <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
          <img
            src="https://kitwind.io/assets/kometa/laptop.png"
            className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
            alt=""
          />
        </div>
        <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
          <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  Brand new
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                We will bring your
                <br className="hidden md:block" />
                business{" "}
                <span className="inline-block text-deep-purple-accent-400">
                  online
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
            </div>
            <form>
              <div className="flex flex-col md:flex-row">
                <input
                  placeholder="Name"
                  required=""
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                />
                <input
                  placeholder="Email"
                  required=""
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center mt-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                  Subscribe
                </button>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Learn more
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative mb-6 sm:mx-auto md:mb-10 md:max-w-md lg:max-w-lg">
          <img
            className="object-cover w-full h-56 rounded shadow-lg md:h-64 lg:h-80"
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt=""
          />
          <a
            href="/"
            aria-label="Play Video"
            className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
          >
            <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
              <svg
                className="w-10 text-gray-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
              </svg>
            </div>
          </a>
        </div>
        <div className="mb-16 md:mb-0 md:max-w-xl sm:mx-auto md:text-center">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            The quick, brown fox jumps over a very sad and{" "}
            <span className="inline-block text-deep-purple-accent-400">
              lazy dog
            </span>
          </h2>
          <p className="mb-5 text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae.
          </p>
          <div className="flex items-center md:justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </a>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>

      <section>
        <div className="dark:bg-gray-800 h-screen">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
            <h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl dark:text-gray-900">
              FETCH
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl ">
              Fetch the API Data
            </p>
            <div className="flex flex-wrap justify-center">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded dark:bg-gray-500 dark:border-gray-700 dark:text-gray-50"
                onClick={updateQuote}
              >
                Get New Quote
              </button>
            </div>
            <div className="bg-slate-500 p-4 rounded shadow-md">
              <blockquote>
                <p className="text-lg">{quoteData.content}</p>
                <cite className="block text-right mt-2">
                  {quoteData.author}
                </cite>
              </blockquote>
            </div>
          </div>
          <img
            src="https://source.unsplash.com/random/480x320"
            alt=""
            className="w-2/3 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500"
          />
        </div>
      </section>
    </div>
  );
}
