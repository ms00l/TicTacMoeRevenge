#!/bin/bash

curl "https://tic-tac-toe-api-development.herokuapp.com/games/:id" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
  "games": []
  }'

echo