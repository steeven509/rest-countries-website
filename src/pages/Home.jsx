import axios from "axios";
import React, { useState } from "react";
import Card from "../components/Card";

const Home = () => {
    const [data, setData] = useState([]);

    useState(() => {
        axios
            .get("https://restcountries.com/v2/all")
            .then((res) => setData(res.data));
    }, []);

    return (
        <main className="home-page container">
            <div className="home-page-header">
                <div className="search-container">
                    <div className="icon-box">
                        <span className="lnr lnr-magnifier"></span>
                    </div>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Search for a country..."
                        />
                    </div>
                </div>

                <div className="region-box">
                    <select id="region">
                        <option value="africa">Africa</option>
                        <option value="america">America</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Ocenia</option>
                    </select>
                </div>
            </div>

            <section className="home-page-countries">
                <ul className="card-list">
                    {data.map(
                        (
                            { name, capital, region, population, flags },
                            index
                        ) => {
                            return (
                                <Card
                                    key={`${name}-${index}`}
                                    name={name}
                                    capital={capital}
                                    region={region}
                                    population={population}
                                    flags={flags}
                                />
                            );
                        }
                    )}
                </ul>
            </section>
        </main>
    );
};

export default Home;
