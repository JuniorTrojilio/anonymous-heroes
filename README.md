<h1 align="center">Federação Anônima de Heróis</h1>
<div align="center">
  <img src="https://user-images.githubusercontent.com/39541807/78850427-90b1c180-79ed-11ea-802f-75d20977754e.png" alt="Monster 1">  
  <img src="https://user-images.githubusercontent.com/39541807/78850795-775d4500-79ee-11ea-9d6a-69afa0dd76d8.png" alt="Monster 2"> 
  <img src="https://user-images.githubusercontent.com/39541807/78851213-9e684680-79ef-11ea-807c-bc45329cf15c.png" alt="Monster 3" 200px>
</div>
<div>
<h3 align="center">"Porque Monstros anônimos também podem ser heróis"</h3>
<p align="right">_Funções Anônimas. 2020</p>
</div><br>
<hr>
<br>
<h3 align="center">🤔 What a hell is this?</h3>

<p align="center">
Durante meus estudos de TDD (test drive development) ficou um tanto quanto monôtomo escrever pequenos testes e depois executa-los, então juntamente com a ajuda do curso da [NodeBr](https://treinamento.nodebr.org/) desenvolvi esta pequena ferramenta CLI utilizando node, ela funciona como um crud básico cadastrando, alterando, excluindo ou listando "Heróis".
</p>


<h3 align="center">🛠️ O que eu usei?</h3>

<p align="center"> 
  <a href="https://nodejs.org/pt-br/">Node</a> | 
  <a href="https://www.npmjs.com/package/commander">Commander</a> | 
  <a href="https://www.npmjs.com/package/chalk">Chalk</a> <br><br>
  
 <h3 align="center">💻 Como utilizar?</h3>
 
 <p align="center">Inicie clonando o repositório em sua maquina!</p>
 
 ```
                          git clone https://github.com/JuniorTrojilio/anonymous-heroes.git
 ```
  <p align="center">Abra o repositório e execute um "npm install"</p>
 
 ```
                                                 $ npm install
 ```
  <p align="center">Pra verificar quais testes eu escrevi é só dar o comando:</p>
 
 ```
                                                 $ npm test
 ```
  <h4 align="center">Veja os comandos da ferramenta: </h4>
 
 ```
                                -V --version            Retorna a versão
                                -n --nome [value]       Nome do herói
                                -p --power [value]      Poder do herói
                                -i --id [value]         ID do herói
                                -c --cadastrar          Cadastrar um herói
                                -l --listar             Listar herói por id, * se value === ""
                                -r --remover            remove um herói pelo ID
                                -a --atualizar [value]  atualiza um herói pelo ID
                                -h, --help              display help for command
 ```
<p align="center">Os values escritos após a declaração devem ser escritos com aspas duplas "" para seja identificados como string, exceto a propriedade value referente ao ID esta pode ser escrita numéricamente, se vazia será respectivamente zero.</p>

<h4 align="center">Exemplo de Cadastrar</h4>
 
 ```
                           $ node index.js -c -n "Mike of Monsters SA." -p "Olho grande"
                           
                           Retorno: 
                           
                                  █████████
                                  █▄█████▄█
                                  █   ▼▼
                                  █           Herói cadastrado na Sociedade com sucesso!
                                  █   ▲▲      ID: 1
                                  █████████   Nome: não vou contar é anônimo
                                  ██ ██       Poder: Olho Grande
 ```
 
 <h4 align="center">Exemplo de Atualizar</h4>
 
 ```
                           $ node index.js -a -i 1 -n Zóio  -p Comer muito
                           
                           Retorno: 
                           
                                  █████████
                                  █▄█████▄█
                                  █▼▼▼▼▼▼▼█
                                  █▲▲▲▲▲▲▲█  Herói Atualizado com sucesso! ID:1
                                  ███ █ ███  Nome a̶n̶ô̶n̶i̶m̶o̶: Zóio 
                                  ██     ██  Poder: Comer
 ```
 
  <h4 align="center">Exemplo de Remover</h4>
 
 ```
                           $ node index.js -r -i 1
                           
                           Retorno: 
                           
                                  ███   ███
                                  █▄█   █▄█
                                  ███▼▼▼███  O Herói com id: 2, 
                                  █▲▲▲▲▲▲▲█  foi removido da sociedade com sucesso!
                                  ███   ███  
                                  ███   ███
 ```
 
   <h4 align="center">Exemplo de Listar</h4>
 
 ```
                                         $ node index.js -l -i 1
                           
                           Retorno: [ nome: 'Zóio', power: 'Comer', id: '1' } ]
 ```
 <p align="center">Se nenhum ID for passado retornará a lista completa.</p>
 
 <hr>
 
<p align="center"> <> com ❤ por <a href="github.com/juniortrojilio">Junior Trojilio</a></p>
                                      



 <p align="center">Os monstros foram emprestados pela <a href="https://www.freepik.com/free-photos-vectors/character">Freepik</a></p>
                
                
                 
                 
                 
                
