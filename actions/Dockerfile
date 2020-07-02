FROM rasa/rasa-sdk:latest

WORKDIR /app

 # The Rasa SDK image runs as non-root user by default. Hence, you have to switch
 # back to the `root` user if you want to install additional dependencies
USER root

RUN pip3 install recognizers-text-suite && \
pip3 install requests && \
pip3 install pandas && \
pip install psycopg2-binary

COPY . /app

# Switch back to a non-root user
USER 1001
