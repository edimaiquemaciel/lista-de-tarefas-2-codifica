# Lista de Exercícios JavaScript - Avançado

Este repositório contém uma coleção de exercícios JavaScript focados em conceitos avançados de programação, incluindo estruturas de controle, funções, recursão e manipulação de arrays e objetos complexos.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar](#como-executar)
- [Exercícios Implementados](#exercícios-implementados)
- [Conceitos Abordados](#conceitos-abordados)
- [Contribuição](#contribuição)
- [Licença](#licença)

## 🎯 Sobre o Projeto

Esta lista de exercícios foi desenvolvida para aprimorar conhecimentos em JavaScript, cobrindo desde estruturas de controle avançadas até técnicas de otimização como memoization e debounce. Cada exercício foi cuidadosamente implementado seguindo boas práticas de programação.

## 🚀 Tecnologias Utilizadas

- **JavaScript (ES6+)** - Linguagem principal
- **Node.js** - Ambiente de execução
- **prompt-sync** - Biblioteca para entrada de dados no terminal

## 📁 Estrutura do Projeto

```
lista-de-exercicios-2/
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── Seção 1 - Estruturas de Controle Avançadas/
│   ├── 1. Validação de Datas.js
│   ├── 2. Jogo de Adivinhação.js
│   └── 3. Palavras Únicas.js
├── Seção 2 - Funções e Recursão/
│   ├── 4. Fatorial Recursivo.js
│   ├── 5. Debounce.js
│   └── 6. Memoization.js
└── Seção 3 - Arrays e Objetos Complexos/
    ├── 7. Mapeamento e Ordenação.js
    ├── 8. Agrupamento por Propriedade.js
    └── 9. Conversão Entre Formatos.js
```

## ⚡ Como Executar

### Pré-requisitos

- Node.js instalado (versão 12 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/edimaiquemaciel/lista-de-tarefas-2-codifica.git
cd lista-de-exercicios-2
```

2. Instale as dependências:
```bash
npm install
```

3. Execute qualquer arquivo específico:
```bash
node "Seção 1 - Estruturas de Controle Avançadas/1. Validação de Datas.js"
```

## 📚 Exercícios Implementados

### 🔧 Seção 1: Estruturas de Controle Avançadas

#### 1. Validação de Datas
**Arquivo:** `1. Validação de Datas.js`

Implementa uma função que valida se uma data é real, considerando:
- Validação de tipos de entrada
- Meses com diferentes quantidades de dias
- Lógica de anos bissextos para fevereiro

```javascript
dataValida(31, 12, 2023) // true
dataValida(29, 2, 2020)  // true (ano bissexto)
```

#### 2. Jogo de Adivinhação
**Arquivo:** `2. Jogo de Adivinhação.js`

Jogo interativo onde o usuário deve adivinhar um número entre 1 e 100:
- Geração de números aleatórios
- Loop com validação de entrada
- Sistema de dicas (mais alto/mais baixo)
- Contador de tentativas

#### 3. Palavras Únicas
**Arquivo:** `3. Palavras Únicas.js`

Extrai palavras únicas de uma string usando estruturas de controle básicas:
- Implementação manual sem métodos avançados de array
- Uso de loops aninhados para verificação de duplicatas

### 🔄 Seção 2: Funções e Recursão

#### 4. Fatorial Recursivo
**Arquivo:** `4. Fatorial Recursivo.js`

Implementação recursiva do cálculo de fatorial:
- Caso base para `n === 0`
- Tratamento de erro para números negativos
- Demonstração de recursão clássica

#### 5. Debounce
**Arquivo:** `5. Debounce.js`

Implementa a técnica de debounce para otimização de performance:
- Controle de execução de funções
- Uso de closures para manter estado
- Preservação de contexto e argumentos

```javascript
const searchDebounced = debounce(searchQuery, 300);
```

#### 6. Memoization
**Arquivo:** `6. Memoization.js`

Técnica de cache para otimização de funções:
- Armazenamento inteligente de resultados
- Uso de `Map` para performance
- Serialização de argumentos para chaves

### 📊 Seção 3: Arrays e Objetos Complexos

#### 7. Mapeamento e Ordenação
**Arquivo:** `7. Mapeamento e Ordenação.js`

Combina ordenação e mapeamento de arrays de objetos:
- Ordenação por propriedade específica
- Transformação de dados com `map`
- Preservação do array original

#### 8. Agrupamento por Propriedade
**Arquivo:** `8. Agrupamento por Propriedade.js`

Agrupa e soma dados usando `reduce`:
- Agrupamento dinâmico por propriedade
- Acumulação de valores numéricos
- Estruturação de dados complexos

#### 9. Conversão Entre Formatos
**Arquivo:** `9. Conversão Entre Formatos.js`

Funções para conversão entre arrays e objetos:
- `paresParaObjeto`: Converte array de pares em objeto
- `objetoParaPares`: Converte objeto em array de pares
- Demonstração de transformações bidirecionais

## 🧠 Conceitos Abordados

### Estruturas de Controle
- Loops `for` e `while`
- Condicionais `if/else` e `switch`
- Validação de dados de entrada

### Programação Funcional
- **Recursão** - Funções que chamam a si mesmas
- **Higher-order functions** - Funções que recebem/retornam outras funções
- **Closures** - Funções que "lembram" do escopo onde foram criadas

### Otimização e Performance
- **Debounce** - Controle de frequência de execução
- **Memoization** - Cache inteligente de resultados
- **Imutabilidade** - Preservação de dados originais

### Manipulação de Dados
- **Array methods** - `map`, `reduce`, `sort`, `filter`
- **Object methods** - `Object.entries`, destructuring
- **Spread operator** - Clonagem e manipulação de arrays
