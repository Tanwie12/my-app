import { useState, useEffect } from "react";
import axios from "axios";

type Props = {
  endpoint: string;
  url?: string;
  num_pages?:string;
  query:object;
};

type Error= {
  message: string;
  error: string | object | number | boolean | null;
};

 const useFetch = ({ endpoint,query }: Props) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...query
    },
    headers: {
      'X-RapidAPI-Key': '6bc62da891msh66d310dba86b2b2p1e3266jsn9fa10921d3e5',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error: any) {
      setError(error);
      alert("there is an error"+error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};
export default useFetch;