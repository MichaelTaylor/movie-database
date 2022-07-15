const process = require("process");

const axios = require("axios");
const qs = require("qs");

const handler = async function (event) {
  const API_PARAMS = qs.stringify(event.queryStringParameters);
  const searchTerm = event.queryStringParameters.searchTerm;

  console.log("API_PARAMS", API_PARAMS);
  console.log("Search Term", searchTerm);

  const API_SECRET = process.env.API_KEY;
  const URL = `https://www.omdbapi.com?apikey=${API_SECRET}&s=${searchTerm}`;

  console.log("Constructed URL is ...", URL);

  try {
    const { data } = await axios.get(URL);

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    const { data, headers, status, statusText } = error.response;
    return {
      statusCode: error.response.status,
      body: JSON.stringify({ status, statusText, headers, data }),
    };
  }
};

module.exports = { handler };
