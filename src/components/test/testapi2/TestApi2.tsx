import { useState, useEffect } from "react";
import StarWarsAPIService from "../../../shared/apitest/service/StarWarsAPIService";
export const TestApi2 = () => {
  const [starWarsData, setStarWarsData] = useState<any>();

  const [characterCount, setCharacterCount] = useState<any>(1);



  /** Store data in @starWarsData with useEffect @setStarWarsData */
  useEffect(() => {
    const getDataFromStarWarsAPI = async () => {
      try {
        const response = await StarWarsAPIService.getStarWarsCharacter(
          characterCount
        );
        setStarWarsData(response);
      } catch (error) {
        console.log(error);
      }
    };
    getDataFromStarWarsAPI();
  }, [characterCount]);

  const setCharacterCountPrevious = () => {
    characterCount <= 1
      ? setCharacterCount(1)
      : setCharacterCount(characterCount - 1);
  };

  return (
    <div>
      <h2>Get previous / next character</h2>
      <ul>
        <li>
          <strong>Name: </strong>
          {starWarsData?.data?.name}
        </li>
        <li>
          <strong>Hair color: </strong>
          {starWarsData?.data?.hair_color}
        </li>
        <li>
          <strong>Gender: </strong>
          {starWarsData?.data?.gender}
        </li>
        <li>
          <strong>Birth year: </strong>
          {starWarsData?.data?.birth_year}
        </li>
        <li>
          <strong>Height: </strong>
          {starWarsData?.data?.height}
        </li>
      </ul>
      <button className="button" onClick={() => setCharacterCountPrevious()}>
        Previous
      </button>{" "}
      <button
        className="button"
        onClick={() => setCharacterCount(characterCount + 1)}
      >
        Next
      </button>
    </div>
  );
};
