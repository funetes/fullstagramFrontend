import React , {useState} from 'react';
import AuthPresenter from './AuthPresenter';
import useInput from '../../Hooks/useInput';
import 'react-toastify/dist/ReactToastify.css';
import { useMutation } from 'react-apollo-hooks';
import { LOG_IN, CREATE_ACCOUNT, CONFIRM_SECRET, LOCAL_LOG_IN } from './AuthQuery';
import { toast } from 'react-toastify';


export default () => {
  const [action,setAction] = useState('login');
  const username = useInput("");
  const firstname = useInput("");
  const lastname = useInput("");
  const secret = useInput("");
  const email = useInput("");

  const requestSecretMutation = useMutation(LOG_IN,{
    variables:{email: email.value}
  });
  const createAccountMutation = useMutation(CREATE_ACCOUNT,{
    variables:{
      email: email.value,
      username: username.value,
      firstname: firstname.value,
      lastname: lastname.value
    },
  });
  const confirmSecretMutation = useMutation(CONFIRM_SECRET,{
    variables:{
      secret: secret.value,
      email: email.value
    }
  });
  const userLogInMutation = useMutation(LOCAL_LOG_IN);


  const onSubmit = async e => {
    e.preventDefault();
    if(action === "login")
      if(email.value !== ""){
        try{
          const result = await requestSecretMutation();
          const {data:{requestSecret}} = result;
          if(!requestSecret){
            toast.error("we don't have an account. create one");
            setTimeout(()=>setAction("signUp"),3000);
          }else{
            toast.success("check your email.")
            setAction("secret");
          }
        }catch{
          toast.error("secret request fail, try again :(");
        }
      }else{
        toast.error("email is required.");
      }
    else if(action === "signUp" ){
      if(username.value !== "" &&
      firstname.value !== "" &&
      lastname.value !== "" &&
      email.value !== "" ){
        try{
          const result = await createAccountMutation();
          const {data:{createAccount}} = result;
          console.log(createAccount);
          if(!createAccount){
            toast.error("can't create account :(");
          }
          else{
            toast.success("account created :) login now~");
            setTimeout(()=>setAction("login"),3000);
          }
        }catch(error){
          toast.error(error.message);
        }
      } else {
        toast.error("All field are required");
      }
    }
    if(action === 'secret'){
      if(secret.value !== ""){
        try{
          const result = await confirmSecretMutation();
          const {data:{confirmSecret:token}} = result;
          if(token !== "" || token !== undefined){
            userLogInMutation({variables:{token}}); // isLoggedIn = true
          }else{
            throw Error();
          }
        }catch(e){
          console.log(e.message);
          toast.error("can't log in, check again");
        }
      }
    }
  }

  return (<AuthPresenter action = {action}
    setAction = {setAction}
    username = {username}
    firstname = {firstname}
    lastname = {lastname}
    email = {email}
    onSubmit = {onSubmit}
    secret = {secret}
    />)
}