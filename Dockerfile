FROM node:22.11.0-bookworm-slim AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM node:22.11.0-bookworm-slim AS runner
LABEL maintainer="Nicola Clark <nicola@slottedspoon.dev>"
EXPOSE 3000
ENV LANG=C.UTF-8
RUN apt-get update && \
  apt-get install -y pandoc texlive && \
  rm -rf /var/lib/apt/lists/*
RUN useradd -u 9999 pdoc
WORKDIR /app
COPY package.json package-lock.json ./
COPY --from=builder /app/build ./build
RUN npm ci --omit dev
CMD ["node", "build"]
