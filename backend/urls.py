from django.urls import path
from backend import views
 
urlpatterns=[
    path('create/',views.create,name='create'),
    path('read/',views.read,name='read'),
    path('update/<int:id>',views.update,name='update'),
    path('ticket',views.ticket,name='ticket')
]