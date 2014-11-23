Uniqlo
========================

REST API

1) Installation
----------------------------------

1. Install the vendors

````
    npm install
    php composer.phar install
````

At the end of the installation, you'll be prompted your parameters, such as MySQL port etc.

2. In the httpd-vhost file:

````
    <VirtualHost *:80>
        DocumentRoot "/Users/Marjorie/Sites/uniqlo/web"
        ServerName uniqlo.dev
        <Directory "/Users/Marjorie/Sites/uniqlo">
            AllowOverride All
            Allow from All
            Require all granted
        </Directory>
    </VirtualHost>
````

3. And then in /etc/hosts

````
    127.0.0.1       uniqlo.dev
````

4. Restart apache.

2) Usage
-------------------------------------

1. Endpoints

````
    GET http://uniqlo.dev/app_dev.php/api/users/{id}.json
    POST http://uniqlo.dev/app_dev.php/api/users.json
````

2. Payload example

````
    {
        "email": "foo@gmail.com",
        "firstName": "foo",
        "lastName": "bar",
        "locale": "en",
        "gender": "male",
        "newsletter": true,
        "reminder": false
    }
````

3. Status codes

````200```` if the resource if found
````404```` if the resource if found

````201```` if created
````400```` if the validation failed
