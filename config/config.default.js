'use strict';

module.exports = appInfo => {
  const config = exports = {};

  config.keys = appInfo.name + '_1609986158796_1256';

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: [ '*'],
  }

  config.cors = { origin:'*', credentials: true, allowMethods:'GET,HEAD,PUT,POST,DELETE,PATCH'};

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  };

  
  return {...config};
}
