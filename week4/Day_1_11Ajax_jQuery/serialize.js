$("#form").submit((event) => {
  event.preventDefault();
  //   console.log(event.target.fName.value);
  //   console.log(event.target.email.value);
  //   console.log(event.target.password.value);
  console.log($("#form").serializeArray());
});
