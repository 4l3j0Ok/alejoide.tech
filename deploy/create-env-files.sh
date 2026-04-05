#!/bin/bash
# Current directory
cdir=$(dirname "$0")

web_env_exists=false
[[ -f "$cdir/config/web/.env" ]] && web_env_exists=true

if ! $web_env_exists; then
    echo "Creando archivo .env para web"
    [[ -f "$cdir/config/web/.env.example" ]] && cp "$cdir/config/web/.env.example" "$cdir/config/web/.env"
else
    echo "Archivo .env para web ya existe, saltando creación"
fi
