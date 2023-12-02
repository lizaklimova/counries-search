import { Section, Container, CountryInfo, Loader, GoBackBtn } from "components";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { fetchCountry } from "../service/country-service";

export const Country = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

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

  const goBackPath = location?.state?.from ?? "/";

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        <GoBackBtn path={goBackPath}>Go back</GoBackBtn>
        {data && <CountryInfo country={data} />}
      </Container>
    </Section>
  );
};
