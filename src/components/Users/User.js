import styles from '../../styles/Card.module.css'

export const User = ({user}) => {
    const {name, username, email, phone, id} = user

    return (
        <div className={styles.card}>
            <h4>User: {id}</h4>
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>
            <div>{phone}</div>
        </div>
    );
};