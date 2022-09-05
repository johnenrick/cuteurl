# CuteURL

## Overview

This project is compose of two applications. One for the Backend(PHP Laravel) and one for the Frontend(Angular JS). This project is using Headless Backend Architecture, so the frontend and backend are complete decoupled systems. The Frontend app communicates with the Backend using Ajax and JSON.

## Local Development Setup

For you to run the project, you to set up both frontend and backend applications. Just follow the steps below after you have cloned this repo.
1. **Setup the frontend**
    1. Open cmd, and change directory to _/app_. 
    2. Run `npm intall`
    3. Run `ng serve`
    4. Frontend is now running! Please note of the port. Usually it's :4200
2. **Setup the backend**
    1. Open cmd, and change directory to _/api_.
    2. Create/Edit .env file. You can duplicate and rename the .env.example
        1. Edit the database configuration
        2. Add the `INVALID_LINK=<link of the shortened url is invalid>` in .env. The value will be the `<base url of frontend app> + "/invalid"`. E.g. _INVALID_LINK=localhost:4200/**invalid**_
    3. Run `composer install`
    4. Run `php artisan migrate`
    5. Run `php artisan serve`
    6. Backend is now running! Please note if the port. Usually it's :8000
3. **Connect Frontend to Backend**
    1. Edit _./app/src/environments/environment.ts_
    2. Change the value if `APIBaseURL` to match your server
    3. Be sure to restart the frontend
4. You're done! You can now visit the frontend in the browser
    
 
