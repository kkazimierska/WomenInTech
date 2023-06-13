Install Git

```
https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
```

Install Docker and Open Docker desktop


```
https://docs.docker.com/desktop/install/ 
```

Instal Visual Studio Code
```
https://code.visualstudio.com/download
```

Clone the repo

```
git clone https://github.com/kkazimierska/WomenInTech.git
```
If you already cloned, run
```
git pull
```
Start app with docker commands


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
docker compose exec web python backend/manage.py loaddata /app/backend/windfarms/fixtures/windFarms.json
```
```
docker compose exec web python backend/manage.py loaddata /app/backend/windfarms/fixtures/windTurbines.json
```

Close containers
```
docker compose down -v
```

Running frontend tests:
```
docker compose exec frontend npm run test-headless
```
