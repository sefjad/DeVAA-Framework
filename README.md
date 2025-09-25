# DeVAA: Decentralized and Verifiable AI Agent Marketplace

This repository contains the complete DeVAA project.

### Authors
- Youssef Amjahdi
- Abdelmounaim Sadir

### Supervisor
Dr. Loui Al Sardy

### Abstract
DeVAA presents a novel framework for enabling trustless coordination between AI service requesters and providers through blockchain technology and cryptographic proofs. The project implements smart contracts for marketplace coordination, zero-knowledge proof circuits for verifiable computation, and provides comprehensive performance analysis.

### Project Structure (CLI-only)
- `/app/blockchain` - Hardhat workspace with contracts, tests, and CLI scripts
- `/app/zkp` - Circom circuits and artifacts used in the MVP
- `PROJECT_STRUCTURE.md` - Detailed directory structure

### Key Notes
- CLI-only MVP: there is no frontend in this repository.
- Working smart contracts and artifact-based tests.
- Circom circuit artifacts are included for reference.

### Quick Start
```bash
# Smart contract testing
cd app/blockchain
npm install
npm test

```

### Research Type
Development-Based Research with Applied Research elements, following Design Science Research methodology.

### License
- Code: MIT License

For more details, see `Documents/research_data.txt`.
