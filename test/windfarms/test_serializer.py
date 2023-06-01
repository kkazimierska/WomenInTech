import pytest
from windfarms.serializer import WindFarmSerializer

class TestSerializer:

    def test_windfarm_name_serializer_raise_error_when_name_contains_number():
        windfarm_data = {"name": "HOW01", "farm_type": "onshore", "localisation": "DE"}
        serializer = WindFarmSerializer(data=windfarm_data)
        with pytest.raises(serializers.ValidationError):
            serializer.is_valid(raise_exception=True)
        assert serializer.errors["name"] == True