FROM ubuntu

WORKDIR /app/frontend
COPY . /app/frontend
COPY ./static /app/frontend/static
COPY ./templates /app/frontend/templates
COPY ./static/css /app/frontend/static/css
COPY ./static/images /app/frontend/static/images
COPY ./static/img /app/frontend/static/img
COPY ./static/js /app/frontend/static/js

VOLUME /app/frontend

EXPOSE 3000

CMD /app/frontend/app.py