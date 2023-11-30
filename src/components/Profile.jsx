import React from 'react';
import { useGlobalContext } from '../context';

function Profile() {
    const {signOut,user} = useGlobalContext();
    return (
        <div className=' container justify-content-center d-flex align-items-center justify-content-center flex-column py-3'>
            <h2 className=' text-danger '>
                {user.name ? 'Profile' : 'No person'}
            </h2>
            <button className='btn btn-success m-2' onClick={()=>signOut()}>
                Sign out
            </button>
        </div>
    );
}

export default Profile;