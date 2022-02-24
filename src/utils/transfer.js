import { ethers } from 'ethers';
import { ASTRA_COIN_ADDRESS } from '../utils/config';
import { ERC20 } from '../utils/abis/ERC20.json';

export const transfer = async (library, account, amount, receiverAddress) => {
  const signer = library?.getSigner();
  const astraCoin = new ethers.Contract(ASTRA_COIN_ADDRESS, ERC20, signer);
  const txAmount = ethers.utils.parseEther(amount);
  const tx = await astraCoin
    .connect(account)
    .transfer(receiverAddress, txAmount);
  await tx.wait();
};
