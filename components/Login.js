class Login {
  constructor(userName, passWord) {
    this.userName = userName;
    this.passWord = passWord;
	this.User = {};
	this.LoginDT = {}
	this.LoginDT.login = userName;
	this.LoginDT.pass = passWord;
  }
   
  // check credentials
  Authenticate () {
	  
	let constants = new Constants();
	let url =  constants.apiPathLogin;
	return new Promise(
		(resolve, reject) => {
			const request = new XMLHttpRequest();
			Object.assign(request, {
				onload() {
					if (this.status === 200) {
						
					  var res = this.response;
					  var resObj = JSON.parse(res);
					  if (resObj === 'fail') {							
							$("#status").html("Invalid Credentials, please try again");						
					  }	else {
						  
						  // Set sessions
							 localStorage.setItem("userID", resObj);						
						
						resolve(resObj);						
					  }
						
					} else {
						reject(new Error(this.statusText));
					}
				},
				onerror() {
					reject(new Error(
						'XMLHttpRequest Error: '+this.statusText));
				}
			});
			request.open('POST', url);
			request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");				
			request.send(JSON.stringify(this.LoginDT));
		});	  

  }
  
  
}