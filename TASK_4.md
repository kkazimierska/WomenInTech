# Task 4: Implement calculateWindfarmPower function

Your task is to implement a private function that is located in the store service:
`frontend/src/app/service/store.service.ts`

It is responsible for summing up energy for all wind turbines (for a given windfarm).

Before starting you can invoke tests to verify that the function is not implemented:
```
docker compose exec frontend npm run test-headless
```
You should expect to see 1 failed test.
If you implement the function correctly you can run tests again - this time all tests should pass.

**Hint**:
You can check how test is built for a little inspiration.
`frontend/src/app/service/store.service.spec.ts`

