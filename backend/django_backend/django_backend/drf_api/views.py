from rest_framework import viewsets
from django_backend.drf_api.serializers import ItemSerializer
from django_backend.drf_api.models import Item


class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
