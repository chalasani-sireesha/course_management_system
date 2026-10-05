import React, { useContext, useState } from "react";
import { CourseProvider } from "../context/CourseContext";
import CourseCard from "../components/CourseCard";

const CourseList = () => {
  const { allCourses } = useContext(CourseProvider);

  const [search, setSearch] = useState("");

  const filteredCourses = allCourses?.filter((course) =>
    course.cName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      {/* Search Bar */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-lg rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>

      {/* Course List */}
      <div className="flex flex-wrap justify-center gap-6">
        {filteredCourses?.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course.id} data={course} />
          ))
        ) : (
          <h2 className="text-xl font-semibold text-gray-500">
            No courses found
          </h2>
        )}
      </div>
    </div>
  );
};

export default CourseList;