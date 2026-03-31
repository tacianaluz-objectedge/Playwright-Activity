# 🎭 E2E Web Automation with Playwright and Allure Report

This repository contains a hands-on End-to-End (E2E) test automation project using **Playwright** and **TypeScript**. The main focus of this architecture is the implementation of the **Page Object Manager (PO Manager)** design pattern, ensuring clean, scalable, and easily maintainable tests, along with rich visual test reporting using **Allure Report**.

The target site used for these tests is the fictional e-commerce [SauceDemo (Swag Labs)](https://www.saucedemo.com/).

---

## 🛠️ Technologies Used

* **[Playwright](https://playwright.dev/):** Fast and reliable E2E test automation framework.
* **[TypeScript](https://www.typescriptlang.org/):** JavaScript superset that adds static typing.
* **[Allure Report](https://allurereport.org/):** Tool for generating detailed, interactive, and visual test reports.
* **[GitHub Actions](https://docs.github.com/en/actions):** CI/CD platform for continuous test execution.

---

## 📂 Project Architecture

The project follows the **Page Object Model (POM)** structure managed by a central **PO Manager**. Here is how the directories are organized:

```text
📦 playwright-pom-allure
 ┣ 📂 .github
 ┃ ┗ 📂 workflows
 ┃   ┗ 📜 playwright.yml       CI/CD pipeline 
 ┣ 📂 pages
 ┃ ┣ 📜 EstoquePage.ts         Locators and actions for the Inventory/Products page
 ┃ ┣ 📜 LoginPage.ts           Locators and actions for the Login page
 ┃ ┗ 📜 POManager.ts           Orchestrator class centralizing page instantiation
 ┣ 📂 tests
 ┃ ┗ 📜 compras.spec.ts        Real test scenarios consuming the PO Manager
 ┣ 📜 playwright.config.ts     Global Playwright configuration (reporters, retries, browsers)
 ┣ 📜 package.json             Project metadata and NPM dependencies
 ┗ 📜 README.md                Project documentationcom (https://github.com/tacianaluz-objectedge/Playwright-Activity)
  
