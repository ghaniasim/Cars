export const addToFavourites = (store, car) => {
    const found = store.state.favourites.find(checkCar => checkCar.id === car.id);

    if(found) {
    //    Do nothing. 
    } else { 
        console.log(found);
        const newCar = car;
        const copy = [...store.state.favourites, newCar];
        store.setState({favourites: copy});  
    }
};

