# Task 4: Implement calculateWindfarmPower method

Your task is to implement a private method called `calculateWindfarmPower` that is located in the store service:
`frontend/src/app/service/store.service.ts`

It is responsible for summing up energy for all wind turbines (for a given windfarm).
This method should not return anything, but just modify value of
**power** for a currently selected windfarm.


**Hint**: Algorithm:
1. get reference to currently selected windfarm
2. Loop through all turbines that belong to that windfarm and sum their **energy_produced**
3. Assign calculated sum to windfarm.power field

**Hint**: Try to investigate `frontend\src\app\domain\models.ts` to get to know
what fields a **Windfarm** model has.

**Hint**:
You can check how test is built for a little inspiration.
`frontend/src/app/service/store.service.spec.ts`

**Hint**:
Using a loop might be handy: [W3 JS loops](https://www.w3schools.com/js/js_loop_for.asp)

After you've implemented the method run tests to confirm that all works:
```
docker compose exec frontend npm run test-headless
```

# Additional task
Try to change function to use the [reduce method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?retiredLocale=pl) if you have not used it in the initial implementation for `calculateWindfarmPower` method.