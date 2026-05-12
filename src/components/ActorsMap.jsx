import { useEffect, useState } from "react"

export default function ActorsMap({ male_actors, actors, setActors }) {

    useEffect(() => {

        fetch(male_actors)
            .then(rep => rep.json())
            .then(actor => {
                setActors(actor)
            })

    })

    return (
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
    )
}