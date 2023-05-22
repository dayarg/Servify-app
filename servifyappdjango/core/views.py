# from django.shortcuts import render
from rest_framework import viewsets
from .serializer import registeruser
from .models import register
from .models import usernew
from django.views import View
from django.http.response import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
import json
# Create your views here.


class usuario_insersion(viewsets.ModelViewSet):
    serializer_class = registeruser
    queryset = register.objects.all()


class userview(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request,id=0):
        if (id > 0):
            users=list(usernew.objects.filter(id=id).values())
            if len(users) > 0:
                user=users[0]
                datos = {'message': 'Succes', 'users': user}
            else:  
                datos = {'message': 'User not found ...'}
            return JsonResponse(datos)
        else:
            users = list(usernew.objects.values())
            if len(users) > 0:
                datos = {'message': 'Succes', 'users': users}
            else:
                datos = {'message': 'Users not found ...'}
            return JsonResponse(datos)

    def post(self, request):
        # print(request.body)
        jd = json.loads(request.body)
        ##print(jd)
        usernew.objects.create(Nombre=jd['Nombre'],Apellido=jd['Apellido'],Correo=jd['Correo'],Id_user=jd['Id_user'],telefono=jd['telefono'],password=jd['password'],)
        datos = {'message': 'Succes'}
        return JsonResponse(datos)

    def put(self, request,id):
        jd = json.loads(request.body)
        users=list(usernew.objects.filter(id=id).values())
        if len(users) > 0:
            user=usernew.objects.get(id=id)
            user.Nombre=jd['Nombre']
            user.Apellido=jd['Apellido']
            user.Correo=jd['Correo']
            user.Id_user=jd['Id_user']
            user.telefono=jd['telefono']
            user.password=jd['password']
            user.save()
            datos = {'message':"Success"}
        else:
            datos = {'message': 'User not found ...'}
        return JsonResponse(datos)

    def delete(self, request,id):
        users=list(usernew.objects.filter(id=id).values())
        if len(users) > 0:
            usernew.objects.filter(id=id).delete()
            datos={'message':"Succes"}
        else:
            datos = {'message': 'User not found ...'}
        return JsonResponse(datos)
