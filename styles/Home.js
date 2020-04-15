import css from 'styled-jsx/css';

export const TopArticlesStyles = css`
  .top-articles {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .top-articles li {
    display: flex;
  }

  :global(.article-title) {
    font-size: 32px;
    width: 40%;
    background: #92E7FA;
    display: flex;
    align-items: center;
    padding: 10px;
    text-decoration: none;
    color: #000;
  }

  .created-date {
    width: 7.5rem;
    height: 7.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .date {
    font-size: 36px;
    line-height: 150%;
  }

  sub {
    font-size: 24px;
    vertical-align: baseline;
  } 
`;
