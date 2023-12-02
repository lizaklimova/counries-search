import { Section, Container, CountryInfo, Loader } from "components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCountry } from "../service/country-service";

export const Country = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchCountry(id);
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [id]);
  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {data && <CountryInfo country={data} />}
      </Container>
    </Section>
  );
};
