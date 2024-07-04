# urls.py

from django.contrib import admin
from django.urls import path, include

from rest_framework.routers import DefaultRouter
from .views import ListingViewSet
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from . import views
router = DefaultRouter()
router.register(r'listings', ListingViewSet)
urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('api/', include('listings.urls')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
