const fetchData = async (refUrl) => {
  let data = await fetch(refUrl);
  let json = await data.json();
  return json.data;
};
export default fetchData;
