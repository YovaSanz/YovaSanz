const formulario = document.querySelector('#form');
const btn_form = document.querySelector('#btn_form');
const modal = document.querySelector('#modal');
const closeButton = document.querySelector('#btn_close-modal');

const serviceID = 'default_service';
const templateID = 'template_2tm20ps';

function openModal() {
	modal.open = true;
}

function closeModal() {
	modal.open = false;
}

function sendEmail(e) {
	e?.preventDefault();
	btn_form.value = 'Enviando...';

	const params = {
		name: document.getElementById('from_name').value,
		email: document.getElementById('email_id').value,
		subject: document.getElementById('affair').value,
		message: document.getElementById('message').value,
	};

	if (params.name && params.email && params.subject && params.message) {

		emailjs.sendForm(serviceID, templateID, this)
		.then(() => {
			btn_form.value = 'Enviar';
			openModal();
		}, (err) => {
			btn_form.value = 'Enviar';
			console.log('Error Send Email :>> ', JSON.stringify(err));
		});
	}
}

closeButton.addEventListener('click', closeModal);
formulario.addEventListener('submit', sendEmail);

export default sendEmail;
