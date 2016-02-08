

$(document).ready(function(){ // On load
		$('.aboutbg').css({'height':(($(window).height()))+'px'});
	});
	
	$(window).resize(function(){ // On resize
		$('.aboutbg').css({'height':(($(window).height()))+'px'});
	});




$("#field").keyup(function(){
    el = $(this);
    if(el.val().length >= 500){
        el.val( el.val().substr(0, 500) );
    } else {
        $("#charNum").text(500-el.val().length);
    }
});



$("#field2").keyup(function(){
    el = $(this);
    if(el.val().length >= 300){
        el.val( el.val().substr(0, 300) );
    } else {
        $("#charNum2").text(300-el.val().length);
    }
});


$(".prefertime").click(function(){
    $(this).toggleClass("check");
}); 





// Iterate over each select element
$('select').each(function () {
    // Cache the number of options
    var $this = $(this),
        numberOfOptions = $(this).children('option').length;
    // Hides the select element
    $this.addClass('s-hidden');
    // Wrap the select element in a div
    $this.wrap('<div class="select"></div>');
    // Insert a styled div to sit over the top of the hidden select element
    $this.after('<div class="styledSelect"></div>');
    // Cache the styled div
    var $styledSelect = $this.next('div.styledSelect');

    // Show the first select option in the styled div
    $styledSelect.text($this.children('option').eq(0).text());
    // Insert an unordered list after the styled div and also cache the list
    var $list = $('<ul />', {
        'class': 'options'
    }).insertAfter($styledSelect);
    // Insert a list item into the unordered list for each select option
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
    // Cache the list items
    var $listItems = $list.children('li');
    // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
    $styledSelect.click(function (e) {
        e.stopPropagation();
        $('div.styledSelect.active').each(function () {
            $(this).removeClass('active').next('ul.options').hide();
        });
        $(this).toggleClass('active').next('ul.options').toggle();
    });
// Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
    // Updates the select element to have the value of the equivalent option
    $listItems.click(function (e) {
        e.stopPropagation();
		
        $styledSelect.text($(this).text()).removeClass('active');
		
		
        $this.val($(this).attr('rel'));
        $list.hide();
        /* alert($this.val()); Uncomment this for demonstration! */
    });
// Hides the unordered list when clicking outside of it
    $(document).click(function () {
         $styledSelect.removeClass('active');
        $list.hide();
    });

});
