/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
	
	// find all contacts
	var options = new ContactFindOptions();
	options.filter = "";
	options.multiple = true;
	var filter = ["displayName", "addresses"];
	
	// Show loader
	$.mobile.loading("show");	// More about loader : https://api.jquerymobile.com/loader/
	
	// Access Contacts API, More usage details here : https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-contacts/index.html
	navigator.contacts.find(filter, onSuccess, onError, options);

}

var contactsHtml = "";

// display the names of all contacts

function onSuccess(contacts) {
    for (var i = 0; i < contacts.length; i++) {
		contactsHtml += "<p>" + contacts[i].displayName + "</p><hr>\n";
    }
	
	// Insert HTML inside div tag
	
	$('.ui-content').html(contactsHtml);
	
	// Hide loader
	$.mobile.loading("hide");
};

function onError(contactError) {
	
	// Hide loader
    $.mobile.loading("hide");
	
	// Show error message 
	alert("Unable to retrieve contacts.");
};

