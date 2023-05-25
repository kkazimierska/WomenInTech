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
git clone git@github.com:kkazimierska/WomenInTech.git
```
Start docker
```
docker compose up -d
```
OR 
```
sudo docker compose -d
```

Run migrations
```
docker compose exec web python manage.py migrate
```
