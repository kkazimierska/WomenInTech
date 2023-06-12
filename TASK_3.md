# Task 3 - Angular Components
## Components are the main building block for Angular applications.

Each component consists of:

- An HTML template that declares what renders on the page
- A TypeScript class that defines behavior
- A CSS selector that defines how the component is used in a template
- Optionally, CSS styles applied to the template

## Instructions
First checkout to a branch with task 3:
```
git checkout task3
```
## 1. Show components
You will be implementing code inside `frontend/src/app/app.component.html` file. We want to use **WindfarmList** & **WindTurbineList** components.
Rembember that order matters!

**Hint**: Use **selectors** from their respective .ts files.

## 2. Fix the WindTurbineList component
**WindTurbineList** component needs to be refined, it needs to display values that are received from the backend, not a fixed ones.

**Hint**: Focus on the ` frontend/src/app/components/wind-turbine-list/wind-turbine-list.component.html` file

**Hint2**: We're using few components from PrimeNG and NgIf directive, check below for reference:

- [Table component](https://primeng.org/table)
- [Tag component](https://primeng.org/tag)
- [NgIf directive](https://angular.io/api/common/NgIf)

