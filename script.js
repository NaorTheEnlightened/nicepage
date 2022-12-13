var ip = {};
	
window.onload = async function(e) {
   const response =  await fetch("https://ipinfo.io/json?token=5103a5db55ab61")
   const json = await response.json();
      if(json.country === "IL") {

         console.log("from israel. this page dynamically updates based on your geo-location");
      } else {
	  	document.querySelector('body').style.display = 'none';
		  alert('This page is for israel people only!');
	  }
};
