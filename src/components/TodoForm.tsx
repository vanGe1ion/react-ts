import React, { useRef, useState } from "react";

interface todoFormProps{
    onAdd(title: string):void
}

export const TodoForm: React.FC<todoFormProps> = (props) => {
    // const [title, setTitle] = useState<string>('');
    const ref = useRef<HTMLInputElement>(null);

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }


    const keyPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter'){
            // console.log(title); 
            // setTitle('');
            props.onAdd(ref.current!.value)
            ref.current!.value = '';
        }
    } 


    return( 
        <div className="input-field mt2">
            <input 
                ref={ref}
                // value={title} 
                // onChange={changeHandler} 
                onKeyPress={keyPressHandler}
                type='text' id='title' 
                placeholder="Наименование задачи"
            />
            <label htmlFor='title' className="active">Наименование задачи</label>
        </div>
    ) 
}