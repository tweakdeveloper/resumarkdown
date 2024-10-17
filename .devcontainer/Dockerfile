FROM mcr.microsoft.com/devcontainers/javascript-node:20-bookworm

# RUN apt-get update && \
#  export DEBIAN_FRONTEND=noninteractive && \
#  apt-get install -y pandoc texlive
# ^^^ that's a surprise tool that will help us later ^^^

RUN npm install
RUN npx playwright install
