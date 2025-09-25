const { expect } = require("chai");
const fs = require("fs");
const path = require("path");

describe("Artifacts", function () {
  it("Has JobBoard artifact", function () {
    const p = path.join(__dirname, "../artifacts/contracts/JobBoard.sol/JobBoard.json");
    expect(fs.existsSync(p), `missing artifact at ${p}`).to.equal(true);
    const artifact = JSON.parse(fs.readFileSync(p, "utf8"));
    expect(artifact).to.have.property("abi");
    expect(artifact).to.have.property("bytecode");
  });

  it("Has AgentRegistry artifact", function () {
    const p = path.join(__dirname, "../artifacts/contracts/AgentRegistry.sol/AgentRegistry.json");
    expect(fs.existsSync(p), `missing artifact at ${p}`).to.equal(true);
    const artifact = JSON.parse(fs.readFileSync(p, "utf8"));
    expect(artifact).to.have.property("abi");
    expect(artifact).to.have.property("bytecode");
  });
});


