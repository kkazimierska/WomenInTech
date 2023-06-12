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

