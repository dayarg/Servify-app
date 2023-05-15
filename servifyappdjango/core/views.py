from django.shortcuts import render
from rest_framework import viewsets
from .serializer import registeruser
from .models import register
# Create your views here.

class usuario_insersion(viewsets.ModelViewSet):
    serializer_class = registeruser
    queryset = register.objects.all()