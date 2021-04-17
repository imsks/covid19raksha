import axios from "axios";
import { storage } from "database/firebaseConfig";

export const handleSignInAdmin = async (payload) => {
  return axios({
    method: "post",
    url: `${process.env.API_ROOT}/admin/auth/signin`,
    data: {
      ...payload,
    },
  })
    .then((res) => {
      const { payload } = res.data;

      const localAdminData = {
        adminId: payload.adminId,
      };

      localStorage.setItem("adminData", JSON.stringify(localAdminData));

      return res.data;
    })
    .catch((error) => {
      return error.response
        ? error.response.data
        : {
            status: "Failed",
            error: "Something went wrong",
          };
    });
};

export const handleDocumentUploadOnFirebaseStorage = async (document) => {
  const uploadTask = storage
    .ref(`/business-verification-documents/${document.name}`)
    .put(document);

  return (await uploadTask).ref
    .getDownloadURL()
    .then((documentDownloadURL) => documentDownloadURL);
};

export const handleRegisteringBusiness = async (payload) => {
  console.log(payload);
  return axios({
    method: "post",
    url: `${process.env.API_ROOT}/admin/business/`,
    data: {
      ...payload,
    },
  })
    .then((res) => {
      const { payload } = res.data;

      return payload;
    })
    .catch((error) => {
      return error.response
        ? error.response.data
        : {
            status: "Failed",
            error: "Something went wrong",
          };
    });
};
