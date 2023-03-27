FROM python:latest

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    curl \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install our requirements.txt
COPY requirements.txt .

RUN pip install --upgrade pip && \
    pip install -r requirements.txt

# Copy our code from the current folder to /app inside the container
COPY . .

# Make port 80 available for links and/or publish
EXPOSE 5000

CMD ["flask", "run", "--host=0.0.0.0"]
