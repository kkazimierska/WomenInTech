from rest_framework import serializers
from windfarms.models import WindFarm, WindTurbine


class WindTurbineSerializer(serializers.ModelSerializer):

    class Meta:
        model = WindTurbine
        fields = '__all__'


class WindTurbineSerializer(serializers.ModelSerializer):

    class Meta:
        model = WindTurbine
        fields = '__all__'

class WindTurbineSerializer(serializers.ModelSerializer):

    class Meta:
        model = WindTurbine
        fields = '__all__'

# TODO: add serializer required fields and 
# validation that rise `serializers.ValidationError` on error
# Write validation in validate function where name exists in `data['name']
class WindFarmSerializer(serializers.ModelSerializer):
    pass
    # def validate(self, data):

class WindFarmPingSerializer(serializers.ModelSerializer):
    wind_turbines = WindTurbineSerializer(read_only=True, many=True)

    class Meta:
        model = WindFarm
        fields = ["id", "name", "farm_type", "localisation", "wind_turbines"]