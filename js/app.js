let search =document.getElementById('search');
search.addEventListener('keypress', (e)=>{
// console.log(e.target.value);

let searchUser = e.target.value;
username(searchUser)
});

let Client_ID = 'Iv1.93052166211298ae';//generate client id and client secret otherwise only some users can access data from github
let Client_secret = '5456943d0016f9600ba43078c75780758b1adb72';
//${searchUser}?client_id=${Client_ID}&client_secret=${Client_secret}`//without this limited users can access data from github
//fetch used to fetch data from corresponding api
function username(searchUser) {
window
.fetch(`https://api.github.com/users/${searchUser}?client_id=${Client_ID}&client_secret=${Client_secret}`)
.then(data=>{
    data.json()
    .catch()
    .then(user =>{
        let users =user;
        let output='';
        output+=`
        <ul class="list-group">
        <li class=""list-group-item">
        <h1>${user.login}</h1>
        <img src=${user.avatar_url}/>
        </li>
        </ul>`;

        document.getElementById('template').innerHTML=output;
        // console.log(user);
    }).catch(err=>console.log(err));
})
.catch(err=> console.log(err));
    }