from django.contrib import admin

from windfarms.models import WindFarm, WindTurbine


class WindFarmAdmin(admin.ModelAdmin):
    pass

class WindTurbineAdmin(admin.ModelAdmin):
    pass

admin.site.register(WindFarm, WindFarmAdmin)
admin.site.register(WindTurbine, WindTurbineAdmin)

# Register your models here.


