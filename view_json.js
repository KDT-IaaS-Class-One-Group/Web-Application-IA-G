export function view_josn(url, callback) {

  fetch(url)
    .then((res) => res.json())
    .then((data)=>{
      callback(data)
    })}
