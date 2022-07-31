import React from 'react';

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
      <style.Input defaultValue={'Login'} />
      <style.InputBottom defaultValue={'Senha'} />
      <style.ContainerForgot>
        <style.TextForgot>Esqueceu sua senha?</style.TextForgot>
      </style.ContainerForgot>
      <style.ButtonLogin>Entrar</style.ButtonLogin>
    </style.Container>
  );
}
