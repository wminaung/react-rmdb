import React, { useEffect, useState } from "react";
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

import NoImg from "../images/no_image.jpg";
import HomeImage from "./HeroImage";
import { useHomeFetch } from "./hooks/useHomeFetch";

const Home = () => {
  const { error, loading, state } = useHomeFetch();

  console.log(state);
  return (
    <>
      {state.results[0] && (
        <HomeImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          text={state.results[0].original_title}
          title={state.results[0].overview}
        />
      )}
    </>
  );
};

export default Home;
