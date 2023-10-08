//  first system
 function reverSting(text){
    let reversed ="";
    for(let i=text.length-1; i >= 0 ; i--){
        const element =text[i];
        reversed=reversed+ element;
        console.log(element, reversed)
    }
    return reversed;
 }
//  console.log(reverSting('i am a student bro'))

// sechond system
 function reverseWord(str){
    const words=str.split(' ');
    const result = [];
    for(let i=words.length-1; i >= 0; i--){
        const element=words[i];
        result.push(element)

    }
    const reversed=result.join(' ');
    return reversed;
 }

 
const MyString ="i am a student bro";
console.log( reverseWord(MyString))