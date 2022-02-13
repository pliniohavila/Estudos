function myJsFunction(inputtxt)
{
	var numbers = /^[0-9]+$/;
      if(inputtxt.value.match(numbers))
      {
      window.alert('Your Registration number has accepted....');
     // document.form1.text1.focus();
      return true;
      
	  
	  
	  }
      else
      {
      alert('Please input numeric characters only');
     // document.form1.text1.focus();
      return false;
 }