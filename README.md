# 🎭 Automação Web E2E com Playwright e PO Manager

Este repositório contém um projeto *hands-on* de automação de testes End-to-End (E2E) utilizando **Playwright** e **TypeScript**. O foco principal desta arquitetura é a implementação do padrão de projeto **Page Object Manager (PO Manager)**, garantindo testes limpos, escaláveis e de fácil manutenção, além da geração de relatórios visuais ricos com o **Allure Report**.

O site utilizado como alvo dos testes é o e-commerce fictício [SauceDemo (Swag Labs)](https://www.saucedemo.com/).

---

## 🛠️ Tecnologias Utilizadas

* **[Playwright](https://playwright.dev/):** Framework de automação de testes E2E.
* **[TypeScript](https://www.typescriptlang.org/):** Superset do JavaScript que adiciona tipagem estática.
* **[Allure Report](https://allurereport.org/):** Ferramenta para geração de relatórios de testes detalhados e interativos.
* **[GitHub Actions](https://docs.github.com/en/actions):** Plataforma de CI/CD para execução contínua dos testes.

---

## 📂 Arquitetura do Projeto

O projeto segue a estrutura baseada em **Page Object Model (POM)** gerenciada por um **Manager**:

* **`pages/`**: Contém as classes que representam as páginas do sistema.
    * `LoginPage.ts`: Mapeamento e ações da tela de login.
    * `EstoquePage.ts`: Mapeamento e ações da tela de listagem de produtos.
    * `POManager.ts`: Classe orquestradora que centraliza a instânciação de todas as páginas, facilitando a chamada nos testes.
* **`tests/`**: Contém os arquivos de especificação (specs).
    * `compras.spec.ts`: Cenários de testes reais consumindo o PO Manager.
* **`.github/workflows/`**: Contém o arquivo `.yml` responsável pela esteira de CI/CD no GitHub.
* **`playwright.config.ts`**: Arquivo de configuração global do Playwright (reporters, retries, browsers).

---

## ⚙️ Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:
* [Node.js](https://nodejs.org/) (versão LTS recomendada)
* [Git](https://git-scm.com/)

---

## 🚀 Instalação e Configuração

Siga os passos abaixo para rodar o projeto localmente:

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git](https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git)
   cd SEU_REPOSITORIO
