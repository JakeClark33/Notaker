const $noteForm = document.querySelector('#noteField');
const $displayArea = document.querySelector('#note-textarea');

const printResults = resultArr => {
  console.log(resultArr);

  const notesHTML = resultArr.map(({ id, name}) => {
    return `
  <div class="col-12 col-md-5 mb-3">
    <div data-id=${id}>
      <h4>${name}</h4>
    </div>
  </div>
    `;
  });

  $displayArea.innerHTML = notesHTML.join('');
};

const getNotes = (noteInputData = {}) => {
  let queryUrl = '/api/notes?';

  Object.entries(noteInputData).forEach(([key, value]) => {
    queryUrl += `${key}=${value}&`;
  });

  console.log(queryUrl);

  fetch(queryUrl)
    .then(response => {
      if (!response.ok) {
        return alert('Error: ' + response.statusText);
      }
      return response.json();
    })
    .then(noteData => {
      console.log(noteData);
      printResults(noteData);
    });
};





$noteForm.addEventListener('submit', handleGetnotesSubmit);

getNotes();