const { ethers, upgrades } = require("hardhat");

const proxyAddress = "0x800871f26caF9188D3536D17ACD70D5aD34FDfc8";

async function main() {
  console.log(proxyAddress, " original Box(proxy) address");
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  console.log("upgrade to BoxV2...");
  const boxV2 = await upgrades.upgradeProxy(proxyAddress, BoxV2);
  console.log(boxV2.address, " BoxV2 address(should be the same)");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
