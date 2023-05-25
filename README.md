Clone the repo
```
git clone git@github.com:kkazimierska/WomenInTech.git
```
Start docker
```
docker compose up -d
```

Run migrations
```
docker compose exec web python manage.py migrate
```
