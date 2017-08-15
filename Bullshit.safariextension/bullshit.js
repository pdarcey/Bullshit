// Originally from https://github.com/logancollins/cloud-to-butt-safari/blob/master/cloudtobutt.js

// Replace
walk(document.body);

function walk(node) {
    
	// This function is originally from here:
	// http://is.gd/mwZp7E
	var child, next;
	
	switch (node.nodeType) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while (child) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;
		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)  {
	var v = textNode.nodeValue;
	// List of words to look for before quote
	var list = [ "says", "said", "saying", "claims", "claiming", "claimed", "tells", "telling", "told", "responds", "responding", "responded", "rejects", "rejecting", "rejected" ];
	
	// Preliminary cleanup. Replaces 3 x . with ellipse, and abbreviations with dots with same without dots
	v = v.replace(/U\.S\.A\./g,"USA");
	v = v.replace(/U\.S\./g,"US");
	v = v.replace(/U\.S,/g,"US,");
    v = v.replace(/\.\.+\ ?/g,"… ");
	
	// Actual replacement
	list.forEach(function(word) {
	    var find = word + ".*?[.!?]”?((?=\\s[A-z])|$)" // Looks for word then quotes then end of sentence/paragraph
	    var regex = new RegExp(find,"g");
	    v = v.replace(regex, function replacement(found) {
	        // console.log('Result is' + found);
	        return found + " despite all evidence to the contrary.";
	    });
	});
	
	// Post-replacement cleanup
    v = v.replace(/\. despite all evidence to the contrary\./g,", despite all evidence to the contrary.");
    v = v.replace(/\.\n  despite all evidence to the contrary\./g,", despite all evidence to the contrary.");
    v = v.replace(/\.\"  despite all evidence to the contrary\./g,",\" despite all evidence to the contrary.");
    v = v.replace(/\.”  despite all evidence to the contrary\./g,",” despite all evidence to the contrary.");
    v = v.replace(/despite all evidence to the contrary. despite all evidence to the contrary./g,"despite all evidence to the contrary.");
	
	// Save back to node
	textNode.nodeValue = v;
}
