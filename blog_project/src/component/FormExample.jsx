

const FormExample = () => {
    const PostFormData = (event)=>{


        event.preventDefault();

        alert('Form Submited')

    }
    return (
        <div>
            <form action="" onSubmit={PostFormData}>

                <input type="text" placeholder='name' />
                <button type='submit'>Submit</button>
            </form>

            
        </div>
    );
};

export default FormExample;