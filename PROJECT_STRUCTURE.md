# DeVAA Project Structure

## Overview
This repository contains the complete MSc thesis project for DeVAA (Decentralized and Verifiable AI Agent Marketplace).

## Directory Structure

```
MSCThesis/
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
│
├── Documents/                    # Thesis documentation
│   ├── chapters/                # Thesis chapters
│   │   ├── abstract.tex
│   │   ├── ch1_introduction.tex
│   │   ├── ch2_foundations.tex
│   │   ├── ch3_related_work.tex
│   │   ├── ch4_approach.tex
│   │   ├── ch5_evaluation_results.tex
│   │   ├── ch6_conclusion.tex
│   │   └── (other front matter)
│   │
│   ├── appendices/              # Thesis appendices
│   │   ├── appendix_source_code.tex
│   │   ├── appendix_setup_guide.tex
│   │   └── appendix_ethics.tex
│   │
│   ├── Thesis_Template.tex      # Main LaTeX file
│   ├── Thesis_Template.pdf      # Compiled thesis
│   ├── references.bib           # Bibliography
│   ├── research_data.txt        # All references and resources
│   ├── individual_contributions.tex
│   └── diagram_DeVAA.png        # System architecture diagram
│
└── Meeting_Documents/           # Supervisor meeting materials
    ├── meeting_report_august_15.tex
    ├── DeVAA_Meeting_Presentation.md
    ├── REALISTIC_PROJECT_STATUS.md
    ├── ACTUAL_DEMO_COMMANDS.md
    ├── strategic_meeting_questions.md
    └── THESIS_SUBMISSION_TIMELINE.md

## Key Files

### Implementation
- **Smart Contracts**: `app/blockchain/contracts/` - Core blockchain logic
- **Tests**: `app/blockchain/test/` - Comprehensive test coverage
- **ZKP Circuits**: `app/zkp/circuits/` - Verifiable computation

### Documentation
- **Main Thesis**: `Documents/Thesis_Template.pdf` - Complete thesis document
- **Research Data**: `Documents/research_data.txt` - All references and resources
- **Individual Contributions**: `Documents/individual_contributions.tex` - Work division

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

### Thesis Compilation
```bash
cd Documents
pdflatex Thesis_Template.tex
bibtex Thesis_Template
pdflatex Thesis_Template.tex
pdflatex Thesis_Template.tex
```

## Authors
- Youssef Amjahdi
- Abdelmounaim Sadir

## Supervisor
Dr. Loui Al Sardy

## Institution
GISMA University of Applied Sciences  
Department of Computer and Data Sciences  
MSc Data Science, AI, and Digital Business

## License
MIT License (for code)  
All rights reserved (for thesis content)

## Submission Deadline
September 26, 2025
