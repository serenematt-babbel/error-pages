const axios = require('axios');

const getErrorPage = async (locale, errorCode) => {
  try {
    const url = `http://kitchen-sink.babbel.test/${locale}/${errorCode}.html`;
    // const url = 'google.com';
    const response = await axios.get(
      url,
      { responseType: 'stream' }
    );
  
    if (response.status < 400) {
      return response;
    }
  } catch (error) {
    new Error(`Error response from CDN for url`, error);
    error.responseCode = 500;
    throw new Error(error);
  }
};

module.exports = { getErrorPage };
