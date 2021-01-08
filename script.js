var userPic=document.getElementById("userPic");
var buttonLeft=document.getElementById("Left");
var buttonRight=document.getElementById("Right");
var userReview=document.getElementsByClassName("review");
var userName=document.getElementsByClassName("Name");
var userTitle=document.getElementsByClassName("title");

tanya={
	pictureSrc:"images/image-tanya.jpg",
	name:"Tanya Sinclair",
	title:"UX Engineer",
	review:"i've been interseted in coding for a while but never taken the jump, until now. i couldnt recommend this course enough. i'm now in the job of my dreams and so excited about the future."
}
john={
	pictureSrc:"images/image-john.jpg",
	name:"John Tarkpor",
	title:"Junior Front-End Developer",
	review:"If you want to lay the best foundation possible i'd recommend taking this course. the depth the instructors go into is incredible. I now feel so confident about strating up as a professional developer"

}
var users=[tanya, john];
var userIndex=0;

function ChangePic(){
	userPic.src=users[userIndex].pictureSrc;
	userReview[0].innerText=users[userIndex].review;
	userName[0].innerText=users[userIndex].name;
	userTitle[0].innerText=users[userIndex].title;
}

function NextPic(){
	userIndex++;
	if(userIndex>users.length-1)
	{
	 	userIndex=users.length-1;
	}
	ChangePic();
}
function PrevPic(){
	userIndex--;
	if(userIndex<0)
	{
	 	userIndex=0;
	}
	ChangePic();
}

buttonRight.addEventListener("click",NextPic);
buttonLeft.addEventListener("click",PrevPic);