class TransferData {
  // Getting initial redux data
  static data() {
    return fetch('http://localhost:8000')
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

  // Getting page data for the Home page
  static dataHomePage() {
    return fetch('http://localhost:8000/home')
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

  // Getting page data for the Services page
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

  // Getting page data for the Products page
  static dataProductPage() {
    return fetch('http://localhost:8000/products')
      .then((response) => {
        if (response.status !== 200) {
          console.log(`Oops, problem. Status Code: ${response.status}`);
          return;
        }
        return response.json();
      })
      .then((data) => {
        return data.cards;
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
