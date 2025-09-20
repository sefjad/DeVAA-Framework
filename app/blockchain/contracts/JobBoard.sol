// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {AgentRegistry} from "./AgentRegistry.sol";

contract JobBoard {
    event JobCreated(uint256 indexed jobId, address indexed client, string jobType);
    event JobAccepted(uint256 indexed jobId, address indexed worker);

    enum Status { Open, Accepted, Completed }

    struct Job {
        address client;
        address worker;
        string jobType; // e.g., "sentiment"
        string inputData;
        uint256 reward; // wei
        Status status;
    }

    uint256 public nextJobId = 1;
    mapping(uint256 => Job) public jobs;

    AgentRegistry public immutable agentRegistry;

    constructor(address agentRegistryAddr) {
        agentRegistry = AgentRegistry(agentRegistryAddr);
    }

    function postJob(string calldata jobType, string calldata inputData) external payable returns (uint256 jobId) {
        require(msg.value > 0, "Reward required");
        jobId = nextJobId++;
        jobs[jobId] = Job({
            client: msg.sender,
            worker: address(0),
            jobType: jobType,
            inputData: inputData,
            reward: msg.value,
            status: Status.Open
        });
        emit JobCreated(jobId, msg.sender, jobType);
    }

    function acceptJob(uint256 jobId) external {
        Job storage job = jobs[jobId];
        require(job.client != address(0), "Invalid job");
        require(job.status == Status.Open, "Not open");
        require(agentRegistry.ownerToAgentId(msg.sender) != 0, "Not registered");
        job.worker = msg.sender;
        job.status = Status.Accepted;
        emit JobAccepted(jobId, msg.sender);
    }
}


