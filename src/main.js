'use strict';

var WalletForm, Wallets, Dids, ReceiveDocument, SendDocument;

Wallets = [
  {icon: 'id', documentName: 'Drivers License', pdf: ''},
  {icon: 'passport', documentName: 'Passport', pdf: ''},
  {icon: 'car', documentName: 'Car Title', pdf: ''},
  {icon: 'degree', documentName: 'Bachelors Degree Diploma', pdf: ''},
  {icon: 'medical', documentName: 'Medical Records', pdf: ''}
]

Dids = [
  {icon: 'id', agencyDid: 'DID:ETH:HG284thvds890', agencyName: 'Louisiana DMV'},
  {icon: 'id', agencyDid: 'DID:ETH:scln8ty89wpp9', agencyName: 'United States Government'},
  {icon: 'id', agencyDid: 'DID:ETH:HG284thvds890', agencyName: 'Louisiana DMV'},
  {icon: 'id', agencyDid: 'DID:ETH:FOIFhi19038h8', agencyName: 'Louisiana State University'},
  {icon: 'id', agencyDid: 'DID:ETH:awdoi8378HJKM', agencyName: 'Doctor Arbour Office'},
]


ReceiveDocument = [
  {agencyDid: 'DID:ETH:963183B38457G', agencyName: 'Texas A&M University', icon: 'degree', documentName: 'Masters Degree', pdf: '' },
  {agencyDid: 'DID:ETH:01938N9238J8h', agencyName: 'Doctors Office', icon: 'medical', documentName: 'Medical Record', pdf: '' },
  {agencyDid: 'DID:ETH:1938dh28ehb8c', agencyName: 'Tax Agency', icon: 'gov', documentName: '2022 Income Tax', pdf: '' },
  {agencyDid: 'DID:ETH:19sdn83477oNN', agencyName: 'Building Officials', icon: 'house', documentName: 'Estate Sale', pdf: '' },
  {agencyDid: 'DID:ETH:1928dnc88hnio', agencyName: 'Land Grant', icon: 'land', documentName: 'Land Deed', pdf: '' },
]

WalletForm = {
  walletName: 'NICOLE BLAZIER',
  walletDid: 'DID:ETH::44444444444444',
  walletEmail: 'nicole.blazier@gmail.com',
 };

 SendDocument = {};


// all the application buttons
const walletBtn = document.getElementById('wallet-btn');
const didsBtn = document.getElementById('dids-btn');
const sendBtn = document.getElementById('send-btn');
const saveBtn = document.getElementById('save-btn');
const receiveBtn = document.getElementById('receive-btn');
const receiveBtnDid = document.getElementById('receive-btn-did');
const sendBtnDid = document.getElementById('send-btn-did');

const ftWalletBtn = document.getElementById('ft-wallet-btn');
const ftSettingBtn = document.getElementById('ft-setting-btn');

const wallet = document.getElementById('wallet');
const dids = document.getElementById('dids');
const send = document.getElementById('send');
const receive = document.getElementById('receive');
const account = document.getElementById('account-details');

const showPdfSend = document.getElementById('pdf-send');
const showPdfReceive = document.getElementById('pdf-receive');
const selectDocument = document.getElementById('select-document');
const selectDid = document.getElementById('select-did');

//receive
const agencyName = document.getElementById('agency-name');
const agencyDid = document.getElementById('agency-did');
const documentName = document.getElementById('document-name');

// settings page input
const editIcon = document.getElementById('edit-icon');
const walletNameInput = document.getElementById('input-wallet-name');
const walletDidInput = document.getElementById('input-wallet-did');
const walletEmailInput = document.getElementById('input-wallet-email');

// e-wallet values
const walletName = document.getElementById('wallet-fullName');
const walletDid = document.getElementById('wallet-did');

//did table
const didsAgencyDid = document.getElementById('dids-agency-did');
const didsAgencyName = document.getElementById('dids-agency-name');



walletNameInput.disabled = true;
walletDidInput.disabled = true;
walletEmailInput.disabled = true;

walletName.innerHTML = WalletForm.walletName
walletDid.innerHTML = WalletForm.walletDid


walletBtn.addEventListener('click', () => {
  wallet.style.display = 'inline';
  dids.style.display = 'none';
  send.style.display = 'none';
  receive.style.display = 'none';
  account.style.display = 'none';
})

didsBtn.addEventListener('click', () => {
  wallet.style.display = 'none';
  dids.style.display = 'inline';
  send.style.display = 'none';
  receive.style.display = 'none';
  account.style.display = 'none';
})

sendBtn.addEventListener('click', () => {
  wallet.style.display = 'none';
  dids.style.display = 'none';
  send.style.display = 'inline';
  receive.style.display = 'none';
  account.style.display = 'none';
})

receiveBtn.addEventListener('click', () => {
  wallet.style.display = 'none';
  dids.style.display = 'none';
  send.style.display = 'none';
  receive.style.display = 'inline';
  account.style.display = 'none';
})

receiveBtnDid.addEventListener('click', () => {
  saveReceivedDoc()
})

ftWalletBtn.addEventListener('click', () => {
  wallet.style.display = 'inline';
  dids.style.display = 'none';
  send.style.display = 'none';
  receive.style.display = 'none';
  account.style.display = 'none';
})

ftSettingBtn.addEventListener('click', () => {
  wallet.style.display = 'none';
  dids.style.display = 'none';
  send.style.display = 'none';
  receive.style.display = 'none';
  account.style.display = 'inline';
})

selectDocument.addEventListener('change', () => {
  showPdfSend.style.display = 'inline';
})

editIcon.addEventListener('click', () => {
  walletNameInput.disabled = false;
  walletNameInput.style.border = '1px solid yellow';
  walletDidInput.disabled = false;
  walletDidInput.style.border = '1px solid yellow';
  walletEmailInput.disabled = false;
  walletEmailInput.style.border = '1px solid yellow';
})

saveBtn.addEventListener('click', () => {
  walletNameInput.disabled = true;
  walletNameInput.style.border = 'none';
  walletDidInput.disabled = true;
  walletDidInput.style.border = 'none';
  walletEmailInput.disabled = true;
  walletEmailInput.style.border = 'none';

  doubleAlpha();
  alphaNumeric();
})

sendBtnDid.addEventListener('click', () => {
  sendDocumentValue();
})



  function doubleAlpha() {
    var inputAlpha = /^[a-zA-Z]+ [a-zA-Z]+$/, valid = false;

      if (!inputAlpha.test(walletNameInput.value)) {
        walletNameInput.style.backgroundColor = "#ffdddd";
        walletNameInput.style.borderColor = "#ffdddd";
      } else {
        walletNameInput.style.backgroundColor = "#fff"
        walletNameInput.style.borderColor = "none";
        valid = true;
        WalletForm.walletName = walletNameInput.value;
        walletName.innerHTML = WalletForm.walletName

      }

      return valid;
  }

  function alphaNumeric() {
  var valid = false, i, select = [];
  var addressText = /^[0-9a-zA-Z]+$/
  select.push(walletDidInput, walletEmailInput)

    for (i = 0; i < select.length; i++) {
      if (addressText.test(select.value)) {
        select[i].style.backgroundColor = "#fff";
        select[i].style.borderColor = "none";
        valid = true

      } else {
        select[i].style.backgroundColor = "#ffdddd";
        select[i].style.borderColor = "#ffdddd";
      }
    }

    WalletForm.walletDid = walletDidInput.value;
    WalletForm.walletEmail = walletEmailInput.value;
    walletDid.innerHTML = WalletForm.walletDid
    return valid;
  }

  function saveReceivedDoc() {
      const lastItem = ReceiveDocument.slice(-1)
      console.log(lastItem)

      const objDid = {
        icon: 'id',
        agencyDid: lastItem[0].agencyDid,
        agencyName: lastItem[0].agencyName
      }

      const objWallet = {
        icon: lastItem[0].icon,
        documentName: lastItem[0].documentName,
        pdf: lastItem[0].pdf
      }

      Wallets.push(objWallet)
      Dids.push(objDid)
      console.log(Wallets)
      console.log(Dids)
      ReceiveDocument.pop()
    var i;

    for (i = 0; i < ReceiveDocument.length; i++) {
      agencyDid.value = ReceiveDocument[i].agencyDid;
      agencyName.value = ReceiveDocument[i].agencyName;
      documentName.value = ReceiveDocument[i].documentName;
      showPdfReceive.value = ReceiveDocument[i].pdf;
    }
    getWallet();
    getDid();
  }

  let documentItemUl = document.querySelector('.wallet-item-document');

  function getWallet() {
    var i;
    let didItems = "";
    let icon;
    let walletItem = '<div class="wallet-item">';

    for (i = 0; i < Wallets.length; i++) {
      console.log(Wallets[i].icon)
      if (Wallets[i].icon == 'id') {
        icon = '<i class="fa-solid fa-id-card icon"></i>';
      } else if (Wallets[i].icon == 'passport') {
        icon = '<i class="fa-solid fa-passport icon"></i>';
      } else if (Wallets[i].icon == 'car') {
        icon = '<i class="fa-solid fa-car icon"></i>';
      } else if (Wallets[i].icon == 'degree') {
        icon = '<i class="fa-solid fa-graduation-cap icon"></i>';
      } else if (Wallets[i].icon == 'medical') {
        icon = '<i class="fa-solid fa-file-medical icon"></i>';
      } else if (Wallets[i].icon == 'gov') {
        icon = '<i class="fa-duotone fa-landmark"></i>';
      } else if (Wallets[i].icon == 'house') {
        icon = '<i class="fa-regular fa-house"></i>';
      } else if (Wallets[i].icon == 'land') {
        icon = '<i class="fa-solid fa-tree"></i>';
      }

      didItems += walletItem
      didItems += "<div>"
      didItems += icon
      didItems += "</div>"
      didItems += "<div>"
      didItems += "<div>" + Wallets[i].documentName + "</div>";
      didItems += "</div>"
      didItems += "</div>"
    }
    console.log(didItems)
    documentItemUl.innerHTML = didItems;
  }

  getWallet();

  let didItemUl = document.querySelector('.wallet-item-did');

  function getDid() {
    var i;
    let didItems = "";
    let icon = '<i class="fa-solid fa-id-card icon"></i>';
    let walletItem = '<div class="wallet-item">';

    for (i = 0; i < Dids.length; i++) {
      didItems += walletItem
      didItems += "<div>"
      didItems += icon
      didItems += "</div>"
      didItems += "<div>"
      didItems += "<div>" + Dids[i].agencyDid + "</div>";
      didItems += "<div>" + Dids[i].agencyName + "</div>";
      didItems += "</div>"
      didItems += "</div>"
    }
    console.log(didItems)
    didItemUl.innerHTML = didItems;
    sendDocument();
  }

  getDid();

  function getReceivedDoc() {
    var i;
    for (i = 0; i < ReceiveDocument.length; i++) {
      agencyDid.value = ReceiveDocument[i].agencyDid;
      agencyName.value = ReceiveDocument[i].agencyName;
      documentName.value = ReceiveDocument[i].documentName;
      showPdfReceive.value = ReceiveDocument[i].pdf;
    }
    sendDocument();
  }

  getReceivedDoc();


  function sendDocument() {
    var i, j;
    let didItems = "<option value='0'>select</div>";
    let documentItems = "<option value='0'>select</div>";

    for (i = 0; i < Dids.length; i++) {
      didItems += "<option value=" + Dids[i].agencyDid + ">" + Dids[i].agencyDid + "</div>";
    }
    selectDid.innerHTML = didItems;

    for (j = 0; j < Wallets.length; j++) {
      documentItems += "<option value=" + Wallets[j].documentName + ">" + Wallets[j].documentName + "</div>";
    }
    selectDocument.innerHTML = documentItems;
  }

  sendDocument();

  function sendDocumentValue() {
    selectDid.addEventListener('change', (event) => {
      console.log(event.target.value)
      const did = event.target.value;
      SendDocument.did = did;
    })

    selectDocument.addEventListener('change', (event) => {
      console.log(event.target.value)
      const doc = event.target.value;
      SendDocument.document = doc;
    })

    console.log('Send', SendDocument)

  }

  sendDocumentValue();
