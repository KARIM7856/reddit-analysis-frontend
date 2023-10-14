import axios from 'axios';

const fetchData = async (endpoint, data) => {
  try {
    const response = await axios.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const fetchDataGet = async (endpoint) => {
    try {
      const response = await axios.get(endpoint);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export {fetchData, fetchDataGet};


// Add more API functions as needed
