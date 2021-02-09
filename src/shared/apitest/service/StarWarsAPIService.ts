import http from "../StarWarsAPI";

const getDataLuke = () => {
  return http.get("/people/1");
};

const getStartWarsCharacter = (characterNumber: number) => {
  return http.get(`/people/${characterNumber}`);
};
/* export default {	*/
const logger = {
  getDataLuke,
  getStartWarsCharacter,
};
export default logger;
