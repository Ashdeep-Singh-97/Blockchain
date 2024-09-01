const ethers = require("ethers")
const abi = require("./abi.json")

async function readContract(){
    const provider = new ethers.JsonRpcProvider("https://ethereum-sepolia-rpc.publicnode.com");
    const contractAddress = "0x47D3c5e6924e9ee816563C6AB467661A7F4a5350";
    const contractInstance = new ethers.Contract(contractAddress,abi,provider);
    const value = await contractInstance.retrieve();
    console.log(value);
}

readContract()