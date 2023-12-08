import React from "react";
import { Container } from "./Container";
import { Star } from "heroicons-react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const reviews = [
  {
    id: 1,
    rating: 5,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro repellat numquam perspiciatis aliquam praesentium repudiandae alias modi corrupti consectetur minus?",
    author: "John Jones",
  },
  {
    id: 2,
    rating: 5,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda provident aliquid magni! Delectus neque odio omnis odit quia eum magni!",
    author: "Blake Reid",
  },
  {
    id: 3,
    rating: 5,
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nobis sit magnam excepturi dignissimos inventore repellendus illo natus modi corporis.",
    author: "Ben Russel",
  },
];

function Reviews() {
  return (
    <Container className="flex flex-col justify-center max-w-screen-xl pb-20">
      <h2 className="mx-auto text-3xl pb-10">Reviews</h2>

      <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex flex-col sm:flex-row lg:flex-col">
            <div className="order-2 mt-6 sm:ml-16 sm:mt-0 lg:ml-0 lg:mx-auto lg:px-4">
              <h3 className="text-sm font-medium text-gray-900"></h3>
              <p className="sr-only">{review.rating} out of 5 stars</p>

              <div className="mt-3 space-y-6 text-sm text-gray-600" />
              <p>{review.content}</p>
            </div>

            <div className="order-1 flex items-center sm:flex-col sm:items-start lg:justify-center lg:px-4">
              <div className="ml-4 lg:ml-0 sm:ml-0 sm:mt-4">
                <p className="text-sm font-medium text-gray-900">
                  {review.author}
                </p>
                <div className="mt-2 flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <Star
                      key={rating}
                      className={classNames(
                        review.rating > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Reviews;
