import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import LocalSearch from "@/components/shared/search/LocalSearch";
import Filter from "@/components/shared/Filter";
import { HomePageFilters } from "@/constants/filters";
import HomeFilter from "@/components/home/HomeFilter";
import QuestionCard from "@/components/home/QuestionCard";
import NoResult from "@/components/shared/NoResult";

const Home = () => {
  const questions = [
    {
      _id: 1,
      title: "Title",
      tags: [
        { _id: 1, name: "Python" },
        { _id: 2, name: "JS" },
        { _id: 3, name: "C#" },
      ],
      author: "Joe Biden",
      upvotes: 10,
      downvotes: 0,
      views: 243,
      answers: 14,
      createdAt: "2025-01-01T12:00:00.000Z",
    },
    {
      _id: 2,
      title: "Title",
      tags: [
        { _id: 1, name: "Python" },
        { _id: 2, name: "JS" },
        { _id: 3, name: "C#" },
      ],
      author: "Joe Biden",
      upvotes: 10,
      downvotes: 0,
      views: 243,
      answers: 14,
      createdAt: "2025-01-01T12:00:00.000Z",
    },
    {
      _id: 3,
      title: "Title",
      tags: [
        { _id: 1, name: "Python" },
        { _id: 2, name: "JS" },
        { _id: 3, name: "C#" },
      ],
      author: "Joe Biden",
      upvotes: 10,
      downvotes: 0,
      views: 1000000,
      answers: 14,
      createdAt: "2025-01-01T12:00:00.000Z",
    },
  ];
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="max:sm:flex-col mt-11 flex justify-between gap-5 sm:items-center">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClass="min-h-[56px] sm:min-w-[170px]"
          containerClass="hidden max-md:flex"
        />
      </div>

      <HomeFilter />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              createdAt={question.createdAt}
              upvotes={question.upvotes}
              downvotes={question.downvotes}
              answers={question.answers}
              views={question.views}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default Home;
