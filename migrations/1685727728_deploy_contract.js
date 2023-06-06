const VotingSystem = artifacts.require("VotingSystem");

module.exports = function (_deployer) {
  _deployer.deploy (VotingSystem);
};
