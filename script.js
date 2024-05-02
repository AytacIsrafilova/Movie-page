let list=document.getElementById("list")
axios("https://api.tvmaze.com/shows")
.then (res=>{
    console.log(res);
    for(let i=0;i <res.data.length;i++)
    {
      list.innerHTML+=
      `<div class="col-md-3">
        <div class="card  text-white bg-dark m-3 p-0  " style="width: 200px; ">
         <img src="${res.data[i].image.medium}" class="card-img-top" alt="movie cover">
         <div class="card-body">
           <h5 class="card-title">${res.data[i].name}</h5>
           <a href="${res.data[i].url}" class="btn btn-primary bg-dark outline-white">Go to movie and see description</a>
         </div>
        </div>
     </div>`
    }
})