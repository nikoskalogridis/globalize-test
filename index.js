const Globalize = require('globalize');
const dateFormatter = Globalize.dateFormatter({datetime: 'full'});

const appElement = document.createElement('div');
appElement.innerHTML = dateFormatter(new Date());
document.getElementsByTagName('body')[0].appendChild(appElement);
