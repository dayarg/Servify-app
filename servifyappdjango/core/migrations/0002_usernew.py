# Generated by Django 4.2 on 2023-05-20 22:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='usernew',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Nombre', models.CharField(max_length=20)),
                ('Apellido', models.CharField(max_length=30)),
                ('Correo', models.CharField(max_length=100)),
                ('Id_user', models.CharField(max_length=20)),
                ('telefono', models.CharField(max_length=10)),
                ('password', models.TextField(max_length=50)),
            ],
        ),
    ]