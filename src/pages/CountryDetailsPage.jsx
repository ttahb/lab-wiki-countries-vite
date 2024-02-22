import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Border from './../components/Border';

function CountryDetailsPage() {

    const [country, setCountry] = useState(null);
    const { countryId } = useParams();

    useEffect(() => {
        console.log('countryId', countryId);
        axios
            .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            .then(resp => {
                setCountry(resp.data)
            })
            .catch(err => console.log(err))
    }, [countryId]);

    return (
        <div className="container">
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>"Country Details"</p>
            {!country && <h3>Loading...</h3>}
            {country && (
                <>
                    <h1>{country.name.common}</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="country-flag" />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ width: "30%" }}>Capital</td>
                                <td>{country.capital[0]}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>
                                    {country.area} Km
                                    <sup>2</sup>
                                </td>
                            </tr>
                            <tr>
                                <td>Borders</td>
                                <td>
                                    <ul>
                                        {country.borders.map((borderCountry, index) => (
                                            <li key={index}>
                                                <Border border={borderCountry} />
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>
            )}
        </div>

    );
}

export default CountryDetailsPage;
