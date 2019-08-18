import React from 'react';
import PageHeader from '../components/PageHeader';
import FavouritesList from '../components/FavouritesList';

const Favourites = () => {
    return (
        <>
            <PageHeader title={`Your dream cars`}/>
            <section>
                <h3>Your Favourite Cars</h3>
                <FavouritesList />
            </section>
        </>
    );
};

export default Favourites;