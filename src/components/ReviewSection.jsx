function ReviewSection() {
  return (
    <section  id="reviews" className="reviews">

      <div className="section-header">
        <span>Reviews</span>

        <h2>What Our Customers Say</h2>

        <p>Trusted by homeowners across Ottawa and surrounding areas.</p>
      </div>

      <div className="reviews-grid">

        <div className="review-card">
          <div className="stars">★★★★★</div>

          <p>Called at 8 AM and my garage door was
            repaired before noon. Fast, professional
            and reasonably priced.</p>
          <h4>John D.</h4>
          <span>Kanata</span>
        </div>

        <div className="review-card">
          <div className="stars">★★★★★</div>

          <p>Excellent service. The technician explained
            everything clearly and replaced our broken
            spring the same day.</p>
          <h4>Sarah M.</h4>
          <span>Nepean</span>
        </div>

        <div className="review-card">
          <div className="stars">★★★★★</div>

          <p>We needed an emergency repair late in the
            evening and they arrived quickly. Highly
            recommended.</p>
          <h4>Michael T.</h4>
          <span>Barrhaven</span>
        </div>

      </div>

    </section>
  );
}

export default ReviewSection;