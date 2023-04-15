Write a README that explains how to clone this app from github and run it on a local machine. Include links on how to download and install psql on various os's. Iclude the notes on db pool setups. Test it on a windows machine..

JobsPage: if not connected to server, display corresponding error message instead of "there are no jobs"

AddPage:
Hide the tags input until the tags are actually used. Actually just use it now.
Move the existing entries search display into the step1 component

When implementing career deletion functionality, make sure that the current career number is set to 0 each time a career is deleted.

Dark mode, better front end design.

Demonstration mode for when no one is signed in.

On startup, the search page should list entries saved as the demo account.

User must not be able to delete a career if there is an application made with it. If there are no apps with that career, user should be able delete the career from the profile section. So if there are applications made with that career, user will need to delete each application record or change each app's career field to something else.

If user is logged out, load a bunch of sample job applications so that guests can use the search feature and all the other features like saving records.
