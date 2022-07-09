import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import AOS from 'aos';

function Latest({ recipes }) {
  const [loading, setLoading] = useState(true);
  const recipe = recipes.data[0];

  useEffect(() => {
    AOS.init();
    if (recipe) {
      setLoading(false);
    }
  }, [recipe]);

  return (
    <Section data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
      <TitleSection className="mb-4 mb-md-5">New Recipe</TitleSection>
      {loading ? (
        <div>Loading</div>
      ) : (
        <Row>
          <Col md="6" className="position-relative">
            <Box />
            <NewRecipe
              src={`https://drive.google.com/uc?export=view&id=${recipe.image}`}
              alt={recipe.title}
              onError={(e) => {
              }}
            />
          </Col>
          <Col md="6" className="d-flex flex-column justify-content-center full">
            <TitleNew>{recipe.title}</TitleNew>
            <Border />
            <DetailRecipe>
              Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!
            </DetailRecipe>
            <Button text="learn more" link={`/recipe/${recipe.id}`} />
          </Col>
        </Row>
      )}
    </Section>
  );
}

export default Latest;