FROM node:10-alpine as builder

# SET ENVIRONMENT VARIABLES
ENV ENVIRONMENT=prod

RUN apk update && apk add --no-cache \
    git \
    ca-certificates \
    bash

WORKDIR /home/node/app

COPY . ./

RUN npm install

RUN npm run build

FROM nginx:1.15-alpine

RUN /bin/sh -c "apk add --no-cache bash"

RUN rm -rf /usr/share/nginx/html/*

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /home/node/app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
