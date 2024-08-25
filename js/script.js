/*=========JQ==========*/
$(document).ready(function(){
	// draggable
	$('#draggable').draggable();

	// droppable
	$( "#droppable" ).droppable({
		drop: function( event, ui ) {
		$( this )
			.addClass( "ui-state-highlight" )
			.find( "p" )
			.html( "Dropped!" );
		}
	});

	// resizable
	$('#resizable').resizable();
	
	// selectable
	$('#selectable').selectable();
	
	// sortable
	$('#sortable').sortable();
	
	// sortable connected list
	$('#sortable1, #sortable2').sortable({
		connectWith: ".connectedSortable"
	}).disableSelection();

	// sortable drop placeholder
	$('#sortable3').sortable({
		placeholder: "ui-state-highlight"
	});
	$('#sortable3').disableSelection();

	// accordion
	$('#accordion').accordion();

	// accordion collapse content
	$('#accordion2').accordion({
		collapsible: true
	});

	// accordion fill space
	$('#accordion3').accordion({
		heightStyle: "fill"
	});
	$('#accordion-resizer').resizable({
		minHeight: 140,
		minWidth: 200,
		resize: function(){
			$('#accordion3').accordion("refresh");
		}
	});
	// accordion no auto height
	$('#accordion4').accordion({
		heightStyle: "content"
	});

	// autocomplete
	var availableTags = [
		"ActionScript",
		"AppleScript",
		"Asp",
		"BASIC",
		"C",
		"C++",
		"Clojure",
		"COBOL",
		"ColdFusion",
		"Erlang",
		"Fortran",
		"Groovy",
		"Haskell",
		"Java",
		"JavaScript",
		"Lisp",
		"Perl",
		"PHP",
		"Python",
		"Ruby",
		"Scala",
		"Scheme"
	];
	$('#tags').autocomplete({
		source: availableTags
	});

	// datepicker
	$('#datepicker').datepicker();

	// datepicker animations
	$('#datepicker2').datepicker();
	$('#anim').on('change', function(){
		$('#datepicker2').datepicker('option', 'showAnim', $(this).val());
	});

	// datepicker icon trigger
	$('#datepicker3').datepicker({
		showOn: "button",
		buttonImage: "images/calendar.gif",
		buttonImageOnly: true,
		buttonText: "Select Date"
	});

	// menu
	$('#menu').menu();

	// menu categories
	$('#menu2').menu({
		items: "> :not(.ui-widget-header)"
	});

	// menu icons
	$('#menu3').menu();

	// progressbar
	$('#progressbar').progressbar({
		value: 25
	});

	// progress download dialog
	var progressTimer,
	progressbar = $( "#progressbar2" ),
    progressLabel = $( ".progress-label" ),
    dialogButtons = [{
        text: "Cancel Download",
        click: closeDownload
    }],
    dialog = $( "#dialog" ).dialog({
        autoOpen: false,
        closeOnEscape: false,
        resizable: false,
        buttons: dialogButtons,
        open: function() {
        progressTimer = setTimeout( progress, 2000 );
        },
        beforeClose: function() {
        downloadButton.button( "option", {
            disabled: false,
            label: "Start Download"
		});
        }
    }),
    downloadButton = $( "#downloadButton" )
        .button()
        .on( "click", function() {
        $( this ).button( "option", {
            disabled: true,
            label: "Downloading..."
        });
        dialog.dialog( "open" );
        });
    progressbar.progressbar({
    value: false,
    change: function() {
        progressLabel.text( "Current Progress: " + progressbar.progressbar( "value" ) + "%" );
    },
    complete: function() {
        progressLabel.text( "Complete!" );
        dialog.dialog( "option", "buttons", [{
        text: "Close",
        click: closeDownload
        }]);
        $(".ui-dialog button").last().trigger( "focus" );
    }
    });
    function progress() {
    var val = progressbar.progressbar( "value" ) || 0;
	progressbar.progressbar( "value", val + Math.floor( Math.random() * 3 ) );
	if ( val <= 99 ) {
        progressTimer = setTimeout( progress, 50 );
    }
    }
	function closeDownload() {
    clearTimeout( progressTimer );
    dialog
        .dialog( "option", "buttons", dialogButtons )
        .dialog( "close" );
    progressbar.progressbar( "value", false );
    progressLabel
        .text( "Starting download..." );
    downloadButton.trigger( "focus" );
    }

	// selectmenu
	$('#speed').selectmenu();
	$('#files').selectmenu();
	$('#number')
		.selectmenu()
		.selectmenu('menuWidget')
			.addClass('overflow');
	$('#salutation').selectmenu();

	// slider
	$( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 500,
		values: [ 75, 300 ],
		slide: function( event, ui ) {
			$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		}
		});
		$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
		" - $" + $( "#slider-range" ).slider( "values", 1 ) );
	
    // tabs default
	$('#tabs').tabs();
	
	// tabs collapse content
	$('#tabs2').tabs({
		collapsible: true
	});
	
	// tabs sortable
	var tabs = $( "#tabs3" ).tabs();
    var previouslyFocused = false;

    tabs.find( ".ui-tabs-nav" ).sortable({
	axis: "x",
	// Sortable removes focus, so we need to restore it if the tab was focused
    // prior to sorting
    start: function(event, ui) {
        previouslyFocused = document.activeElement === ui.item[ 0 ];
    },
    stop: function(event, ui) {
        tabs.tabs( "refresh" );
        if (previouslyFocused) {
        ui.item.trigger( "focus" );
        }
    }
    });
});