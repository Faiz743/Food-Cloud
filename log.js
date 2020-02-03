function validate(){  
var name=document.form2.name.value;
var password=document.form2.password.value;

if (name==null || name==""){  
  alert("Name can't be blank");  
  return false;
  }else if(password.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false; 
}
}