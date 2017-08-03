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
	
	v = v.replace(/says.*?["“‘]?.*?(\.\ )[?!;]?["”’]?/g, function myFunction(x){return x + " despite all evidence to the contrary. ";});
	v = v.replace(/said.*?["“‘]?.*?(\.\ )[?!;]?["”’]?/g, function myFunction(x){return x + " despite all evidence to the contrary. ";});
	v = v.replace(/saying.*?["“‘]?.*?(\.\ )[?!;]?["”’]?/g, function myFunction(x){return x + " despite all evidence to the contrary. ";});
	v = v.replace(/claims.*?["“‘]?.*?(\.\ )[?!;]?["”’]?/g, function myFunction(x){return x + " despite all evidence to the contrary. ";});
	v = v.replace(/claiming.*?["“‘]?.*?(\.\ )[?!;]?["”’]?/g, function myFunction(x){return x + " despite all evidence to the contrary. ";});
	v = v.replace(/claimed.*?["“‘]?.*?(\.\ )[?!;]?["”’]?/g, function myFunction(x){return x + " despite all evidence to the contrary. ";});
	v = v.replace(/tells.*?["“‘]?.*?(\.\ )[?!;]?["”’]?/g, function myFunction(x){return x + " despite all evidence to the contrary. ";});
	v = v.replace(/telling.*?["“‘]?.*?(\.\ )[?!;]?["”’]?/g, function myFunction(x){return x + " despite all evidence to the contrary. ";});
	v = v.replace(/told.*?["“‘]?.*?(\.\ )[?!;]?["”’]?/g, function myFunction(x){return x + " despite all evidence to the contrary. ";});
	v = v.replace(/responds.*?["“‘]?.*?(\.\ )[?!;]?["”’]?/g, function myFunction(x){return x + " despite all evidence to the contrary. ";});
	v = v.replace(/responding.*?["“‘]?.*?(\.\ )[?!;]?["”’]?/g, function myFunction(x){return x + " despite all evidence to the contrary. ";});
	v = v.replace(/responded.*?["“‘]?.*?(\.\ )[?!;]?["”’]?/g, function myFunction(x){return x + " despite all evidence to the contrary. ";});
	
    v = v.replace(/\.  despite all evidence to the contrary\./g,", despite all evidence to the contrary.");
    v = v.replace(/\.\"  despite all evidence to the contrary\./g,",\" despite all evidence to the contrary.");
    v = v.replace(/\.”  despite all evidence to the contrary\./g,",” despite all evidence to the contrary.");
    v = v.replace(/despite all evidence to the contrary. despite all evidence to the contrary./g,"despite all evidence to the contrary.");
	
	textNode.nodeValue = v;
}
