FROM node
WORKDIR /time-tracking-dashboard-exporter
COPY . .
RUN npm install
RUN npm run build
CMD node .