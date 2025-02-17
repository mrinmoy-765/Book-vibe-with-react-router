import React from 'react'
import { useParams } from 'react-router-dom'

const BookDetail = () => {

    const {bookId} = useParams();

  return (
    <div>
        <h2>Book Detail Page Here</h2>
    </div>
  )
}

export default BookDetail