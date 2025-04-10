# EVM Auto Transfer

Welcome to the `evm-auto-transfer` repository! This script allows you to automate transactions across multiple EVM-compatible networks. Whether you're interacting with testnets or mainnets, this tool simplifies the process, especially for tasks requiring multiple transfers.

## Features

- 📡 Dynamic RPC URL, chain ID, and explorer integration from JSON files.
- 🔄 Automated transaction processing for multiple addresses.
- 🎯 Targeted transfers to specified addresses from `addresses.json`.
- 🚀 Easily configurable for various networks (testnets and mainnets).
- 🔒 Secure handling of private keys.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SKaaalper/evm-auto-transfer.git && cd evm-auto-transfer
   ```

2. Install the necessary packages:

   ```bash
   npm install
   ```

### Configuration

1. **Define the Chains**:

   - You'll need to specify the network details in JSON files located in the `/chains` directory. Create two JSON files: `testnet.json` and `mainnet.json`.
   - Each file should contain an array of objects with the following structure:
  
     - For Testnet:
     ```
     nano testnet.json
     ```
  
     - For mainnet:
     ```
     nano mainnet.json
     ```
     
     - Format:

     ```
     [
         {
             "name": "Nexus",
             "rpcUrl": "https://rpc.nexus.xyz/http",
             "chainId": "392",
             "symbol": "NEX",
             "explorer": "https://explorer.nexus.xyz"
         }
     ]
     ```


2. **Define Private Keys**:

   - Store your private keys securely inside a `privateKeys.json` file in the root directory. This file should contain an array of private keys as strings:
     ```
     nano privateKeys.json
     ```
     - Format:

     ```json
     [
         "0xYOUR_PRIVATE_KEY_1"
     ]
     ```

     **⚠️ Important**: Keep this file secure and avoid exposing your private keys!

3. **Create Target Addresses File** (Optional):

   - Create an `addresses.json` file in the root directory. This file should contain an array of target addresses you want to transfer funds to:
     ```
     nano addresses.json
     ```
     
     - Format:

     ```json
     [
         "0xTARGET_ADDRESS_1",
         "0xTARGET_ADDRESS_2"
     ]
     ```

### Usage

1. Run the script for random address generation and transactions:

   ```bash
   npm start
   ```

2. To use the targeted address feature, run:

   ```bash
   npm run target
   ```

   - You will be prompted to select your network environment (Testnet/Mainnet) and choose the chain from the provided list using the arrow keys.
   - Define the number of transactions you want to process and let the script handle the rest!

### Contribution

Contributions are welcome! Please fork the repository and submit a pull request with your improvements.

### License

This project is licensed under the MIT License. See the `LICENSE` file for details.
