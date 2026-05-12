import { useEffect, useState } from "react"

export default function ActressesMap({ female_actresses, actresses, setActresses }) {

    useEffect(() => {

        fetch(female_actresses)
            .then(rep => rep.json())
            .then(actresses => {
                setActresses(actresses)
            })

    })

    return (
        <div className="row row-cols-3 g-3">
            {
                actresses.map(actresses => (

                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="card" key={actresses.id}>
                            <img src={actresses.image} alt="" />
                            <div className="card-body">
                                <p><strong> Name: </strong>  {actresses.name} </p>
                                <p><strong> Nationality: </strong>  {actresses.nationality} </p>
                                <p><strong> Birthday: </strong>  {actresses.birth_year} </p>
                                <p><strong> Death: </strong>  {actresses.death_year || 'Alive'} </p>
                                <p><strong> Awards: </strong>  {actresses.awards[0]} , {actresses.awards[1]} </p>
                                <p><strong> Biography: </strong>{actresses.biography}</p>
                            </div>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}