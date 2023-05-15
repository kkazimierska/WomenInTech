from django.db import models
from django.utils.translation import gettext_lazy as _


# Create your models here.
class WindFarm(models.Model):
    class FarmType(models.TextChoices):
        ONSHORE = 'onshore', _('onshore')
        OFFSHROE = 'offshore', _('offshore')

    name = models.CharField(max_length=128, null=False)
    farm_type = models.CharField(
        max_length=8,
        choices=FarmType.choices,
        null=False
    )
    localisation = models.CharField(max_length=128, null=False)

    def __str__(self):
        return self.name

class WindTurbine(models.Model):
    class WindTurbineStatus(models.TextChoices):
        ONLINE = 'online', _('Online')
        OFFLINE = 'offline', _('Offline')
        UNKNOWN = 'unknown', _('Unknwon')

    status = models.CharField(
        max_length=8,
        choices=WindTurbineStatus.choices,
        default=WindTurbineStatus.UNKNOWN,
        null=False
    )

    host = models.GenericIPAddressField(null=False)
    energy_produced = models.IntegerField(null=False)
    working_time = models.IntegerField(null=False)
    windfarm = models.ForeignKey(WindFarm, on_delete=models.CASCADE, related_name="wind_turbines")


    def __str__(self):
        return f"Wind turbine {self.pk}"


