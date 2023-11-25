
import { useEffect, useState } from 'react';
import './App.css'
import Dashboard from './pages/Dashboard'
import { Box } from '@chakra-ui/react';


function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate an asynchronous task (e.g., API call, data fetching)
    const fetchData = async () => {
      // Perform your asynchronous task here
      // For demonstration purposes, let's use a timeout to simulate loading
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Set loading to false after the task is complete
      setLoading(false);
    };

    fetchData();
  }, []); // The empty dependency array ensures that the effect runs only once on mount

  return (
    <>

      {loading ? (
        <>
          <div className="loading-spinner"></div>

        </>

      ) : <Box p={"20px"}><Dashboard /></Box> 
      }



    </>
  )



}

export default App
