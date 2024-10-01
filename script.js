let btn = document.querySelector("#btn");
let content = document.querySelector("#content");

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text);
    text_speak.rate=1;
    text_speak.pitch=1;
    text_speak.volume=1;
    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    let day=new Date();
    let hours=day.getHours();
    if(hours>=0 && hours<12){
        speak("Good Morning Muazzam");
    }
    else if(hours>=12 && hours<4){
        speak("Good Afternoon Muazzam");
    }
    else{
        speak("Good Evening Muazzam");
    }
}
window.addEventListener('load',()=>{
    wishMe();
})

let speechRecognition= window.speechRecognition || window.webkitSpeechRecognition
let recognition=new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    console.log(event);
    // speak(transcript);
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener('click',()=>{
    recognition.start()
})
function takeCommand(message){
    if(message.includes("hello")||message.includes("hi")){
        speak("Hello Muazzam, what can i do for you?")
    }
    else if(message.includes("who are you")){
        speak("I am virtual assisstant , created by Muazzam")
    }else if(message.includes("open google")){
        speak("Opening google")
        window.open("https://www.google.com","_blank")
    }
    else if(message.includes("open youtube")){
        speak("Opening youtube")
        window.open("https://www.youtube.com","_blank")
    }
    else if(message.includes("open facebook")){
        speak("Opening facebook")
        window.open("https://www.facebook.com","_blank")
    }
    else if(message.includes("open instagram")){
        speak("Opening instagram")
        window.open("https://www.instagram.com","_blank")
    }
    else if(message.includes("open calculator")){
        speak("Opening calculator")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("Opening whatsapp")
        window.open("whatsapp://")
    }
    else if(message.includes("time")){
        speak("The time is "+new Date().toLocaleTimeString(undefined,{hour: '2-digit', minute: '2-digit'}))
    }
    else if(message.includes("date")){
        speak("The date is "+new Date().toLocaleDateString(undefined,{month: 'long', day: 'numeric', year: 'numeric'}))
    }
    else{
        speak(`this is what i found on internet about ${message}`)
        window.open(`https://www.google.com/search?q=${message}`)
    }
    
}
