import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import AOS from 'aos';

import User from '../../../assets/icons/user.jpg';
import Default from '../../../assets/img/original.jpg';
import saved from '../../../assets/icons/save.png';
import liked from '../../../assets/icons/liked.png';
import play from '../../../assets/icons/play.png';
import {
   Section,
   Title,
   Author,
   Profile,
   Info,
   Image,
   Icon,
   Saved,
   Liked,
   Item,
   Heading,
   Ingredients,
   Video,
   Play,
} from '../style/detailStyle';

function Detail({ recipes }) {
   const [loading, setLoading] = useState(true);
   const recipe = recipes?.data[0];

   useEffect(() => {
      AOS.init();
      if (recipe) {
         setLoading(false);
      }
   }, [recipe]);
   return (
      <>
         <Section>
            {loading ? (
               <div />
            ) : (
               <>
                  <Title>{recipe.name_recipe}</Title>
                  <Author>
                     <Profile
                        src={User}
                        alt="{user}"
                        className="rounded-circle"
                        onError={(e) => {
                           e.target.src = User;
                        }}
                     />
                     <Info className="h-100">
                        <h6>
                           <Link
                              to={`/profile/${recipe.id_users}`}
                              style={{ color: '#000', textDecoration: 'none' }}
                           >
                              {recipe.name}
                           </Link>
                        </h6>
                        <span title={recipe.date}>
                           {moment(recipe.date).startOf('hour').fromNow()}
                        </span>
                     </Info>
                  </Author>
                  <div className="position-relative mb-7 text-center">
                     <Image
                        src={`https://ricette-dellapp.herokuapp.com/${recipe.images}`}
                        alt={recipe.name_recipe}
                        onError={(e) => {
                           e.target.src = Default;
                        }}
                     />
                     <Icon>
                        <Saved>
                           <img src={saved} alt="Bookmark" />
                        </Saved>
                        <Liked>
                           <img src={liked} alt="Like" />
                        </Liked>
                     </Icon>
                  </div>
                  <Item>
                     <Heading>Ingredients</Heading>
                     <Ingredients>{recipe.ingredients}</Ingredients>
                  </Item>
                  <Item>
                     <Heading>Video Step</Heading>
                     <Link to={`/recipe/video/${recipe.id_recipe}`}>
                        <Video>
                           <Play src={play} alt="Play" />
                        </Video>
                     </Link>
                  </Item>
               </>
            )}
         </Section>
      </>
   );
}

export default Detail;
