import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { PerfilRelacoesBoxWrapper } from '../src/components/PerfilRelacoes';

function ProfileSidebar(propriedades) {
  console.log(propriedades);
  return (
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  )
}

export default function Home() {
  const usuarioAleatorio = 'edcastanha';
  const pessoasFavoritas = [
    'artusrocha',
    'omariosouto',
    'teteusAraujo',
    'rafaballerini',
    'W8jonas',
    'jlsjefferson'
  ]
//perfilArea conteudoArea relacoesArea
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        {/* <Box style="grid-area: profileArea;"> */}
        <div className="perfilArea" style={{ gridArea: 'perfilArea' }}>
          <ProfileSidebar githubUser={usuarioAleatorio} />
        </div>
        <div className="conteudoArea" style={{ gridArea: 'conteudoArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a) 
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="relacoesArea" style={{ gridArea: 'relacoesArea' }}>
          <PerfilRelacoesBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </PerfilRelacoesBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}