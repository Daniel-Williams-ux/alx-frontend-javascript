//only make promise
const getResponseFromAPI = new Promise((resolve, reject) => {
  let responseFromAPI = true;
  if (responseFromAPI) {
    resolve();
  } else {
    reject();
  }
  /* eslint-enable */
})
export default getResponseFromAPI;
