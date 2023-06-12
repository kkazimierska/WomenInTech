A model is the source of information about your data.
Contains the fields of the data you’re storing.
Each model maps to a database table.
Django gives you an automatically-generated database-access API.

1. Open `backend\windfarms\models.py`
2. Implement `WindTurbine`- model of the wind turbines.
Fields are the only required part of a model – is the list of database fields it defines.
Fields are specified by class `django.db.models.Model.` attributes.
3. The `WindTurbine`- model should contain the following fields:
- `host` as `GenericIPAddressField` attribute of `models` class with parameter `null=False`.
- `energy_produced` as `IntegerField` attribute of `models` class with parameter `null=False`.
- `working_time` as `IntegerField` attribute of `models` class with parameter `null=False`.
- `windfarm` as `ForeignKey` attribute of `models` class.
`ForeignKey` A many-to-one relationship.
Requires two positional arguments: the class to which the model (`WindFarm`) is related
and the `on_delete` option.
Set `on_delete` to `models.CASCADE`.
Cascade deletes. Django emulates the behavior of the SQL constraint ON DELETE CASCADE
and also deletes the object containing the ForeignKey.

Create subclass `WindTurbineStatus` of `models.TextChoices` class.
Set choice `ONLINE`, use `online` as actual value and `Online` as Django Admin Panel value.
Set choice `OFFLINE`, use `offline` as actual value and `Offline` as Django Admin Panel value.
Set choice `UNKNOWN`, use `unknown` as actual value and `Unknown` as Django Admin Panel value.

Set `WindTurbine`- model field:
- `status` as `CharField` attribute of `models` class
with specified parameters
`choices` as  `WindTurbineStatus.choices`
`null=False`.
4. Define internal method `__str__` of `WindTurbine` model
to return `Wind turbine {self.pk}`.

5. Save work `git commit -a -m "finish task1"`.

6. Go to task 2: `git checkout task2`.