const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async () => {
  try {
    const response = await fetch(BASE_URL);

    return await response.json();
  } catch (error) {
    throw new Error(`${error}`);
  }
};
