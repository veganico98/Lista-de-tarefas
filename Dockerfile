FROM php:8.1-apache

RUN a2enmod rewrite

# Copia o arquivo de configuração do Apache
COPY apache/000-default.conf /etc/apache2/sites-available/000-default.conf

# Copia o código-fonte para o servidor
COPY src/ /var/www/html/

# Ajusta permissões
RUN chown -R www-data:www-data /var/www/html
