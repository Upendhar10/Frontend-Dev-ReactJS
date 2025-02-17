import { useState, useEffect } from "react";
import { BREWERY_LIST_API } from "../constants";

const useFetchBreweries = () => {
  const [allBreweries, setAllBreweries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BREWERY_LIST_API);
        const data = await response.json();
        setAllBreweries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { allBreweries, loading, error };
};

export default useFetchBreweries;
