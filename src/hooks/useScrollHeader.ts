export const useScrollHeader = () => {
  const scrollHeader = () => {
    const doc = document.documentElement;
    const w = window;

    let prevScroll = w.scrollY || doc.scrollTop;
    let curScroll: number;
    let direction = 0;
    let prevDirection = 0;

    const headerDom = document.getElementById("header");

    const checkScroll = function () {
      /*
       ** Find the direction of scroll
       ** 0 - initial, 1 - up, 2 - down
       */

      curScroll = w.scrollY || doc.scrollTop;
      if (curScroll > prevScroll) {
        //scrolled up
        direction = 2;
      } else if (curScroll < prevScroll) {
        //scrolled down
        direction = 1;
      }

      if (direction !== prevDirection) {
        toggleHeader(direction, curScroll);
      }

      prevScroll = curScroll;
    };

    const toggleHeader = function (direction: number, curScroll: number) {
      if (direction === 2 && curScroll > 40) {
        headerDom?.classList.add("hide");
        prevDirection = direction;
      } else if (direction === 1) {
        headerDom?.classList.remove("hide");
        prevDirection = direction;
      }
    };
    window.addEventListener("scroll", checkScroll);
  };
  return {scrollHeader}
};
