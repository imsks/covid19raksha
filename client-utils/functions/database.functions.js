import firebase from "database/firebaseConfig";

// Global Variables
const db = firebase.firestore();
const plasmaRequestCollection = db.collection("plasma-requests");
const addCityRequestCollection = db.collection("add-city-requests");

export const raiseRequestForPlasma = async (requestRaiserDataPayload) => {
  return await plasmaRequestCollection
    .add({
      ...requestRaiserDataPayload,
    })
    .then((document) => {
      return document.id;
    });
};

export const raiseRequestAddCity = async (requestRequestAddCityDataPayload) => {
  return await addCityRequestCollection
    .add({
      ...requestRequestAddCityDataPayload,
    })
    .then((document) => {
      return document.id;
    });
};
