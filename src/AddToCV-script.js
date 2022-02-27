const url = "./cvData.json";

async function getJsonData(){
    const response = await fetch(url,
    {
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
    });
    const data = await response.json();
    const {educations, dates, experienceLocation, experienceDates} = data;
    dataObj = data;
    addEducationData(data[0]);
    addDatesData(data[1]);
    addExpData(data[2]);
    addExpLocationData(data[3]);
    return data;
}

getJsonData();

//Adds cvData.json to different columns/boxes
function addEducationData(eduData){
    for(let i = 0; i < eduData.educations.length; i++){
        document.getElementById("edu-left").innerHTML += "<p>" + eduData.educations[i] + "</p>";
    }
}

function addDatesData(eduData){
    for(let i = 0; i < eduData.dates.length; i++){
        document.getElementById("dates-right").innerHTML += "<p>" + eduData.dates[i] + "</p>";
    }
}

function addExpData(eduData){
    for(let i = 0; i < eduData.experienceLocation.length; i++){
        document.getElementById("location-left").innerHTML += "<p>" + eduData.experienceLocation[i] + "</p>";
    }
}

function addExpLocationData(eduData){
    for(let i = 0; i < eduData.experienceDates.length; i++){
        document.getElementById("dates-exp-right").innerHTML += "<p>" + eduData.experienceDates[i] + "</p>";
    }
}