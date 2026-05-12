import { useState } from "react"

export default function AppMain() {

    const [actors, setActors] = useState([])

    const male_actors = 'https://lanciweb.github.io/demo/api/actors/'
    const female_actresses = 'https://lanciweb.github.io/demo/api/actresses/'

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

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col">

                    </div>
                </div>
            </div>
        </main>
    )
}