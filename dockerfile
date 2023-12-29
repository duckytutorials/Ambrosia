FROM oven/bun:latest
WORKDIR /ambrosia
COPY . /ambrosia
RUN bun install
EXPOSE 3000
EXPOSE 3333
CMD ["bun","dev"]