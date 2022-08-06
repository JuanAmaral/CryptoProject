import React from 'react';
import { Link } from 'react-router-dom';
import fox from '../../img/fox.png';
import * as style from './HomeStyle';

export default function Home() {
  return (
    <style.Container>
      <img
        src="https://imageup.me/images/a9dad55c-a6bd-4ff2-ae1c-eb774c788de4.png"
        width="200px"
        height="200px"
      />
      <style.Tittle>Crypto</style.Tittle>
      <style.SubTittle>O seu marktplace de NFTs no Brasil</style.SubTittle>
      <style.Input placeholder={'login'} />
      <style.Input placeholder={'senha'} />
      <style.ContainerForgot>
        <style.TextForgot>Esqueceu sua senha?</style.TextForgot>
      </style.ContainerForgot>

      <Link to="/feed">
        <style.ButtonLogin>Entrar</style.ButtonLogin>
      </Link>

      <style.Divisor></style.Divisor>

      <style.ButtonMetaMask>
        <style.ButtonInsideMetaMask>
          <h1>Entrar com MetaMask</h1>
          <img src={fox} width="30px" height="30px"></img>
        </style.ButtonInsideMetaMask>
      </style.ButtonMetaMask>
    </style.Container>
  );
}
