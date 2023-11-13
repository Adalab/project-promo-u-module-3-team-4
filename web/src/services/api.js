const callToApi = (data) => {
  return fetch('https://sky-react.onrender.com/createproject', {
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
        return result.previewUrl;
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
  const fetchData = await fetch('https://sky-react.onrender.com/listproject');
  const dataJson = await fetchData.json();
  return dataJson;
};

const objectApi = {
  getDataProjects: getDataProjects,
  callToApi: callToApi,
};

export default objectApi;
