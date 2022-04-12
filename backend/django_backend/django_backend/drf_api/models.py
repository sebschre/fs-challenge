from django.db import models
from django.core.exceptions import ValidationError

from django.core.validators import MinLengthValidator


def validate_color(value):
    if value[0] != "#":
        raise ValidationError(
            "Color must start with #.",
            params={"value": value},
        )
    if len(value) != 7:
        raise ValidationError(
            "Color must be 7 characters long.",
            params={"value": value},
        )
    try:
        int(value[1:], 16)
    except ValueError:
        raise ValidationError(
            "Color must be a hexadecimal RGB value.",
            params={"value": value},
        )


class Item(models.Model):
    id = models.BigAutoField(primary_key=True)
    city = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()
    price = models.DecimalField(decimal_places=2, max_digits=8)
    status = models.CharField(max_length=10)
    color = models.CharField(
        max_length=7, validators=[MinLengthValidator(7), validate_color]
    )
    # color = models.PositiveIntegerField(
    #     validators=[MaxValueValidator(int("0xffffff", 16))]
    # )
