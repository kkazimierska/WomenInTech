from django.shortcuts import render
from django.urls import include, path
from rest_framework import routers, viewsets

from windfarms.models import WindFarm, WindTurbine
from windfarms.serializer import WindFarmSerializer, WindTurbineSerializer

# Create your views here.

class WindFarmViewset(viewsets.ModelViewSet):

    queryset = WindFarm.objects.all()
    serializer_class = WindFarmSerializer
    
class WindTurbineViewset(viewsets.ModelViewSet):

    queryset = WindTurbine.objects.all()
    serializer_class = WindTurbineSerializer


router = routers.DefaultRouter()
router.register(r'wind_farms', WindFarmViewset)
router.register(r'wind_turbines', WindTurbineViewset)

