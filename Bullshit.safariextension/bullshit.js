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
	var list = [ "says", "said", "saying", "claims", "claiming", "claimed", "tells", "telling", "told", "responds", "responding", "responded", "rejects", "rejecting", "rejected" ];
	
	list.forEach(function(word) {
	    var find = word + ".*?[\"“‘]?.*?\\."
	    var regex = new RegExp(find,"g");
	    v = v.replace(regex, function replacement(found) {
	        console.log('Result is' + found);
	        return found + " despite all evidence to the contrary.";
	    });
	});
	
    v = v.replace(/\. despite all evidence to the contrary\./g,", despite all evidence to the contrary.");
    v = v.replace(/\.\n  despite all evidence to the contrary\./g,", despite all evidence to the contrary.");
    v = v.replace(/\.\"  despite all evidence to the contrary\./g,",\" despite all evidence to the contrary.");
    v = v.replace(/\.”  despite all evidence to the contrary\./g,",” despite all evidence to the contrary.");
    v = v.replace(/despite all evidence to the contrary. despite all evidence to the contrary./g,"despite all evidence to the contrary.");
	
	textNode.nodeValue = v;
}
