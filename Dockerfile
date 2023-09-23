# Use Alpine Linux as the base image
FROM alpine:3.17

# Install Node.js and npm
RUN apk --no-cache add nodejs npm

# Set the working directory
WORKDIR /app

# Copy the frontend files
COPY app.js index.html /app/

# Install http-server globally
RUN npm install -g http-server

# Expose port 8080 (http-server default port)
EXPOSE 8080

# Start the HTTP server
CMD ["http-server", "."]
