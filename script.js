
const ui = new UI();
const quiz = new Quiz(sorular);


ui.btn_start.addEventListener('click',function(){
    startTimer(10);
    startTimerLine();
    ui.quiz_box.classList.add('active');
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisiGoster(quiz.soruIndex+1,quiz.sorular.length);
    ui.btn_next.classList.remove('show');

});

ui.btn_next.addEventListener('click',function(){
    if(quiz.sorular.length != quiz.soruIndex+1){
        quiz.soruIndex +=1;
        ui.time_text.textContent = "Kalan Süre";
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(10);
        startTimerLine();
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiGoster(quiz.soruIndex+1,quiz.sorular.length);
        ui.btn_next.classList.remove('show');
    }
    else{
        clearInterval(counter);
        clearInterval(counterLine);
        ui.quiz_box.classList.remove('active');
        ui.score_box.classList.add('active');
        ui.skoruGoster(quiz.sorular.length,quiz.dogruCevapSayisi);
    }
})

ui.btn_quit.addEventListener('click',function(){
    window.location.reload();
});

ui.btn_replay.addEventListener('click',function(){
    quiz.soruIndex = 0;
    quiz.dogruCevapSayisi = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove('active');
});


function optionSelected(option){
    clearInterval(counter);
    clearInterval(counterLine);
    let cevap = option.querySelector('span b').textContent;
    let soru = quiz.soruGetir();

    if(soru.cevapKontrol(cevap)){
        quiz.dogruCevapSayisi +=1;
        option.classList.add('correct');
        option.insertAdjacentHTML('beforeend',ui.correctIcon);
    }
    else{
        option.classList.add('incorrect');
        option.insertAdjacentHTML('beforeend',ui.inCorrectIcon);
    }

    for(i=0; i<ui.option_list.children.length;i++){
        ui.option_list.children[i].classList.add('disabled');
    }

    ui.btn_next.classList.add('show');
}

let counter;
function startTimer(time){
    counter = setInterval(timer,1000);

    function timer(){
        ui.time_second.textContent = time;
        time -=1;

        if(time<0){
            clearInterval(counter);
            ui.time_text.textContent = "Süre Bitti";


            for(let option of ui.option_list.children){
                option.classList.add('disabled');
            }
            ui.btn_next.classList.add('show');

        }
    }
}
let counterLine;
function startTimerLine(){
    let line_width =0;
    counterLine = setInterval(timer,20);

    function timer(){
        line_width +=1;
        ui.time_line.style.width = line_width + 'px';

        if(line_width>549){
            clearInterval(counterLine);
        }
    }
}
