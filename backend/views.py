from django.shortcuts import render,redirect
from django.http import HttpRequest
from .models import *
from .forms import *
from bs4 import BeautifulSoup
from selenium import webdriver
import requests
from .forms import bookingform,ticketform
from django.views.decorators.csrf import csrf_exempt
import json
# Create your views here.
@csrf_exempt
def ticket(request):
    if request.method=='POST':
        form=ticketform(request.POST)
        print(form)
        form1=form.cleaned_data
        print(json.dumps(form1))
        if form.is_valid():
            request.session['form']=form.cleaned_data
            # form.save()
            return redirect('read')
        else: 
            print("form is not valid")
    form=ticketform()
    context={'form':form}
    return render(request,"ticket.html",context)
def create(request):
    if request.method=="POST":
        form=ticketform(request.POST)
        if form.is_valid():
            form.save()
            return redirect('read')
    form=ticketform()
    context={'form':form}
    return render(request,'create.html',context)

    # my_object=theatreDatabase(theatre='sathyam',movie=array[1],loc='nagercoil',audio='tamil',type='2d',series='h',seat_number=12,price=200,date=8,img='dcd',bg_img='jdnc',video='dc')
def read(request):
    # obj=bookingDetails.objects.all()
    obj=request.session.get('form')
    print(obj)
    return render(request,'read.html',{'obj':obj})
def update(request,id):
    obj=bookingDetails.objects.get(id=id)
    context={
        'form':bookingform(instance=obj)
    }
    if request.method=="POST":
        form=bookingform(request.POST,instance=obj)
        if form.is_valid():
            form.save()
            return redirect('read')
    return render(request,'update.html',context)
def delete(request,id):
    obj=bookingDetails.objects.get(id=id)
    obj.delete()
    return redirect('read')
