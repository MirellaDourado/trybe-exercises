FROM node:16-alpine
EXPOSE 3001
WORKDIR /
COPY pachage*.json ./
RUN npm install
COPY . .
CMD ["sh"]