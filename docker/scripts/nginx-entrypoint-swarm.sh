#!/usr/bin/env bash
set -e

if [[ -z "$SSL_SERVER_NAME" ]]; then
    echo "Must provide SSL_SERVER_NAME in environment" 1>&2
    exit 1
fi

if [[ -z "$SSL_SERVER_EMAIL" ]]; then
    echo "Must provide SSL_SERVER_EMAIL in environment" 1>&2
    exit 1
fi

if [[ -z "$API_URL" ]]; then
    echo "Must provide API_URL in environment" 1>&2
    exit 1
fi

if [[ -z "$DOMAIN_NAME" ]]; then
    echo "Must provide DOMAIN_NAME in environment" 1>&2
    exit 1
fi

sed -i -r "s/(^[ \t]*server_name[ \t]+).*(;.*)$/\1${SSL_SERVER_NAME}\2/g" /etc/nginx/sites-enabled/default

if [ ! -e /etc/letsencrypt/live/${SSL_SERVER_NAME}/cert.pem ]; then
   certbot --nginx -d ${SSL_SERVER_NAME} -n --agree-tos --email ${SSL_SERVER_EMAIL} --staging
   cp /etc/nginx/sites-enabled/default /etc/letsencrypt/live/${SSL_SERVER_NAME}/
else
   cp /etc/letsencrypt/live/${SSL_SERVER_NAME}/default /etc/nginx/sites-enabled/
fi

# crontab for auto renewal
exists=`crontab -l 2>/dev/null || true | grep "certbot" >/dev/null 2>&1 && echo 1 || echo 0`
if [[ "$exists" == 0 ]]; then
    echo "Installing certbot renew into crontab"
    line="0 0,12 * * * python -c 'import random; import time; time.sleep(random.random() * 3600)' && /usr/bin/certbot --staging renew"
    (crontab -l 2>/dev/null || true; echo "$line" ) | crontab -
fi

echo "Stopping existing nginx if needed"
/usr/sbin/nginx -s stop 2>/dev/null || true

if [ -n "$HTPASSWD" ]; then
    echo "$HTPASSWD" > /etc/nginx/.htpasswd
    sed -i -r 's/#(auth_basic.*$)/\1/g' /etc/nginx/sites-enabled/default
fi

if [ -n "$PRERENDER_TOKEN" ]; then
    sed -i -r "s/#*[ \t]*(proxy_set_header X-Prerender-Token).*$/\1 $PRERENDER_TOKEN;/g" /etc/nginx/sites-enabled/default
fi

sed -i -r "s#(^[ \t]*API_URL:[ \t]*').*('[, \t]*$)#\1$API_URL\2#g" env.js
sed -i -r "s#(^[ \t]*SERVER_URL:[ \t]*').*('[, \t]*$)#\1$SERVER_URL\2#g" env.js
sed -i -r "s#(^[ \t]*STRIPE_PUBLISH_KEY:[ \t]*').*('[, \t]*$)#\1$STRIPE_PUBLISH_KEY\2#g" env.js
sed -i -r "s#(^[ \t]*BRANCH_IO_KEY:[ \t]*').*('[, \t]*$)#\1$BRANCH_IO_KEY\2#g" env.js
sed -i -r "s#(^[ \t]*GOOGLE_TAG_MANAGER_ID:[ \t]*').*('[, \t]*$)#\1$GOOGLE_TAG_MANAGER_ID\2#g" env.js
sed -i -r "s#(^[ \t]*ROLLBAR_ENV:[ \t]*').*('[, \t]*$)#\1$ROLLBAR_ENV\2#g" env.js
sed -i -r "s#(^[ \t]*ANDROID_APP_ID:[ \t]*').*('[, \t]*$)#\1$ANDROID_APP_ID\2#g" env.js
sed -i -r "s#(^[ \t]*IOS_APP_ID:[ \t]*').*('[, \t]*$)#\1$IOS_APP_ID\2#g" env.js
sed -i -r "s#(^[ \t]*ANDROID_APP_NAME:[ \t]*').*('[, \t]*$)#\1$ANDROID_APP_NAME\2#g" env.js
sed -i -r "s#(^[ \t]*IOS_APP_NAME:[ \t]*').*('[, \t]*$)#\1$IOS_APP_NAME\2#g" env.js

echo "env.js:"
cat env.js

echo "Sitemap: https://$DOMAIN_NAME/sitemap.xml" > robots.txt
sed -i -r "s#(set[ \t]*\\\$api_url[ \t]*').*(';$)#\1${API_URL%/}\2#g" /etc/nginx/sites-enabled/default
sed -i -r "s#(set[ \t]*\\\$server_url[ \t]*').*(';$)#\1${SERVER_URL%/}\2#g" /etc/nginx/sites-enabled/default

echo "Starting main process:"
echo "    $@"
exec "$@"

