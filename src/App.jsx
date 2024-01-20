import React, { useState, useEffect } from 'react';
import * as components from './components';
import { fetchDataFromWebsite, parseJsonFromHtml } from './jsonParsing/index';
import './App.css'



function App() {
  console.log('loaded App');
  

  const [htmlString, setHtmlString] = useState('');
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const data = await fetchDataFromWebsite();
        console.log('Fetched data from API');
        setHtmlString(data);
      } catch (error) {
        console.error('Error in App component:', error);
      }
    };

    fetchDataFromApi();
  }, []);

  useEffect(() => {
    // Parse the HTML string and set the coinData
    try {
      const parsedData = parseJsonFromHtml(htmlString);
      console.log('Parsed data');
      setCoinData(parsedData);
    } catch (error) {
      console.error('Error in parsing HTML string:', error);
    }
  }, [htmlString]);


  return (
    <div>
      <components.Header />
      <components.Body  coinData={coinData}/>
    </div>
  );
}


export default App
