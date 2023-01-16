const navMenus = document.querySelectorAll('nav a');
const contentEls = document.querySelectorAll('.contents');

const navClick = () => {
  for (let i = 0; i < navMenus.length; i += 1) {
    navMenus[i].addEventListener('click', () => {
      contentEls.forEach((content, idx) => {
        if (idx !== i && content.className.includes('active')) {
          content.classList.remove('active');
        }
      });

      contentEls[i].classList.add('active');
    });
  }
};

export default navClick;
