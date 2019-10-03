/* This class just contains some static properties used by the application. Basically all the endpoints. Ideally, this would 
  a router used by components when using a framework */

class Constants {
	
  constructor() {  }
   
  get apiRoot() { return "http://63.230.138.133:3002/" };  // This would normally be a domain but port 80 on the server was already taken. Change to test locally.
  get apiPathLogin() { return this.apiRoot + 'auth';  }
  get apiPathCatSearch() { return this.apiRoot + 'catsearch';  }
  get apiPathCatAddFavorite() { return this.apiRoot + 'addcatfavorite';  }
  get apiPathCatEditFavorite() { return this.apiRoot + 'editcatfavorite';  }
  get apiPathCatListFavorites() { return this.apiRoot + 'catlistfavorites';  }
  get apiPathCatGetFavorite() { return this.apiRoot + 'getcatfavorite';  }
  get apiPathCatRemoveFavorite() { return this.apiRoot + 'removestockfavorite';  }
  get userID() { return localStorage.getItem("userID") };


}