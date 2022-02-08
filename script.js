console.log("I am summary file");
const blogs = document.getElementsByTagName("p");
for(const blog of blogs){
    console.log(blog);
    blog.style.backgroundColor = "darkBlue"
    blog.style.color = "white";
    blog.style.padding = "5px";
    blog.style.margin = "5px";

}

//insert an element
const harun = document.getElementById("special");
harun.innerHTML = `
<h4>Special inner html<h4>
    <div> 
        <ul> 
            <li>hello there</li>
            <li>hello, what's up</li>
        </ul>
    </div>`

//removing a element
const friends = document.getElementById("friends");
console.log(friends.children);
const fifth = friends.children[4]
console.log(fifth);
friends.removeChild(fifth);

//create element
const friend = document.createElement("li");
friend.innerText = "fried -11";
friends.appendChild(friend);







