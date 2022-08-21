# TransparentUpgradeable Proxy Sample Project

Upgrading smart contracts proved extremely helpful for dev in blockchain world.

Here is a proxy pattern example project where TransparentUpgradeable Proxy implementation is detailed.

In simple words, here is how it works : 
- We use `deployProxy()` to deploy `TransparentUpgradeable Proxy` and `ProxyAdmin`.
- For upgrading the contract, `upgrades.upgradeProxy()` is applied.
- `ProxyAdmin` is having the functionality to upgrade the Proxy and point to the new implementation.

Due to comparetively higher fees associated for deployment of this proxy pattern, now `UUPS proxy pattern` is preferred. 

You shall find a detailed explanation for proxy patterns in [this](https://github.com/ishinu/Beacon-Proxy-Upgrade-Example-Hardhat-) repository README file.

