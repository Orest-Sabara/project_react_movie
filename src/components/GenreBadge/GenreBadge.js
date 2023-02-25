import css from './GenreBadge.module.css'

const GenreBadge = ({genre}) => {
    const {name} = genre;
    return (
        <div className={css.GenreBadge}>
            <div className={css.name}>{name}</div>
        </div>
    );
};

export {GenreBadge};