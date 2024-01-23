const FormExample = () => {
  const PostFormData = (event) => {
    event.preventDefault();

    alert("Form Submited");
  };
  return (
    <div>
      <form action="" onSubmit={PostFormData}>
        <input type="text" placeholder="name" /> <br />
        <input type="email" placeholder="email" /> <br />
        <input type="text" placeholder="phone number" /> <br />
        <input type="text" placeholder="address" /> <br />
        <button type="submit">Submit</button>
      </form>

     

      
    </div>
  );
};

export default FormExample;
