FROM ubuntu

WORKDIR /app/frontend
COPY . /app/frontend

RUN pip3 install Click Flask itsdangerous Jinja2 MarkupSafe pyodbc Werkzeug

VOLUME /app/frontend

EXPOSE 3000

CMD app.py