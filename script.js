const apiId=`dae57badf1540963352a248f901227f7`;
        searchWeather=() =>{
           let city= document.getElementById("search-city").value;
           fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiId}&units=metric`)
            .then(res => res.json())
            // .then(data =>console.log(data));
            .then(data => setWeather(data));
            
        }

        setInnerText=(id,value)=>{
            let text  = document.getElementById(id);
            text.innerText=value;
        }
        
        setWeather =(data)=>{
            setInnerText('city-name',data.name);
            setInnerText('city-temperature',data.main.temp);
            setInnerText('city-weather',data.weather[0].main);

            const image= data.weather[0].icon;
            
            const url=`https://openweathermap.org/img/wn/${image}@2x.png`;
            document.getElementById('weather-image').setAttribute('src',url);
            document.getElementById("search-city").value='';
        }