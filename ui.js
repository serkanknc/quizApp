function UI(){
    this.btn_start = document.querySelector('.btn_start'),
    this.btn_next = document.querySelector('.next_btn'),
    this.btn_replay = document.querySelector('.btn_replay'),
    this.btn_quit = document.querySelector('.btn_quit'),
    this.quiz_box = document.querySelector('.quiz_box'),
    this.score_box = document.querySelector('.score_box'),
    this.option_list = document.querySelector('.option_list'),
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
    this.inCorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>'
    this.time_second = document.querySelector('.time_second'),
    this.time_text = document.querySelector('.time_text'),
    this.time_line = document.querySelector('.time_line')
}


UI.prototype.soruGoster = function (soru){
    let question = `<span>${soru.soruMetin}</span>`;
    let options = ``;

    for(let cevap in soru.cevapSecenekleri){
        options += `
            <div class="option">
                <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
                
            </div>
        `;
    }
    document.querySelector('.question_text').innerHTML = question;
    this.option_list.innerHTML = options;

    const option = this.option_list.querySelectorAll('.option');
    for (let opt of option){
        opt.setAttribute('onclick','optionSelected(this)');
    }
}

UI.prototype.soruSayisiGoster = function(soruSirasi,toplamSayi){
    let tag = `<span class="badge bg-warning">${soruSirasi} / ${toplamSayi}</span>`;

    document.querySelector('.quiz_box .question_index').innerHTML = tag;
}

UI.prototype.skoruGoster = function(toplamSoru,dogruCevapSayisi){
    let tag;
    if(dogruCevapSayisi >0){

        tag=  `<div class="score_text">Toplam ${toplamSoru} sorudan ${dogruCevapSayisi} doğru bildiniz.</div>`;
    }
    else{
        tag =`<div class="score_text">Hiç doğru cevap bilemediniz.</div>`;
    }

    document.querySelector('.score_box .score_text').innerHTML = tag;
}