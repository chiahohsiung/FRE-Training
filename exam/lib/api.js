const endpoint = "https://itunes.apple.com/search?";

/**
 * Define your api calls
 */
export async function getItunesData(queryTerm) {
  console.log(queryTerm);
  const options = {
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };
  const parameters = new URLSearchParams({
    term: queryTerm,
    media: "music",
    entity: "album",
    attribute: "artistTerm",
    limit: 500,
  });

  const request = await fetch(endpoint + parameters.toString(), options);
  const data = await request.json();

  return data;
}
