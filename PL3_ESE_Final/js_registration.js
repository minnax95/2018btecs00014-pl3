<html>
<head>
	<script>
				var uname = document.getElementById("Username").value;
		        var pwd = document.getElementById("Password").value;
				var email = document.getElementById("Email").value;
		        var filter = /^([a-zA-Z0-9]*)+([a-zA-Z0-9]{2,4})+([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+$/;
		        if(uname =='')
		        {
			        alert("Please enter user name!")
		        }
		        else if(pwd=='')
		        {
        	        alert("Enter the password!")
		        }
                else if(email=='')
                {
                    alert("Enter your email-ID")
                }
		        else if(!filter.test(uname))
		        {
			        alert("Enter valid username!")
		        }
				else if(!filter.test(pwd))
		        {
			        alert("Password min length is 8!")
		        }
                else if(!filter.test(email))
                {
                    alert("Enter valid email-ID")
                }
		        else
		        {
	                alert('Thank You!')
                    //Redirecting to other page or webste code or you can set your own html page.
                    //window.location = "profile.html";
                }
	</script>
</head>
</html>				