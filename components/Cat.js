// This is a very simple ECMA 6 (JS) class. It can only be imported into other files using the script tag. Using the common.js library allows you to 
// import and export classes like this into other classes similar to Ember and Angular. 

class Cat {
	constructor() {

	}

	Search(searchQuery) {
		let constants = new Constants();
		let url = constants.apiPathCatSearch + `/${searchQuery}/${constants.userID}`;
		return new Promise(
			(resolve, reject) => {
				const request = new XMLHttpRequest();
				Object.assign(request, {
					onload() {
						if (this.status === 200) {
							var res = this.response;
							var resObj = JSON.parse(res);

							if (resObj === 'fail') {
								$("#status").html("No Cat facts were found");
								setTimeout(function(){ $("#status").html("") }, 5000); // clear message after 5 secs								
							} else {
								resolve(resObj);
							}

						} else {
							reject(new Error(this.statusText));
						}
					},
					onerror() {
						reject(new Error(
							'XMLHttpRequest Error: ' + this.statusText));
					}
				});
				request.open('GET', url);
				request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
				request.send();
			});
	}

	AddFavorite(catFavoriteModel) {
		let constants = new Constants();
		let url = constants.apiPathCatAddFavorite;
		return new Promise(
			(resolve, reject) => {
				const request = new XMLHttpRequest();
				Object.assign(request, {
					onload() {
						if (this.status === 200) {
							var res = this.response;
							var resObj = JSON.parse(res);

							if (resObj === 'fail') {
								$("#status").html("Unable to add favorite at this time.");
								setTimeout(function(){ $("#status").html("") }, 5000); // clear message after 5 secs
							} else {
								resolve(resObj);
							}

						} else {
							reject(new Error(this.statusText));
						}
					},
					onerror() {
						reject(new Error(
							'XMLHttpRequest Error: ' + this.statusText));
					}
				});
				request.open('POST', url);
				request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
				request.send(JSON.stringify(catFavoriteModel));
			});
	}

	EditFavorite(catFavoriteModel) {
		let constants = new Constants();
		let url = constants.apiPathCatEditFavorite;
		return new Promise(
			(resolve, reject) => {
				const request = new XMLHttpRequest();
				Object.assign(request, {
					onload() {
						if (this.status === 200) {
							var res = this.response;
							var resObj = JSON.parse(res);

							if (resObj === 'fail') {
								$("#status").html("Unable to Edit favorite at this time.");
								setTimeout(function(){ $("#status").html("") }, 5000); // clear message after 5 secs
							} else {								
								resolve(resObj);
							}

						} else {
							reject(new Error(this.statusText));
						}
					},
					onerror() {
						reject(new Error(
							'XMLHttpRequest Error: ' + this.statusText));
					}
				});
				request.open('POST', url);
				request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
				request.send(JSON.stringify(catFavoriteModel));
			});
	}	

	RemoveFavorite(catFavoriteModel) {
		let constants = new Constants();
		let url = constants.apiPathCatRemoveFavorite;
		return new Promise(
			(resolve, reject) => {
				const request = new XMLHttpRequest();
				Object.assign(request, {
					onload() {
						if (this.status === 200) {
							var res = this.response;
							var resObj = JSON.parse(res);

							if (resObj === 'fail') {
								$("#status").html("Unable to Remove favorite at this time.");
								setTimeout(function () { $("#status").html("") }, 5000); // clear message after 5 secs
							} else {							
								resolve(resObj);
							}

						} else {
							reject(new Error(this.statusText));
						}
					},
					onerror() {
						reject(new Error(
							'XMLHttpRequest Error: ' + this.statusText));
					}
				});
				request.open('POST', url);
				request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
				request.send(JSON.stringify(catFavoriteModel));
			});
	}		

	GetFavorite(catFactID) {
		let constants = new Constants();
		let url = constants.apiPathCatGetFavorite + `/${constants.userID}/${catFactID}`;
		return new Promise(
			(resolve, reject) => {
				const request = new XMLHttpRequest();
				Object.assign(request, {
					onload() {
						if (this.status === 200) {
							var res = this.response;
							var resObj = JSON.parse(res);

							if (resObj === 'fail') {
								$("#status").html("Unable to fetch favorite data at this time.");
								setTimeout(function(){ $("#status").html("") }, 5000); // clear message after 5 secs
							} else {								
								resolve(resObj);
							}

						} else {
							reject(new Error(this.statusText));
						}
					},
					onerror() {
						reject(new Error(
							'XMLHttpRequest Error: ' + this.statusText));
					}
				});
				request.open('GET', url);
				request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
				request.send();
			});
	}	

	ListFavorites() {
		let constants = new Constants();
		let url = constants.apiPathCatListFavorites + `/${constants.userID}`;
		return new Promise(
			(resolve, reject) => {
				const request = new XMLHttpRequest();
				Object.assign(request, {
					onload() {
						if (this.status === 200) {
							var res = this.response;
							var resObj = JSON.parse(res);

							if (resObj === 'fail') {
								$("#status").html("There was an error retrieving favorites.");
								setTimeout(function(){ $("#status").html("") }, 5000); // clear message after 5 secs
							} else {
								resolve(resObj);
							}

						} else {
							reject(new Error(this.statusText));
						}
					},
					onerror() {
						reject(new Error(
							'XMLHttpRequest Error: ' + this.statusText));
					}
				});
				request.open('GET', url);
				request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
				request.send();
			});
	}


}