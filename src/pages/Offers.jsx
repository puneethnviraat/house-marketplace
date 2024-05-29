import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';
import ListingItem from '../components/ListingItem';

const Offers = () => {
  const [listings, setListings] = useState(null);
  const [loading, setLoding] = useState(true);
  useEffect(() => {
    const fetchListings = async () => {
      try {
        // get reference
        const listingsRef = collection(db, 'listings');

        //create a query
        const q = query(listingsRef, where('offer', '==', true));

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
  }, []);

  return (
    <div className="category">
      <header className="pageHeader">Offers</header>
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
        <p>There are no current offers</p>
      )}
    </div>
  );
};

export default Offers;
