# Design System

**Projeto:** Edita Criativo — Landing Page
**Versão:** 1.0
**Status:** Base inicial

---

# 1. Objetivo

Criar um sistema visual consistente, reutilizável e escalável para garantir uniformidade em toda a landing page.

Este design system será a base para todos os componentes da interface.

---

# 2. Princípios do Sistema

* Consistência visual
* Reutilização de componentes
* Hierarquia clara
* Simplicidade
* Escalabilidade
* Performance visual (sem excessos)

---

# 3. Tokens de Design

## 3.1 Cores

| Nome       | Uso                    | Hex                    |
| ---------- | ---------------------- | ---------------------- |
| primary    | CTAs, destaques        | `#AE4C16`              |
| background | fundo principal        | `#242424`              |
| surface    | cards / áreas elevadas | `#2E2E2E` *(variação)* |
| text-muted | textos secundários     | `#D2D5D7`              |

---

## 3.2 Espaçamento (base Tailwind)

Sistema baseado em múltiplos de 4:

* 4px
* 8px
* 12px
* 16px
* 24px
* 32px
* 48px
* 64px
* 96px

---

## 3.3 Tipografia

### Títulos

* Peso: 600–800
* Tamanho: grande e expressivo
* Uso: impacto visual

### Texto

* Peso: 300–400
* Uso: leitura contínua

### Regra principal

> Títulos vendem. Texto explica.

---

# 4. Componentes Base

## 4.1 Button

### Variantes:

* primary
* secondary
* outline
* ghost

### Estados:

* default
* hover
* active
* disabled

---

## 4.2 Card

Usado em:

* planos
* serviços
* depoimentos

Características:

* bordas suaves
* leve sombra
* fundo semi-escuro
* hover com elevação leve

---

## 4.3 Section Wrapper

Componente estrutural de todas as seções.

Características:

* padding vertical consistente
* largura centralizada
* suporte a background alternado

---

## 4.4 Typography System

* H1 → Hero principal
* H2 → títulos de seção
* H3 → subtítulos
* p → texto padrão
* small → textos auxiliares

---

# 5. Estilo Visual

## 5.1 Estética geral

* Cinematográfica
* Escura
* Minimalista
* Premium

---

## 5.2 Bordas

* Radius leve a moderado (8px a 16px)

---

## 5.3 Sombras

* suaves
* difusas
* nunca agressivas

---

## 5.4 Glassmorphism

Uso limitado:

* cards de destaque
* pricing
* overlays

---

# 6. Animações

## Direção

* suaves
* baseadas em scroll
* não intrusivas

## Regras

* nunca atrasar interação
* nunca distrair do conteúdo
* sempre reforçar hierarquia

---

# 7. Layout

## Grid

* 12 colunas (desktop)
* 6 colunas (tablet)
* 4 colunas (mobile)

---

## Estrutura

* máximo de 1200–1280px de largura
* centralizado
* muito espaço negativo

---

# 8. Estados de Interação

## Hover

* leve aumento de escala (1.02–1.05)
* mudança de opacidade
* transição suave

## Focus

* visível e acessível
* contorno discreto

---

# 9. Imagens e Vídeos

* sempre otimizados
* uso estratégico
* nunca decorativos sem propósito

---

# 10. Direção Final

O design system deve garantir que:

> qualquer componente criado no projeto pareça parte do mesmo sistema, mesmo quando criado por pessoas diferentes.

---
