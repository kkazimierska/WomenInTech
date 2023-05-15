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

class WindFarmSerializer(serializers.ModelSerializer):
    wind_turbines = WindTurbineSerializer(read_only=True, many=True)

    class Meta:
        model = WindFarm
        fields = ["name", "farm_type", "localisation", "wind_turbines"]
    
    