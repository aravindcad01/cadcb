function onlinereg(){
    var application=document.getElementById("apply").value;
    console.log(application);
    console.log(typeof application );
    application=Number(application);
    console.log(application);
    console.log(typeof application );


while(application<20){
    console.log("application "+application+" smaller than 20");
    application++;

}
}onlinereg();
