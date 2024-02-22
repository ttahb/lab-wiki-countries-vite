import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HomePage() {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get('https://ih-countries-api.herokuapp.com/countries')
            .then(resp => setCountries(resp.data))
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="container" style={{ maxHeight: "90vh", overflow: "scroll" }}>
            <h1 style={{ fontSize: "24px" }}>WikiCountries: Your Guide to the World</h1>

            <div className="list-group">
                {
                    countries.map(country => {
                        return (
                            <div className="list-group-item list-group-item-action" key={country._id}>
                                <Link to={`/${country.alpha3Code}`} >
                                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="country-flag" />
                                    <p>{country.name.common}</p>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default HomePage;