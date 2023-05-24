# from django.shortcuts import render
from rest_framework import viewsets
from django.contrib.auth import authenticate, login
from django.http.response import JsonResponse
from django.contrib.auth.hashers import check_password
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
# from .serializer import registeruser
# from .models import register
from .models import usuarios
from django.views import View
import json
# Create your views here.

"""""
class usuario_insersion(viewsets.ModelViewSet):
    serializer_class = registeruser
    queryset = register.objects.all()
"""


class userview(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, id=0):
        if (id > 0):
            users = list(usuarios.objects.filter(id=id).values())
            if len(users) > 0:
                user = users[0]
                datos = {'message': 'Succes', 'users': user}
            else:
                datos = {'message': 'User not found ...'}
            return JsonResponse(datos)
        else:
            users = list(usuarios.objects.values())
            if len(users) > 0:
                datos = {'message': 'Succes', 'users': users}
            else:
                datos = {'message': 'Users not found ...'}
            return JsonResponse(datos)

    def post(self, request):
        # print(request.body)
        jd = json.loads(request.body)
        # print(jd)
        usuarios.objects.create(identificacion=jd['identificacion'],nombre_user=jd['Nombre'], apellido_user =jd['Apellido'], fecha_nacimiento=jd['Fecha_de_nacimiento'],ciudad_recidencia=jd['Ciudad_de_residencia'],correo=jd['Correo_electronico']
                                , telefono=jd['telefono'], password=jd['password'],)
        datos = {'message': 'Succes'}
        return JsonResponse(datos)

    def put(self, request, id):
        jd = json.loads(request.body)
        users = list(usuarios.objects.filter(id=id).values())
        if len(users) > 0:
            user = usuarios.objects.get(id=id)
            user.identificacion = jd['identificacion']
            user.nombre_user = jd['Nombre']
            user.apellido_user = jd['Apellido']
            user.fecha_nacimiento = jd['Fecha_de_nacimiento']
            user.ciudad_recidencia= ['Ciudad_de_residencia']
            user.correo = jd['Correo_electronico']
            user.telefono = jd['telefono']
            user.password = jd['password']
            user.save()
            datos = {'message': "Success"}
        else:
            datos = {'message': 'User not found ...'}
        return JsonResponse(datos)

    def delete(self, request, id):
        users = list(usuarios.objects.filter(id=id).values())
        if len(users) > 0:
            usuarios.objects.filter(id=id).delete()
            datos = {'message': "Succes"}
        else:
            datos = {'message': 'User not found ...'}
        return JsonResponse(datos)


class loginuser(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def post(self, request):
        jd = json.loads(request.body)
        correouser = jd.get('Correo_electronico')
        password = jd.get('password')
        try:
            users = usuarios.objects.filter(correo=correouser)
            if users.exists():
                for user in users:
                    if check_password(password, user.password):
                        login(request, user)
                        return JsonResponse({'message': 'Login successful', 'user': user.nombre_user})
                return JsonResponse({'message': 'Invalid username or password'}, status=400)
            else:
                return JsonResponse({'message': 'Invalid username or password'}, status=400)
        except usuarios.DoesNotExist:
            return JsonResponse({'error': 'Invalid username or password'}, status=400)