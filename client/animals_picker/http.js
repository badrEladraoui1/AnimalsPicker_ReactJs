const HOST = "http://localhost:3000";

export async function fetchingAnimals() {
  try {
    const response = await fetch(`${HOST}/animals`);
    if (!response.ok) {
      throw new Error("Failed to fetch animals");
    }
    const resData = await response.json();
    // console.log(resData.animals);
    return resData.animals;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function fetchingUserAnimals() {
  try {
    const response = await fetch(`${HOST}/user-animals`);
    if (!response.ok) {
      throw new Error("Failed to fetch user animals");
    }
    const resData = await response.json();
    console.log(resData.animals);
    return resData.animals;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateAnimaPlaces(animals) {
  const response = await fetch("http://localhost:3000/user-animals", {
    method: "PUT",
    body: JSON.stringify({ animals: animals }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to update user data.");
  }

  return resData.message;
}
