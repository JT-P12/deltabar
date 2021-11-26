Gunicorn3 webserver:

    gunicorn3 --env DJANGO_SETTINGS_MODULE=deltabar.settings deltabar.wsgi

Collect Static Files for WebServer:

    python manage.py collectstatic