function allStorage() {
	var values = [],
		keys = Object.keys(localStorage),
		i = keys.length;
	while (i--) {
		values[keys[i]] = JSON.parse(localStorage.getItem(keys[i]));
	}
	return values;
}
