import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import AuthorCard from '../components/AuthorCard';
import { getAuthors } from '../api/authorData';

function Author() {
  //  Set a state for books
  const [authors, setAuthors] = useState([]);

  //  Get user ID using useAuth Hook
  const { user } = useAuth();

  //  create a function that makes the API call to get all the books
  const getAllTheAuthors = () => {
    getAuthors(user.uid).then(setAuthors);
  };

  // make the call to the API to get all the books on component render
  useEffect(() => {
    getAllTheAuthors();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/author/new" passHref>
        <Button>Add Author</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {/*  map over books here using BookCard component */}
        {authors.map((author) => (
          <AuthorCard key={author.firebaseKey} authorObj={author} onUpdate={getAllTheAuthors} />
        ))}
      </div>

    </div>
  );
}

export default Author;
