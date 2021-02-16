import http from "../StarWarsAPI";

const getDataLuke = () => {
  return http.get("/people/1");
};

const getStarWarsCharacter = (characterNumber: number) => {
  return http.get(`/people/${characterNumber}`);
};
/* export default {	*/
const logger = {
  getDataLuke,
  getStarWarsCharacter,
};
export default logger;
