import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
export const TestApi = () => {
  /**
   * Test APIs:
   *  - Pokemon: https://pokeapi.co/
   *  - Star Wars: https://swapi.dev/
   *    - https://swapi.dev/api/people/1/
   *
   * CRUD operator (Create Read Update Delete)
   * - Axios.post = send date
   * - Axios.get = retrieve data
   * - Axios.delete = delete data
   * - Axios.put = update date
   */
  const [starWarsData, setStarWarsData] = useState<AxiosResponse>();
  const storeApiData = (apiPath: string) => {
    axios
      .get(apiPath)
      .then((response) => setStarWarsData(response))
      .catch((error) => console.log(error));
  };
  /** Store data in @starWarsData with useEffect @setStarWarsData */
  useEffect(() => {
    storeApiData("https://swapi.dev/api/people/1/");
  }, []);


  return (
    <div>
      <h1>Test API get</h1>
      <button
        className="button"
        onClick={() => {
          axios
            .get("https://swapi.dev/api/people/1/")
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
        }}
      >
        console log GET
      </button>

      <h1>Write out API data stored with useEffect</h1>
      <ul>
        <li>Name: {starWarsData?.data.name}</li>
        <li>Height: {starWarsData?.data.height}</li>
        <li>
          Films:
          <ul>



			  
            {starWarsData?.data.films.map(
              (value: any, index: any, array: any) => {
				return <li key={"film_" + index} className={"film_" + index}>{value}</li>
              }
            )}
          </ul>
        </li>
      </ul>
    </div>
  );
};
