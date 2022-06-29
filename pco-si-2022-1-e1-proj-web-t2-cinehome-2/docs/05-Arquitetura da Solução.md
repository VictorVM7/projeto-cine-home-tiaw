# Arquitetura da Solução

  O sistema da CineHome ficará hospedado n. Será desenvolvido em linguagem de marcação (HTML), linguagem de folha de estilos (CSS) e linguagem de programação (JavaScript). O sistema também suportará arquivos de imagens,video,gif entre outros (JPEG, PNG e entre outros) ,sua principal funcionalidade utilizará arquivos de video para a exibição do filme escolhido pelo usuário. O site contará com uma área de cadastro para que seja possível o usuário criar uma conta em nosso sistema para poder utilizar a área de compra de ingresso, que os mesmos poderão ser tanto presenciais como on-line's. Para o usuário saber quais filmes ele ja comprou ingresso , possuíra uma tela de "Sessões", no qual exibirá as sesões desse usuário e onde o mesmo vai poder acessar os seus filmes para assitir online. Para o usuário conseguir acessar o filme o mesmo vai inserir uma chave de acesso para o player do filme ser liberado, essa chave de acessado sera enviada ao usuário no email após a compra do ingresso. Essa sera a maneira de verificação do ingresso para ver se o mesmo é válido ou não.

  Nossa Página Inicial apresentará os filmes que possui em cartaz nos cinemas no momento e também os que serão lançados em breve, além de um cabeçalho no qual terá todos os caminho para "Login","Cadastro","Filmes em Cartaz","Filmes em Breve" e "Suas Sessões".
  
* Objetivo: Temos como principal objetivo realizar uma maior facilitação de acesso aos cinemas, para que aqueles que por diversos motivos não conseguem ter acesso aos cinemas conseguirem acessar de uma maneira mais prática os filmes através de nossa plataforma.
  
* Planos: Possuirá todos os filmes que estão em cartaz nos filmes para que seja possível o usuário escolher o filme que desejar e também terá a opção do mesmo escolher se ira querer ver o filme de modo presencial ou on-line.

* Funcionamento: Possuiremos ferramentas que facilitarão a experiência de nosso usuário na utilização do sistema sendo o mesmo bastante intuitivo.

* Usuário Cadastrado: O usuário cadastrado poderá realizar a compra dos ingressos ,escolher como o mesmo vai assitir o filme e receber a chave do filme por e-mail caso tenha escolhido o modo online e assim assitir o filme através do nosso sistema.

* Contato: Na parte do rodapé de nossa plataforma será incluido todos os contatos através de redes socias e até mesmo de telefone.

# Diagrama de componentes

![Diagrama](https://user-images.githubusercontent.com/101759330/166177203-c8aa95f9-acd4-4000-8509-7ab265b8deca.png)

* Navegador - Interface básica do sistema

* Páginas Web - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.

* Hospedagem - local na Internet onde as páginas são mantidas e acessadas pelo navegador.

  O site do Cine Home tera formas de login e cadastro para os usuários conseguirem acessar suas informações como seus ingressos, para assim ser possível a visualização do filme.

# Tecnologias Utilizadas
  Na construção do site serão usadas as linguagens HTML, CSS e Javascript por serem as mais indicadas para construção de sites web. A IDE de desenvolvimento escolhida pela equipe foi o VsCode por ser gratuito e apresentar ferramentas que facilitam o trabalho colaborativo em equipe, facilitando o trabalho da equipe. Será utilizado o Javascript para manipular eventos de clicks em botões e criar alteração do layout de forma dinâmica. A equipe também pretende utilizar o framework Bootstrap,para realizar a forma responsiva do sistema e também utilizar a plataforma Font Awesome para utilização de ícones prontos.Também foi utilizados os programas Figma,Affinity e Drawio para a realização do design do sistema,user flow,regra de casos de usos e entre outros.E como plataforma de gerenciamento do projeto e envio do mesmo será utilizado o git hub.

![Ferramentas](https://user-images.githubusercontent.com/101759330/165947593-22e4cac2-ca71-4b5e-81d4-247a2616ad95.png)


## Diagramas de Casos de Usos 

  Descrevemos por meio de um diagrama de caso de uso graficamente um subconjunto do modelo para simplificar a comunicação e atribuir as tarefas do usuário e do desenvolvedor, resumindo assim por meio de blocos a ação que cada um vai percorrer.  

![image](https://user-images.githubusercontent.com/101759330/175292168-ac4972fd-ce55-4248-ac74-aa86f3a0b240.png)

## Hospedagem

  No momento a hospedagem de nosso sistema sera feita através do Heroku para um acesso geral através do navegador.

