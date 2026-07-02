# Wireframe

**Projeto:** Edita Criativo — Landing Page
**Versão:** 1.0
**Status:** Documento de Referência de UI

---

# 1. Objetivo

Este documento descreve a estrutura visual e funcional de cada seção da landing page da Edita Criativo.

Ele serve como guia para:

- desenvolvimento das seções
- consistência visual
- alinhamento da equipa
- implementação futura no código

---

# 2. Como ler este documento

Cada seção será apresentada em três níveis:

### 1. Objetivo da seção

O que esta seção precisa resolver no utilizador.

### 2. Estrutura visual (wireframe)

Representação textual do layout.

### 3. Explicação da estrutura

O que cada bloco significa na prática.

---

# 3. SEÇÕES DA LANDING PAGE

---

# 3.1 HERO (Impacto imediato)

## Objetivo

Capturar atenção em até 3 segundos e comunicar valor imediato.

## Wireframe

```text id="hero01"
------------------------------------------------
| LOGO                 MENU (opcional)         |
------------------------------------------------
|                                              |
|         H1 — TÍTULO PRINCIPAL                |
|         Subtítulo explicativo                |
|                                              |
|   [ CTA PRINCIPAL ]  [ CTA SECUNDÁRIO ]      |
|                                              |
|   Background: vídeo em loop + blur overlay   |
------------------------------------------------
```

## Explicação

- Vídeo de fundo cria impacto visual
- Título comunica valor direto
- Botões guiam ação imediata
- Layout centralizado com foco total no texto

---

# 3.2 SERVIÇOS (Clareza)

## Objetivo

Explicar rapidamente o que a empresa faz.

## Wireframe

```text id="services01"
------------------------------------------------
|              TÍTULO DA SEÇÃO                 |
------------------------------------------------
|  [ CARD ]     [ CARD ]     [ CARD ]         |
------------------------------------------------
```

## Explicação

- Cada card representa um tipo de cliente
- Estrutura simples e direta
- Foco em compreensão rápida

### O que é um CARD?

Um bloco visual que agrupa:

- ícone
- título
- descrição curta

---

# 3.3 QUEM SOMOS (Confiança)

## Objetivo

Humanizar a marca e gerar credibilidade.

## Wireframe

```text id="about01"
------------------------------------------------
|            [ IMAGEM / FOTO ]                |
|                                              |
|  TEXTO EXPLICATIVO SOBRE A EMPRESA          |
|  MISSÃO / VISÃO / POSICIONAMENTO            |
------------------------------------------------
```

## Explicação

- Layout dividido (imagem + texto)
- Foto transmite identidade real
- Texto gera conexão emocional

---

# 3.4 DIFERENCIAIS (Autoridade)

## Objetivo

Mostrar por que escolher a Edita Criativo.

## Wireframe

```text id="diff01"
------------------------------------------------
|        TÍTULO DA SEÇÃO                      |
------------------------------------------------
| [ ITEM ] [ ITEM ] [ ITEM ]                  |
| [ ITEM ] [ ITEM ] [ ITEM ]                  |
------------------------------------------------
```

## Explicação

### O que é GRID 3x2?

```text id="grid3x2"
[ A ] [ B ] [ C ]
[ D ] [ E ] [ F ]
```

- Estrutura organizada em 2 linhas e 3 colunas
- Cada item representa um diferencial

---

# 3.5 TRABALHOS EM DESTAQUE (Prova social)

## Objetivo

Mostrar resultados reais.

## Wireframe

```text id="portfolio01"
------------------------------------------------
|              TÍTULO                          |
------------------------------------------------
|   [ VIDEO ]   [ VIDEO ]   [ VIDEO ]         |
------------------------------------------------
```

## Explicação

- vídeos reais ou mockups
- hover para preview
- foco em prova de qualidade

---

# 3.6 COMO FUNCIONA (Redução de fricção)

## Objetivo

Explicar o processo de forma clara, sequencial e visualmente memorável.

## Wireframe

```text id="how01"
------------------------------------------------
|                TÍTULO                        |
------------------------------------------------

        ● 1. CONTACTO INICIAL
           [ descrição curta ]
                │
                │
   [ bloco alinhado à DIREITA ]
                │
                │
        ● 2. BRIEFING
           [ descrição curta ]
                │
                │
   [ bloco alinhado à ESQUERDA ]
                │
                │
        ● 3. PRODUÇÃO
           [ descrição curta ]
                │
                │
   [ bloco alinhado à DIREITA ]
                │
                │
        ● 4. ENTREGA
           [ descrição curta ]
------------------------------------------------
```

## Explicação

### O que é TIMELINE?

```text id="timeline01"
[1] ---- [2] ---- [3] ---- [4]
```

Uma timeline vertical interativa com alternância visual. Cada etapa alterna lado:

- direita
- esquerda
- direita
- esquerda

---

# 3.7 PLANOS (Decisão)

## Objetivo

Apresentar opções de compra.

## Wireframe

```text id="pricing01"
------------------------------------------------
|               TÍTULO                         |
------------------------------------------------
| [ PLANO ] [ PLANO ] [ PLANO ]               |
------------------------------------------------
```

## Explicação

- plano central destacado
- cada card contém preço + benefícios

---

# 3.8 DEPOIMENTOS (Prova social)

## Objetivo

Gerar confiança.

## Wireframe

```text id="testimonials01"
------------------------------------------------
|              TÍTULO                          |
------------------------------------------------
|   <  CARD SLIDER  →  →  →  >                |
------------------------------------------------
```

## Explicação

### O que é SLIDER?

```text id="slider01"
[ A ] → [ B ] → [ C ]
```

- elementos passam horizontalmente
- interação automática ou manual

---

# 3.9 FAQ (Objeções)

## Objetivo

Eliminar dúvidas.

## Wireframe

```text id="faq01"
------------------------------------------------
|              TÍTULO                          |
------------------------------------------------
|  [ pergunta + ]                             |
|  [ pergunta + ]                             |
|  [ pergunta + ]                             |
------------------------------------------------
```

## Explicação

### O que é ACCORDION?

```text id="accordion01"
Pergunta 1 [+]
↓ abre resposta

Pergunta 2 [+]
↓ abre resposta
```

- cada item expande ao clicar
- economiza espaço
- melhora leitura

---

# 3.10 CTA FINAL (Conversão)

## Objetivo

Fechar ação do utilizador.

## Wireframe

```text id="cta01"
------------------------------------------------
|        TEXTO FORTE DE IMPACTO               |
|        Subtítulo de reforço                 |
|                                              |
|        [ BOTÃO GRANDE LARANJA ]             |
------------------------------------------------
```

---

# 4. WIREFRAME GLOBAL DA PÁGINA

## Visão completa

```text id="page01"
┌──────────────────────────────────────────────┐
│ HERO                                         │
│ - vídeo de fundo                             │
│ - título forte                               │
│ - CTA                                        │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ SERVIÇOS                                     │
│ [ card ] [ card ] [ card ]                   │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ QUEM SOMOS                                   │
│ [ imagem ] + [ texto ]                       │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ DIFERENCIAIS                                 │
│ [ grid 3x2 de cards ]                        │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ PORTFÓLIO                                    │
│ [ vídeo ] [ vídeo ] [ vídeo ]                │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ COMO FUNCIONA (TIMELINE VERTICAL)            │
│  ● Contacto  → direita                       │
│  ● Briefing  → esquerda                      │
│  ● Produção  → direita                       │
│  ● Entrega   → esquerda                      │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ PLANOS                                       │
│ [ plano ] [ plano destaque ] [ plano ]       │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ DEPOIMENTOS                                  │
│ [ slider horizontal de cards ]               │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ FAQ                                          │
│ [ accordion perguntas ]                      │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ CTA FINAL                                    │
│ [ texto forte + botão grande ]               │
└──────────────────────────────────────────────┘
```

---

## Fluxo emocional do utilizador

```text id="flow01"
IMPACTO → CLAREZA → CONFIANÇA → PROVA → PROCESSO → DECISÃO → FECHO
```

---

# 5. Nota para implementação

Este wireframe não define estilo visual final.

Ele define apenas:

- estrutura
- hierarquia
- organização
- intenção de cada seção

O design system será responsável por transformar isso em interface real.

---
