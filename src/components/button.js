cont isValid = //Something??

function ActiveButton(props) {
    return (
      <a className='btn {isValid ? "btn-primary" : "btn-secondary"}' {isValid ? 'href="./something"' : 'href="./something"' }> Approve </a>
    );
  }

  ReactDOM.render(
      // how is the validation being piped in?
    <ActiveButton />,
    document.getElementById('root')
  );
  