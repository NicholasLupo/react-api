import { useEffect, useState } from "react"

export default function AppMain() {

    const [actors, setActors] = useState([])

    const male_actors = 'https://lanciweb.github.io/demo/api/actors/'
    const female_actresses = 'https://lanciweb.github.io/demo/api/actresses/'

    useEffect(() => {

        fetch(male_actors)
            .then(rep => rep.json())
            .then(actor => {
                setActors(actor)
            })

        fetch(female_actresses)
            .then(rep => rep.json())
            .then(actor => {
                setActors(actor)
            })

    })


    return (
        <main>
            <div className="container">
                <h1> Every actors and actresses </h1>
                <div className="row row-cols-3">
                    <div className="col">
                        <div className="card" key={actors.id}>
                            <img src={actors.image} alt="" />
                            <div className="card-body">
                                <p> Name: <strong>{actors.name}</strong> </p>
                                <p> Nationality: <strong>{actors.nationality}</strong> </p>
                                <p> Birthday: <strong>{actors.birth_year}</strong> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}