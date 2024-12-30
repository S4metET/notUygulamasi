let notlar = JSON.parse(localStorage.getItem("Notlar")) || [];
function saveNotlar(){
    localStorage.setItem("Notlar", JSON.stringify(notlar));
}
function notEkle(){
    const not = prompt("Bir not gir:");
    if (!not) {
        alert("Geçerli bir not girmedin.");
        return nextAction();
    }
    notlar.push(not);
    saveNotlar();
    alert("Not Eklendi.");
    return nextAction();
}
function notlariListele(){
    if (notlar.length === 0){
        alert("Not eklemedin.");
    }
    else{
        const liste = notlar.map((not, i) => `${i + 1}. ${not}`).join("\n");
        alert(`Notların:\n\n${liste}`);
    }
    return nextAction();
}
function nextAction(){
    const value = prompt("Başka bir işlem yapmak ister misin? (e/h)").toLowerCase();
    if(value === "e"){
        return mainMenu();
    }
    else if(value === "h"){
        alert("Güle güle...");
    }
    else{
        alert("Geçersiz seçim yaptın.");
        return nextAction();
    }
}
function mainMenu(){
    const value = prompt(`Bir işlem seç:\n1- Notları listele\n2- Yeni not ekle\n3- Çıkış yap`);
    if(value === "1"){
        return notlariListele();
    }
    else if (value === "2"){
        return notEkle();
    }
    else if (value === "3"){
        alert("Güle güle...");
    }
    else{
        alert("Geçersiz seçim yaptınız.");
        return mainMenu();
    }
}
mainMenu();
