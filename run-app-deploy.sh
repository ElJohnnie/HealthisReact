#!/bin/bash
echo "Fazendo deploy em ambiente de Produção"

echo "Desconstruindo containers, caso existam..."
docker-compose -f docker-compose.yml down

echo "Construindo containers de desenvolvimento"
docker-compose -f docker-compose.yml up -d --build
