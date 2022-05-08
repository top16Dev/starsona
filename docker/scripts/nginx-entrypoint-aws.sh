#!/usr/bin/env bash
set -e

if [[ -z "$API_URL" ]]; then
    echo "Must provide API_URL in environment" 1>&2
    exit 1
fi

if [[ -z "$DOMAIN_NAME" ]]; then
    echo "Must provide DOMAIN_NAME in environment" 1>&2
    exit 1
fi

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

