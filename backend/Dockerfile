FROM python:3.8-slim-buster

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

RUN pip --no-cache-dir install pip==21.0.1
RUN apt-get update && apt-get -y install --no-install-recommends \
    gcc=4:8.3.0-1 libc++-7-dev=1:7.0.1-8+deb10u2 python3-dev=3.7.3-1 \
    libpq-dev=11.14-0+deb10u1 postgresql=11+200+deb10u4 postgresql-contrib=11+200+deb10u4 \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

ENTRYPOINT [ "/app/entrypoint.sh" ]
