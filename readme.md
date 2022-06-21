Run all the tests

npx playwright test
Run a single test file

npx playwright test tests/todo-page.spec.ts
Run a set of test files

npx playwright test tests/todo-page/ tests/landing-page/
Run files that have my-spec or my-spec-2 in the file name

npx playwright test my-spec my-spec-2
Run the test with the title

npx playwright test -g "add a todo item"
Run tests in headed browsers

npx playwright test --headed

npx playwright test LoginTest.spec.ts --headed
