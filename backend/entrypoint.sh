#!/bin/bash

python manage.py collectstatic --noinput
python manage.py migrate
python manage.py json2fixture data.json > django_backend/drf_api/fixtures/fixture.json
python manage.py loaddata fixture.json

gunicorn django_backend.wsgi --bind 0.0.0.0:8000