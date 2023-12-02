import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <Section>
      <Container>
        <Heading>Home</Heading>
        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
