# Generated by Django 5.1.2 on 2024-12-06 17:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='bookingdetails',
            name='loc',
        ),
        migrations.AlterField(
            model_name='bookingdetails',
            name='date',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='bookingdetails',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
