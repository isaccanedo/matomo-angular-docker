## Setting up Docker

Navigate to the `🗂 tools` folder and run the command `docker-compose up`.

When the docker has successfully run, navigate to http://localhost:8080 and initiate the Matomo configuration.

## Matomo Configuration

Make sure that the inputs asked by Matomo match your settings from the `📁 db.env` file.

Proceed with the wizard until you've finished all the steps.

You won't be able to use Matomo yet because of an issue with the trusted host.

### Fixing trusted host issue

Open the terminal and run the command `docker exec -u 0 -it matomo_app /bin/sh` this will get you inside the Matomo app container (use docker ps to list your containers).

Using `vi` edit the file `vi config/config.ini.php` and add the following settings under the `[General]` section:

```javascript
[General]
trusted_hosts[] = "localhost:8080"
cors_domains[] = *
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/fborges42/matomo-angular-docker.git
```

Go to the project directory

```bash
  cd matomo-angular-docker
```

Install dependencies

```bash
  npm i
```

Start the server

```bash
  npm run start
```

## Feedback

If you have any feedback, please reach out to me fake@fake.com
