# Use official Python image
FROM python:3.10-slim

# Set work directory
WORKDIR /app

# Install dependencies
COPY backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy project files
COPY backend ./backend

# Expose port
EXPOSE 5000

# Run app
CMD ["python", "backend/app.py"]
