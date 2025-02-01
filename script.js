const notes = JSON.parse(localStorage.getItem('notes-app') || '[]');
const search = document.querySelector('.search-input');
const form = document.getElementById('form');
const saveBtn = document.getElementById('save-btn');
const titleField = document.querySelector('.title-field');
const noteField = document.querySelector('.note-field');
const cutomerName = document.querySelector('#customerName')
const customerPhone = document.querySelector('#customerPhone')
const identity = document.querySelector('#identity')
const expertName = document.querySelector('#expertName')
const expertPhone = document.querySelector('#expertPhone')
const expertMail = document.querySelector('#expertMail')
const policeNo = document.querySelector('#policeNo')
const folderNo = document.querySelector('#folderNo')
const marka = document.querySelector('#marka')
const model = document.querySelector('#model')
const motor = document.querySelector('#motor')
const sasi = document.querySelector('#sasi')
const insuranceCompany = document.querySelector('#insuranceCompany')
const insuranceCompanyPhone = document.querySelector('#insuranceCompanyPhone')
const ibanNo = document.querySelector('#ibanNo')
const bankName = document.querySelector('#bankName')
const branchName = document.querySelector('#branchName')
const time = document.querySelector('#time')
const parcaBilgi1 = document.querySelector('#parcaBilgi1')
const parcaBilgi2 = document.querySelector('#parcaBilgi2')
const parcaBilgi3 = document.querySelector('#parcaBilgi3')
const parcaBilgi4 = document.querySelector('#parcaBilgi4')
const parcaBilgi5 = document.querySelector('#parcaBilgi5')
const parcaBilgi6 = document.querySelector('#parcaBilgi6')
const parcaBilgi7 = document.querySelector('#parcaBilgi7')
const parcaBilgi8 = document.querySelector('#parcaBilgi8')
const parcaBilgi9 = document.querySelector('#parcaBilgi9')
const parcaBilgi10 = document.querySelector('#parcaBilgi10')
const parcaNo1 = document.querySelector('#parcaNo1')
const parcaNo2 = document.querySelector('#parcaNo2')
const parcaNo3 = document.querySelector('#parcaNo3')
const parcaNo4 = document.querySelector('#parcaNo4')
const parcaNo5 = document.querySelector('#parcaNo5')
const parcaNo6 = document.querySelector('#parcaNo6')
const parcaNo7 = document.querySelector('#parcaNo7')
const parcaNo8 = document.querySelector('#parcaNo8')
const parcaNo9 = document.querySelector('#parcaNo9')
const parcaNo10 = document.querySelector('#parcaNo10')
const parcaAdet1 = document.querySelector('#parcaAdet1')
const parcaAdet2 = document.querySelector('#parcaAdet2')
const parcaAdet3 = document.querySelector('#parcaAdet3')
const parcaAdet4 = document.querySelector('#parcaAdet4')
const parcaAdet5 = document.querySelector('#parcaAdet5')
const parcaAdet6 = document.querySelector('#parcaAdet6')
const parcaAdet7 = document.querySelector('#parcaAdet7')
const parcaAdet8 = document.querySelector('#parcaAdet8')
const parcaAdet9 = document.querySelector('#parcaAdet9')
const parcaAdet10 = document.querySelector('#parcaAdet10')
const parcaFiyat1 = document.querySelector('#parcaFiyat1')
const parcaFiyat2 = document.querySelector('#parcaFiyat2')
const parcaFiyat3 = document.querySelector('#parcaFiyat3')
const parcaFiyat4 = document.querySelector('#parcaFiyat4')
const parcaFiyat5 = document.querySelector('#parcaFiyat5')
const parcaFiyat6 = document.querySelector('#parcaFiyat6')
const parcaFiyat7 = document.querySelector('#parcaFiyat7')
const parcaFiyat8 = document.querySelector('#parcaFiyat8')
const parcaFiyat9 = document.querySelector('#parcaFiyat9')
const parcaFiyat10 = document.querySelector('#parcaFiyat10')
const report1 = document.querySelector('#report1')
const info1 = document.querySelector('#info1')
const report2 = document.querySelector('#report2')
const info2 = document.querySelector('#info2')
const report3 = document.querySelector('#report3')
const info3 = document.querySelector('#info3')
const report4 = document.querySelector('#report4')
const info4 = document.querySelector('#info4')
const report5 = document.querySelector('#report5')
const info5 = document.querySelector('#info5')
const report6 = document.querySelector('#report6')
const info6 = document.querySelector('#info6')
const report7 = document.querySelector('#report7')
const info7 = document.querySelector('#info7')
const report8 = document.querySelector('#report8')
const info8 = document.querySelector('#info8')
const report9 = document.querySelector('#report9')
const info9 = document.querySelector('#info9')
const report10 = document.querySelector('#report10')
const info10 = document.querySelector('#info10')
const report11 = document.querySelector('#report11')
const info11 = document.querySelector('#info11')
const report12 = document.querySelector('#report12')
const info12 = document.querySelector('#info12')

const openModal = () => {
    const modal = document.querySelector('.modal');
    const main = document.querySelector('main');
    modal.classList.add('expanded');
    main.classList.add('overlay');
    document.getElementById("noteId").innerText = ""
}

const closeModal = () => {
    const modal = document.querySelector('.modal');
    const main = document.querySelector('main');
    modal.classList.remove('expanded');
    main.classList.remove('overlay');
    if (modal.classList.contains('edit')) {
        modal.classList.remove('edit');
    }
    form.reset();
}

const headerOnScroll = () => {
    const header = document.querySelector('header');
    let scrollPrev = window.pageYOffset;
    window.onscroll = () => {
        let scrollCur = window.pageYOffset;
        scrollPrev > scrollCur ? header.style.top = '0' : header.style.top = '-64px';
        scrollPrev = scrollCur;
    }
}

const displayNotes = () => {
    let li = '';
    const cards = document.querySelector('.notes');
    $.ajax({
        type: "GET",
        //firebase link here
        url: "",
        success: function (data) {
            Object.values(data).forEach((note, i) => {
                li += `
                    <li class="note" data-note-id="${note.id}" onclick="editNote(${i},'${Object.keys(data)[i]}', '${note.title}','${note.customer}','${note.customerP}','${note.identity1}','${note.expertName1}','${note.expertP}','${note.expertMail1}','${note.policeNo1}','${note.folderNo1}','${note.time1}','${note.marka1}','${note.model1}','${note.motor1}','${note.sasi1}','${note.insuranceCompany1}','${note.insuranceCompanyPhone1}','${note.ibanNo1}','${note.bankName1}','${note.branchName1}','${note.parcaBilgi1x1}','${note.parcaBilgi2x1}','${note.parcaBilgi3x1}','${note.parcaBilgi4x1}','${note.parcaBilgi5x1}','${note.parcaBilgi6x1}','${note.parcaBilgi7x1}','${note.parcaBilgi8x1}','${note.parcaBilgi9x1}','${note.parcaBilgi10x1}','${note.parcaNo1x1}','${note.parcaNo2x1}','${note.parcaNo3x1}','${note.parcaNo4x1}','${note.parcaNo5x1}','${note.parcaNo6x1}','${note.parcaNo7x1}','${note.parcaNo8x1}','${note.parcaNo9x1}','${note.parcaNo10x1}','${note.parcaAdet1x1}','${note.parcaAdet2x1}','${note.parcaAdet3x1}','${note.parcaAdet4x1}','${note.parcaAdet5x1}','${note.parcaAdet6x1}','${note.parcaAdet7x1}','${note.parcaAdet8x1}','${note.parcaAdet9x1}','${note.parcaAdet10x1}','${note.parcaFiyat1x1}','${note.parcaFiyat2x1}','${note.parcaFiyat3x1}','${note.parcaFiyat4x1}','${note.parcaFiyat5x1}','${note.parcaFiyat6x1}','${note.parcaFiyat7x1}','${note.parcaFiyat8x1}','${note.parcaFiyat9x1}','${note.parcaFiyat10x1}','${note.report1x1}','${note.info1x1}','${note.report2x1}','${note.info2x1}','${note.report3x1}','${note.info3x1}','${note.report4x1}','${note.info4x1}','${note.report5x1}','${note.info5x1}','${note.report6x1}','${note.info6x1}','${note.report7x1}','${note.info7x1}','${note.report8x1}','${note.info8x1}','${note.report9x1}','${note.info9x1}','${note.report10x1}','${note.info10x1}','${note.report11x1}','${note.info11x1}','${note.report12x1}','${note.info12x1}')">
                        <h3>${note.title}</h3>
                    </li>
                `;
            });
            cards.innerHTML = li;
        },
        error: function () {
            alert("Bir hata oluştu!")
        }
    });
}

const deleteNote = (noteId) => {
    $.ajax({
        type: "DELETE",
        url: ``,
        success: function (msg) {
            alert("Silindi!");
            location.reload();
        },
        error: function () {
            alert("Bir hata oluştu!")
        }
    });
}

// Burda atanan valueları SIRASIYLA yerleştir
// Place assigned data in order
const editNote = (index, noteId, title, customer, customerP, identity1, expertName1, expertP, expertMail1, policeNo1, folderNo1 , time1,  marka1, model1, motor1, sasi1, insuranceCompany1, insuranceCompanyPhone1, ibanNo1, bankName1, branchName1, parcaBilgi1x1, parcaBilgi2x1, parcaBilgi3x1, parcaBilgi4x1, parcaBilgi5x1, parcaBilgi6x1, parcaBilgi7x1, parcaBilgi8x1, parcaBilgi9x1, parcaBilgi10x1, parcaNo1x1, parcaNo2x1, parcaNo3x1, parcaNo4x1, parcaNo5x1, parcaNo6x1, parcaNo7x1, parcaNo8x1, parcaNo9x1, parcaNo10x1, parcaAdet1x1, parcaAdet2x1, parcaAdet3x1, parcaAdet4x1, parcaAdet5x1, parcaAdet6x1, parcaAdet7x1, parcaAdet8x1, parcaAdet9x1, parcaAdet10x1, parcaFiyat1x1, parcaFiyat2x1, parcaFiyat3x1, parcaFiyat4x1, parcaFiyat5x1, parcaFiyat6x1, parcaFiyat7x1, parcaFiyat8x1, parcaFiyat9x1, parcaFiyat10x1, report1x1 , info1x1 , report2x1 , info2x1 , report3x1 , info3x1 , report4x1 , info4x1 , report5x1 , info5x1 , report6x1 , info6x1 , report7x1 , info7x1 , report8x1 , info8x1 , report9x1 , info9x1 , report10x1 , info10x1 ,report11x1 , info11x1 ,report12x1 , info12x1 , ) => {
    isEdit = true;
    editId = noteId;
    const modal = document.querySelector('.modal');

    titleField.value = title;
    customerName.value = customer;
    customerPhone.value = customerP;
    identity.value = identity1;
    expertName.value = expertName1;
    expertPhone.value = expertP;
    expertMail.value = expertMail1;
    policeNo.value = policeNo1;
    folderNo.value = folderNo1;
    time.value = time1;
    marka.value = marka1;
    model.value = model1;
    motor.value = motor1;
    sasi.value = sasi1;
    insuranceCompany.value = insuranceCompany1;
    insuranceCompanyPhone.value = insuranceCompanyPhone1;
    ibanNo.value = ibanNo1;
    bankName.value = bankName1;
    branchName.value = branchName1;
    parcaBilgi1.value = parcaBilgi1x1;
    parcaBilgi2.value = parcaBilgi2x1;
    parcaBilgi3.value = parcaBilgi3x1;
    parcaBilgi4.value = parcaBilgi4x1;
    parcaBilgi5.value = parcaBilgi5x1;
    parcaBilgi6.value = parcaBilgi6x1;
    parcaBilgi7.value = parcaBilgi7x1;
    parcaBilgi8.value = parcaBilgi8x1;
    parcaBilgi9.value = parcaBilgi9x1;
    parcaBilgi10.value = parcaBilgi10x1;
    parcaNo1.value = parcaNo1x1;
    parcaNo2.value = parcaNo2x1;
    parcaNo3.value = parcaNo3x1;
    parcaNo4.value = parcaNo4x1;
    parcaNo5.value = parcaNo5x1;
    parcaNo6.value = parcaNo6x1;
    parcaNo7.value = parcaNo7x1;
    parcaNo8.value = parcaNo8x1;
    parcaNo9.value = parcaNo9x1;
    parcaNo10.value = parcaNo10x1;
    parcaAdet1.value = parcaAdet1x1;
    parcaAdet2.value = parcaAdet2x1;
    parcaAdet3.value = parcaAdet3x1;
    parcaAdet4.value = parcaAdet4x1;
    parcaAdet5.value = parcaAdet5x1;
    parcaAdet6.value = parcaAdet6x1;
    parcaAdet7.value = parcaAdet7x1;
    parcaAdet8.value = parcaAdet8x1;
    parcaAdet9.value = parcaAdet9x1;
    parcaAdet10.value = parcaAdet10x1;
    parcaFiyat1.value = parcaFiyat1x1;
    parcaFiyat2.value = parcaFiyat2x1;
    parcaFiyat3.value = parcaFiyat3x1;
    parcaFiyat4.value = parcaFiyat4x1;
    parcaFiyat5.value = parcaFiyat5x1;
    parcaFiyat6.value = parcaFiyat6x1;
    parcaFiyat7.value = parcaFiyat7x1;
    parcaFiyat8.value = parcaFiyat8x1;
    parcaFiyat9.value = parcaFiyat9x1;
    parcaFiyat10.value = parcaFiyat10x1;
    report1.value = report1x1;
    info1.value = info1x1;
    report2.value = report2x1;
    info2.value = info2x1;
    report3.value = report3x1;
    info3.value = info3x1;
    report4.value = report4x1;
    info4.value = info4x1;
    report5.value = report5x1;
    info5.value = info5x1;
    report6.value = report6x1;
    info6.value = info6x1;
    report7.value = report7x1;
    info7.value = info7x1;
    report8.value = report8x1;
    info8.value = info8x1;
    report9.value = report9x1;
    info9.value = info9x1;
    report10.value = report10x1;
    info10.value = info10x1;
    report11.value = report10x1;
    info11.value = info11x1;
    report12.value = report12x1;
    info12.value = info12x1;

    modal.classList.add('edit');
    openModal();
    document.getElementById("delete-btn").setAttribute("onclick", `deleteNote('${noteId}')`)
    document.getElementById("noteId").innerText = noteId

   
}

saveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // Verdiğin isimleri kaydetmesi için value trim olarak düzenle
    let titleInput = titleField.value.trim();
    let customer = customerName.value.trim()
    let customerP = customerPhone.value.trim()
    let identity1 = identity.value.trim()
    let expertName1 = expertName.value.trim()
    let expertP = expertPhone.value.trim()
    let expertMail1 = expertMail.value.trim()
    let policeNo1 = policeNo.value.trim()
    let folderNo1 = folderNo.value.trim()
    let time1 = time.value.trim()
    let marka1 = marka.value.trim()
    let model1 = model.value.trim()
    let motor1 = motor.value.trim()
    let sasi1 = sasi.value.trim()
    let insuranceCompany1 = insuranceCompany.value.trim()
    let insuranceCompanyPhone1 = insuranceCompanyPhone.value.trim()
    let ibanNo1 = ibanNo.value.trim()
    let bankName1 = bankName.value.trim()
    let branchName1 = branchName.value.trim()
    let parcaBilgi1x1 = parcaBilgi1.value.trim()
    let parcaBilgi2x1 = parcaBilgi2.value.trim()
    let parcaBilgi3x1 = parcaBilgi3.value.trim()
    let parcaBilgi4x1 = parcaBilgi4.value.trim()
    let parcaBilgi5x1 = parcaBilgi5.value.trim()
    let parcaBilgi6x1 = parcaBilgi6.value.trim()
    let parcaBilgi7x1 = parcaBilgi7.value.trim()
    let parcaBilgi8x1 = parcaBilgi8.value.trim()
    let parcaBilgi9x1 = parcaBilgi9.value.trim()
    let parcaBilgi10x1 = parcaBilgi10.value.trim()
    let parcaNo1x1 = parcaNo1.value.trim()
    let parcaNo2x1 = parcaNo2.value.trim()
    let parcaNo3x1 = parcaNo3.value.trim()
    let parcaNo4x1 = parcaNo4.value.trim()
    let parcaNo5x1 = parcaNo5.value.trim()
    let parcaNo6x1 = parcaNo6.value.trim()
    let parcaNo7x1 = parcaNo7.value.trim()
    let parcaNo8x1 = parcaNo8.value.trim()
    let parcaNo9x1 = parcaNo9.value.trim()
    let parcaNo10x1 = parcaNo10.value.trim()
    let parcaAdet1x1 = parcaAdet1.value.trim()
    let parcaAdet2x1 = parcaAdet2.value.trim()
    let parcaAdet3x1 = parcaAdet3.value.trim()
    let parcaAdet4x1 = parcaAdet4.value.trim()
    let parcaAdet5x1 = parcaAdet5.value.trim()
    let parcaAdet6x1 = parcaAdet6.value.trim()
    let parcaAdet7x1 = parcaAdet7.value.trim()
    let parcaAdet8x1 = parcaAdet8.value.trim()
    let parcaAdet9x1 = parcaAdet9.value.trim()
    let parcaAdet10x1 = parcaAdet10.value.trim()
    let parcaFiyat1x1 = parcaFiyat1.value.trim()
    let parcaFiyat2x1 = parcaFiyat2.value.trim()
    let parcaFiyat3x1 = parcaFiyat3.value.trim()
    let parcaFiyat4x1 = parcaFiyat4.value.trim()
    let parcaFiyat5x1 = parcaFiyat5.value.trim()
    let parcaFiyat6x1 = parcaFiyat6.value.trim()
    let parcaFiyat7x1 = parcaFiyat7.value.trim()
    let parcaFiyat8x1 = parcaFiyat8.value.trim()
    let parcaFiyat9x1 = parcaFiyat9.value.trim()
    let parcaFiyat10x1 = parcaFiyat10.value.trim()
    let report1x1 = report1.value.trim() 
    let info1x1 = info1.value.trim()
    let report2x1 = report2.value.trim() 
    let info2x1 = info2.value.trim()
    let report3x1 = report3.value.trim() 
    let info3x1 = info3.value.trim()
    let report4x1 = report4.value.trim() 
    let info4x1 = info4.value.trim()
    let report5x1 = report5.value.trim() 
    let info5x1 = info5.value.trim()
    let report6x1 = report6.value.trim() 
    let info6x1 = info6.value.trim()
    let report7x1 = report7.value.trim() 
    let info7x1 = info7.value.trim()
    let report8x1 = report8.value.trim() 
    let info8x1 = info8.value.trim()
    let report9x1 = report9.value.trim() 
    let info9x1 = info9.value.trim()
    let report10x1 = report10.value.trim() 
    let info10x1 = info10.value.trim()
    let report11x1 = report11.value.trim() 
    let info11x1 = info11.value.trim()
    let report12x1 = report12.value.trim() 
    let info12x1 = info12.value.trim()

    if (titleInput || noteInput) {
        let note = {
            title: titleInput,customer,customerP,identity1,expertName1,expertP,expertMail1,policeNo1,folderNo1,time1,marka1,model1,motor1,sasi1,insuranceCompany1,insuranceCompanyPhone1,ibanNo1,bankName1,branchName1,parcaBilgi1x1,parcaBilgi2x1,parcaBilgi3x1,parcaBilgi4x1,parcaBilgi5x1,parcaBilgi6x1,parcaBilgi7x1,parcaBilgi8x1,parcaBilgi9x1,parcaBilgi10x1,parcaNo1x1,parcaNo2x1,parcaNo3x1,parcaNo4x1,parcaNo5x1,parcaNo6x1,parcaNo7x1,parcaNo8x1,parcaNo9x1,parcaNo10x1,parcaAdet1x1,parcaAdet2x1,parcaAdet3x1,parcaAdet4x1,parcaAdet5x1,parcaAdet6x1,parcaAdet7x1,parcaAdet8x1,parcaAdet9x1,parcaAdet10x1,parcaFiyat1x1,parcaFiyat2x1,parcaFiyat3x1,parcaFiyat4x1,parcaFiyat5x1,parcaFiyat6x1,parcaFiyat7x1,parcaFiyat8x1,parcaFiyat9x1,parcaFiyat10x1,report1x1,info1x1,report2x1,info2x1,report3x1,info3x1,report4x1,info4x1,report5x1,info5x1,report6x1,info6x1,report7x1,info7x1,report8x1,info8x1,report9x1,info9x1,report10x1,info10x1,report11x1,info11x1,report12x1,info12x1,
            id: Math.floor(Math.random() * 1000000)
        }
        /* if (!isEdit) {
             notes.push(note)
        }
        else {
             isEdit = false;
             notes[editId] = note;
        } */
        
        const noteId = document.getElementById("noteId").innerText
        if (noteId === "") {
            $.ajax({
                type: "POST",
                // firebase link here
                url: "",
                datatype: "json",
                data: JSON.stringify(note),
                success: function (msg) {
                    alert("Gönderdik!");
                    location.reload();
                },
                error: function () {
                    alert("Bir hata oluştu!")
                }
            });
        }
        else {
            console.log(noteId)
            $.ajax({
                type: "PATCH",
                // firebase link here
                url: ``,
                datatype: "json",
                data: JSON.stringify(note),
                success: function (msg) {
                    alert("Güncellendi!");
                    location.reload();
                },
                error: function () {
                    alert("Bir hata oluştu!")
                }
            });
        }

    } else {
        closeModal();
    }
})

search.addEventListener('keyup', () => {
    const note = document.querySelectorAll('.note');
    const input = search.value.toUpperCase();
    for (let i = 0; i < note.length; i++) {
        let card = note[i];
        card.innerHTML.toUpperCase().indexOf(input) > -1 ? note[i].style.display = '' : note[i].style.display = 'none';
    }
})

headerOnScroll();
displayNotes();
