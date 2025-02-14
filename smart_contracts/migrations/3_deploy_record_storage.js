const RecordStorage = artifacts.require("RecordStorage");

module.exports = function (deployer) {
  deployer.deploy(RecordStorage);
};
