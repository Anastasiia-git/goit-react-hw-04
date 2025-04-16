import axios from "axios";

async function fetchHits(search, page) {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?query=${search}&page=${page}&client_id=mbqufqpzVe6QydLa2T8DIHVnXsjGUF2C_7zU1iorKdY`
    );

    const result = response.data.total;

    if (result === 0) {
      return { results: [] };
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { results: [] };
  }
}

export { fetchHits };
