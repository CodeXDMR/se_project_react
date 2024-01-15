import processServerResponse from "./processServerResponse";

const baseUrl = "http://localhost:3001";

const getClothingItems = () => {
  return fetch(`${baseUrl}/items`, {
    headers: { "Content-Type": "application/json" },
  }).then(processServerResponse);
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
  }).then(processServerResponse);
};

const deleteItemCardAPI = (_id) => {
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  }).then(processServerResponse);
};

export {
  getClothingItems,
  parseClothingDataAPI,
  addItemCardAPI,
  deleteItemCardAPI,
};
