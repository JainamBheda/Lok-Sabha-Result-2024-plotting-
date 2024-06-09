function updateMap()
{
    fetch("/resultdata.json")
    .then(response=>response.json())
    .then(lok=>{
        console.log(lok.data);
        lok.data.forEach(element => {
            latitude=element.latitude;
            longitude=element.longitude;

            //mark
        });
     })
}

updateMap();