import React, { useState } from "react";
import { withAsync } from "../utils/const";
import { getRecipes } from "../api";

export default function FEx9() {
  // STATE TO STORE RECIPES AFTER MAKE A GET REQUEST
  const [recipes, setRecipes] = useState([]);
  const [searchValue, setSearchValue] = useState(null);
  const [error, setError] = useState(false);

  //   FN HANDLE SEARCH BY R NAME
  const searchRecipe = async () => {
    const { response, error } = await withAsync(getRecipes, searchValue);
    if (response) {
      setRecipes(response.data.recipes);
    } else {
      setError("No Recipe Found");
    }
  };

  if (error) return <p>Error... Refresh Please</p>;
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
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-black outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            placeholder="search for a receipe"
          />

          <button
            onClick={() => {
              console.log("clickeds");
              searchRecipe();
            }}
            className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Search
          </button>
          <a
            href="https://forkify-api.herokuapp.com/phrases.html"
            className="cursor-pointer text-blue-700 text-sm self-center"
            target="_blank"
          >
            KeyWords
          </a>
        </div>
      </div>
      {/* RECIPES LIST START HERE \ -ç- */}
      <div className="w-[80%] h-full bg-pink-200 flex items-center justify-center gap-4 p-3 flex-wrap">
        {/* Items List */}
        {recipes.map((recipe) => (
          <div className="w-44 h-full bg-white text-black flex flex-col content-start items-center p-2">
            <img className="h-28" src={recipe.image_url} />
            <h5>{recipe.title}</h5>
            <button className="py-1 px-4 bg-amber-400 text-white">
              Show More
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
