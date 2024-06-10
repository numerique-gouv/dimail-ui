## running development server
```
docker compose up
```

## run bash interpreter in live container
```
docker compose exec -it --user dev dimail-ui bash
```

## build debian package
```
docker compose exec -it --user dev dimail-ui /build-package.sh
```
