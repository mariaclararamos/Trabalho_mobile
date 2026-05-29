Maria Clara torres RA: 10426069
Paulo Cesar Carvalho de Andrade RA: 10420708
Valério dos Santos Cavalcanti RA: 10410778
Felipe Souza RA: 10322325

# POR QUE O EduTech É FEITO ESPECIALMENTE PARA JOVENS?
Somos a geração mais conectada da história, mas ainda muito desconectada do dinheiro.
Temos o celular na mão o tempo todo, acessamos qualquer informação em segundos, usamos apps de delivery, transporte, streaming e redes sociais o dia inteiro. Porém, a maioria de nós entre 18 e 25 anos não sabe o que é Tesouro Selic, ETF, ações, fundos imobiliários ou como começar a investir com pouco dinheiro. O mercado financeiro ainda parece um clube exclusivo para adultos com muito capital, terno e experiência.
Enquanto isso, o futuro financeiro do Brasil está nas nossas mãos. É a nossa geração que vai construir riqueza, tomar as grandes decisões de investimento e definir o cenário econômico das próximas décadas. No entanto, a maioria ainda não recebeu as ferramentas certas para dominar o próprio dinheiro.
A educação financeira tradicional no Brasil foca em adultos já endividados, com hipoteca, filhos e carreira consolidada. E nós? 
A vida de estudante é um equilíbrio constante: provas, prazos, estágios e a eterna luta para fazer o dinheiro durar até o dia 30. Surgem as faturas do cartão, o aluguel da república e aquela dúvida cruel: “Dá pra ir no rolê ou o café da semana que vem está em risco?”.

## Por que escolhemos esse tema?
Ao formarmos o grupo, queríamos escolher um tema com o qual nos identificássemos profundamente e no qual conhecêssemos de perto as dificuldades envolvidas, justamente por fazermos parte do público-alvo. Dentre os diversos temas propostos como reciclagem e ajuda ao meio ambiente, optamos pela inserção do mercado financeiro e dos investimentos no universo dos jovens universitários. Foi a partir dessa escolha que nasceu o Unicash.

## O problema que resolvemos
Para muitos jovens, a faculdade é o primeiro contato real com a gestão financeira da própria vida. Sem orientação, a liberdade da juventude facilmente vira endividamento precoce. No Brasil, apenas 3 em cada 10 jovens entre 18 e 24 anos se consideram financeiramente alfabetizados. A educação financeira praticamente não existe na grade curricular das universidades, e o resultado é uma geração entrando no mercado de trabalho já com hábitos ruins, score de crédito baixo e oportunidades de investimento perdidas.

## Nosso propósito
O EduTech nasceu para quebrar essa barreira e democratizar o acesso à inteligência financeira. Não queremos apenas explicar o que é juro composto — queremos que você aprenda a usar ele a seu favor desde os primeiros R$ 100.
Focamos no público universitário por três motivos principais:
Redução de estresse e saúde mental: Um estudante preocupado com boletos não consegue focar nas aulas. Equilíbrio financeiro traz tranquilidade.
Autonomia real: Tomar decisões baseadas em planejamento, e não em impulso ou falta de opção.
Futuro sustentável: Quem aprende a fazer 100 reais renderem hoje saberá fazer 10 mil, 100 mil e 1 milhão renderem amanhã. O hábito começa agora.

## Por que esse tema é tão poderoso?
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

1. A parte de configuração (head) prepara o site para funcionar corretamente. Ela permite o uso de acentos, adapta a página para celulares, define o nome que aparece na aba do navegador e conecta os arquivos externos: o CSS, que cuida da aparência, e o JavaScript, que adiciona funcionalidades.

2. O corpo da página (body) é onde fica tudo que o usuário realmente vê. A partir daí o site começa a ser montado visualmente.

3. O cabeçalho (header com nav) representa o topo do site. Ele organiza a navegação, contendo a logo, os links do menu e os botões. A função principal dessa parte é permitir que o usuário se localize e navegue entre as seções.

4. A área de navegação (nav-links) reúne os links clicáveis do menu. Esses links permitem que o usuário vá para diferentes partes do site, como a seção “Quem Somos”.

5. O botão de tema é uma parte interativa. Quando o usuário clica nele, uma função em JavaScript é executada, normalmente para alterar o visual do site, como trocar entre modo claro e escuro.

6. A seção principal (hero) é a primeira parte visível do site. Ela tem a função de chamar a atenção do usuário, apresentando uma mensagem forte e um botão que incentiva uma ação, como começar a usar a plataforma.

7. A seção “Quem Somos” serve para apresentar a empresa. Nela, o site explica sua proposta, objetivo e o que oferece ao usuário, ajudando a gerar confiança.
Dentro dessa seção, há uma divisão entre texto e imagens. O texto explica a ideia da plataforma, enquanto as imagens ajudam a tornar a página mais visual e atrativa.

8. A seção de dicas é a parte interativa do site. Ela começa com um texto padrão, mas esse texto pode ser alterado dinamicamente. O botão de gerar dica executa uma função em JavaScript que muda o conteúdo do texto, mostrando uma nova dica para o usuário.

Por fim, o código conecta um arquivo JavaScript adicional, que contém as funções usadas nos botões, e encerra a estrutura do site.




**TUTORIAL CSS**
Principais pontos do nosso CSS
1. Body -> Configurações universais voltadas para todo o body do projeto delimitando a fonte, a cor do background.
2. Nav -> Configurações do nosso Menu prinicpal, queriamos que ele fosse alinhado com nosso logo e que ficasse no centro do nosso código .
3. hero -> imagem usada para o background do nosso header. 
4. images-> usamos o content-wrapper afim de criar um mosaico com as fotos do contexto do nosso projeto.
5. light -> parametros para criação de um tema claro, mudando diversos parametros como botões e backgrounds.
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


**TUTORIAL REACT**


O projeto inicialmente foi desenvolvido utilizando HTML, CSS e JavaScript puros. Porém, durante o desenvolvimento da atividade, tivemos que adaptar a estrutura para Next.js, deixando o projeto mais moderno, organizado e mais próximo das tecnologias utilizadas atualmente no mercado.

No Next.js, a estrutura da página passa a ser feita com React e JSX, separando melhor as partes do projeto e facilitando a organização do código.

Além disso, também adicionamos algumas melhorias recentes no projeto:

1. Footer completo com informações de contato e redes sociais.
2. Melhor responsividade para tablets e celulares.
3. Ajustes no menu para telas menores.
4. Melhor adaptação das imagens em dispositivos mobile.
5. Tema claro funcionando junto com as novas seções.
6. Melhor experiência visual para o usuário.

## Atualização no HTML

Na versão mais recente, adicionamos um rodapé no final do site.

~~~~html
<!-- FOOTER -->
<footer class="footer">

  <div class="footer-container">

    <div class="footer-logo">

      <h2>EduTech</h2>

      <p>
        Transformando vidas através da tecnologia.
      </p>

    </div>

    <div class="footer-contato">

      <h3>Contato</h3>

      <p>Email: contato@edutech.com</p>
      <p>Telefone: (11) 99999-9999</p>
      <p>São Paulo - SP</p>

    </div>

    <div class="footer-redes">

      <h3>Redes Sociais</h3>

      <a href="#">Instagram</a>
      <a href="#">LinkedIn</a>
      <a href="#">YouTube</a>

    </div>

  </div>

  <div class="footer-copy">
    <p>© 2026 EduTech - Todos os direitos reservados.</p>
  </div>

</footer>
~~~~

O footer foi adicionado para deixar o site mais completo e com aparência mais profissional. Nele colocamos o nome da plataforma, uma pequena frase sobre o projeto, informações de contato, redes sociais e os direitos autorais.

## Atualização no CSS

Também adicionamos novos estilos no CSS para o footer, para o tema claro e para a responsividade.

~~~~css
.footer {
  background: #05050d;
  color: white;
  padding: 60px 5% 20px;
}

.footer-container {
  max-width: 1400px;
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3rem;

  flex-wrap: wrap;
}

.footer-logo,
.footer-contato,
.footer-redes {
  flex: 1;
  min-width: 250px;
}

.footer h2,
.footer h3 {
  color: #00ff96;
  margin-bottom: 15px;
}

.footer p {
  margin-bottom: 10px;
}

.footer-redes {
  display: flex;
  flex-direction: column;
}

.footer-redes a {
  color: white;
  text-decoration: none;
  margin-bottom: 10px;
  transition: 0.3s;
}

.footer-redes a:hover {
  color: #00ff96;
}

.footer-copy {
  text-align: center;
  margin-top: 40px;
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 20px;
  font-size: 0.9rem;
}

/* Tema claro */
.light .footer {
  background: #f1f1f1;
  color: black;
}

.light .footer-redes a {
  color: black;
}

.light .footer-redes a:hover {
  color: #00ff96;
}

.light .footer-copy {
  border-top: 1px solid rgba(0,0,0,0.1);
}

/* Responsivo */
@media (max-width: 900px) {
  .footer-container {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  .footer-redes {
    align-items: center;
  }
}
~~~~

Esse trecho do CSS foi usado para estilizar o rodapé do site. O `.footer` define a cor de fundo, a cor dos textos e o espaçamento. O `.footer-container` organiza as informações em colunas, deixando o layout mais bonito e alinhado.

Também colocamos regras para o tema claro, garantindo que o rodapé continue legível quando o usuário trocar o tema do site.

Além disso, usamos `@media` para deixar o footer responsivo. Assim, quando o site for acessado em telas menores, as informações ficam uma abaixo da outra, facilitando a leitura.

## Responsividade geral adicionada

Também adicionamos uma parte no CSS para melhorar o comportamento do site em tablets e celulares.

~~~~css
/* =========================
   RESPONSIVIDADE GERAL
========================= */

/* Tablets */
@media (max-width: 900px) {

  nav {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .hero {
    padding: 120px 5% 60px;
    height: auto;
  }

  .hero h1 {
    font-size: 3rem;
  }

  .hero p {
    font-size: 1.1rem;
  }

  .content-wrapper {
    grid-template-columns: 1fr;
  }

  .images-side {
    grid-template-columns: 1fr 1fr;
  }

  .text-side {
    text-align: center;
  }
}

/* Celulares */
@media (max-width: 600px) {

  nav {
    padding: 1rem 5%;
  }

  .logo {
    font-size: 1.5rem;
  }

  .nav-links {
    flex-direction: column;
    gap: 0.8rem;
  }

  .botoes {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  .btn-entrar,
  .btn-tema,
  .btn-comecar,
  .btn-dica {
    width: 100%;
  }

  .hero {
    padding-top: 180px;
  }

  .hero h1 {
    font-size: 2.2rem;
    line-height: 1.2;
  }

  .hero p {
    font-size: 1rem;
    padding: 0 10px;
  }

  .images-side {
    grid-template-columns: 1fr;
  }

  .images-side img {
    height: 220px;
  }

  .quem-somos,
  .dicas,
  .footer {
    padding-left: 7%;
    padding-right: 7%;
  }

  .dicas p {
    font-size: 1rem;
  }

  .footer-container {
    gap: 2rem;
  }
}
~~~~

Essa parte foi adicionada para garantir que o site funcione bem em diferentes tamanhos de tela. Em tablets, o menu passa a ficar mais organizado em coluna, as imagens se adaptam melhor e os textos ficam mais centralizados.

Em celulares, os links do menu ficam um abaixo do outro, os botões ocupam toda a largura da tela e o tamanho dos textos é reduzido para melhorar a leitura. Isso deixa o projeto mais responsivo e mais confortável para o usuário.

## Atualização do JavaScript

O JavaScript continua responsável por duas interações principais do site.

~~~~javascript
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
~~~~

A função `mudarTema()` adiciona ou remove a classe `light` do body. Quando essa classe é ativada, o CSS muda as cores do site, criando o modo claro.

A função `gerarDica()` escolhe uma dica aleatória dentro da lista de dicas financeiras e mostra essa frase na tela. Isso deixa o site mais interativo e faz com que o usuário tenha uma experiência mais dinâmica.

## Mudança para Next.js

Depois da construção inicial com HTML, CSS e JavaScript, o projeto também foi adaptado para Next.js. Essa mudança foi necessária porque o Next.js permite trabalhar com React, componentes e uma estrutura mais organizada.

No Next.js, o HTML tradicional passa a ser escrito em JSX. O CSS pode ser mantido em um arquivo global, como `globals.css`, e as interações que antes ficavam no JavaScript passam a ser controladas dentro dos componentes React.

Essa mudança deixou o projeto mais próximo de uma aplicação real usada no mercado, facilitando a manutenção, a organização e futuras melhorias.


# ATUALIZAÇÕES MAIS RECENTES DO PROJETO

## Novas funcionalidades adicionadas
- Sistema completo de login e cadastro funcionando com LocalStorage
- Modal de autenticação integrado ao site
- Alternância entre formulário de login e cadastro
- Dashboard personalizada para o usuário após autenticação
- Navegação dinâmica entre páginas usando JavaScript
- Sistema de cursos interativos
- Geração automática de dicas financeiras
- Tema claro e escuro
- Interface responsiva para diferentes dispositivos
- Armazenamento de usuários diretamente no navegador
- Atualização dinâmica do header após login
- Estrutura organizada em HTML, CSS e JavaScript separados

## Tecnologias utilizadas
- HTML5
- CSS3
- JavaScript
- LocalStorage
- Manipulação de DOM

## Estrutura do projeto
- index.html → Estrutura principal do site
- style.css → Estilização completa da plataforma
- main.js → Funcionalidades, autenticação, navegação e interações

## Melhorias implementadas no JavaScript
- Simulação de API para login e cadastro
- Controle de autenticação do usuário
- Manipulação dinâmica de conteúdo
- Controle de tema dark/light
- Sistema de renderização dinâmica das páginas
- Atualização automática da interface após login

## Objetivo do projeto
O EduTech foi desenvolvido para aproximar jovens universitários da educação financeira através de uma plataforma moderna, intuitiva e acessível. O projeto busca unir tecnologia e educação financeira em um ambiente simples, funcional e adaptado para o público jovem.
