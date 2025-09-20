const hre = require("hardhat");

async function main() {
  const AgentRegistry = await hre.ethers.getContractFactory("AgentRegistry");
  const agentRegistry = await AgentRegistry.deploy();
  await agentRegistry.waitForDeployment();
  console.log("AgentRegistry deployed to:", await agentRegistry.getAddress());

  const JobBoard = await hre.ethers.getContractFactory("JobBoard");
  const jobBoard = await JobBoard.deploy(await agentRegistry.getAddress());
  await jobBoard.waitForDeployment();
  console.log("JobBoard deployed to:", await jobBoard.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


