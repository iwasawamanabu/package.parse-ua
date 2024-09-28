/* Class判別
--------------------------------------------------------------------------*/
export const classControl = async (classes) => {
  const htmlElement = document.documentElement;
  await removeUAClassesFromHtml(htmlElement);
  htmlElement.classList.add(...classes);
};

/* remove ua- classes.
--------------------------------------------------------------*/
const removeUAClassesFromHtml = (htmlElement) => {
  const classes = htmlElement.className.split(/\s+/);
  const filteredClasses = classes.filter((cls) => !cls.startsWith('ua-'));
  htmlElement.className = filteredClasses.join(' ');
};
