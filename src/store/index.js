import React from "react";
import useGlobalHook from "use-global-hook";

import * as actions from "../actions";
import Car from "../models/Car";

const initialState = {
  cars: [
    new Car('Mercedes', 'C220', '2014', 15000),
    new Car('BMW', '320i', '2012', 14000),
    new Car('Audi', 'A6', '2018', 23000),
    new Car('Ford', 'Mondeo', '2010', 7000),
    new Car('Honda', 'Civic', '2016', 12000)
  ],
  favourites: []
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
