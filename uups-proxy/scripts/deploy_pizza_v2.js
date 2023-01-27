const { ethers, upgrades } = require("hardhat");

const PROXY = "0xf82146019e25c8E67D40Cd0a74eB505D7Db76eae";

async function main() {
  const PizzaV2 = await ethers.getContractFactory("PizzaV2");
  console.log("Upgrading Pizza...");
  await upgrades.upgradeProxy(PROXY, PizzaV2);
  console.log("Pizza upgraded successfully");
}

main();
