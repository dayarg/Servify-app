from django.db import models

# Create your models here.


class  register(models.Model):
    Nombre = models.CharField(max_length=20)
    Apellido = models.CharField(max_length=30)
    Correo =    models.CharField(max_length=100)
    Id_user =  models.CharField(max_length=20)
    telefono = models.CharField(max_length=10)
    password = models.TextField(max_length=50)
    

    def __str__(self) :
        return self.Nombre
    
    class  usernew(models.Model):
        Nombre = models.CharField(max_length=20)
        Apellido = models.CharField(max_length=30)
        Correo =    models.CharField(max_length=100)
        Id_user =  models.CharField(max_length=20)
        telefono = models.CharField(max_length=10)
        password = models.TextField(max_length=50)
    
