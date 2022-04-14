from django_backend.drf_api.models import Item
from rest_framework import serializers


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ("city", "start_date", "end_date", "price", "status", "color")
