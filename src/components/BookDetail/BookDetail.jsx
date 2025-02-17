import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const BookDetail = () => {

    const {bookId} = useParams();

    const data = useLoaderData();

  return (
    <div>
        <h2>Book Detail Page Here</h2>
    </div>
  )
}

export default BookDetail