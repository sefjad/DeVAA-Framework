// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract AgentRegistry {
    event AgentRegistered(address indexed owner, uint256 indexed agentId, string metadata);

    struct Agent {
        address owner;
        string metadata;
    }

    uint256 public nextAgentId = 1;
    mapping(uint256 => Agent) public agents;
    mapping(address => uint256) public ownerToAgentId;

    function registerAgent(string calldata metadata) external returns (uint256 agentId) {
        require(ownerToAgentId[msg.sender] == 0, "Already registered");
        agentId = nextAgentId++;
        agents[agentId] = Agent({owner: msg.sender, metadata: metadata});
        ownerToAgentId[msg.sender] = agentId;
        emit AgentRegistered(msg.sender, agentId, metadata);
    }

    function isRegistered(address agentOwner) external view returns (bool) {
        return ownerToAgentId[agentOwner] != 0;
    }
}


