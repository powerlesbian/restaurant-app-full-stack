import { useEffect } from "react";
import { context } from '../components/context';
import Router from 'next/router';
import Link from 'next/link';
import Loading from '../components/loading';
import { Button } from 'react-bootstrap';

export default function Success() {
  const { user } = context();

  return (
    <main className='main'>
      <h1 className="title">Success</h1>
      <p className="description">Your account was successfully created.</p>
      <Link href="/">
        <a>
          <Button>Go To Restaurants</Button>
        </a>
      </Link>
    </main>
  );
}