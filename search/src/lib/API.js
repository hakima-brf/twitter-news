import { useState } from "react";
import axios from "axios";



const API = {
  useFetchNewArticles
}

/**
 * @name useFetchNewArticles
 * @description Provides a function for fetching news article data from the API
 * and variables to store the data, read loading and error states, and read
 * an error message.
 * @returns {object {data: {}, requestData: function, loading: bool, error: bool: errorMessage: string}
 */
function useFetchNewArticles() {
  // React state variables
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  /**
   * @name requestData
   * @description Handles API request using the provided string
   * as well as sets loading and error states when necessary.
   * @param {string} query String representing the search query
   * @returns Promise
   */

  

  const requestData = async (query, page) => {
    setLoading(true);
    setError(false);
    let res = null;

    try {
      const config = {
        method: "get",
        url:  "https://newsapi.org/v2/everything?q=usa&apiKey=ba5524ce336e4c83b306c7230d448be7",
        params: {
          q: query,
          p: page || 1
        },
        headers: {
          api_key: "ba5524ce336e4c83b306c7230d448be7"
        }
      }
      console.log('1');

      res = await axios.request(config);
      console.log('2');

      setData(res?.data);
      console.log('3');

      setLoading(false);
      console.log('hello');
    } catch (e) {
      setErrorMessage(e.response?.data?.message);
      setData({ total_articles: 0 });
      setLoading(false);
      setError(true);
      console.log('error');

    }
  }

  return { data, requestData, loading, error, errorMessage };
}

export default API;