import subprocess

from rest_framework import routers, viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response

from windfarms.models import WindFarm, WindTurbine
from windfarms.serializer import WindFarmSerializer, WindTurbineSerializer

# Create your views here.

class WindFarmViewset(viewsets.ModelViewSet):

    queryset = WindFarm.objects.all()
    serializer_class = WindFarmSerializer

class WindTurbineViewset(viewsets.ModelViewSet):

    queryset = WindTurbine.objects.all()
    serializer_class = WindTurbineSerializer

def ping_host(host: str) -> WindTurbine.WindTurbineStatus:

    try:
        output = subprocess.Popen(f"ping -c1 {host}", shell=True, stdout=subprocess.PIPE)
        streamdata = output.communicate()[0]
        rc = output.returncode
    except Exception:
        return WindTurbine.WindTurbineStatus.UNKNOWN

    if rc == 0:
        return WindTurbine.WindTurbineStatus.ONLINE
    else:
        return WindTurbine.WindTurbineStatus.OFFLINE

@api_view(['GET'])
def ping_windfarm(request):
    windfarm_id = request.GET.get('windfarm_id')

    windfarm  = WindFarm.objects.get(id=windfarm_id)
    wind_turbines = [w for w in windfarm.wind_turbines.all()]
    for wt in wind_turbines:
        status = ping_host(wt.host)
        wt.status = status
        wt.save()
    windfarm  = WindFarm.objects.get(id=windfarm_id)
    windfarm = WindFarmSerializer(windfarm)
    return Response(windfarm.data)

router = routers.DefaultRouter()
router.register(r'wind_farms', WindFarmViewset)
router.register(r'wind_turbines', WindTurbineViewset)