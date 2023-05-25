# poc-playwright-structure

========== Install playwright ==========
- `npm init playwright@latest`
- Select `JavaScript`
- create your test lab folder is `tests`


========== Run playwright ==========
- `npx playwright test` <<Will using 3 workers to run all browser at the same time (chromium, firefox and webkit)
- `npx playwright test --ui` <<Run on UI mode
- `npx playwright test ${directory_test_lab}` <<Runing single test file e.g. npx playwright test tests/example.spec.js
- `npx playwright test ${directory_test_lab} test ${directory_test_lab}` <<Running two test files at the same time
- `npx playwright test ${keyword} ${keyword}` <<Running the file that have the keyword on file name
example : 
    >>>> run command `npx playwright test kook` <<<<
    >>>> the file name is i_am_kook.spec.js will be executed <<<<
- `npx playwright test -g "something"` <<The test case with the given title will be executed
- `npx playwright test example.spec.js --headed` <<Runing with header mode
- `npx playwright test example.spec.js --project=${project}` <<To specific running on browser (`${project}` can be `chromium`, `firefox`, `webkit`) 
- `npx playwright test --debug` <<Debugging

========== Open report result ==========
- `npx playwright show-report`


========== Run code generator ==========
- `npx playwright codegen ${url_to_test}`

========== Tricks and tips ==========
- Add // @ts-check at the start of each test file when using JavaScript in VS Code to get automatic type checking.