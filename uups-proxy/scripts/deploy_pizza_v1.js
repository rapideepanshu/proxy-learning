const { ethers, upgrades } = require("hardhat");

const SLICES = 8;
async function main() {
  const Pizza = await ethers.getContractFactory("Pizza");

  console.log("Deploying Pizza...");

  const pizza = await upgrades.deployProxy(Pizza, [SLICES], {
    kind: "uups",
    initializer: "initialize",
  });
  await pizza.deployed();

  console.log("Pizza proxy deployed to:", pizza.address);
  console.log(
    "Pizza implementation",
    await upgrades.erc1967.getImplementationAddress(pizza.address)
  );
}

main();
