const saveButton = document.querySelector('.Save');
const registrationForm = document.querySelector('.Registration-form');

saveButton.addEventListener('click', () => {
  const registration = {
    company: {
      name: document.querySelector('#Company-Name').value,
      address: document.querySelector('#Company-Address').value,
      phone: document.querySelector('#Company-Phone').value,
      email: document.querySelector('#Company-Email').value,
      nit: document.querySelector('#Company-NIT').value,
      postal: document.querySelector('#Company-Postal').value,
      sector: document.querySelector('#Company-Sector').value
    },
    contact: {
      firstName: document.querySelector('#First-Name').value,
      lastName: document.querySelector('#Last-Name').value,
      email: document.querySelector('#Primary-Email').value,
      phone: document.querySelector('#Primary-Phone').value
    },
    preferences: {
      email: document.querySelector('#C-Email').checked,
      phone: document.querySelector('#C-Phone').checked,
      textMessage: document.querySelector('#C-Text-Message').checked,
      other: {
        checked: document.querySelector('#C-Other').checked,
        input: document.querySelector('#C-Other-Input').value
      }
    },
    howDidYouHear: {
      email: document.querySelector('#R-Email').checked,
      phone: document.querySelector('#R-Phone').checked,
      socialMedia: {
        checked: document.querySelector('#R-Social-Media').checked,
        input: document.querySelector('#R-Social-Media-Input').value
      },
      other: {
        checked: document.querySelector('#R-Other').checked,
        input: document.querySelector('#R-Other-Input').value
      }
    }
  };
  
  console.log(registration); // Aquí puedes hacer lo que quieras con el objeto JSON
});
