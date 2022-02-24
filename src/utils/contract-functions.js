import { ethers, Wallet } from 'ethers';
import { ASTRA_COIN_ADDRESS as contractAddress } from '../utils/config';
import AstraCoin from './abis/AstraCoin.json';

const REGISTRATION_REWARD = ethers.utils.parseEther('1000');

let ethereum;

if (typeof window !== undefined) {
  ethereum = window.ethereum;
}

const abi = AstraCoin.abi;

export const transfer = async (account, amount, receiverAddress) => {
  try {
    console.log('im here');
    console.log(typeof amount);
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const astraCoin = new ethers.Contract(contractAddress, abi, signer);

    const txAmount = ethers.utils.parseEther(amount);
    const tx = await astraCoin.transfer(receiverAddress, txAmount, {
      from: account
    });
    await tx.wait();
  } catch (err) {
    console.error('fdf', err);
  }
};

export const registrationReward = async (receiverAddress) => {
  console.log('receiver address: ', receiverAddress);
  const deployer = new ethers.Wallet(
    '9f62609a640da125918ce75ac015f07e99898beab8bd90c8393267696c122e23'
  );

  const provider = new ethers.providers.JsonRpcProvider(
    'https://polygon-mumbai.g.alchemy.com/v2/dw30Mr_bnJM95Y1iROK1I_Y22Pj5gE8X'
  );
  const signer = provider.getSigner(deployer.address);
  const astraCoin = new ethers.Contract(contractAddress, abi, signer);
  try {
    const tx = await astraCoin.transfer(receiverAddress, REGISTRATION_REWARD);
    await tx.wait();
  } catch (err) {
    console.error(err);
  }
};

export const tokenBalance = async (userAddress) => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const astraCoin = new ethers.Contract(contractAddress, abi, signer);

  let balance = await astraCoin.balanceOf(userAddress);
  balance = ethers.utils.formatEther(balance);
  return balance;
};
