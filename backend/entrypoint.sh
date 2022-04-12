#!/bin/bash

python manage.py collectstatic --noinput
python django_backend/manage.py migrate
python django_backend/manage.py json2fixture django_backend/data.json > django_backend/django_backend/drf_api/fixtures/fixture.json
python django_backend/manage.py loaddata fixture.json

python django_backend/manage.py runserver 0.0.0.0:8000
