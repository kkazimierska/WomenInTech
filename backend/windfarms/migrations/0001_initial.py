# Generated by Django 4.2.1 on 2023-05-15 13:25

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="WindFarm",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=128)),
                (
                    "farm_type",
                    models.CharField(
                        choices=[("onshore", "onshore"), ("offshore", "offshore")],
                        max_length=8,
                    ),
                ),
                ("localisation", models.CharField(max_length=128)),
            ],
        ),
        migrations.CreateModel(
            name="WindTurbine",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "status",
                    models.CharField(
                        choices=[
                            ("online", "Online"),
                            ("offline", "Offline"),
                            ("unknown", "Unknwon"),
                        ],
                        default="unknown",
                        max_length=8,
                    ),
                ),
                ("host", models.GenericIPAddressField()),
                ("energy_produced", models.IntegerField()),
                ("working_time", models.IntegerField()),
                (
                    "windfarm",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="wind_turbines",
                        to="windfarms.windfarm",
                    ),
                ),
            ],
        ),
    ]
