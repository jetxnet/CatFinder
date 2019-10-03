class Modal {
	constructor() {

	}

	AddFavorite(factID) {
		var modalHTML = "<div class='body_text'>Enter a comment or description below for this favorite</div>"
		modalHTML += '<fieldset>'
		modalHTML += '<table width="100%">'
		modalHTML += '<tbody>'
		modalHTML += '<tr>'
		modalHTML += '<td align="right" valign="middle">'
		modalHTML += ''
		modalHTML += '</td>'
		modalHTML += '<td>'
		modalHTML += '<textarea style="width:340px" name="favoriteComment" id="favoriteComment" placeholder="Enter a comment (optional)" value=""></textarea>'
		modalHTML += '</td>'
		modalHTML += '</tr>'
		modalHTML += '<tr>'
		modalHTML += '<td></td>'
		modalHTML += '<td>'
		modalHTML += `<button type="submit" onclick="JavaScript: addFavorite('${factID}');" style="margin:auto; background-color:rgba(47,73,171,.8); color:rgba(243,230,164,1)" class="btn btn-default">Save<span style="margin-left:4px" aria-hidden="true" class="icon-angle-right"></span></button>`
		modalHTML += '</td>'
		modalHTML += '</tr>'
		modalHTML += '<tr>'
		modalHTML += '<td></td>'
		modalHTML += '</tr>'
		modalHTML += '</tbody></table>'
		modalHTML += '</fieldset>'
		return modalHTML;
	}

	EditFavorite(factID) {

		let favoriteComment = sessionStorage.getItem('favoriteComment');

		var modalHTML = "<div class='body_text'>Update your comment for this favorite</div>"
		modalHTML += '<fieldset>'
		modalHTML += '<table width="100%">'
		modalHTML += '<tbody>'
		modalHTML += '<tr>'
		modalHTML += '<td align="right" valign="middle">'
		modalHTML += ''
		modalHTML += '</td>'
		modalHTML += '<td>'
		modalHTML += `textarea style="width:340px" name="favoriteComment" id="favoriteComment" placeholder="Enter a comment (optional)" value="">${favoriteComment}</textarea>`
		modalHTML += '</td>'
		modalHTML += '</tr>'
		modalHTML += '<tr>'
		modalHTML += '<td></td>'
		modalHTML += '<td>'
		modalHTML += `<button type="submit" onclick="JavaScript: editFavorite('${factID}');" style="margin:auto; background-color:rgba(47,73,171,.8); color:rgba(243,230,164,1)" class="btn btn-default">Save<span style="margin-left:4px" aria-hidden="true" class="icon-angle-right"></span></button>`
		modalHTML += '</td>'
		modalHTML += '</tr>'
		modalHTML += '<tr>'
		modalHTML += '<td></td>'
		modalHTML += '</tr>'
		modalHTML += '</tbody></table>'
		modalHTML += '</fieldset>'
		return modalHTML;
	}

}