FROM composer as builder


FROM php:7.4-apache

WORKDIR /var/www

ENV PHP_EXTRA_CONFIGURE_ARGS: "--with-mysqli"
ENV APACHE_DOCUMENT_ROOT=/var/www/public

RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf
RUN sed -i '/<Directory ${APACHE_DOCUMENT_ROOT}>/,/<\/Directory>/ s/AllowOverride None/AllowOverride All/' /etc/apache2/apache2.conf
RUN a2enmod rewrite

RUN apt-get update && apt-get install -y \
        git libzip-dev unzip \
    && docker-php-ext-configure zip \
    && docker-php-ext-install mysqli pdo pdo_mysql zip

#COPY . .

COPY --from=builder /usr/bin/composer /usr/bin/composer

RUN composer update