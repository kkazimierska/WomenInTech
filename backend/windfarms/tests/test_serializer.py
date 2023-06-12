from django.test import TestCase
from rest_framework import serializers
from windfarms.serializer import WindFarmSerializer


class TestSerializer(TestCase):

    def test_wind_farm_serializer(self):
        windfarm_data = {"name": "HOW", "farm_type": "onshore", "localisation": "DE"}
        serializer = WindFarmSerializer(data=windfarm_data)
        self.assertEqual(serializer.is_valid(), True)
        self.assertEqual(serializer.data, {'name': 'HOW', 'farm_type': 'onshore', 'localisation': 'DE'})

    def test_windfarm_name_serializer_raise_error_when_name_contains_number(self):
        pass
        # TODO: prepare data with invalid name that contains number
        # then use below function to check if exception was raised 

        # with self.assertRaises(serializers.ValidationError):
        #    serializer.is_valid(raise_exception=True)
