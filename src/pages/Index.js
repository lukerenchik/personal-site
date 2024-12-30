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
            <Link to="/">Welcome!</Link>
          </h2>

        </div>
      </header>
      <p>
        {' '}
        This website is adapted from {' '}<Link to="https://mldangelo.com/">Michael D&apos;Angelo</Link>'s personal website. Please feel free to read more{' '}
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
