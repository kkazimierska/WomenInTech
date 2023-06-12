# Implement wind farm API endpoint

## Add serializer
Serializer translates python data representation to string using json format

1. Open `backend/windfarms/serializer.py`.
2. Implement `WindFarmSerializer` by adding all necessary fields and validations 
```
fields = ["id", "name", "farm_type", "localisation"]
```

3. Check that the serializer is working correctly by running a test using Docker 
```
docker compose exec web python backend/manage.py test backend/windfarms
``` 
or locally 
```
python backend/manage.py test backend/windfarms
```
4. Check serializer output http://127.0.0.1:8000/api/wind_farms/

4. (Optional) Add the test for validation in `backend/windfarms/tests/test_serializer.py`.
5. Save work `git commit -a -m "finish task2"`
6. Go to task3 `git checkout task3`
