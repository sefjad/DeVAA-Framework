# DeVAA Project Structure

## Overview
This repository contains the complete DeVAA Code repo.

## Directory Structure

```
DeVAA/
├── app/                          # Application code
│   ├── blockchain/               # Smart contracts (Hardhat)
│   │   ├── contracts/           # Solidity contracts
│   │   │   ├── AgentRegistry.sol
│   │   │   └── JobBoard.sol
│   │   ├── test/                # Contract tests
│   │   │   └── JobBoard.test.js
│   │   ├── scripts/             # Deployment scripts
│   │   │   └── deploy.js
│   │   ├── artifacts/           # Compiled contracts
│   │   └── hardhat.config.js
│   │
│   ├── zkp/                     # Zero-knowledge proof circuits
│   │   ├── circuits/            # Circom circuits
│   │   │   └── sentiment.circom
│   │   ├── build/               # Compilation artifacts
│   │   └── package.json
│   │
│   ├── frontend/                # React DApp (TO BE IMPLEMENTED)
│   │   └── (empty)
│   │
│   ├── agent/                   # Python AI agent (TO BE IMPLEMENTED)
│   │   └── (empty)
│   │
│   └── README.md                # Development guide
## Key Files

### Implementation
- **Smart Contracts**: `app/blockchain/contracts/` - Core blockchain logic
- **Tests**: `app/blockchain/test/` - Comprehensive test coverage
- **ZKP Circuits**: `app/zkp/circuits/` - Verifiable computation


### Status
- ✅ Smart contracts implemented and tested
- ✅ ZKP circuits compiled
- ✅ Thesis documentation complete
- ⏳ Frontend implementation pending
- ⏳ Agent implementation pending

## Building & Running

### Smart Contracts
```bash
cd app/blockchain
npm install
npm test                    # Run tests
npx hardhat compile        # Compile contracts
npm run deploy             # Deploy to local network
```

### ZKP Circuits
```bash
cd app/zkp
npm install
# Circuit compilation already done
```


## Authors
- Youssef Amjahdi
- Abdelmounaim Sadir

## Supervisor
Dr. Loui Al Sardy

## Institution
GISMA University of Applied Sciences  
MSc Data Science, AI, and Digital Business

## License
MIT License (for code) 

