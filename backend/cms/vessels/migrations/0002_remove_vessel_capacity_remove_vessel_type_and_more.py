# Generated by Django 5.1.4 on 2024-12-12 10:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("vessels", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="vessel",
            name="capacity",
        ),
        migrations.RemoveField(
            model_name="vessel",
            name="type",
        ),
        migrations.AddField(
            model_name="vessel",
            name="address",
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name="vessel",
            name="description",
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name="vessel",
            name="imo_number",
            field=models.CharField(default=1, max_length=20, unique=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="vessel",
            name="latitude",
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name="vessel",
            name="longitude",
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name="vessel",
            name="speed",
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name="vessel",
            name="status",
            field=models.CharField(default="Active", max_length=50),
        ),
    ]
