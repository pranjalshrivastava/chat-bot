FROM ubuntu

RUN apk add --no-cache python3-dev \
    && pip3 install --upgrade pip

WORKDIR /app/frontend
COPY . /app/frontend

RUN pip3 --no-cache-dir install -r requirements.txt

VOLUME /app/frontend

EXPOSE 3000

CMD ["python", "app.py"]