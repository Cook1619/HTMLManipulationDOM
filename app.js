let btn = document.createElement('button');
let btnText = document.createTextNode('Click me');
btn.appendChild(btnText);
document.body.appendChild(btn);

btn.addEventListener("click", function(){
   alert(document.getElementById('id').value);
})

let div = document.querySelector('div');

div.addEventListener("mouseover", function(){
    div.style.backgroundColor = 'red';
})
div.addEventListener("mouseout", function () {
    div.style.backgroundColor = 'white';
})

let p = document.querySelector('p');

p.addEventListener("click", function(){
    let randcol = "";
    let allchar = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
        randcol += allchar[Math.floor(Math.random() * 16)];
    }
    p.style.color = "#" + randcol;
})

let btn2 = document.createElement('button');
let btn2Text = document.createTextNode('Add my name');
let div2 = document.createElement('div');

btn2.appendChild(btn2Text);
document.body.appendChild(btn2);
document.body.appendChild(div2);

btn2.addEventListener("click", function(){
    let span = document.createElement('span');
    spanTxt = document.createTextNode('Matt');
    span.appendChild(spanTxt);
    div2.appendChild(span);
})

let friends = ['Cody', 'Tom', 'Erik', 'Aaron', 'Mike', 'Mike', 'Ahmed', 'Adam', 'Adamj', 'Jim']

let friend = document.querySelector('#addFriend');
let ul = document.querySelector('ul');

friend.addEventListener("click", function(){
    let li = document.createElement('li');
    ul.appendChild(li);
    for(let i = 0; i < friends.length; i++){
        var liText = document.createTextNode(friends[i]+ " ");
        li.appendChild(liText);
    }
})