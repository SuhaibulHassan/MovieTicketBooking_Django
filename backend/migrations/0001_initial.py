# Generated by Django 5.1.2 on 2024-11-27 19:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='bookingDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('theatre_name', models.CharField(max_length=20)),
                ('movie_name', models.CharField(max_length=30)),
                ('loc', models.CharField(max_length=20)),
                ('audio', models.CharField(max_length=20)),
                ('type', models.CharField(max_length=10)),
                ('series', models.CharField(max_length=2)),
                ('seat_number', models.IntegerField()),
                ('price', models.FloatField()),
                ('date', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='theatreDatabase',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('theatre', models.CharField(max_length=20)),
                ('movie', models.CharField(max_length=30)),
                ('loc', models.CharField(max_length=20)),
                ('audio', models.CharField(max_length=20)),
                ('type', models.CharField(max_length=10)),
                ('series', models.CharField(max_length=2)),
                ('seat_number', models.IntegerField()),
                ('price', models.FloatField()),
                ('date', models.IntegerField()),
                ('img', models.CharField(max_length=50)),
                ('bg_img', models.CharField(max_length=50)),
                ('video', models.CharField(max_length=60)),
            ],
        ),
    ]
