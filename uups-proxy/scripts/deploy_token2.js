const { ethers, upgrades } = require("hardhat");

const PROXY = "0xa8865c3A871C58e9dC0f5e28954CC2B58c9320D3";

async function main() {
  const MyToken2 = await ethers.getContractFactory("MyToken2");
  console.log("Upgrading Token...");
  await upgrades.upgradeProxy(PROXY, MyToken2);
  console.log("Token upgraded successfully");
}

main();
