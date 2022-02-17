const removeCompleted = () => {
  const labels = document.querySelectorAll('label');
  labels.forEach((label) => {
    if (label.classList.contains('checked')) {
      label.parentNode.parentNode.remove();
    }
  });
};

export default removeCompleted;
