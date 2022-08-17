import axios from 'axios';

async function suggestionGenerator(userInput) {
    var config = {
        method: 'get',
        url: `https://api.geoapify.com/v1/geocode/autocomplete?text=${userInput}&apiKey=${process.env.REACT_APP_GEOAPIFY_KEY}`,
        headers: {},
    };
    const response = await axios(config);
    if (response.status !== 200) return [];
    const locations = new Set();
    response.data.features.forEach(({ properties }) => {
        let location = '';
        if (properties.name) location += properties.name;
        else if (properties.city) location += properties.city;
        else return;
        if (properties.state) location += ', ' + properties.state;
        if (properties.country) location += ', ' + properties.country;
        locations.add(location);
    });
    return [...locations];
}

export default suggestionGenerator;
