

function toogleButtons() {
	document.getElementById('fileName').classList.toggle('hide');
	document.getElementById('btnCancel').classList.toggle('hide');
	document.getElementById('btnUpload').classList.toggle('hide');
}

function cancel() {
	toogleButtons();
	document.getElementById('formUpload').reset();
}

function on_change() {
	toogleButtons();
}

function on_submit(ev) {
	ev.preventDefault();	
}
