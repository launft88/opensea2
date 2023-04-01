'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/single', controller.home.single);
  router.get('/multiple', controller.home.multiple);

  router.get('/api/setCollection', controller.opensea.setCollection);
  router.post('/api/setOrderListQuery', controller.opensea.setOrderListQuery);
  router.get('/api/getCollections', controller.opensea.getCollections);

  router.get('/api/getOrderList', controller.opensea.getOrderList);
  router.get('/api/getOrderData', controller.opensea.getOrderData);

  router.post('/api/saveAddrNft', controller.opensea.saveAddrNft);
  router.get('/api/getAddrNftList', controller.opensea.getAddrNftList);

  router.post('/api/createAnOrder', controller.opensea.createAnOrder);


  router.get('/api/hset', controller.opensea.hset);
  router.get('/api/sadd', controller.opensea.sadd);
  router.get('/api/getSalt', controller.opensea.getSalt);

  router.get('/api/getProposeGasPrice', controller.opensea.getProposeGasPrice);


};
