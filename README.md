# Manajemen kos

Manajemen kos dengan konsep Microservices
Asmin_E1E121023

## Instalasi

Clone repo

### branch main (nextjs)

```bash
yarn
yarn dev
```

### branch user-auth-services (express + mongodb)

```bash
yarn
yarn dev
```

#### Env variable

edit .env file pada branch user-auth-services
`MONGO_URI="mongodb+srv://adza:kost@cluster0.qeohtoy.mongodb.net/?retryWrites=true&w=majority`
`PORT=5000`

### branch property-services (Flask + Mysql)

buat enviroment virtual dengan [virtualenv](https://pypi.org/project/virtualenv/) lalu jalankan virtualenv

```bash
pip3 install -r requirements.txt
flask db init
flask db migrate -m "your message"
flask db upgrade
python3 app.py
```

#### Env variable

edit .env file pada branch property-services
`DATABASE_URI="mysql://<username>:<password>@localhost/property_db"`

### branch booking (express + Mysql)

```bash
yarn
yarn dev
```

#### Env variable

edit .env file pada branch booking-services

`DB_HOST=localhost`

`DB_USER= # username`

`DB_PASSWORD=# password`

`DB_NAME=booking_db`

### branch booking (express + Mysql)

```bash
yarn
yarn dev
```

#### Env variable

edit .env file pada branch payment-services

`DATABASE_URI='mongodb+srv://adza:kos@cluster0.qeohtoy.mongodb.net/?retryWrites=true&w=majority'`

`PORT=5003`
