# Generated by Django 4.2.11 on 2024-07-26 05:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0004_currency'),
    ]

    operations = [
        migrations.AddField(
            model_name='productcategory',
            name='is_main_category',
            field=models.BooleanField(default=False, verbose_name='Главная категория'),
        ),
    ]