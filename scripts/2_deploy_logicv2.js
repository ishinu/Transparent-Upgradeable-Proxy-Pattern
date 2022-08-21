const { ethers,upgrades } = require("hardhat");

var proxyAddress = "0xbeBb670DD41cFC4404E6A58Da57f14c1C4906b40";

async function main(){
    console.log("Deploying LogicV2 contract...");
    const LogicV2 = await ethers.getContractFactory("LogicV2");
    const logicv2 = await upgrades.upgradeProxy(proxyAddress,LogicV2);
    await logicv2.deployed();
    console.log("LogicV2 Proxy Contract ( Must be Same ) deployed to : ",logicv2.address);
    console.log("LogicV2 Contract implementation address is : ",await upgrades.erc1967.getImplementationAddress(logicv2.address));
    console.log("LogicV2 ProxyAdmin address is  ( Must be Same ) : ",await upgrades.erc1967.getAdminAddress(logicv2.address));
}

main();