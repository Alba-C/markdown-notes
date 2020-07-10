let editorShow = true;

const handlePrettyShow = (e) => {
  e.preventDefault();
  e.stopPropagation();

  console.debug('handlePrettyShow clicked ', editorShow);
  if (editorShow === true) {
    console.debug('handlePrettyShow clicked true', editorShow);
    document.querySelector('.editor').classList.add('editor--hidden');
    document.querySelector('.pretty').classList.remove('pretty--hidden');
    editorShow = !editorShow;
    console.debug('handlePrettyShow clicked true', editorShow);
  } else {
    console.debug('handlePrettyShow clicked else', editorShow);
    document.querySelector('.editor').classList.remove('editor--hidden');
    document.querySelector('.pretty').classList.add('pretty--hidden');
    editorShow = !editorShow;
  }
};

const btnPretty = document.querySelector('.editor__header-button');
const btnEditor = document.querySelector('.pretty__header-button');

btnPretty.addEventListener('click', handlePrettyShow);
btnEditor.addEventListener('click', handlePrettyShow);
