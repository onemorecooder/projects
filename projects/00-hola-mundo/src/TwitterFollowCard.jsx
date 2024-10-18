import {useState} from "react";

export function TwitterFollowCard({name, userName, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const textButton = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-follow-card-button is-following'
        : 'tw-follow-card-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return (
        <article className='tw-follow-card'>
            <header className='tw-follow-card-header'>
                <img
                    className='tw-follow-card-avatar'
                    alt="avatar"
                    src={`https://unavatar.io/${userName}`}/>
                <div className='tw-follow-card-info'>
                    <strong>{name}</strong>
                    <span className='tw-follow-card-info-username'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button
                    onClick={handleClick}
                    className={buttonClassName}
                >
                    <span className='tw-follow-card-text'>{textButton}</span>
                    <span className='tw-follow-card-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}