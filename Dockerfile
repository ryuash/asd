FROM node:14.5.0-alpine

# Install git for ui and internal packages
RUN apk add --no-cache git

# Set app directory
WORKDIR /app

# Add PM2
RUN npm install pm2 -g

# Installing dependencies
COPY package*.json ./
RUN npm ci

# Copying source files
COPY . .

# Get env from secrets
ARG STAKE_DENOM
ARG GRPC
ARG PORT

# Generate env file
ENV STAKE_DENOM ${STAKE_DENOM}
ENV GRPC ${GRPC}
ENV PORT ${PORT}

# Building app
RUN npm run build
EXPOSE 5000

# Running the app
CMD ["pm2-runtime", "npm start"]
