const { ethers, upgrades } = require("hardhat");

async function main(){
    console.log("Deploying Logic contract...");
    const Logic = await ethers.getContractFactory("Logic");
    const logic = await upgrades.deployProxy(Logic,[2]);
    await logic.deployed();
    console.log("Logic Proxy Contract deployed to : ",logic.address);
    console.log("Logic Contract implementation address is : ",await upgrades.erc1967.getImplementationAddress(logic.address));
    console.log("Logic ProxyAdmin address is : ",await upgrades.erc1967.getAdminAddress(logic.address));
}

main();