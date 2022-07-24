const fetchRandomApi = async () => {
  const res = await fetch('https://api.publicapis.org/random');

  return res.json();
};

export const fetchRandomApis = async () => {
  const api1 = await fetchRandomApi();
  const api2 = await fetchRandomApi();

  return [api1, api2].map(api => api.entries[0]);
}