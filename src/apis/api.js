const API_URL = "https://63d7fdaeafbba6b7c948abdf.mockapi.io";
const COMMENT_API = "https://63dbfc98b8e69785e48fae7a.mockapi.io";

export async function fetchAllCars() {
  try {
    const res = await fetch(`${API_URL}/cars`);
    let data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function fetchCarOFWeek() {
  try {
    const res = await fetch(`${API_URL}/carofweek`);
    let data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function fetchSearchResults(query) {
  try {
    const res = await fetch(`${API_URL}/cars?search=${query}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchAllComments() {
  try {
    const res = await fetch(`${COMMENT_API}/comments`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function postComment(commentContent) {
  try {
    const res = await fetch(`${COMMENT_API}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentContent),
    });

    const data = await res.json();

    return data;
  } catch (err) {
    console.err(err);
  }
}
