FROM tiangolo/uwsgi-nginx-flask:python3.8

WORKDIR /app
COPY . /app
COPY ./static /app/static
COPY ./templates /app/templates
COPY ./static/css /app/static/css
COPY ./static/images /app/static/images
COPY ./static/img /app/static/img
COPY ./static/js /app/static/js

VOLUME /app

CMD app.py