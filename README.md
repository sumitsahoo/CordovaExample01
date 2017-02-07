#Cordova Setup :

1. Install NodeJS from : https://nodejs.org/en/
2. Install the current release to test out new features.
3. Install Cordova and Ionic (for now install ionic but use jQuery Mobile).
4. Open CMD after NodeJS installation and type below command to install Cordova and Ionic : 
   npm install -g cordova ionic
5. Wait for the command to finish installing the components.
6. That’s it, installation part is over.

#Show All Contacts App : 

1. Goal is to make an App which reads contacts from contact database using cordova plugin.
2. Create a folder where you want to store cordova project files
3. Navigate to that folder and open command line tool then create a cordova project using below command
4. cordova create showcontacts com.example.showcontacts ShowContacts
5. Here “showcontacts” is the project folder, “com.example.showcontacts” is the package name and “ShowContacts” is the project name
6. Now navigate to project folder : cd showcontacts
7. Now add Android platform using command: cordova platform add android --save
8. Make sure you have added ANDROID_HOME path to your environment variable. It usually points to : C:\Users\<user-name>\AppData\Local\Android\sdk
9. Where “user-name” is the Windows user folder name.
10. If ANDROID_HOME variable doesn’t exist then you might get an error while adding Android platform.
11. Now add contacts plugin, since we are going to read contacts we need to add the cordova plugin for that. Command : cordova plugin add cordova-plugin-contacts
12. Know more about usage of the plugin here : https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-contacts/index.html
13. Now navigate to “www” folder and edit “index.html”. “Www” folder is where we will do all the coding.
14. Replace the meta tag with below value to bypass content violation issues (because server hosting and access is being done on same machine)

    ```
    <meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'" />
    ```
    
15. After that add jQuery and jQuery Mobile plugins and stylesheet. Copy over the below content

    ```
    <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />
    <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
    <script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.js"></script>
    ```
    
16. Now read some intro to jQuery Mobile : http://demos.jquerymobile.com/1.4.5/intro/
17. Modify body tag of HTML with below content
    ```html
    <div data-role="page">

        <div data-role="header" data-position="fixed">
            <h1>All Contacts</h1>
        </div>
        <!-- /header -->

        <div role="main" class="ui-content">

        </div>
        <!-- /content -->

        <div data-role="footer" data-position="fixed">
            <h4>Page Footer</h4>
        </div>
        <!-- /footer -->

    </div>
    <!-- /page  -->
    ```
18. Now navigate to “js” folder which is inside “www” folder. Edit “index.js” file and add below content. Replace the existing ones as we don’t need those codes and will be proceeding with simple jQuery to keep it simple.
    ```html
    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady(){

      // find all contacts
      var options = new ContactFindOptions();
      options.filter = "";
      options.multiple = true;
      var filter = ["displayName", "addresses"];

      $.mobile.loading("show");
      navigator.contacts.find(filter, onSuccess, onError, options);

    }

    var contactsHtml = "";

    // display the names of all contacts

    function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
        contactsHtml += "<p>" + contacts[i].displayName + "</p><hr>\n";
        }
      $('.ui-content').html(contactsHtml);
      $.mobile.loading("hide");
    };

    function onError(contactError) {
        $.mobile.loading("hide");
      alert("Unable to retrieve contacts.");
    };
    ```
19. The code is quite simple, we are just querying for all the contacts using contacts plugin for android and forming a html to show all the contacts inside a div tag.
20. Now to compile the code use command : cordova build android
21. Wait for command to finish. For first time it will download gladle plugin, so it may take a while.
22. Now once build is done connect your Android device and run the project. To run the App use command : cordova run android
23. On first app launch you need to allow contacts access (Marshmallow and above). Once access is allowed you can see the list of the contacts inside body segment.
24. That’s it. Simple, isn’t it ?

Happy Coding :)
Fork -> Improve -> Share -> Repeat 










