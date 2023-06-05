Open Docker desktop if on Windows

```
https://docs.docker.com/desktop/install/windows-install/
```

Open terminal and install Docker

```
"Docker Desktop Installer.exe" install
```

Clone the repo

```
git clone https://github.com/kkazimierska/WomenInTech.git
```

Start docker


```
docker compose build
docker compose up -d
```

in case of problems try

```
sudo docker compose -d
```

Run migrations

```
docker compose exec web python backend/manage.py migrate
```

Populate Database with sample objects

```
docker compose exec web python backend/manage.py loaddata /app/windfarms/fixtures/windFarms.json
docker compose exec web python backend/manage.py loaddata /app/windfarms/fixtures/windTurbines.json
```
