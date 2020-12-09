// The data-filter control attribute automatically loads all .grid-item divs at once
// This lazy workaround makes it so only the charter class divs load first
// 
// Script gets enquequed at ../functions.php line 206

var shown = false;	

jQuery(document).ready(function($){
    	$('.grid-item:not(.user-Charter)').hide();
		
		$( ".team4_filters" ).click(function() {
			if(!shown){
    		$('.grid-item:not(.user-Charter)').show();
			
			shown = true;
			}
		});
		
	

		
	});
