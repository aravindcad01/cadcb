function add()
{
    var a=10;
    var b=20;
    var c=a+b;
    console.log("value of a is..."+a);
    console.log("value of b is..."+b);
    console.log("add the value ..."+c);
}
add();

function Sub()
{
    var a=20;
    var b=30;
    var c=a-b;
    console.log("value of a is..."+a);
    console.log("value of b is..."+b);
    console.log("subtracted the value...."+c);
   
}
Sub();
  

function mul()
{
    var a=50;
    var b=30;
    var c=a*b;
    
     console.log("value of a is..."+a);
    console.log("value of b is..."+b);
    console.log("mul the value...."+c);
    
}
mul();
var a=40;
var b=20;
console.log("div the value..."+(a/b));
console.log(a**b);
console.log(a+-b);
console.log(a+=b);
console.log(a-=b);
console.log(a*=b);
console.log(a%=b);
console.log(a**=b);
console.log(a>b);
console.log(a<b);
console.log(a!=b);
console.log(a!==b);
console.log(a<=b);
console.log(a>=b);
console.log(a&&b);


document.getElementById("fnamed").innerHTML=document.getElementById("fname").value;
document.getElementById("lnamed").innerHTML=document.getElementById("lname").value;
document.getElementById("pno").innerHTML=document.getElementById("pn").value;

function assign();
var a=30;
var b=50;
c=a+b;
console.log("value of a is ..."+a);
console.log("value of b")











$(document).ready(function() {
    // Initialize Select2 on the pickupLocation element
    $('#pickupLocation').select2({
      placeholder: 'Search for pickup location',
      ajax: {
        url: 'your_endpoint_for_location_suggestions', // Replace with your endpoint for location suggestions
        dataType: 'json',
        delay: 250,
        processResults: function(data) {
          return {
            results: data
          };
        },
        cache: true
      },
      templateResult: formatLocation // Custom function to format dropdown options
    });
  });
  
  // Custom function to format dropdown options
  function formatLocation(location) {
    if (!location.id) {
      return location.text;
    }
  
    var $location = $(
      '<span>' + location.text + '<br><small>' + location.city + '</small></span>'
    );
    return $location;
  }
  