FROM nginx:alpine
COPY nginx/default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY /out-prod /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]