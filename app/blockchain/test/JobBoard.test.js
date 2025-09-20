const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("JobBoard (MVP)", function () {
  async function deployFixture() {
    const [deployer, client, worker] = await ethers.getSigners();

    const AgentRegistry = await ethers.getContractFactory("AgentRegistry");
    const agentRegistry = await AgentRegistry.deploy();
    await agentRegistry.waitForDeployment();

    const JobBoard = await ethers.getContractFactory("JobBoard");
    const jobBoard = await JobBoard.deploy(agentRegistry.getAddress());
    await jobBoard.waitForDeployment();

    return { deployer, client, worker, agentRegistry, jobBoard };
  }

  it("allows posting and accepting jobs", async function () {
    const { client, worker, agentRegistry, jobBoard } = await deployFixture();

    // Register worker agent
    await expect(agentRegistry.connect(worker).registerAgent("Worker Agent"))
      .to.emit(agentRegistry, "AgentRegistered")
      .withArgs(worker.address, 1, "Worker Agent");

    // Post a job
    const reward = ethers.parseEther("0.1");
    await expect(
      jobBoard.connect(client).postJob("sentiment", "Analyze: great day!", { value: reward })
    )
      .to.emit(jobBoard, "JobCreated")
      .withArgs(1, client.address, "sentiment");

    const job = await jobBoard.jobs(1);
    expect(job.reward).to.equal(reward);
    expect(job.status).to.equal(0); // Open

    // Accept job by registered worker
    await expect(jobBoard.connect(worker).acceptJob(1))
      .to.emit(jobBoard, "JobAccepted")
      .withArgs(1, worker.address);

    const jobAfter = await jobBoard.jobs(1);
    expect(jobAfter.worker).to.equal(worker.address);
    expect(jobAfter.status).to.equal(1); // Accepted
  });
});


