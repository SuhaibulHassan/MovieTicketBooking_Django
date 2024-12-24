from django.db import models

# Create your models here.
class theatreDatabase(models.Model):
    id=models.AutoField(primary_key=True)
    theatre=models.CharField(max_length=20)
    movie=models.CharField(max_length=30)
    loc=models.CharField(max_length=20)
    audio=models.CharField(max_length=20)
    type=models.CharField(max_length=10)
    series=models.CharField(max_length=2)
    seat_number=models.IntegerField()
    price=models.FloatField()
    date=models.IntegerField()
    img=models.CharField(max_length=50)
    bg_img=models.CharField(max_length=50)
    video=models.CharField(max_length=60)
class bookingDetails(models.Model):
    id=models.AutoField(primary_key=True)
    date=models.CharField(max_length=20)
    theatre_name=models.CharField(max_length=20)
    movie_name=models.CharField(max_length=30)
    audio=models.CharField(max_length=20)
    type=models.CharField(max_length=10)
    series=models.CharField(max_length=2)
    seat_number=models.IntegerField()
    price=models.FloatField()
class ticketDetails(models.Model):
    ticketdetails=models.TextField()
