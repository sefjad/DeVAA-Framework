const hre = require("hardhat");
const { ethers } = hre;
const fs = require("fs");
const path = require("path");
require("dotenv").config();

async function getContract(contractName) {
  const network = hre.network.name;
  const deploymentsPath = path.join(__dirname, `../deployments/${network}.json`);
  if (!fs.existsSync(deploymentsPath)) {
    throw new Error(`Deployments file not found for network ${network} at ${deploymentsPath}`);
  }
  const deployments = JSON.parse(fs.readFileSync(deploymentsPath, "utf8"));
  const address = deployments[contractName];
  if (!address) {
    throw new Error(`${contractName} address not found for network ${network}`);
  }
  const factory = await ethers.getContractFactory(contractName);
  return factory.attach(address);
}

function parseArgs(argv) {
  const parsed = {};
  argv.forEach((arg, i) => {
    if (arg.startsWith("--")) {
      const key = arg.substring(2);
      parsed[key] = argv[i + 1];
    }
  });
  return parsed;
}

async function main() {
  const command = process.argv[2];
  const args = parseArgs(process.argv.slice(3));

  const jobBoard = await getContract("JobBoard");

  switch (command) {
    case "post": {
      const paymentEth = args.payment || "0.01";
      const ipfsCid = args.ipfs || "bafybeigdyrzt5sfp7udm7hu76uh7y2anf3m7ztvtilzhkb2j66j32f2gw";
      const payment = ethers.parseEther(paymentEth);
      const tx = await jobBoard.postJob(ipfsCid, payment, { value: payment });
      console.log(`submitted: ${tx.hash}`);
      if (!args["no-wait"]) {
        const rc = await tx.wait();
        console.log(`confirmed in block ${rc.blockNumber}`);
      }
      break;
    }
    case "accept": {
      const jobId = args.jobId;
      if (!jobId) throw new Error("--jobId required");
      const tx = await jobBoard.acceptJob(jobId);
      console.log(`submitted: ${tx.hash}`);
      if (!args["no-wait"]) await tx.wait();
      break;
    }
    case "complete": {
      const jobId = args.jobId;
      const resultCid = args.ipfs || "bafybeigdyrzt5sfp7udm7hu76uh7y2anf3m7ztvtilzhkb2j66j32f2gw";
      if (!jobId) throw new Error("--jobId required");
      const tx = await jobBoard.completeJob(jobId, resultCid);
      console.log(`submitted: ${tx.hash}`);
      if (!args["no-wait"]) await tx.wait();
      break;
    }
    case "release": {
      const jobId = args.jobId;
      if (!jobId) throw new Error("--jobId required");
      const tx = await jobBoard.releasePayment(jobId);
      console.log(`submitted: ${tx.hash}`);
      if (!args["no-wait"]) await tx.wait();
      break;
    }
    default:
      console.log("Usage: node scripts/cli.js <post|accept|complete|release> [--payment <ETH>] [--jobId <n>] [--ipfs <cid>] [--no-wait]");
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});


