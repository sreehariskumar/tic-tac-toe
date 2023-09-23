# Use the official Alpine image as the base image
FROM alpine:3.17

# Set the working directory
WORKDIR /app

# Copy the frontend files
COPY app.js index.html /app/

# Install necessary packages (assuming you need a web server to serve the frontend)
RUN apk --no-cache add nginx

# Remove the default Nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/

# Expose port 80
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
