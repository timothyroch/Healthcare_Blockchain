const PatientAccess = artifacts.require("PatientAccess");

module.exports = function (deployer) {
  deployer.deploy(PatientAccess, "<patient_address>");
};
