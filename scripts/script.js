async function getData(number){
    let response= await fetch(`https://fakestoreapi.com/products?limit=${number}`)
    let data=await response.json();
    return data;
}

function appendData(data,location){
    data.map(({image,title})=>{
        let photo= document.createElement("img");
        photo.src=image;
        var p=document.createElement("p");
        p.textContent=title;
        location.append(photo,p);
    })
}

export {getData,appendData};