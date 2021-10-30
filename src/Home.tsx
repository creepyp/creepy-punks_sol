import styled from "styled-components";
import Countdown from "react-countdown";
//import { Button, CircularProgress, Snackbar } from "@material-ui/core";

import * as anchor from "@project-serum/anchor";


import { useAnchorWallet } from "@solana/wallet-adapter-react";
//import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

import {
  shortenAddress,
} from "./candy-machine";

//const ConnectButton = styled(WalletDialogButton)``;

const CounterText = styled.span``; // add your styles here

const MintContainer = styled.div``; // add your styles here

//const MintButton = styled(Button)``; // add your styles here

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}

const Home = () => {


  //const [startDate, setStartDate] = useState(new Date(props.startDate));
  const wallet = useAnchorWallet();
  const startDate = new Date('2021-10-31T21:30:00')


  return (
    <main>
      {wallet && (
        <p>Wallet {shortenAddress(wallet.publicKey.toBase58() || "")}</p>
      )}
      <MintContainer>
      <Countdown
                date={startDate}
                onMount={({ completed }) => completed}
                onComplete={() => true}
                renderer={renderCounter}
              />
        
      </MintContainer>
    </main>
  );
};


const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <CounterText>
      Live in: {days} days ({hours + (days || 0) * 24} hours, {minutes} minutes, {seconds} seconds)
    </CounterText>
  );
};

export default Home;
