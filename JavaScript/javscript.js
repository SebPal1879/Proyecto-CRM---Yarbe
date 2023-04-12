var prodTName = document.getElementById('prodTName')
var prodFName = document.getElementById('prodFName')
var prodID = document.getElementById('prodID')
var prodBN = document.getElementById('prodBN')
var prodPcr = document.getElementById('prodPcr')
var prodSlrs = document.getElementById('prodSlrs')
var ctries = document.getElementById('btn-list')

var minAge = document.getElementById('minAge')
var maxAge = document.getElementById('maxAge')
var tgMkt = document.getElementById('tgMkt')
var admRt = document.getElementById('admRt')
var prodTp = document.getElementById('prodTp')
var lifeTime = document.getElementById('lifeTime')
var qty = document.getElementById('qty')
var amt = document.getElementById('amt')

var csID = document.getElementById('csID')
var csName = document.getElementById('csName')

var csName = document.getElementById('csName')
var csName = document.getElementById('csName')
var csName = document.getElementById('csName')



var id = document.getElementById('forma')
var miModal = new bootstrap.Modal('#mi-modal');
var ageModal = new bootstrap.Modal('#age-modal');
var ageModal2 = new bootstrap.Modal('#age-modal2');


forma.addEventListener('submit', (e) => {
    var error = false;
    // var messages = []
    console.log(error);
    if (ctries.value === '' || ctries.value == null) {
        // messages.push('Product name is required')
        miModal.show();
        console.log('Vacio')
        e.preventDefault()
        error = true;
    }
    if ((minAge.value < 0 || maxAge.value < 0) && error == false) {
        ageModal2.show();
        e.preventDefault()
        console.log('Age less than 0')
        console.log(minAge.value)
        console.log(maxAge.value)
        error = true;
    }
    if ((minAge.value > maxAge.value) && (error == false)) {
        console.log(minAge.value)
        console.log(maxAge.value)
        ageModal.show();
        e.preventDefault()
        console.log('min age error')
        error = true;
    }
    console.log(error);
    console.log('end')
    // miModal.show();

})

const showModal = () => {
    if (modal !== null) {
        modal.remove();
    }
    modal.document.createElement('div');
    modal.innerHTML = `
    <div class="modal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
        </div>
        </div>
    </div>
    </div>
    `;

    document.body.append(modal);
    var modal = new bootstrap.modal(modal.querySelector('.modal'));
    modal.show();
}


const myModal = new bootstrap.Modal(document.getElementById('myModal'), options)

// const myModalAlternative = new bootstrap.Modal('#showModal', options)