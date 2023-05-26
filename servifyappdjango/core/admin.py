from django.contrib import admin
from .models import proveedores
from .models import usuarios
# Register your models here.

admin.site.register(usuarios)
admin.site.register(proveedores)