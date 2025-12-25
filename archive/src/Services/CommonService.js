import axios from "axios";
import { toast } from "react-toastify";

import { apiUrl, BASE_URL } from "../Constant";

const headers = {
  "Content-Type": "application/json",
  accept: "application/json",
  "Access-Control-Allow-Headers": "Content-Type",
  "access-control-allow-credentials": true,
  "Access-Control-Allow-Methods": "POST, GET, DELETE",
  "Access-Control-Request-Method": "POST, GET, DELETE",
  "Access-Control-Request-Headers": "POST, GET, DELETE",
};

export function apiCall(
  requestMethod,
  url,
  body,
  onSuccess,
  onFailure,
  accessToken = null
) {
  if (accessToken !== null) {
    headers["Authorization"] = "Bearer " + accessToken;
  }
  let formData = {
    method: requestMethod,
    headers: headers,
  };
  let formBody = JSON.stringify(body);

  if (body !== undefined && body !== "") {
    formData["body"] = formBody;
  }

  fetch(url, formData, 500)
    .then((response) => {
      response
        .json()
        .then((responseJson) => {
          if (responseJson.status === 200) {
            onSuccess(responseJson);
          } else {
            onFailure(responseJson);
          }
        })
        .catch((error) => {
          toast.error(error);
          onFailure(error);
        });
    })
    .catch((error) => {
      toast.error(error);
      onFailure(error);
    });
}

export function imageUploadApiCall(data, onSuccess, token) {
  const formData = new FormData();
  formData.append("document", data[0]);

  try {
    axios
      .post(`${apiUrl.UPLOAD_IMAGE}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      })

      .then((response) => {
        if (response.status === 200) {
          toast.success(response.data.message);
          onSuccess(response.data.url);
        } else {
          toast.error("images not upload");
        }
      });
  } catch (e) {
    return e;
  }
}

export function multipleImageUploadApiCall(data, onSuccess, token) {
  const formData = new FormData();
  formData.append("document", data );

  try {
    axios
      .post(`${apiUrl.UPLOAD_IMAGE}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      })

      .then((response) => {
        if (response.status === 200) { 
          onSuccess(response.data.url);
        } else {
          toast.error("images not upload");
        }
      });
  } catch (e) {
    return e;
  }
}

export function userImageUpload(data, id, onSuccess, token) {
  const formData = new FormData();
  formData.append("document", data);

  try {
    axios
      .post(`${apiUrl.USER_UPLOAD_FILE}/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      })

      .then((response) => {
        if (response.status === 200) {
          toast.success(response.data.message);
          onSuccess(response);
        } else {
          toast.error("images not upload");
        }
      });
  } catch (e) {
    return e;
  }
}
export function deleteImageApi(id, onSuccess, token) {
  try {
    axios
      .delete(`${apiUrl.DELETE_UPLOAD_FILE}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })

      .then((response) => {
        if (response.status === 200) {
          toast.success(response.data.message);
          onSuccess(response);
        } else {
          toast.error("images not deleted");
        }
      });
  } catch (e) {
    return e;
  }
}
export function deleteApi(url, onSuccess, token) {
  var formData = {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  try {
    fetch(url, formData, 500).then((response) => {
      response.json().then((responseJson) => {
        if (responseJson.status === 200) {
          onSuccess(responseJson);
        }
      });
    });
  } catch (e) {
    return e;
  }
}

export function massDeleteApi(body, onSuccess, token) {
  var formData = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  let formBody = JSON.stringify(body);

  if (body !== undefined && body !== "") {
    formData["body"] = formBody;
  }
  try {
    fetch(`${BASE_URL}/api/mass-delete`, formData, 500).then((response) => {
      response.json().then((responseJson) => {
        if (responseJson.status === 200) {
          
          onSuccess(responseJson);
        }
      });
    });
  } catch (e) {
    return e;
  }
}

export function downloadReport(
  requestMethod,
  url,
  body,
  onSuccess,
  onFailure,
  accessToken = null
) {
  if (accessToken !== null) {
    headers["Authorization"] = "Bearer " + accessToken;
  }
  let formData = {
    method: requestMethod,
    headers: headers,
  };
  let formBody = JSON.stringify(body);

  if (body !== undefined && body !== "") {
    formData["body"] = formBody;
  }

  fetch(url, formData, 500)
    .then((response) => {
      response
        .json()
        .then((responseJson) => {
          if (responseJson) {
            onSuccess(responseJson);
          } else {
            onFailure(responseJson);
            toast.error(responseJson.message);
          }
        })
        .catch((error) => {
          toast.error(error);
          onFailure(error);
        });
    })
    .catch((error) => {
      toast.error(error);
      onFailure(error);
    });
}
