import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Luke Renchik's personal website. Michigan based Oakland University graduate, "
      + 'Engineering Intern at Bosch.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">My Website</Link>
          </h2>

        </div>
      </header>
      <p>
        {' '}
        I want to take some space to thank {' '}<Link to="https://mldangelo.com/">Michael D&apos;Angelo</Link> for creating such an incredible toolkit to showcase my work as a developer, I want to make it clear I did not write this website framework, merely adapted it to my needs. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}
        view <Link to="/stats">site statistics</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
      <p>
        {' '}

      </p>
    </article>
  </Main>
);

export default Index;
