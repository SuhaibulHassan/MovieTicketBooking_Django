from django.db import models

# Create your models here.
# class theatreDatabase(models.Model):
#     id=models.AutoField(primary_key=True)
#     theatre=models.CharField(max_length=20)
#     movie=models.CharField(max_length=30)
#     loc=models.CharField(max_length=20)
#     audio=models.CharField(max_length=20)
#     type=models.CharField(max_length=10)
#     series=models.CharField(max_length=2)
#     seat_number=models.IntegerField()
#     price=models.FloatField()
#     date=models.IntegerField()
#     img=models.CharField(max_length=50)
#     bg_img=models.CharField(max_length=50)
#     video=models.CharField(max_length=60)
class bookingDetails(models.Model):
    id=models.AutoField(primary_key=True)
    date=models.IntegerField()
    theatre_name=models.CharField(max_length=20)
    movie_name=models.CharField(max_length=30)
    audio=models.CharField(max_length=20)
    series=models.CharField(max_length=2)
    seat_number=models.IntegerField()
    price=models.FloatField()
# theatre:'Sathyam',
#     pvr:'PVR Vegus',
#     movie:'jawan',
#     loc:'Dwarka Sector 14,New Delhi',
#     audio:1,
#     type:'4DX',
#     series:['H','G','F','E','D','C','B','A'],
#     row_section:3,
#     seat:24,
#     h:[2,6,24,23,7,16,17,18,19,13,12],
#     g:[1,2,78,20,23,8,11,18,19,13,12],
#     f:[5,6,15,17,18],
#     e:[2,7,8,17,18],
#     d:[5,16,15,23,22],
#     c:[1,2,11,12,19],
#     b:[8,5],
#     a:[],
#     price: [800,800,560,560,560,560,430,430],
#     date:7,
#     img:"images/jawan.jpg",
#     bg_img:"images/bg",
#     video:"videos/Jawan Official Trailer-(HDvideo9).mp4"
