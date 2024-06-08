const getCollectionData = async () => {
  const res = await fetch(`http://localhost:3000/api/collections`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
};

export default getCollectionData;
