import { Container, CountryList, Heading, Loader, Section } from "components";
import { useEffect, useState } from "react";
import { getCountries } from "service/country-service";

export const Home = () => {
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

  return (
    <Section>
      <Container>
        <Heading>Home</Heading>
        {countries.length > 0 && <CountryList countries={countries} />}
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};
