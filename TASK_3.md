# Task 3 - Angular Components
## Components are the main building block for Angular applications.

Each component consists of:

- An HTML template that declares what renders on the page
- A TypeScript class that defines behavior
- A CSS selector that defines how the component is used in a template
- Optionally, CSS styles applied to the template

## Instructions
[Visit Wind Tracker here](http://localhost:4200/)
You should see just a header.
Let's fix it!
## 1. Show components
First, check how our missing components are built:
- `frontend/src/app/components/wind-farm-list/wind-farm-list.component.ts`
- `frontend/src/app/components/wind-turbine-list/wind-turbine-list.component.ts`

Now, you can go to `frontend/src/app/app.component.html` file and add our components in order:
- WindfarmList
- WindTurbineList

**Hint**: Use **selectors** from their respective .ts files to put them inside `app.component.html`.

## 2. Fix the WindTurbineList component
Hopefully by now, you can see a list of Windfarms and Turbines on the page.
If you click on any Windfarm, you should see a table with Turbines data.
Unfortunatelly, the values you currently see are fixed. We need to change that!
Your next task is to refine **WindTurbineList** component, so that it displays actual values received from the backend, not a fixed ones.

We need to fix following columns:
- id
- energy_produced
- working_time
- status

**Hint**: Focus on the ` frontend/src/app/components/wind-turbine-list/wind-turbine-list.component.html` file

**Hint2**: We're using few components from **PrimeNG** and **NgIf** directive, check below for reference:

- [Table component](https://primeng.org/table)
- [Tag component](https://primeng.org/tag)
- [NgIf directive](https://angular.io/api/common/NgIf)


To check status behaviour you can click a little purple icon next to Windfarm to ping all turbines.

In addition to that all the tests should pass:
```
docker compose exec frontend npm run test-headless
```

You can now commit your work
```
git commit -a -m "finish task3"
```