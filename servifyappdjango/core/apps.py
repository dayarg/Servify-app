from django.contrib import admin
from django.apps import AppConfig
from .models import usuarioNuevo

class CoreConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'core'

admin.site.register(usuarioNuevo)