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

  const handleSubmit = (value) => {
    setSearch(value);
  };
  useEffect(() => {
    if (!search) return;
    const getData = async () => {
      try {
        const data = await fetchByRegion(search);
        setData(data);
      } catch (error) {}
    };
    getData();
  }, [search]);
  return (
    <Section>
      <Container>
        <Heading>Country Search</Heading>
        <SearchForm submit={handleSubmit} />
        {data.length > 0 && <CountryList countries={data} />}
      </Container>
    </Section>
  );
};
