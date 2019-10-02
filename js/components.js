// Type: ECMA5
// Description: Creates a Modal Dialog
// Usage:
	// modalDialogComponent({backgroundColor: "background:rgba(29, 42, 90, 1)",
	// 					   targetElement: ".modalDialogOne",
	//					   title: "This is a test",
  //                       id: "modalDialog1",
  //  					   title: "Test",
  //                       content: "This content can even be HTML and most often will be",
  //                       modalCSS: "height:300px", // Over-rides CSS settings - height, width etc.
  //                       enableOptions: true, // turns on the options passed by the options object
  //                       options: {backdrop:"static", keyboard:true}
  //                      });
  
  //	modalDialogComponent(modalObject);

// HTML test
  //<a data-toggle="modal" href="#modalDialog1">Test Link</a>
 function modalDialogComponent(modalObject) {
     var models = $(modalObject.targetElement);
     models.html("");
     var modelsHTML = "";
		   modelsHTML += '<div id="' + modalObject.id + '" class="modal fade" role="dialog" style="' + modalObject.modalCSS + '">';
             modelsHTML += '<div class="modal-dialog">';
                 modelsHTML += '<div class="modal-content"  style="' + modalObject.backgroundColor + '">';
                 modelsHTML += '<div class="modal-header">';
                   modelsHTML += '<button type="button" class="close" data-dismiss="modal">&times;</button>';
                    modelsHTML += '<h4 class="modal-title">' + modalObject.modalIcon + ' ' + modalObject.title + '</h4>';
                 modelsHTML += '</div>';
                     modelsHTML += '<div class="modal-body">';
                     modelsHTML += modalObject.content;
                     modelsHTML += '</div>';
                 modelsHTML += '</div> <!--modal-content-->';
             modelsHTML += '</div> <!--modal-dialog-->';
             modelsHTML += '</div> <!--modal-dialog-->';
             models.html(modelsHTML);
  }

// Type: ECMA5
// Usage: var currentDate = getCurrentDate();
function getCurrentDate() {
  var d = new Date();
  var month = d.getMonth();
  month = month + 1;
  var day = d.getDate();
  var year = d.getFullYear();
  var shortDate = month + "/" + day + "/" + year;
  return shortDate;
}

// Type: ECMA5
// Description: Creates sliding backgrounds using images or text
// Usage:
	// sliderComponent({images: ["img/cover-heros/txpages-background-1280x900.jpg",
	// 								 "img/cover-heros/banner1.png",
	// 								 "img/cover-heros/banner2.jpg",
	// 								 "img/cover-heros/banner3.jpg",
	// 							 ],
  //									imageLinks: ["services/print.html", "services/social-media-management-marketing.html", "services/seo.html", "services/webdevelopment.html"],
  //                 	includeTagLineBar: true,
  //                  tagBarColor: "background:rgba(29, 42, 90, 1)",
  //                  tagBarContent: [tagbar1HTML, tagbar2HTML],
  //                  itemsCSS: background: rgba(43, 45, 65, 1),
	// 									targetElement: ".cover-17"});


function sliderComponent(sliderObject){
	sliderHTML = "";
		sliderHTML += '<div style="" id="myCarousel" class="carousel slide" data-ride="carousel">'
				sliderHTML  += ' <div class="carousel-inner" role="listbox">'
			 		sliderHTML+= '<div class="item active">'
				 		sliderHTML+= '<div class="" style="' + sliderObject.itemsCSS + '" >'
							sliderHTML+= '<a href="' + sliderObject.imageLinks[0] + '"><img class="img-responsive img-thumbnail" src="' + sliderObject.images[0] + '"/></a>'
              if (sliderObject.includeTagLineBar) {
    							sliderHTML+= '	<div class="sticky-bottom" style="margin-bottom:98px">'
    								sliderHTML+= '	<div class="aj-fade-out-scroll-up">'
    									sliderHTML+= '	<div class="container-fluid" style="' + sliderObject.tagBarColor + '">'

                      sliderHTML+= sliderObject.tagBarContent[0];

    									sliderHTML+= '	</div>'
    									sliderHTML+= '	<div class="container-fluid">'
    										sliderHTML+= '	<div class="row">'
    											sliderHTML+= '	<div class="col-lg-12 col-md-12">'
    											sliderHTML+= '		<div class="row">'
    												sliderHTML+= '		<div class="col-md-12 text-center" style="' + sliderObject.tagBarColor + '">'
    												sliderHTML+= '			<p>'
    												sliderHTML+= '			'
    													sliderHTML+= '		</p>'
    												sliderHTML+= '		</div>'
    												sliderHTML+= '	</div>'
    											sliderHTML+= '	</div>'
    										sliderHTML+= '	</div>'
    									sliderHTML+= '	</div>'
    								sliderHTML+= '	</div>'
    							sliderHTML+= '	</div>'
            }
						sliderHTML+= '	</div>'
					sliderHTML+= ' </div>'
					for(x=1;x<=sliderObject.images.length-1;x++) {
						sliderHTML+= '<div class="item">'
							sliderHTML+= '<div class="" style="' + sliderObject.itemsCSS + '" >'
								sliderHTML+= '<a href="' + sliderObject.imageLinks[x] + '"><img class="img-responsive img-thumbnail" style="" src="' + sliderObject.images[x] + '"/></a>'
                if (sliderObject.includeTagLineBar) {
  								sliderHTML+= '	<div class="sticky-bottom" style="margin-bottom:98px">'
  									sliderHTML+= '	<div class="aj-fade-out-scroll-up">'
  										sliderHTML+= '	<div class="container-fluid" style="' + sliderObject.tagBarColor + '">'
                      sliderHTML+= sliderObject.tagBarContent[x];
  										sliderHTML+= '	</div>'
  										sliderHTML+= '	<div class="container-fluid">'
  											sliderHTML+= '	<div class="row">'
  												sliderHTML+= '	<div class="col-lg-12 col-md-12">'
  												sliderHTML+= '		<div class="row">'
  													sliderHTML+= '		<div class="col-md-12 text-center" style="' + sliderObject.tagBarColor + '">'
  													sliderHTML+= '			<p>'
                            sliderHTML+= ' &nbsp;'
  														sliderHTML+= '		</p>'
  													sliderHTML+= '		</div>'
  													sliderHTML+= '	</div>'
  												sliderHTML+= '	</div>'
  											sliderHTML+= '	</div>'
  										sliderHTML+= '	</div>'
  									sliderHTML+= '	</div>'
  								sliderHTML+= '	</div>'
               }
							sliderHTML+= '	</div>'
						sliderHTML+= ' </div>'
					}

		 		 		sliderHTML+= '<a class="hidden-xs left carousel-control" href="#myCarousel" style="" role="button" data-slide="prev">'
			 		 		sliderHTML+= '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>'
			 		 		sliderHTML+= '<span class="sr-only">Previous</span>'
		 		 		sliderHTML+= '</a>'
		 		 		sliderHTML+= '<a class="hidden-xs right carousel-control" href="#myCarousel" style="" role="button" data-slide="next">'
			 		 		sliderHTML+= '<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>'
			 		 		sliderHTML+= '<span class="sr-only">Next</span>'
		 		 		sliderHTML+= '</a>'
	 		 		sliderHTML+= '</div>'

		$(sliderObject.targetElement).html(sliderHTML);
}

// Type: ECMA5
// Description: Creates drop-menu populated from table using SQL Server from Node Server
// Usage:
// message = {
//  xba: "xxxx",
//  xbb: "xxxx",
// }
//
// ajaxPopulateDropMenuNodeSQL("http://10.10.2.45:3000/api/dropmenunode", message, "companySelect");
// Get returned data:
    // companyValx = $('#companySelect').selectpicker();
    // vsid = companyValx.val();
    // companyx = $("#companySelect :selected").text();

function ajaxPopulateDropMenuNodeSQL(url, message, target) {
 mainBoxMiddleHTML = "";
 jQuery.support.cors = true;

 var mydata = JSON.stringify(message);
 $.ajax({
 type: "POST",
 url: url,
 data: mydata,
 contentType: "application/json; charset=utf-8",
 jsonp: "callback",
 dataType: "json",
 processData: true,
 cache: false,
 crossDomain: true,
 async:true,
 success: function(response, textStatus, xhr) {
	   var options = $("#" + target);
		 var items = response.message;
		 items.forEach(function(item){
				options.append($("<option />").val(item.paramVal).text(item.paramName));
		 });

		 $(document).ready(function(){
	  			$('#' + target).selectpicker('refresh');
	 	});

		},
	 error: function(xhr, textStatus, errorThrown) {
	 	 console.log(errorThrown);
		}
 });
 }

 // Type: ECMA5
 // Description: Creates drop-menu populated from table using SQL Server from .NET Web API
 // Usage:
 // message = {
 //  xba: "xxxx",
 //  xbb: "xxxx",
 // }
 //
 // ajaxPopulateDropMenuNetSQL("http://10.10.2.45:3000/api/dropmenu", message, "companySelect");
 // Get returned data:
     // companyValx = $('#companySelect').selectpicker();
     // vsid = companyValx.val();
     // companyx = $("#companySelect :selected").text();

 function ajaxPopulateDropMenuNetSQL(url, message, target) {
  mainBoxMiddleHTML = "";
  jQuery.support.cors = true;

  var mydata = JSON.stringify(message);
  $.ajax({
  type: "POST",
  url: url,
  data: mydata,
  contentType: "application/json; charset=utf-8",
  jsonp: "callback",
  dataType: "json",
  processData: true,
  cache: false,
  crossDomain: true,
  async:true,
  success: function(response, textStatus, xhr) {
 	   var options = $("#" + target);
 		 var items = response;
 		 items.forEach(function(item){
 				options.append($("<option />").val(item.paramVal).text(item.paramName));
 		 });

 		 $(document).ready(function(){
 	  			$('#' + target).selectpicker('refresh');
 	 	});

 		},
 	 error: function(xhr, textStatus, errorThrown) {
 	 	 console.log(errorThrown);
 		}
  });
  }
