import React, { useState } from 'react';

// Dummy data for existing reviews
const existingReviews = [
    { id: 1, rating: 5, comment: "Excellent service!" },
    { id: 2, rating: 4, comment: "Very professional and punctual." },
];

const RatingReview = () => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [reviews, setReviews] = useState(existingReviews);

    const handleRatingChange = (event) => {
        setRating(parseInt(event.target.value));
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (rating > 0 && comment) {
            const newReview = {
                id: reviews.length + 1,
                rating,
                comment,
            };
            setReviews([...reviews, newReview]);
            setRating(0);
            setComment("");
        }
    };

    return (
        <div className="rating-review-container">
            <h2>Rate and Review Technician</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Rating:
                        <select value={rating} onChange={handleRatingChange}>
                            <option value={0}>Select Rating</option>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <option key={star} value={star}>{star}</option>
                            ))}
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Review:
                        <textarea 
                            value={comment} 
                            onChange={handleCommentChange} 
                            required 
                        />
                    </label>
                </div>
                <button type="submit">Submit Review</button>
            </form>
            <div className="reviews-list">
                <h3>Existing Reviews:</h3>
                {reviews.map((review) => (
                    <div key={review.id} className="review-item">
                        <p><strong>Rating:</strong> {review.rating} ⭐</p>
                        <p><strong>Comment:</strong> {review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RatingReview;
