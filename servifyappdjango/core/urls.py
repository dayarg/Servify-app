from django.urls import path, include
from .views import userview
from .views import loginuser
from .views import proveedorView
from .views import loginproveedor
from .views import DocumentosView

urlpatterns = [
    path("resgister/", userview.as_view(), name="resgiteruser"),
    path("resgister/<int:id>", userview.as_view(), name="user_process"),
    path("login/", loginuser.as_view(), name="user_login"),
    path("proveedores/resgister/", proveedorView.as_view(), name="resgiterproveedor"),
    path("proveedores/<int:id>", proveedorView.as_view(), name="proveedor_process"),
    path("loginproveedor/", loginproveedor.as_view(), name="proveedor_login"),
    path("documentosget/<int:id>", DocumentosView.as_view(), name="get_documentos"),
    ]


