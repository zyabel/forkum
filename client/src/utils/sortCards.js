import _ from 'lodash';

export default (type, props) => {
  switch (type) {
    case 'priceUp':
      return props.sort((a, b) => {
        return Number(a.price) - Number(b.price);
      });

    case 'priceLow':
      return props.sort((a, b) => {
        return Number(b.price) - Number(a.price);
      });

    case 'currencyUSD':
      return props.filter((card) => card.currency === 'USD');

    case 'currencyEuro':
      return props.filter((card) => card.currency === 'Euro');

    case 'name':
      return _.sortBy(props, 'title');

    default:
      return props;
  }
};
