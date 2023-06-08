import React, { useState } from "react";
import "./style.scss";
import ContentWrapper from "../../component/contentWrapper/ContentWrapper";
import SwitchTabs from "../../component/switchTabs/SwitchTabs";
import useFetch from "../../hooks/useFetch";
import Carousel from "../../component/carousel/Carousel";

const Popular = () => {
  const [endpoint, setEndpoint] = useState("movie");
  const { data, loading } = useFetch(`/${endpoint}/popular`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="carouselSelection">
      <ContentWrapper>
        <span className="carouselTitle">What's Popular</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Popular;
