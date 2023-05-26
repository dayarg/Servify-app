from rest_framework import viewsets
from django.contrib.auth import authenticate, login
from django.http.response import JsonResponse
from django.contrib.auth.hashers import check_password
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from .models import usuarios
from .models import proveedores
from .models import Documento
from .models import Documentos
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
        jd = json.loads(request.body)
        usuarios.objects.create(identificacion=jd['identificacion'], nombre_user=jd['Nombre'], apellido_user=jd['Apellido'], fecha_nacimiento=jd['Fecha_de_nacimiento'],
                                ciudad_recidencia=jd['Ciudad_de_residencia'], correo=jd['Correo_electronico'], telefono=jd['telefono'], password=jd['password'],)
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
            user.ciudad_recidencia = ['Ciudad_de_residencia']
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


class proveedorView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
    
    def get(self, request, id=0):
        if (id > 0):
            users = list(proveedores.objects.filter(id=id).values())
            if len(users) > 0:
                user = users[0]
                datos = {'message': 'Succes', 'users': user}
            else:
                datos = {'message': 'User not found ...'}
            return JsonResponse(datos)
        else:
            users = list(proveedores.objects.values())
            if len(users) > 0:
                datos = {'message': 'Succes', 'users': users}
            else:
                datos = {'message': 'Users not found ...'}
            return JsonResponse(datos)
        
    def post(self, request):
        jd = json.loads(request.body)
        
        proveedores.objects.create(identificacion=jd['identificacion'], 
                                   nombre_pro=jd['Nombre'], 
                                   apellido_pro=jd['Apellido'],
                                   fecha_nacimiento=jd['Fecha_de_nacimiento'], 
                                   profesion=jd['Profesion'], 
                                   ciudad_recidencia=jd['Ciudad_de_residencia'], 
                                   correo=jd['Correo_electronico'], 
                                   telefono=jd['telefono'],
                                   password=jd['password'],)
        if proveedores.objects.exists():
            proveedor = list(proveedores.objects.filter(identificacion=jd['identificacion']).values())
            datos = {'message': 'Succes', 'user.id': proveedor[0]['id']}
        return JsonResponse(datos)
    
    def put(self, request, id):
        jd = json.loads(request.body)
        users = list(proveedores.objects.filter(id=id).values())
        if len(users) > 0:
            user = proveedores.objects.get(id=id)
            user.identificacion = jd['identificacion']
            user.nombre_pro = jd['Nombre']
            user.apellido_pro = jd['Apellido']
            user.fecha_nacimiento = jd['Fecha_de_nacimiento']
            user.profesion=jd['Profesion']
            user.ciudad_recidencia = ['Ciudad_de_residencia']
            user.correo = jd['Correo_electronico']
            user.telefono = jd['telefono']
            user.password = jd['password']
            user.save()
            datos = {'message': "Success"}
        else:
            datos = {'message': 'User not found ...'}
        return JsonResponse(datos)

    def delete(self, request, id):
        users = list(proveedores.objects.filter(id=id).values())
        if len(users) > 0:
            proveedores.objects.filter(id=id).delete()
            datos = {'message': "Succes"}
        else:
            datos = {'message': 'User not found ...'}
        return JsonResponse(datos)


class loginproveedor(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def post(self, request):
        jd = json.loads(request.body)
        correoproveedor = jd.get('Correo_electronico')
        password = jd.get('password')
        try:
            users = proveedores.objects.filter(correo=correoproveedor)
            if users.exists():
                for user in users:
                    if check_password(password, user.password):
                        login(request, user)
                        return JsonResponse({'message': 'Login successful', 'user': user.nombre_pro})
                return JsonResponse({'message': 'Invalid username or password'}, status=400)
            else:
                return JsonResponse({'message': 'Invalid username or password'}, status=400)
        except proveedores.DoesNotExist:
            return JsonResponse({'error': 'Invalid username or password'}, status=400)




class DocumentosView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def post(self, request, id=0, *args, **kwargs):
        nombre_doc = request.POST.get('nombre_doc')
        
        try:
            proveedor = proveedores.objects.get(id=id)
            documentos = request.FILES.getlist('')
            documentos_obj = Documentos.objects.create(
                nombre_doc=nombre_doc, proveedores=proveedor)

        # Guarda los documentos y los asocia con el registro de Documentos
            for documento in documentos:
                Documento.objects.create(
                    archivo=documento, documentos=documentos_obj)
                response = {'message': 'Documentos recibidos correctamente'}
        except proveedores.DoesNotExist:
            response={'error': 'Proveedor no existe'}
        
        return JsonResponse(response)
        
