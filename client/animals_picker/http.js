const HOST = "http://localhost:3000";

export async function fetchingAnimals() {
  try {
    const response = await fetch(`${HOST}/animals`);
    if (!response.ok) {
      throw new Error("Failed to fetch animals");
    }
    const resData = await response.json();
    console.log(resData.animals);
    return resData.animals;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
