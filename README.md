# Lista de exercícios 1 - Angular

Fundamentos de programação para Web - UNIPAR, 3º período.  
Professor: Paulo H. P. Santos.  
Aluno: Matheus Mendes.

Resolução dos sete exercícios do 2º bimestre. Cada exercício está em um projeto separado dentro da pasta `projects`, para não misturar rotas com o mesmo nome.

## Como executar

É necessário ter Node.js 22.22.3 ou superior da linha 22, ou Node.js 24.15.0 ou superior da linha 24, e npm instalados (Angular 22).

Na pasta principal, instale as dependências uma vez:

```bash
npm ci
```

Depois escolha o exercício:

```bash
npm start -- exercicio-01
```

Abra `http://localhost:4200`. Para trocar, pare o programa com `Ctrl+C` e execute o comando com outro número:

```bash
npm start -- exercicio-02
npm start -- exercicio-03
npm start -- exercicio-04
npm start -- exercicio-05
npm start -- exercicio-06
npm start -- exercicio-07
```

## Exercícios e rotas

| Exercício | Conteúdo | Rotas |
| --- | --- | --- |
| 01 | Home, sobre e contato; três botões na Home | `/`, `/sobre`, `/contato` |
| 02 | Galeria com seis imagens locais e detalhe fixo | `/galeria`, `/detalhe` |
| 03 | Formulário de login e dashboard | `/login`, `/dashboard` |
| 04 | Lista fixa de produtos e detalhe | `/produtos`, `/produto` |
| 05 | Três manchetes e botão Ler mais | `/noticias`, `/detalhe-noticia` |
| 06 | Administração com menus e rotas aninhadas | `/dashboard`, `/dashboard/usuarios`, `/dashboard/usuarios/detalhe`, `/dashboard/relatorios`, `/dashboard/relatorios/vendas`, `/dashboard/relatorios/estoque` |
| 07 | Cursos e professores com detalhes em rotas aninhadas | `/`, `/cursos`, `/cursos/detalhe`, `/professores`, `/professores/detalhe` |

Nos exercícios 02 a 06, a rota inicial redireciona para a primeira tela do exercício. O login só redireciona, sem validar usuário ou senha, como pedido na lista. As manchetes são os exemplos fixos do enunciado.

## Organização

- `projects/exercicio-XX/src/app/app.routes.ts`: rotas de cada exercício.
- Cada componente tem um arquivo TypeScript e um HTML.
- Nos exercícios 06 e 07, `children` define as rotas aninhadas e `router-outlet` mostra os componentes filhos dentro dos pais.
- `styles.css`: CSS simples compartilhado entre os exercícios.
- `projects/exercicio-02/public/imagens`: seis ilustrações fixas de paisagens, feitas para a galeria e incluídas no projeto.

Para compilar todos os exercícios:

```bash
npm run build
```

Para compilar apenas um:

```bash
npm run ng -- build exercicio-01
```
