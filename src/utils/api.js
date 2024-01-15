const baseUrl = "http://localhost:3001";

const handleServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

const getClothingItems = () => {
  return fetch(`${baseUrl}/items`, {
    headers: { "Content-Type": "application/json" },
  }).then(handleServerResponse);
};

const parseClothingDataAPI = (data) => {
  return data;
};

const addItemCardAPI = ({ name, weather, imageUrl }) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      weather,
      imageUrl,
    }),
  }).then(handleServerResponse);
};

const deleteItemCardAPI = (_id) => {
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  }).then(handleServerResponse);
};

export {
  getClothingItems,
  parseClothingDataAPI,
  addItemCardAPI,
  deleteItemCardAPI,
};
