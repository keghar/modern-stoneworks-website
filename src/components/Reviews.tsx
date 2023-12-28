import React from "react";
import { Container } from "./Container";
import { Star } from "heroicons-react";
import { Button } from "./Button";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const reviews = [
  {
    id: 1,
    rating: 5,
    content:
      "From beginning to end, Modern Stoneworks was amazing. Explanation of the fabrication for our new island was much appreciated. The installers measured exactly, and installation was timely, efficient, and professional. Our kitchen is  beautiful! Thank you, Ryan, Holly, and the entire crew.",

    author: "Robin Fennig",
  },
  {
    id: 2,
    rating: 5,
    content:
      "We are very pleased with how professional your employees were for the installation of our counter top. Thank you so much!",
    author: "David Williams",
  },
  {
    id: 3,
    rating: 5,
    content:
      "I was extremely happy with the help I received in getting the quartz slabs picked out and the staff at Modern Stoneworks.  Everything they told me regarding the installation was very accurate. I was also told if I wasn't satisfied with any part of the process they would make it right. Holly is so easy to work with and honest to a fault! I'm so glad! I didn't really say much about the guys who did the installation but WOW!!! They were so professional and fast! We were in awe just watching them install our counter tops! You have hired good people! I was extremely happy with the work!!! Everything fit just fine and I really liked not having any seams in the corners.",
    author: "Mary Davenport",
  },
  {
    id: 4,
    rating: 5,
    content:
      "Modern stonework was a delight to work with from start to finish! Holly was thorough in explaining the process, communicating with me throughout  and quick to get me on the schedule for measurements and installation. Joel was efficient and right on point with all the measurements that he took, he was even able to make our kitchen sink, which was too large, work!  And positioned our cuts so we had a nice piece left over for a side table! Douglas did a great job installing and before he left made sure we were pleased with his work. These guys and gals are professional, easy to work with and did a great job! I would highly recommend them for your stone, fabrication and installation!”",

    author: "Julie Jenkins",
  },
  {
    id: 5,
    rating: 5,
    content:
      "From the front desk to the installers Modern Stone Works rocked it. My wife and I are extremely happy with our granite.",

    author: "Jim Burnett",
  },
];

function Reviews() {
  return (
    <Container className="flex flex-col justify-center max-w-screen-xl pb-20 px-4 text-gray-700">
      <h2 className="mx-auto text-4xl md:text-5xl lg:text-6xl pb-16 text-gray-700">
        Reviews
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 space-y-10 lg:space-y-0 px-4 gap-x-4 gap-y-4 md:gap-y-0 md:space-y-0">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex flex-col sm:flex-col lg:flex-col text-gray-700">
            <div className="order-2 sm:mt-0 lg:ml-0 lg:mx-auto lg:px-4">
              <p className="sr-only">{review.rating} out of 5 stars</p>

              <div className="mt-2 space-y-0 text-sm text-gray-600 italic" />
              <p className="italic mb-4 lg:text-lg">
                &quot;{review.content}&quot;
              </p>
            </div>

            <div className="order-1 flex items-center sm:flex-col sm:items-start lg:justify-center lg:px-4">
              <div className="">
                <p className="text-base font-bold underline text-gray-700 lg:text-2xl ">
                  {review.author}
                </p>
                <div className="mt-2 flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <Star
                      key={rating}
                      className={classNames(
                        review.rating > rating
                          ? "text-gray-700"
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
      <Button href="/" className="mx-auto mt-8">
        More Reviews
      </Button>
    </Container>
  );
}

export default Reviews;
