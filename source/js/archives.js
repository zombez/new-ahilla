(function() {
	let dropown = document.getElementById( 'archives' );
	function onSelectChange() {
		if ( dropown.options[
			dropown.selectedIndex ].value !== '' ) {
			document.location.href =
			this.options[ this.selectedIndex ].value;
		}
	}
	dropown.onchange = onSelectChange;
})();
