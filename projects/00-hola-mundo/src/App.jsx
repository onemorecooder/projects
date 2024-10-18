import './App.css'
import {TwitterFollowCard} from "./TwitterFollowCard.jsx";

const users = [
    {
        userName: 'atorres',
        name: 'Alejandro Torres',
        isFollowing: true
    },
    {
        userName: 'mpiedra',
        name: 'María Piedra',
        isFollowing: true
    },
    {
        userName: 'rcarlos',
        name: 'Roberto Carlos',
        isFollowing: false
    },
    {
        userName: 'pneruda',
        name: 'Pablo Neruda',
        isFollowing: true
    },
    {
        userName: 'abecquer',
        name: 'Adolfo Bécquer',
        isFollowing: true
    }
]

export function App() {
    return (
        <section className="App">
            <h1>A quién seguir</h1>
            {
                users.map(user => {
                    const {userName, name, isFollowing} = user;
                    return (
                        <TwitterFollowCard
                            key={userName}
                            name={name}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}

// COMPONENTE: FUNCIÓN QUE CREA ELEMENTO
// ELEMENTO: LO QUE SE RENDERIZA
// ES UNA MALA PRÁCTICA MODIFICAR UN PROP, DEBEN DE SER INMUTABLES

/*
*
* TABIÉN SE PODRÍA HACER ASÍ PERO TENDRÍAMOS QUE UTILIZAR EL PROPR ESPECIAL "children"
* EN NUESTRO COMPONENTE TwitterFollowCard. SE LE PUEDE METER CUALQUIER COSA, H1, TEXTO PLANO
* INTS, ETC. INCLUSO OTRO COMPONENTE
*
* IMPORTANTE Y EXTENSIBLE, AHÍ ES CUANDO LO UTILIZAREMOS.
*
* <TwitterFollowCard userName="midudev" isFollowing>
*   Antonio Machado
* </TwitterFollowCard>
*
* */