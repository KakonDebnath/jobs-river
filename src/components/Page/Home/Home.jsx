import Header from './Header';
import Category from './Category';
import FeaturedJob from './FeaturedJob';
import { useLoaderData } from 'react-router-dom';
import { useContext } from 'react';
import { JobsContext } from '../../../App';

const Home = () => {
    
    
    return (
        <div>
            <Header/>
            <Category/>
            <FeaturedJob/>
        </div>
    );
};

export default Home;