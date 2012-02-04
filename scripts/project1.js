/*
Billy Mills
CSCI 344
project1.js
Feb 3 2012
*/

$(document).ready(function() {
				$("#modal-from-dom").bind('show', function() {
				var name = $("#name").val();
				$("#name_header").text("Hello, " + name);
				});
			});