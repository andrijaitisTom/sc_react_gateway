import axios from 'axios'

const createOrder = () => {
  this.state = { apiResponse: "" }

    axios.get('http://localhost:9000/API')
    .then(res => res.text())
    .then(res => this.setState({ apiResponse: res }));


    
}


export default createOrder;