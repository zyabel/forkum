export default (type, value) => {
  const length = value.length;

  switch (type) {
    case 'textarea':
      if (length > 10) {
        return 'success';
      } else {
        return 'error';
      }
    case 'text':
      let text = /^[A-Za-z0-9_]+$/;
      if (text.test(value)) {
        return 'success';
      } else {
        return 'error';
      }
    case 'tel':
      let tel = /^\+?[0-9]{3}-?[0-9]{6,12}$/;
      if (tel.test(value)) {
        return 'success';
      } else {
        return 'error';
      }
    case 'email':
      let email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (email.test(value)) {
        return 'success';
      } else {
        return 'error';
      }
    default:
      return null;
  }
};
