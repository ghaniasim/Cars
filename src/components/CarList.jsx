import React from "react";
import useGlobal from "../store";
import './CarList.css';

const CarList = () => {
  const [globalState, globalActions] = useGlobal();
  const cars = globalState.cars;

  return (
    <div className='list'>
    {
      cars.map(car => {
        return (
            <>
            <section className= 'listView'>
              <button
              key={car.id}
              onClick={ () => globalActions.addToFavourites(car) }
              >
              +
              </button>
              <p>{car.name}<br/>{car.model}<br/>{car.year}<br/>&euro; {car.price}</p>
            </section>
          </>
        );
      })
    }
    </div>
  );
};

export default CarList;
