from django.urls import path, include
from .views import userview
from .views import loginuser
from .views import proveedorView
from .views import loginproveedor
from .views import DocumentosView
from .views import ServiciosView

urlpatterns = [
    path("resgister/", userview.as_view(), name="resgiteruser"),
    path("resgister/<int:id>", userview.as_view(), name="user_process"),
    path("login/", loginuser.as_view(), name="user_login"),
    path("proveedores/resgister/", proveedorView.as_view(), name="resgiterproveedor"),
    path("proveedores/<int:id>", proveedorView.as_view(), name="proveedor_process"),
    path("loginproveedor/", loginproveedor.as_view(), name="proveedor_login"),
    path("documentosget/", DocumentosView.as_view(), name="get_documentos"),
    path("user/<int:id>", userview.as_view(), name="get_user"),
    path("provedor/<int:id>", proveedorView.as_view(), name="get_provedor"),
    path("servicios/<int:id>", ServiciosView.as_view(), name="servicios"),
]


