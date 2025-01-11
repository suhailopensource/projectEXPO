import FacultyCard from '@/components/shared/facultyCards'
import React from 'react'

const page = () => {
    return (
        <div className='flex justify-center items-center flex-wrap gap-4 p-10 flex-col'>
            <div className='flex'>

                <FacultyCard src='https://res.cloudinary.com/dhijs4dq0/image/upload/v1736518120/DR.N.PRAKASH_vhqskp.jpg' name='Dr. N.Prakash' description={<>Professor & Head
                    Department of Information Technology
                    {/* Office No: <strong>044-22759234 Extn. 234</strong> <br></br>
                    Email:<strong>hodit@crescent.education</strong>  */}
                </>
                } />
            </div>
            <div className='flex flex-col gap-4 md:flex md:gap-x-10 md:flex-row'>
                <FacultyCard src='https://res.cloudinary.com/dhijs4dq0/image/upload/v1736518119/MOHAMMED-WAJID-KHAN_fjjmfm.jpg' name='Dr. Mohammed Wajid Khan' description={<>Assistant Professor
                    Department of Information Technology
                    {/* Contact: <strong>81221 97818</strong><br></br>
                    Email: <strong>wajidkhan@crescent.education</strong> */}
                </>} />
                <FacultyCard src='https://res.cloudinary.com/dhijs4dq0/image/upload/v1736518119/Pavithra-Sivaramalingam_znqvir.jpg' name='Mrs. R. Pavithra' description={<>Assistant Professor
                    Department of Information Technology
                    {/* Contact: <strong>87546 01600</strong><br></br>
                    Email: <strong>pavithra@crescent.education</strong> */}

                </>} />
            </div>
        </div>
    )
}

export default page