FROM node:10

WORKDIR /app

COPY . ./

RUN npm cache clean --force && npm install

RUN ls -lh

ENV PORT 80

EXPOSE 80

ENTRYPOINT ["npm"]

CMD [ "run", "qa" ]