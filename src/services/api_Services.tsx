import {Alert} from 'react-native';
import {API_URL, get, post} from './api_helper';
import * as url from './url_helper';

export const requestLoginPassword = async (data: any) => {
  return await fetch(`${API_URL}${url.loginpassoword}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(async resData => {
      return resData;
    });
};

export const requestAppleRegister = async (data: any) => {
  return await fetch(`${API_URL}${url.REGISTER_APPLE}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(async resData => {
      return resData;
    });
};

export const requestAppleLOgin = async (data: any) => {
  return await fetch(`${API_URL}${url.LOGIN_APPLE}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(async resData => {
      return resData;
    });
};

export const editPersonalDetail = async (data: any, userToken: any) => {
  let formdata = new FormData();
  if (data?.first) {
    formdata.append('name', data?.first);
  }
  if (data?.email) {
    formdata.append('email', data?.email);
  }
  if (data?.last_name) {
    formdata.append('last_name', data?.last_name);
  }
  if (data?.address) {
    formdata.append('address', data?.address);
  }
  if (data?.mobileNumber) {
    formdata.append('phone_number', data?.mobileNumber);
  }
  if (data?.city) {
    formdata.append('city', data?.city);
  }
  formdata.append('city_id', '1');
  formdata.append('state_id', '2');
  return await fetch(`${API_URL}${url.EDIT_PERSONAL_DETAIL}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userToken}`,
    },
    body: formdata,
  })
    .then(res => res.json())
    .then(async resData => {
      return resData;
    });
};

export const updatePassword = async (data: any, email: any, userToken: any) => {
  let formdata = new FormData();
  if (data?.device_type) {
    formdata.append('device_type', data?.device_type);
  }
  if (data?.password) {
    formdata.append('password', data?.password);
  }
  if (data?.confirmPassword) {
    formdata.append('password_confirmation', data?.confirmPassword);
  }
  return await fetch(`${API_URL}${url.UPDATE_PASSWORD}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${userToken}`,
    },
    body: formdata,
  })
    .then(res => res.json())
    .then(async resData => {
      return resData;
    });
};

export const updateResume = async (file: any, userToken: any) => {
  if (!file) {
    Alert.alert('No file selected', 'Please select a file to upload.');
    return;
  }
  let formData = new FormData();
  if (file) {
    formData.append(`file`, {
      file: file[0].uri,
      type: file[0].type,
      name: file[0].name,
    });
  }
  console.log('OOOOOOO', JSON.stringify(formData));
  return await fetch(`${API_URL}${url.UPDATE_RESUME}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${userToken}`,
    },
    body: formData,
  })
    .then(res => res.json())
    .then(async resData => {
      return resData;
    });
};

export const deleteAccount = async (data: any) => {
  return await fetch(`${API_URL}${url.DELETE_ACCOUNT}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(async resData => {
      return resData;
    });
};

export const requestRegistration = async (
  data: any,
  device_type: any,
  fcmToken: any,
) => {
  let formdata = new FormData();
  formdata.append('name', data?.firstname);
  formdata.append('last_name', data?.lastname);
  formdata.append('email', data?.email);

  formdata.append('password', data?.createpassword);
  formdata.append('password_confirmation', data?.confirmassword);
  formdata.append('device_type', device_type);
  formdata.append('device_token', fcmToken);
  return await fetch(`${API_URL}${url.REGISTRATION}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      // Authorization: data?.token,
    },
    body: formdata,
  })
    .then(res => res.json())
    .then(async resData => {
      return resData;
    });
};

export const requestJobType = async (token: any) => {
  //console.log("andrrrtokennn",token)
  return await fetch(`${API_URL}${url.JOB_TYPE}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => res.json())
    .then(async resData => {
      // console.log("andrrjeeet",resData)
      return resData;
    });
};

export const requestStates = async (token: any) => {
  //console.log("andrrrtokennn",token)
  return await fetch(`${API_URL}${url.GET_STATES}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => res.json())
    .then(async resData => {
      //  console.log("andrrjeeet",resData)
      return resData;
    });
};

export const requestRegistration2 = async (
  job: any,
  state: any,
  token: any,
) => {
  let rawdata = {
    job_type_id: job,
    state_id: state,
  };
  return await fetch(`${API_URL}${url.UPDATE_JOB_TITLE}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(rawdata),
  })
    .then(res => res.json())
    .then(async resData => {
      return resData;
    });
};

export const requestRegistration3 = async (
  data: any,
  token: any,
  document: any,
) => {
  let docc = null;
  if (document) {
    const doc = document[0];
    if (doc.uri) {
      docc = {
        uri: doc.uri,
        type: doc.type,
        name: doc.name,
      };
    }
  }
  let formdata = new FormData();
  formdata.append('address', data?.streetaddress);
  formdata.append('state_id', data?.stateid);
  formdata.append('city_id', data?.cityid);
  formdata.append('city', data?.city);
  formdata.append('phone_number', data?.phone);

  if (docc) {
    formdata.append('file', {
      uri: docc.uri,
      type: docc.type,
      name: docc.name,
    });
  }
  return await fetch(`${API_URL}${url.UPDATE_PROFILE}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
    body: formdata,
  })
    .then(res => res.json())
    .then(async resData => {
      return resData;
    })
    .catch(error => {
      console.error('Error during fetch:', error);
      throw error;
    });
};

export const requestCitys = async (token: any, state_id: any) => {
  let rawdata = {
    state_id: state_id,
  };
  return await fetch(`${API_URL}${url.GET_CITYS}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(rawdata),
  })
    .then(res => res.json())
    .then(async resData => {
      console.log('andrrjeeet', resData);
      return resData;
    });
};

export const requestMyMatchesAPI = (data: any) =>
  post(`${url.MY_MATCHES}`, data);

export const requestMyJobsAPI = (data: any) => post(`${url.MY_JOBS}`, data);

export const requestUnsaveAPI = (data: any) => post(`${url.UN_SAVE}`, data);

export const requestsaveAPI = (data: any) => post(`${url.SAVE}`, data);

export const requestViewAPI = (data: any) => post(`${url.VIEW}`, data);

export const requesSavedAPI = (data: any) => post(`${url.SAVED}`, data);

export const requesAppliedAPI = (data: any) => post(`${url.APPLIED}`, data);

export const requestForgotPassword = (data: any) =>
  post(`${url.FORGOT_PASSWORD}`, data);

export const requestResetPassword = (data: any) =>
  post(`${url.RESET_PASSWORD}`, data);

export const requestVerificationOtp = (data: any) =>
  post(`${url.VERIFICATION_OTP}`, data);
