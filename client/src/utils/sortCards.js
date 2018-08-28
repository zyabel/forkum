import _ from 'lodash';

export default (type, props) => {
  switch (type) {
    case 'priceLow':
      return props.sort((a, b) => {
        return Number(a.price) - Number(b.price);
      });

    case 'priceUp':
      return props.sort((a, b) => {
        return Number(b.price) - Number(a.price);
      });

    case 'currencyUSD':
      return _.filter(props, (card) => {
        return card.currency === 'USD';
      });

    case 'currencyEuro':
      return _.filter(props, (card) => {
        return card.currency === 'Euro';
      });

    case 'name':
      return _.sortBy(props, 'title');

    default:
      return props;
  }
};
