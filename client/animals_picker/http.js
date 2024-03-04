const HOST = "http://localhost:3000";

export async function fetchingAnimals() {
  const response = await fetch(`${HOST}/animals`);
  const resData = await response.json();
  return resData.animals;
}
