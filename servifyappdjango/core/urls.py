from django.urls import path, include
from rest_framework import routers
from .views import usuario_insersion


router = routers.DefaultRouter()
## usuario es la peticion del cual se obtiene el archivo json con los datos
## 
router.register(r'usuario', usuario_insersion, 'usuarios')
urlpatterns = [
    path("api/servify/", include(router.urls))
]
