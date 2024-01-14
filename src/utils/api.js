const baseUrl = "http://localhost:3001";

const handleServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

// const getClothingItems = () => {
//   const clothingItems = fetch(`${baseUrl}/items`).then(handleServerResponse);
//   console.log(clothingItems);
//   return clothingItems;
// };

const getClothingItems = () => {
  return fetch(`${baseUrl}/items`, {
    headers: { "Content-Type": "application/json" },
  }).then(handleServerResponse);
};

const parseClothingDataAPI = (data) => {
  console.log(data);
  return data;
};

// const parseClothingDataAPI = (data) => {
//   const clothingData = data;
//   console.log(clothingData);
//   return clothingData;
// };

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

// console.log(addItemCard());

const deleteItemCardAPI = (id) => {
  return fetch(`${baseUrl}/items/${id}`, {
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
