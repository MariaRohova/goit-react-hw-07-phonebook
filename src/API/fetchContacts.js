import axios from 'axios';

axios.defaults.baseURL =
  'https://6396eb2077359127a0267172.mockapi.io/contacts';

export async function getContact() {
  try {
    const response = await axios.get('/contacts');
    if (response.status === 200) return response;
  } catch (error) {
    return error;
  }
}

export async function deleteContact(id) {
  try {
    const response = await axios.delete(`/contacts/${id}`);
    if (response.status === 200) return response;
  } catch (error) {
    return error;
  }
}

export async function addContact(contact) {
  try {
    const response = await axios.post('/contacts', contact);
    if (response.status === 201) return response;
  } catch (error) {
    return error;
  }
  
}
