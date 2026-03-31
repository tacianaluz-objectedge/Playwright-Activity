# 🎭 E2E Web Automation with Playwright and PO Manager

This repository contains a hands-on End-to-End (E2E) test automation project using **Playwright** and **JavaScript**. The main focus of this architecture is the implementation of the **Page Object Manager (PO Manager)** design pattern, ensuring clean, scalable, and easily maintainable tests, along with rich visual test reporting using **Allure Report**.

The target site used for these tests is the fictional e-commerce [SauceDemo (Swag Labs)](https://www.saucedemo.com/).

---

## 🛠️ Technologies Used

* **[Playwright](https://playwright.dev/):** Fast and reliable E2E test automation framework.
* **[JavaScript (Node.js)](https://developer.mozilla.org/en-US/docs/Web/JavaScript):** Core programming language used for scripting the automation, enhanced with JSDoc for IDE autocompletion.
* **[Allure Report](https://allurereport.org/):** Tool for generating detailed, interactive, and visual test reports.
* **[GitHub Actions](https://docs.github.com/en/actions):** CI/CD platform for continuous test execution.

---

## 📂 Project Architecture

The project follows the **Page Object Model (POM)** structure managed by a central **PO Manager**. Here is how the directories are organized:

```text
📦 playwright-pom-allure
 ┣ 📂 .github
 ┃ ┗ 📂 workflows
 ┃   ┗ 📜 playwright.yml       # CI/CD pipeline configuration for GitHub Actions
 ┣ 📂 pages
 ┃ ┣ 📜 EstoquePage.js         # Locators and actions for the Inventory/Products page
 ┃ ┣ 📜 LoginPage.js           # Locators and actions for the Login page
 ┃ ┗ 📜 POManager.js           # Orchestrator class centralizing page instantiation
 ┣ 📂 tests
 ┃ ┗ 📜 compras.spec.js        # Real test scenarios consuming the PO Manager
 ┣ 📜 playwright.config.js     # Global Playwright configuration (reporters, retries, browsers)
 ┣ 📜 package.json             # Project metadata and NPM dependencies
 ┗ 📜 README.md                # Project documentation