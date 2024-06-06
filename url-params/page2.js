const parameterString=window.location.search;
const urlParams=new URLSearchParams(parameterString);
const value=urlparams.get("fullname,age");
console.log(value);