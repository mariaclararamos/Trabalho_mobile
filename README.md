Maria Clara torres RA: 10426069
Paulo Cesar Carvalho de Andrade RA: 10420708
Valério dos Santos Cavalcanti RA: 10410778
Felipe Souza RA: 10322325

# POR QUE O UNICASH É FEITO ESPECIALMENTE PARA JOVENS?
Porque o futuro financeiro do Brasil está nas mãos de quem tem entre 18 e 25 anos hoje - e a maioria ainda não recebeu as ferramentas certas para dominá-lo.
Quando falamos de educação financeira no Brasil, a conversa geralmente é direcionada a adultos que já têm dívidas acumuladas, hipoteca, filhos ou carreira consolidada. Mas e quem está começando agora? Quem está na faculdade, recebendo mesada ou primeiro salário de estágio, lidando com cartão de crédito pela primeira vez, morando na república ou tentando sair da casa dos pais?
A vida de estudante é uma constante equilibrista: de um lado, os prazos, as provas e os estágios; do outro, o desafio de fazer o dinheiro durar até o dia 30. Sabemos que a educação financeira raramente faz parte da grade curricular, mas ela é a ferramenta que decide se você vai terminar o semestre no azul ou no sufoco.
O problema que resolvemos
Para muitos, a faculdade é o primeiro contato real com a gestão da própria vida financeira. É o momento em que surgem as faturas de cartão, o aluguel da república e aquela dúvida cruel: "Dá para ir no rolê ou o café de amanhã está em risco?". Sem orientação, é fácil transformar a liberdade em dívida.
Nosso propósito
Nosso projeto nasceu para democratizar o acesso à inteligência financeira. Não queremos apenas que você saiba o que é um juro composto — queremos que você saiba como usá-lo a seu favor. Visamos ajudar o público universitário por três motivos principais:
Redução do Estresse: Um estudante preocupado com boletos não consegue focar na aula. Equilíbrio financeiro é saúde mental.
Autonomia Real: Queremos que você tome decisões baseadas em planos, não em impulsos ou falta de opção.
Futuro Sustentável: Aprender a lidar com 100 reais hoje é o que vai te ensinar a gerir 10 mil amanhã. O hábito começa agora.
Nossa missão é transformar a relação do estudante com o dinheiro: de uma fonte de ansiedade para um degrau rumo aos seus sonhos.
![Descrição da imagem]("C:\Users\10426069\Downloads\Green and White Modern Landing Page Wireframe Website UI Prototype.png")

# CÓDIGO E TUTORIAL
~~~
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>UNICASH</title>
</head>

<BODY>
    <HEADER>
        <nav>
            <ul>
                <a href="#">Assinaturas</a>
                <a href="#">Planilhas</a>
                <a href="#">Meus cursos</a>
                <button CLASS="ENTRAR">ENTRAR</button>
            </ul>
        </nav>
    
    </HEADER>
<SECTION> 
    <img src="https://img.freepik.com/vetores-gratis/contorno-plano-do-glifo-do-banco_78370-4516.jpg?semt=ais_rp_progressive&w=740&q=80" alt="por_do_sol">
</SECTION>

<section>
    <h2>QUEM SOMOS?</h2>
    <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis laborum tenetur alias in assumenda aliquid sunt fuga dignissimos maxime molestias eligendi, consequatur provident neque, recusandae placeat, temporibus est quisquam necessitatibus.
    </p>
    <div>
        <img src="https://eucontador.com.br/wp-content/uploads/2015/11/financas-01-3.png" alt="financas1">
        <img src="https://cdn.izap.com.br/sintibref-ba.org.br/plus/images?src=educacao-financeira/sintibref---ba.png&width=400&mode=max&v=1" alt="financas2">

    </div>
</section>
    
</BODY>
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


