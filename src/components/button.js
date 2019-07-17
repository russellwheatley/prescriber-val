cont isValid = //Something??

function ActiveButton({isValid}) {
    const validstyle = isValid ? "btn-primary" : "btn-secondary disabled";
    const validlink = isValid ? "/validated" : "#";
    return (
      <a href={validlink} className={[validstyle,validlink]} > Approve </a>
    );
  }

  ReactDOM.render(
      // how is the validation being piped in?
    <ActiveButton />,
    document.getElementById('root')
  );
  