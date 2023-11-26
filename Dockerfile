FROM node:18.18.2-alpine AS builder
WORKDIR /workspace/vlp

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run build

FROM nginx:1.25.3-alpine

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /workspace/vlp/dist/vlp-ui /usr/share/nginx/html

EXPOSE 4200

CMD ["nginx", "-g", "daemon off;"]