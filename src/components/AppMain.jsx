import { useEffect, useState } from "react"

export default function AppMain() {

    const [actors, setActors] = useState([])

    const male_actors = 'https://lanciweb.github.io/demo/api/actors/'
    const female_actresses = 'https://lanciweb.github.io/demo/api/actresses/'

    useEffect(() => {

        /*         fetch(male_actors)
                    .then(rep => rep.json())
                    .then(actor => {
                        setActors(actor)
                    }) */

        fetch(female_actresses)
            .then(rep => rep.json())
            .then(actor => {
                setActors(actor)
            })

    })


    return (
        <main>
            <div className="container">
                <h1 className="text-center p-3"> Every actors and actresses </h1>
                <div className="row row-cols-3 g-3">
                    {
                        actors.map(actor => (

                            <div className="col-12 col-sm-6 col-md-4">
                                <div className="card" key={actor.id}>
                                    <img src={actor.image} alt="" />
                                    <div className="card-body">
                                        <p><strong> Name: </strong>  {actor.name} </p>
                                        <p><strong> Nationality: </strong>  {actor.nationality} </p>
                                        <p><strong> Birthday: </strong>  {actor.birth_year} </p>
                                        <p><strong> Death: </strong>  {actor.death_year || 'Alive'} </p>
                                        <p><strong> Awards: </strong>  {actor.awards[0]} , {actor.awards[1]} </p>
                                        <p><strong> Biography: </strong>{actor.biography}</p>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </main>
    )
}