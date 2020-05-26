FROM ubuntu

RUN apt-get update && app-get install -y/

WORKDIR /app/frontend
COPY . /app/frontend

RUN pip install Click Flask itsdangerous Jinja2 MarkupSafe pyodbc Werkzeug

VOLUME /app/frontend

EXPOSE 3000

CMD ["python", "app.py"]