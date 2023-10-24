import {useState} from "react";
import {useForm} from "react-hook-form";

import {commentsService} from "../../services";
import styles from '../../styles/Form.module.css'

export const CommentsForm = ({setComments}) => {
    const {register, handleSubmit, reset} = useForm()
    const [createdComment, setCreatedComment] = useState(null)

    const onSubmit = async (comment) => {
        const {data} = await commentsService.postComment(comment)
        setComments(prevState => [...prevState.reverse(), data])

        setCreatedComment(comment)
        reset()
    }

    return (
        <div className={styles.wrapper}>
            {
                createdComment ? <h3> {createdComment.name} posted </h3> : <h3> Post Comment</h3>
            }
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type={"number"} placeholder={'postId'} {...register('postId')} required={true}/>
                <input type={"text"} placeholder={'title'} {...register('title')} required={true}/>
                <input type={"text"} placeholder={'email'} {...register('email')} required={true}/>
                <input type={"text"} placeholder={'body'} {...register('body')} required={true}/>
                <button>Post</button>
            </form>
        </div>
    );
};