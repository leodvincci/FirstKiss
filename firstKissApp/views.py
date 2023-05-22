from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import User
from rest_framework.decorators import api_view


# Create your views here.

@api_view(["POST"])
def user_signup(request):
    first_name = request.data["first_name"]
    last_name = request.data["last_name"]
    email = request.data["email"]
    password = request.data["password"]

    new_user = User.objects.create_user(username=email,email=email,password=password,first_name=first_name,last_name=last_name)
    print("theUSer: ", new_user)
    return JsonResponse({"042": "Success"})
