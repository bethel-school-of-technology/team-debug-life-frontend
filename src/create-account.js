
constructor(props) {
    super (props);

    this.state = {
        username: "",
        email : "",
        password: "",
        formErrors: {
            username: "",
            email: "",
            password: ""
        }
    }
}

  handleSubmit = e => {
   e.preventDefault();
  }