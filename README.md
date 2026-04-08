Maria Clara torres RA: 10426069
Paulo Cesar Carvalho de Andrade RA: 10420708
Valério dos Santos Cavalcanti RA: 10410778
Felipe Souza RA: 10322325

# POR QUE O EduTech É FEITO ESPECIALMENTE PARA JOVENS?
Somos a geração mais conectada da história, mas ainda muito desconectada do dinheiro.
Temos o celular na mão o tempo todo, acessamos qualquer informação em segundos, usamos apps de delivery, transporte, streaming e redes sociais o dia inteiro. Porém, a maioria de nós entre 18 e 25 anos não sabe o que é Tesouro Selic, ETF, ações, fundos imobiliários ou como começar a investir com pouco dinheiro. O mercado financeiro ainda parece um clube exclusivo para adultos com muito capital, terno e experiência.
Enquanto isso, o futuro financeiro do Brasil está nas nossas mãos. É a nossa geração que vai construir riqueza, tomar as grandes decisões de investimento e definir o cenário econômico das próximas décadas. No entanto, a maioria ainda não recebeu as ferramentas certas para dominar o próprio dinheiro.
A educação financeira tradicional no Brasil foca em adultos já endividados, com hipoteca, filhos e carreira consolidada. E nós? Estamos na faculdade, recebendo mesada ou primeiro salário de estágio, usando cartão de crédito pela primeira vez, morando em república ou tentando sair da casa dos pais.
A vida de estudante é um equilíbrio constante: provas, prazos, estágios e a eterna luta para fazer o dinheiro durar até o dia 30. Surgem as faturas do cartão, o aluguel da república e aquela dúvida cruel: “Dá pra ir no rolê ou o café da semana que vem está em risco?”.
O problema que resolvemos
Para muitos jovens, a faculdade é o primeiro contato real com a gestão financeira da própria vida. Sem orientação, a liberdade da juventude facilmente vira endividamento precoce. No Brasil, apenas 3 em cada 10 jovens entre 18 e 24 anos se consideram financeiramente alfabetizados. A educação financeira praticamente não existe na grade curricular das universidades, e o resultado é uma geração entrando no mercado de trabalho já com hábitos ruins, score de crédito baixo e oportunidades de investimento perdidas.
Nosso propósito
O EduTech nasceu para quebrar essa barreira e democratizar o acesso à inteligência financeira. Não queremos apenas explicar o que é juro composto — queremos que você aprenda a usar ele a seu favor desde os primeiros R$ 100.
Focamos no público universitário por três motivos principais:
Redução de estresse e saúde mental: Um estudante preocupado com boletos não consegue focar nas aulas. Equilíbrio financeiro traz tranquilidade.
Autonomia real: Tomar decisões baseadas em planejamento, e não em impulso ou falta de opção.
Futuro sustentável: Quem aprende a fazer 100 reais renderem hoje saberá fazer 10 mil, 100 mil e 1 milhão renderem amanhã. O hábito começa agora.
Por que esse tema é tão poderoso?
Porque estamos vivendo uma oportunidade histórica. Nunca uma geração teve tanto acesso à tecnologia e à informação quanto a nossa. O problema não é mais falta de acesso, mas falta de conteúdo certo, na linguagem certa e no momento certo da vida.
O EduTech transforma essa realidade com conteúdos práticos, ferramentas simples e uma comunidade de jovens que estão construindo riqueza juntos, sem complicação e sem gatekeeping.
Nossa missão é mudar a relação dos jovens com o dinheiro: de fonte de ansiedade e exclusão para um poderoso degrau rumo à independência financeira, realização de sonhos e construção de patrimônio desde cedo.
O futuro financeiro do Brasil não vai esperar você chegar aos 30 anos endividado.
Ele começa agora, enquanto os erros ainda custam pouco e as oportunidades são enormes.

![Descrição da imagem](site.png)

# CÓDIGO E TUTORIAL
~~~
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EduTech</title>

  <link rel="stylesheet" href="style.css">
  <script src="main.js"></script>

</head>
<body>

  <header>
    <nav>
      <div class="logo">
        <i class="fas fa-graduation-cap"></i>
        EduTech
      </div>

      <div class="nav-links">
        <a href="#">Início</a>
        <a href="#quem-somos">Quem Somos</a>
        <a href="#">Cursos</a>
        <a href="#">Contato</a>
      </div>
      <div class="botoes">
      <button class="btn-entrar">Entrar</button>
        <button onclick="mudarTema()" class="btn-tema">Tema</button>
      <div>
    </nav>
  </header>

  <section class="hero">
    <div class="hero-content">
      <h1>
        Transforme seu
        <span>Futuro Hoje</span>
      </h1>
      <p>
        Aprenda tecnologia de forma prática e moderna com os melhores cursos online.
      </p>
      <button class="btn-comecar">Começar Agora</button>
    </div>
  </section>

  <section class="quem-somos" id="quem-somos">
    <h2>Quem Somos</h2>

    <div class="content-wrapper">
      
      <div class="text-side">
        <h3>Educação que transforma vidas</h3>
        <p>
          Somos uma plataforma focada em ensinar tecnologia de forma simples,
          prática e acessível para todos.
        </p>
        <p>
          Nosso objetivo é preparar você para o mercado de trabalho com habilidades reais.
        </p>
      </div>

      <div class="images-side">
        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" alt="">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" alt="">
        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" alt="">
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" alt="">
      </div>

    </div>
  </section>

  <section class="dicas">
    <h2>Dica Financeira</h2>
    <p id="dica">Clique no botão para gerar uma dica</p>
    <button onclick="gerarDica()" class="btn-dica">Gerar Dica</button>
  </section>

  <script src="script.js"></script>

</body>
</html>
~~~~

#EXPLICAÇÃO DO CÓDIGO

Header -> Usamos o <nav> para a criação de um menu lateral, com o "href" para posteriormente incluirmos o caminho para a próxima página, a tag <_button_> para o botão onde o aluno pode acessar a sua conta.
Section1 -> Adicionamos o uma imagem ficticia para representar o nosso painel principal, onde terá uma imagem desenvolvida pelo grupo.
Section2 -> Textos informativos sobre a plataforma e o negócio, além de imagens em div ilustrativas para ambientar o usuário





**TUTORIAL CSS**

1. Seletores Universais e de Base (*, body)
* (Asterisco): Serve para "limpar" as configurações padrão do navegador. Ele zera margens e garante que o tamanho dos elementos seja calculado corretamente.
body: Define as regras gerais para toda a página, como o tipo de letra (fonte), a cor do texto (branco) e a cor de fundo (preto).

2. O Topo da  Página(header, nav, .logo)
header: É o "container" do topo. O código faz com que ele fique fixo no topo da tela e tenha um efeito de vidro embaçado.
.logo: Estiliza o nome da marca, deixando-o grande e na cor verde neon.
nav e ul: Organizam os links do menu em linha (um ao lado do outro) e removem as "bolinhas" de lista.
.btn-entrar: Cria o visual de um botão de destaque, com bordas arredondadas e sombra.

3. A Primeira Impressão (.hero, h1, .highlight)
.hero: Cria uma seção que ocupa toda a altura da tela (100vh) com uma imagem de fundo.
h1: Define o título principal com letras gigantes para causar impacto.
.highlight: Uma classe usada para colorir apenas uma palavra específica do título em verde.

4. Seção de Conteúdo (.quem-somos, .container, .images)
.quem-somos: Define o espaçamento (respiro) entre essa seção e a anterior.
.container: Usa o comando grid para dividir a tela em duas colunas: uma para o texto e outra para as fotos.
.images img: Estiliza as fotos para que tenham cantos arredondados e ganhem um efeito de "zoom" ao passar o mouse.

5. Adaptação para Celulares (@media)
@media: Não é uma tag de conteúdo, mas uma regra de adaptação. Ela diz ao navegador: "Se a tela for pequena, mude o layout de duas colunas para uma só", garantindo que o site funcione bem em qualquer aparelho.


Código CSS

~~~~
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Unicash - Controle do seu futuro</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background: #0f0f1a;
      color: #e0e0ff;
      line-height: 1.6;
    }

    /* Header / Navbar */
    header {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1000;
      background: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(0, 255, 150, 0.15);
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1400px;
      margin: 0 auto;
      padding: 1.2rem 5%;
    }

    .logo {
      font-size: 1.8rem;
      font-weight: bold;
      color: #00ff96;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .logo i {
      font-size: 2rem;
    }

    .nav-links {
      display: flex;
      gap: 2.5rem;
      align-items: center;
    }

    .nav-links a {
      color: #d0d0ff;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s;
    }

    .nav-links a:hover {
      color: #00ff96;
    }

    .btn-entrar {
      background: #00ff96;
      color: #0f0f1a;
      padding: 0.7rem 1.8rem;
      border-radius: 50px;
      font-weight: bold;
      text-decoration: none;
      transition: all 0.3s;
    }

    .btn-entrar:hover {
      background: #00e085;
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 255, 150, 0.3);
    }

    /* Hero */
    .hero {
      height: 100vh;
      min-height: 800px;
      background: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)),
                  url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600') center/cover no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 0 5%;
    }

    .hero-content {
      max-width: 900px;
    }

    .hero h1 {
      font-size: clamp(2.8rem, 8vw, 6.5rem);
      font-weight: 900;
      margin-bottom: 1.5rem;
      line-height: 1.1;
      color: white;
    }

    .hero h1 span {
      color: #00ff96;
      display: block;
    }

    .hero p {
      font-size: clamp(1.3rem, 4vw, 1.8rem);
      margin-bottom: 2.5rem;
      color: #c0c0ff;
    }

    /* Quem Somos */
    .quem-somos {
      padding: 120px 5% 100px;
      background: #0a0a14;
      text-align: center;
    }

    .quem-somos h2 {
      font-size: 3.5rem;
      margin-bottom: 3rem;
      color: #00ff96;
    }

    .content-wrapper {
      max-width: 1100px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .text-side {
      text-align: left;
    }

    .text-side h3 {
      font-size: 2.2rem;
      margin-bottom: 1.5rem;
      color: white;
    }

    .text-side p {
      font-size: 1.2rem;
      color: #ffff;
      margin-bottom: 1.4rem;
    }

    .images-side {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }

    .images-side img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.6);
      transition: transform 0.4s;
    }

    .images-side img:hover {
      transform: scale(1.04);
    }

    @media (max-width: 900px) {
      .content-wrapper {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
      
      .images-side {
        grid-template-columns: 1fr;
      }
      
      .hero h1 {
        font-size: 3.8rem;
      }
      
      .nav-links {
        gap: 1.5rem;
      }
    }
  </style>
</head>
<body>

  <header>
    <nav>
      <div class="logo">
        <i class="fa-solid fa-graduation-cap"></i>
        Unicash
      </div>

      <div class="nav-links">
        <a href="#">Assinaturas</a>
        <a href="#">Planilhas</a>
        <a href="#">Meus cursos</a>
        <a href="#" class="btn-entrar">ENTRAR</a>
      </div>
    </nav>
  </header>

  <section class="hero">
    <div class="hero-content">
      <h1>
        UNICASH<span>VOCÊ NO CONTROLE</span>DO SEU FUTURO
      </h1>
      <!-- <p>Aprenda a investir de verdade — sem promessas falsas</p> -->
    </div>
  </section>

  <section class="quem-somos">
    <h2>QUEM SOMOS?</h2>

    <div class="content-wrapper">
      <div class="text-side">
        <h3>Ei, jovem! Você está na faculdade?</h3>
        <p>
          Lidando com mesada apertada, estágios mal pagos e sonhos de independência financeira?<br><br>
          O Unicash é o lugar perfeito para você aprender a investir de forma inteligente e segura, sem cair em armadilhas ou promessas vazias.
        </p>
        <p>
          Aqui transformamos conceitos complicados em aulas divertidas, gamificadas e práticas — como se fosse uma "uni".
        </p>
      </div>

      <div class="images-side">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2vfjoZ1rfBXADaqG1_uU4tbF3gi9bnDAaog&s" alt="Dinheiro e planilhas">
        <img src="https://vejasp.abril.com.br/wp-content/uploads/2023/08/Higieno%CC%81polis_033-1.jpg?quality=70&strip=info&w=414&h=280&crop=1" alt="Formatura e celebração">
      </div>
    </div>
  </section>

</body>
</html>
CÓDIGO CSS

**TUTORIAL Javascript**

HTML

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EduTech</title>

  <link rel="stylesheet" href="style.css">
  <script src="main.js"></script>

  <!-- Ícones -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
</head>
<body>

  <!-- HEADER -->
  <header>
    <nav>
      <div class="logo">
        <i class="fas fa-graduation-cap"></i>
        EduTech
      </div>

      <div class="nav-links">
        <a href="#">Início</a>
        <a href="#quem-somos">Quem Somos</a>
        <a href="#">Cursos</a>
        <a href="#">Contato</a>
        <a href="#" class="btn-entrar">Entrar</a>
        <button onclick="mudarTema()" class="btn-tema">Tema</button>
      </div>
    </nav>
  </header>

  <!-- HERO -->
  <section class="hero">
    <div class="hero-content">
      <h1>
        Transforme seu
        <span>Futuro Hoje</span>
      </h1>
      <p>
        Aprenda tecnologia de forma prática e moderna com os melhores cursos online.
      </p>
      <a href="#" class="btn-comecar">Começar Agora</a>
    </div>
  </section>

  <!-- QUEM SOMOS -->
  <section class="quem-somos" id="quem-somos">
    <h2>Quem Somos</h2>

    <div class="content-wrapper">
      
      <div class="text-side">
        <h3>Educação que transforma vidas</h3>
        <p>
          Somos uma plataforma focada em ensinar tecnologia de forma simples,
          prática e acessível para todos.
        </p>
        <p>
          Nosso objetivo é preparar você para o mercado de trabalho com habilidades reais.
        </p>
      </div>

      <div class="images-side">
        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" alt="">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" alt="">
        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" alt="">
        <img src="https://images.unsplash.com/photo-1581090700227-4c4c3f1b1f62" alt="">
      </div>

    </div>
  </section>

  <!-- DICAS -->
  <section class="dicas">
    <h2>Dica Financeira</h2>
    <p id="dica">Clique no botão para gerar uma dica</p>
    <button onclick="gerarDica()" class="btn-dica">Gerar Dica</button>
  </section>

  <!-- JS -->
  <script src="script.js"></script>

</body>
</html>

CSS

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: #0f0f1a;
  color: #e0e0ff;
  line-height: 1.6;
  margin: 0;
  transition: all 0.3s ease;
}


header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.2rem 5%;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: #00ff96;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-links a {
  color: white;
  text-decoration: none;
}

.btn-entrar, .btn-dica, .btn-comecar, .btn-tema{
  background: #00ff96;
  color: black;
  padding: 0.6rem 1.5rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;

}


/*imagem usada no nosso header*/
.hero {
  height: 100vh;
  background: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)),
              url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero h1 {
  font-size: 4rem;
  color: white;
}

.hero span {
  color: #00ff96;
}

.quem-somos {
  padding: 120px 5%;
  background: #0a0a14;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.images-side {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}
.images-side img{
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.dicas {
  padding: 80px 5%;
  text-align: center;
  background: #0a0a14;
}

.dicas h2 {
  color: #00ff96;
  margin-bottom: 20px;
}

.dicas p {
  font-size: 1.3rem;
  margin-bottom: 20px;
}

@media (max-width: 900px) {
  .content-wrapper {
    grid-template-columns: 1fr;
  }
}

.light {
    background: white;
    color: white;
  }
  
  .light .text-side h3{
    color:#00ff96
  }
  
  .light .text-side p,
  .light .nav-links a {
    color: black;
  }
  
  .light header {
    background: rgba(255, 255, 255, 0.9);
  }

  .light .quem-somos{
    background: rgba(255, 255, 255, 0.9);
    color: black;
  }
.light .dicas {
  background-color: #00ff96;
  color: black;
}

  .light .btn-dica,  .light .btn-entrar, .light .btn-comecar{
    background: black;
    color:white ;
  }

  .light .logo, .light .text-side,.light .dicas h2 {
    color: #0a0a14;
  }
  JS

 function mudarTema() {
    document.body.classList.toggle("light");

  }
  
  const dicas = [
    "Evite gastar mais do que ganha",
    "Guarde pelo menos 10% do que recebe",
    "Cuidado com o cartão de crédito",
    "Tenha uma reserva de emergência"
  ];
  
  function gerarDica() {
    let random = Math.floor(Math.random() * dicas.length);
    document.getElementById("dica").textContent = dicas[random];
  }
~~~~~
  Adicionamos a mudança de tema do site através da função "mudar tema", oferencendo ao usuário a opção de ver o site no modo light, junto com mudança no css.
  Além disso, incluimos um gerados de dicas financeiras utilizando a função function gerarDica() para que o usuário se sinta motivado durante sua experiência no site.

Resumo do código:

Este projeto consiste em uma plataforma institucional focada em educação financeira. O desenvolvimento foi dividido em três camadas fundamentais:
​1. Estrutura de Conteúdo (HTML5)
​O site foi construído utilizando HTML5 semântico, priorizando a acessibilidade e a organização hierárquica. As principais seções incluem:
​Cabeçalho de Navegação: Menu fixo com links de ancoragem e chamadas para ação (CTA).
​Seção Hero: Destaque principal com proposta de valor clara e fundo visual de alto impacto.
​Seção Institucional: Divisão em grid para apresentar a missão da empresa e galeria visual.
​Módulo de Interação: Área dedicada a dicas dinâmicas para o usuário.
​2. Design e Identidade Visual (CSS3)
​A estética do projeto segue o estilo Modern Dark Mode, comum em interfaces de tecnologia e finanças.
​Layout Responsivo: Implementação de Flexbox e CSS Grid, garantindo que a interface se adapte perfeitamente a dispositivos móveis e desktops.
​Estilização Avançada: Uso de filtros de desfoque (backdrop-filter) para o menu e efeitos de transição suave em botões e imagens.
​Temas Customizáveis: Arquitetura de classes preparada para alternância de cores (Light/Dark mode) sem necessidade de recarregar a página.
​3. Dinâmica e Funcionalidade (JavaScript)
​A lógica de programação foi aplicada para tornar a experiência do usuário menos estática:
​Gerenciador de Temas: Manipulação do DOM para alternar a classe de estilo do corpo da página em tempo real.
​Motor de Conteúdo Aleatório: Algoritmo que seleciona dicas financeiras a partir de um conjunto de dados (array), garantindo que o usuário receba informações diferentes a cada interação.


