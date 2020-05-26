FROM ubuntu

WORKDIR /app/frontend
COPY . /app/frontend

VOLUME /app/frontend

EXPOSE 3000

ENTRYPOINT ["python3"]

CMD ["/app/frontend/app.py"]