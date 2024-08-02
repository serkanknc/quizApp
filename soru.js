function Soru(soruMetin,cevapSecenekleri,dogruCevap){
    this.soruMetin = soruMetin;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevapKontrol = function(cevap) {
    return cevap === this.dogruCevap;
}

let sorular = [
    new Soru("1-Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" , d: "Nuget" }, "c"),
    new Soru("2-Hangisi bir Javascript framework'üdür?", { a: "Angular", b: "HTML", c: "CSS", d: "PHP" }, "a"),
    new Soru("3-JavaScript'te değişken tanımlamak için kullanılan anahtar kelimelerden biri nedir?", { a: "let", b: "int", c: "var", d: "float" }, "a"),
    new Soru("4-Hangisi JavaScript dosya uzantısıdır?", { a: ".java", b: ".js", c: ".py", d: ".html" }, "b"),
    new Soru("5-Hangisi JavaScript için bir hata ayıklama aracıdır?", { a: "Postman", b: "Docker", c: "Debugger", d: "Wireshark" }, "c"),
    new Soru("6-JavaScript'te fonksiyon nasıl tanımlanır?", { a: "function myFunction()", b: "def myFunction()", c: "func myFunction()", d: "function: myFunction()" }, "a")

];