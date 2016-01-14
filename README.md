# NotAnotherGamingReviewSite
## Telerik Academy 2015-2016 - Nodejs course team work.
  - Basic idea:
      - A simple Gaming review web site.
      - Some Nodejs, Express and other MEAN stuff implemented.
      
## Team members:
  - Ivan Nikolov
  - Vyara Hristova
  - Kiril Borisov

##Documentation
###Used technologies:
  - The MEAN stack.
    - body-parser.
    - cookie-parser.
  - Multer for the file upload.
  - Jade for page rendering.
  - Passport for authentication.
    - passport-local.
  
###Main elements:
  - Pages:
    - Home page that shows recently added games, menu and login/register panel.
    - Game listing page.
    - Game details page.
    - Add game page.
    - Register page.
    - User profile page.
    - 404 page.
    - 403 page.
    - About page.
    - Review add page.
    - Review delete page.

###Routes description:

    - '/' - Home page route.
    - '/404' - Page not found route.
    - '/403' - Unauthorized access page.
    - '/games' - Games list page.
    - '/games/:id' - Game details by Id.


###Server Routes description:
   - Route	                                    - Method	    - Description
    - /	                                          - GET	          - Home page
    - /api/users	                              - GET	          - All users
    - /api/users	                              - POST	      - Create user
    - /api/games                                  - GET           - Get all games
    - /api/games/:id                              - GET           - Get a game by id
    - /api/games/:id                              - PUT           - Rate a game
    - /api/games/:id/add-review                   - POST          - Add a review to the game
    - /api/games/:id/delete-review/:review_id     - DELETE        - Delete a review
    - /api/games/add-game                         - POST          - Add a game
    - /login                                      - POST          - Login user
    - /logout                                     - POST          - Logout user
