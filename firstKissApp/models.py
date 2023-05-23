from django.db import models


# Create your models here.

class Category(models.Model):
    picture_url = models.URLField()
    category_title = models.CharField(max_length=40, null=False)

class Question(models.Model):
    title = models.CharField(max_length=50, null=False)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

