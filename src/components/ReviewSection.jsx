import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function ReviewSection() {

  const reviews = [

    {
      name: "Karim Jalili",
      text:
        "I am incredibly impressed with the work completed by Yunus Construction Global Ltd. The project was completed on time with outstanding craftsmanship, professionalism and attention to detail. Highly recommended.",
    },

    {
      name: "Dim Salikh",
      text:
        "Great job. Thank you!",
    },

    {
      name: "Katie DO",
      text:
        "Thank you very much for your review. It was a pleasure working with you. We truly appreciate your support and look forward to helping you again.",
    },

    {
      name: "Eliya Yamungu",
      text:
        "Excellent service and professional workmanship. Everything was completed efficiently and exactly as promised. Thank you!",
    },

    {
      name: "Reza Mohammadi",
      text:
        "Thank you for the excellent service. Professional, reliable and easy to work with. I highly recommend Yunus Construction Global Ltd.",
    }

  ];

  return (

    <section id="reviews" className="reviews">

      <div className="section-header">

        <span>CLIENT FEEDBACK</span>

        <h2>What Our Customers Say</h2>

        <p>
          Real reviews from our satisfied customers.
        </p>

      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 4500,
        }}
        pagination={{ clickable: true }}

        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
          },
        }}
      >

        {reviews.map((review, index) => (

          <SwiperSlide key={index}>

            <div className="review-card">

              <div className="stars">
                ★★★★★
              </div>

              <p>{review.text}</p>

              <h4>{review.name}</h4>


            </div>

          </SwiperSlide>

        ))}

      </Swiper>

      

    </section>
  );
}

export default ReviewSection;