export async function getDndData(path: string): Promise<Monster> {
  const res = await fetch("https://www.dnd5eapi.co/api/" + path);

  if (!res.ok) {
    throw new Error("Error requesting data");
  }

  const data: Monster = await res.json();
  // console.log(monsters); // Log the fetched monsters
  return data;
}

export async function getCharacters(): Promise<any> {
  return [];
}
