/**
 * plugin.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2015 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

/*jshint unused:false */
/*global tinymce:true */

/**
 * CropImage plugin that adds a toolbar button and menu item.
 */
tinymce.PluginManager.add('CropImage', function(editor, url) {
	// Add a button that opens a window
	editor.addButton('CropImage', {
		text: 'My button',
		icon: false,
		onclick: function() {
			// Open window
			editor.windowManager.open({
				title: 'CropImage plugin',
				body: [
					{type: 'textbox', name: 'title', label: 'Title'}
				],
				onsubmit: function(e) {
					// Insert content when the window form is submitted
					editor.insertContent('Title: ' + e.data.title);
				}
			});
		}
	});

	// Adds a menu item to the tools menu
	editor.addMenuItem('CropImage', {
		text: 'CropImage plugin',
		context: 'tools',
		onclick: function() {
			// Open window with a specific url
			editor.windowManager.open({
				title: 'TinyMCE site',
				url: url + '/dialog.html',
				width: 1024,
				height: 600,
				buttons: [
					{
						text: 'Insert',
						onclick: function() {
							// Top most window object
							var win = editor.windowManager.getWindows()[0];

							// Insert the contents of the dialog.html textarea into the editor

							//editor.insertContent(win.getContentWindow().document.getElementById('sample_input').value+'myimage.jpg');
							
							
							var url = win.getContentWindow().document.getElementById('sample_input').value;
								
						
							tinymce.activeEditor.insertContent('<img alt="Smiley face"  src="'+url+'"/>');
							
				

							// Close the window
							win.close();
						}
					},

					{text: 'Close', onclick: 'close'}
				]
				
			});
		}
	});
});