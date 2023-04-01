
const nftabi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newMinter","type":"address"}],"name":"EventMinterAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldMinter","type":"address"}],"name":"EventMinterRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"minter","type":"address"}],"name":"addMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"burnBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"cid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"isOwnerOf","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"cid","type":"uint256"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256[]","name":"cidArr","type":"uint256[]"}],"name":"mintBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"minters","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"minter","type":"address"}],"name":"removeMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newName","type":"string"}],"name":"setName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newSymbol","type":"string"}],"name":"setSymbol","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"transferable","type":"bool"}],"name":"setTransferable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newURI","type":"string"}],"name":"setURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}];

const seaportabi = [{"inputs":[{"internalType":"address","name":"conduitController","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"components":[{"internalType":"address","name":"offerer","type":"address"},{"internalType":"address","name":"zone","type":"address"},{"components":[{"internalType":"enumItemType","name":"itemType","type":"uint8"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"identifierOrCriteria","type":"uint256"},{"internalType":"uint256","name":"startAmount","type":"uint256"},{"internalType":"uint256","name":"endAmount","type":"uint256"}],"internalType":"structOfferItem[]","name":"offer","type":"tuple[]"},{"components":[{"internalType":"enumItemType","name":"itemType","type":"uint8"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"identifierOrCriteria","type":"uint256"},{"internalType":"uint256","name":"startAmount","type":"uint256"},{"internalType":"uint256","name":"endAmount","type":"uint256"},{"internalType":"addresspayable","name":"recipient","type":"address"}],"internalType":"structConsiderationItem[]","name":"consideration","type":"tuple[]"},{"internalType":"enumOrderType","name":"orderType","type":"uint8"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"bytes32","name":"zoneHash","type":"bytes32"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"bytes32","name":"conduitKey","type":"bytes32"},{"internalType":"uint256","name":"counter","type":"uint256"}],"internalType":"structOrderComponents[]","name":"orders","type":"tuple[]"}],"name":"cancel","outputs":[{"internalType":"bool","name":"cancelled","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address","name":"offerer","type":"address"},{"internalType":"address","name":"zone","type":"address"},{"components":[{"internalType":"enumItemType","name":"itemType","type":"uint8"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"identifierOrCriteria","type":"uint256"},{"internalType":"uint256","name":"startAmount","type":"uint256"},{"internalType":"uint256","name":"endAmount","type":"uint256"}],"internalType":"structOfferItem[]","name":"offer","type":"tuple[]"},{"components":[{"internalType":"enumItemType","name":"itemType","type":"uint8"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"identifierOrCriteria","type":"uint256"},{"internalType":"uint256","name":"startAmount","type":"uint256"},{"internalType":"uint256","name":"endAmount","type":"uint256"},{"internalType":"addresspayable","name":"recipient","type":"address"}],"internalType":"structConsiderationItem[]","name":"consideration","type":"tuple[]"},{"internalType":"enumOrderType","name":"orderType","type":"uint8"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"bytes32","name":"zoneHash","type":"bytes32"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"bytes32","name":"conduitKey","type":"bytes32"},{"internalType":"uint256","name":"totalOriginalConsiderationItems","type":"uint256"}],"internalType":"structOrderParameters","name":"parameters","type":"tuple"},{"internalType":"uint120","name":"numerator","type":"uint120"},{"internalType":"uint120","name":"denominator","type":"uint120"},{"internalType":"bytes","name":"signature","type":"bytes"},{"internalType":"bytes","name":"extraData","type":"bytes"}],"internalType":"structAdvancedOrder","name":"advancedOrder","type":"tuple"},{"components":[{"internalType":"uint256","name":"orderIndex","type":"uint256"},{"internalType":"enumSide","name":"side","type":"uint8"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"identifier","type":"uint256"},{"internalType":"bytes32[]","name":"criteriaProof","type":"bytes32[]"}],"internalType":"structCriteriaResolver[]","name":"criteriaResolvers","type":"tuple[]"},{"internalType":"bytes32","name":"fulfillerConduitKey","type":"bytes32"},{"internalType":"address","name":"recipient","type":"address"}],"name":"fulfillAdvancedOrder","outputs":[{"internalType":"bool","name":"fulfilled","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address","name":"offerer","type":"address"},{"internalType":"address","name":"zone","type":"address"},{"components":[{"internalType":"enumItemType","name":"itemType","type":"uint8"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"identifierOrCriteria","type":"uint256"},{"internalType":"uint256","name":"startAmount","type":"uint256"},{"internalType":"uint256","name":"endAmount","type":"uint256"}],"internalType":"structOfferItem[]","name":"offer","type":"tuple[]"},{"components":[{"internalType":"enumItemType","name":"itemType","type":"uint8"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"identifierOrCriteria","type":"uint256"},{"internalType":"uint256","name":"startAmount","type":"uint256"},{"internalType":"uint256","name":"endAmount","type":"uint256"},{"internalType":"addresspayable","name":"recipient","type":"address"}],"internalType":"structConsiderationItem[]","name":"consideration","type":"tuple[]"},{"internalType":"enumOrderType","name":"orderType","type":"uint8"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"bytes32","name":"zoneHash","type":"bytes32"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"bytes32","name":"conduitKey","type":"bytes32"},{"internalType":"uint256","name":"totalOriginalConsiderationItems","type":"uint256"}],"internalType":"structOrderParameters","name":"parameters","type":"tuple"},{"internalType":"uint120","name":"numerator","type":"uint120"},{"internalType":"uint120","name":"denominator","type":"uint120"},{"internalType":"bytes","name":"signature","type":"bytes"},{"internalType":"bytes","name":"extraData","type":"bytes"}],"internalType":"structAdvancedOrder[]","name":"advancedOrders","type":"tuple[]"},{"components":[{"internalType":"uint256","name":"orderIndex","type":"uint256"},{"internalType":"enumSide","name":"side","type":"uint8"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"identifier","type":"uint256"},{"internalType":"bytes32[]","name":"criteriaProof","type":"bytes32[]"}],"internalType":"structCriteriaResolver[]","name":"criteriaResolvers","type":"tuple[]"},{"components":[{"internalType":"uint256","name":"orderIndex","type":"uint256"},{"internalType":"uint256","name":"itemIndex","type":"uint256"}],"internalType":"structFulfillmentComponent[][]","name":"offerFulfillments","type":"tuple[][]"},{"components":[{"internalType":"uint256","name":"orderIndex","type":"uint256"},{"internalType":"uint256","name":"itemIndex","type":"uint256"}],"internalType":"structFulfillmentComponent[][]","name":"considerationFulfillments","type":"tuple[][]"},{"internalType":"bytes32","name":"fulfillerConduitKey","type":"bytes32"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"maximumFulfilled","type":"uint256"}],"name":"fulfillAvailableAdvancedOrders","outputs":[{"internalType":"bool[]","name":"availableOrders","type":"bool[]"},{"components":[{"components":[{"internalType":"enumItemType","name":"itemType","type":"uint8"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"identifier","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"addresspayable","name":"recipient","type":"address"}],"internalType":"structReceivedItem","name":"item","type":"tuple"},{"internalType":"address","name":"offerer","type":"address"},{"internalType":"bytes32","name":"conduitKey","type":"bytes32"}],"internalType":"structExecution[]","name":"executions","type":"tuple[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address","name":"offerer","type":"address"},{"internalType":"address","name":"zone","type":"address"},{"components":[{"internalType":"enumItemType","name":"itemType","type":"uint8"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"identifierOrCriteria","type":"uint256"},{"internalType":"uint256","name":"startAmount","type":"uint256"},{"internalType":"uint256","name":"endAmount","type":"uint256"}],"internalType":"structOfferItem[]","name":"offer","type":"tuple[]"},{"components":[{"internalType":"enumItemType","name":"itemType","type":"uint8"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"identifierOrCriteria","type":"uint256"},{"internalType":"uint256","name":"startAmount","type":"uint256"},{"internalType":"uint256","name":"endAmount","type":"uint256"},{"internalType":"addresspayable","name":"recipient","type":"address"}],"internalType":"structConsiderationItem[]","name":"consideration","type":"tuple[]"},{"internalType":"enumOrderType","name":"orderType","type":"uint8"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"bytes32","name":"zoneHash","type":"bytes32"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"bytes32","name":"conduitKey","type":"bytes32"},{"internalType":"uint256","name":"totalOriginalConsiderationItems","type":"uint256"}],"internalType":"structOrderParameters","name":"parameters","type":"tuple"},{"internalType":"bytes","name":"signature","type":"bytes"}],"internalType":"structOrder[]","name":"orders","type":"tuple[]"},{"components":[{"internalType":"uint256","name":"orderIndex","type":"uint256"},{"internalType":"uint256","name":"itemIndex","type":"uint256"}],"internalType":"structFulfillmentComponent[][]","name":"offerFulfillments","type":"tuple[][]"},{"components":[{"internalType":"uint256","name":"orderIndex","type":"uint256"},{"internalType":"uint256","name":"itemIndex","type":"uint256"}],"internalType":"structFulfillmentComponent[][]","name":"considerationFulfillments","type":"tuple[][]"},{"internalType":"bytes32","name":"fulfillerConduitKey","type":"bytes32"},{"internalType":"uint256","name":"maximumFulfilled","type":"uint256"}],"name":"fulfillAvailableOrders","outputs":[{"internalType":"bool[]","name":"availableOrders","type":"bool[]"},{"components":[{"components":[{"internalType":"enumItemType","name":"itemType","type":"uint8"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"identifier","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"addresspayable","name":"recipient","type":"address"}],"internalType":"structReceivedItem","name":"item","type":"tuple"},{"internalType":"address","name":"offerer","type":"address"},{"internalType":"bytes32","name":"conduitKey","type":"bytes32"}],"internalType":"structExecution[]","name":"executions","type":"tuple[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"considerationToken","type":"address"},{"internalType":"uint256","name":"considerationIdentifier","type":"uint256"},{"internalType":"uint256","name":"considerationAmount","type":"uint256"},{"internalType":"addresspayable","name":"offerer","type":"address"},{"internalType":"address","name":"zone","type":"address"},{"internalType":"address","name":"offerToken","type":"address"},{"internalType":"uint256","name":"offerIdentifier","type":"uint256"},{"internalType":"uint256","name":"offerAmount","type":"uint256"},{"internalType":"enumBasicOrderType","name":"basicOrderType","type":"uint8"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"bytes32","name":"zoneHash","type":"bytes32"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"bytes32","name":"offererConduitKey","type":"bytes32"},{"internalType":"bytes32","name":"fulfillerConduitKey","type":"bytes32"},{"internalType":"uint256","name":"totalOriginalAdditionalRecipients","type":"uint256"},{"components":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"addresspayable","name":"recipient","type":"address"}],"internalType":"structAdditionalRecipient[]","name":"additionalRecipients","type":"tuple[]"},{"internalType":"bytes","name":"signature","type":"bytes"}],"internalType":"structBasicOrderParameters","name":"parameters","type":"tuple"}],"name":"fulfillBasicOrder","outputs":[{"internalType":"bool","name":"fulfilled","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"considerationToken","type":"address"},{"internalType":"uint256","name":"considerationIdentifier","type":"uint256"},{"internalType":"uint256","name":"considerationAmount","type":"uint256"},{"internalType":"addresspayable","name":"offerer","type":"address"},{"internalType":"address","name":"zone","type":"address"},{"internalType":"address","name":"offerToken","type":"address"},{"internalType":"uint256","name":"offerIdentifier","type":"uint256"},{"internalType":"uint256","name":"offerAmount","type":"uint256"},{"internalType":"enumBasicOrderType","name":"basicOrderType","type":"uint8"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"bytes32","name":"zoneHash","type":"bytes32"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"bytes32","name":"offererConduitKey","type":"bytes32"},{"internalType":"bytes32","name":"fulfillerConduitKey","type":"bytes32"},{"internalType":"uint256","name":"totalOriginalAdditionalRecipients","type":"uint256"},{"components":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"addresspayable","name":"recipient","type":"address"}],"internalType":"structAdditionalRecipient[]","name":"additionalRecipients","type":"tuple[]"},{"internalType":"bytes","name":"signature","type":"bytes"}],"internalType":"structBasicOrderParameters","name":"parameters","type":"tuple"}],"name":"fulfillBasicOrder_efficient_6GL6yc","outputs":[{"internalType":"bool","name":"fulfilled","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address","name":"offerer","type":"address"},{"internalType":"address","name":"zone","type":"address"},{"components":[{"internalType":"enumItemType","name":"itemType","type":"uint8"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"identifierOrCriteria","type":"uint256"},{"internalType":"uint256","name":"startAmount","type":"uint256"},{"internalType":"uint256","name":"endAmount","type":"uint256"}],"internalType":"structOfferItem[]","name":"offer","type":"tuple[]"},{"components":[{"internalType":"enumItemType","name":"itemType","type":"uint8"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"identifierOrCriteria","type":"uint256"},{"internalType":"uint256","name":"startAmount","type":"uint256"},{"internalType":"uint256","name":"endAmount","type":"uint256"},{"internalType":"addresspayable","name":"recipient","type":"address"}],"internalType":"structConsiderationItem[]","name":"consideration","type":"tuple[]"},{"internalType":"enumOrderType","name":"orderType","type":"uint8"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"bytes32","name":"zoneHash","type":"bytes32"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"bytes32","name":"conduitKey","type":"bytes32"},{"internalType":"uint256","name":"totalOriginalConsiderationItems","type":"uint256"}],"internalType":"structOrderParameters","name":"parameters","type":"tuple"},{"internalType":"bytes","name":"signature","type":"bytes"}],"internalType":"structOrder","name":"order","type":"tuple"},{"internalType":"bytes32","name":"fulfillerConduitKey","type":"bytes32"}],"name":"fulfillOrder","outputs":[{"internalType":"bool","name":"fulfilled","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"contractOfferer","type":"address"}],"name":"getContractOffererNonce","outputs":[{"internalType":"uint256","name":"nonce","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"offerer","type":"address"}],"name":"getCounter","outputs":[{"internalType":"uint256","name":"counter","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"offerer","type":"address"},{"internalType":"address","name":"zone","type":"address"},{"components":[{"internalType":"enumItemType","name":"itemType","type":"uint8"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"identifierOrCriteria","type":"uint256"},{"internalType":"uint256","name":"startAmount","type":"uint256"},{"internalType":"uint256","name":"endAmount","type":"uint256"}],"internalType":"structOfferItem[]","name":"offer","type":"tuple[]"},{"components":[{"internalType":"enumItemType","name":"itemType","type":"uint8"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"identifierOrCriteria","type":"uint256"},{"internalType":"uint256","name":"startAmount","type":"uint256"},{"internalType":"uint256","name":"endAmount","type":"uint256"},{"internalType":"addresspayable","name":"recipient","type":"address"}],"internalType":"structConsiderationItem[]","name":"consideration","type":"tuple[]"},{"internalType":"enumOrderType","name":"orderType","type":"uint8"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"bytes32","name":"zoneHash","type":"bytes32"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"bytes32","name":"conduitKey","type":"bytes32"},{"internalType":"uint256","name":"counter","type":"uint256"}],"internalType":"structOrderComponents","name":"order","type":"tuple"}],"name":"getOrderHash","outputs":[{"internalType":"bytes32","name":"orderHash","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"orderHash","type":"bytes32"}],"name":"getOrderStatus","outputs":[{"internalType":"bool","name":"isValidated","type":"bool"},{"internalType":"bool","name":"isCancelled","type":"bool"},{"internalType":"uint256","name":"totalFilled","type":"uint256"},{"internalType":"uint256","name":"totalSize","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"incrementCounter","outputs":[{"internalType":"uint256","name":"newCounter","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"information","outputs":[{"internalType":"string","name":"version","type":"string"},{"internalType":"bytes32","name":"domainSeparator","type":"bytes32"},{"internalType":"address","name":"conduitController","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address","name":"offerer","type":"address"},{"internalType":"address","name":"zone","type":"address"},{"components":[{"internalType":"enumItemType","name":"itemType","type":"uint8"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"identifierOrCriteria","type":"uint256"},{"internalType":"uint256","name":"startAmount","type":"uint256"},{"internalType":"uint256","name":"endAmount","type":"uint256"}],"internalType":"structOfferItem[]","name":"offer","type":"tuple[]"},{"components":[{"internalType":"enumItemType","name":"itemType","type":"uint8"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"identifierOrCriteria","type":"uint256"},{"internalType":"uint256","name":"startAmount","type":"uint256"},{"internalType":"uint256","name":"endAmount","type":"uint256"},{"internalType":"addresspayable","name":"recipient","type":"address"}],"internalType":"structConsiderationItem[]","name":"consideration","type":"tuple[]"},{"internalType":"enumOrderType","name":"orderType","type":"uint8"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"bytes32","name":"zoneHash","type":"bytes32"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"bytes32","name":"conduitKey","type":"bytes32"},{"internalType":"uint256","name":"totalOriginalConsiderationItems","type":"uint256"}],"internalType":"structOrderParameters","name":"parameters","type":"tuple"},{"internalType":"uint120","name":"numerator","type":"uint120"},{"internalType":"uint120","name":"denominator","type":"uint120"},{"internalType":"bytes","name":"signature","type":"bytes"},{"internalType":"bytes","name":"extraData","type":"bytes"}],"internalType":"structAdvancedOrder[]","name":"orders","type":"tuple[]"},{"components":[{"internalType":"uint256","name":"orderIndex","type":"uint256"},{"internalType":"enumSide","name":"side","type":"uint8"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"identifier","type":"uint256"},{"internalType":"bytes32[]","name":"criteriaProof","type":"bytes32[]"}],"internalType":"structCriteriaResolver[]","name":"criteriaResolvers","type":"tuple[]"},{"components":[{"components":[{"internalType":"uint256","name":"orderIndex","type":"uint256"},{"internalType":"uint256","name":"itemIndex","type":"uint256"}],"internalType":"structFulfillmentComponent[]","name":"offerComponents","type":"tuple[]"},{"components":[{"internalType":"uint256","name":"orderIndex","type":"uint256"},{"internalType":"uint256","name":"itemIndex","type":"uint256"}],"internalType":"structFulfillmentComponent[]","name":"considerationComponents","type":"tuple[]"}],"internalType":"structFulfillment[]","name":"fulfillments","type":"tuple[]"},{"internalType":"address","name":"recipient","type":"address"}],"name":"matchAdvancedOrders","outputs":[{"components":[{"components":[{"internalType":"enumItemType","name":"itemType","type":"uint8"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"identifier","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"addresspayable","name":"recipient","type":"address"}],"internalType":"structReceivedItem","name":"item","type":"tuple"},{"internalType":"address","name":"offerer","type":"address"},{"internalType":"bytes32","name":"conduitKey","type":"bytes32"}],"internalType":"structExecution[]","name":"executions","type":"tuple[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address","name":"offerer","type":"address"},{"internalType":"address","name":"zone","type":"address"},{"components":[{"internalType":"enumItemType","name":"itemType","type":"uint8"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"identifierOrCriteria","type":"uint256"},{"internalType":"uint256","name":"startAmount","type":"uint256"},{"internalType":"uint256","name":"endAmount","type":"uint256"}],"internalType":"structOfferItem[]","name":"offer","type":"tuple[]"},{"components":[{"internalType":"enumItemType","name":"itemType","type":"uint8"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"identifierOrCriteria","type":"uint256"},{"internalType":"uint256","name":"startAmount","type":"uint256"},{"internalType":"uint256","name":"endAmount","type":"uint256"},{"internalType":"addresspayable","name":"recipient","type":"address"}],"internalType":"structConsiderationItem[]","name":"consideration","type":"tuple[]"},{"internalType":"enumOrderType","name":"orderType","type":"uint8"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"bytes32","name":"zoneHash","type":"bytes32"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"bytes32","name":"conduitKey","type":"bytes32"},{"internalType":"uint256","name":"totalOriginalConsiderationItems","type":"uint256"}],"internalType":"structOrderParameters","name":"parameters","type":"tuple"},{"internalType":"bytes","name":"signature","type":"bytes"}],"internalType":"structOrder[]","name":"orders","type":"tuple[]"},{"components":[{"components":[{"internalType":"uint256","name":"orderIndex","type":"uint256"},{"internalType":"uint256","name":"itemIndex","type":"uint256"}],"internalType":"structFulfillmentComponent[]","name":"offerComponents","type":"tuple[]"},{"components":[{"internalType":"uint256","name":"orderIndex","type":"uint256"},{"internalType":"uint256","name":"itemIndex","type":"uint256"}],"internalType":"structFulfillmentComponent[]","name":"considerationComponents","type":"tuple[]"}],"internalType":"structFulfillment[]","name":"fulfillments","type":"tuple[]"}],"name":"matchOrders","outputs":[{"components":[{"components":[{"internalType":"enumItemType","name":"itemType","type":"uint8"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"identifier","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"addresspayable","name":"recipient","type":"address"}],"internalType":"structReceivedItem","name":"item","type":"tuple"},{"internalType":"address","name":"offerer","type":"address"},{"internalType":"bytes32","name":"conduitKey","type":"bytes32"}],"internalType":"structExecution[]","name":"executions","type":"tuple[]"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"contractName","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address","name":"offerer","type":"address"},{"internalType":"address","name":"zone","type":"address"},{"components":[{"internalType":"enumItemType","name":"itemType","type":"uint8"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"identifierOrCriteria","type":"uint256"},{"internalType":"uint256","name":"startAmount","type":"uint256"},{"internalType":"uint256","name":"endAmount","type":"uint256"}],"internalType":"structOfferItem[]","name":"offer","type":"tuple[]"},{"components":[{"internalType":"enumItemType","name":"itemType","type":"uint8"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"identifierOrCriteria","type":"uint256"},{"internalType":"uint256","name":"startAmount","type":"uint256"},{"internalType":"uint256","name":"endAmount","type":"uint256"},{"internalType":"addresspayable","name":"recipient","type":"address"}],"internalType":"structConsiderationItem[]","name":"consideration","type":"tuple[]"},{"internalType":"enumOrderType","name":"orderType","type":"uint8"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"bytes32","name":"zoneHash","type":"bytes32"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"bytes32","name":"conduitKey","type":"bytes32"},{"internalType":"uint256","name":"totalOriginalConsiderationItems","type":"uint256"}],"internalType":"structOrderParameters","name":"parameters","type":"tuple"},{"internalType":"bytes","name":"signature","type":"bytes"}],"internalType":"structOrder[]","name":"orders","type":"tuple[]"}],"name":"validate","outputs":[{"internalType":"bool","name":"validated","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"BadContractSignature","type":"error"},{"inputs":[],"name":"BadFraction","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"BadReturnValueFromERC20OnTransfer","type":"error"},{"inputs":[{"internalType":"uint8","name":"v","type":"uint8"}],"name":"BadSignatureV","type":"error"},{"inputs":[],"name":"CannotCancelOrder","type":"error"},{"inputs":[],"name":"ConsiderationCriteriaResolverOutOfRange","type":"error"},{"inputs":[],"name":"ConsiderationLengthNotEqualToTotalOriginal","type":"error"},{"inputs":[{"internalType":"uint256","name":"orderIndex","type":"uint256"},{"internalType":"uint256","name":"considerationIndex","type":"uint256"},{"internalType":"uint256","name":"shortfallAmount","type":"uint256"}],"name":"ConsiderationNotMet","type":"error"},{"inputs":[],"name":"CriteriaNotEnabledForItem","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"identifiers","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"ERC1155BatchTransferGenericFailure","type":"error"},{"inputs":[],"name":"InexactFraction","type":"error"},{"inputs":[],"name":"InsufficientNativeTokensSupplied","type":"error"},{"inputs":[],"name":"Invalid1155BatchTransferEncoding","type":"error"},{"inputs":[],"name":"InvalidBasicOrderParameterEncoding","type":"error"},{"inputs":[{"internalType":"address","name":"conduit","type":"address"}],"name":"InvalidCallToConduit","type":"error"},{"inputs":[{"internalType":"bytes32","name":"conduitKey","type":"bytes32"},{"internalType":"address","name":"conduit","type":"address"}],"name":"InvalidConduit","type":"error"},{"inputs":[{"internalType":"bytes32","name":"orderHash","type":"bytes32"}],"name":"InvalidContractOrder","type":"error"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"InvalidERC721TransferAmount","type":"error"},{"inputs":[],"name":"InvalidFulfillmentComponentData","type":"error"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"InvalidMsgValue","type":"error"},{"inputs":[],"name":"InvalidNativeOfferItem","type":"error"},{"inputs":[],"name":"InvalidProof","type":"error"},{"inputs":[{"internalType":"bytes32","name":"orderHash","type":"bytes32"}],"name":"InvalidRestrictedOrder","type":"error"},{"inputs":[],"name":"InvalidSignature","type":"error"},{"inputs":[],"name":"InvalidSigner","type":"error"},{"inputs":[{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"}],"name":"InvalidTime","type":"error"},{"inputs":[{"internalType":"uint256","name":"fulfillmentIndex","type":"uint256"}],"name":"MismatchedFulfillmentOfferAndConsiderationComponents","type":"error"},{"inputs":[{"internalType":"enumSide","name":"side","type":"uint8"}],"name":"MissingFulfillmentComponentOnAggregation","type":"error"},{"inputs":[],"name":"MissingItemAmount","type":"error"},{"inputs":[],"name":"MissingOriginalConsiderationItems","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"NativeTokenTransferGenericFailure","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"NoContract","type":"error"},{"inputs":[],"name":"NoReentrantCalls","type":"error"},{"inputs":[],"name":"NoSpecifiedOrdersAvailable","type":"error"},{"inputs":[],"name":"OfferAndConsiderationRequiredOnFulfillment","type":"error"},{"inputs":[],"name":"OfferCriteriaResolverOutOfRange","type":"error"},{"inputs":[{"internalType":"bytes32","name":"orderHash","type":"bytes32"}],"name":"OrderAlreadyFilled","type":"error"},{"inputs":[{"internalType":"enumSide","name":"side","type":"uint8"}],"name":"OrderCriteriaResolverOutOfRange","type":"error"},{"inputs":[{"internalType":"bytes32","name":"orderHash","type":"bytes32"}],"name":"OrderIsCancelled","type":"error"},{"inputs":[{"internalType":"bytes32","name":"orderHash","type":"bytes32"}],"name":"OrderPartiallyFilled","type":"error"},{"inputs":[],"name":"PartialFillsNotEnabledForOrder","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"identifier","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokenTransferGenericFailure","type":"error"},{"inputs":[{"internalType":"uint256","name":"orderIndex","type":"uint256"},{"internalType":"uint256","name":"considerationIndex","type":"uint256"}],"name":"UnresolvedConsiderationCriteria","type":"error"},{"inputs":[{"internalType":"uint256","name":"orderIndex","type":"uint256"},{"internalType":"uint256","name":"offerIndex","type":"uint256"}],"name":"UnresolvedOfferCriteria","type":"error"},{"inputs":[],"name":"UnusedItemParameters","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newCounter","type":"uint256"},{"indexed":true,"internalType":"address","name":"offerer","type":"address"}],"name":"CounterIncremented","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"orderHash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"offerer","type":"address"},{"indexed":true,"internalType":"address","name":"zone","type":"address"}],"name":"OrderCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"orderHash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"offerer","type":"address"},{"indexed":true,"internalType":"address","name":"zone","type":"address"},{"indexed":false,"internalType":"address","name":"recipient","type":"address"},{"components":[{"internalType":"enumItemType","name":"itemType","type":"uint8"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"identifier","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"indexed":false,"internalType":"structSpentItem[]","name":"offer","type":"tuple[]"},{"components":[{"internalType":"enumItemType","name":"itemType","type":"uint8"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"identifier","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"addresspayable","name":"recipient","type":"address"}],"indexed":false,"internalType":"structReceivedItem[]","name":"consideration","type":"tuple[]"}],"name":"OrderFulfilled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"orderHash","type":"bytes32"},{"components":[{"internalType":"address","name":"offerer","type":"address"},{"internalType":"address","name":"zone","type":"address"},{"components":[{"internalType":"enumItemType","name":"itemType","type":"uint8"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"identifierOrCriteria","type":"uint256"},{"internalType":"uint256","name":"startAmount","type":"uint256"},{"internalType":"uint256","name":"endAmount","type":"uint256"}],"internalType":"structOfferItem[]","name":"offer","type":"tuple[]"},{"components":[{"internalType":"enumItemType","name":"itemType","type":"uint8"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"identifierOrCriteria","type":"uint256"},{"internalType":"uint256","name":"startAmount","type":"uint256"},{"internalType":"uint256","name":"endAmount","type":"uint256"},{"internalType":"addresspayable","name":"recipient","type":"address"}],"internalType":"structConsiderationItem[]","name":"consideration","type":"tuple[]"},{"internalType":"enumOrderType","name":"orderType","type":"uint8"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"bytes32","name":"zoneHash","type":"bytes32"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"bytes32","name":"conduitKey","type":"bytes32"},{"internalType":"uint256","name":"totalOriginalConsiderationItems","type":"uint256"}],"indexed":false,"internalType":"structOrderParameters","name":"orderParameters","type":"tuple"}],"name":"OrderValidated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32[]","name":"orderHashes","type":"bytes32[]"}],"name":"OrdersMatched","type":"event"}];

const seaportAddr = "0x00000000000001ad428e4906ae43d8f9852d0dd6";
const openseaConduit = "0x1E0049783F008A0085193E00003D00cd54003c71";
var sm2PublicKey = "04a8bff093940a2fc002d817770318b7efee5ed98c0d9abc6c6b447b8ff833d4d17bbb8f6d3bd5c621ad2096a526db119520e50c87f2863405318c55dfecea3170";

const chain_rpc = "https://arb1.arbitrum.io/rpc";
// const chain_rpc = "https://bsc-dataseed.binance.org";
const web3 = new Web3(chain_rpc);

const pow18 = 1000000000000000000;

function mathDiv(a,b){
   let x = new BigNumber(a);
   let y = new BigNumber(b);
   if(y==0 || x==NaN || y==NaN)return 0;
   return x.dividedBy(y);
}

function mathMul(a,b){
   let x = new BigNumber(a);
   let y = new BigNumber(b);
   if(x==NaN || y==NaN)return 0;
   return x.multipliedBy(y);
}

function mathPow(a,b){
   let x = new BigNumber(a);
   let y = new BigNumber(b);
   if(x==NaN || y==NaN)return 0;
   return x.exponentiatedBy(y);
}

function mathFixed(val,decimals) {
   let x = new BigNumber(val);
   if(x==NaN)return 0;
   return x.toFixed(decimals,1);
} 


async function loadBalance() {
   let addr = document.getElementById("addr").value;
   if(!addr) {
      alert("请输入地址");
      return;
   }
   $("#loadBalanceBtn").css("display", "none");
   try {
      const balance = await web3.eth.getBalance(addr);
      let amount = mathDiv(balance, pow18);
      document.getElementById("balance").value = mathFixed(amount, 6);
   } catch (e) {
   }
   $("#loadBalanceBtn").css("display", "block");
}

async function loadNFT() {
   if(upTimerList.length > 0) {
      alert("当前有待上架的任务，请取消任务，或刷新页面");
      return;
   }

   let addr = document.getElementById("addr").value;
   if(!addr) {
      alert("请输入地址");
      return;
   }
   let collection = document.getElementById("collection").value;
   
   $("#loadNFTBtn").css("display", "none");
   $("#tableBoxA").empty();
   $("#tableBoxA").html('<p id="hintA" style="text-align: center">加载中...</p>');
   let center = "";
   let tokenList = await this.getAddrNftList(collection, addr);
   if(tokenList) {
      for(let t=0; t<tokenList.length; t++) {
         let token = tokenList[t];
         let tokenId = token.tokenId;
         let price = mathDiv(token.price, pow18);
         center += "<tr>";
         center += "<td>" + tokenId + "</td>";
         center += "<td>" + mathFixed(price, 6) + "</td>";
         center += '<td><input type="text" placeholder="时间" id="upTime_'+tokenId+'"/>秒</td>';
         center += '<td><input type="text" placeholder="价格" id="upPrice_'+tokenId+'"/></td>';
         center += "<td>";
            let tid = "'" + tokenId + "'";
            center += '<div class="inp-btn" style="width:40px;" onclick="upOpensea('+tid+')" id="upBtn_'+tokenId+'">上架</div>';
            center += '<div class="inp-btn" style="width:40px;display:none;"  onclick="closeUpOpensea('+tid+')" id="closeUpBtn_'+tokenId+'">取消</div>';
            center += '<p id="upSts_'+tokenId+'" style="display:none;"></p>';
         center += "</td>";

         center += "</tr>"
      }
   }
   let top = "<table  style=\"width: 100%;\" border=\"2\">\n" +
      "      <tr >\n" +
      "          <th style=\"width: 10%; height: 30px;\">tokenId</th>\n" +
      "          <th style=\"width: 10%; height: 30px;\">购买价格</th>\n" +
      "          <th style=\"width: 30%; height: 30px;\">上架倒计时</th>\n" +
      "          <th style=\"width: 30%; height: 30px;\">上架价格</th>\n" +
      "          <th style=\"width: 20%; height: 30px;\">操作</th>\n" +
      "      </tr>"
   let bottom = "</table>"
   document.getElementById("tableBoxA").innerHTML = top + center + bottom;
   $("#loadNFTBtn").css("display", "block");

   //查询授权 
   this.checkApprove(collection, addr);
   
}
var openseaApproved = false;
async function checkApprove(slug, accountAddr) {
   if(!accountAddr) {
      return;
   }
   let collectionData = await this.getCollection(slug);
   const nft = new web3.eth.Contract(nftabi, collectionData.address);
   let isApproved = await nft.methods.isApprovedForAll(accountAddr, openseaConduit).call();
   if(isApproved) {
      openseaApproved = true;
      $("#approvedP").html("已授权opensea");
      $("#approvedP").css("display","block");
   } else {
      $("#approvedBtn").css("display","block");
   }
}

async function setApproval() {
   
   let accountAddr = document.getElementById("addr").value;
   let pk = document.getElementById("pk").value;
   if(!pk) {
      alert("请输入地址对应的私钥");
      return;
   }
   $("#approvedBtn").css("display","none");
   $("#approvedP").css("display","block");
   $("#approvedP").html("授权中...");
   try {
      let slug = document.getElementById("collection").value;
      let collectionData = await this.getCollection(slug);
      const nft = new web3.eth.Contract(nftabi, collectionData.address);
      let isApproved = await nft.methods.isApprovedForAll(accountAddr, openseaConduit).call();
      if(isApproved) {
         openseaApproved = true;
         $("#approvedP").html("已授权opensea");
         return;
      }
      let nftAddr = collectionData.address;
      //授权
      let setApproval = nft.methods.setApprovalForAll(openseaConduit, true);
      let encodedABI = setApproval.encodeABI();
      let tx = {
            from: accountAddr,
            to: nftAddr,
            gas: 2500000,
            data: encodedABI
      };
      web3.eth.accounts.signTransaction(tx, pk).then(signed => {
            var tran = web3.eth.sendSignedTransaction(signed.rawTransaction);
            tran.on('error', (error)=>{
               $("#approvedP").html("授权失败");
               $("#approvedBtn").css("display","block");
            });
            tran.on('transactionHash',(hash) => {
               openseaApproved = true;
               $("#approvedP").html("已授权opensea");
               $("#approvedP").css("display","block");
            });
      });
   } catch(e) {
      console.log(e.message);
      $("#approvedP").html("授权失败");
      $("#approvedBtn").css("display","block");
   }
    
}

const upTimerList = [];
async function upOpensea(tokenId) {
   let upTimeStr = document.getElementById("upTime_"+tokenId).value;
   if(!upTimeStr) {
      alert("请输入上架时间");
      return;
   }
   let upPriceStr = document.getElementById("upPrice_"+tokenId).value;
   if(!upPriceStr) {
      alert("请输入上架价格");
      return;
   }
   let pk = document.getElementById("pk").value;
   if(!pk) {
      alert("请输入地址对应的私钥");
      return;
   }
   if(!openseaApproved) {
      $("#approvedBtn").css("display","block");
      alert("请先授权opensea");
      return;
   }

   let timer = setInterval("upRemind('"+tokenId+"')", 1000);
   upTimerList.push({"tokenId":tokenId, "timer":timer});
   $("#upTime_"+tokenId).css("color","red");
   $("#upBtn_"+tokenId).css("display", "none");
   $("#closeUpBtn_"+tokenId).css("display", "block");
}

async function upRemind(tokenId) {
   let upTimeStr = document.getElementById("upTime_"+tokenId).value;
   let upTime = parseInt(upTimeStr);
   if(upTime < 1) {
      for(let i=0; i<upTimerList.length; i++) {
         let data = upTimerList[i];
         if(data.tokenId == tokenId) {
            upTimerList.splice(i, 1);
            clearInterval(data.timer);
            //自动上架
            this.autoUpOpensea(tokenId);
            break;
         }
      }
   } else {
      document.getElementById("upTime_"+tokenId).value = upTime - 1;
   }
}

async function closeUpOpensea(tokenId) {
   for(let i=0; i<upTimerList.length; i++) {
      let data = upTimerList[i];
      if(data.tokenId == tokenId) {
         upTimerList.splice(i, 1);
         clearInterval(data.timer);
         break;
      }
   }
   document.getElementById("upTime_"+tokenId).value = '';
   $("#upTime_"+tokenId).css("color","");
   $("#upBtn_"+tokenId).css("display", "block");
   $("#closeUpBtn_"+tokenId).css("display", "none");
}

async function autoUpOpensea(tokenId) {
   $("#upBtn_"+tokenId).css("display", "none");
   $("#closeUpBtn_"+tokenId).css("display", "none");
   $("#upSts_"+tokenId).css("color","red");
   $("#upSts_"+tokenId).css("display","block");
   $("#upSts_"+tokenId).html("上架中...");

   let accountAddr = document.getElementById("addr").value;
   let pk = document.getElementById("pk").value;
   let slug = document.getElementById("collection").value;
   let upPriceStr = document.getElementById("upPrice_"+tokenId).value;
   if(!upPriceStr || !accountAddr) {
      alert("请设置价格");
      return;
   }
   let upPrice = new BigNumber(upPriceStr);
   if(!upPrice.isGreaterThan(0)) {
      alert("请设置价格");
      return;
   }

   //失败重试
   let upOpt = await this.getUpOpt(tokenId);
   if(upOpt.num >= 3) {
      for(let i=0; i<upOpts.length; i++) {
         if(upOpts[i].tokenId == tokenId) {
            upOpts.splice(i, 1);
            return;
         }
      }
   } else {
      this.addUpOptNum(tokenId);
      if(upOpt.num > 1) {
         $("#upSts_"+tokenId).html("上架重试中...");
         await this.sleep(10000);//10秒
      }
   }

   //上架opensea
   let startTime = Math.floor((new Date().getTime()) / 1000);
   let endTime = startTime + 2592000;
   let state = await createOrder(accountAddr, pk, tokenId, upPriceStr, slug, startTime, endTime);
   if(state) {
      $("#upSts_"+tokenId).css("color","green");
      $("#upSts_"+tokenId).html("上架成功");
   } else {
      $("#upSts_"+tokenId).html("上架失败");
      //重试
      this.autoUpOpensea(tokenId);
   }
}

var upOpts = [];
async function getUpOpt(tokenId) {
   let upOpt;
   for(let i=0; i<upOpts.length; i++) {
      if(upOpts[i].tokenId == tokenId) {
         upOpt = upOpts[i];
      }
   }
   if(!upOpt) {
      upOpt = {"tokenId":tokenId, "num":1};
      upOpts.push(upOpt);
   }
   return upOpt;
}
async function addUpOptNum(tokenId) {
   for(let i=0; i<upOpts.length; i++) {
      if(upOpts[i].tokenId == tokenId) {
         upOpts[i].num = upOpts[i].num + 1;
         return;
      }
   }
}


async function createOrder(account, pk, tokenId, amount, slug, startTime, endTime) {
   let params = {
      offerer: account,
      pk: pk,
      tokenId: tokenId,
      amount: amount,
      slug: slug,
      startTime: startTime,
      endTime: endTime
   };
   let encryptData = sm2Encrypt(JSON.stringify(params), sm2PublicKey, 0);

   // console.log(encryptData);
   return new Promise((resolve) => {
      $.ajax({
         type: "post",
         url: "api/createAnOrder",
         dataType: "json",
         data: {order: encryptData},
         success: function (res) {
            console.log(JSON.stringify(res.data));
            resolve(res.data);
         }
      });
  });
}

async function getAddrNftList(slug, addr) {
   let collectionData = await this.getCollection(slug);
   let nftAddr = collectionData.address;
   let result = [];
   $.ajax({
      async: false,
      type: "get",
      url: "api/getAddrNftList",
      dataType: "json",
      data: {"account":addr, "nftAddr": nftAddr},
      success: function (res) {
         result = res.data;
         console.log("nftlist:"+JSON.stringify(res.data));
      }
   });   
   return result;
}

async function getCollection(slug) {
   return new Promise((resolve) => {
      for(let c=0; c<collectionsData.length; c++) {
         if(collectionsData[c].collection == slug) {
            resolve(collectionsData[c]);
            return;
         }
      }

      $.ajax({
         type: "get",
         url: "api/getCollections",
         dataType: "json",
         success: function (res) {
            let data = res.data;
            for (let i=0; i<data.length; i++) {
               let collection = JSON.parse(data[i]);
               if(collection.collection == slug) {
                  resolve(collection);
                  return;
               }
            }
         }
      });
  });

}

var collectionsData = [];
$(function(){
   $.ajax({
      type: "get",
      url: "api/getCollections",
      dataType: "json",
      success: function (res) {
         console.log(JSON.stringify(res.data));
         let data = res.data;
         for (let i=0; i<data.length; i++) {
            let collection = JSON.parse(data[i]);
            collectionsData.push(collection);
         }
      }
   });

}); 

async function onItem(index) {
   this.selectCollection = this.collectionsData[index];
   document.getElementById("selectTitle").innerHTML = this.selectCollection.collection;
}

async function onNftItem(index) {
   this.selectNFTCollection = this.collectionsData[index];
   document.getElementById("selectNFTTitle").innerHTML = this.selectNFTCollection.collection;
}

var orderList = [];
async function getLoad() {
   let nftCollection = document.getElementById("buyCollection").value;
   console.log(nftCollection);

   if(!nftCollection) {
      alert("请填写NFT项目");
      return;
   }
   let nftData = await this.getCollection(nftCollection);
   console.log(nftData);
   if(!nftData) {
      orderList = [];
      $("#tableBoxB").html('<p style="text-align: center">没查到数据</p>');
      $("#loadBtn").css('display','block');
      return;
   }

   $("#tableBoxB").empty();
   $("#tableBoxB").html('<p style="text-align: center">加载中...</p>');
   
   $("#loadBtn").css('display','none');
   $("#buyBtn").css('display','block');
   $("#stopBuyBtn").css('display','none');

   let addr = document.getElementById("addr").value;
   if(addr) {
      addr = addr.toLocaleLowerCase();
   }

   $.ajax({
      type: "get",
      url: "api/getOrderList",
      dataType: "json",
      data: {
         "collection": nftCollection
      },
      success: function (res) {
         console.log(JSON.stringify(res.data));
         let data = res.data.data.data;
         let list = data.collectionItems.edges;
         let center = "";
         for(let i = 0; i < list.length; i++) {
            let bestAskV2 = list[i].node.orderData.bestAskV2;
            if(bestAskV2==null || bestAskV2=="") {
               continue;
            }
            let tokenId = list[i].node.tokenId;
            let holder = bestAskV2.maker.address;
            if(holder.toLocaleLowerCase() == addr) {
               continue;
            }
            let price = bestAskV2.perUnitPriceType.unit;
            let symbol = bestAskV2.perUnitPriceType.symbol;
            let idx = i+1;
            let tdId = "buySts_"+tokenId;
            center += "<tr id='tr" + i  + "'><td>" + idx + "</td><td>" + tokenId + "</td><td>" + holder + "</td><td>"  + price + symbol +  "</td><td id='"+tdId+"'></td></tr>";
            orderList.push({"tokenId":tokenId, "price":price, "collection": nftCollection, "holder": holder});
         }
         let top = "<table  style=\"width: 100%;\" border=\"2\">\n" +
            "      <tr >\n" +
            "          <th style=\"width: 5%; height: 10px;\">序号</th>\n" +
            "          <th style=\"width: 10%; height: 20px;\">NFTID</th>\n" +
            "          <th style=\"width: 50%; height: 30px;\">当前持有人</th>\n" +
            "          <th style=\"width: 15%; height: 30px;\">当前价格</th>\n" +
            "          <th style=\"width: 30%; height: 30px;\">购买状态</th>\n" +
            "      </tr>"
         let bottom = "</table>"
         document.getElementById("tableBoxB").innerHTML = top + center + bottom;

         $("#loadBtn").css('display','block');
         buyAddrIdx = 0;
      },
      error: function (res) {
         $("#tableBoxB").html('<p style="text-align: center">加载失败，请重试</p>');
         $("#loadBtn").css('display','block');
      }
   });

   setInterval(function(){
      $("#loadBtn").css('display','block');
      buyAddrIdx = 0;
   }, 30000);
}

var currentBuyOrder = 0;
var stopBuy = true;
var buyAddrIdx = 0;
async function onBuy() {
   if(this.orderList.length < 1) {
      alert("请先加载nft");
      return;
   }

   let buyAddress = document.getElementById("addr").value;
   if(!buyAddress) {
      alert("请输入地址");
      return;
   }
   let pk = document.getElementById("pk").value;
   if(!pk) {
      alert("请输入地址对应的私钥");
      return;
   }

   let minTimeStr = document.getElementById("minTime").value;
   let maxTimeStr = document.getElementById("maxTime").value;
   if(!minTimeStr || !maxTimeStr) {
      alert("请输入时间");
      return;
   }
   let maxAmountStr = document.getElementById("maxAmount").value;
   if(!maxAmountStr) {
      alert("请输入购买最大价格");
      return;
   }
   let buyNumberStr = document.getElementById("buyNumber").value;
   if(!buyNumberStr) {
      alert("请输入最大购买数量");
      return;
   }

   let minTime = parseInt(minTimeStr);
   let maxTime = parseInt(maxTimeStr);
   let maxAmount = new BigNumber(maxAmountStr);
   //最大购买数量
   let maxBuy = parseInt(buyNumberStr);

   if(minTime > maxTime) {
      alert("最大间隔时间不能小于最小间隔时间")
   }

   $("#buyBtn").css('display','none');
   $("#stopBuyBtn").css('display','block');
   this.stopBuy = false;

   for(let i=currentBuyOrder; i<this.orderList.length; i++) {
      if(buyAddrIdx >= maxBuy) {
         $("#stopBuyBtn").css('display','none');
         return;
      }
      let order = orderList[i];

      //购买人不能是自己
      if(order.holder) {
         if(order.holder.toLocaleLowerCase() == buyAddress.toLocaleLowerCase()) {
            continue;
         }
      }

      //判断价格
      let price = new BigNumber(order.price);
      if(price.isGreaterThan(maxAmount)) {
         continue;
      }

      nextSec = this.rand(minTime, maxTime);
      this.buyTokenId = order.tokenId;
      this.timer = setInterval("buyRemind()", 1000);
      currentBuyOrder = i;
      await this.sleep(nextSec*1000);

      if(this.stopBuy) {
         return;
      }
      buyAddrIdx ++;

      //检查账户余额
      const balance = await web3.eth.getBalance(buyAddress);
      let amount = mathDiv(balance, pow18);
      if(price.isGreaterThan(amount)) {
         $("#buySts_"+this.buyTokenId).html("余额不足");
         return;
      }
      //购买
      this.buy(order, buyAddress, pk);
   }

}

async function stopAutoBuy() {
   this.stopBuy = true;
   clearInterval(this.timer);
   if(this.sleepTimeoutId) {
      clearTimeout(this.sleepTimeoutId);
      this.sleepResolve();
   }
   if(this.nextSec > 0) {
      $("#buySts_"+this.buyTokenId).html("");
   }
   $("#buyBtn").css('display','block');
   $("#stopBuyBtn").css('display','none');
}

let sleepResolve;
let sleepTimeoutId;
function sleep(time) {
   return new Promise((resolve) =>{
      this.sleepResolve = resolve;
      this.sleepTimeoutId = setTimeout(resolve, time);
   });
}

var buyTokenId;
var nextSec;
var timer;
function buyRemind() {
   nextSec--;
   $("#buySts_"+this.buyTokenId).css("color", "red");
   if(nextSec <= 0) {
      clearInterval(this.timer);
      $("#buySts_"+this.buyTokenId).html("购买中...");
   } else {
      $("#buySts_"+this.buyTokenId).html(nextSec+"秒后购买");
   }
}

var buyOpts = [];
async function getBuyOpt(tokenId) {
   let buyOpt;
   for(let i=0; i<buyOpts.length; i++) {
      if(buyOpts[i].tokenId == tokenId) {
         buyOpt = buyOpts[i];
      }
   }
   if(!buyOpt) {
      buyOpt = {"tokenId":tokenId, "num":1};
      buyOpts.push(buyOpt);
   }
   return buyOpt;
}
async function addBuyOptNum(tokenId) {
   for(let i=0; i<buyOpts.length; i++) {
      if(buyOpts[i].tokenId == tokenId) {
         buyOpts[i].num = buyOpts[i].num + 1;
         return;
      }
   }
}

async function getProposeGasPrice() {
   return new Promise((resolve) =>{
      $.ajax({
         async: false,
         type: "get",
         url: "api/getProposeGasPrice",
         dataType: "json",
         success: function (res) {
            console.log(JSON.stringify(res));
            resolve(res.data);
         }
      });
   });
}

async function buy(data, buyAddress, privateKey) {
   let tokenId = data.tokenId;
   let buyOpt = await this.getBuyOpt(tokenId);
   if(buyOpt.num >= 3) {
      for(let i=0; i<buyOpts.length; i++) {
         if(buyOpts[i].tokenId == tokenId) {
            buyOpts.splice(i, 1);
            return;
         }
      }
   } else {
      if(buyOpt.num > 1) {
         $("#buySts_"+tokenId).html("购买重试中...");
         await this.sleep(10000);//10秒
      }
      this.addBuyOptNum(tokenId);
   }
   let state = false;
   let orderData = await this.getOrderData(data.collection, tokenId);
   console.log(JSON.stringify(orderData));
   if(orderData && orderData.input_data) {
         // const seaport = new web3.eth.Contract(seaportabi, seaportAddr);
         // let gasPrice = web3.utils.toWei("0.2","gwei");
         // //计算gas
         // console.log("from:"+buyAddress+", value:"+orderData.value+", gasPrice:"+gasPrice);
         // let gasAmount = await seaport.methods.fulfillBasicOrder_efficient_6GL6yc(orderData.input_data.parameters).estimateGas({from:buyAddress});
         // console.log("gas:"+gasAmount);
         // return;
      try {
         const seaport = new web3.eth.Contract(seaportabi, seaportAddr);
         let buy = seaport.methods.fulfillBasicOrder_efficient_6GL6yc(orderData.input_data.parameters);
         let encodedABI = buy.encodeABI();

         let tx = {
               from: buyAddress,
               to: orderData.to,
               value: orderData.value,
               gas: 2500000,
               data: encodedABI
         };
         web3.eth.accounts.signTransaction(tx, privateKey).then(signed => {
               var tran = web3.eth.sendSignedTransaction(signed.rawTransaction);
               tran.on('error', (error)=>{
                  $("#buySts_"+tokenId).html("购买失败");
               });
               tran.on('transactionHash',(hash) => {
                  //this.saveAddrNft(orderData, buyAddress);
                  let nftData = {
                     "account": buyAddress,
                     "nftAddr": orderData.input_data.parameters.offerToken,
                     "tokenId": orderData.input_data.parameters.offerIdentifier,
                     "price": orderData.value
                  };
                  $.ajax({
                     type: "post",
                     url: "api/saveAddrNft",
                     dataType: "json",
                     data: nftData,
                     success: function (res) {
                        result = res.data;
                     }
                  });  
                  $("#buySts_"+tokenId).css("color", "green");
                  $("#buySts_"+tokenId).html("购买成功");
               });
         }); 
         state = true;
      } catch (e) {
         console.log(e.message);
         $("#buySts_"+tokenId).html("购买失败");
      }
   }
   if(!state) {
      this.buy(data, buyAddress, privateKey);
   }
   
}

async function getOrderData(slug, tokenId) {
   return new Promise((resolve) =>{
      $.ajax({
         type: "get",
         url: "api/getOrderData",
         dataType: "json",
         data: {
            "collection": slug,
            "tokenId": tokenId
         },
         success: function (res) {
            resolve(res.data);
         }
      });
   });
}

async function autoBuy(data, tokenId, buyAddress, privateKey) {
   data = JSON.parse(data);
   const seaport = new web3.eth.Contract(seaportabi, seaportAddr);
   let buy = seaport.methods.fulfillBasicOrder_efficient_6GL6yc(data.input_data.parameters);
   let encodedABI = buy.encodeABI();
   let tx = {
         from: buyAddress,
         to: data.to,
         value: data.value,
         gas: 250000,
         data: encodedABI
   };
   web3.eth.accounts.signTransaction(tx, privateKey).then(signed => {
         var tran = web3.eth.sendSignedTransaction(signed.rawTransaction);
         tran.on('error', (error)=>{
            $("#buySts_"+tokenId).html("购买失败");
         });
         tran.on('transactionHash',(hash) => {
            this.saveAddrNft(data, buyAddress);
            $("#buySts_"+tokenId).css("color", "green");
            $("#buySts_"+tokenId).html("已购买");
         });
   });  
}


async function saveAddrNft(data, account) {
   let nftData = {
      "account": account,
      "nftAddr": data.input_data.parameters.offerToken,
      "tokenId": data.input_data.parameters.offerIdentifier,
      "price": data.value
   };
   $.ajax({
      type: "get",
      url: "api/saveAddrNft",
      dataType: "json",
      data: {"nftData": nftData},
      success: function (res) {
         result = res.data;
      }
   });   
}

function getGas() {

}

function rand(max, min)  {
   return Math.floor(Math.random() * (max - min + 1)) + min;
   //return Math.ceil(Math.random() * (n-m+1) + m-1)
}

function getFixed(val) {
   let str = val.toString();
   let index = str.indexOf(".");
   if(index == -1) {
      return 0;
   }
   return str.length - index - 1;
}


