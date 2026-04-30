import SectionSvg from "../assets/assets/svg/SectionSvg";
const Section = ({ className, id, crosses, crossesOffset, children }) => {
  return (
    <div
      id={id}
      className={`relative ${crosses ? `lg:mt-2` : ``}${className || ""}`}
    >
      {children}
      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 dark:bg-slate-200 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 dark:bg-slate-200 pointer-events-none md:block lg:right-7.5 xl:right-10" />
      {crosses && (
        <>
          <SectionSvg crossesOffset={crosses} />
          <div
            className={`dark:hidden absolute top-0 left-7.5 right-7.5 h-0.25 dark:bg-stroke-1  ${crossesOffset && crossesOffset} pointer-events-none lg:block xl:left-10 right-10`}
          />
        </>
      )}
    </div>
  );
};
export default Section;
