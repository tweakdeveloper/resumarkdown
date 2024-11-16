FROM node:22.11.0-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM node:22.11.0-alpine AS runner
LABEL maintainer="Nicola Clark <nicola@slottedspoon.dev>"
EXPOSE 3000
WORKDIR /app
COPY package.json package-lock.json ./
COPY --from=builder /app/build ./build
RUN npm ci --omit dev
CMD ["node", "build"]
