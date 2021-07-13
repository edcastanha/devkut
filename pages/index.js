import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { PerfilRelacoesBoxWrapper } from '../src/components/PerfilRelacoes';

function PerfilSideBar(propriedades) {
  return (
    <>
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '10px' }} />
      <tr></tr>
      <h2 className="smallTitle">
      {propriedades.name}
      </h2>
    </Box>
    </>
  )
}

export default function Home() {
  const usuario = ['edcastanha','Edson Lourenço'];
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
        <div className="perfilArea" style={{ gridArea: 'perfilArea' }}>
          <PerfilSideBar githubUser={usuario[0]} name={usuario[1]}/>       
        </div>
        <div className="conteudoArea" style={{ gridArea: 'conteudoArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a) 
            </h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h1 className="title">
              Postagens 
            </h1>
            
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