// Here is a list of all the people that will be displayed to the user
// You are NOT permitted to modify this variable or its contents.
const profilesList = [
    {image: "assets/profiles/harold.jpg", name: "Harold", age:"65", occupation: "Golf Expert"},
    {image: "assets/profiles/barbara.jpg", name: "Barbara", age:"24", occupation: "Designer"},
    {image: "assets/profiles/james.jpg", name: "James", age:"25", occupation: "MD Student"},
    {image: "assets/profiles/john.jpg", name: "John", age:"23", occupation: "Engineer"},
    {image: "assets/profiles/linda.jpg", name: "Linda", age:"23", occupation: "Software engineer"},
    {image: "assets/profiles/liz.jpg", name: "Liz", age:"25", occupation: "Photographer"},
    {image: "assets/profiles/mary.jpg", name: "Mary", age:"24", occupation: "High school teacher"},
    {image: "assets/profiles/michael.jpg", name: "Michael", age:"27", occupation: "Freelancer"},
    {image: "assets/profiles/patricia.jpg", name: "Patricia", age:"26", occupation: "Engineer"},
    {image: "assets/profiles/robert.jpg", name: "Robert", age:"30", occupation: "Physician"},
]

// // This is a mandatory function and should not be removed.
function updateProfileUI() {
// @TODO: This function should contain the code to update the profile section of the user interface.
// You are permitted to modify the function parameters, but NOT the name of the function.
}

let currentProfile = profilesList[0];
let getProfile = document.getElementsByClassName("profile");

//this is to hide the premium banner  on BOOST and SUPERLIKE
function hidePremium () {
    document.querySelector("#premium").classList.toggle("hidden");
}

// this is to show the premium banner on BOOST and SUPERLIKE
function showPremium() {
    document.querySelector("#premium").classList.toggle("hidden");
    setTimeout (hidePremium, 1000);
}

// this is to show previous profile
function showPrevious(){

    let flag = false;      //boolean to break out of statement
    
    profilesList.map((item,index) => {

        if(item.name == currentProfile.name && index == 0 && flag == false)
        {
            flag = true;
        }
        else if(item.name == currentProfile.name && flag == false)
        {
            currentProfile = profilesList[index-1];
            flag = true;

            // displaying previous profile
            let profileDiv = document.getElementsByClassName('profile');
            profileDiv[0].childNodes[1].setAttribute("src",currentProfile.image);

            document.getElementsByClassName("name")[0].innerHTML = currentProfile.name;
            document.getElementsByClassName("age")[0].innerHTML = currentProfile.age;
            document.getElementsByClassName("occupation")[0].innerHTML = currentProfile.occupation;
        }
    });

}

// this is to show next profile
function showNext(){

    let flag = false;          // boolean to break out of statement
    document.querySelectorAll(".container.profile");

    profilesList.map((item,index) => {
        
        if(item.name == currentProfile.name && index == profilesList.length-1 && flag == false)
        {
            alert("no next profile");
        }
        else if(item.name == currentProfile.name && flag == false)
        {
            currentProfile = profilesList[index+1];
            flag = true;
            
            // displaying next profile
            let profileDiv = document.getElementsByClassName('profile');
            profileDiv[0].childNodes[1].setAttribute("src",currentProfile.image);

            document.getElementsByClassName("name")[0].innerHTML = currentProfile.name;
            document.getElementsByClassName("age")[0].innerHTML = currentProfile.age;
            document.getElementsByClassName("occupation")[0].innerHTML = currentProfile.occupation;
        }
    });
}

// this is to remove the profile
function removeProfile(){
    
    let profileNum = profilesList.indexOf(currentProfile);
    if(profileNum === -1)
    {
        document.querySelector("#error").classList.toggle("hidden");   
    } else
    {
        if(profilesList[profileNum+1] != null || profilesList[profileNum+1] != undefined)
        {
            currentProfile = profilesList[profileNum+1];
            profilesList.splice(profileNum,1);
        }
        else
        {
            currentProfile = profilesList[profileNum-1];
            profilesList.splice(profileNum,1);
        }

        //removing profile
        let profileDiv = document.getElementsByClassName('profile');
        profileDiv[0].childNodes[1].setAttribute("src",currentProfile.image);

        document.getElementsByClassName("name")[0].innerHTML = currentProfile.name;
        document.getElementsByClassName("age")[0].innerHTML = currentProfile.age;
        document.getElementsByClassName("occupation")[0].innerHTML = currentProfile.occupation;
    }
}


// Click Handlers
document.querySelector('#btn-rewind').addEventListener('click', showPrevious);
document.querySelector('#btn-nope').addEventListener('click', removeProfile);
document.querySelector('#btn-boost').addEventListener('click', showPremium);
document.querySelector('#btn-superlike').addEventListener('click', showPremium);
document.querySelector('#btn-like').addEventListener('click', showNext);