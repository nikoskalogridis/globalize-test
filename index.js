import Globalize from 'globalize';

Globalize.locale('el');

const dateFormatter = Globalize.dateFormatter({datetime: 'short'});

console.log(dateFormatter(new Date()));
