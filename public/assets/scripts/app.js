
//If comments exist load them into DOM
/*
$(document).ready({
	$('.commentArea').each(function(i, element){


	})
})
*/

//Add comments to articles with none existing
$('.commentAdder').on('click', function(){

	var cArea = $(this).parent();
	$(cArea).empty();
	
	$(cArea).html(`
		<form action="/`+$(cArea).data('id')+`" method="post">
			<fieldset class="form-group">
			    <label for="commentBox">Comment:</label>
			    <textarea class="form-control" id="commentBox" rows="3"></textarea>
			</fieldset>

			 <input type="submit" class="btn btn-danger" value="Add Comment"/>
		</form>
	`);
})