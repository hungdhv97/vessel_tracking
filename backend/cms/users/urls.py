from django.urls import (
    include,
    path,
)
from rest_framework.routers import DefaultRouter

from .views import (
    LoginAPIView,
    UserViewSet,
)

router = DefaultRouter()
router.register(r"users", UserViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path(
        "login/",
        LoginAPIView.as_view(),
        name="login",
    ),
]
