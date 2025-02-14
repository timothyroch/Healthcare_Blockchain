#!/bin/bash

# Configuration
NETWORK="development"  # Change to "rinkeby", "mainnet", etc., based on your target network
CONTRACTS_DIR="./contracts"  # Directory containing smart contracts
BUILD_DIR="./build"  # Directory where compiled contracts are stored
MIGRATIONS_DIR="./migrations"  # Directory for Truffle migrations

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting smart contract deployment...${NC}"

# Step 1: Compile contracts
echo -e "${GREEN}Compiling smart contracts...${NC}"
truffle compile
if [ $? -ne 0 ]; then
  echo -e "${RED}Error: Compilation failed.${NC}"
  exit 1
fi
echo -e "${GREEN}Compilation successful.${NC}"

# Step 2: Migrate contracts to the specified network
echo -e "${GREEN}Deploying smart contracts to the $NETWORK network...${NC}"
truffle migrate --network $NETWORK
if [ $? -ne 0 ]; then
  echo -e "${RED}Error: Deployment failed.${NC}"
  exit 1
fi
echo -e "${GREEN}Deployment successful.${NC}"

# Step 3: Verify deployment
echo -e "${GREEN}Verifying deployment...${NC}"
truffle networks
if [ $? -ne 0 ]; then
  echo -e "${RED}Error: Unable to verify deployed contracts.${NC}"
  exit 1
fi
echo -e "${GREEN}Smart contracts deployed and verified successfully!${NC}"

exit 0
