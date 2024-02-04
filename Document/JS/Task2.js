document.body.style.margin="0px"
let maindiv=document.createElement("div");
document.body.append(maindiv)


maindiv.style.height="450vh"
maindiv.style.display="flex"
maindiv.style.flexDirection="column"


let child1=document.createElement("div");
maindiv.appendChild(child1)
let h1=document.createElement("h1");
child1.appendChild(h1)
h1.textContent="Header"
child1.style.height="20vh"
child1.style.display="flex"
child1.style.alignItems="center"
child1.style.justifyContent="center"
child1.style.flexWrap="wrap"
child1.style.backgroundColor="rgb(199,219,255)"

let child2=document.createElement("div");
maindiv.appendChild(child2)
child2.style.height="20vh"
child2.style.display="flex"
child2.style.alignItems="center"
child2.style.justifyContent="center"
let nav=document.createElement("nav")
child2.appendChild(nav)
nav.style.display="flex"
nav.style.justifyContent="center"
nav.style.gap="200px"
nav.style.flexWrap="wrap"
let content=["Home","Gallery","Contact","About"]
for (let i = 0; i < content.length; i++) {
     let ancor=document.createElement("a")
     nav.appendChild(ancor)
     ancor.href=`#${content[i]}`
     ancor.textContent=content[i];
     ancor.style.textDecoration="none"
     ancor.style.fontSize="20px"
     ancor.style.borderRadius="40px"
     ancor.style.padding="25px"
     ancor.style.backgroundColor="rgb(52,53,65)"
     ancor.style.color="white"
}


let child3=document.createElement("div");
maindiv.appendChild(child3)
child3.style.height="100vh"
child3.style.display="flex"
child3.style.alignItems="center"
child3.style.justifyContent="center"
child3.style.gap="100px"
child3.id="Home"

let sub1=document.createElement("div")
child3.appendChild(sub1) 
let sub2=document.createElement("div")
child3.appendChild(sub2) 
sub1.style.height="500px"
sub1.style.width="400px"
sub1.style.backgroundImage='url("../../image/gitar.jpg")'
sub1.style.backgroundSize="cover"
sub1.style.borderRadius="20px"

sub2.style.height="500px"
sub2.style.width="400px"
let video=document.createElement("video")
sub2.appendChild(video)
sub1.style.borderRadius="20px"

video.src="../../video/vid.mp4";
video.controls="controls"
video.style.height="500px"
video.style.width="400px"
video.style.borderRadius="40px"
sub2.style.borderRadius="20px"
sub2.style.backgroundColor="black"


let child4=document.createElement("div");
maindiv.appendChild(child4)
child4.style.height="100vh"
child4.id="Gallery"
child4.style.backgroundImage='url("https://source.unsplash.com/1600x900/?nature,flowers")'

let child5=document.createElement("div");
maindiv.appendChild(child5)
child5.style.height="100vh"
child5.id="Contact"
child5.style.backgroundImage='url("https://source.unsplash.com/1600x900/?nature,animals")'

let child6=document.createElement("div");
maindiv.appendChild(child6)
child6.style.height="100vh"
child6.id="About"
child6.style.backgroundImage='url("https://source.unsplash.com/1600x900/?nature,trees")'


let child7=document.createElement("div");
maindiv.appendChild(child7)
child7.style.height="15vh"
child7.style.display="flex"
child7.style.alignItems="center"
child7.style.justifyContent="center"
child7.style.fontFamily='"Goudy Bookletter 1911", sans-serif'
child7.style.fontSize="35px"
child7.textContent="This is My Footer"
child7.style.backgroundColor="rgb(199,219,255)"