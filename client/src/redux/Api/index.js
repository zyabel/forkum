import { Slides } from '../../containers/HomePage/data';

class Api {
  static dataLocalHomePage() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Slides);
      }, 1000);
    });
  }
}

export default Api;
