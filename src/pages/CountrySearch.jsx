import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from "components";
import { fetchByRegion } from "service/country-service";
import { useEffect, useState } from "react";

export const CountrySearch = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (value) => {
    setSearch(value);
  };
  useEffect(() => {
    if (!search) return;
    const getData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchByRegion(search);
        setData(data);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [search]);
  return (
    <Section>
      <Container>
        <Heading>Country Search</Heading>
        {isLoading && <Loader />}
        <SearchForm submit={handleSubmit} />
        {data.length > 0 && <CountryList countries={data} />}
      </Container>
    </Section>
  );
};
