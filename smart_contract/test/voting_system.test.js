const VotingSystem = artifacts.require("VotingSystem");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("VotingSystem", function (/* accounts */) {
  it("should assert true", async function () {
    await VotingSystem.deployed();
    return assert.isTrue(true);
  });
});
