# Get latest node
FROM node:10

ENV NODE_ENV development

USER node
COPY --chown=node / /usr/src/app/
WORKDIR /usr/src/app/
RUN yarn && yarn cache clean
CMD ["node", "server.js"]
