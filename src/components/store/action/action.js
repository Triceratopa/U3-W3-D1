// Action creator per aggiungere un elemento ai preferiti
export const addToFavourite = (item) => {
  return {
    type: "ADD_TO_FAVOURITE",
    payload: item,
  };
};

// Action creator per rimuovere un elemento dai preferiti
export const removeFromFavourite = (item) => {
  return {
    type: "REMOVE_FROM_FAVOURITE",
    payload: item,
  };
};
