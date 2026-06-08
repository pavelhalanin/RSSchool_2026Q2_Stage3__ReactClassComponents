import { useEffect } from "react";
import { useCountryArrayActions } from "../../store/countries/hook";

export default function CountryLibrary() {
  const { loadCountryArray } = useCountryArrayActions();

  useEffect(() => {
    loadCountryArray();
  }, [loadCountryArray]);

  return <></>;
}
