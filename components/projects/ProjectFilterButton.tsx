"use client";

import { Button } from "../ui/button";

type Props = {
  title: string;
  filterByValue: (value: string) => void;
};

function ProjectFilterButton({ title, filterByValue }: Props) {
  // $ Function to handle the filter by value

  const handleFilterByValue = (title: string) => {
    // $ Filter the items based on the category using the custom hook useFilter
    filterByValue(title);

    // $ Add active class to the clicked button
    const btnElementList = document.querySelectorAll(".btn");
    btnElementList.forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelector(".active")?.classList.remove("active");
        btn.classList.add("active");
        console.log("btnElement", btn);
      });
    });
  };

  return (
    <Button
      onClick={() => handleFilterByValue(title)}
      variant={"default"}
      className="btn hover:bg-blue-400 capitalize"
      size={"lg"}
    >
      {title}
    </Button>
  );
}

export default ProjectFilterButton;
