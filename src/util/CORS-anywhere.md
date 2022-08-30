## [How to use a CORS proxy to avoid “No Access-Control-Allow-Origin header” problems](https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe)

---

## [CORS Anywhere Installation on Heroku Youtube](https://www.youtube.com/watch?v=zoOx1b9iBRk)

---
## [Install heroku cli](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli) 

or `sudo npm install -g heroku`

---
## [Create Heroku account](https://www.heroku.com/)

---

## Terminal commands:

1. `git clone https://github.com/Rob--W/cors-anywhere.git`
2. `cd cors-anywhere/`
3. `npm install`
4. `heroku create app-name`
5. Set litmit request: `heroku config:set -a app-name CORSANYWHERE_RATELIMIT="60 1"`
6. `git push heroku master`

---
## Add Domains URL
1. Go back to heroku account
2. Find current app-name
3. Go to settings
4. Scroll down to 'Domains'
5. Copy the 'Domains'URL to before the api url 
6. You did it!