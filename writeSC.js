const ethers = require("ethers")
const abi = require("./abi.json")
const { Wallet } = require("ethers");
require("dotenv").config()

async function readContract(){
    const provider = new ethers.JsonRpcProvider("https://ethereum-sepolia-rpc.publicnode.com");
    const contractAddress = "0x47D3c5e6924e9ee816563C6AB467661A7F4a5350";
    
    const privateKey = process.env.PRIVATE_KEY;
    const wallet = new Wallet(privateKey,provider);

    const contractInstance = new ethers.Contract(contractAddress,abi,wallet);
    await contractInstance.store(10);
    console.log("Transaction successful");
}

readContract()
