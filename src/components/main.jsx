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
      <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
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
      </section>
    </div>
  );
}
