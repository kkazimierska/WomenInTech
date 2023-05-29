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

    class Meta:
        model = WindFarm
        fields = ["id", "name", "farm_type", "localisation"]

    def validate(self, data):
        """
        Check that the name field is without numbers.
        """
        condition = any(char.isdigit() for char in data['name'])
        if condition:
            raise serializers.ValidationError({"name": "Windfarm name can not contain numbers."})
        return data

