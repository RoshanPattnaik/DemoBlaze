# DemoBlaze Playwright Assignment

This project contains automated test scripts for [DemoBlaze](https://www.demoblaze.com/) using Playwright with TypeScript.

## Tech Stack

- Playwright
- TypeScript
- Page Object Model
- JSON test data
- HTML report
- Screenshot/video/trace on failure
- StorageState for login session

## Test Scenarios Covered

1. Login into application using StorageState
2. Add 3 products to cart
3. View cart
4. Delete one item from cart
5. Place order
6. Validate success message after purchase

## Project Structure

```text
pages/
  LoginPage.ts
  HomePage.ts
  CartPage.ts
  OrderPage.ts

test-data/
  userData.json

tests/
  auth.setup.spec.ts
  demoblaze.spec.ts

playwright.config.ts
Install Dependencies
npm install
Create Login Storage State
npx playwright test tests/auth.setup.spec.ts --project=chromium --headed
Run Tests
npx playwright test
Run Tests in Headed Mode
npx playwright test --headed
Open HTML Report
npx playwright show-report
Notes

The file auth/storageState.json is ignored using .gitignore because it contains saved login session data.