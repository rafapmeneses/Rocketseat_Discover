# [Git]https://git-scm.com/

Legenda --> < > Para " <Variável> " 

            --> Fluxo Comum <--

git init // Cria um repositório do git

git add . // ou --all para adicionar arquivos para o Stage Area

git commit -m "" // Adicionar o que está no Stage Area para o Local Repository

git push origin main // Mandar do Repositório local da origin para a branch main para o github


            --> Adicionando um Repositório <--

git status // Mostra as informações do repositório e a branch em uso

git remote add origin <link do repositório> // Para adicionar remotamente o repositório no github

git remote -v // para verificação


            --> Outros Comandos <--

git log // Mostrar os pontos do projeto

git log --oneline // Buscar resumido
git log -n <5> // Buscar 5 pontos 
git log --since=<2020-10-01> // Buscar depois de 2020-10-01
git log --until=<2020-10-01> // Buscar até 2020-10-01
git log --author=Fake // Buscar do autor Fake
git log --grep="mensagem do commit" // Buscar por mensagem

git config // Para configurar as informações do git

git clone <link do repositório> // Para copiar o repositório 

git checkout -b <Branch> // Para criar uma ramificação e ja ir para ela

git commit -am "mensagem" // Para dar git add . e usar o comando commit junto

git pull // Para puxar os arquivos do repositório atual e atualizar

git checkout <idCommit> -- <Arquivo.txt> // Restaurar arquivo para o estado que estava de certo commit

git checkout -- <ArquivoDeletado.txt> // Para restaurar o arquivo deletado

git restore <Arquivo.txt> // Serve para descartar mudanças das adições (git add)

git show <idCommit> // Mostrar informações do commit, Sem o id, para mostrar tudo

git branch <NovaBranch> // Para criar uma ramificação

git checkout <Branch> // Para mudar para a ramificação desejada

git merge <Branch> // Para unir as ramificações 

git branch -D <Branch> // Para deletar a ramificação

git diff // Mostra as modificações

git mv <ArquivoAntigo.txt> <ArquivoNovo.txt> // Renomear arquivo

git mv <ArquivoAntigo.txt> <Pasta/ArquivoNovo.txt> // Mover arquivo para uma pasta

git commit --amend "" // Alterar o ultimo commit

git revert <commit> // Reverter commit

            --> Comandos Básicos <--

…or create a new repository on the command line
echo "# test" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/nome/repositorio
git push -u origin main

…or push an existing repository from the command line
git remote add origin https://github.com/nome/repositorio
git branch -M main
git push -u origin main