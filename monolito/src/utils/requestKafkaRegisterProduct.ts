import axios from 'axios';

interface dataRequestKafKaRegister {
  name: string,
  quantity: string,
  price: number,
  code: string,
}

export const postKafkaRegisterProduct = async(data: dataRequestKafKaRegister) => {
    axios.post('http://localhost:3333/register', data)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
}