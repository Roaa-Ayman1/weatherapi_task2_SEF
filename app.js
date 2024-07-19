const geocode = require("./functions/geocode");
const forcast = require("./functions/forcast");
const country = process.argv[2]

geocode(country, (err, result) => {
    if (err) 
    {
        console.log(err);
    }
    else
    {
        // console.log(result);
        forcast(result.longtude, result.latitude, (err, result) => {
            if (err)
            {
                console.log(err);
            }
            else
            {
                console.log(result);
            }
        })
    }
})