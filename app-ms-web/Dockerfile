FROM node:10-alpine as builder

# SET ENVIRONMENT VARIABLES
ENV ENVIRONMENT=prod
# ENV UrlApiNovoApp="http://10.12.6.81:8084/estimation/api/"
# ENV UrlApiMongoApp="http://10.12.6.81:8084/datahistory/api/"
# ENV UrlApiSecurity="http://10.12.6.81:8084/identity/api/"

# ENV UrlApiNovoApp="http://alb-novoapp-dev-1984268684.us-east-1.elb.amazonaws.com:8084/estimation/api/"
# ENV UrlApiMongoApp="http://alb-novoapp-dev-1984268684.us-east-1.elb.amazonaws.com:8084/datahistory/api/"
# ENV UrlApiSecurity="http://alb-novoapp-dev-1984268684.us-east-1.elb.amazonaws.com:8084/identity/api/"

RUN apk update && apk add --no-cache \
    git \
    ca-certificates \
    bash

WORKDIR /home/node/app

COPY app/ ./

RUN npm install

RUN npm run build-qa

FROM nginx:1.15-alpine

RUN /bin/sh -c "apk add --no-cache bash"

RUN rm -rf /usr/share/nginx/html/*

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /home/node/app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
