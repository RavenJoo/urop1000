window.fbAsyncInit = function() {
        		FB.init({
          			appId      : '290884437749394',
          			status     : true,
          			cookie	   : true,
          			xfbml      : true,
          			version    : 'v2.0'
        		});
      		};

      		(function(d, s, id){
         		var js, fjs = d.getElementsByTagName(s)[0];
         		if (d.getElementById(id)) {return;}
         		js = d.createElement(s); js.id = id;
         		js.src = "//connect.facebook.net/en_US/sdk.js";
         		fjs.parentNode.insertBefore(js, fjs);
       		}(document, 'script', 'facebook-jssdk'));
       		
       		function handleLogin(form) {
       			var id = form.id.value;
       			var password = form.password.value;
       			
       			alert(id + " " + password);
       		};
       		
       		var form = document.getElementById("userinfo");
       		if (form.attachEvent) {
       			form.attachEvent("submit", handleLogin);
       		}
       		else {
       			form.addEventListener("submit", handleLogin);
       		}