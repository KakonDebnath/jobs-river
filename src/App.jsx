import React, { createContext} from 'react';
import Navbar from './components/Navbar';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './components/Footer';
import { addToDb } from './utils/fakeDB';
import { Toaster } from 'react-hot-toast';
export const JobsContext = createContext([]);
export const FunctionContext = createContext({});


const App = () => {
  const allData = useLoaderData();


  const handleApply = (id) => {
    addToDb(id);
    
  }

  return (
    <JobsContext.Provider value={allData}>
      <FunctionContext.Provider value={handleApply}>
        <Navbar />
        <div className=''>
          <Outlet />
        </div>
        <Footer />
        <Toaster/>
      </FunctionContext.Provider>
    </JobsContext.Provider>

  );
};

export default App;