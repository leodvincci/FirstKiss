from django.urls import path
from .views import *

urlpatterns = [
    path("api/v1/usersignup", user_signup, name="user_signup"),
    path("api/v1/userlogin", user_login, name="user_login"),
    path("api/v1/test", test_endpoint, name="test")
]
