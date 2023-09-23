# Use Alpine Linux as the base image
FROM alpine:3.17

# Install Node.js and npm
RUN apk --no-cache add nodejs npm

# Set the working directory
WORKDIR /app

# Copy the backend files
COPY server.js /app/
COPY package.json package-lock.json /app/
COPY node_modules/ /app/

# Install dependencies
RUN npm install

# Expose port 3000
EXPOSE 3000

# Start the backend server
CMD ["node", "server.js"]

