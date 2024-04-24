const LOCALSTORE_TOTALITEMS = "LOCALSTORE_TOTALITEMS";

const getLocalStore = () => {
  let cardsLocal = window.localStorage.getItem(LOCALSTORE_TOTALITEMS);
  return cardsLocal ? JSON.parse(cardsLocal) : [];
}

const addToLocalStore = (cardItem) => {
  const updatedTotalItems = [...getLocalStore(), cardItem];
  window.localStorage.setItem(LOCALSTORE_TOTALITEMS, JSON.stringify(updatedTotalItems));
  return updatedTotalItems;
}

const removeFromLocalStore = (cardItem) => {
  const updatedTotalItems = getLocalStore().filter(item => item.id !== cardItem.id);
  window.localStorage.setItem(LOCALSTORE_TOTALITEMS, JSON.stringify(updatedTotalItems));
  return updatedTotalItems;
}

const getFromLocalStore = (id) => {
  return getLocalStore().find(item => item.id === id);
}

export { getLocalStore, addToLocalStore, removeFromLocalStore, getFromLocalStore };
