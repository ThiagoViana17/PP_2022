# Ginásio para educação física

#### Problemática: Uma escola está com um ginásio em aberto, algumas atividades que podem ser praticadas nesse ginásio são: Natação, Boxe, Judô e Musculação. Cada aluno dessa escola só pode se cadastrar em um único exercício físico pois cada exercício físico pode ocorrer no mesmo dia.

| Exercício   |      dias da semana |
|----------|:-------------:|
| natação |  segunda, terça, quarta |
| Boxe |    segunda, quarta, sexta   |
| Judô | terça, quarta, sexta |
| Musculação | quarta, quinta, sexta |


#### Solução: Implementar um sistema onde cada aluno possa se cadastrar em uma atividade do ginásio e salvar o registro dos alunos por nome, exercício e dias do exercício

##### Padrões utilizados:
- Strategy
- Singleton


##### Strategy: Eu utilizei ele para implementar a forma que cada exercício deve se comportar, como por exemplo o nome e os dias que será praticado, evitando assim poluição no código no momento da implementação na qual cada aluno será cadastrado no sistema. Evitando o if e else constantemente.

##### Singleton: Eu utilizei o singleton pra levantar um banco de dados na memória pra poder chamar-lo qualquer canto e apesar de ter várias instâncias de usuário a mesma instância de banco de dados será utilizada, centralizando assim os dados em um único lugar (ou instância).
