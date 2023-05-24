from django.db import models
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.utils import timezone


# Create your models here.
"""def __str__(self) :
        return self.Nombre
    """
    
    
from django.contrib.auth.hashers import make_password
from django.db import models

class usernew(AbstractBaseUser):
    Nombre = models.CharField(max_length=20)
    Apellido = models.CharField(max_length=30)
    Correo = models.CharField(max_length=100)
    Id_user = models.CharField(max_length=20)
    telefono = models.CharField(max_length=10)
    password = models.TextField(max_length=128)  
    last_login = models.DateTimeField(auto_now=True)
    
    def save(self, *args, **kwargs):
        if not self.pk or self._state.adding:
            self.password = make_password(self.password)
        super().save(*args, **kwargs)

    


class dept_rol(models.Model):

    id_rol = models.AutoField(primary_key=True)
    tipo_rol = models.CharField(max_length=15,verbose_name='tipo rol')
    nombre_departamento = models.CharField(max_length=30, verbose_name='nombre departamento')

class empleados(models.Model):
    id_empl    = models.AutoField(primary_key=True)
    nombre_empl = models.CharField(max_length=30, verbose_name='nombre')
    apellido_empl = models.CharField(max_length=30, verbose_name='apellido')
    identificacion_empl = models.CharField(max_length=15, verbose_name='identificacion')
    rol = models.ForeignKey(dept_rol,on_delete=models.CASCADE)
    correo_electronico = models.EmailField(verbose_name= 'correo')
    telefono = models.CharField(max_length=10, verbose_name='telefono')
    direccion = models.CharField(max_length=200,verbose_name='Direccion residencia')
    fecha_nacimiento = models.DateField(verbose_name='fecha nacimiento')




class usuarios(AbstractBaseUser):
    
    id  = models.AutoField(primary_key=True)
    identificacion = models.CharField(max_length=15,verbose_name ='identificacion')
    nombre_user   = models.CharField(max_length=30, verbose_name ='nombre')
    apellido_user = models.CharField(max_length=30, verbose_name ='apellido')
    fecha_nacimiento  = models.CharField(max_length=10, verbose_name ='fecha nacimiento')
    ciudad_recidencia = models.CharField(max_length = 50, verbose_name = 'Ciudada residencia')
    correo   = models.CharField(max_length=50, verbose_name='Correo electronico')
    telefono = models.CharField(max_length=10,verbose_name='telefono')
    password = models.TextField(max_length=128,verbose_name='clave')
    last_login = models.DateTimeField(auto_now=True)
    
    
    def save(self, *args, **kwargs):
        if not self.pk or self._state.adding:
            self.password = make_password(self.password)
        super().save(*args, **kwargs)

    
class proveedores(models.Model):
    id_proveedores = models.AutoField(primary_key=True)
    nombre_pro     = models.CharField(max_length=30, verbose_name ='nombre')
    apellido_pro   = models.CharField(max_length=30, verbose_name ='apellido')
    identificacion = models.CharField(max_length=15,verbose_name ='identificacion')
    fecha_nacimiento  = models.DateField(verbose_name ='fecha nacimiento')
    profesion         = models.CharField(max_length=50, verbose_name='profesion')
    correo   = models.EmailField(verbose_name='Correo electronico')
    ciudad_recidencia = models.CharField(max_length = 50, verbose_name = 'Ciudada residencia')
    telefono = models.CharField(max_length=10,verbose_name='telefono')
    activo   = models.BooleanField(default=True)
    
class documentos(models.Model):
    id_doc   = models.AutoField(primary_key=True)
    nombre_doc   = models.CharField(max_length=30, verbose_name ='nombre')
    documento = models.ImageField(upload_to ='documentos')
    tipo_doc = models.CharField(max_length=5,verbose_name='tipo de documento')
    tamano = models.CharField(max_length=20, verbose_name='tamano de documento')
    proveedores = models.ForeignKey(proveedores, on_delete=models.CASCADE)



class servicios(models.Model):
    id_servicio = models.AutoField(primary_key=True)
    nombre_ser  = models.CharField(max_length=30, verbose_name ='nombre')
    fecha_ser   = models.DateField(verbose_name='fecha servicio')
    precio_ser  = models.IntegerField(verbose_name='precio')
    calificacion= models.IntegerField(verbose_name='calificacion')
    proveedor   = models.ForeignKey(proveedores,on_delete=models.CASCADE)
    usuarios    = models.ForeignKey(usuarios,on_delete=models.CASCADE)


class pqr(models.Model):
    id_pqr = models.AutoField(primary_key=True)
    tipo_pqr= models.CharField(max_length=300, verbose_name ='descripcion pqr')
    solucion_pqr= models.CharField(max_length=300, verbose_name ='solucion pqr')
    fecha_pqr   = models.DateField(verbose_name='fecha pqr')
    fecha_solu_pqr = models.CharField(max_length=300, verbose_name ='fecha solucion pqr')
    id_servicio  = models.ForeignKey(servicios,on_delete=models.CASCADE)

class detalle_soli(models.Model):
    id_det_soli = models.AutoField(primary_key=True)
    id_empleados = models.ForeignKey(empleados,on_delete=models.CASCADE)
    id_proveedor = models.ForeignKey(proveedores,on_delete=models.CASCADE)


