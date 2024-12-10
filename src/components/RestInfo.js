import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import FoodItems from "./FoodItems";
import { Shimmer } from "./shimmer";
import useResInfo from "../utils/useResInfo";
import NestedCategory from "./NestedCategory";

const RestInfo = () => {
  const [showIndex, setShowindex] = useState(0);

  const { resId } = useParams();
  const { isLoading, heading, tab, resDetails, recomand, nestedCategory } =
    useResInfo(resId);

  if (isLoading) {
    return <Shimmer />;
  }

  return (
    <div className='w-6/12 mx-auto'>
      <div id='restaurent-info-container'>
        <div>
          <h1 className='mt-20 font-bold text-3xl'>{heading}</h1>
        </div>
        <div className=''>
          {tab.length >= 2 &&
            tab.map((tabInfo) => (
              <p
                key={tabInfo.id}
                className={tabInfo.title}
              >
                {tabInfo.title}
              </p>
            ))}
        </div>
        <div className='rest-info-div'>
          <p className='rest-info-texts'>
            <b>
              {resDetails.avgRating} ({resDetails.totalRatingsString}) •{" "}
              {resDetails.costForTwoMessage}
            </b>
          </p>
          {resDetails && Array.isArray(resDetails.cuisines) && (
            <p>{resDetails.cuisines.join(", ")}</p>
          )}
          <p>
            <b>Outlet</b> {resDetails.areaName}
          </p>
        </div>
        <div className='text-center'>
          <span className='font-bold text-lg'>⥼ Menu ⥽</span>
        </div>
        <div className='mt-8'>
          {recomand.map((r, index) => (
            <FoodItems
              key={index}
              foodobj={r}
              collapse={index == showIndex ? true : false}
              currentIndex={index}
              setShowIndex={(newIndex) => {
                setShowindex(showIndex === newIndex ? null : newIndex);
              }}
            />
          ))}
          {Array.isArray(nestedCategory) &&
            nestedCategory.map((r, index) => (
              <NestedCategory
                key={index}
                foodobjs={r}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default RestInfo;
