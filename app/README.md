# DeVAA MVP Monorepo

Decentralized and Verifiable AI Agent Marketplace (MVP). This monorepo contains four isolated components that integrate into a working end-to-end demo:

- blockchain: Hardhat + Solidity smart contracts (OpenZeppelin)
- zkp: Circom circuits + SnarkJS workflows
- frontend: React (Vite) + Ethers.js + Tailwind + shadcn/ui
- agent: Python AI agent using web3.py + dotenv

This project follows a strict build order and TDD (tests first) per phase to keep the MVP simple and reliable.

## Prerequisites

- Node.js 18+ and npm 9+
- Git
- Python 3.10+
- PowerShell 7+ recommended on Windows (Windows PowerShell works too)
- Rust toolchain (for faster Circom builds; optional but recommended)

## Directory Structure

```
app/
  blockchain/
  zkp/
  agent/
  frontend/
  README.md
```

## Guiding Principles

- Simplicity over completeness. MVP only.
- Strict separation of concerns by folder.
- Build, test, integrate in phases:
  1) Blockchain
  2) ZKP
  3) Integrate ZKP + Blockchain
  4) Frontend
  5) Agent

## Phase Workflow (High Level)

We will execute these phases in order. Detailed commands and source code will be provided per phase in the development guide (see below). For quick reference:

1. Blockchain (Hardhat)
   - Initialize Hardhat project
   - Implement AgentRegistry.sol and JobBoard.sol
   - Write tests first (JobBoard.test.js), then code, run until green
   - Add deployment script

2. ZKP (Circom + SnarkJS)
   - Implement sentiment.circom
   - Compile, trusted setup (PLONK), generate Verifier.sol
   - Generate and verify a sample proof

3. Integration
   - Copy Verifier.sol into blockchain/contracts
   - Update JobBoard.sol to verify proofs on-chain
   - Add end-to-end Hardhat test using real proof artifacts

4. Frontend (React + Vite)
   - Basic UI: Job poster + job list
   - Hook for Ethers.js interactions (connect, read, postJob)

5. Agent (Python)
   - Listen for JobCreated
   - Produce proof via SnarkJS subprocess
   - Call completeJob with proof

## Development Conventions

- Tests-first: each smart contract feature begins with failing tests.
- Keep scripts cross-platform where possible. Windows examples use PowerShell.
- Environment variables live in .env files (never commit secrets).

## Getting Started (Phase 0)

This file was created during Phase 0 scaffolding. Proceed to Phase 1: Blockchain setup.

### Next Step

Open a terminal at `app/` and follow the Phase 1 instructions that will be provided next.

## Final Demo (Will be expanded in Phase 6)

In Phase 6 this README will be updated with a concise, step-by-step demo guide:

- Start local Hardhat node, deploy contracts
- Start React dev server
- Run Python agent
- Expected workflow

## Quick Demo

### Local (Hardhat)

1. Install deps
```powershell
cd app/blockchain; npm install
```
2. Start a local node (new terminal)
```powershell
npx hardhat node
```
3. Deploy contracts to localhost
```powershell
npx hardhat run scripts/deploy.js --network localhost
```
4. Run tests
```powershell
npm test
```

### Sepolia (Testnet)

Create `app/blockchain/.env`:
```ini
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/9aa3d95b3bc440fa88ea...
PRIVATE_KEY=0xabc123...deadbeef (your test wallet private key)
ETHERSCAN_API_KEY=ABCD1234...
```
Deploy:
```powershell
cd app/blockchain
npx hardhat compile
npx hardhat run scripts/deploy.js --network sepolia
```
(Optional) Verify:
```powershell
npx hardhat verify --network sepolia <JobBoard_address> <AgentRegistry_address>
```

Expected workflow matches the thesis: postJob → acceptJob (registered agent) → (future) complete with proof.


