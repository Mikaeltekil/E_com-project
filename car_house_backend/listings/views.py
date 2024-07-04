
import os
from .models import Car, House
from .serializers import CarSerializer, HouseSerializer
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .models import Listing
from .serializers import ListingSerializer

def index(request):
    return HttpResponse("Hello, world. You're at the listings index.")
class CarViewSet(viewsets.ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer

class HouseViewSet(viewsets.ModelViewSet):
    queryset = House.objects.all()
    serializer_class = HouseSerializer
class ListingViewSet(viewsets.ModelViewSet):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer