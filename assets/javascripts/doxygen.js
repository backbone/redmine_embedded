/**
 * Valadoc
 */
function get_path (path) {
	var pos = path.lastIndexOf ('/');
	if (pos < 0) {
		return '';
	}

	return path.substring (pos, -1) + '/';
}

function toggle_box (self, id) {
	var element = document.getElementById (id);
	if (element == null) {
		return ;
	}

	if (element.style.display == 'block') {
		element.style.display = 'none';
		self.src = get_path (self.src) + 'coll_open.png';
	} else {
		element.style.display = 'block';
		self.src = get_path (self.src) + 'coll_close.png';
	}
}

