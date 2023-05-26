from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from django.contrib.auth import login, authenticate


# Create your views here.

@api_view(["POST"])
def user_signup(request):
    first_name = request.data["first_name"]
    last_name = request.data["last_name"]
    email = request.data["email"]
    password = request.data["password"]
    new_user = User.objects.create_user(username=email, email=email, password=password, first_name=first_name,
                                        last_name=last_name)
    return JsonResponse({"042": "Success"})


@api_view(["POST"])
def user_login(request):
    username = request.POST["email"]
    password = request.POST["password"]
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
    else:
        return JsonResponse({"444": "Nope!"})
