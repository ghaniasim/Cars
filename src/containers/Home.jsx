import React from 'react';
import PageHeader from '../components/PageHeader';
import TabBar from '../components/TabBar';
import CarList from "../components/CarList";

const Home = () => {
    return (
        <>
            <PageHeader title={`Look for your dream car...`}/>
            <section>
                <h3>List of Available Cars</h3>
                <CarList />
            </section>
            <TabBar />
        </>
    );
};

export default Home;