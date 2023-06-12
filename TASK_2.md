# Implement wind farm API endpoint

## Add serializer
Serializer translates python data representation to string using json format

1. Open `backend/windfarms/serializer.py`.
2. Implement `WindFarmSerializer` by adding all necessary fields and validations
3. Check that the serializer is working correctly by running a test using Docker `docker compose exec web python backend/manage.py test windfarms` or locally `cd backend && python manage.py test windfarms`.
4. Add the test for validation in `backend/windfarms/tests/test_serializer.py`.
