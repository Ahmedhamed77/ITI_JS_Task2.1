

function count(){
    let word = prompt("enter your string");
    let searchE = "e";

    let count = 0;

    for(let i = 0 ; i < word.length; i++){
        if(searchE === word[i]){
            count++;
        }
    }
    document.getElementById('result').value = count;
    console.log(count);
}

window.addEventListener('load',function () {
    count();
})