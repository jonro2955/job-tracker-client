record-search (branch): Right now, all records are loaded into the SearchPage component's displayedAppsList state when user opens the search page. When the user clicks "Search", use array functions to filter the loaded records using the currently set date range rather than making new server requests. AND, whenever a date parameter changes, rerun the filter using the new date.

Add salary entry field

Add post-application edit options for marking an app as interviewd, rejected, etc to make it marked as such in list search view

On authentication, if the user is not already in the database, add the user to the database with a default career list

When implementing career deletion functionality, make sure that the current career number is set to 0 each time a career is deleted.

Dark mode.

Set up demonstration mode for when no one is signed in.

On startup, the search page should list entries saved as the demo account.

User must not be able to delete a career if there is an application made with it. If there are no apps with that career, user should be able delete the career from the profile section. So if there are applications made with that career, user will need to delete each application record or change each app's career field to something else.

The step 3 box will need to display matching company applications at the bottom of it after the db system has been set up.

Scrapers: if we later we figure out how to use some headless virtual browsers to easily scrape the data we need from crape-blocked sites, we can add functionality to populate all possible form fields automatically when a job posting url is pasted in.

BYTEA data format conditioning for homePage.js>handleSaveApp
Options for storing files in postgres:
1: Save the files into postgres as BLOB objects or bytea or text types. You may need a package to convert them back to pdfs when user wants access to the files later.
https://blog.logrocket.com/drag-and-drop-react-dnd/
https://react-dropzone.js.org/#section-examples
https://stackoverflow.com/questions/56001073/how-to-get-byte-array-from-a-file-in-reactjs
https://dba.stackexchange.com/questions/36493/how-can-i-store-a-pdf-in-postgresql#:~:text=Probably%20the%20best%20way%20store,large%20object%20rights%20where%20defined.
Or save the pdfs as images. Be sure to free up space correctly upon deletion of any inserted files from the db.
2: Use google drive sdk to upload the files to user's google drive, then download it later.
3: Automatically parse and save only the plain text from the pdfs as a string. https://www.npmjs.com/package/pdf-parse. Or Copy and paste the text from the pdfs manually and save them as a string

Converting bytea file back to original form
https://stackoverflow.com/questions/12603307/convert-byte-array-to-the-original-file-in-javascript

Show some kind of progress animation while the save action is being performed on the back end. Or show a confirmation popup when express returns with a successful post response.

If user is logged out, load a bunch of sample job applications so that guests can use the search feature and all the other features like saving records.