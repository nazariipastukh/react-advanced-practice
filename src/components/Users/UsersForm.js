import {useState} from "react";
import {useForm} from "react-hook-form";

import {usersService} from "../../services";
import styles from '../../styles/Form.module.css'

export const UsersForm = ({handleAddUser}) => {
    const {register, handleSubmit, reset} = useForm()
    const [createdUser, setCreatedUser] = useState(null)

    const onSubmit = async (user) => {
        await usersService.postUser(user)
        handleAddUser(user)

        user && setCreatedUser(user)
        reset()
    }

    return (
        <div className={styles.wrapper}>
            {
                createdUser ? <h3> {createdUser.name} created </h3> : <h3> Create User </h3>
            }
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type={"text"} placeholder={'name'} {...register('name')} required={true}/>
                <input type={"text"} placeholder={'username'} {...register('username')} required={true}/>
                <input type={"text"} placeholder={'email'} {...register('email')} required={true}/>
                <input type={"text"} placeholder={'phone'} {...register('phone')} required={true}/>
                <button>Create</button>
            </form>
        </div>
    );
};