const ethers = require('ethers');

async function fetchAccountBalance(){
    const provider = new ethers.JsonRpcProvider("https://ethereum.publicnode.com")
    const balance = await provider.getBalance("0x4976a4a02f38326660d17bf34b431dc6e2eb2327");
    console.log(balance); 
}

fetchAccountBalance();