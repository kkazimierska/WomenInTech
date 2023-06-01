import pytest
from windfarms.serializer import WindFarmSerializer
from django.test import TestCase
from rest_framework import serializers

class TestSerializer(TestCase):

    def test_windfarm_name_serializer_raise_error_when_name_contains_number(self):
        windfarm_data = {"name": "HOW01", "farm_type": "onshore", "localisation": "DE"}
        serializer = WindFarmSerializer(data=windfarm_data)
        with pytest.raises(serializers.ValidationError):
            serializer.is_valid(raise_exception=True)
        self.assertEqual(str(serializer.errors.get("name", None)[0]), "Windfarm name can not contain numbers.")
