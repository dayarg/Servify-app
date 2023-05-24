from django.urls import path, include
from rest_framework import routers
##from .views import usuario_insersion
from .views import userview
from .views import loginuser

router = routers.DefaultRouter()
## usuario es la peticion del cual se obtiene el archivo json con los datos 
## 
##router.register(r'usuario', usuario_insersion, 'usuarios')
urlpatterns = [
    path("api/servify/", include(router.urls)),
    path("resgister/", userview.as_view(), name="resgiteruser"),
    path("resgister/<int:id>", userview.as_view(), name="user_process"),
    path("login/", loginuser.as_view(), name="user_login"),
    ]


