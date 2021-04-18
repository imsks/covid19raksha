import firebase from "database/firebaseConfig";

// Global Variables
const db = firebase.firestore();
const plasmaRequestCollection = db.collection("plasma-requests");
const addCityRequestCollection = db.collection("add-city-requests");
const plasmaDonersCollection = db.collection("plasma-doners");

export const raiseRequestForPlasma = async (requestRaiserDataPayload) => {
  return await plasmaRequestCollection.add({
    ...requestRaiserDataPayload,
  });
};

export const raiseRequestAddCity = async (requestRequestAddCityDataPayload) => {
  return await addCityRequestCollection.add({
    ...requestRequestAddCityDataPayload,
  });
};

export const raiseRemoveMyRequest = async (
  requestRemoveMyRequestDataPayload
) => {
  return await addCityRequestCollection.add({
    ...requestRemoveMyRequestDataPayload,
  });
};

export const joinAsPlasmaDoner = async (joiningDonerDataPayload) => {
  return await plasmaDonersCollection.add({
    ...joiningDonerDataPayload,
  });
};

export const searchPlasmaRequestsByCity = async (city) => {
  const searchResponse = await plasmaRequestCollection.where(
    "city",
    "==",
    city
  );

  const searchResultsPayload = [];

  const allSearchResult = await searchResponse.get();

  if (allSearchResult.empty) {
    return searchResultsPayload;
  }

  allSearchResult.docs.forEach((queryDocumentReference) => {
    const {
      name,
      city,
      bloodGroup,
      primaryContactNo,
      secondaryContactNo,
    } = queryDocumentReference.data();
    searchResultsPayload.push({
      name,
      city,
      bloodGroup,
      primaryContactNo,
      secondaryContactNo,
    });
  });

  return searchResultsPayload;
};

export const searchPlasmaDonersByCity = async (city) => {
  const searchResponse = await plasmaDonersCollection.where("city", "==", city);

  const searchResultsPayload = [];

  const allSearchResult = await searchResponse.get();

  if (allSearchResult.empty) {
    return searchResultsPayload;
  }

  allSearchResult.docs.forEach((queryDocumentReference) => {
    const {
      name,
      city,
      bloodGroup,
      primaryContactNo,
      secondaryContactNo,
    } = queryDocumentReference.data();
    searchResultsPayload.push({
      name,
      city,
      bloodGroup,
      primaryContactNo,
      secondaryContactNo,
    });
  });

  return searchResultsPayload;
};
