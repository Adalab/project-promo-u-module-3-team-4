const callToApi = (data) => {
  return fetch('https://dev.adalab.es/api/projectCard', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((result) => {
      if (result.success) {
        return result.cardURL;
      } else {
        throw new Error(result.error);
      }
    })
    .catch((error) => {
      console.error('Error calling API:', error);
      throw error;
    });
};

const getDataProjects = async () => {
  const fetchData = await fetch('http://localhost:5001/listproject');
  const dataJson = await fetchData.json();
  return dataJson;
};

const object = {
  getDataProjects: getDataProjects,
  callToApi: callToApi,
};

export default object;
