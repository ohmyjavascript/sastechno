import { Fragment } from 'react';
import { Footer } from '../Footer';

function Layout(props) {
  return (
    <Fragment>
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
