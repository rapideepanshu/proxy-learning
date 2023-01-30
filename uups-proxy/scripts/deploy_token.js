const { ethers, upgrades } = require("hardhat");

async function main() {
  const MyToken1 = await ethers.getContractFactory("MyToken");

  console.log("Deploying Token...");

  const myToken1 = await upgrades.deployProxy(MyToken1, { kind: "uups" });

  await myToken1.deployed();
  console.log("Token proxy deployed to:", myToken1.address);
  console.log(
    "Token implementation",
    await upgrades.erc1967.getImplementationAddress(myToken1.address)
  );
}

main();
