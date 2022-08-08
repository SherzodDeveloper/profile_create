let img = document.getElementsByTagName('img');
let i = 0;
let len = img.length;
while(len){
    let oneImg = img[i];
    oneImg.onclick = () => {
        oneImg.style.border = "solid 2px";
        document.addEventListener('keydown',(event) => {
            var name = event.key;
            var code = event.code;
            if (name === 'Control') {
                return;
            }
            if (code == "Keyc" || code == "KeyC") {
                var src = oneImg.src;
                let inputImg = document.getElementById('img');
                document.getElementById('img').value = src;
            }
        }, false);
    }
    ++i;
    --len;
}
document.getElementById('btn').onclick = () => {
    event.preventDefault();
    let doc = document,
        img = doc.getElementById('img').value,
        name = doc.getElementById('name').value,
        username = doc.getElementById('username').value,
        pass = doc.getElementById('pass').value,
        card = doc.getElementById('card'),
        errorText = doc.getElementById('errorText');
    if(!img.trim() || !name.trim() || !username.trim() || !pass.trim()) {
        errorText.style.display = 'block';
        errorText.textContent = 'Barcha malumotlarni toldiring';
        return;
    }
    let person = {
        'img': img,
        'name': name,
        'username': username,
        'pass': pass,
        inn : function () {
            card.innerHTML = `
            <img style="width:150px;margin-left:30%;margin-top: 10%" src="${this.img}">
            <div class="p-5">
                <h5>Ismingiz</h5> <h4>${this.name}</h4><hr>
                <h5>Login</h5><h4>${this.username}</h4><hr>
                <h5>Parolingiz</h5> <h4>${this.pass}</h4><hr>
            </div>`
            card.getElementById('ism').innerHTML =`${this.name}`

        }
    }
    person.inn();
    errorText.style.display = "none";
}
    