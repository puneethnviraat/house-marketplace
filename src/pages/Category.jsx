import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';
import ListingItem from '../components/ListingItem';

const Category = () => {
  const [listings, setListings] = useState(null);
  const [loading, setLoding] = useState(true);

  const params = useParams();
  useEffect(() => {
    const fetchListings = async () => {
      try {
        // get reference
        const listingsRef = collection(db, 'listings');

        //create a query
        const q = query(listingsRef, where('type', '==', params.categoryName));

        //Execute query
        const querySnap = await getDocs(q);

        let listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setListings(listings);
        setLoding(false);
      } catch (error) {
        toast.error('could not fetch listings');
        setLoding(false);
      }
    };
    fetchListings();
  }, [params.categoryName]);

  return (
    <div className="category">
      <header className="pageHeader">
        {params.categoryName === 'rent' ? 'Places for rent' : 'Places for sale'}
      </header>
      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
          <main>
            <ul className="categoryListings">
              {listings.map((listing) => {
                return (
                  <ListingItem
                    key={listing.id}
                    id={listing.id}
                    listing={listing.data}
                  />
                );
              })}
            </ul>
          </main>
        </>
      ) : (
        <p>No lisitngs for {params.categoryName}</p>
      )}
    </div>
  );
};

export default Category;
