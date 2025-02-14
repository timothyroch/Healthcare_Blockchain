#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting test suite...${NC}"

# Step 1: Run smart contract tests
echo -e "${GREEN}Running smart contract tests...${NC}"
cd ../smart_contracts || { echo -e "${RED}Error: Cannot access smart_contracts directory.${NC}"; exit 1; }
truffle test
if [ $? -ne 0 ]; then
  echo -e "${RED}Smart contract tests failed.${NC}"
  exit 1
fi
echo -e "${GREEN}Smart contract tests passed.${NC}"

# Step 2: Run backend tests
echo -e "${GREEN}Running backend tests...${NC}"
cd ../backend || { echo -e "${RED}Error: Cannot access backend directory.${NC}"; exit 1; }
npm test
if [ $? -ne 0 ]; then
  echo -e "${RED}Backend tests failed.${NC}"
  exit 1
fi
echo -e "${GREEN}Backend tests passed.${NC}"

# Step 3: Run frontend tests
echo -e "${GREEN}Running frontend tests...${NC}"
cd ../frontend || { echo -e "${RED}Error: Cannot access frontend directory.${NC}"; exit 1; }
npm test -- --watchAll=false
if [ $? -ne 0 ]; then
  echo -e "${RED}Frontend tests failed.${NC}"
  exit 1
fi
echo -e "${GREEN}Frontend tests passed.${NC}"

echo -e "${GREEN}All tests passed successfully!${NC}"
exit 0
