import React from 'react'

function AboutUs() {
  return (
    <div>
      <section className='about-us container border-top'>
        <div className='container-fluid'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
              <h3 className='text-center text-uppercase py-4 text-decoration-underline'>About Us</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis rerum laboriosam dolorem beatae, distinctio placeat quia aperiam. Odit, pariatur nobis quisquam reiciendis cupiditate dicta est reprehenderit distinctio adipisci esse soluta.</p>
              </div>
              <div className='col-lg-6'>
                <img className='img-fluid' src='https://cdni.iconscout.com/illustration/premium/thumb/information-technology-1946894-1651595.png' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs