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
import { useSearchParams } from "react-router-dom";

const CountrySearch = () => {
  // const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (value) => {
    // setSearch(value);
    setSearchParams({ region: value });
  };
  useEffect(() => {
    const params = searchParams.get("region") || "";

    if (!params) return;
    // if (!search) return;
    const getData = async () => {
      setIsLoading(true);
      try {
        // const data = await fetchByRegion(search);
        const data = await fetchByRegion(params);
        setData(data);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [searchParams]);

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

export default CountrySearch;
