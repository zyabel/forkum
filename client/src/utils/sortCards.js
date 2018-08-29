import _ from 'lodash';

export default (type, props) => {
  switch (type) {
    case 'priceLow':
      return _.sortBy(props, (card) => {
        return Number(card.price);
      });

    case 'priceUp':
      return _.sortBy(props, (card) => {
        return -Number(card.price);
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
