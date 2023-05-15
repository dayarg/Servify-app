from rest_framework import serializers
from .models import register

class registeruser(serializers.ModelSerializer):
    class Meta:
        model = register
        ##fields = ('id','Nombre','Apellido','correo','id_user','telefono','password')
        fields= '__all__'