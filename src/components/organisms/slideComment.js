import React, { useState, useRef } from 'react';
import jwt_decode from 'jwt-decode';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, FormGroup } from 'reactstrap';
import { List } from 'react-content-loader';
import alert from 'sweetalert2';
// import toastr from '../../utils/toastr';
import { useDispatch } from 'react-redux';
import { createComment, getRecipeComments } from '../../redux/action/comment';
import Default from '../../assets/img/user.jpg';

const Section = styled.section`
   margin: 0 auto;
   margin-top: 40px;
   max-width: 900px;
`;

const Textarea = styled.textarea`
   background-color: #f6f5f4;
   border: none;
   font-family: 'Airbnb Cereal App Medium';
   border-radius: 10px;
   color: #666666;
   height: 350px;

   @media screen and (max-width: 576px) {
      height: 200px;
   }
`;

const Button = styled.button`
   width: 35%;
   height: 50px;
   border: 0;
   border-radius: 7px;
   background-color: #efc81a;
   color: #ffffff;
   margin: 30px 0 10px 0;

   &:hover {
      background-color: #cea905;
      box-shadow: var(--shadow-black-300);
   }

   @media screen and (max-width: 576px) {
      width: 60%;
   }
`;

const Profile = styled.img`
   max-width: 65px;
   min-width: 65px;
   max-height: 65px;
   min-height: 65px;
   object-fit: cover;
   object-position: center;
`;

const Info = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding-left: 20px;
`;

const Detail = styled.div`
   margin: 0 auto;
   margin-top: 40px;
   max-width: 900px;
`;

const Item = styled.h3`
   font-family: 'Airbnb Cereal App Medium';
   color: var(--color-3);
   margin-bottom: 20px;
`;

function Comment({ comments }) {
   const token = localStorage.getItem('token');
   const decoded = jwt_decode(token);
   const { id } = useParams();
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [isLoading, setIsLoading] = useState(false);
   const input = useRef(null);
   const [text, setText] = useState('');
   const id_user = decoded.id_users;
   const id_recipe = id;

   const handleSubmit = (e) => {
      e.preventDefault();
      setIsLoading(true);

      createComment({ id_user, id_recipe, text })
         .then(() => {
            input.current.value = '';
            dispatch(getRecipeComments(id, navigate));
         })
         .catch((err) => {
            alert('Error!', err.response.data.message, 'error');
         })
         .finally(() => {
            setIsLoading(false);
         });
   };

   return (
      <>
         <Section>
            <Form onSubmit={handleSubmit}>
               <FormGroup>
                  <Textarea
                     className="form-control px-4 py-4"
                     placeholder="Comment :"
                     style={{
                        backgroundColor: '#f6f5f4',
                        border: 'none',
                        outline: 'none',
                        boxShadow: 'none',
                     }}
                     ref={input}
                     onChange={(e) => setText(e.target.value)}
                  />

                  <div className="d-flex justify-content-center">
                     {isLoading ? (
                        <Button disabled>
                           <span
                              className="spinner-border spinner-border-sm"
                              role="status"
                              aria-hidden="true"
                           />
                        </Button>
                     ) : (
                        <Button type="submit">Send</Button>
                     )}
                  </div>
               </FormGroup>
            </Form>
         </Section>
         <Detail>
            <Item>Comment</Item>
            {comments.isLoading ? (
               <List />
            ) : (
               comments.data.map((item, index) => (
                  <div className="d-flex align-items-center mb-3" key={index}>
                     <Profile
                        src={`${process.env.REACT_APP_API_URL}${item.photo}`}
                        alt={item.name}
                        className="rounded-circle"
                        onError={(e) => {
                           e.target.src = Default;
                        }}
                     />
                     <Info className="h-100">
                        <h6>{item.name}</h6>
                        <span>{item.text}</span>
                     </Info>
                  </div>
               ))
            )}
         </Detail>
      </>
   );
}

export default Comment;
