#!/bin/bash

echo "{
  \"type\": \"service_account\",
  \"project_id\": \"$FB_PROJECT_ID\",
  \"private_key_id\": \"$FB_PRIVATE_KEY_ID\",
  \"private_key\": \"$FB_PRIVATE_KEY\",
  \"client_email\": \"$FB_CLIENT_EMAIL\",
  \"client_id\": \"$FB_CLIENT_ID\",
  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",
  \"token_uri\": \"https://accounts.google.com/o/oauth2/token\",
  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",
  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/\"$FB_PROJECT_ID\"%40appspot.gserviceaccount.com\"
}" > ./serviceAccount.json
