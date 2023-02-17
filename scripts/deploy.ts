import { ethers } from "hardhat";

async function main() {

  /////////////  DEPLOYMENT  ////////////////////
  const Nft = await ethers.getContractFactory("NFT");
  const nft = await Nft.deploy();
  await nft.deployed();

  console.log(`NFT deployed to: ${nft.address}`);
  //////////////  MINTING  //////////////////////
  const Owner = "0x3fF205DeeD7CD776035D501b4E5470bB0aE6438f";
  const uri = "QmRzbLaMELBYT6oQXMxtdErwwrPpsws6KXfb8EcpEnKatD";
  const tokenId = 10101;
  const mint = await nft.safeMint(Owner,tokenId,uri);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
