import React from "react";

export default function Ex9() {
  return (
    <>
      <div>
        <div class="mt-6 mb-6 flex max-w-md gap-x-4">
          <label for="email-address" class="sr-only">
            Search
          </label>
          <input
            name="search"
            type="text"
            autocomplete="email"
            class="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-black outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            placeholder="search for a receipe"
          />
          <button class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            Search
          </button>
        </div>
      </div>
      <div className="w-[80%] h-full bg-pink-200 flex items-center justify-center gap-4 p-3 flex-wrap">
        {/* Items List */}
        {new Array(30).fill(1).map((_) => (
          <div className="w-44 h-52 bg-white text-black flex flex-col content-start items-center p-2">
            <img
              className=""
              src="https://forkify-api.herokuapp.com/images/Pizza2BQuesadillas2B2528aka2BPizzadillas25292B5002B834037bf306b.jpg"
            />
            <h5>Pizza</h5>
            <button className="py-1 px-4 bg-amber-400 text-white">
              Show More
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
