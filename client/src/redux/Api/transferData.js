class TransferData {
  // Getting page data for the Home page
  static dataHomePage() {
    return fetch('http://localhost:8000/')
      .then((response) => {
        if (response.status !== 200) {
          console.log(`Oops, problem. Status Code: ${response.status}`);
          return;
        }
        return response.json();
      })
      .then((data) => {
        return data;
      });
  }

  // Getting page data for the cabinet/user page
  static dataServicesPage() {
    return fetch('http://localhost:8000/services')
      .then((response) => {
        if (response.status !== 200) {
          console.log(`Oops, problem. Status Code: ${response.status}`);
          return;
        }
        return response.json();
      })
      .then((data) => {
        return data.servicesInfo;
      });
  }

  // Dispathing form data for the cabinet/user page
  static personalDataSendToServer(data) {
    return fetch('http://localhost:8080/cabinet/user/metrics', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data }),
    }).then((response) => {
      return response.json();
    });
  }
}

export default TransferData;
