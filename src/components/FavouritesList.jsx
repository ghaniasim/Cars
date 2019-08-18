import React from "react";
import useGlobal from "../store";
import './CarList.css';

const FavouritesList = () => {
  const [globalState, globalActions] = useGlobal();
  const favourites = globalState.favourites;

  return (
    <div>
    {
      favourites.map(car => {
        return (
          <>
          <section className= 'listView'>
            <p>{car.name}<br/>{car.model}<br/>{car.year}<br/>&euro; {car.price}</p>
          </section>
        </>    
        );
      })
    }
    </div>
  );
};

export default FavouritesList;
