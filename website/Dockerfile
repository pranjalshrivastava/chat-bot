FROM tiangolo/uwsgi-nginx-flask:python3.8

WORKDIR /app/website
COPY . /app/website
COPY ./static /app/website/static
COPY ./templates /app/website/templates
COPY ./static/css /app/website/static/css
COPY ./static/images /app/website/static/images
COPY ./static/img /app/website/static/img
COPY ./static/js /app/website/static/js

VOLUME /app/website

EXPOSE 5001

CMD app.py