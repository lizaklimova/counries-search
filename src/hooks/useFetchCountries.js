import { useEffect, useState } from "react";
import { getCountries } from "service/country-service";

export const useFetchCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      try {
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return { countries, isLoading }
}