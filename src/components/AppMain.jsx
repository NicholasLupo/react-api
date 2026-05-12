import ActressesMap from "./ActressesMap"
import ActorsMap from "./ActorsMap"
import { useState } from "react"

export default function AppMain() {

    const [actors, setActors] = useState([])
    const [actresses, setActresses] = useState([])

    const male_actors = 'https://lanciweb.github.io/demo/api/actors/'
    const female_actresses = 'https://lanciweb.github.io/demo/api/actresses/'

    return (
        <main>
            <div className="container">
                <h1 className="text-center p-3"> Every actors and actresses </h1>
                <h3 className="text-center p-3"> Female </h3>
                <ActressesMap female_actresses={female_actresses} actresses={actresses} setActresses={setActresses} />
                <h3 className="text-center p-3"> Male </h3>
                <ActorsMap male_actors={male_actors} actors={actors} setActors={setActors} />
            </div>
        </main>
    )
}